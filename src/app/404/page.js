"use client";

import Link from "next/link";

export default function NotFound() {
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
        {/* Start error section */}
        <section className="error__section section--padding">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="error__content text-center">
                  <img
                    className="error__content--img mb-50"
                    src="assets/img/other/404-thumb.webp"
                    alt="error-img"
                  />
                  <h2 className="error__content--title">
                    Opps ! We're not found this page
                  </h2>
                  <p className="error__content--desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi animi aliquid minima assumenda.
                  </p>
                  <Link
                    className="error__content--btn primary__btn"
                    href="/"
                  >
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End error section */}
        {/* Start Newsletter banner section */}
        <section className="newsletter__banner--section section--padding">
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
