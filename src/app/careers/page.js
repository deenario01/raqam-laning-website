"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export default function Contact() {
  return (
    <>
      {/* Start header area */}
      <Header />
      {/* End header area */}
      <main className="main__content_wrapper">
        {/* Start breadcrumb section */}
        <section className="breadcrumb__section breadcrumb__bg">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">
                    Careers
                  </h1>
                  {/* <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items">
                      <Link className="text-white" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb__content--menu__items">
                      <span className="text-white">Contact Us</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* Start contact section */}
        <section id="contact" className="contact__section section--padding">
          <div className="container">
            <div className="section__heading mb-40">
              <h2 className="section__heading--maintitle contact__section--hrading mb-10">
                Careers
              </h2>
              <p className="contact__section--hrading__desc">
                We're passionate about what we do, and we love talking shop. Whether you need a quick answer, want to explore possibilities, or have a project brewing, reach out through the form below. Consider us your packaging partners, not just your suppliers.
              </p>
            </div>
            <div className="main__contact--area">
              <div className="row align-items-stretch row-md-reverse">
                <div className="col-lg-5">
                  <div className="contact__info border-radius-10" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="contact__info--items">
                      <h3 className="contact__info--content__title text-white mb-15">
                        Contact:
                      </h3>
                      <div className="contact__info--items__inner d-flex">
                        <div className="contact__info--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.568"
                            height="31.128"
                            viewBox="0 0 31.568 31.128"
                          >
                            <path
                              id="ic_phone_forwarded_24px"
                              d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z"
                              transform="translate(-3 -1)"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="contact__info--content">
                          <p className="contact__info--content__desc text-white" style={{ marginTop: '1rem' }}>
                            {/* Change the design through a range <br />{" "} */}
                            <Link href="tel:+01234-567890">+966 11 499 0707</Link>{" "}
                            {/* <Link href="tel:++01234-5688765">+01234-5688765</Link>{" "} */}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="contact__info--items">
                      <h3 className="contact__info--content__title text-white mb-15">
                        Email Address:
                      </h3>
                      <div className="contact__info--items__inner d-flex">
                        <div className="contact__info--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.57"
                            height="31.13"
                            viewBox="0 0 31.57 31.13"
                          >
                            <path
                              id="ic_email_24px"
                              d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z"
                              transform="translate(-2 -4)"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="contact__info--content">
                          <p className="contact__info--content__desc text-white" style={{ marginTop: '1rem' }}>
                            {" "}
                            <Link href="mailto:info@example.com">
                              info@raqam.net
                            </Link>{" "}
                            {/* <br />{" "}
                            <Link href="mailto:info@example.com">
                              info@example.com
                            </Link> */}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="contact__info--items">
                      <h3 className="contact__info--content__title text-white mb-15">
                        Office Location:
                      </h3>
                      <div className="contact__info--items__inner d-flex">
                        <div className="contact__info--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31.57"
                            height="31.13"
                            viewBox="0 0 31.57 31.13"
                          >
                            <path
                              id="ic_account_balance_24px"
                              d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z"
                              transform="translate(-2 -1)"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <div className="contact__info--content">
                          <p className="contact__info--content__desc text-white">
                            {" "}
                            7470, New Industrial Area, 3283, Riyadh 14332, Saudi Arabia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 'auto' }}>
                      <SocialShare />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact__form">
                    <form className="contact__form--inner" action="#">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input1"
                            >
                              First Name{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <input
                              className="contact__form--input"
                              name="firstname"
                              id="input1"
                              placeholder="Your First Name"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input2"
                            >
                              Last Name{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <input
                              className="contact__form--input"
                              name="lastname"
                              id="input2"
                              placeholder="Your Last Name"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input3"
                            >
                              Phone Number{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <input
                              className="contact__form--input"
                              name="number"
                              id="input3"
                              placeholder="Phone number"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input4"
                            >
                              Email{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <input
                              className="contact__form--input"
                              name="email"
                              id="input4"
                              placeholder="Email"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input5"
                            >
                              Write Your Message{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <textarea
                              className="contact__form--textarea"
                              name="message"
                              id="input5"
                              placeholder="Write Your Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="fileInput"
                            >
                              Upload Resume/CV{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                              <input
                                className="contact__form--input"
                                name="resume"
                                id="fileInput"
                                type="file"
                                accept=".pdf,.doc,.docx,.txt"
                                style={{
                                  position: 'absolute',
                                  left: '-9999px',
                                  opacity: 0,
                                  width: '1px',
                                  height: '1px'
                                }}
                              />
                              <label
                                htmlFor="fileInput"
                                style={{
                                  display: 'block',
                                  padding: '12px 20px',
                                  border: '2px dashed #007bff',
                                  borderRadius: '8px',
                                  backgroundColor: '#f8f9fa',
                                  color: '#007bff',
                                  fontSize: '14px',
                                  fontWeight: '500',
                                  textAlign: 'center',
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  width: '100%',
                                  boxSizing: 'border-box'
                                }}
                                onMouseOver={(e) => {
                                  e.target.style.backgroundColor = '#e3f2fd';
                                  e.target.style.borderColor = '#0056b3';
                                }}
                                onMouseOut={(e) => {
                                  e.target.style.backgroundColor = '#f8f9fa';
                                  e.target.style.borderColor = '#007bff';
                                }}
                              >
                                📄 Choose File to Upload Resume/CV
                              </label>
                            </div>
                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                              Accepted formats: PDF, DOC, DOCX, TXT (Max size: 5MB)
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="account__login--remember position__relative mb-15">
                        <input
                          className="checkout__checkbox--input"
                          id="check2"
                          type="checkbox"
                        />
                        <span className="checkout__checkbox--checkmark" />
                        <label
                          className="checkout__checkbox--label login__remember--label"
                          htmlFor="check2"
                        >
                          Accept Terms &amp; Condition
                        </label>
                      </div> */}
                      <button
                        className="contact__form--btn primary__btn"
                        type="submit"
                      >
                        Submit Now
                      </button>
                      <p className="form-messege" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End contact section */}
        
        {/* Start Job Listings section */}
        <section className="job__listings--section section--padding">
          <div className="container">
            <div className="section__heading text-center mb-40">
              <h2 className="section__heading--maintitle" style={{color: '#ed1f26'}}>Job Listings</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="job__listings--content text-center" style={{
                  backgroundColor: '#f8f9fa',
                  padding: '3rem',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(10, 7, 7, 0.39)'
                }}>
                  <p className="job__listings--message" style={{color: '#333', fontSize: '2rem', margin: '0', fontWeight: '500'}}>
                    There are currently no open positions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Job Listings section */}
        {/* Start Newsletter banner section */}
        {/* <section className="newsletter__banner--section section--padding pt-0">
          <div className="container">
            <div className="newsletter__banner--thumbnail position__relative">
              <img
                className="newsletter__banner--thumbnail__img"
                src="/assets/img/banner/banner-bg7.webp"
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
        </section> */}
        {/* End Newsletter banner section */}
      </main>
      {/* Start footer section */}
      <Footer />
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
