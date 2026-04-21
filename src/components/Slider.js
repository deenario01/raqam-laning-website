"use client";

import Link from "next/link";
import Image from "next/image";

export default function Slider() {
  const words = ["Labelling", "Offset", "Packing", "Labelling"];

  return (
    <>
      {/* Start slider section */}
      <section className="hero__slider--section">
        <div className="hero__slider--inner hero__slider--activation swiper">
          <div className="hero__slider--wrapper swiper-wrapper">
            <div className="swiper-slide ">
              <div className="hero__slider--items hero__slider--bg slider1">
                <div className="container-fluid">
                  <div className="hero__slider--items__inner">
                    <div className="row row-cols-1">
                      <div className="col">
                        <div className="slider__content">
                          <p className="slider__content--desc desc1 mb-15">
                            Discover our best labelling collection from home
                          </p>
                          <h2 className="slider__content--maintitle text-white h1">
                            Intelligent <span className="dynamic-word-container">
                              <div className="word-ticker">
                                {words.map((word, index) => (
                                  <span key={index} className="word-item" style={{color: '#4987C3'}}>{word}</span>
                                ))}
                              </div>
                            </span><br/>Solutions That Elevate <br/> Your Brand
                          </h2>
                          <p className="slider__content--desc text-white mb-35 d-sm-2-none">
                          Creative, custom solutions delivered by industry experts since 2003.
                          </p>
                          <Link
                            className="slider__content--btn primary__btn"
                            href="/products"
                          >
                            Explore Our Solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide ">
              <div className="hero__slider--items hero__slider--bg slider2">
                <div className="container-fluid">
                  <div className="hero__slider--items__inner">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-6">
                        <div className="slider__content text-center">
                          <p className="slider__content--desc desc1 right text-black mb-15">
                            Discover our best labelling collection from home
                          </p>
                          <h2 className="slider__content--maintitle text-white h1">
                            Intelligent <span className="dynamic-word-container">
                              <div className="word-ticker">
                                {words.map((word, index) => (
                                  <span key={index} className="word-item" style={{color: '#4987C3'}}>{word}</span>
                                ))}
                              </div>
                            </span><br/>solutions that elevates <br/> your brand
                          </h2>
                          <p className="slider__content--desc text-white mb-35 d-sm-2-none">
                          Creative, custom solutions delivered by industry experts since 2003.
                          </p>
                          <Link
                            className="slider__content--btn primary__btn"
                            href="/products"
                          >
                            Explore Our Solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide ">
              <div className="hero__slider--items hero__slider--bg slider3">
                <div className="container-fluid">
                  <div className="hero__slider--items__inner">
                    <div className="row row-cols-1">
                      <div className="col">
                        <div className="slider__content">
                          <p className="slider__content--desc desc1 text-black mb-15">
                            Discover our best labelling collection from home
                          </p>
                          <h2 className="slider__content--maintitle text-white h1">
                            Intelligent <span className="dynamic-word-container">
                              <div className="word-ticker">
                                {words.map((word, index) => (
                                  <span key={index} className="word-item" style={{color: '#4987C3'}}>{word}</span>
                                ))}
                              </div>
                            </span> solutions that elevates your brand
                          </h2>
                          <p className="slider__content--desc text-white mb-35 d-sm-2-none">
                          Creative, custom solutions delivered by industry experts since 2003.
                          </p>
                          <Link
                            className="slider__content--btn primary__btn"
                            href="/products"
                          >
                            Explore Our Solutions
                          </Link>
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
      {/* End slider section */}
    </>
  );
}
