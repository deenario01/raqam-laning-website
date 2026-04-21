"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProductsBanner() {
  return (
    <>
      {/* Start banner section */}
      <section className="banner__section section--padding pt-0">
        <div className="container-fluid">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n28">
            <div className="col mb-28">
              <div className="banner__items">
                <Link
                  className="banner__items--thumbnail position__relative"
                  href="/shop"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="assets/img/banner/banner6.webp"
                    alt="banner-img"
                  />
                  <div className="banner__items--content__style2 right">
                    <h2 className="banner__items--content__style2--title">
                      Single Stylish <br />
                      Mini Chair{" "}
                    </h2>
                    <span className="banner__items--content__link primary__btn style2">
                      Order Now
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col mb-28">
              <div className="banner__items">
                <Link
                  className="banner__items--thumbnail position__relative"
                  href="/shop"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="assets/img/banner/banner7.webp"
                    alt="banner-img"
                  />
                  <div className="banner__items--content__style2 right">
                    <h2 className="banner__items--content__style2--title">
                      New Furniture <br />
                      Tree Planet{" "}
                    </h2>
                    <span className="banner__items--content__link primary__btn style2">
                      Order Now
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col mb-28">
              <div className="banner__items">
                <Link
                  className="banner__items--thumbnail position__relative"
                  href="/shop"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="assets/img/banner/banner8.webp"
                    alt="banner-img"
                  />
                  <div className="banner__items--content__style2">
                    <h2 className="banner__items--content__style2--title">
                      Single Stylish <br />
                      Mini Chair{" "}
                    </h2>
                    <span className="banner__items--content__link primary__btn style2">
                      Order Now
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End banner section */}
    </>
  );
}
