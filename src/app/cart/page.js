"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [entryPoint, setEntryPoint] = useState("shop");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("quotationCart");
      const parsed = raw ? JSON.parse(raw) : [];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      setItems([]);
    }
    try {
      const from = sessionStorage.getItem("quotationFrom");
      if (from === "details") setEntryPoint("details");
      else setEntryPoint("shop");
      // Clear after reading to avoid stale breadcrumbs on manual nav
      sessionStorage.removeItem("quotationFrom");
    } catch {}
  }, []);

  const p = (cur, del) => (Math.floor(cur / del) + 1) * del;

  function updateQuantity(itemId, delta) {
    setItems((prev) => {
      const next = prev.map((p) => ({ ...p }));
      const idx = next.findIndex((p) => p.id === itemId);
      debugger;
      if (idx >= 0) {
        // const newQty = Math.max(1, (next[idx].quantity || 1) + delta);
        // next[idx].quantity = newQty;
        let newQty = next[idx].quantity + (delta > 0 ? 1 : -1);
        while (newQty % delta) {
          if (delta > 0) newQty++;
          else newQty--;
        }

        next[idx].quantity = newQty > 0 ? newQty : 1;
      }
      try {
        localStorage.setItem("quotationCart", JSON.stringify(next));
        // Dispatch custom event to notify Header component about cart update
        window.dispatchEvent(new CustomEvent('cartUpdated'));
      } catch {}
      return next;
    });
  }

  function removeItem(itemId) {
    setItems((prev) => {
      const next = prev.filter((p) => p.id !== itemId);
      try {
        localStorage.setItem("quotationCart", JSON.stringify(next));
        // Dispatch custom event to notify Header component about cart update
        window.dispatchEvent(new CustomEvent('cartUpdated'));
      } catch {}
      return next;
    });
  }

  function clearCart() {
    try {
      localStorage.removeItem("quotationCart");
      // Dispatch custom event to notify Header component about cart update
      window.dispatchEvent(new CustomEvent('cartUpdated'));
    } catch {}
    setItems([]);
  }
  return (
    <>
      {/* Start header area */}
      <Header />
      {/* End header area */}
      <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container-fluid">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">
                    Shopping Cart
                  </h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items">
                      <Link className="text-white" href="/">
                        Home
                      </Link>
                    </li>
                    {entryPoint === "details" ? (
                      <>
                        <li className="breadcrumb__content--menu__items">
                          <Link className="text-white" href="/products">
                            Products
                          </Link>
                        </li>
                        <li className="breadcrumb__content--menu__items">
                          <Link className="text-white" href="#">
                            Product Details
                          </Link>
                        </li>
                        <li className="breadcrumb__content--menu__items">
                          <span className="text-white">Shopping Cart</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="breadcrumb__content--menu__items">
                          <Link className="text-white" href="/products">
                            Products
                          </Link>
                        </li>
                        <li className="breadcrumb__content--menu__items">
                          <span className="text-white">Shopping Cart</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* cart section start */}
        <section className="cart__section section--padding">
          <div className="container-fluid">
            <div className="cart__section--inner">
              <form action="#">
                <h2 className="cart__title mb-40">Shopping Cart</h2>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="cart__table">
                      <table className="cart__table--inner">
                        <thead className="cart__table--header">
                          <tr className="cart__table--header__items">
                            <th className="cart__table--header__list">
                              Product
                            </th>
                            <th className="cart__table--header__list">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody className="cart__table--body">
                          {items.length === 0 ? (
                            <tr className="cart__table--body__items">
                              <td
                                className="cart__table--body__list"
                                colSpan={4}
                              >
                                <div className="text-center">
                                  Your quotation cart is empty.
                                </div>
                              </td>
                            </tr>
                          ) : (
                            items.map((it) => (
                              <tr
                                className="cart__table--body__items"
                                key={it.id}
                              >
                                <td className="cart__table--body__list">
                                  <div className="cart__product d-flex align-items-center">
                                    <button
                                      className="cart__remove--btn"
                                      aria-label="remove"
                                      type="button"
                                      onClick={() => removeItem(it.id)}
                                    >
                                      <svg
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="16px"
                                        height="16px"
                                      >
                                        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                      </svg>
                                    </button>
                                    <div className="cart__thumbnail">
                                      <Link
                                        href={it.href || "/product-details"}
                                      >
                                        <img
                                          className="border-radius-5"
                                          src={
                                            it.image ||
                                            "/assets/img/product/product1.webp"
                                          }
                                          alt="cart-product"
                                        />
                                      </Link>
                                    </div>
                                    <div className="cart__content">
                                      <h4 className="cart__content--title">
                                        <Link
                                          href={it.href || "/product-details"}
                                        >
                                          {it.name}
                                        </Link>
                                      </h4>
                                    </div>
                                  </div>
                                </td>
                                <td className="cart__table--body__list">
                                  <div className="quantity__box">
                                    <button
                                      type="button"
                                      className="quantity__value quickview__value--quantity decrease"
                                      aria-label="quantity decrease"
                                      value="Decrease Value"
                                      onClick={() => updateQuantity(it.id, -50)}
                                    >
                                      -
                                    </button>
                                    <label>
                                      <input
                                        type="number"
                                        className="quantity__number quickview__value--number"
                                        value={it.quantity || 1}
                                        readOnly
                                      />
                                    </label>
                                    <button
                                      type="button"
                                      className="quantity__value quickview__value--quantity increase"
                                      aria-label="quantity increase"
                                      value="Increase Value"
                                      onClick={() => updateQuantity(it.id, 50)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                      <div className="continue__shopping d-flex justify-content-between">
                        <Link
                          className="continue__shopping--link"
                          href="/products"
                        >
                          Continue shopping
                        </Link>
                        <button
                          className="continue__shopping--clear"
                          type="button"
                          onClick={clearCart}
                        >
                          Clear Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="cart__summary border-radius-10">
                      <div className="cart__note mb-20">
                        <h3 className="cart__note--title">Note</h3>
                        <p className="cart__note--desc">
                          Add special instructions for your seller...
                        </p>
                        <textarea
                          className="cart__note--textarea border-radius-5"
                          defaultValue={""}
                        />
                      </div>
                      <div className="cart__summary--total mb-20">
                        <div className="text-center">
                          <p className="mb-0">
                            <strong>Total Items: {items.length}</strong>
                          </p>
                        </div>
                      </div>
                                             <div className="cart__summary--footer">
                        <ul className="d-flex justify-content-between">
                          <li>
                            <Link
                              className="cart__summary--footer__btn primary__btn checkout"
                              href="/checkout"
                            >
                              Check Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* cart section end */}
      </main>
      {/* Start footer section */}
      <Footer />
      {/* End footer section */}
      {/* Quickview Wrapper */}
      <div className="modal" id="modal1" data-animation="slideInUp">
        <div className="modal-dialog quickview__main--wrapper">
          <header className="modal-header quickview__header">
            <button
              className="close-modal quickview__close--btn"
              aria-label="close modal"
              data-close=""
            >
              ✕{" "}
            </button>
          </header>
          <div className="quickview__inner">
            <div className="row row-cols-lg-2 row-cols-md-2">
              <div className="col">
                <div className="product__details--media">
                  <div className="product__media--preview  swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="/assets/img/product/big-product1.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="/assets/img/product/big-product1.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="/assets/img/product/big-product1.webp"
                              data-gallery="product-media-preview"
                            >
                              <svg
                                className="product__media--view__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                />
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                  d="M338.29 338.29L448 448"
                                />
                              </svg>
                              <span className="visually-hidden">
                                Media Gallery
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="/assets/img/product/big-product2.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="/assets/img/product/big-product2.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="/assets/img/product/big-product2.webp"
                              data-gallery="product-media-preview"
                            >
                              <svg
                                className="product__media--view__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                />
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                  d="M338.29 338.29L448 448"
                                />
                              </svg>
                              <span className="visually-hidden">
                                Media Gallery
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="/assets/img/product/big-product3.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="/assets/img/product/big-product3.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="/assets/img/product/big-product3.webp"
                              data-gallery="product-media-preview"
                            >
                              <svg
                                className="product__media--view__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                />
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                  d="M338.29 338.29L448 448"
                                />
                              </svg>
                              <span className="visually-hidden">
                                Media Gallery
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="/assets/img/product/big-product4.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="/assets/img/product/big-product4.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="/assets/img/product/big-product4.webp"
                              data-gallery="product-media-preview"
                            >
                              <svg
                                className="product__media--view__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                />
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                  d="M338.29 338.29L448 448"
                                />
                              </svg>
                              <span className="visually-hidden">
                                Media Gallery
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="/assets/img/product/big-product5.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="/assets/img/product/big-product5.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="/assets/img/product/big-product5.webp"
                              data-gallery="product-media-preview"
                            >
                              <svg
                                className="product__media--view__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                />
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                  d="M338.29 338.29L448 448"
                                />
                              </svg>
                              <span className="visually-hidden">
                                Media Gallery
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="/assets/img/product/big-product6.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="/assets/img/product/big-product6.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="/assets/img/product/big-product6.webp"
                              data-gallery="product-media-preview"
                            >
                              <svg
                                className="product__media--view__icon--svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.51"
                                height="22.443"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                />
                                <path
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeMiterlimit={10}
                                  strokeWidth={32}
                                  d="M338.29 338.29L448 448"
                                />
                              </svg>
                              <span className="visually-hidden">
                                Media Gallery
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__media--nav swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="/assets/img/product/small-product1.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="/assets/img/product/small-product2.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="/assets/img/product/small-product3.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="/assets/img/product/small-product4.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="/assets/img/product/small-product5.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="/assets/img/product/small-product6.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper__nav--btn swiper-button-next" />
                    <div className="swiper__nav--btn swiper-button-prev" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="quickview__info">
                  <form action="#">
                    <h2 className="product__details--info__title mb-15">
                      Oversize Cotton Dress
                    </h2>
                    <div className="product__details--info__price mb-12">
                      <span className="current__price">$58.00</span>
                      <span className="old__price">$68.00</span>
                    </div>
                    <div className="quickview__info--ratting d-flex align-items-center mb-15">
                      <ul className="rating d-flex justify-content-center">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </li>
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14.105"
                              height="14.732"
                              viewBox="0 0 10.105 9.732"
                            >
                              <path
                                data-name="star - Copy"
                                d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                transform="translate(0 -0.018)"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </li>
                      </ul>
                      <span className="quickview__info--review__text">
                        (5 reviews)
                      </span>
                    </div>
                    <p className="product__details--info__desc mb-15">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      is. Deserunt totam dolores ea numquam labore! Illum magnam
                      totam tenetur fuga quo dolor.
                    </p>
                    <div className="product__variant">
                      <div className="product__variant--list mb-15">
                        <fieldset className="variant__input--fieldset">
                          <legend className="product__variant--title mb-8">
                            Color :
                          </legend>
                          <div className="variant__color d-flex">
                            <div className="variant__color--list">
                              <input
                                id="color-red1"
                                name="color"
                                type="radio"
                                defaultChecked=""
                              />
                              <label
                                className="variant__color--value red"
                                htmlFor="color-red1"
                                title="Red"
                              >
                                <img
                                  className="variant__color--value__img"
                                  src="/assets/img/product/product1.webp"
                                  alt="variant-color-img"
                                />
                              </label>
                            </div>
                            <div className="variant__color--list">
                              <input
                                id="color-red2"
                                name="color"
                                type="radio"
                              />
                              <label
                                className="variant__color--value red"
                                htmlFor="color-red2"
                                title="Black"
                              >
                                <img
                                  className="variant__color--value__img"
                                  src="/assets/img/product/product6.webp"
                                  alt="variant-color-img"
                                />
                              </label>
                            </div>
                            <div className="variant__color--list">
                              <input
                                id="color-red3"
                                name="color"
                                type="radio"
                              />
                              <label
                                className="variant__color--value red"
                                htmlFor="color-red3"
                                title="Pink"
                              >
                                <img
                                  className="variant__color--value__img"
                                  src="/assets/img/product/product7.webp"
                                  alt="variant-color-img"
                                />
                              </label>
                            </div>
                            <div className="variant__color--list">
                              <input
                                id="color-red4"
                                name="color"
                                type="radio"
                              />
                              <label
                                className="variant__color--value red"
                                htmlFor="color-red4"
                                title="Orange"
                              >
                                <img
                                  className="variant__color--value__img"
                                  src="/assets/img/product/product4.webp"
                                  alt="variant-color-img"
                                />
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="product__variant--list mb-15">
                        <fieldset className="variant__input--fieldset">
                          <legend className="product__variant--title mb-8">
                            Weight :
                          </legend>
                          <ul className="variant__size d-flex">
                            <li className="variant__size--list">
                              <input
                                id="weight1"
                                name="weight"
                                type="radio"
                                defaultChecked=""
                              />
                              <label
                                className="variant__size--value red"
                                htmlFor="weight1"
                              >
                                5 kg
                              </label>
                            </li>
                            <li className="variant__size--list">
                              <input id="weight2" name="weight" type="radio" />
                              <label
                                className="variant__size--value red"
                                htmlFor="weight2"
                              >
                                3 kg
                              </label>
                            </li>
                            <li className="variant__size--list">
                              <input id="weight3" name="weight" type="radio" />
                              <label
                                className="variant__size--value red"
                                htmlFor="weight3"
                              >
                                2 kg
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      </div>
                      <div className="quickview__variant--list quantity d-flex align-items-center mb-15">
                        <div className="quantity__box">
                          <button
                            type="button"
                            className="quantity__value quickview__value--quantity decrease"
                            aria-label="quantity value"
                            value="Decrease Value"
                          >
                            -
                          </button>
                          <label>
                            <input
                              type="number"
                              className="quantity__number quickview__value--number"
                              defaultValue={1}
                            />
                          </label>
                          <button
                            type="button"
                            className="quantity__value quickview__value--quantity increase"
                            aria-label="quantity value"
                            value="Increase Value"
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="primary__btn quickview__cart--btn"
                          type="submit"
                        >
                          Add To Cart
                        </button>
                      </div>
                      <div className="quickview__variant--list variant__wishlist mb-15">
                        <Link
                          className="variant__wishlist--icon"
                          href="/wishlist"
                          title="Add to wishlist"
                        >
                          <svg
                            className="quickview__variant--wishlist__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                            />
                          </svg>
                          Add to Wishlist
                        </Link>
                      </div>
                    </div>
                    <div className="quickview__social d-flex align-items-center">
                      <label className="quickview__social--title">
                        Social Share:
                      </label>
                      <ul className="quickview__social--wrapper mt-0 d-flex">
                        <li className="quickview__social--list">
                          <Link
                            className="quickview__social--icon"
                            target="_blank"
                            href="https://www.facebook.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="7.667"
                              height="16.524"
                              viewBox="0 0 7.667 16.524"
                            >
                              <path
                                data-name="Path 237"
                                d="M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z"
                                transform="translate(-960.13 -345.407)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Facebook</span>
                          </Link>
                        </li>
                        <li className="quickview__social--list">
                          <Link
                            className="quickview__social--icon"
                            target="_blank"
                            href="https://twitter.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.489"
                              height="13.384"
                              viewBox="0 0 16.489 13.384"
                            >
                              <path
                                data-name="Path 303"
                                d="M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z"
                                transform="translate(-951.23 -1140.849)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Twitter</span>
                          </Link>
                        </li>
                        <li className="quickview__social--list">
                          <Link
                            className="quickview__social--icon"
                            target="_blank"
                            href="https://www.skype.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.482"
                              height="16.481"
                              viewBox="0 0 16.482 16.481"
                            >
                              <path
                                data-name="Path 284"
                                d="M879,926.615a4.479,4.479,0,0,1,.622-2.317,4.666,4.666,0,0,1,1.676-1.677,4.482,4.482,0,0,1,2.317-.622,4.577,4.577,0,0,1,2.43.678,7.58,7.58,0,0,1,5.048.961,7.561,7.561,0,0,1,3.786,6.593,8,8,0,0,1-.094,1.206,4.676,4.676,0,0,1,.7,2.411,4.53,4.53,0,0,1-.622,2.326,4.62,4.62,0,0,1-1.686,1.686,4.626,4.626,0,0,1-4.756-.075,7.7,7.7,0,0,1-1.187.094,7.623,7.623,0,0,1-7.647-7.647,7.46,7.46,0,0,1,.094-1.187A4.424,4.424,0,0,1,879,926.615Zm4.107,1.714a2.473,2.473,0,0,0,.282,1.234,2.41,2.41,0,0,0,.782.829,5.091,5.091,0,0,0,1.215.565,15.981,15.981,0,0,0,1.582.424q.678.151.979.235a3.091,3.091,0,0,1,.593.235,1.388,1.388,0,0,1,.452.348.738.738,0,0,1,.16.481.91.91,0,0,1-.48.753,2.254,2.254,0,0,1-1.271.321,2.105,2.105,0,0,1-1.253-.292,2.262,2.262,0,0,1-.65-.838,2.42,2.42,0,0,0-.414-.546.853.853,0,0,0-.584-.17.893.893,0,0,0-.669.283.919.919,0,0,0-.273.659,1.654,1.654,0,0,0,.217.782,2.456,2.456,0,0,0,.678.763,3.64,3.64,0,0,0,1.158.574,5.931,5.931,0,0,0,1.639.235,5.767,5.767,0,0,0,2.072-.339,2.982,2.982,0,0,0,1.356-.961,2.306,2.306,0,0,0,.471-1.431,2.161,2.161,0,0,0-.443-1.375,3.009,3.009,0,0,0-1.2-.894,10.118,10.118,0,0,0-1.865-.575,11.2,11.2,0,0,1-1.309-.311,2.011,2.011,0,0,1-.8-.452.992.992,0,0,1-.3-.744,1.143,1.143,0,0,1,.565-.97,2.59,2.59,0,0,1,1.488-.386,2.538,2.538,0,0,1,1.074.188,1.634,1.634,0,0,1,.622.49,3.477,3.477,0,0,1,.414.753,1.568,1.568,0,0,0,.4.594.866.866,0,0,0,.574.2,1,1,0,0,0,.706-.254.828.828,0,0,0,.273-.631,2.234,2.234,0,0,0-.443-1.253,3.321,3.321,0,0,0-1.158-1.046,5.375,5.375,0,0,0-2.524-.527,5.764,5.764,0,0,0-2.213.386,3.161,3.161,0,0,0-1.422,1.083A2.738,2.738,0,0,0,883.106,928.329Z"
                                transform="translate(-878.999 -922)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Skype</span>
                          </Link>
                        </li>
                        <li className="quickview__social--list">
                          <Link
                            className="quickview__social--icon"
                            target="_blank"
                            href="https://www.youtube.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.49"
                              height="11.582"
                              viewBox="0 0 16.49 11.582"
                            >
                              <path
                                data-name="Path 321"
                                d="M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z"
                                transform="translate(-951.269 -1359.8)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Youtube</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quickview Wrapper End */}
      {/* Scroll top bar */}
      <button id="scroll__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 244l144-144 144 144M256 120v292"
          />
        </svg>
      </button>
    </>
  );
}
