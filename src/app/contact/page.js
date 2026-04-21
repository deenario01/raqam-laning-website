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
                    Contact Us
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
                Get In Touch
              </h2>
              <p className="contact__section--hrading__desc">
                We're passionate about what we do, and we love talking shop. Whether you need a quick answer, want to explore possibilities, or have a project brewing, reach out through the form below. Consider us your packaging partners, not just your suppliers.
              </p>
            </div>
            <div className="main__contact--area">
              <div className="row align-items-center row-md-reverse">
                <div className="col-lg-5">
                  <div className="contact__info border-radius-10">
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
                    <SocialShare />
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
                          <div className="contact__form--list mb-10">
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
        {/* Start contact map area */}
        <div id="location" className="contact__map--area section--padding pt-0">
          <iframe
            className="contact__map--iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.657335340181!2d46.87658287688895!3d24.566500856954377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa1142d90d19f%3A0xab5a99b83f37b54e!2sRAQAM%20international%20Labels%20and%20Ribbon%20factory!5e0!3m2!1sen!2s!4v1755093532928!5m2!1sen!2s"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="7470, New Industrial Area, 3283, Riyadh 14332, Saudi Arabia"
          />
        </div>
        {/* End contact map area */}
        {/* Start FAQ section */}
        <section id="faq" className="faq__section section--padding">
          <div className="container">
            <div className="section__heading text-center mb-50">
              <h2 className="section__heading--maintitle">
                Frequently Asked Questions
              </h2>
              <p className="section__heading--desc">
                Find answers to common questions about our services and products
              </p>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="faq__accordion">
                  <div className="accordion" id="faqAccordion">
                    <div className="accordion-item mb-20">
                      <h3 className="accordion-header" id="faq1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                          style={{ fontSize: '18px', fontWeight: '600' }}
                        >
                          What types of labels do you produce?
                        </button>
                      </h3>
                      <div
                        id="collapse1"
                        className="accordion-collapse collapse"
                        aria-labelledby="faq1"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          We produce a wide variety of labels including BOPP labels, laser labels, shrink sleeve labels, 
                          price labels, promotional labels, and custom labels for various industries including food & beverage, 
                          pharmaceuticals, personal care, and more.
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-item mb-20">
                      <h3 className="accordion-header" id="faq2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                          style={{ fontSize: '18px', fontWeight: '600' }}
                        >
                          What is your minimum order quantity?
                        </button>
                      </h3>
                      <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="faq2"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Our minimum order quantity varies depending on the type of label and specifications. 
                          For standard labels, we typically require a minimum of 10,000 pieces. However, 
                          we can discuss custom requirements for smaller quantities on a case-by-case basis.
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-item mb-20">
                      <h3 className="accordion-header" id="faq3">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                          style={{ fontSize: '18px', fontWeight: '600' }}
                        >
                          How long does production take?
                        </button>
                      </h3>
                      <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="faq3"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Production time typically ranges from 7-14 business days depending on the complexity 
                          of the design, quantity, and current production schedule. Rush orders can be accommodated 
                          with additional charges. We'll provide specific timelines when you submit your order.
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-item mb-20">
                      <h3 className="accordion-header" id="faq4">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                          style={{ fontSize: '18px', fontWeight: '600' }}
                        >
                          Do you provide design services?
                        </button>
                      </h3>
                      <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="faq4"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Yes, we have an experienced design team that can help create custom label designs 
                          from scratch or modify existing designs. We can work with your brand guidelines 
                          and requirements to create professional, eye-catching labels that meet your needs.
                        </div>
                      </div>
                    </div>
                    
                    <div className="accordion-item mb-20">
                      <h3 className="accordion-header" id="faq5">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                          style={{ fontSize: '18px', fontWeight: '600' }}
                        >
                          What file formats do you accept for artwork?
                        </button>
                      </h3>
                      <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="faq5"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          We accept various file formats including PDF, AI (Adobe Illustrator), EPS, PSD, 
                          and high-resolution PNG/JPG files. For best results, we recommend vector files 
                          (PDF, AI, EPS) with fonts outlined and images embedded at 300 DPI resolution.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End FAQ section */}
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
