"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlogDetails() {
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
                    News Detail
                  </h1>
                  {/* <ul className="breadcrumb__content--menu d-flex">
                    <li className="breadcrumb__content--menu__items">
                      <Link className="text-white" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb__content--menu__items">
                      <span className="text-white">Blog Details</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* Start blog details section */}
        <section className="blog__details--section section--padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="blog__details--wrapper">
                  <div className="entry__blog">
                    <div className="blog__post--header mb-30">
                      <h2 className="post__header--title mb-15">
                        Natural Virtual reality, Feel your happiness with VR{" "}
                      </h2>
                      <p className="blog__post--meta">
                        February 04, 2022
                        {/* <Link
                          className="blog__post--meta__link"
                          href="/news-details"
                        >
                          Company, Image, Travel
                        </Link> */}
                      </p>
                    </div>
                    <div className="blog__thumbnail mb-30">
                      <img
                        className="blog__thumbnail--img border-radius-10"
                        src="/assets/img/blog/blog-page-big1.webp"
                        alt="blog-img"
                      />
                    </div>
                    <div className="blog__details--content">
                      <h3 className="blog__details--content__subtitle mb-25">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus non sint saepe rem eveniet sit ea esse.
                      </h3>
                      <p className="blog__details--content__desc mb-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita in recusandae sit officia ipsa, natus ad
                        voluptatem doloribus dolorum placeat, rem deleniti est
                        accusamus ipsum corporis voluptates soluta totam maiores
                        nostrum reprehenderit quasi? Laboriosam itaque ab odit
                        harum sed aut voluptates, illum unde. Saepe enim ad ut
                        pariatur doloremque quas harum sequi, excepturi tempore
                        exercitationem suscipit quam recusandae corrupti
                        quibusdam. Laboriosam sapiente provident repellat
                        blanditiis ratione nostrum illum asperiores quo cumque
                        in quisquam, non iste aut illo vel, alias debitis!
                      </p>
                      <p className="blog__details--content__desc mb-30">
                        {" "}
                        Vel ipsa officiis nobis eveniet omnis consequuntur neque
                        quasi, in, optio rerum suscipit totam odio. Alias
                        necessitatibus nulla accusantium voluptatem ipsum
                        voluptatum, vero in impedit nobis cupiditate ea, dicta
                        eos facilis eaque optio laudantium non neque itaque?
                        Possimus officia aut accusamus illum, adipisci, nihil
                        numquam minus eum fugit, beatae minima facilis magni.
                      </p>
                      <blockquote className="blockquote__content bg__gray--color mb-30">
                        <p className="blockquote__content--desc">
                          Quisque semper nunc vitae erat pellentesque, ac
                          placerat arcu consectetur. In venenatis elit ac
                          ultrices convallis. Duis est nisi, tincidunt ac urna
                          sed, cursus blandit lectus. In ullamcorper sit amet
                          ligula ut eleifend. Proin dictum tempor ligula, ac
                          feugiat metus. Sed finibus tortor eu scelerisque
                          scelerisque.
                        </p>
                      </blockquote>
                      <p className="blog__details--content__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus sapiente omnis sunt labore mollitia,
                        quaerat incidunt sequi, ut alias accusamus nostrum magni
                        fugit facilis dignissimos illum repellendus et numquam
                        adipisci quos. Eos omnis maiores beatae cum a
                        consequatur magnam sequi neque, at numquam qui ipsam
                        unde veritatis voluptates quam dicta! Ipsam, mollitia
                        illo fuga vel culpa reprehenderit quisquam maxime
                        nesciunt. Sunt quaerat inventore aspernatur quibusdam
                        corrupti numquam mollitia exercitationem rem alias
                        consectetur hic iusto dignissimos nostrum odio, cumque
                        impedit.
                      </p>
                    </div>
                  </div>
                  <div className="blog__tags--social__media d-flex align-items-center justify-content-between">
                    <div className="blog__tags--media d-flex align-items-center">
                      <label className="blog__tags--media__title">
                        Releted Tags :
                      </label>
                      <ul className="d-flex">
                        <li className="blog__tags--media__list">
                          <Link
                            className="blog__tags--media__link"
                            href="/news-details"
                          >
                            Popular
                          </Link>
                        </li>
                        <li className="blog__tags--media__list">
                          <Link
                            className="blog__tags--media__link"
                            href="/news-details"
                          >
                            Business
                          </Link>
                        </li>
                        <li className="blog__tags--media__list">
                          <Link
                            className="blog__tags--media__link"
                            href="/news-details"
                          >
                            desgin
                          </Link>
                        </li>
                        <li className="blog__tags--media__list">
                          <Link
                            className="blog__tags--media__link"
                            href="/news-details"
                          >
                            Service
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="blog__social--media d-flex align-items-center">
                      <label className="blog__social--media__title">
                        Social Share :
                      </label>
                      <ul className="d-flex">
                        <li className="blog__social--media__list">
                          <Link
                            className="blog__social--media__link"
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
                        <li className="blog__social--media__list">
                          <Link
                            className="blog__social--media__link"
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
                        <li className="blog__social--media__list">
                        <Link
                            className="blog__social--media__link"
                            target="_blank"
                            href="https://www.instagram.com"
                          >
                            <img
                              src="/assets/img/2.jpg"
                              alt="Instagra,"
                              width="22" 
                              height="22"
                              style={{ display: 'inline-block' }}
                            />
                            <span className="visually-hidden">Instagram</span>
                          </Link>
                        </li>
                        <li className="blog__social--media__list">
                        <Link
                            className="blog__social--media__link"
                            target="_blank"
                            href="https://www.whatsapp.com"
                          >
                            <img
                              src="/assets/img/1.jpg"
                              alt="WhatsApp"
                              width="22" 
                              height="22"
                              style={{ display: 'inline-block' }}
                            />
                            <span className="visually-hidden">WhatsApp</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="related__post--area mb-50">
                    <div className="section__heading text-center mb-20">
                      <h2 className="section__heading--maintitle h3">
                        Related Articles
                      </h2>
                    </div>
                    <div className="row row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
                      <div className="col mb-28">
                        <div className="related__post--items">
                          <div className="related__post--thumbnail border-radius-10 mb-20">
                            <Link
                              className="display-block"
                              href="/news-details"
                            >
                              <img
                                className="related__post--img display-block border-radius-10"
                                src="/assets/img/blog/related-post1.webp"
                                alt="related-post"
                              />
                            </Link>
                          </div>
                          <div className="related__post--text">
                            <h3 className="related__post--title mb-5">
                              <Link
                                className="related__post--title__link"
                                href="/news-details"
                              >
                                Post With Gallery
                              </Link>
                            </h3>
                            <span className="related__post--deta">
                              September 17, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col mb-28">
                        <div className="related__post--items">
                          <div className="related__post--thumbnail border-radius-10 mb-20">
                            <Link
                              className="display-block"
                              href="/news-details"
                            >
                              <img
                                className="related__post--img display-block border-radius-10"
                                src="/assets/img/blog/related-post2.webp"
                                alt="related-post"
                              />
                            </Link>
                          </div>
                          <div className="related__post--text">
                            <h3 className="related__post--title mb-5">
                              <Link
                                className="related__post--title__link"
                                href="/news-details"
                              >
                                Post With Vedio
                              </Link>
                            </h3>
                            <span className="related__post--deta">
                              September 17, 2022
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment__box">
                    <div className="reviews__comment--area2 mb-50">
                      <h3 className="reviews__comment--reply__title mb-25">
                        Recent Comment
                      </h3>
                      <div className="reviews__comment--inner">
                        <div className="reviews__comment--list d-flex">
                          <div className="reviews__comment--thumbnail">
                            <img
                              src="/assets/img/other/comment-thumb1.webp"
                              alt="comment-thumbnail"
                            />
                          </div>
                          <div className="reviews__comment--content ">
                            <h4 className="reviews__comment--content__title2">
                              Jakes on
                            </h4>
                            <span className="reviews__comment--content__date2">
                              January 11, 2022
                            </span>
                            <p className="reviews__comment--content__desc">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Eos ex repellat officiis neque.
                              Veniam, rem nesciunt. Assumenda distinctio, autem
                              error repellat eveniet ratione dolor facilis
                              accusantium amet pariatur, non eius!
                            </p>
                            <button
                              className="comment__reply--btn primary__btn"
                              type="submit"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                        <div className="reviews__comment--list margin__left d-flex">
                          <div className="reviews__comment--thumbnail">
                            <img
                              src="/assets/img/other/comment-thumb2.webp"
                              alt="comment-thumbnail"
                            />
                          </div>
                          <div className="reviews__comment--content">
                            <h4 className="reviews__comment--content__title2">
                              Jakes on
                            </h4>
                            <span className="reviews__comment--content__date2">
                              January 11, 2022
                            </span>
                            <p className="reviews__comment--content__desc">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Eos ex repellat officiis neque.
                              Veniam, rem nesciunt. Assumenda distinctio, autem
                              error repellat eveniet ratione dolor facilis
                              accusantium amet pariatur, non eius!
                            </p>
                            <button
                              className="comment__reply--btn primary__btn"
                              type="submit"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                        <div className="reviews__comment--list d-flex">
                          <div className="reviews__comment--thumbnail">
                            <img
                              src="/assets/img/other/comment-thumb3.webp"
                              alt="comment-thumbnail"
                            />
                          </div>
                          <div className="reviews__comment--content">
                            <h4 className="reviews__comment--content__title2">
                              Jakes on
                            </h4>
                            <span className="reviews__comment--content__date2">
                              January 11, 2022
                            </span>
                            <p className="reviews__comment--content__desc">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Eos ex repellat officiis neque.
                              Veniam, rem nesciunt. Assumenda distinctio, autem
                              error repellat eveniet ratione dolor facilis
                              accusantium amet pariatur, non eius!
                            </p>
                            <button
                              className="comment__reply--btn primary__btn"
                              type="submit"
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="reviews__comment--reply__area">
                      <form action="#">
                        <h3 className="reviews__comment--reply__title mb-20">
                          Leave A Comment
                        </h3>
                        <div className="row">
                          <div className="col-lg-4 col-md-6 mb-20">
                            <label>
                              <input
                                className="reviews__comment--reply__input"
                                placeholder="Your Name...."
                                type="text"
                              />
                            </label>
                          </div>
                          <div className="col-lg-4 col-md-6 mb-20">
                            <label>
                              <input
                                className="reviews__comment--reply__input"
                                placeholder="Your Email...."
                                type="email"
                              />
                            </label>
                          </div>
                          <div className="col-lg-4 col-md-6 mb-20">
                            <label>
                              <input
                                className="reviews__comment--reply__input"
                                placeholder="Your Website...."
                                type="text"
                              />
                            </label>
                          </div>
                          <div className="col-12 mb-15">
                            <textarea
                              className="reviews__comment--reply__textarea"
                              placeholder="Your Comments...."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <button
                          className="primary__btn text-white"
                          data-hover="Submit"
                          type="submit"
                        >
                          SUBMIT
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4">
                <div className="blog__sidebar--widget left widget__area">
                  <div className="single__widget widget__bg">
                    <h2 className="widget__title position__relative h3">
                      Search
                    </h2>
                    <form className="widget__search--form" action="#">
                      <label>
                        <input
                          className="widget__search--form__input"
                          placeholder="Search by"
                          type="text"
                        />
                      </label>
                      <button
                        className="widget__search--form__btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                  <div className="single__widget widget__bg">
                    <h2 className="widget__title position__relative h3">
                      Categories
                    </h2>
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                              href="/news-details"
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
                  <div className="single__widget widget__bg">
                    <h2 className="widget__title position__relative h3">
                      Post article
                    </h2>
                    <div className="articl__post--inner">
                      <div className="articl__post--items d-flex align-items-center">
                        <div className="articl__post--items__thumbnail position__relative">
                          <Link
                            className="articl__post--items__link display-block"
                            href="/news-details"
                          >
                            <img
                              className="articl__post--items__img display-block"
                              src="/assets/img/product/small-product1.webp"
                              alt="product-img"
                            />
                          </Link>
                        </div>
                        <div className="articl__post--items__content">
                          <h4 className="articl__post--items__content--title">
                            <Link href="/news-details">
                              The Greatest Team's Favorite Leggings.
                            </Link>
                          </h4>
                          <span className="meta__deta text__secondary">
                            Jan 11, 2022
                          </span>
                        </div>
                      </div>
                      <div className="articl__post--items d-flex align-items-center">
                        <div className="articl__post--items__thumbnail position__relative">
                          <Link
                            className="articl__post--items__link display-block"
                            href="/news-details"
                          >
                            <img
                              className="articl__post--items__img display-block"
                              src="/assets/img/product/small-product2.webp"
                              alt="product-img"
                            />
                          </Link>
                        </div>
                        <div className="articl__post--items__content">
                          <h4 className="articl__post--items__content--title">
                            <Link href="/news-details">
                              Top 10 Best Furniture Company.
                            </Link>
                          </h4>
                          <span className="meta__deta text__secondary">
                            Jan 11, 2022
                          </span>
                        </div>
                      </div>
                      <div className="articl__post--items d-flex align-items-center">
                        <div className="articl__post--items__thumbnail position__relative">
                          <Link
                            className="articl__post--items__link display-block"
                            href="/news-details"
                          >
                            <img
                              className="articl__post--items__img display-block"
                              src="/assets/img/product/small-product3.webp"
                              alt="product-img"
                            />
                          </Link>
                        </div>
                        <div className="articl__post--items__content">
                          <h4 className="articl__post--items__content--title">
                            <Link href="/news-details">
                              There are History you Should Know.
                            </Link>
                          </h4>
                          <span className="meta__deta text__secondary">
                            Jan 11, 2022
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single__widget widget__bg">
                    <h2 className="widget__title position__relative h3">
                      Tags
                    </h2>
                    <ul className="widget__tagcloud">
                      <li className="widget__tagcloud--list">
                        <Link
                          className="widget__tagcloud--link"
                          href="/news-details"
                        >
                          Wooden
                        </Link>
                      </li>
                      <li className="widget__tagcloud--list">
                        <Link
                          className="widget__tagcloud--link"
                          href="/news-details"
                        >
                          Chair
                        </Link>
                      </li>
                      <li className="widget__tagcloud--list">
                        <Link
                          className="widget__tagcloud--link"
                          href="/news-details"
                        >
                          Modern
                        </Link>
                      </li>
                      <li className="widget__tagcloud--list">
                        <Link
                          className="widget__tagcloud--link"
                          href="/news-details"
                        >
                          Fabric
                        </Link>
                      </li>
                      <li className="widget__tagcloud--list">
                        <Link
                          className="widget__tagcloud--link"
                          href="/news-details"
                        >
                          Shoulder{" "}
                        </Link>
                      </li>
                      <li className="widget__tagcloud--list">
                        <Link
                          className="widget__tagcloud--link"
                          href="/news-details"
                        >
                          Winter
                        </Link>
                      </li>
                      <li className="widget__tagcloud--list">
                        <Link
                          className="widget__tagcloud--link"
                          href="/news-details"
                        >
                          Accessories
                        </Link>
                      </li>
                      <li className="widget__tagcloud--list">
                        <Link
                          className="widget__tagcloud--link"
                          href="/news-details"
                        >
                          Dress{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* End blog details section */}
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
