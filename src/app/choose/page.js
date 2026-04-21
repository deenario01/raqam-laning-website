"use client";

import Link from "next/link";

export default function Choose() {
  return (
    <>
              <div className="col-lg-6">
                <div className="about__content">
                  <span className="about__content--subtitle text__secondary mb-20">
                    {" "}
                    Why Choose Us
                  </span>
                  <h2 className="about__content--maintitle mb-25">
                    Setting Standards in Labels & Packaging—Globally and
                    Sustainably.
                  </h2>
                  <p className="about__content--desc mb-20">
                    At RAQAM, our mission is to empower businesses of all sizes
                    with world-class labeling and packaging solutions that
                    combine innovation, reliability, and sustainability. Driven
                    by a vision to set industry benchmarks, we focus on
                    delivering exceptional quality, tailored service, and
                    eco-friendly practices in every project.
                  </p>
                  <p className="about__content--desc mb-25">
                    Our purpose is simple: to help brands stand out, products
                    succeed, and our clients achieve their goals through
                    technical expertise, ethical values, and a genuine
                    commitment to making a difference.
                  </p>
                  {/* <div className="about__author position__relative">
                    <h4 className="about__author--name">Bruce Sutton</h4>
                    <span className="about__author--rank">Spa Manager</span>
                    <img
                      className="about__author--signature"
                      src="/assets/img/icon/signature.webp"
                      alt="signature"
                    />
                  </div> */}
                </div>
              </div>
    </>
  );
}
