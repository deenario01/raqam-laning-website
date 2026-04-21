"use client";

import Link from "next/link";
import Image from "next/image";
import SocialShare from "./SocialShare";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      const isMobileView = width < 768; // md breakpoint
      setIsMobile(isMobileView);
      console.log('Window width:', width, 'isMobile:', isMobileView); // Debug log
    };
    
    // Set initial state to false to ensure content is visible on first render
    setIsMobile(false);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Cleanup offcanvas elements that cause scroll issues
  useEffect(() => {
    const cleanupOffcanvas = () => {
      // Only run cleanup on shop-related pages to avoid interfering with mobile navigation
      const isShopPage = window.location.pathname.includes('/shop') || 
                        window.location.pathname.includes('/product') ||
                        window.location.pathname.includes('/cart') ||
                        window.location.pathname.includes('/checkout');
      
      if (!isShopPage) {
        return; // Don't run cleanup on non-shop pages
      }
      
      // Only target shop filter offcanvas elements, not mobile navigation
      const shopFilterOffcanvas = document.querySelectorAll('.offcanvas__filter--sidebar.widget__area');
      shopFilterOffcanvas.forEach(element => {
        element.classList.remove('active');
        element.style.transform = 'translateX(-100%)';
      });
      
      // Reset body scroll only if it was modified by shop filters
      if (document.body.style.overflow === 'hidden' && document.body.dataset.offcanvasOpen) {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        delete document.body.dataset.offcanvasOpen;
      }
    };

    // Cleanup on component mount and before unmount
    cleanupOffcanvas();
    
    // Cleanup on page visibility change (navigation)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        cleanupOffcanvas();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Cleanup on beforeunload
    window.addEventListener('beforeunload', cleanupOffcanvas);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', cleanupOffcanvas);
      cleanupOffcanvas();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @media only screen and (min-width: 768px) {
          .follow-us-section .footer__widget--title {
            margin-bottom: -0.5rem !important;
          }
        }
        @media only screen and (max-width: 767px) {
          .quick-links-section {
            margin-top: 2rem !important;
          }
        }
        .footer__social .social__shear--list__icon {
          color: white !important;
        }
        .footer__social .social__shear--list__icon svg {
          color: white !important;
          fill: white !important;
        }
        .footer__social .social__shear--list__icon:hover {
          color: #ccc !important;
        }
        .footer__social .social__shear--list__icon:hover svg {
          color: #ccc !important;
          fill: #ccc !important;
        }
        /* More specific overrides */
        .footer__section .footer__social .social__shear--list__icon {
          color: white !important;
        }
        .footer__section .footer__social .social__shear--list__icon svg {
          color: white !important;
          fill: white !important;
        }
        .footer__section .footer__social .social__shear--list__icon:hover {
          color: #ccc !important;
        }
        .footer__section .footer__social .social__shear--list__icon:hover svg {
          color: #ccc !important;
          fill: #ccc !important;
        }
      `}</style>
      {/* Start footer section */}
      <footer className="footer__section footer__bg">
        <div className="container-fluid">
          <div className="main__footer">
            <div className="row">
              {/* Left Column - Logo and Description - Hidden on Mobile */}
              <div className="col-lg-4 col-md-6 d-none d-lg-block">
                <div className="footer__widget text-left">
                  <h2 className="footer__widget--title sm__footer--widget__bock">
                    About Us{" "}
                    <button
                      className="footer__widget--button"
                      aria-label="footer widget button"
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      aria-expanded={isAboutOpen}
                    />
                    <svg
                      className={`footer__widget--title__arrowdown--icon ${isAboutOpen ? 'rotated' : ''}`}
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
                  <div className={`footer__widget--inner ${isAboutOpen ? 'open' : ''}`}>
                    <Link className="footer__logo" href="/" style={{display: 'block', textAlign: 'left'}}>
                      <img
                        src="/assets/img/Raqam-logo-for-footer-01-300x72.png"
                        alt="footer-logo"
                      />
                    </Link>
                    <p className="footer__widget--desc text-left" style={{width: '100%'}}>
                    RAQAM International Labels & Packages factory is 100% foreign investment factory established in 2003 under Saudi Arabian General Investment Authority (SAGIA).
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Column - Social Share Component */}
              <div className="col-lg-4 col-md-6">
                <div className="footer__widget text-center follow-us-section" style={{ marginTop: '0', marginBottom: '2rem' }}>
                  <h2 className="footer__widget--title" style={{ marginTop: '0', marginBottom: '1rem' }}>
                    Follow Us
                  </h2>
                  <div className="footer__widget--inner open" style={{ display: 'block', maxHeight: 'none', opacity: 1 }}>
                    <div className="footer__social">
                      <ul className="social__shear d-flex justify-content-center align-items-center gap-3">
                        <li className="social__shear--list">
                          <Link
                            className="social__shear--list__icon"
                            target="_blank"
                            href="https://www.facebook.com/RAQAMinternational"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="white"
                              style={{color: 'white'}}
                            >
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span className="visually-hidden">Facebook</span>
                          </Link>
                        </li>
                        <li className="social__shear--list">
                          <Link
                            className="social__shear--list__icon"
                            target="_blank"
                            href="https://x.com/RAQAM_Int"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="white"
                              style={{color: 'white'}}
                            >
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            <span className="visually-hidden">Twitter</span>
                          </Link>
                        </li>
                        <li className="social__shear--list">
                          <Link
                            className="social__shear--list__icon"
                            target="_blank"
                            href="https://www.instagram.com/RAQAMinternationalco"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="white"
                              style={{color: 'white'}}
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            <span className="visually-hidden">Instagram</span>
                          </Link>
                        </li>
                      </ul>
                      
                      {/* International Pages Section */}
                      <div className="international__pages" style={{ marginTop: '2.5rem' }}>
                        <h3 style={{ 
                          fontSize: '16px', 
                          fontWeight: '600', 
                          color: 'white', 
                          marginBottom: '1.5rem',
                          textAlign: 'center'
                        }}>
                          Explore our international pages
                        </h3>
                        <ul className="social__shear d-flex justify-content-center align-items-center gap-3">
                          <li className="social__shear--list">
                            <Link
                              className="social__shear--list__icon"
                              target="_blank"
                              href="https://raqamint.com.pk/"
                              style={{ 
                                width: '28px', 
                                height: '22px', 
                                borderRadius: '2px',
                                overflow: 'hidden',
                                objectFit: 'cover'
                              }}
                            >
                              <img
                                src="/assets/img/pakistan (1).png"
                                alt="Pakistan"
                                style={{ 
                                  width: '100%', 
                                  height: '100%', 
                                  objectFit: 'cover' 
                                }}
                              />
                              <span className="visually-hidden">Pakistan</span>
                            </Link>
                          </li>
                          <li className="social__shear--list">
                            <Link
                              className="social__shear--list__icon"
                              target="_blank"
                              href="https://fortelabels.com/"
                              style={{ 
                                width: '28px', 
                                height: '22px', 
                                borderRadius: '2px',
                                overflow: 'hidden',
                                objectFit: 'cover'
                              }}
                            >
                              <img
                                src="/assets/img/canada (1).png"
                                alt="Canada"
                                style={{ 
                                  width: '100%', 
                                  height: '100%', 
                                  objectFit: 'cover' 
                                }}
                              />
                              <span className="visually-hidden">Canada</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Quick Links */}
              <div className="col-lg-4 col-md-6">
                <div className="footer__widget text-center quick-links-section" style={{ marginTop: '0', marginBottom: '2rem' }}>
                  <h2 className="footer__widget--title" style={{ marginTop: '0', marginBottom: '1.5rem' }}>
                    Quick Links
                  </h2>
                  <ul className="footer__widget--menu footer__widget--inner open" style={{ display: 'block', maxHeight: 'none', opacity: 1 }}>
                    <li className="footer__widget--menu__list" style={{marginBottom: '0.8rem'}}>
                      <Link
                        className="footer__widget--menu__text"
                        href="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list" style={{marginBottom: '0.8rem'}}>
                      <Link
                        className="footer__widget--menu__text"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list" style={{marginBottom: '0.8rem'}}>
                      <Link className="footer__widget--menu__text" href="/news">
                        News
                      </Link>
                    </li>
                    <li className="footer__widget--menu__list" style={{marginBottom: '0.8rem'}}>
                      <Link className="footer__widget--menu__text" href="/careers">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Information - Only visible on mobile */}
              <div className="col-12 text-center d-block d-lg-none" style={{marginTop: '2rem'}}>
                <h2 style={{color: 'white', fontSize: '20px', marginBottom: '1.5rem', marginTop: '0'}}>
                  Contact Information
                </h2>
                <div style={{marginTop: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', flexWrap: 'wrap'}}>
                    <div style={{marginRight: '1rem', fontSize: '18px', flexShrink: 0}}>
                      📍
                    </div>
                    <span style={{fontSize: '14px', lineHeight: '1.6', color: 'white', textAlign: 'center'}}>7470, New Industrial Area, 3283, Riyadh 14332, Saudi Arabia</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
                    <div style={{marginRight: '1rem', fontSize: '18px', flexShrink: 0}}>
                      📞
                    </div>
                    <span style={{fontSize: '14px', lineHeight: '1.6', color: 'white', textAlign: 'center'}}>+966 11 499 0707</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="footer__copyright" style={{
          backgroundColor: '#333',
          padding: '15px 0',
          borderTop: '1px solid #444'
        }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="footer__copyright--content text-center">
                  <p style={{
                    color: '#fff',
                    fontSize: '14px',
                    margin: 0,
                    fontWeight: '400'
                  }}>
                    © 2022 Raqam Saudi Arabia | Disclaimer | <Link href="/terms-and-conditions" style={{ color: '#fff', textDecoration: 'none' }}>Terms Of Services</Link> | <Link href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End footer section */}
    </>
  );
}
