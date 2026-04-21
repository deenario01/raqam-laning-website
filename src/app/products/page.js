"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ShopGrid() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("/api/data/products")
      .then((r) => r.json())
      .then((d) => setProducts(d.items || []))
      .catch(() => setProducts([]));
  }, []);

  useEffect(() => {
    function handleAddToQuotation(event) {
      const clickable = event.target.closest(
        ".product__items--action__cart--btn, .product__list--action__cart--btn, .quickview__cart--btn"
      );
      if (!clickable) return;
      event.preventDefault();

      const productRoot =
        clickable.closest(
          ".product__items, .product__list--items, .product__details--content, .modal-dialog"
        ) || document;

      const titleEl = productRoot.querySelector(
        
        ".product__items--content__title a, .product__list--items__content--title a, .quickview__product--title a, .quickview__product--title, .product__details--info__title a, .product__details--info__title"
      );
      const name = titleEl ? titleEl.textContent.trim() : "Product";

      const hrefEl = productRoot.querySelector(
        ".product__items--content__title a, .product__list--items__content--title a"
      );
      const href = hrefEl ? hrefEl.getAttribute("href") : "/product-details";

      const priceEl = productRoot.querySelector(
        ".current__price, .product__list--current__price"
      );
      const priceText = priceEl ? priceEl.textContent.replace(/[^0-9.]/g, "") : "0";
      const price = parseFloat(priceText) || 0;

      const imgEl = productRoot.querySelector(
        ".product__items--thumbnail img.product__primary--img, .product__items--thumbnail img, .quickview__thumbnail img"
      );
      const image = imgEl ? imgEl.getAttribute("src") : "/assets/img/product/product1.webp";

      // Read quantity if available near the button (e.g., quickview or details)
      let quantity = 1;
      const qtyInput = productRoot.querySelector(".quantity__number");
      if (qtyInput) {
        const parsed = parseInt(qtyInput.value || qtyInput.getAttribute("value") || qtyInput.defaultValue || "1", 10);
        if (!isNaN(parsed) && parsed > 0) quantity = parsed;
      }

      const item = {
        id: href || name,
        name,
        price,
        image,
        quantity,
        href,
      };

      try {
        const raw = localStorage.getItem("quotationCart");
        const cart = raw ? JSON.parse(raw) : [];
        const index = cart.findIndex((p) => p.id === item.id);
        if (index >= 0) {
          cart[index].quantity = (cart[index].quantity || 1) + 1;
        } else {
          cart.push(item);
        }
        localStorage.setItem("quotationCart", JSON.stringify(cart));
      } catch (e) {
        // ignore storage errors
      }
      try {
        sessionStorage.setItem("quotationFrom", "shop");
      } catch {}
      const targetHref = clickable.getAttribute("href") || "/cart";
      window.location.href = targetHref;
    }

    document.addEventListener("click", handleAddToQuotation);
    return () => document.removeEventListener("click", handleAddToQuotation);
  }, []);
  return (
    <>
      {/* Start offcanvas filter sidebar */}
      <div className="offcanvas__filter--sidebar widget__area">
        <button type="button" className="offcanvas__filter--close">
          <svg
            className="minicart__close--icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>{" "}
          <span className="offcanvas__filter--close__text">Close</span>
        </button>
        <div className="offcanvas__filter--sidebar__inner">
          <div className="single__widget widget__bg">
            <h2 className="widget__title position__relative h3">Search</h2>
            <form className="widget__search--form" action="#">
              <label>
                <input
                  className="widget__search--form__input"
                  placeholder="Search by"
                  type="text"
                />
              </label>
              <button className="widget__search--form__btn" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="single__widget widget__bg">
            <h2 className="widget__title position__relative h3">Categories</h2>
            <ul className="widget__categories--menu">
              <li className="widget__categories--menu__list">
                <label className="widget__categories--menu__label d-flex align-items-center">
                  <img
                    className="widget__categories--menu__img"
                    src="/assets/img/product/small-product1.webp"
                    alt="categories-img"
                  />
                  <span className="widget__categories--menu__text">
                    Denim Jacket
                  </span>
                  <svg
                    className="widget__categories--menu__arrowdown--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.355"
                    height="8.394"
                  >
                    <path
                      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                    />
                  </svg>
                </label>
                <ul className="widget__categories--sub__menu">
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product2.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Jacket, Women
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product3.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Woolend Jacket
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product4.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Western denim
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product5.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Mini Dresss
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="widget__categories--menu__list">
                <label className="widget__categories--menu__label d-flex align-items-center">
                  <img
                    className="widget__categories--menu__img"
                    src="/assets/img/product/small-product2.webp"
                    alt="categories-img"
                  />
                  <span className="widget__categories--menu__text">
                    Oversize Cotton
                  </span>
                  <svg
                    className="widget__categories--menu__arrowdown--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.355"
                    height="8.394"
                  >
                    <path
                      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                    />
                  </svg>
                </label>
                <ul className="widget__categories--sub__menu">
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product2.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Jacket, Women
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product3.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Woolend Jacket
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product4.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Western denim
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product5.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Mini Dresss
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="widget__categories--menu__list">
                <label className="widget__categories--menu__label d-flex align-items-center">
                  <img
                    className="widget__categories--menu__img"
                    src="/assets/img/product/small-product3.webp"
                    alt="categories-img"
                  />
                  <span className="widget__categories--menu__text">
                    Dairy &amp; chesse
                  </span>
                  <svg
                    className="widget__categories--menu__arrowdown--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.355"
                    height="8.394"
                  >
                    <path
                      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                    />
                  </svg>
                </label>
                <ul className="widget__categories--sub__menu">
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product2.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Jacket, Women
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product3.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Woolend Jacket
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product4.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Western denim
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product5.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Mini Dresss
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="widget__categories--menu__list">
                <label className="widget__categories--menu__label d-flex align-items-center">
                  <img
                    className="widget__categories--menu__img"
                    src="/assets/img/product/small-product4.webp"
                    alt="categories-img"
                  />
                  <span className="widget__categories--menu__text">
                    Shoulder Bag
                  </span>
                  <svg
                    className="widget__categories--menu__arrowdown--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.355"
                    height="8.394"
                  >
                    <path
                      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                    />
                  </svg>
                </label>
                <ul className="widget__categories--sub__menu">
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product2.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Jacket, Women
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product3.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Woolend Jacket
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product4.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Western denim
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product5.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Mini Dresss
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="widget__categories--menu__list">
                <label className="widget__categories--menu__label d-flex align-items-center">
                  <img
                    className="widget__categories--menu__img"
                    src="/assets/img/product/small-product5.webp"
                    alt="categories-img"
                  />
                  <span className="widget__categories--menu__text">
                    Denim Jacket
                  </span>
                  <svg
                    className="widget__categories--menu__arrowdown--icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.355"
                    height="8.394"
                  >
                    <path
                      d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                      transform="translate(-6 -8.59)"
                      fill="currentColor"
                    />
                  </svg>
                </label>
                <ul className="widget__categories--sub__menu">
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product2.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Jacket, Women
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product3.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Woolend Jacket
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product4.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Western denim
                      </span>
                    </Link>
                  </li>
                  <li className="widget__categories--sub__menu--list">
                    <Link
                      className="widget__categories--sub__menu--link d-flex align-items-center"
                      href="/products"
                    >
                      <img
                        className="widget__categories--sub__menu--img"
                        src="/assets/img/product/small-product5.webp"
                        alt="categories-img"
                      />
                      <span className="widget__categories--sub__menu--text">
                        Mini Dresss
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="single__widget price__filter widget__bg">
            <h2 className="widget__title position__relative h3">
              Filter By Price
            </h2>
            <form className="price__filter--form" action="#">
              <div className="price__filter--form__inner mb-15 d-flex align-items-center">
                <div className="price__filter--group">
                  <label
                    className="price__filter--label"
                    htmlFor="Filter-Price-GTE2"
                  >
                    From
                  </label>
                  <div className="price__filter--input border-radius-5 d-flex align-items-center">
                    <span className="price__filter--currency">$</span>
                    <input
                      className="price__filter--input__field border-0"
                      id="Filter-Price-GTE2"
                      name="filter.v.price.gte"
                      type="number"
                      placeholder={0}
                      min={0}
                      max={250.0}
                    />
                  </div>
                </div>
                <div className="price__divider">
                  <span>-</span>
                </div>
                <div className="price__filter--group">
                  <label
                    className="price__filter--label"
                    htmlFor="Filter-Price-LTE2"
                  >
                    To
                  </label>
                  <div className="price__filter--input border-radius-5 d-flex align-items-center">
                    <span className="price__filter--currency">$</span>
                    <input
                      className="price__filter--input__field border-0"
                      id="Filter-Price-LTE2"
                      name="filter.v.price.lte"
                      type="number"
                      min={0}
                      placeholder={250.0}
                      max={250.0}
                    />
                  </div>
                </div>
              </div>
              <button className="price__filter--btn primary__btn" type="submit">
                Filter
              </button>
            </form>
          </div>
          <div className="single__widget widget__bg">
            <h2 className="widget__title position__relative h3">
              Dietary Needs
            </h2>
            <ul className="widget__form--check">
              <li className="widget__form--check__list">
                <label className="widget__form--check__label" htmlFor="check6">
                  Denim shirt
                </label>
                <input
                  className="widget__form--check__input"
                  id="check6"
                  type="checkbox"
                />
                <span className="widget__form--checkmark" />
              </li>
              <li className="widget__form--check__list">
                <label className="widget__form--check__label" htmlFor="check7">
                  Need Winter
                </label>
                <input
                  className="widget__form--check__input"
                  id="check7"
                  type="checkbox"
                />
                <span className="widget__form--checkmark" />
              </li>
              <li className="widget__form--check__list">
                <label className="widget__form--check__label" htmlFor="check8">
                  Fashion Trends
                </label>
                <input
                  className="widget__form--check__input"
                  id="check8"
                  type="checkbox"
                />
                <span className="widget__form--checkmark" />
              </li>
              <li className="widget__form--check__list">
                <label className="widget__form--check__label" htmlFor="check9">
                  Oversize Cotton
                </label>
                <input
                  className="widget__form--check__input"
                  id="check9"
                  type="checkbox"
                />
                <span className="widget__form--checkmark" />
              </li>
              <li className="widget__form--check__list">
                <label className="widget__form--check__label" htmlFor="check10">
                  Baking material
                </label>
                <input
                  className="widget__form--check__input"
                  id="check10"
                  type="checkbox"
                />
                <span className="widget__form--checkmark" />
              </li>
            </ul>
          </div>
          <div className="single__widget widget__bg">
            <h2 className="widget__title position__relative h3">
              Top Rated Product
            </h2>
            <div className="product__grid--inner">
              <div className="product__items product__items--grid d-flex align-items-center">
                <div className="product__items--grid__thumbnail position__relative">
                  <Link
                    className="product__items--link"
                    href="/product-details"
                  >
                    <img
                      className="product__items--img product__primary--img"
                      src="/assets/img/product/small-product1.webp"
                      alt="product-img"
                    />
                    <img
                      className="product__items--img product__secondary--img"
                      src="/assets/img/product/small-product2.webp"
                      alt="product-img"
                    />
                  </Link>
                </div>
                <div className="product__items--grid__content">
                  <h3 className="product__items--content__title h4">
                    <Link href="/product-details">Modern Chair</Link>
                  </h3>
                  <div className="product__items--price">
                    <span className="current__price">$165.00</span>
                  </div>
                  <div className="product__items--color">
                    <ul className="product__items--color__wrapper d-flex">
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link one"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link two"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link three"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link four"
                          href="javascript:void(0)"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="product__items product__items--grid d-flex align-items-center">
                <div className="product__items--grid__thumbnail position__relative">
                  <Link
                    className="product__items--link"
                    href="/product-details"
                  >
                    <img
                      className="product__items--img product__primary--img"
                      src="/assets/img/product/small-product3.webp"
                      alt="product-img"
                    />
                    <img
                      className="product__items--img product__secondary--img"
                      src="/assets/img/product/small-product4.webp"
                      alt="product-img"
                    />
                  </Link>
                </div>
                <div className="product__items--grid__content">
                  <h3 className="product__items--content__title h4">
                    <Link href="/product-details">Plastic Chair</Link>
                  </h3>
                  <div className="product__items--price">
                    <span className="current__price">$165.00</span>
                  </div>
                  <div className="product__items--color">
                    <ul className="product__items--color__wrapper d-flex">
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link one"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link two"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link three"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link four"
                          href="javascript:void(0)"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="product__items product__items--grid d-flex align-items-center">
                <div className="product__items--grid__thumbnail position__relative">
                  <Link
                    className="product__items--link"
                    href="/product-details"
                  >
                    <img
                      className="product__items--img product__primary--img"
                      src="/assets/img/product/small-product5.webp"
                      alt="product-img"
                    />
                    <img
                      className="product__items--img product__secondary--img"
                      src="/assets/img/product/small-product6.webp"
                      alt="product-img"
                    />
                  </Link>
                </div>
                <div className="product__items--grid__content">
                  <h3 className="product__items--content__title h4">
                    <Link href="/product-details">Design Rooms</Link>
                  </h3>
                  <div className="product__items--price">
                    <span className="current__price">$165.00</span>
                  </div>
                  <div className="product__items--color">
                    <ul className="product__items--color__wrapper d-flex">
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link one"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link two"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link three"
                          href="javascript:void(0)"
                        />
                      </li>
                      <li className="product__items--color__list">
                        <Link
                          className="product__items--color__link four"
                          href="javascript:void(0)"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single__widget widget__bg">
            <h2 className="widget__title position__relative h3">Brands</h2>
            <ul className="widget__tagcloud">
              <li className="widget__tagcloud--list">
                <Link className="widget__tagcloud--link" href="/products">
                  Wooden
                </Link>
              </li>
              <li className="widget__tagcloud--list">
                <Link className="widget__tagcloud--link" href="/products">
                  Chair
                </Link>
              </li>
              <li className="widget__tagcloud--list">
                <Link className="widget__tagcloud--link" href="/products">
                  Modern
                </Link>
              </li>
              <li className="widget__tagcloud--list">
                <Link className="widget__tagcloud--link" href="/products">
                  Fabric
                </Link>
              </li>
              <li className="widget__tagcloud--list">
                <Link className="widget__tagcloud--link" href="/products">
                  Shoulder{" "}
                </Link>
              </li>
              <li className="widget__tagcloud--list">
                <Link className="widget__tagcloud--link" href="/products">
                  Winter
                </Link>
              </li>
              <li className="widget__tagcloud--list">
                <Link className="widget__tagcloud--link" href="/products">
                  Accessories
                </Link>
              </li>
              <li className="widget__tagcloud--list">
                <Link className="widget__tagcloud--link" href="/products">
                  Dress{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End offcanvas filter sidebar */}
      {/* Start header area */}
      <Header />
      {/* End header area */}
      <main className="main__content_wrapper">
        {/* Start breadcrumb / hero strip */}
        <section className="breadcrumb__section breadcrumb__bg breadcrumb__bg--products">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">
                    Products & Services
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        
        {/* Start Our Services & Range section */}
        <section className="section--padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center mb-5">
                  <h2 className="section__title--desc mb-4">
                    <strong>Our Services & Range</strong>
                  </h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                                                 <p className="section__title--desc" style={{ fontSize: '1.5rem', lineHeight: '1.8', color: '#666' }}>
                             We provide tailored labeling and packaging solutions for every market from ambitious start-ups to large-scale manufacturers. At RAQAM, we go beyond production by embracing our philosophy of "Manufacturing in Harmony with Nature." This means reducing chemical waste, adopting water-based printing technologies, and using eco-friendly materials such as water-soluble plates and inks, ensuring sustainability at every stage.
                           </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Our Services & Range section */}
        
        {/* Start shop section */}
        <section className="shop__section section--padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="shop__product--wrapper">
                  {/* Product Categories Heading */}
                  <div className="row mb-4">
                    <div className="col-12">
                      <h2 className="section__title--desc text-center mb-0">Product Categories</h2>
                    </div>
                  </div>
                  <div className="tab_content">
                    <div id="product_grid" className="tab_pane active show">
                      <div className="product__section--inner product__grid--inner">
                        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-1 mb--n30">
                          {
                            products === null ? (
                              <div className="col-12 text-center py-5">
                                <p>Loading products…</p>
                              </div>
                            ) : (
                              products.map((product) => (
                                <ProductCard product={product} key={product.id} />
                              ))
                            )
                          }
                        </div>
                      </div>
                    </div>
                    <div id="product_list" className="tab_pane">
                      <div className="product__section--inner">
                        <div className="row row-cols-1 mb--n30">
                          <div className="col mb-30">
                            <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                              <div className="product__list--items__left d-flex align-items-center">
                                <div className="product__items--thumbnail product__list--items__thumbnail">
                                  <Link
                                    className="product__items--link"
                                    href="/product-details/modern-fabric-chair">
                                  <img
                                    className="product__items--img product__primary--img"
                                    src="/assets/img/product/product11.webp"
                                    alt="product-img"
                                  />
                                  <img
                                    className="product__items--img product__secondary--img"
                                    src="/assets/img/product/product12.webp"
                                    alt="product-img"
                                    />
                                    <img
                                      className="product__items--img product__secondary--img"
                                      src="/assets/img/product/product10.webp"
                                      alt="product-img"
                                    />
                                  </Link>
                                  <div className="product__badge">
                                    <span className="product__badge--items sale">
                                      Sale
                                    </span>
                                  </div>
                                </div>
                                <div className="product__list--items__content">
                                  <span className="product__items--content__subtitle mb-5">
                                    Wooden
                                  </span>
                                  <h4 className="product__list--items__content--title mb-15">
                                    <Link href="/product-details">
                                      Larger Minimal Wooden Chair
                                    </Link>
                                  </h4>
                                  <p className="product__list--items__content--desc m-0">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia voluptas dolore
                                    doloribus architecto sequi corporis deleniti
                                    officia culpa dolor esse consectetur
                                    eligendi.
                                  </p>
                                </div>
                              </div>
                              <div className="product__list--items__right">
                                <span className="product__list--current__price">
                                  $299.00
                                </span>
                                <ul className="rating product__list--rating d-flex">
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                    <span className="rating__list--text">
                                      ( 5.0)
                                    </span>
                                  </li>
                                </ul>
                                <div className="product__list--action">
                                  <Link
                                    className="product__list--action__cart--btn primary__btn"
                                    href="/cart"
                                  >
                                    <svg
                                      className="product__list--action__cart--btn__icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16.897"
                                      height="17.565"
                                      viewBox="0 0 18.897 21.565"
                                    >
                                      <path
                                        d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                        transform="translate(-2.667 -1.366)"
                                        fill="currentColor"
                                      />
                                    </svg>
                                    <span className="product__list--action__cart--text">
                                      {" "}
                                      Show Details
                                    </span>
                                  </Link>
                                  <ul className="product__list--action__wrapper d-flex align-items-center">
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        data-open="modal1"
                                        href="javascript:void(0)"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="30.51"
                                          height="25.443"
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
                                          Quick View
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/wishlist"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24.403"
                                          height="20.204"
                                          viewBox="0 0 24.403 20.204"
                                        >
                                          <g transform="translate(0)">
                                            <g
                                              data-name="Group 473"
                                              transform="translate(0 0)"
                                            >
                                              <path
                                                data-name="Path 242"
                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                transform="translate(0 -35.514)"
                                                fill="currentColor"
                                              />
                                            </g>
                                          </g>
                                        </svg>
                                        <span className="visually-hidden">
                                          Wishlist
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/compare"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25.654"
                                          height="18.388"
                                          viewBox="0 0 25.654 18.388"
                                        >
                                          <path
                                            data-name="Path 287"
                                            d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                            transform="translate(0 -72.508)"
                                            fill="currentColor"
                                          />
                                        </svg>
                                        <span className="visually-hidden">
                                          Compare
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-30">
                            <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                              <div className="product__list--items__left d-flex align-items-center">
                                <div className="product__items--thumbnail product__list--items__thumbnail">
                                  <Link
                                    className="product__items--link"
                                    href="/product-details/fashion-plastic-chair">
                                  <img
                                    className="product__items--img product__primary--img"
                                    src="/assets/img/product/product1.webp"
                                    alt="product-img"
                                  />
                                  <img
                                    className="product__items--img product__secondary--img"
                                    src="/assets/img/product/product2.webp"
                                    alt="product-img"
                                    />
                                    <img
                                      className="product__items--img product__secondary--img"
                                      src="/assets/img/product/product2.webp"
                                      alt="product-img"
                                    />
                                  </Link>
                                </div>
                                <div className="product__list--items__content">
                                  <span className="product__items--content__subtitle mb-5">
                                    Modern
                                  </span>
                                  <h4 className="product__list--items__content--title mb-15">
                                    <Link href="/product-details">
                                      White Minimalist Combo Sofa
                                    </Link>
                                  </h4>
                                  <p className="product__list--items__content--desc m-0">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia voluptas dolore
                                    doloribus architecto sequi corporis deleniti
                                    officia culpa dolor esse consectetur
                                    eligendi.
                                  </p>
                                </div>
                              </div>
                              <div className="product__list--items__right">
                                <span className="product__list--current__price">
                                  $320.00
                                </span>
                                <ul className="rating product__list--rating d-flex">
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                    <span className="rating__list--text">
                                      ( 5.0)
                                    </span>
                                  </li>
                                </ul>
                                <div className="product__list--action">
                                  <Link
                                    className="product__list--action__cart--btn primary__btn"
                                    href="/cart"
                                  >
                                    <svg
                                      className="product__list--action__cart--btn__icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16.897"
                                      height="17.565"
                                      viewBox="0 0 18.897 21.565"
                                    >
                                      <path
                                        d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                        transform="translate(-2.667 -1.366)"
                                        fill="currentColor"
                                      />
                                    </svg>
                                    <span className="product__list--action__cart--text">
                                      {" "}
                                      Show Details
                                    </span>
                                  </Link>
                                  <ul className="product__list--action__wrapper d-flex align-items-center">
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        data-open="modal1"
                                        href="javascript:void(0)"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="30.51"
                                          height="25.443"
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
                                          Quick View
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/wishlist"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24.403"
                                          height="20.204"
                                          viewBox="0 0 24.403 20.204"
                                        >
                                          <g transform="translate(0)">
                                            <g
                                              data-name="Group 473"
                                              transform="translate(0 0)"
                                            >
                                              <path
                                                data-name="Path 242"
                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                transform="translate(0 -35.514)"
                                                fill="currentColor"
                                              />
                                            </g>
                                          </g>
                                        </svg>
                                        <span className="visually-hidden">
                                          Wishlist
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/compare"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25.654"
                                          height="18.388"
                                          viewBox="0 0 25.654 18.388"
                                        >
                                          <path
                                            data-name="Path 287"
                                            d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                            transform="translate(0 -72.508)"
                                            fill="currentColor"
                                          />
                                        </svg>
                                        <span className="visually-hidden">
                                          Compare
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-30">
                            <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                              <div className="product__list--items__left d-flex align-items-center">
                                <div className="product__items--thumbnail product__list--items__thumbnail">
                                  <Link
                                    className="product__items--link"
                                    href="/product-details/modern-swivel-chair">
                                  <img
                                    className="product__items--img product__primary--img"
                                    src="/assets/img/product/product3.webp"
                                    alt="product-img"
                                  />
                                  <img
                                    className="product__items--img product__secondary--img"
                                    src="/assets/img/product/product4.webp"
                                    alt="product-img"
                                    />
                                    <img
                                      className="product__items--img product__secondary--img"
                                      src="/assets/img/product/product4.webp"
                                      alt="product-img"
                                    />
                                  </Link>
                                  <div className="product__badge">
                                    <span className="product__badge--items sale">
                                      Sale
                                    </span>
                                  </div>
                                </div>
                                <div className="product__list--items__content">
                                  <span className="product__items--content__subtitle mb-5">
                                    Chair
                                  </span>
                                  <h4 className="product__list--items__content--title mb-15">
                                    <Link href="/product-details/modern-swivel-chair">
                                    Modern Swivel Chair
                                    </Link>
                                  </h4>
                                  <p className="product__list--items__content--desc m-0">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia voluptas dolore
                                    doloribus architecto sequi corporis deleniti
                                    officia culpa dolor esse consectetur
                                    eligendi.
                                  </p>
                                </div>
                              </div>
                              <div className="product__list--items__right">
                                <span className="product__list--current__price">
                                  $280.00
                                </span>
                                <ul className="rating product__list--rating d-flex">
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                    <span className="rating__list--text">
                                      ( 5.0)
                                    </span>
                                  </li>
                                </ul>
                                <div className="product__list--action">
                                  <Link
                                    className="product__list--action__cart--btn primary__btn"
                                    href="/cart"
                                  >
                                    <svg
                                      className="product__list--action__cart--btn__icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16.897"
                                      height="17.565"
                                      viewBox="0 0 18.897 21.565"
                                    >
                                      <path
                                        d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                        transform="translate(-2.667 -1.366)"
                                        fill="currentColor"
                                      />
                                    </svg>
                                    <span className="product__list--action__cart--text">
                                      {" "}
                                      Show Details
                                    </span>
                                  </Link>
                                  <ul className="product__list--action__wrapper d-flex align-items-center">
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        data-open="modal1"
                                        href="javascript:void(0)"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="30.51"
                                          height="25.443"
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
                                          Quick View
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/wishlist"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24.403"
                                          height="20.204"
                                          viewBox="0 0 24.403 20.204"
                                        >
                                          <g transform="translate(0)">
                                            <g
                                              data-name="Group 473"
                                              transform="translate(0 0)"
                                            >
                                              <path
                                                data-name="Path 242"
                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                transform="translate(0 -35.514)"
                                                fill="currentColor"
                                              />
                                            </g>
                                          </g>
                                        </svg>
                                        <span className="visually-hidden">
                                          Wishlist
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/compare"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25.654"
                                          height="18.388"
                                          viewBox="0 0 25.654 18.388"
                                        >
                                          <path
                                            data-name="Path 287"
                                            d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                            transform="translate(0 -72.508)"
                                            fill="currentColor"
                                          />
                                        </svg>
                                        <span className="visually-hidden">
                                          Compare
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-30">
                            <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                              <div className="product__list--items__left d-flex align-items-center">
                                <div className="product__items--thumbnail product__list--items__thumbnail">
                                  <Link
                                    className="product__items--link"
                                    href="/product-details/design-living-sofa">
                                  <img
                                    className="product__items--img product__primary--img"
                                    src="/assets/img/product/product5.webp"
                                    alt="product-img"
                                  />
                                  <img
                                    className="product__items--img product__secondary--img"
                                    src="/assets/img/product/product6.webp"
                                    alt="product-img"
                                    />
                                    <img
                                      className="product__items--img product__secondary--img"
                                      src="/assets/img/product/product6.webp"
                                      alt="product-img"
                                    />
                                  </Link>
                                </div>
                                <div className="product__list--items__content">
                                  <span className="product__items--content__subtitle mb-5">
                                    Wooden
                                  </span>
                                  <h4 className="product__list--items__content--title mb-15">
                                    <Link href="/product-details">
                                      Modern Stylish Single Sofa
                                    </Link>
                                  </h4>
                                  <p className="product__list--items__content--desc m-0">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia voluptas dolore
                                    doloribus architecto sequi corporis deleniti
                                    officia culpa dolor esse consectetur
                                    eligendi.
                                  </p>
                                </div>
                              </div>
                              <div className="product__list--items__right">
                                <span className="product__list--current__price">
                                  $255.00
                                </span>
                                <ul className="rating product__list--rating d-flex">
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                    <span className="rating__list--text">
                                      ( 5.0)
                                    </span>
                                  </li>
                                </ul>
                                <div className="product__list--action">
                                  <Link
                                    className="product__list--action__cart--btn primary__btn"
                                    href="/cart"
                                  >
                                    <svg
                                      className="product__list--action__cart--btn__icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16.897"
                                      height="17.565"
                                      viewBox="0 0 18.897 21.565"
                                    >
                                      <path
                                        d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                        transform="translate(-2.667 -1.366)"
                                        fill="currentColor"
                                      />
                                    </svg>
                                    <span className="product__list--action__cart--text">
                                      {" "}
                                      Show Details
                                    </span>
                                  </Link>
                                  <ul className="product__list--action__wrapper d-flex align-items-center">
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        data-open="modal1"
                                        href="javascript:void(0)"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="30.51"
                                          height="25.443"
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
                                          Quick View
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/wishlist"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24.403"
                                          height="20.204"
                                          viewBox="0 0 24.403 20.204"
                                        >
                                          <g transform="translate(0)">
                                            <g
                                              data-name="Group 473"
                                              transform="translate(0 0)"
                                            >
                                              <path
                                                data-name="Path 242"
                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                transform="translate(0 -35.514)"
                                                fill="currentColor"
                                              />
                                            </g>
                                          </g>
                                        </svg>
                                        <span className="visually-hidden">
                                          Wishlist
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/compare"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25.654"
                                          height="18.388"
                                          viewBox="0 0 25.654 18.388"
                                        >
                                          <path
                                            data-name="Path 287"
                                            d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                            transform="translate(0 -72.508)"
                                            fill="currentColor"
                                          />
                                        </svg>
                                        <span className="visually-hidden">
                                          Compare
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-30">
                            <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                              <div className="product__list--items__left d-flex align-items-center">
                                <div className="product__items--thumbnail product__list--items__thumbnail">
                                  <Link
                                    className="product__items--link"
                                    href="/product-details/plastic-chair-wooden">
                                  <img
                                    className="product__items--img product__primary--img"
                                    src="/assets/img/product/product7.webp"
                                    alt="product-img"
                                  />
                                  <img
                                    className="product__items--img product__secondary--img"
                                    src="/assets/img/product/product8.webp"
                                    alt="product-img"
                                    />
                                    <img
                                      className="product__items--img product__secondary--img"
                                      src="/assets/img/product/product8.webp"
                                      alt="product-img"
                                    />
                                  </Link>
                                  <div className="product__badge">
                                    <span className="product__badge--items sale">
                                      Sale
                                    </span>
                                  </div>
                                </div>
                                <div className="product__list--items__content">
                                  <span className="product__items--content__subtitle mb-5">
                                    Plastic
                                  </span>
                                  <h4 className="product__list--items__content--title mb-15">
                                    <Link href="/product-details">
                                      New Furniture Tree Planet
                                    </Link>
                                  </h4>
                                  <p className="product__list--items__content--desc m-0">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia voluptas dolore
                                    doloribus architecto sequi corporis deleniti
                                    officia culpa dolor esse consectetur
                                    eligendi.
                                  </p>
                                </div>
                              </div>
                              <div className="product__list--items__right">
                                <span className="product__list--current__price">
                                  $275.00
                                </span>
                                <ul className="rating product__list--rating d-flex">
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                    <span className="rating__list--text">
                                      ( 5.0)
                                    </span>
                                  </li>
                                </ul>
                                <div className="product__list--action">
                                  <Link
                                    className="product__list--action__cart--btn primary__btn"
                                    href="/cart"
                                  >
                                    <svg
                                      className="product__list--action__cart--btn__icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16.897"
                                      height="17.565"
                                      viewBox="0 0 18.897 21.565"
                                    >
                                      <path
                                        d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                        transform="translate(-2.667 -1.366)"
                                        fill="currentColor"
                                      />
                                    </svg>
                                    <span className="product__list--action__cart--text">
                                      {" "}
                                      Show Details
                                    </span>
                                  </Link>
                                  <ul className="product__list--action__wrapper d-flex align-items-center">
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        data-open="modal1"
                                        href="javascript:void(0)"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="30.51"
                                          height="25.443"
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
                                          Quick View
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/wishlist"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24.403"
                                          height="20.204"
                                          viewBox="0 0 24.403 20.204"
                                        >
                                          <g transform="translate(0)">
                                            <g
                                              data-name="Group 473"
                                              transform="translate(0 0)"
                                            >
                                              <path
                                                data-name="Path 242"
                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                transform="translate(0 -35.514)"
                                                fill="currentColor"
                                              />
                                            </g>
                                          </g>
                                        </svg>
                                        <span className="visually-hidden">
                                          Wishlist
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/compare"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25.654"
                                          height="18.388"
                                          viewBox="0 0 25.654 18.388"
                                        >
                                          <path
                                            data-name="Path 287"
                                            d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                            transform="translate(0 -72.508)"
                                            fill="currentColor"
                                          />
                                        </svg>
                                        <span className="visually-hidden">
                                          Compare
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col mb-30">
                            <div className="product__items product__list--items border-radius-5 d-flex align-items-center">
                              <div className="product__list--items__left d-flex align-items-center">
                                <div className="product__items--thumbnail product__list--items__thumbnail">
                                  <Link
                                    className="product__items--link"
                                    href="/product-details/folding-tables-chairs">
                                  <img
                                    className="product__items--img product__primary--img"
                                    src="/assets/img/product/product9.webp"
                                    alt="product-img"
                                  />
                                  <img
                                    className="product__items--img product__secondary--img"
                                    src="/assets/img/product/product10.webp"
                                    alt="product-img"
                                    />
                                    <img
                                      className="product__items--img product__secondary--img"
                                      src="/assets/img/product/product10.webp"
                                      alt="product-img"
                                    />
                                  </Link>
                                </div>
                                <div className="product__list--items__content">
                                  <span className="product__items--content__subtitle mb-5">
                                    Wooden
                                  </span>
                                  <h4 className="product__list--items__content--title mb-15">
                                    <Link href="/product-details">
                                      Single Stylish Mini Chair
                                    </Link>
                                  </h4>
                                  <p className="product__list--items__content--desc m-0">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia voluptas dolore
                                    doloribus architecto sequi corporis deleniti
                                    officia culpa dolor esse consectetur
                                    eligendi.
                                  </p>
                                </div>
                              </div>
                              <div className="product__list--items__right">
                                <span className="product__list--current__price">
                                  $310.00
                                </span>
                                <ul className="rating product__list--rating d-flex">
                                  <li className="rating__list">
                                    <span className="rating__list--icon">
                                      <svg
                                        className="rating__list--icon__svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                        width="11.105"
                                        height="11.732"
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
                                    <span className="rating__list--text">
                                      ( 5.0)
                                    </span>
                                  </li>
                                </ul>
                                <div className="product__list--action">
                                  <Link
                                    className="product__list--action__cart--btn primary__btn"
                                    href="/cart"
                                  >
                                    <svg
                                      className="product__list--action__cart--btn__icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16.897"
                                      height="17.565"
                                      viewBox="0 0 18.897 21.565"
                                    >
                                      <path
                                        d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                                        transform="translate(-2.667 -1.366)"
                                        fill="currentColor"
                                      />
                                    </svg>
                                    <span className="product__list--action__cart--text">
                                      {" "}
                                      Show Details
                                    </span>
                                  </Link>
                                  <ul className="product__list--action__wrapper d-flex align-items-center">
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        data-open="modal1"
                                        href="javascript:void(0)"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="30.51"
                                          height="25.443"
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
                                          Quick View
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/wishlist"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24.403"
                                          height="20.204"
                                          viewBox="0 0 24.403 20.204"
                                        >
                                          <g transform="translate(0)">
                                            <g
                                              data-name="Group 473"
                                              transform="translate(0 0)"
                                            >
                                              <path
                                                data-name="Path 242"
                                                d="M17.484,35.514h0a6.858,6.858,0,0,0-5.282,2.44,6.765,6.765,0,0,0-5.282-2.44A6.919,6.919,0,0,0,0,42.434c0,6.549,11.429,12.943,11.893,13.19a.556.556,0,0,0,.618,0c.463-.247,11.893-6.549,11.893-13.19A6.919,6.919,0,0,0,17.484,35.514ZM12.2,54.388C10.41,53.338,1.236,47.747,1.236,42.434A5.684,5.684,0,0,1,6.919,36.75a5.56,5.56,0,0,1,4.757,2.564.649.649,0,0,0,1.05,0,5.684,5.684,0,0,1,10.441,3.12C23.168,47.809,13.993,53.369,12.2,54.388Z"
                                                transform="translate(0 -35.514)"
                                                fill="currentColor"
                                              />
                                            </g>
                                          </g>
                                        </svg>
                                        <span className="visually-hidden">
                                          Wishlist
                                        </span>
                                      </Link>
                                    </li>
                                    <li className="product__list--action__child">
                                      <Link
                                        className="product__list--action__btn"
                                        href="/compare"
                                      >
                                        <svg
                                          className="product__list--action__btn--svg"
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25.654"
                                          height="18.388"
                                          viewBox="0 0 25.654 18.388"
                                        >
                                          <path
                                            data-name="Path 287"
                                            d="M25.47,86.417l-3.334-3.334a.871.871,0,0,0-.62-.257H18.724a.476.476,0,0,0-.337.813l1.833,1.833H17.538l-3.77-3.77,3.77-3.77h2.683l-1.833,1.834a.476.476,0,0,0,.337.812h2.791a.881.881,0,0,0,.62-.257l3.335-3.335a.63.63,0,0,0,0-.887l-1.424-1.424a.376.376,0,1,0-.531.532l1.337,1.336L21.6,79.79a.124.124,0,0,1-.088.036H19.389l1.748-1.748a.526.526,0,0,0-.372-.9H17.382a.376.376,0,0,0-.266.11l-3.88,3.881-.9-.9,4.177-4.177a.633.633,0,0,1,.45-.187h3.8a.526.526,0,0,0,.372-.9L19.39,73.26h2.126a.125.125,0,0,1,.089.037l.665.665a.376.376,0,1,0,.531-.532l-.665-.664a.881.881,0,0,0-.621-.258H18.724a.476.476,0,0,0-.337.812l1.833,1.833H16.962a1.379,1.379,0,0,0-.982.407L11.8,79.737,7.627,75.56a1.38,1.38,0,0,0-.982-.407H.626A.627.627,0,0,0,0,75.78v1.525a.627.627,0,0,0,.626.626H6.069l3.77,3.77-3.77,3.77H.626A.627.627,0,0,0,0,86.1v1.525a.627.627,0,0,0,.626.626H6.644a1.384,1.384,0,0,0,.982-.407L11.8,83.666,13.135,85a.376.376,0,0,0,.531-.531L6.49,77.29a.376.376,0,0,0-.266-.11H.752V75.9H6.644a.633.633,0,0,1,.451.187L17.116,86.114a.376.376,0,0,0,.266.11h3.383a.526.526,0,0,0,.372-.9L19.39,83.578h2.126a.125.125,0,0,1,.089.037l3.246,3.246L21.6,90.107a.125.125,0,0,1-.089.037H19.39L21.137,88.4a.526.526,0,0,0-.372-.9h-3.8a.635.635,0,0,1-.451-.187l-1.605-1.605a.376.376,0,1,0-.531.531l1.606,1.606a1.382,1.382,0,0,0,.982.407H20.22l-1.833,1.833a.476.476,0,0,0,.337.813h2.792a.871.871,0,0,0,.62-.257L25.47,87.3A.628.628,0,0,0,25.47,86.417ZM7.1,87.311a.645.645,0,0,1-.451.187H.752V86.224H6.225a.376.376,0,0,0,.266-.11l3.88-3.88.9.9Z"
                                            transform="translate(0 -72.508)"
                                            fill="currentColor"
                                          />
                                        </svg>
                                        <span className="visually-hidden">
                                          Compare
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End shop section */}
        

        
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
                          Show Details
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
