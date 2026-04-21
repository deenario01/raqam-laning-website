"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutDropdownOpen, setIsMobileAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileContactDropdownOpen, setIsMobileContactDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Clean up mobile menu and search when route changes
  useEffect(() => {
    const cleanup = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.classList.remove("mobile_menu_open");
        document.body.style.overflow = '';
      }
      if (isSearchOpen) {
        setIsSearchOpen(false);
        document.body.classList.remove("search_active");
        document.body.style.overflow = '';
      }
      if (isAboutDropdownOpen) {
        setIsAboutDropdownOpen(false);
      }
      if (isMobileAboutDropdownOpen) {
        setIsMobileAboutDropdownOpen(false);
      }
      if (isContactDropdownOpen) {
        setIsContactDropdownOpen(false);
      }
      if (isMobileContactDropdownOpen) {
        setIsMobileContactDropdownOpen(false);
      }
    };

    // Only clean up when pathname changes, not on every render
    cleanup();

    return () => {
      // Clean up on unmount
      cleanup();
    };
  }, [pathname]); // Only depend on pathname changes

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("mobile_menu_open", "search_active");
      document.body.style.overflow = '';
    };
  }, []);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handleBeforeUnload = () => {
      document.body.classList.remove("mobile_menu_open", "search_active");
      document.body.style.overflow = '';
    };

    const handlePopState = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.classList.remove("mobile_menu_open");
        document.body.style.overflow = '';
      }
      if (isSearchOpen) {
        setIsSearchOpen(false);
        document.body.classList.remove("search_active");
        document.body.style.overflow = '';
      }
      if (isAboutDropdownOpen) {
        setIsAboutDropdownOpen(false);
      }
      if (isMobileAboutDropdownOpen) {
        setIsMobileAboutDropdownOpen(false);
      }
      if (isContactDropdownOpen) {
        setIsContactDropdownOpen(false);
      }
      if (isMobileContactDropdownOpen) {
        setIsMobileContactDropdownOpen(false);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  useEffect(() => {
    // Function to update cart count
    const updateCartCount = () => {
      try {
        const raw = localStorage.getItem("quotationCart");
        const parsed = raw ? JSON.parse(raw) : [];
        const count = Array.isArray(parsed) ? parsed.length : 0;
        setCartItemsCount(count);
      } catch (e) {
        setCartItemsCount(0);
      }
    };

    // Initial load
    updateCartCount();

    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (e.key === "quotationCart") {
        updateCartCount();
      }
    };

    // Listen for custom events (when cart is updated from other components)
    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);


  return (
    <>
      {/* Start header area */}
      <header className="header__section header__transparent">
        {/* Start Header topbar - Hidden on mobile, visible on desktop */}
        <div className="header__topbar bg__primary d-none d-md-block" style={{ 
          backgroundColor: '#1363a6',
          backgroundImage: 'url(/assets/img/navbar.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="container-fluid">
            <div className="header__topbar--inner d-flex flex-column flex-md-row align-items-center justify-content-between">
              {/* Contact Information - Hidden on mobile, visible on desktop */}
              <div className="header__contact d-none d-md-flex align-items-center">
                <div className="header__contact--item d-flex align-items-center me-4">
                  <div className="header__contact--icon me-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="header__contact--text text-white text-nowrap">7470, New Industrial Area, 3283, Riyadh 14332, Saudi Arabia</span>
                </div>
                <div className="header__contact--item d-flex align-items-center">
                  <div className="header__contact--icon me-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="header__contact--text text-white text-nowrap">+966 11 499 0707</span>
                </div>
              </div>
              
              {/* Social Media Links and Country Flags - Hidden on mobile, visible on desktop */}
              <div className="header__social d-none d-md-flex align-items-center">
                {/* Social Media Icons */}
                <div className="header__social--icons d-flex align-items-center me-4">
                  <Link className="header__social--link me-2 me-md-3" href="https://www.facebook.com/profile.php?id=100084702410309" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Link>
                  <Link className="header__social--link me-2 me-md-3" href="https://twitter.com/RAQAM_Int" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                  <Link className="header__social--link" href="https://www.instagram.com/RAQAMinternationalco" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                </div>
                
                {/* Country Flags */}
                <div className="header__flags d-flex align-items-center">
                  <Link className="header__flag--link me-2 me-md-3" href="https://raqamint.com.pk/" target="_blank" rel="noopener noreferrer" title="Pakistan" style={{background: 'none', padding: '0', borderRadius: '0', width: 'auto', height: 'auto'}}>
                    <img 
                      src="/assets/img/pakistan.png" 
                      alt="Pakistan Flag" 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  </Link>
                  <Link className="header__flag--link" href="https://fortelabels.com/" target="_blank" rel="noopener noreferrer" title="Canada" style={{background: 'none', padding: '0', borderRadius: '0', width: 'auto', height: 'auto'}}>
                    <img 
                      src="/assets/img/canada.png" 
                      alt="Canada Flag" 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header topbar */}
        {/* Start main header */}
        <div className="main__header header__sticky">
          <div className="container-fluid">
            <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
              <div className="offcanvas__header--menu__open ">
                <button
                  className="offcanvas__header--menu__open--btn"
                  type="button"
                  aria-label="Open mobile menu"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setIsMobileMenuOpen(true);
                    setIsMobileAboutDropdownOpen(false); // Close dropdown when opening menu
                    document.body.classList.add("mobile_menu_open");
                    document.body.style.overflow = 'hidden';
                  }}
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
                </button>
              </div>
              <div className="main__logo">
                <h1 className="main__logo--title">
                  <Link className="main__logo--link" href="/">
                    <img
                      className="main__logo--img mobile-logo-responsive"
                      src="/assets/img/main_logo.png"
                      alt="logo-img"
                    />
                  </Link>
                </h1>
              </div>
              <div className="header__menu d-none d-lg-block">
                <nav className="header__menu--navigation">
                  <ul className="d-flex">
                    <li className="header__menu--items">
                      <Link className="header__menu--link" href="/">
                        Home 
                      </Link>
                    </li>
                    <li className="header__menu--items mega__menu--items">
                      <Link className="header__menu--link" href="/products">
                        Products
                      </Link>
                    </li>
                    <li className="header__menu--items dropdown__menu--items">
                      <Link 
                        className="header__menu--link dropdown__menu--link" 
                        href="/about"
                        onMouseEnter={() => setIsAboutDropdownOpen(true)}
                        onMouseLeave={() => setIsAboutDropdownOpen(false)}
                      >
                        About Us{" "}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          style={{ marginLeft: '5px', transition: 'transform 0.3s ease' }}
                        >
                          <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                      </Link>
                      <ul 
                        className={`dropdown__menu ${isAboutDropdownOpen ? 'dropdown__menu--open' : ''}`}
                        onMouseEnter={() => setIsAboutDropdownOpen(true)}
                        onMouseLeave={() => setIsAboutDropdownOpen(false)}
                      >
                        <li className="dropdown__menu--items">
                          <Link className="dropdown__menu--link" href="/about#history">
                            History
                          </Link>
                        </li>
                        <li className="dropdown__menu--items">
                          <Link className="dropdown__menu--link" href="/about#vision-goals">
                            Vision and Goals
                          </Link>
                        </li>
                        <li className="dropdown__menu--items">
                          <Link className="dropdown__menu--link" href="/about#sustainability">
                            Quality and Sustainability
                          </Link>
                        </li>
                        <li className="dropdown__menu--items">
                          <Link className="dropdown__menu--link" href="/about#awards">
                            Awards and Certifications
                          </Link>
                        </li>
                        <li className="dropdown__menu--items">
                          <Link className="dropdown__menu--link" href="/about#team">
                            Teams
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="header__menu--items">
                    <Link className="header__menu--link" href="/news">
                       News{" "}
                      </Link>
                    </li>
                    <li className="header__menu--items dropdown__menu--items">
                      <Link 
                        className="header__menu--link dropdown__menu--link" 
                        href="/contact"
                        onMouseEnter={() => setIsContactDropdownOpen(true)}
                        onMouseLeave={() => setIsContactDropdownOpen(false)}
                      >
                        Contact Us{" "}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          style={{ marginLeft: '5px', transition: 'transform 0.3s ease' }}
                        >
                          <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                      </Link>
                      <ul 
                        className={`dropdown__menu ${isContactDropdownOpen ? 'dropdown__menu--open' : ''}`}
                        onMouseEnter={() => setIsContactDropdownOpen(true)}
                        onMouseLeave={() => setIsContactDropdownOpen(false)}
                      >
                        <li className="dropdown__menu--items">
                          <Link className="dropdown__menu--link" href="/contact#contact">
                            Contact
                          </Link>
                        </li>
                        <li className="dropdown__menu--items">
                          <Link className="dropdown__menu--link" href="/contact#location">
                            Location
                          </Link>
                        </li>
                        <li className="dropdown__menu--items">
                          <Link className="dropdown__menu--link" href="/contact#faq">
                            FAQs
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__account">
                <ul className="d-flex">
                  {/* <li className="header__account--items  header__account--search__items d-md-none">
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
                  </li> */}
                  <li className="header__account--items d-md-none">
                    <Link className="header__account--btn" href="/cart">
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
                      {/* <span className="items__count wishlist">02</span> */}
                    </Link>
                  </li>
                  <li className="header__account--items">
                    <Link
                      className="header__account--btn minicart__open--btn"
                      href="/cart"
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
                      {cartItemsCount > 0 && (
                        <span className="items__count">{cartItemsCount}</span>
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End main header */}
        {/* Start Offcanvas header menu */}
        <div className={`offcanvas__header ${isMobileMenuOpen ? 'open' : ''}`} tabIndex={-1}>
          <div className="offcanvas__inner">
            <div className="offcanvas__logo">
              <Link className="offcanvas__logo_link" href="/">
                <img 
                  src="/assets/img/tab_logo.png" 
                  alt="RAQAM Logo" 
                  style={{
                    maxWidth: '120px',
                    height: 'auto'
                  }}
                />
              </Link>
              <button
                className="offcanvas__close--btn"
                aria-label="offcanvas close btn"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  position: 'absolute',
                  top: '15px',
                  right: '15px'
                }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileAboutDropdownOpen(false); // Close dropdown when closing menu
                  document.body.classList.remove("mobile_menu_open");
                  // Restore body scroll when menu is closed
                  document.body.style.overflow = '';
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <nav className="offcanvas__menu">
              <ul className="offcanvas__menu_ul">
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="/">
                    Home
                  </Link>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="/products">
                    Products
                  </Link>
                </li>
                <li className="offcanvas__menu_li">
                  <div className="offcanvas__menu_item_container">
                    <Link 
                      className="offcanvas__menu_item" 
                      href="/about"
                      onClick={() => {
                        setIsMobileAboutDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                        document.body.classList.remove("mobile_menu_open");
                        document.body.style.overflow = '';
                      }}
                    >
                      About Us
                    </Link>
                    <button 
                      className="offcanvas__dropdown_toggle" 
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 10px' }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsMobileAboutDropdownOpen(!isMobileAboutDropdownOpen);
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ transition: 'transform 0.3s ease', transform: isMobileAboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <polyline points="6,9 12,15 18,9"></polyline>
                      </svg>
                    </button>
                  </div>
                  <ul 
                    className={`offcanvas__dropdown ${isMobileAboutDropdownOpen ? 'offcanvas__dropdown--open' : ''}`}
                  >
                    <li className="offcanvas__dropdown_li">
                      <Link 
                        className="offcanvas__dropdown_item" 
                        href="/about#history"
                        onClick={() => {
                          setIsMobileAboutDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("mobile_menu_open");
                          document.body.style.overflow = '';
                        }}
                      >
                        History
                      </Link>
                    </li>
                    <li className="offcanvas__dropdown_li">
                      <Link 
                        className="offcanvas__dropdown_item" 
                        href="/about#vision-goals"
                        onClick={() => {
                          setIsMobileAboutDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("mobile_menu_open");
                          document.body.style.overflow = '';
                        }}
                      >
                        Vision and Goals
                      </Link>
                    </li>
                    <li className="offcanvas__dropdown_li">
                      <Link 
                        className="offcanvas__dropdown_item" 
                        href="/about#sustainability"
                        onClick={() => {
                          setIsMobileAboutDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("mobile_menu_open");
                          document.body.style.overflow = '';
                        }}
                      >
                        Quality and Sustainability
                      </Link>
                    </li>
                    <li className="offcanvas__dropdown_li">
                      <Link 
                        className="offcanvas__dropdown_item" 
                        href="/about#awards"
                        onClick={() => {
                          setIsMobileAboutDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("mobile_menu_open");
                          document.body.style.overflow = '';
                        }}
                      >
                        Awards and Certifications
                      </Link>
                    </li>
                    <li className="offcanvas__dropdown_li">
                      <Link 
                        className="offcanvas__dropdown_item" 
                        href="/about#team"
                        onClick={() => {
                          setIsMobileAboutDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("mobile_menu_open");
                          document.body.style.overflow = '';
                        }}
                      >
                        Teams
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="offcanvas__menu_li">
                  <Link className="offcanvas__menu_item" href="/news">
                    News
                  </Link>
                </li>
                <li className="offcanvas__menu_li">
                  <div className="offcanvas__menu_item_container">
                    <Link 
                      className="offcanvas__menu_item" 
                      href="/contact"
                      onClick={() => {
                        setIsMobileContactDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                        document.body.classList.remove("mobile_menu_open");
                        document.body.style.overflow = '';
                      }}
                    >
                      Contact Us
                    </Link>
                    <button 
                      className="offcanvas__dropdown_toggle" 
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 10px' }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsMobileContactDropdownOpen(!isMobileContactDropdownOpen);
                      }}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{ transition: 'transform 0.3s ease', transform: isMobileContactDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <polyline points="6,9 12,15 18,9"></polyline>
                      </svg>
                    </button>
                  </div>
                  <ul 
                    className={`offcanvas__dropdown ${isMobileContactDropdownOpen ? 'offcanvas__dropdown--open' : ''}`}
                  >
                    <li className="offcanvas__dropdown_li">
                      <Link 
                        className="offcanvas__dropdown_item" 
                        href="/contact#contact"
                        onClick={() => {
                          setIsMobileContactDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("mobile_menu_open");
                          document.body.style.overflow = '';
                        }}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="offcanvas__dropdown_li">
                      <Link 
                        className="offcanvas__dropdown_item" 
                        href="/contact#location"
                        onClick={() => {
                          setIsMobileContactDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("mobile_menu_open");
                          document.body.style.overflow = '';
                        }}
                      >
                        Location
                      </Link>
                    </li>
                    <li className="offcanvas__dropdown_li">
                      <Link 
                        className="offcanvas__dropdown_item" 
                        href="/contact#faq"
                        onClick={() => {
                          setIsMobileContactDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                          document.body.classList.remove("mobile_menu_open");
                          document.body.style.overflow = '';
                        }}
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

            </nav>
          </div>
        </div>
        {/* End Offcanvas header menu */}
        {/* Mobile menu overlay */}
        <div className={`offcanvas-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => {
          setIsMobileMenuOpen(false);
          setIsMobileAboutDropdownOpen(false); // Close dropdown when closing menu
          document.body.classList.remove("mobile_menu_open");
          document.body.style.overflow = '';
        }}></div>
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
                    src="/assets/img/product/product1.webp"
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
                    src="/assets/img/product/product2.webp"
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
        <div className={`predictive__search--box ${isSearchOpen ? 'active' : ''}`} tabIndex={-1}>
          <div className="predictive__search--box__inner">
            <h2 className="predictive__search--title">Search Products</h2>
            <form className="predictive__search--form" action="/">
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
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
            onClick={() => {
              setIsSearchOpen(false);
              document.body.classList.remove("search_active");
              // Restore body scroll when search is closed
              document.body.style.overflow = '';
            }}
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
    </>
  );
}
