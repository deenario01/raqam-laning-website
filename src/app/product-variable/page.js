"use client";

import Link from "next/link";

export default function ProductVariable() {
  return (
    <>
      {/* Start header area */}
      <header className="header__section header__others border-bottom header__transparent mb-30">
        <div className="header__topbar bg__primary">
          <div className="container">
            <div className="header__topbar--inner d-flex align-items-center justify-content-between">
              <div className="header__shipping">
                <p className="header__shipping--text text-white">
                  Get Up To 80% off In your first Offer!
                </p>
              </div>
              <div className="language__currency d-none d-lg-block">
                <ul className="d-flex align-items-center">
                  <li className="language__currency--list">
                    <Link className="account__currency--link text-white" href="#">
                      <img src="assets/img/icon/usd-icon.webp" alt="currency" />
                      <span>Currency</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </Link>
                    <div className="dropdown__currency">
                      <ul>
                        <li className="currency__items">
                          <Link className="currency__text" href="#">
                            CAD
                          </Link>
                        </li>
                        <li className="currency__items">
                          <Link className="currency__text" href="#">
                            CNY
                          </Link>
                        </li>
                        <li className="currency__items">
                          <Link className="currency__text" href="#">
                            EUR
                          </Link>
                        </li>
                        <li className="currency__items">
                          <Link className="currency__text" href="#">
                            GBP
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="language__currency--list">
                    <Link className="language__switcher text-white" href="#">
                      <img
                        className="language__switcher--icon__img"
                        src="assets/img/icon/language-icon.webp"
                        alt="currency"
                      />
                      <span>Language</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </Link>
                    <div className="dropdown__language">
                      <ul>
                        <li className="language__items">
                          <Link className="language__text" href="#">
                            France
                          </Link>
                        </li>
                        <li className="language__items">
                          <Link className="language__text" href="#">
                            Russia
                          </Link>
                        </li>
                        <li className="language__items">
                          <Link className="language__text" href="#">
                            Spanish
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main__header header__sticky">
          <div className="container">
            <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
              <div className="offcanvas__header--menu__open ">
                <Link
                  className="offcanvas__header--menu__open--btn"
                  href="javascript:void(0)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon offcanvas__header--menu__open--svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      strokeWidth={32}
                      d="M80 160h352M80 256h352M80 352h352"
                    />
                  </svg>
                  <span className="visually-hidden">Offcanvas Menu Open</span>
                </Link>
              </div>
              <div className="main__logo">
                <Link className="main__logo--link" href="/">
                  <img
                    className="main__logo--img"
                    src="assets/img/logo/nav-log.webp"
                    alt="logo-img"
                  />
                </Link>
              </div>
              <div className="header__menu d-none d-lg-block">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items style3">
                      <Link className="header__menu--link" href="/">
                        Home <span className="menu__plus--icon">+</span>
                      </Link>
                      <ul className="header__sub--menu">
                        <li className="header__sub--menu__items">
                          <Link
                            href="/"
                            className="header__sub--menu__link"
                          >
                            Home One
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/index-2"
                            className="header__sub--menu__link"
                          >
                            Home Two
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/index-3"
                            className="header__sub--menu__link"
                          >
                            Home Three
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header__menu--items mega__menu--items style3">
                      <Link className="header__menu--link" href="/shop">
                        Shop <span className="menu__plus--icon">+</span>
                      </Link>
                      <ul className="header__mega--menu d-flex">
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column One
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/shop"
                              >
                                Shop Left Sidebar
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/shop-right-sidebar"
                              >
                                Shop Right Sidebar
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/products"
                              >
                                Shop Grid
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/shop-grid-list"
                              >
                                Shop Grid List
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/shop-list"
                              >
                                Shop List
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column Two
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/product-details"
                              >
                                Standard Product
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/product-variable"
                              >
                                Video Product
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/product-variable"
                              >
                                Variable Product
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/product-left-sidebar"
                              >
                                Product Left Sidebar
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/product-gallery"
                              >
                                Product Gallery
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column Three
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/my-account"
                              >
                                My Account
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/my-account-2"
                              >
                                My Account 2
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/404"
                              >
                                404 Page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/login"
                              >
                                Login Page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/faq"
                              >
                                Faq Page
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="header__mega--menu__li">
                          <span className="header__mega--subtitle">
                            Column Four
                          </span>
                          <ul className="header__mega--sub__menu">
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/compare"
                              >
                                Compare Pages
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/cart"
                              >
                                Cart Page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/checkout"
                              >
                                Checkout page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/wishlist"
                              >
                                Wishlist Page
                              </Link>
                            </li>
                            <li className="header__mega--sub__menu_li">
                              <Link
                                className="header__mega--sub__menu--title"
                                href="/404"
                              >
                                Error Page
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="header__menu--items style3">
                      <Link className="header__menu--link" href="/about">
                        About US{" "}
                      </Link>
                    </li>
                    <li className="header__menu--items style3">
                      <Link className="header__menu--link" href="/news">
                        Blog <span className="menu__plus--icon">+</span>{" "}
                      </Link>
                      <ul className="header__sub--menu">
                        <li className="header__sub--menu__items">
                          <Link
                            href="/news"
                            className="header__sub--menu__link"
                          >
                            Blog Grid
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/news-details"
                            className="header__sub--menu__link"
                          >
                            Blog Details
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/blog-left-sidebar"
                            className="header__sub--menu__link"
                          >
                            Blog Left Sidebar
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/blog-right-sidebar"
                            className="header__sub--menu__link"
                          >
                            Blog Right Sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header__menu--items style3">
                      <Link className="header__menu--link " href="#">
                        Pages <span className="menu__plus--icon">+</span>
                      </Link>
                      <ul className="header__sub--menu">
                        <li className="header__sub--menu__items">
                          <Link
                            href="/about"
                            className="header__sub--menu__link"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/contact"
                            className="header__sub--menu__link"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/cart"
                            className="header__sub--menu__link"
                          >
                            Cart Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/portfolio"
                            className="header__sub--menu__link"
                          >
                            Portfolio Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/wishlist"
                            className="header__sub--menu__link"
                          >
                            Wishlist Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/login"
                            className="header__sub--menu__link"
                          >
                            Login Page
                          </Link>
                        </li>
                        <li className="header__sub--menu__items">
                          <Link
                            href="/404"
                            className="header__sub--menu__link"
                          >
                            Error Page
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header__menu--items style3">
                      <Link className="header__menu--link" href="/contact">
                        Contact{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__account">
                <ul className="d-flex">
                  <li className="header__account--items  header__account--search__items">
                    <Link
                      className="header__account--btn search__open--btn"
                      href="javascript:void(0)"
                    >
                      <svg
                        className="header__search--button__svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
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
                      <span className="visually-hidden">Search</span>
                    </Link>
                  </li>
                  <li className="header__account--items">
                    <Link className="header__account--btn" href="/my-account">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26.51"
                        height="23.443"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                        />
                        <path
                          d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit={10}
                          strokeWidth={32}
                        />
                      </svg>
                      <span className="visually-hidden">My Account</span>
                    </Link>
                  </li>
                  <li className="header__account--items d-sm-none">
                    <Link className="header__account--btn" href="/wishlist">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24.526"
                        height="21.82"
                        viewBox="0 0 24.526 21.82"
                      >
                        <path
                          d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0"
                          transform="translate(0 0)"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="items__count wishlist">02</span>
                    </Link>
                  </li>
                  <li className="header__account--items">
                    <Link
                      className="header__account--btn minicart__open--btn"
                      href="javascript:void(0)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.897"
                        height="21.565"
                        viewBox="0 0 18.897 21.565"
                      >
                        <path
                          d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                          transform="translate(-2.667 -1.366)"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="items__count">02</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Start Offcanvas header menu */}
        <div className="offcanvas__header" tabIndex={-1}>
          <div className="offcanvas__inner">
            <div className="offcanvas__logo">
              <Link className="offcanvas__logo_link" href="/">
                <img src="assets/img/logo/nav-log.webp" alt="Furea Logo" />
              </Link>
              <button
                className="offcanvas__close--btn"
                aria-label="offcanvas close btn"
              >
                close
              </button>
            </div>
            <nav className="offcanvas__menu">
              <ul className="offcanvas__menu_ul">
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="/">
                    Home
                  </Link>
                  <ul className="offcanvas__sub_menu">
                    <li className="offcanvas__sub_menu_li">
                      <Link href="/" className="offcanvas__sub_menu_item">
                        Home One
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link
                        href="/index-2"
                        className="offcanvas__sub_menu_item"
                      >
                        Home Two
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link
                        href="/index-3"
                        className="offcanvas__sub_menu_item"
                      >
                        Home Three
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="#">
                    Shop
                  </Link>
                  <ul className="offcanvas__sub_menu">
                    <li className="offcanvas__sub_menu_li">
                      <Link href="#" className="offcanvas__sub_menu_item">
                        Column One
                      </Link>
                      <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/shop"
                          >
                            Shop Left Sidebar
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/shop-right-sidebar"
                          >
                            Shop Right Sidebar
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/products"
                          >
                            Shop Grid
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/shop-grid-list"
                          >
                            Shop Grid List
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/shop-list"
                          >
                            Shop List
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link href="#" className="offcanvas__sub_menu_item">
                        Column Two
                      </Link>
                      <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/product-details"
                          >
                            Standard Product
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/product-variable"
                          >
                            Video Product
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/product-variable"
                          >
                            Variable Product
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/product-left-sidebar"
                          >
                            Product Left Sidebar
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/product-gallery"
                          >
                            Product Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link href="#" className="offcanvas__sub_menu_item">
                        Column Three
                      </Link>
                      <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/my-account"
                          >
                            My Account
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/my-account-2"
                          >
                            My Account 2
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/404"
                          >
                            404 Page
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/login"
                          >
                            Login Page
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/faq"
                          >
                            Faq Page
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link href="#" className="offcanvas__sub_menu_item">
                        Column Four
                      </Link>
                      <ul className="offcanvas__sub_menu">
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/compare"
                          >
                            Compare Pages
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/cart"
                          >
                            Cart Page
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/checkout"
                          >
                            Checkout page
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/wishlist"
                          >
                            Wishlist Page
                          </Link>
                        </li>
                        <li className="offcanvas__sub_menu_li">
                          <Link
                            className="offcanvas__sub_menu_item"
                            href="/404"
                          >
                            Error Page
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="#">
                    Blog
                  </Link>
                  <ul className="offcanvas__sub_menu">
                    <li className="offcanvas__sub_menu_li">
                      <Link href="/news" className="offcanvas__sub_menu_item">
                        Blog Grid
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link
                        href="/news-details"
                        className="offcanvas__sub_menu_item"
                      >
                        Blog Details
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link
                        href="/blog-left-sidebar"
                        className="offcanvas__sub_menu_item"
                      >
                        Blog Left Sidebar
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link
                        href="/blog-right-sidebar"
                        className="offcanvas__sub_menu_item"
                      >
                        Blog Right Sidebar
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="#">
                    Pages
                  </Link>
                  <ul className="offcanvas__sub_menu">
                    <li className="offcanvas__sub_menu_li">
                      <Link href="/about" className="offcanvas__sub_menu_item">
                        About Us
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link
                        href="/contact"
                        className="offcanvas__sub_menu_item"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link href="/cart" className="offcanvas__sub_menu_item">
                        Cart Page
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link
                        href="/portfolio"
                        className="offcanvas__sub_menu_item"
                      >
                        Portfolio Page
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link
                        href="/wishlist"
                        className="offcanvas__sub_menu_item"
                      >
                        Wishlist Page
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link href="/login" className="offcanvas__sub_menu_item">
                        Login Page
                      </Link>
                    </li>
                    <li className="offcanvas__sub_menu_li">
                      <Link href="/404" className="offcanvas__sub_menu_item">
                        Error Page
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="/about">
                    About
                  </Link>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="offcanvas__account--items">
                <Link
                  className="offcanvas__account--items__btn d-flex align-items-center"
                  href="/login"
                >
                  <span className="offcanvas__account--items__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.51"
                      height="19.443"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                      />
                      <path
                        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeWidth={32}
                      />
                    </svg>
                  </span>
                  <span className="offcanvas__account--items__label">
                    Login / Register
                  </span>
                </Link>
              </div>
              <div className="language__currency">
                <ul className="d-flex align-items-center">
                  <li className="language__currency--list">
                    <Link className="offcanvas__language--switcher" href="#">
                      <img
                        className="language__switcher--icon__img"
                        src="assets/img/icon/language-icon.webp"
                        alt="currency"
                      />
                      <span>English</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </Link>
                    <div className="offcanvas__dropdown--language">
                      <ul>
                        <li className="language__items">
                          <Link className="language__text" href="#">
                            France
                          </Link>
                        </li>
                        <li className="language__items">
                          <Link className="language__text" href="#">
                            Russia
                          </Link>
                        </li>
                        <li className="language__items">
                          <Link className="language__text" href="#">
                            Spanish
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="language__currency--list">
                    <Link className="offcanvas__account--currency__menu" href="#">
                      <img src="assets/img/icon/usd-icon.webp" alt="currency" />
                      <span>$ US Dollar</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11.797"
                        height="9.05"
                        viewBox="0 0 9.797 6.05"
                      >
                        <path
                          d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                          transform="translate(-6 -8.59)"
                          fill="currentColor"
                          opacity="0.7"
                        />
                      </svg>
                    </Link>
                    <div className="offcanvas__account--currency__submenu">
                      <ul>
                        <li className="currency__items">
                          <Link className="currency__text" href="#">
                            CAD
                          </Link>
                        </li>
                        <li className="currency__items">
                          <Link className="currency__text" href="#">
                            CNY
                          </Link>
                        </li>
                        <li className="currency__items">
                          <Link className="currency__text" href="#">
                            EUR
                          </Link>
                        </li>
                        <li className="currency__items">
                          <Link className="currency__text" href="#">
                            GBP
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* End Offcanvas header menu */}
        {/* Start Offcanvas stikcy toolbar */}
        <div className="offcanvas__stikcy--toolbar" tabIndex={-1}>
          <ul className="d-flex justify-content-between">
            <li className="offcanvas__stikcy--toolbar__list">
              <Link className="offcanvas__stikcy--toolbar__btn" href="/">
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="21.51"
                    height="21.443"
                    viewBox="0 0 22 17"
                  >
                    <path
                      fill="currentColor"
                      d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Home</span>
              </Link>
            </li>
            <li className="offcanvas__stikcy--toolbar__list">
              <Link className="offcanvas__stikcy--toolbar__btn" href="/shop">
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.51"
                    height="17.443"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z" />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Shop</span>
              </Link>
            </li>
            <li className="offcanvas__stikcy--toolbar__list ">
              <Link
                className="offcanvas__stikcy--toolbar__btn search__open--btn"
                href="javascript:void(0)"
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.51"
                    height="20.443"
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
                </span>
                <span className="offcanvas__stikcy--toolbar__label">
                  Search
                </span>
              </Link>
            </li>
            <li className="offcanvas__stikcy--toolbar__list">
              <Link
                className="offcanvas__stikcy--toolbar__btn minicart__open--btn"
                href="javascript:void(0)"
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.51"
                    height="15.443"
                    viewBox="0 0 18.51 15.443"
                  >
                    <path
                      d="M79.963,138.379l-13.358,0-.56-1.927a.871.871,0,0,0-.6-.592l-1.961-.529a.91.91,0,0,0-.226-.03.864.864,0,0,0-.226,1.7l1.491.4,3.026,10.919a1.277,1.277,0,1,0,1.844,1.144.358.358,0,0,0,0-.049h6.163c0,.017,0,.034,0,.049a1.277,1.277,0,1,0,1.434-1.267c-1.531-.247-7.783-.55-7.783-.55l-.205-.8h7.8a.9.9,0,0,0,.863-.651l1.688-5.943h.62a.936.936,0,1,0,0-1.872Zm-9.934,6.474H68.568c-.04,0-.1.008-.125-.085-.034-.118-.082-.283-.082-.283l-1.146-4.037a.061.061,0,0,1,.011-.057.064.064,0,0,1,.053-.025h1.777a.064.064,0,0,1,.063.051l.969,4.34,0,.013a.058.058,0,0,1,0,.019A.063.063,0,0,1,70.03,144.853Zm3.731-4.41-.789,4.359a.066.066,0,0,1-.063.051h-1.1a.064.064,0,0,1-.063-.051l-.789-4.357a.064.064,0,0,1,.013-.055.07.07,0,0,1,.051-.025H73.7a.06.06,0,0,1,.051.025A.064.064,0,0,1,73.76,140.443Zm3.737,0L76.26,144.8a.068.068,0,0,1-.063.049H74.684a.063.063,0,0,1-.051-.025.064.064,0,0,1-.013-.055l.973-4.357a.066.066,0,0,1,.063-.051h1.777a.071.071,0,0,1,.053.025A.076.076,0,0,1,77.5,140.448Z"
                      transform="translate(-62.393 -135.3)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">Cart</span>
                <span className="items__count">3</span>
              </Link>
            </li>
            <li className="offcanvas__stikcy--toolbar__list">
              <Link
                className="offcanvas__stikcy--toolbar__btn"
                href="/wishlist"
              >
                <span className="offcanvas__stikcy--toolbar__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.541"
                    height="15.557"
                    viewBox="0 0 18.541 15.557"
                  >
                    <path
                      d="M71.775,135.51a5.153,5.153,0,0,1,1.267-1.524,4.986,4.986,0,0,1,6.584.358,4.728,4.728,0,0,1,1.174,4.914,10.458,10.458,0,0,1-2.132,3.808,22.591,22.591,0,0,1-5.4,4.558c-.445.282-.9.549-1.356.812a.306.306,0,0,1-.254.013,25.491,25.491,0,0,1-6.279-4.8,11.648,11.648,0,0,1-2.52-4.009,4.957,4.957,0,0,1,.028-3.787,4.629,4.629,0,0,1,3.744-2.863,4.782,4.782,0,0,1,5.086,2.447c.013.019.025.034.057.076Z"
                      transform="translate(-62.498 -132.915)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="offcanvas__stikcy--toolbar__label">
                  Wishlist
                </span>
                <span className="items__count wishlist__count">3</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* End Offcanvas stikcy toolbar */}
        {/* Start offCanvas minicart */}
        <div className="offCanvas__minicart" tabIndex={-1}>
          <div className="minicart__header ">
            <div className="minicart__header--top d-flex justify-content-between align-items-center">
              <h3 className="minicart__title"> Shopping Cart</h3>
              <button
                className="minicart__close--btn"
                aria-label="minicart close btn"
              >
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
                </svg>
              </button>
            </div>
            <p className="minicart__header--desc">
              The organic foods products are limited
            </p>
          </div>
          <div className="minicart__product">
            <div className="minicart__product--items d-flex">
              <div className="minicart__thumbnail">
                <Link href="/product-details">
                  <img
                    src="assets/img/product/product1.webp"
                    alt="prduct-img"
                  />
                </Link>
              </div>
              <div className="minicart__text">
                <h4 className="minicart__subtitle">
                  <Link href="/product-details">The is Garden Vegetable.</Link>
                </h4>
                <span className="color__variant">
                  <b>Color:</b> Beige
                </span>
                <div className="minicart__price">
                  <span className="current__price">$125.00</span>
                  <span className="old__price">$140.00</span>
                </div>
                <div className="minicart__text--footer d-flex align-items-center">
                  <div className="quantity__box minicart__quantity">
                    <button
                      type="button"
                      className="quantity__value decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      -
                    </button>
                    <label>
                      <input
                        type="number"
                        className="quantity__number"
                        defaultValue={1}
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="minicart__product--remove"
                    aria-label="minicart remove btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="minicart__product--items d-flex">
              <div className="minicart__thumbnail">
                <Link href="/product-details">
                  <img
                    src="assets/img/product/product2.webp"
                    alt="prduct-img"
                  />
                </Link>
              </div>
              <div className="minicart__text">
                <h4 className="minicart__subtitle">
                  <Link href="/product-details">Fresh Tomatoe is organic.</Link>
                </h4>
                <span className="color__variant">
                  <b>Color:</b> Green
                </span>
                <div className="minicart__price">
                  <span className="current__price">$115.00</span>
                  <span className="old__price">$130.00</span>
                </div>
                <div className="minicart__text--footer d-flex align-items-center">
                  <div className="quantity__box minicart__quantity">
                    <button
                      type="button"
                      className="quantity__value decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      -
                    </button>
                    <label>
                      <input
                        type="number"
                        className="quantity__number"
                        defaultValue={1}
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="minicart__product--remove"
                    aria-label="minicart remove btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="minicart__amount">
            <div className="minicart__amount_list d-flex justify-content-between">
              <span>Sub Total:</span>
              <span>
                <b>$240.00</b>
              </span>
            </div>
            <div className="minicart__amount_list d-flex justify-content-between">
              <span>Total:</span>
              <span>
                <b>$240.00</b>
              </span>
            </div>
          </div>
          <div className="minicart__conditions text-center">
            <input
              className="minicart__conditions--input"
              id="accept"
              type="checkbox"
            />
            <label className="minicart__conditions--label" htmlFor="accept">
              I agree with the{" "}
              <Link
                className="minicart__conditions--link"
                href="/privacy-policy"
              >
                Privacy And Policy
              </Link>
            </label>
          </div>
          <div className="minicart__button d-flex justify-content-center">
            <Link className="primary__btn minicart__button--link" href="/cart">
              View cart
            </Link>
            <Link
              className="primary__btn minicart__button--link"
              href="/checkout"
            >
              Checkout
            </Link>
          </div>
        </div>
        {/* End offCanvas minicart */}
        {/* Start serch box area */}
        <div className="predictive__search--box " tabIndex={-1}>
          <div className="predictive__search--box__inner">
            <h2 className="predictive__search--title">Search Products</h2>
            <form className="predictive__search--form" action="#">
              <label>
                <input
                  className="predictive__search--input"
                  placeholder="Search Here"
                  type="text"
                />
              </label>
              <button
                className="predictive__search--button"
                aria-label="search button"
              >
                <svg
                  className="header__search--button__svg"
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
              </button>
            </form>
          </div>
          <button
            className="predictive__search--close__btn"
            aria-label="search close btn"
          >
            <svg
              className="predictive__search--close__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="40.51"
              height="30.443"
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
            </svg>
          </button>
        </div>
        {/* End serch box area */}
      </header>
      {/* End header area */}
      <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">
                    Product Details
                  </h1>
                  <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items">
                      <Link className="text-white" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb__content--menu__items">
                      <span className="text-white">Product Details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* Start product details section */}
        <section className="product__details--section section--padding">
          <div className="container">
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
                            href="assets/img/product/big-product1.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="assets/img/product/big-product1.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="assets/img/product/big-product1.webp"
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
                          <div className="product__media--view__icon media__play">
                            <Link
                              className="media__play--icon__link glightbox"
                              data-gallery="video"
                              href="https://vimeo.com/115041822"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                width="35.51"
                                height="35.443"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="visually-hidden">play</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="assets/img/product/big-product2.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="assets/img/product/big-product2.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="assets/img/product/big-product1.webp"
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
                          <div className="product__media--view__icon media__play">
                            <Link
                              className="media__play--icon__link glightbox"
                              data-gallery="video"
                              href="https://vimeo.com/115041822"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                width="35.51"
                                height="35.443"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="visually-hidden">play</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="assets/img/product/big-product3.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="assets/img/product/big-product3.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="assets/img/product/big-product1.webp"
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
                          <div className="product__media--view__icon media__play">
                            <Link
                              className="media__play--icon__link glightbox"
                              data-gallery="video"
                              href="https://vimeo.com/115041822"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                width="35.51"
                                height="35.443"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="visually-hidden">play</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="assets/img/product/big-product4.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="assets/img/product/big-product4.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="assets/img/product/big-product1.webp"
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
                          <div className="product__media--view__icon media__play">
                            <Link
                              className="media__play--icon__link glightbox"
                              data-gallery="video"
                              href="https://vimeo.com/115041822"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                width="35.51"
                                height="35.443"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="visually-hidden">play</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="assets/img/product/big-product5.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="assets/img/product/big-product5.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="assets/img/product/big-product1.webp"
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
                          <div className="product__media--view__icon media__play">
                            <Link
                              className="media__play--icon__link glightbox"
                              data-gallery="video"
                              href="https://vimeo.com/115041822"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                width="35.51"
                                height="35.443"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="visually-hidden">play</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--preview__items">
                          <Link
                            className="product__media--preview__items--link glightbox"
                            data-gallery="product-media-preview"
                            href="assets/img/product/big-product6.webp"
                          >
                            <img
                              className="product__media--preview__items--img"
                              src="assets/img/product/big-product6.webp"
                              alt="product-media-img"
                            />
                          </Link>
                          <div className="product__media--view__icon">
                            <Link
                              className="product__media--view__icon--link glightbox"
                              href="assets/img/product/big-product1.webp"
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
                          <div className="product__media--view__icon media__play">
                            <Link
                              className="media__play--icon__link glightbox"
                              data-gallery="video"
                              href="https://vimeo.com/115041822"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                width="35.51"
                                height="35.443"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="visually-hidden">play</span>
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
                            src="assets/img/product/small-product1.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="assets/img/product/small-product2.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="assets/img/product/small-product3.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="assets/img/product/small-product4.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="assets/img/product/small-product5.webp"
                            alt="product-nav-img"
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product__media--nav__items">
                          <img
                            className="product__media--nav__items--img"
                            src="assets/img/product/small-product6.webp"
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
                <div className="product__details--info">
                  <form action="#">
                    <h2 className="product__details--info__title mb-15">
                      Fashion Plastic Chair
                    </h2>
                    <div className="product__details--info__price mb-10">
                      <span className="current__price">$299.00</span>
                      <span className="old__price">$320.00</span>
                    </div>
                    <div className="product__details--info__rating d-flex align-items-center mb-15">
                      <ul className="rating product__list--rating d-flex">
                        <li className="rating__list">
                          <span className="rating__list--icon">
                            <svg
                              className="rating__list--icon__svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="13.105"
                              height="13.732"
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
                              width="13.105"
                              height="13.732"
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
                              width="13.105"
                              height="13.732"
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
                              width="13.105"
                              height="13.732"
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
                              width="13.105"
                              height="13.732"
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
                          <span className="rating__list--text">( 5.0)</span>
                        </li>
                      </ul>
                    </div>
                    <p className="product__details--info__desc mb-20">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut numquam ullam is recusandae laborum explicabo id sequi
                      quisquam, ab sunt deleniti quidem ea animi facilis quod
                      nostrum odit! Repellendus voluptas suscipit.
                    </p>
                    <div className="product__variant">
                      <div className="product__variant--list mb-20">
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
                                  src="assets/img/product/product1.webp"
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
                                  src="assets/img/product/product6.webp"
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
                                  src="assets/img/product/product7.webp"
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
                                  src="assets/img/product/product4.webp"
                                  alt="variant-color-img"
                                />
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="product__variant--list mb-20">
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
                      <div className="product__variant--list quantity d-flex align-items-center mb-20">
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
                          className="quickview__cart--btn primary__btn"
                          type="submit"
                        >
                          Add To Cart
                        </button>
                      </div>
                      <div className="product__variant--list mb-15">
                        <Link
                          className="variant__wishlist--icon mb-15"
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
                        <button
                          className="variant__buy--now__btn primary__btn"
                          type="submit"
                        >
                          Buy it now
                        </button>
                      </div>
                      <div className="product__variant--list mb-15">
                        <div className="product__details--info__meta">
                          <p className="product__details--info__meta--list">
                            <strong>Barcode:</strong> <span>565461</span>{" "}
                          </p>
                          <p className="product__details--info__meta--list">
                            <strong>Sky:</strong> <span>4420</span>{" "}
                          </p>
                          <p className="product__details--info__meta--list">
                            <strong>Vendor:</strong> <span>Belo</span>{" "}
                          </p>
                          <p className="product__details--info__meta--list">
                            <strong>Type:</strong> <span>Sofa</span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="quickview__social d-flex align-items-center mb-15">
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
                    <div className="guarantee__safe--checkout">
                      <h5 className="guarantee__safe--checkout__title">
                        Guaranteed Safe Checkout
                      </h5>
                      <img
                        className="guarantee__safe--checkout__img"
                        src="assets/img/other/safe-checkout.webp"
                        alt="Payment Image"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End product details section */}
        {/* Start product details tab section */}
        <section className="product__details--tab__section section--padding">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <ul className="product__details--tab d-flex mb-30">
                  <li
                    className="product__details--tab__list active"
                    data-toggle="tab"
                    data-target="#description"
                  >
                    Description
                  </li>
                  <li
                    className="product__details--tab__list"
                    data-toggle="tab"
                    data-target="#reviews"
                  >
                    Product Reviews
                  </li>
                  <li
                    className="product__details--tab__list"
                    data-toggle="tab"
                    data-target="#information"
                  >
                    Additional Info
                  </li>
                  <li
                    className="product__details--tab__list"
                    data-toggle="tab"
                    data-target="#custom"
                  >
                    Custom Content
                  </li>
                </ul>
                <div className="product__details--tab__inner border-radius-10">
                  <div className="tab_content">
                    <div id="description" className="tab_pane active show">
                      <div className="product__tab--content">
                        <div className="product__tab--content__items mb-40 d-flex align-items-center">
                          <div className="product__tab--content__thumbnail">
                            <img
                              className="product__tab--content__thumbnail--img display-block"
                              src="assets/img/product/product1.webp"
                              alt="product-tab"
                            />
                          </div>
                          <div className="product__tab--content__right">
                            <div className="product__tab--content__step mb-20">
                              <h4 className="product__tab--content__title">
                                Modern Swivel Chair
                              </h4>
                              <p className="product__tab--content__desc">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Nam provident sequi, nemo
                                sapiente culpa nostrum rem eum perferendis
                                quibusdam, magnam a vitae corporis! Magnam enim
                                modi, illo harum suscipit tempore aut dolore
                                doloribus deserunt voluptatum illum,
                              </p>
                            </div>
                            <div className="product__tab--content__step">
                              <h4 className="product__tab--content__title">
                                Fashion Plastic Chair
                              </h4>
                              <p className="product__tab--content__desc">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Nam provident sequi, nemo
                                sapiente culpa nostrum rem eum perferendis
                                quibusdam, magnam a vitae corporis! Magnam enim
                                modi, illo harum suscipit tempore aut dolore
                                doloribus deserunt voluptatum illum,
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="product__tab--content__items d-flex align-items-center">
                          <div className="product__tab--content__thumbnail">
                            <img
                              className="product__tab--content__thumbnail--img display-block"
                              src="assets/img/product/product2.webp"
                              alt="product-tab"
                            />
                          </div>
                          <div className="product__tab--content__right">
                            <div className="product__tab--content__step mb-20">
                              <h4 className="product__tab--content__title">
                                Design Living Sofa
                              </h4>
                              <p className="product__tab--content__desc">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Nam provident sequi, nemo
                                sapiente culpa nostrum rem eum perferendis
                                quibusdam, magnam a vitae corporis! Magnam enim
                                modi, illo harum suscipit tempore aut dolore
                                doloribus deserunt voluptatum illum,
                              </p>
                            </div>
                            <div className="product__tab--content__step">
                              <h4 className="product__tab--content__title">
                                Folding Tables Chairs
                              </h4>
                              <p className="product__tab--content__desc">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Nam provident sequi, nemo
                                sapiente culpa nostrum rem eum perferendis
                                quibusdam, magnam a vitae corporis! Magnam enim
                                modi, illo harum suscipit tempore aut dolore
                                doloribus deserunt voluptatum illum,
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="reviews" className="tab_pane">
                      <div className="product__reviews">
                        <div className="product__reviews--header">
                          <h3 className="product__reviews--header__title mb-20">
                            Customer Reviews
                          </h3>
                          <div className="reviews__ratting d-flex align-items-center">
                            <ul className="rating d-flex">
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13.105"
                                    height="13.732"
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
                                    width="13.105"
                                    height="13.732"
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
                                    width="13.105"
                                    height="13.732"
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
                                    width="13.105"
                                    height="13.732"
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
                                    width="13.105"
                                    height="13.732"
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
                            <span className="reviews__summary--caption">
                              Based on 2 reviews
                            </span>
                          </div>
                          <Link
                            className="actions__newreviews--btn primary__btn"
                            href="#writereview"
                          >
                            Write A Review
                          </Link>
                        </div>
                        <div className="reviews__comment--area">
                          <div className="reviews__comment--list d-flex">
                            <div className="reviews__comment--thumbnail">
                              <img
                                src="assets/img/other/comment-thumb1.webp"
                                alt="comment-thumbnail"
                              />
                            </div>
                            <div className="reviews__comment--content">
                              <h4 className="reviews__comment--content__title">
                                Richard Smith
                              </h4>
                              <ul className="rating reviews__comment--rating d-flex mb-5">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                              <p className="reviews__comment--content__desc">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eos ex repellat officiis
                                neque. Veniam, rem nesciunt. Assumenda
                                distinctio, autem error repellat eveniet ratione
                                dolor facilis accusantium amet pariatur, non
                                eius!
                              </p>
                              <span className="reviews__comment--content__date">
                                January 11, 2022
                              </span>
                            </div>
                          </div>
                          <div className="reviews__comment--list margin__left d-flex">
                            <div className="reviews__comment--thumbnail">
                              <img
                                src="assets/img/other/comment-thumb2.webp"
                                alt="comment-thumbnail"
                              />
                            </div>
                            <div className="reviews__comment--content">
                              <h4 className="reviews__comment--content__title">
                                Laura Johnson
                              </h4>
                              <ul className="rating reviews__comment--rating d-flex mb-5">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                              <p className="reviews__comment--content__desc">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eos ex repellat officiis
                                neque. Veniam, rem nesciunt. Assumenda
                                distinctio, autem error repellat eveniet ratione
                                dolor facilis accusantium amet pariatur, non
                                eius!
                              </p>
                              <span className="reviews__comment--content__date">
                                January 11, 2022
                              </span>
                            </div>
                          </div>
                          <div className="reviews__comment--list d-flex">
                            <div className="reviews__comment--thumbnail">
                              <img
                                src="assets/img/other/comment-thumb3.webp"
                                alt="comment-thumbnail"
                              />
                            </div>
                            <div className="reviews__comment--content">
                              <h4 className="reviews__comment--content__title">
                                Richard Smith
                              </h4>
                              <ul className="rating reviews__comment--rating d-flex mb-5">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                              <p className="reviews__comment--content__desc">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eos ex repellat officiis
                                neque. Veniam, rem nesciunt. Assumenda
                                distinctio, autem error repellat eveniet ratione
                                dolor facilis accusantium amet pariatur, non
                                eius!
                              </p>
                              <span className="reviews__comment--content__date">
                                January 11, 2022
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          id="writereview"
                          className="reviews__comment--reply__area"
                        >
                          <form action="#">
                            <h3 className="reviews__comment--reply__title mb-15">
                              Add a review{" "}
                            </h3>
                            <div className="reviews__ratting d-flex align-items-center mb-20">
                              <ul className="rating d-flex">
                                <li className="rating__list">
                                  <span className="rating__list--icon">
                                    <svg
                                      className="rating__list--icon__svg"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                                      width="13.105"
                                      height="13.732"
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
                            </div>
                            <div className="row">
                              <div className="col-12 mb-10">
                                <textarea
                                  className="reviews__comment--reply__textarea"
                                  placeholder="Your Comments...."
                                  defaultValue={""}
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 mb-15">
                                <label>
                                  <input
                                    className="reviews__comment--reply__input"
                                    placeholder="Your Name...."
                                    type="text"
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6 col-md-6 mb-15">
                                <label>
                                  <input
                                    className="reviews__comment--reply__input"
                                    placeholder="Your Email...."
                                    type="email"
                                  />
                                </label>
                              </div>
                            </div>
                            <button
                              className="text-white primary__btn"
                              data-hover="Submit"
                              type="submit"
                            >
                              SUBMIT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div id="information" className="tab_pane">
                      <div className="product__tab--conten">
                        <div className="product__tab--content">
                          <div className="product__tab--content__step mb-30">
                            <h4 className="product__tab--content__title mb-10">
                              Nam provident sequi
                            </h4>
                            <p className="product__tab--content__desc">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Nam provident sequi, nemo
                              sapiente culpa nostrum rem eum perferendis
                              quibusdam, magnam a vitae corporis! Magnam enim
                              modi, illo harum suscipit tempore aut dolore
                              doloribus deserunt voluptatum illum, est porro?
                              Ducimus dolore accusamus impedit ipsum maiores, ea
                              iusto temporibus numquam eaque mollitia fugiat
                              laborum dolor tempora eligendi voluptatem quis
                              necessitatibus nam ab?
                            </p>
                          </div>
                          <div className="product__tab--content__step">
                            <h4 className="product__tab--content__title mb-10">
                              More Details
                            </h4>
                            <ul>
                              <li className="product__tab--content__list">
                                <svg
                                  className="product__tab--content__list--icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.51"
                                  height="20.443"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={48}
                                    d="M268 112l144 144-144 144M392 256H100"
                                  />
                                </svg>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam, dolorum?
                              </li>
                              <li className="product__tab--content__list">
                                <svg
                                  className="product__tab--content__list--icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.51"
                                  height="20.443"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={48}
                                    d="M268 112l144 144-144 144M392 256H100"
                                  />
                                </svg>
                                Magnam enim modi, illo harum suscipit tempore
                                aut dolore?
                              </li>
                              <li className="product__tab--content__list">
                                <svg
                                  className="product__tab--content__list--icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.51"
                                  height="20.443"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={48}
                                    d="M268 112l144 144-144 144M392 256H100"
                                  />
                                </svg>
                                Numquam eaque mollitia fugiat laborum dolor
                                tempora;
                              </li>
                              <li className="product__tab--content__list">
                                <svg
                                  className="product__tab--content__list--icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.51"
                                  height="20.443"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={48}
                                    d="M268 112l144 144-144 144M392 256H100"
                                  />
                                </svg>
                                Sit amet consectetur adipisicing elit. Quo
                                delectus repellat facere maiores.
                              </li>
                              <li className="product__tab--content__list">
                                <svg
                                  className="product__tab--content__list--icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22.51"
                                  height="20.443"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={48}
                                    d="M268 112l144 144-144 144M392 256H100"
                                  />
                                </svg>
                                Repellendus itaque sit quia consequuntur, unde
                                veritatis. dolorum?
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="custom" className="tab_pane">
                      <div className="product__tab--content">
                        <div className="product__tab--content__step mb-30">
                          <h4 className="product__tab--content__title mb-10">
                            Nam provident sequi
                          </h4>
                          <p className="product__tab--content__desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nam provident sequi, nemo sapiente culpa
                            nostrum rem eum perferendis quibusdam, magnam a
                            vitae corporis! Magnam enim modi, illo harum
                            suscipit tempore aut dolore doloribus deserunt
                            voluptatum illum, est porro? Ducimus dolore
                            accusamus impedit ipsum maiores, ea iusto temporibus
                            numquam eaque mollitia fugiat laborum dolor tempora
                            eligendi voluptatem quis necessitatibus nam ab?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End product details tab section */}
        {/* Start product section */}
        <section className="product__section section--padding">
          <div className="container">
            <div className="section__heading text-center mb-40">
              <h2 className="section__heading--maintitle">You may also like</h2>
            </div>
            <div className="product__section--inner product__swiper--column4 swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product__items ">
                    <div className="product__items--thumbnail">
                      <Link
                        className="product__items--link"
                        href="/product-details"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/product1.webp"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/product2.webp"
                          alt="product-img"
                        />
                      </Link>
                      <div className="product__badge">
                        <span className="product__badge--items sale">New</span>
                      </div>
                      <ul className="product__items--action d-flex justify-content-center">
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            data-open="modal1"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.51"
                              height="19.443"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                              />
                              <circle
                                cx={256}
                                cy={256}
                                r={80}
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                              />
                            </svg>
                            <span className="visually-hidden">Quick View</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/wishlist"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.51"
                              height="15.443"
                              viewBox="0 0 24.526 21.82"
                            >
                              <path
                                d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0"
                                transform="translate(0 0)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Wishlist</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/compare"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.47"
                              height="13.088"
                              viewBox="0 0 15.47 11.088"
                            >
                              <g transform="translate(0 -72.508)">
                                <path
                                  data-name="Path 114"
                                  d="M15.359,80.9l-2.011-2.011a.525.525,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49l1.106,1.106H10.576L8.3,78.052l2.273-2.274h1.618l-1.106,1.106a.287.287,0,0,0,.2.49h1.683a.531.531,0,0,0,.374-.155l2.011-2.011a.38.38,0,0,0,0-.535l-.859-.859a.227.227,0,1,0-.32.321l.806.806L13.027,76.9a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542h-2.04a.227.227,0,0,0-.16.066l-2.34,2.34-.544-.544,2.519-2.519a.382.382,0,0,1,.272-.112h2.293a.317.317,0,0,0,.225-.542l-1.054-1.054h1.282a.076.076,0,0,1,.053.022l.4.4a.227.227,0,1,0,.32-.321l-.4-.4a.531.531,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49L12.194,74.1H10.229a.832.832,0,0,0-.592.245L7.118,76.867,4.6,74.349a.832.832,0,0,0-.592-.245H.378A.378.378,0,0,0,0,74.481v.92a.378.378,0,0,0,.378.378H3.66l2.273,2.274L3.66,80.326H.378A.378.378,0,0,0,0,80.7v.92A.378.378,0,0,0,.378,82H4.007a.835.835,0,0,0,.592-.245l2.519-2.519.8.8a.227.227,0,1,0,.32-.32L3.914,75.392a.227.227,0,0,0-.16-.066H.453v-.769H4.007a.382.382,0,0,1,.272.113l6.043,6.043a.227.227,0,0,0,.16.066h2.04a.317.317,0,0,0,.224-.542l-1.054-1.054h1.282a.075.075,0,0,1,.053.022l1.958,1.958-1.958,1.958a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542H10.229a.383.383,0,0,1-.272-.113l-.968-.968a.227.227,0,0,0-.32.32l.968.968a.833.833,0,0,0,.592.245h1.965l-1.105,1.105a.287.287,0,0,0,.2.49h1.683a.525.525,0,0,0,.374-.155l2.011-2.011A.379.379,0,0,0,15.359,80.9Zm-11.08.539a.389.389,0,0,1-.272.113H.453v-.769h3.3a.226.226,0,0,0,.16-.066l2.34-2.34.543.544Z"
                                  transform="translate(0 0)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <span className="visually-hidden">Compare</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__items--content text-center">
                      <div className="product__items--color">
                        <ul className="product__items--color__wrapper d-flex justify-content-center">
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link one"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 1</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link two"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 2</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link three"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 3</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link four"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 4</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="product__items--content__title h4">
                        <Link href="/product-details">Fashion Plastic Chair</Link>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$150.00</span>
                        <span className="old__price">$200.00</span>
                      </div>
                      <Link
                        className="product__items--action__cart--btn primary__btn"
                        href="/cart"
                      >
                        <svg
                          className="product__items--action__cart--btn__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.897"
                          height="14.565"
                          viewBox="0 0 18.897 21.565"
                        >
                          <path
                            d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                            transform="translate(-2.667 -1.366)"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="add__to--cart__text">
                          {" "}
                          Add to cart
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product__items ">
                    <div className="product__items--thumbnail">
                      <Link
                        className="product__items--link"
                        href="/product-details"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/product3.webp"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/product4.webp"
                          alt="product-img"
                        />
                      </Link>
                      <ul className="product__items--action d-flex justify-content-center">
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            data-open="modal1"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.51"
                              height="19.443"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                              />
                              <circle
                                cx={256}
                                cy={256}
                                r={80}
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                              />
                            </svg>
                            <span className="visually-hidden">Quick View</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/wishlist"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.51"
                              height="15.443"
                              viewBox="0 0 24.526 21.82"
                            >
                              <path
                                d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0"
                                transform="translate(0 0)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Wishlist</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/compare"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.47"
                              height="13.088"
                              viewBox="0 0 15.47 11.088"
                            >
                              <g transform="translate(0 -72.508)">
                                <path
                                  data-name="Path 114"
                                  d="M15.359,80.9l-2.011-2.011a.525.525,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49l1.106,1.106H10.576L8.3,78.052l2.273-2.274h1.618l-1.106,1.106a.287.287,0,0,0,.2.49h1.683a.531.531,0,0,0,.374-.155l2.011-2.011a.38.38,0,0,0,0-.535l-.859-.859a.227.227,0,1,0-.32.321l.806.806L13.027,76.9a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542h-2.04a.227.227,0,0,0-.16.066l-2.34,2.34-.544-.544,2.519-2.519a.382.382,0,0,1,.272-.112h2.293a.317.317,0,0,0,.225-.542l-1.054-1.054h1.282a.076.076,0,0,1,.053.022l.4.4a.227.227,0,1,0,.32-.321l-.4-.4a.531.531,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49L12.194,74.1H10.229a.832.832,0,0,0-.592.245L7.118,76.867,4.6,74.349a.832.832,0,0,0-.592-.245H.378A.378.378,0,0,0,0,74.481v.92a.378.378,0,0,0,.378.378H3.66l2.273,2.274L3.66,80.326H.378A.378.378,0,0,0,0,80.7v.92A.378.378,0,0,0,.378,82H4.007a.835.835,0,0,0,.592-.245l2.519-2.519.8.8a.227.227,0,1,0,.32-.32L3.914,75.392a.227.227,0,0,0-.16-.066H.453v-.769H4.007a.382.382,0,0,1,.272.113l6.043,6.043a.227.227,0,0,0,.16.066h2.04a.317.317,0,0,0,.224-.542l-1.054-1.054h1.282a.075.075,0,0,1,.053.022l1.958,1.958-1.958,1.958a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542H10.229a.383.383,0,0,1-.272-.113l-.968-.968a.227.227,0,0,0-.32.32l.968.968a.833.833,0,0,0,.592.245h1.965l-1.105,1.105a.287.287,0,0,0,.2.49h1.683a.525.525,0,0,0,.374-.155l2.011-2.011A.379.379,0,0,0,15.359,80.9Zm-11.08.539a.389.389,0,0,1-.272.113H.453v-.769h3.3a.226.226,0,0,0,.16-.066l2.34-2.34.543.544Z"
                                  transform="translate(0 0)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <span className="visually-hidden">Compare</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__items--content text-center">
                      <div className="product__items--color">
                        <ul className="product__items--color__wrapper d-flex justify-content-center">
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link one"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 1</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link two"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 2</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link three"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 3</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link four"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 4</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="product__items--content__title h4">
                        <Link href="/product-details">Modern Swivel Chair</Link>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$160.00</span>
                        <span className="old__price">$210.00</span>
                      </div>
                      <Link
                        className="product__items--action__cart--btn primary__btn"
                        href="/cart"
                      >
                        <svg
                          className="product__items--action__cart--btn__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.897"
                          height="14.565"
                          viewBox="0 0 18.897 21.565"
                        >
                          <path
                            d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                            transform="translate(-2.667 -1.366)"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="add__to--cart__text">
                          {" "}
                          Add to cart
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product__items ">
                    <div className="product__items--thumbnail">
                      <Link
                        className="product__items--link"
                        href="/product-details"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/product5.webp"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/product6.webp"
                          alt="product-img"
                        />
                      </Link>
                      <div className="product__badge">
                        <span className="product__badge--items sale">New</span>
                      </div>
                      <ul className="product__items--action d-flex justify-content-center">
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            data-open="modal1"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.51"
                              height="19.443"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                              />
                              <circle
                                cx={256}
                                cy={256}
                                r={80}
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                              />
                            </svg>
                            <span className="visually-hidden">Quick View</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/wishlist"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.51"
                              height="15.443"
                              viewBox="0 0 24.526 21.82"
                            >
                              <path
                                d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0"
                                transform="translate(0 0)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Wishlist</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/compare"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.47"
                              height="13.088"
                              viewBox="0 0 15.47 11.088"
                            >
                              <g transform="translate(0 -72.508)">
                                <path
                                  data-name="Path 114"
                                  d="M15.359,80.9l-2.011-2.011a.525.525,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49l1.106,1.106H10.576L8.3,78.052l2.273-2.274h1.618l-1.106,1.106a.287.287,0,0,0,.2.49h1.683a.531.531,0,0,0,.374-.155l2.011-2.011a.38.38,0,0,0,0-.535l-.859-.859a.227.227,0,1,0-.32.321l.806.806L13.027,76.9a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542h-2.04a.227.227,0,0,0-.16.066l-2.34,2.34-.544-.544,2.519-2.519a.382.382,0,0,1,.272-.112h2.293a.317.317,0,0,0,.225-.542l-1.054-1.054h1.282a.076.076,0,0,1,.053.022l.4.4a.227.227,0,1,0,.32-.321l-.4-.4a.531.531,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49L12.194,74.1H10.229a.832.832,0,0,0-.592.245L7.118,76.867,4.6,74.349a.832.832,0,0,0-.592-.245H.378A.378.378,0,0,0,0,74.481v.92a.378.378,0,0,0,.378.378H3.66l2.273,2.274L3.66,80.326H.378A.378.378,0,0,0,0,80.7v.92A.378.378,0,0,0,.378,82H4.007a.835.835,0,0,0,.592-.245l2.519-2.519.8.8a.227.227,0,1,0,.32-.32L3.914,75.392a.227.227,0,0,0-.16-.066H.453v-.769H4.007a.382.382,0,0,1,.272.113l6.043,6.043a.227.227,0,0,0,.16.066h2.04a.317.317,0,0,0,.224-.542l-1.054-1.054h1.282a.075.075,0,0,1,.053.022l1.958,1.958-1.958,1.958a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542H10.229a.383.383,0,0,1-.272-.113l-.968-.968a.227.227,0,0,0-.32.32l.968.968a.833.833,0,0,0,.592.245h1.965l-1.105,1.105a.287.287,0,0,0,.2.49h1.683a.525.525,0,0,0,.374-.155l2.011-2.011A.379.379,0,0,0,15.359,80.9Zm-11.08.539a.389.389,0,0,1-.272.113H.453v-.769h3.3a.226.226,0,0,0,.16-.066l2.34-2.34.543.544Z"
                                  transform="translate(0 0)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <span className="visually-hidden">Compare</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__items--content text-center">
                      <div className="product__items--color">
                        <ul className="product__items--color__wrapper d-flex justify-content-center">
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link one"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 1</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link two"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 2</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link three"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 3</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link four"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 4</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="product__items--content__title h4">
                        <Link href="/product-details">Design Living Sofa</Link>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$155.00</span>
                        <span className="old__price">$205.00</span>
                      </div>
                      <Link
                        className="product__items--action__cart--btn primary__btn"
                        href="/cart"
                      >
                        <svg
                          className="product__items--action__cart--btn__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.897"
                          height="14.565"
                          viewBox="0 0 18.897 21.565"
                        >
                          <path
                            d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                            transform="translate(-2.667 -1.366)"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="add__to--cart__text">
                          {" "}
                          Add to cart
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product__items ">
                    <div className="product__items--thumbnail">
                      <Link
                        className="product__items--link"
                        href="/product-details"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/product7.webp"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/product8.webp"
                          alt="product-img"
                        />
                      </Link>
                      <ul className="product__items--action d-flex justify-content-center">
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            data-open="modal1"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.51"
                              height="19.443"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                              />
                              <circle
                                cx={256}
                                cy={256}
                                r={80}
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                              />
                            </svg>
                            <span className="visually-hidden">Quick View</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/wishlist"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.51"
                              height="15.443"
                              viewBox="0 0 24.526 21.82"
                            >
                              <path
                                d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0"
                                transform="translate(0 0)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Wishlist</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/compare"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.47"
                              height="13.088"
                              viewBox="0 0 15.47 11.088"
                            >
                              <g transform="translate(0 -72.508)">
                                <path
                                  data-name="Path 114"
                                  d="M15.359,80.9l-2.011-2.011a.525.525,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49l1.106,1.106H10.576L8.3,78.052l2.273-2.274h1.618l-1.106,1.106a.287.287,0,0,0,.2.49h1.683a.531.531,0,0,0,.374-.155l2.011-2.011a.38.38,0,0,0,0-.535l-.859-.859a.227.227,0,1,0-.32.321l.806.806L13.027,76.9a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542h-2.04a.227.227,0,0,0-.16.066l-2.34,2.34-.544-.544,2.519-2.519a.382.382,0,0,1,.272-.112h2.293a.317.317,0,0,0,.225-.542l-1.054-1.054h1.282a.076.076,0,0,1,.053.022l.4.4a.227.227,0,1,0,.32-.321l-.4-.4a.531.531,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49L12.194,74.1H10.229a.832.832,0,0,0-.592.245L7.118,76.867,4.6,74.349a.832.832,0,0,0-.592-.245H.378A.378.378,0,0,0,0,74.481v.92a.378.378,0,0,0,.378.378H3.66l2.273,2.274L3.66,80.326H.378A.378.378,0,0,0,0,80.7v.92A.378.378,0,0,0,.378,82H4.007a.835.835,0,0,0,.592-.245l2.519-2.519.8.8a.227.227,0,1,0,.32-.32L3.914,75.392a.227.227,0,0,0-.16-.066H.453v-.769H4.007a.382.382,0,0,1,.272.113l6.043,6.043a.227.227,0,0,0,.16.066h2.04a.317.317,0,0,0,.224-.542l-1.054-1.054h1.282a.075.075,0,0,1,.053.022l1.958,1.958-1.958,1.958a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542H10.229a.383.383,0,0,1-.272-.113l-.968-.968a.227.227,0,0,0-.32.32l.968.968a.833.833,0,0,0,.592.245h1.965l-1.105,1.105a.287.287,0,0,0,.2.49h1.683a.525.525,0,0,0,.374-.155l2.011-2.011A.379.379,0,0,0,15.359,80.9Zm-11.08.539a.389.389,0,0,1-.272.113H.453v-.769h3.3a.226.226,0,0,0,.16-.066l2.34-2.34.543.544Z"
                                  transform="translate(0 0)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <span className="visually-hidden">Compare</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__items--content text-center">
                      <div className="product__items--color">
                        <ul className="product__items--color__wrapper d-flex justify-content-center">
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link one"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 1</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link two"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 2</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link three"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 3</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link four"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 4</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="product__items--content__title h4">
                        <Link href="/product-details">Plastic Chair Wooden</Link>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$190.00</span>
                        <span className="old__price">$200.00</span>
                      </div>
                      <Link
                        className="product__items--action__cart--btn primary__btn"
                        href="/cart"
                      >
                        <svg
                          className="product__items--action__cart--btn__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.897"
                          height="14.565"
                          viewBox="0 0 18.897 21.565"
                        >
                          <path
                            d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                            transform="translate(-2.667 -1.366)"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="add__to--cart__text">
                          {" "}
                          Add to cart
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product__items ">
                    <div className="product__items--thumbnail">
                      <Link
                        className="product__items--link"
                        href="/product-details"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/product9.webp"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/product10.webp"
                          alt="product-img"
                        />
                      </Link>
                      <div className="product__badge">
                        <span className="product__badge--items sale">New</span>
                      </div>
                      <ul className="product__items--action d-flex justify-content-center">
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            data-open="modal1"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.51"
                              height="19.443"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                              />
                              <circle
                                cx={256}
                                cy={256}
                                r={80}
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                              />
                            </svg>
                            <span className="visually-hidden">Quick View</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/wishlist"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.51"
                              height="15.443"
                              viewBox="0 0 24.526 21.82"
                            >
                              <path
                                d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0"
                                transform="translate(0 0)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Wishlist</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/compare"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.47"
                              height="13.088"
                              viewBox="0 0 15.47 11.088"
                            >
                              <g transform="translate(0 -72.508)">
                                <path
                                  data-name="Path 114"
                                  d="M15.359,80.9l-2.011-2.011a.525.525,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49l1.106,1.106H10.576L8.3,78.052l2.273-2.274h1.618l-1.106,1.106a.287.287,0,0,0,.2.49h1.683a.531.531,0,0,0,.374-.155l2.011-2.011a.38.38,0,0,0,0-.535l-.859-.859a.227.227,0,1,0-.32.321l.806.806L13.027,76.9a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542h-2.04a.227.227,0,0,0-.16.066l-2.34,2.34-.544-.544,2.519-2.519a.382.382,0,0,1,.272-.112h2.293a.317.317,0,0,0,.225-.542l-1.054-1.054h1.282a.076.076,0,0,1,.053.022l.4.4a.227.227,0,1,0,.32-.321l-.4-.4a.531.531,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49L12.194,74.1H10.229a.832.832,0,0,0-.592.245L7.118,76.867,4.6,74.349a.832.832,0,0,0-.592-.245H.378A.378.378,0,0,0,0,74.481v.92a.378.378,0,0,0,.378.378H3.66l2.273,2.274L3.66,80.326H.378A.378.378,0,0,0,0,80.7v.92A.378.378,0,0,0,.378,82H4.007a.835.835,0,0,0,.592-.245l2.519-2.519.8.8a.227.227,0,1,0,.32-.32L3.914,75.392a.227.227,0,0,0-.16-.066H.453v-.769H4.007a.382.382,0,0,1,.272.113l6.043,6.043a.227.227,0,0,0,.16.066h2.04a.317.317,0,0,0,.224-.542l-1.054-1.054h1.282a.075.075,0,0,1,.053.022l1.958,1.958-1.958,1.958a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542H10.229a.383.383,0,0,1-.272-.113l-.968-.968a.227.227,0,0,0-.32.32l.968.968a.833.833,0,0,0,.592.245h1.965l-1.105,1.105a.287.287,0,0,0,.2.49h1.683a.525.525,0,0,0,.374-.155l2.011-2.011A.379.379,0,0,0,15.359,80.9Zm-11.08.539a.389.389,0,0,1-.272.113H.453v-.769h3.3a.226.226,0,0,0,.16-.066l2.34-2.34.543.544Z"
                                  transform="translate(0 0)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <span className="visually-hidden">Compare</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__items--content text-center">
                      <div className="product__items--color">
                        <ul className="product__items--color__wrapper d-flex justify-content-center">
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link one"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 1</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link two"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 2</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link three"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 3</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link four"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 4</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="product__items--content__title h4">
                        <Link href="/product-details">Folding Tables Chairs</Link>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$175.00</span>
                        <span className="old__price">$190.00</span>
                      </div>
                      <Link
                        className="product__items--action__cart--btn primary__btn"
                        href="/cart"
                      >
                        <svg
                          className="product__items--action__cart--btn__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.897"
                          height="14.565"
                          viewBox="0 0 18.897 21.565"
                        >
                          <path
                            d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                            transform="translate(-2.667 -1.366)"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="add__to--cart__text">
                          {" "}
                          Add to cart
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product__items ">
                    <div className="product__items--thumbnail">
                      <Link
                        className="product__items--link"
                        href="/product-details"
                      >
                        <img
                          className="product__items--img product__primary--img"
                          src="assets/img/product/product11.webp"
                          alt="product-img"
                        />
                        <img
                          className="product__items--img product__secondary--img"
                          src="assets/img/product/product12.webp"
                          alt="product-img"
                        />
                      </Link>
                      <ul className="product__items--action d-flex justify-content-center">
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            data-open="modal1"
                            href="javascript:void(0)"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.51"
                              height="19.443"
                              viewBox="0 0 512 512"
                            >
                              <path
                                d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                              />
                              <circle
                                cx={256}
                                cy={256}
                                r={80}
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit={10}
                                strokeWidth={32}
                              />
                            </svg>
                            <span className="visually-hidden">Quick View</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/wishlist"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="17.51"
                              height="15.443"
                              viewBox="0 0 24.526 21.82"
                            >
                              <path
                                d="M12.263,21.82a1.438,1.438,0,0,1-.948-.356c-.991-.866-1.946-1.681-2.789-2.4l0,0a51.865,51.865,0,0,1-6.089-5.715A9.129,9.129,0,0,1,0,7.371,7.666,7.666,0,0,1,1.946,2.135,6.6,6.6,0,0,1,6.852,0a6.169,6.169,0,0,1,3.854,1.33,7.884,7.884,0,0,1,1.558,1.627A7.885,7.885,0,0,1,13.821,1.33,6.169,6.169,0,0,1,17.675,0,6.6,6.6,0,0,1,22.58,2.135a7.665,7.665,0,0,1,1.945,5.235,9.128,9.128,0,0,1-2.432,5.975,51.86,51.86,0,0,1-6.089,5.715c-.844.719-1.8,1.535-2.794,2.4a1.439,1.439,0,0,1-.948.356ZM6.852,1.437A5.174,5.174,0,0,0,3,3.109,6.236,6.236,0,0,0,1.437,7.371a7.681,7.681,0,0,0,2.1,5.059,51.039,51.039,0,0,0,5.915,5.539l0,0c.846.721,1.8,1.538,2.8,2.411,1-.874,1.965-1.693,2.812-2.415a51.052,51.052,0,0,0,5.914-5.538,7.682,7.682,0,0,0,2.1-5.059,6.236,6.236,0,0,0-1.565-4.262,5.174,5.174,0,0,0-3.85-1.672A4.765,4.765,0,0,0,14.7,2.467a6.971,6.971,0,0,0-1.658,1.918.907.907,0,0,1-1.558,0A6.965,6.965,0,0,0,9.826,2.467a4.765,4.765,0,0,0-2.975-1.03Zm0,0"
                                transform="translate(0 0)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Wishlist</span>
                          </Link>
                        </li>
                        <li className="product__items--action__list">
                          <Link
                            className="product__items--action__btn"
                            href="/compare"
                          >
                            <svg
                              className="product__items--action__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.47"
                              height="13.088"
                              viewBox="0 0 15.47 11.088"
                            >
                              <g transform="translate(0 -72.508)">
                                <path
                                  data-name="Path 114"
                                  d="M15.359,80.9l-2.011-2.011a.525.525,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49l1.106,1.106H10.576L8.3,78.052l2.273-2.274h1.618l-1.106,1.106a.287.287,0,0,0,.2.49h1.683a.531.531,0,0,0,.374-.155l2.011-2.011a.38.38,0,0,0,0-.535l-.859-.859a.227.227,0,1,0-.32.321l.806.806L13.027,76.9a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542h-2.04a.227.227,0,0,0-.16.066l-2.34,2.34-.544-.544,2.519-2.519a.382.382,0,0,1,.272-.112h2.293a.317.317,0,0,0,.225-.542l-1.054-1.054h1.282a.076.076,0,0,1,.053.022l.4.4a.227.227,0,1,0,.32-.321l-.4-.4a.531.531,0,0,0-.374-.155H11.291a.287.287,0,0,0-.2.49L12.194,74.1H10.229a.832.832,0,0,0-.592.245L7.118,76.867,4.6,74.349a.832.832,0,0,0-.592-.245H.378A.378.378,0,0,0,0,74.481v.92a.378.378,0,0,0,.378.378H3.66l2.273,2.274L3.66,80.326H.378A.378.378,0,0,0,0,80.7v.92A.378.378,0,0,0,.378,82H4.007a.835.835,0,0,0,.592-.245l2.519-2.519.8.8a.227.227,0,1,0,.32-.32L3.914,75.392a.227.227,0,0,0-.16-.066H.453v-.769H4.007a.382.382,0,0,1,.272.113l6.043,6.043a.227.227,0,0,0,.16.066h2.04a.317.317,0,0,0,.224-.542l-1.054-1.054h1.282a.075.075,0,0,1,.053.022l1.958,1.958-1.958,1.958a.075.075,0,0,1-.053.022H11.692l1.054-1.054a.317.317,0,0,0-.224-.542H10.229a.383.383,0,0,1-.272-.113l-.968-.968a.227.227,0,0,0-.32.32l.968.968a.833.833,0,0,0,.592.245h1.965l-1.105,1.105a.287.287,0,0,0,.2.49h1.683a.525.525,0,0,0,.374-.155l2.011-2.011A.379.379,0,0,0,15.359,80.9Zm-11.08.539a.389.389,0,0,1-.272.113H.453v-.769h3.3a.226.226,0,0,0,.16-.066l2.34-2.34.543.544Z"
                                  transform="translate(0 0)"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                            <span className="visually-hidden">Compare</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__items--content text-center">
                      <div className="product__items--color">
                        <ul className="product__items--color__wrapper d-flex justify-content-center">
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link one"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 1</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link two"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 2</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link three"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 3</span>
                            </Link>
                          </li>
                          <li className="product__items--color__list">
                            <Link
                              className="product__items--color__link four"
                              href="javascript:void(0)"
                            >
                              <span className="visually-hidden">Color 4</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="product__items--content__title h4">
                        <Link href="/product-details">Modern Fabric Chair</Link>
                      </h3>
                      <div className="product__items--price">
                        <span className="current__price">$165.00</span>
                        <span className="old__price">$210.00</span>
                      </div>
                      <Link
                        className="product__items--action__cart--btn primary__btn"
                        href="/cart"
                      >
                        <svg
                          className="product__items--action__cart--btn__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.897"
                          height="14.565"
                          viewBox="0 0 18.897 21.565"
                        >
                          <path
                            d="M16.84,8.082V6.091a4.725,4.725,0,1,0-9.449,0v4.725a.675.675,0,0,0,1.35,0V9.432h5.4V8.082h-5.4V6.091a3.375,3.375,0,0,1,6.75,0v4.691a.675.675,0,1,0,1.35,0V9.433h3.374V21.581H4.017V9.432H6.041V8.082H2.667V21.641a1.289,1.289,0,0,0,1.289,1.29h16.32a1.289,1.289,0,0,0,1.289-1.29V8.082Z"
                            transform="translate(-2.667 -1.366)"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="add__to--cart__text">
                          {" "}
                          Add to cart
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper__nav--btn swiper-button-next" />
              <div className="swiper__nav--btn swiper-button-prev" />
            </div>
          </div>
        </section>
        {/* End product section */}
        {/* Start Newsletter banner section */}
        <section className="newsletter__banner--section section--padding pt-0">
          <div className="container">
            <div className="newsletter__banner--thumbnail position__relative">
              <img
                className="newsletter__banner--thumbnail__img"
                src="assets/img/banner/banner-bg7.webp"
                alt="newsletter-banner"
              />
              <div className="newsletter__content newsletter__subscribe">
                <h5 className="newsletter__content--subtitle text-white">
                  Want to offer regularly ?
                </h5>
                <h2 className="newsletter__content--title text-white h3 mb-25">
                  Subscribe Our Newsletter <br />
                  for Get Daily Update
                </h2>
                <form
                  className="newsletter__subscribe--form position__relative"
                  action="#"
                >
                  <label>
                    <input
                      className="newsletter__subscribe--input"
                      placeholder="Enter your email address"
                      type="email"
                    />
                  </label>
                  <button
                    className="newsletter__subscribe--button primary__btn"
                    type="submit"
                  >
                    Subscribe
                    <svg
                      className="newsletter__subscribe--button__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="9.159"
                      height="7.85"
                      viewBox="0 0 9.159 7.85"
                    >
                      <path
                        data-name="Icon material-send"
                        d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z"
                        transform="translate(-3 -4.5)"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Newsletter banner section */}
      </main>
      {/* Start footer section */}
      <footer className="footer__section footer__bg">
        <div className="container-fluid">
          <div className="main__footer">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h2 className="footer__widget--title sm__footer--widget__bock">
                    About Us{" "}
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <div className="footer__widget--inner">
                    <Link className="footer__logo" href="/">
                      <img
                        src="assets/img/logo/nav-log.webp"
                        alt="footer-logo"
                      />
                    </Link>
                    <p className="footer__widget--desc">
                      Ut enim ad minim veniam, quis <br /> nostrud exercitation
                      ullamco laboris <br /> nisi ut aliquip ex ea commodo.
                    </p>
                    <div className="footer__social">
                      <ul className="social__shear d-flex">
                        <li className="social__shear--list">
                          <Link
                            className="social__shear--list__icon"
                            target="_blank"
                            href="https://www.facebook.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="11.239"
                              height="20.984"
                              viewBox="0 0 11.239 20.984"
                            >
                              <path
                                id="Icon_awesome-facebook-f"
                                data-name="Icon awesome-facebook-f"
                                d="M11.575,11.8l.583-3.8H8.514V5.542A1.9,1.9,0,0,1,10.655,3.49h1.657V.257A20.2,20.2,0,0,0,9.371,0c-3,0-4.962,1.819-4.962,5.112V8.006H1.073v3.8H4.409v9.181H8.514V11.8Z"
                                transform="translate(-1.073)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Facebook</span>
                          </Link>
                        </li>
                        <li className="social__shear--list">
                          <Link
                            className="social__shear--list__icon"
                            target="_blank"
                            href="https://twitter.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height="19.492"
                              viewBox="0 0 24 19.492"
                            >
                              <path
                                id="Icon_awesome-twitter"
                                data-name="Icon awesome-twitter"
                                d="M21.533,7.112c.015.213.015.426.015.64A13.9,13.9,0,0,1,7.553,21.746,13.9,13.9,0,0,1,0,19.538a10.176,10.176,0,0,0,1.188.061,9.851,9.851,0,0,0,6.107-2.1,4.927,4.927,0,0,1-4.6-3.411,6.2,6.2,0,0,0,.929.076,5.2,5.2,0,0,0,1.294-.167A4.919,4.919,0,0,1,.975,9.168V9.107A4.954,4.954,0,0,0,3.2,9.731,4.926,4.926,0,0,1,1.675,3.152,13.981,13.981,0,0,0,11.817,8.3,5.553,5.553,0,0,1,11.7,7.173a4.923,4.923,0,0,1,8.513-3.365A9.684,9.684,0,0,0,23.33,2.619,4.906,4.906,0,0,1,21.167,5.33,9.861,9.861,0,0,0,24,4.569a10.573,10.573,0,0,1-2.467,2.543Z"
                                transform="translate(0 -2.254)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Twitter</span>
                          </Link>
                        </li>
                        <li className="social__shear--list">
                          <Link
                            className="social__shear--list__icon"
                            target="_blank"
                            href="https://www.instagram.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.497"
                              height="19.492"
                              viewBox="0 0 19.497 19.492"
                            >
                              <path
                                id="Icon_awesome-instagram"
                                data-name="Icon awesome-instagram"
                                d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z"
                                transform="translate(0.004 -1.492)"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Instagram</span>
                          </Link>
                        </li>
                        <li className="social__shear--list">
                          <Link
                            className="social__shear--list__icon"
                            target="_blank"
                            href="https://www.linkedin.com"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.419"
                              height="19.419"
                              viewBox="0 0 19.419 19.419"
                            >
                              <path
                                id="Icon_awesome-linkedin-in"
                                data-name="Icon awesome-linkedin-in"
                                d="M4.347,19.419H.321V6.454H4.347ZM2.332,4.686A2.343,2.343,0,1,1,4.663,2.332,2.351,2.351,0,0,1,2.332,4.686ZM19.415,19.419H15.4V13.108c0-1.5-.03-3.433-2.093-3.433-2.093,0-2.414,1.634-2.414,3.325v6.42H6.869V6.454H10.73V8.223h.056A4.23,4.23,0,0,1,14.6,6.129c4.075,0,4.824,2.683,4.824,6.168v7.122Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span className="visually-hidden">Linkedin</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h2 className="footer__widget--title ">
                    Quick Links{" "}
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <ul className="footer__widget--menu footer__widget--inner">
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/wishlist"
                      >
                        Wishlist
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link className="footer__widget--menu__text" href="/faq">
                        Frequently
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h2 className="footer__widget--title ">
                    Account Info{" "}
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <ul className="footer__widget--menu footer__widget--inner">
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/my-account"
                      >
                        My Account
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/cart"
                      >
                        Shopping Cart
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/login"
                      >
                        Register
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list">
                      <Link
                        className="footer__widget--menu__text"
                        href="/checkout"
                      >
                        Checkout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer__widget">
                  <h2 className="footer__widget--title ">
                    Newsletter{" "}
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                    />
                    <svg
                      className="footer__widget--title__arrowdown--icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.355"
                      height="8.394"
                      viewBox="0 0 10.355 6.394"
                    >
                      <path
                        d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                        transform="translate(-6 -8.59)"
                        fill="currentColor"
                      />
                    </svg>
                  </h2>
                  <div className="footer__newsletter footer__widget--inner">
                    <p className="footer__newsletter--desc">
                      Get updates by subscribe our weekly newsletter
                    </p>
                    <form
                      className="newsletter__subscribe--form__style position__relative"
                      action="#"
                    >
                      <label>
                        <input
                          className="footer__newsletter--input newsletter__subscribe--input"
                          placeholder="Enter your email address"
                          type="email"
                        />
                      </label>
                      <button
                        className="footer__newsletter--button newsletter__subscribe--button primary__btn"
                        type="submit"
                      >
                        Subscribe
                        <svg
                          className="newsletter__subscribe--button__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.159"
                          height="7.85"
                          viewBox="0 0 9.159 7.85"
                        >
                          <path
                            data-name="Icon material-send"
                            d="M3,12.35l9.154-3.925L3,4.5,3,7.553l6.542.872L3,9.3Z"
                            transform="translate(-3 -4.5)"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom d-flex justify-content-between align-items-center">
            <p className="copyright__content">
              Copyright © 2022{" "}
              <Link className="copyright__content--link" href="/">
                Furea
              </Link>{" "}
              . All Rights Reserved.Design By Furea
            </p>
            <div className="footer__payment text-right">
              <img
                className="footer__payment--visa__card display-block"
                src="assets/img/other/payment-visa-card.webp"
                alt="visa-card"
              />
            </div>
          </div>
        </div>
      </footer>
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
                <div className="quickview__gallery quickview__swiper--activation swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="quickview__thumbnail">
                        <Link
                          className="quickview__thumbnail--link"
                          href="/product-details"
                        >
                          <img
                            className="quickview__thumbnail--img"
                            src="assets/img/product/big-product2.webp"
                            alt="product-img"
                          />
                        </Link>
                        <div className="product__badge">
                          <span className="product__badge--items sale">
                            Sale
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="quickview__thumbnail">
                        <Link
                          className="quickview__thumbnail--link"
                          href="/product-details"
                        >
                          <img
                            className="quickview__thumbnail--img"
                            src="assets/img/product/big-product3.webp"
                            alt="product-img"
                          />
                        </Link>
                        <div className="product__badge">
                          <span className="product__badge--items sale">
                            Sale
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="quickview__thumbnail">
                        <Link
                          className="quickview__thumbnail--link"
                          href="/product-details"
                        >
                          <img
                            className="quickview__thumbnail--img"
                            src="assets/img/product/big-product4.webp"
                            alt="product-img"
                          />
                        </Link>
                        <div className="product__badge">
                          <span className="product__badge--items sale">
                            Sale
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper__nav--btn swiper-button-next" />
                  <div className="swiper__nav--btn swiper-button-prev" />
                  <div className="quickview__gallery--pagination swiper-pagination" />
                </div>
              </div>
              <div className="col">
                <div className="quickview__info">
                  <form action="#">
                    <h2 className="product__details--info__title mb-10">
                      Oversize Cotton Dress
                    </h2>
                    <div className="product__details--info__price mb-12">
                      <span className="current__price">$58.00</span>
                      <span className="old__price">$68.00</span>
                    </div>
                    <div className="quickview__info--ratting d-flex align-items-center mb-10">
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
                    <p className="product__details--info__desc mb-10">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
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
                                id="color-red5"
                                name="color"
                                type="radio"
                                defaultChecked=""
                              />
                              <label
                                className="variant__color--value red"
                                htmlFor="color-red5"
                                title="Red"
                              >
                                <img
                                  className="variant__color--value__img"
                                  src="assets/img/product/product1.webp"
                                  alt="variant-color-img"
                                />
                              </label>
                            </div>
                            <div className="variant__color--list">
                              <input
                                id="color-red6"
                                name="color"
                                type="radio"
                              />
                              <label
                                className="variant__color--value red"
                                htmlFor="color-red6"
                                title="Black"
                              >
                                <img
                                  className="variant__color--value__img"
                                  src="assets/img/product/product6.webp"
                                  alt="variant-color-img"
                                />
                              </label>
                            </div>
                            <div className="variant__color--list">
                              <input
                                id="color-red7"
                                name="color"
                                type="radio"
                              />
                              <label
                                className="variant__color--value red"
                                htmlFor="color-red7"
                                title="Pink"
                              >
                                <img
                                  className="variant__color--value__img"
                                  src="assets/img/product/product7.webp"
                                  alt="variant-color-img"
                                />
                              </label>
                            </div>
                            <div className="variant__color--list">
                              <input
                                id="color-red8"
                                name="color"
                                type="radio"
                              />
                              <label
                                className="variant__color--value red"
                                htmlFor="color-red8"
                                title="Orange"
                              >
                                <img
                                  className="variant__color--value__img"
                                  src="assets/img/product/product4.webp"
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
                                id="weight4"
                                name="weight"
                                type="radio"
                                defaultChecked=""
                              />
                              <label
                                className="variant__size--value red"
                                htmlFor="weight4"
                              >
                                5 kg
                              </label>
                            </li>
                            <li className="variant__size--list">
                              <input id="weight5" name="weight" type="radio" />
                              <label
                                className="variant__size--value red"
                                htmlFor="weight5"
                              >
                                3 kg
                              </label>
                            </li>
                            <li className="variant__size--list">
                              <input id="weight6" name="weight" type="radio" />
                              <label
                                className="variant__size--value red"
                                htmlFor="weight6"
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
