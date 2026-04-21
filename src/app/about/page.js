"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const section = document.getElementById("funfactId");
    if (!section) return;

    function animateCounter(counter, target) {
      const duration = 2000;
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.round(target * progress);
        counter.textContent = target === 1000 ? current + "+" : String(current);
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const counters = section.querySelectorAll(".js-counter");
            counters.forEach((counter) => {
              const countTo = parseInt(counter.getAttribute("data-count") || "0", 10) || 0;
              animateCounter(counter, countTo);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      {/* Start header area */}
      <Header />
      {/* End header area */}
      <main className="main__content_wrapper">
        {/* Start breadcrumb / hero strip */}
        <section className="breadcrumb__section breadcrumb__bg breadcrumb__bg--about">
          <div className="container">
            <div className="row row-cols-1">
              <div className="col">
                <div className="breadcrumb__content">
                  <h1 className="breadcrumb__content--title text-white mb-10">
                    About Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End breadcrumb section */}
        {/* Start about section */}
        {/* End about section */}
        {/* Start founder's message section */}
        <section className="founder__section section--padding">
          <div className="container">
            <div className="section__heading text-center mb-30">
              <h2 className="section__heading--maintitle" style={{color: '#ed1f26'}}>Founder's Message</h2>
            </div>
            <div className="row justify-content-center align-items-center">
                {/* Founder's Image - Responsive columns */}
                <div className="col-lg-4 col-md-5 col-sm-6 mb-4 mb-md-0">
                  <div className="founder__thumbnail text-center">
                    <div className="founder__content mt-3">
                      <h3 className="founder__content--title">Khalid Aziz Shah</h3>
                      <span className="founder__content--subtitle">
                        CEO & Managing Director
                      </span>
                    </div>
                  </div>
                </div>
                {/* Founder's Message - Responsive columns */}
                <div className="col-lg-6 col-md-7 col-sm-12">
                  <div className="founder__message">
                    <p className="founder__message--text">“RAQAM International is more than just a label and printing factory—we are innovators, partners, and problem solvers. With state-of-the-art equipment, a dedicated team, and uncompromising commitment to quality, we have become Saudi Arabia’s first flexographic label factory to win the Print Pack DIPA Gold Award for two consecutive years.
We proudly support industries from pharmaceuticals and beverages to jewelry and automotive, because we believe great product marketing starts with exceptional labeling. Thank you for trusting RAQAM to help your business stand out.”</p>
                </div>
                {/* <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col">
                  <div className="team__items text-center">
                    <div className="team__thumbnail">
                      <img
                        className="team__thumbnail--img border-radius-50 display-block"
                        src="/assets/img/other/team3.webp"
                        alt="team-thumb"
                      />
                    </div>
                    <div className="team__content">
                      <h3 className="team__content--title">Harrison Samuel</h3>
                      <span className="team__content--subtitle">
                        Products Manager
                      </span>
                      <ul className="team__social d-flex justify-content-center align-items-center">
                        <li className="team__social--list">
                          <Link
                            className="team__social--icon"
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
                        <li className="team__social--list">
                          <Link
                            className="team__social--icon"
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
                        <li className="team__social--list">
                          <Link
                            className="team__social--icon"
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
                        <li className="team__social--list">
                          <Link
                            className="team__social--icon"
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
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col">
                  <div className="team__items text-center">
                    <div className="team__thumbnail">
                      <img
                        className="team__thumbnail--img border-radius-50 display-block"
                        src="/assets/img/other/team1.webp"
                        alt="team-thumb"
                      />
                    </div>
                    <div className="team__content">
                      <h3 className="team__content--title">Milton Marsh</h3>
                      <span className="team__content--subtitle">
                        Products Manager
                      </span>
                      <ul className="team__social d-flex justify-content-center align-items-center">
                        <li className="team__social--list">
                          <Link
                            className="team__social--icon"
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
                        <li className="team__social--list">
                          <Link
                            className="team__social--icon"
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
                        <li className="team__social--list">
                          <Link
                            className="team__social--icon"
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
                        <li className="team__social--list">
                          <Link
                            className="team__social--icon"
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
                  </div>
                </div>  */}
              </div>
            </div>
          </div>
        </section>
        {/* End team members section */}
        
        {/* Start History section */}
        <section id="history" className="about__section section--padding">
          <div className="container">
            <div className="section__heading text-center mb-40">
              <h2 className="section__heading--maintitle" style={{color: '#ed1f26'}}>Our History</h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="about__content text-center">
                  <p className="about__content--desc mb-25">
                    Established in May 2003 under the Saudi Arabian General Investment Authority (SAGIA), RAQAM 
                    International is a 100% foreign-invested company with over two decades of industry expertise. From our 
                    beginnings as a visionary startup, we have evolved into a leading manufacturer in the flexographic shrink 
                    sleeves and labeling sector, setting benchmarks in quality and innovation within the packaging industry.
                  </p>
                  <p className="about__content--desc">
                    Headquartered in Riyadh, Saudi Arabia, our state-of-the-art production facility is supported by a strong 
                    domestic presence with sales offices in Riyadh, Jeddah, Madinah, Qassim, and Dammam, as well as a 
                    growing international footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End History section */}

        {/* Start Vision and Goals section */}
        <section id="vision-goals" className="about__section section--padding">
          <div className="container">
            <div className="section__heading text-center mb-40">
              <h2 className="section__heading--maintitle" style={{color: '#ed1f26'}}>Vision and Goals</h2>
            </div>
          </div>
        </section>
        
        {/* Statistics Section - Full Width */}
        <section className="counterup__banner--section" id="funfactId">
          {/* Full-width Image Section */}
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-12">
                <div className="counterup__banner--image">
                  <img
                    src="/assets/img/counter_image.png"
                    alt="Company Statistics"
                    className="w-100"
                    style={{ height: '400px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
          
                  {/* Start counterup banner section */}
        <div
          className="counterup__banner--section counterup__banner__bg2"
          id="funfactId"
          style={{ paddingTop: '80px', paddingBottom: '80px' }}
        >
          <div className="container" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
            <div className="row row-cols-1 align-items-center" style={{ marginTop: '0px', marginBottom: '0px' }}>
              <div className="col" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="counterup__banner--inner position__relative d-flex align-items-center justify-content-between" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                  <div className="counterup__banner--items text-center">
                    <p className="counterup__banner--items__text text-white">
                      YEARS OF <br />
                      FOUNDATION
                    </p>
                    <span
                      className="counterup__banner--items__number js-counter text-white"
                      data-count={22}
                    >
                      0
                    </span>
                  </div>
                  <div className="counterup__banner--items text-center">
                    <p className="counterup__banner--items__text text-white">
                      COUNTRIES OF <br />
                      OPERATION{" "}
                    </p>
                    <span
                      className="counterup__banner--items__number js-counter text-white"
                      data-count={3}
                    >
                      0
                    </span>
                  </div>
                  <div className="counterup__banner--items text-center">
                    <p className="counterup__banner--items__text text-white">
                      PRODUCTION <br />
                      FACILITIES
                    </p>
                    <span
                      className="counterup__banner--items__number js-counter text-white"
                      data-count={4}
                    >
                      0
                    </span>
                  </div>
                  <div className="counterup__banner--items text-center">
                    <p className="counterup__banner--items__text text-white">
                      EMPLOYEES <br /> 
                      <br /> 
                    </p>
                    <span
                      className="counterup__banner--items__number js-counter text-white"
                      data-count={350}
                      style={{fontSize: '5rem'}}
                    >
                      0
                    </span>
                    <span className="text-white" style={{fontSize: '5rem'}}>+</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        {/* End counterup banner section */}
        </section>
        
        {/* Vision and Goals Content */}
        <section className="about__section section--padding" style={{backgroundColor: '#f8f9fa'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about__content text-center mb-50">
                  <h3 className="about__content--maintitle mb-30">Our Mission & Vision</h3>
                  <p className="about__content--desc mb-30">
                    At RAQAM International, our mission is to empower businesses of all sizes with world-class labeling and packaging solutions that emphasize innovation, reliability, and sustainability. Guided by a vision to lead the industry, we are committed to delivering exceptional quality, personalized service, and environmentally responsible practices in every project we undertake.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Core Values Section */}
            <div className="row mb-50">
              <div className="col-lg-12">
                <h4 className="about__content--maintitle text-center mb-40">Our Core Values</h4>
                <div className="row">
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-30">
                    <div 
                      className="value__card text-center p-20" 
                      style={{
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
                        height: '150px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(-10px)';
                        card.style.boxShadow = '0 15px 30px rgba(237, 31, 38, 0.2)';
                        card.style.border = '2px solid #ed1f26';
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(0)';
                        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                        card.style.border = 'none';
                        card.style.outline = 'none';
                      }}
                    >
                      <div className="value__icon mb-15" style={{fontSize: '30px', color: '#ed1f26', transition: 'transform 0.3s ease'}}>🎯</div>
                      <h6 style={{color: '#333', fontWeight: '600', fontSize: '14px'}}>COMMITMENT</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-30">
                    <div 
                      className="value__card text-center p-20" 
                      style={{
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
                        height: '150px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(-10px)';
                        card.style.boxShadow = '0 15px 30px rgba(237, 31, 38, 0.2)';
                        card.style.border = '2px solid #ed1f26';
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(0)';
                        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                        card.style.border = 'none';
                        card.style.outline = 'none';
                      }}
                    >
                      <div className="value__icon mb-15" style={{fontSize: '30px', color: '#ed1f26', transition: 'transform 0.3s ease'}}>⭐</div>
                      <h6 style={{color: '#333', fontWeight: '600', fontSize: '14px'}}>QUALITY</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-30">
                    <div 
                      className="value__card text-center p-20" 
                      style={{
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
                        height: '150px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(-10px)';
                        card.style.boxShadow = '0 15px 30px rgba(237, 31, 38, 0.2)';
                        card.style.border = '2px solid #ed1f26';
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(0)';
                        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                        card.style.border = 'none';
                        card.style.outline = 'none';
                      }}
                    >
                      <div className="value__icon mb-15" style={{fontSize: '30px', color: '#ed1f26', transition: 'transform 0.3s ease'}}>👥</div>
                      <h6 style={{color: '#333', fontWeight: '600', fontSize: '14px'}}>CUSTOMER FOCUS</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-30">
                    <div 
                      className="value__card text-center p-20" 
                      style={{
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
                        height: '150px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(-10px)';
                        card.style.boxShadow = '0 15px 30px rgba(237, 31, 38, 0.2)';
                        card.style.border = '2px solid #ed1f26';
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(0)';
                        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                        card.style.border = 'none';
                        card.style.outline = 'none';
                      }}
                    >
                      <div className="value__icon mb-15" style={{fontSize: '30px', color: '#ed1f26', transition: 'transform 0.3s ease'}}>🌱</div>
                      <h6 style={{color: '#333', fontWeight: '600', fontSize: '14px'}}>RESPONSIBILITY</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-30">
                    <div 
                      className="value__card text-center p-20" 
                      style={{
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
                        height: '150px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(-10px)';
                        card.style.boxShadow = '0 15px 30px rgba(237, 31, 38, 0.2)';
                        card.style.border = '2px solid #ed1f26';
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(0)';
                        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                        card.style.border = 'none';
                        card.style.outline = 'none';
                      }}
                    >
                      <div className="value__icon mb-15" style={{fontSize: '30px', color: '#ed1f26', transition: 'transform 0.3s ease'}}>💼</div>
                      <h6 style={{color: '#333', fontWeight: '600', fontSize: '14px'}}>PROFESSIONALISM</h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-30">
                    <div 
                      className="value__card text-center p-20" 
                      style={{
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)', 
                        height: '150px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(0)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(-10px)';
                        card.style.boxShadow = '0 15px 30px rgba(237, 31, 38, 0.2)';
                        card.style.border = '2px solid #ed1f26';
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.transform = 'translateY(0)';
                        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                        card.style.border = 'none';
                        card.style.outline = 'none';
                      }}
                    >
                      <div className="value__icon mb-15" style={{fontSize: '30px', color: '#ed1f26', transition: 'transform 0.3s ease'}}>❤️</div>
                      <h6 style={{color: '#333', fontWeight: '600', fontSize: '14px'}}>CARE</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purpose and Achievement Section */}
            <div className="row">
              <div className="col-lg-6 mb-30">
                <div className="purpose__card" style={{
                  backgroundColor: 'white', 
                  borderRadius: '15px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                  padding: '40px 30px',
                  height: 'auto',
                  minHeight: '300px'
                }}>
                  <div className="purpose__icon mb-20" style={{fontSize: '40px', color: '#ed1f26'}}>🚀</div>
                  <h5 className="about__content--maintitle mb-20">Our Purpose</h5>
                  <p className="about__content--desc" style={{marginBottom: '0'}}>
                    Our purpose is clear: to help brands stand out, products succeed, and ensure our clients' complete satisfaction. We do this through deep technical expertise, strong ethical principles, and a genuine dedication to making a meaningful impact.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="achievement__card" style={{
                  backgroundColor: 'white', 
                  borderRadius: '15px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                  padding: '40px 30px',
                  height: 'auto',
                  minHeight: '300px'
                }}>
                  <div className="achievement__icon mb-20" style={{fontSize: '40px', color: '#ed1f26'}}>🏆</div>
                  <h5 className="about__content--maintitle mb-20">Award Recognition</h5>
                  <p className="about__content--desc" style={{marginBottom: '0'}}>
                    RAQAM International is proud to be the first Saudi Arabian flexographic company to win the prestigious "Print & Pack DIPA Gold Award" in the Flexographic Printing category for two consecutive years.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Drivers Section */}
            <div className="row mt-40">
              <div className="col-lg-12">
                <div className="success__card text-center" style={{
                  backgroundColor: 'white', 
                  borderRadius: '15px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                  padding: '50px 40px',
                  height: 'auto',
                  minHeight: '250px'
                }}>
                  <div className="success__icon mb-20" style={{fontSize: '50px', color: '#ed1f26'}}>💡</div>
                  <h4 className="about__content--maintitle mb-25">Driving Success Through Excellence</h4>
                  <p className="about__content--desc" style={{maxWidth: '800px', margin: '0 auto'}}>
                    Our success is driven by significant investments in cutting-edge technology, a highly skilled and dedicated workforce, and a steadfast commitment to using only the highest-quality raw materials—ensuring superior products at competitive prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="about__section section--padding mb-95">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about__thumbnail d-flex">
                  <div className="about__thumbnail--items">
                    <img
                      className="about__thumbnail--img border-radius-5 display-block"
                      src="/assets/img/left.jpg"
                      alt="about-thumbnail"
                    />
                  </div>
                  <div className="about__thumbnail--items position__relative">
                    <img
                      className="about__thumbnail--img border-radius-5 display-block"
                      src="/assets/img/right.jpg"
                      alt="about-thumbnail"
                    />
                  </div>
                </div>
              </div>
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
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Continue Vision and Goals section */}
        <section className="about__section section--padding">
          <div className="container">

            {/* Additional Information Sections */}
            {/* <div className="row mb-50">
              <div className="col-lg-6 col-md-12 mb-30">
                <div className="about__content" style={{ 
                  background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)', 
                  padding: '2rem', 
                  borderRadius: '15px',
                  height: '100%'
                }}>
                  <h3 className="about__content--maintitle mb-25" style={{ textAlign: 'center' }}>Our Products & Capabilities</h3>
                  <p className="about__content--desc mb-20">
                    RAQAM International produces a comprehensive range of labeling and packaging solutions including:
                  </p>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                      <ul className="about__content--list mb-20">
                        <li>Shrink Sleeves</li>
                        <li>B.O.P.P Labels</li>
                        <li>Adhesive Labels</li>
                        <li>IML (Inmold Labels)</li>
                        <li>Hologram Security Labels</li>
                        <li>Static Clinc Labels</li>
                        <li>Silver Void Labels</li>
                        <li>Band Rolls</li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <ul className="about__content--list mb-20">
                        <li>Cashier Rolls</li>
                        <li>PVC Tubes</li>
                        <li>Cut & Stack Labels</li>
                        <li>Sugar Packets</li>
                        <li>Shelf Tags</li>
                        <li>Packaging Tapes</li>
                        <li>PVC Sealing Tapes</li>
                        <li>Price Labels</li>
                        <li>A4 Sheets</li>
                      </ul>
                    </div>
                  </div>
                  <p className="about__content--desc mb-20">
                    We utilize flexographic printing techniques with vibrant colors, bold designs, and unique artwork additions including screen-printed raised varnish, metabolized foils, and holographic foils.
                  </p>
                  <p className="about__content--desc">
                    RAQAM produces high-end shrink sleeves and labels that combine unique details and high-quality materials to create attractive products.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-30">
                <div className="about__content" style={{ 
                  background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)', 
                  padding: '2rem', 
                  borderRadius: '15px',
                  height: '100%'
                }}>
                  <h3 className="about__content--maintitle mb-25">Our Achievements & Commitment</h3>
                  <p className="about__content--desc mb-20">
                    RAQAM International is the first Saudi Arabian Flexographic innovative Company to receive the "Print & Pack DIPA Gold Award" for two consecutive years in the Flexographic printing category.
                  </p>
                  <p className="about__content--desc mb-20">
                    We have invested in state-of-the-art equipment and have well-trained and dedicated employees who consistently use the highest quality raw materials to provide the best quality products at a competitive price.
                  </p>
                  <div className="achievement__highlights">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-12 mb-3">
                        <div className="achievement__item">
                          <h4 style={{ color: '#ff6b35', fontSize: '1.6rem', marginBottom: '0.8rem' }}>🏆 Award Winner</h4>
                          <p style={{ fontSize: '1.1rem', margin: 0 }}>Print & Pack DIPA Gold Award</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12 mb-3">
                        <div className="achievement__item">
                          <h4 style={{ color: '#ff6b35', fontSize: '1.6rem', marginBottom: '0.8rem' }}>⚡ State-of-the-Art</h4>
                          <p style={{ fontSize: '1.1rem', margin: 0 }}>Advanced Equipment</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12 mb-3">
                        <div className="achievement__item">
                          <h4 style={{ color: '#ff6b35', fontSize: '1.6rem', marginBottom: '0.8rem' }}>👥 Expert Team</h4>
                          <p style={{ fontSize: '1.1rem', margin: 0 }}>Well-trained Employees</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-12 mb-3">
                        <div className="achievement__item">
                          <h4 style={{ color: '#ff6b35', fontSize: '1.6rem', marginBottom: '0.8rem' }}>💎 Premium Quality</h4>
                          <p style={{ fontSize: '1.1rem', margin: 0 }}>Highest Quality Materials</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* End Vision and Goals section */}

        {/* Start Sustainability section */}
        <section id="sustainability" className="about__section section--padding">
          <div className="container">
            <div className="section__heading text-center mb-40">
              <h2 className="section__heading--maintitle" style={{color: '#ed1f26'}}>Quality and Sustainability</h2>
            </div>
            {/* Sustainability Commitment */}
            <div className="row mb-50">
              <div className="col-lg-12">
                <div className="sustainability__card" style={{
                  backgroundColor: 'white', 
                  borderRadius: '15px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                  padding: '50px 40px',
                  height: 'auto',
                  minHeight: '250px'
                }}>
                  <div className="sustainability__icon mb-20 text-center" style={{fontSize: '50px', color: '#ed1f26'}}>🌱</div>
                  <h4 className="about__content--maintitle mb-25 text-center">Sustainable Manufacturing</h4>
                  <p className="about__content--desc">
                    At RAQAM, we are committed to sustainable manufacturing, guided by the principle of "working in harmony with nature." Through the use of water-based inks, eco-friendly materials, and water-soluble printing technologies—including plates and inks—we actively reduce chemical waste, promoting environmentally responsible production. Our goal is to support both our clients and the planet through forward-thinking, sustainable practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Commitment */}
            <div className="row mb-50">
              <div className="col-lg-12">
                <div className="quality__card" style={{
                  backgroundColor: 'white', 
                  borderRadius: '15px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                  padding: '50px 40px',
                  height: 'auto',
                  minHeight: '250px'
                }}>
                  <div className="quality__icon mb-20 text-center" style={{fontSize: '50px', color: '#ed1f26'}}>⭐</div>
                  <h4 className="about__content--maintitle mb-25 text-center">Quality Promise</h4>
                  <p className="about__content--desc mb-25">
                    Every product we deliver reflects our promise of quality, reliability, and on-time delivery. By combining rigorous material selection, advanced manufacturing processes, and thorough inspections, we ensure our labels and packaging consistently meet the highest standards our clients expect and deserve.
                  </p>
                  <p className="about__content--desc">
                    🏆 RAQAM is proudly certified with ISO 9001 for quality management and ISO 22000 for food safety management, demonstrating our unwavering commitment to excellence, safety, and continuous improvement across all areas of our business.
                  </p>
                </div>
              </div>
            </div>


            {/* Our Pledge */}
            <div className="row">
              <div className="col-lg-12">
                <div className="pledge__card" style={{
                  backgroundColor: 'white', 
                  borderRadius: '15px', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', 
                  padding: '50px 40px',
                  height: 'auto',
                  minHeight: '300px'
                }}>
                  <div className="pledge__icon mb-20 text-center" style={{fontSize: '50px', color: '#ed1f26'}}>📋</div>
                  <h4 className="about__content--maintitle mb-30 text-center">Our Pledge</h4>
                  <p className="about__content--desc mb-30">
                    We pledge to:
                  </p>
                  <ul className="about__content--list" style={{ fontSize: '1.6rem', lineHeight: '2.4rem', color: 'var(--text-gray-color)', fontWeight: 'normal', paddingLeft: '2rem' }}>
                    <li style={{ marginBottom: '1rem' }}>Manufacture products in compliance with agreed-upon specifications, industry standards, and regulatory requirements—with full documentation at every stage.</li>
                    <li style={{ marginBottom: '1rem' }}>Operate in a clean, safe, hygienic, and regulated environment.</li>
                    <li style={{ marginBottom: '1rem' }}>Establish and regularly review quality targets to drive continuous improvement of materials, processes, products, and services.</li>
                    <li style={{ marginBottom: '1rem' }}>Maintain a customer-focused culture through strong leadership and active employee involvement, fostering innovation and accountability across all departments.</li>
                  </ul>
                  <p className="about__content--desc mt-30" style={{ fontStyle: 'italic', fontSize: '1.4rem', color: '#666' }}>
                    RAQAM's top management fully endorses and implements this integrated quality and food safety policy across all market offerings. Our vision goes beyond manufacturing excellence—we aim to lead with integrity, innovation, and a strong commitment to environmental and social responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Sustainability section */}

        {/* Start Awards section */}
        <section id="awards" className="about__section section--padding bg__secondary">
          <div className="container">
            <div className="section__heading text-center mb-40">
              <h2 className="section__heading--maintitle" style={{color: '#ed1f26'}}>Awards and Certifications</h2>
            </div>

                        {/* Ethical Competition */}
                        <div className="row mb-50">
              <div className="col-lg-12">
                <div className="about__content text-center" style={{ 
                  background: '#ffffff', 
                  padding: '3rem', 
                  borderRadius: '15px',
                  border: '2px solid #6c757d',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <h3 className="about__content--maintitle mb-30" style={{ color: '#6c757d', fontSize: '2.2rem' }}>
                    🤝 Ethical Competition & Integrity
                  </h3>
                  <p className="about__content--desc mb-40" style={{ fontSize: '1.6rem', color: '#666' }}>
                    At RAQAM, integrity is the cornerstone of our business philosophy and competitive approach.
                  </p>
                  
                  {/* Ethical Principles Cards */}
                  <div className="row justify-content-center">
                    {/* Integrity Card */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="ethical__card" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '3px solid #6c757d',
                        borderRadius: '15px',
                        padding: '2.5rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%'
                      }}>
                        <div className="ethical__header text-center mb-25">
                          <div className="ethical__icon mb-15" style={{ fontSize: '3rem', color: '#6c757d' }}>⚖️</div>
                          <h4 className="ethical__title" style={{ 
                            color: '#6c757d', 
                            fontSize: '1.6rem', 
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            Integrity First
                          </h4>
                          <div className="ethical__divider" style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        
                        <div className="ethical__content">
                          <p className="ethical__desc mb-20" style={{ 
                            fontSize: '1rem', 
                            lineHeight: '1.6', 
                            color: '#555',
                            textAlign: 'center'
                          }}>
                            Integrity is the foundation of everything we do at RAQAM. We maintain the highest ethical standards in all our business practices and relationships.
                          </p>
                          <div className="ethical__details" style={{
                            background: 'rgba(108, 117, 125, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(108, 117, 125, 0.1)'
                          }}>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Core Value:</strong> Honesty & Transparency
                            </p>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Approach:</strong> Ethical Business Practices
                            </p>
                            <p style={{ fontSize: '1rem', color: '#666', margin: '0' }}>
                              <strong style={{ color: '#6c757d' }}>Commitment:</strong> <span style={{ color: '#495057', fontWeight: '600' }}>Unwavering</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="ethical__footer mt-20" style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', margin: '0' }}>
                            Foundation of Excellence
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fair Competition Card */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="ethical__card" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '3px solid #6c757d',
                        borderRadius: '15px',
                        padding: '2.5rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%'
                      }}>
                        <div className="ethical__header text-center mb-25">
                          <div className="ethical__icon mb-15" style={{ fontSize: '3rem', color: '#6c757d' }}>🎯</div>
                          <h4 className="ethical__title" style={{ 
                            color: '#6c757d', 
                            fontSize: '1.6rem', 
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            Fair Competition
                          </h4>
                          <div className="ethical__divider" style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        
                        <div className="ethical__content">
                          <p className="ethical__desc mb-20" style={{ 
                            fontSize: '1rem', 
                            lineHeight: '1.6', 
                            color: '#555',
                            textAlign: 'center'
                          }}>
                            We compete ethically, focusing on quality, innovation, and building genuine, long-term relationships—never resorting to shortcuts or unfair practices.
                          </p>
                          <div className="ethical__details" style={{
                            background: 'rgba(108, 117, 125, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(108, 117, 125, 0.1)'
                          }}>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Focus:</strong> Quality & Innovation
                            </p>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Approach:</strong> Long-term Relationships
                            </p>
                            <p style={{ fontSize: '1rem', color: '#666', margin: '0' }}>
                              <strong style={{ color: '#6c757d' }}>Policy:</strong> <span style={{ color: '#495057', fontWeight: '600' }}>No Shortcuts</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="ethical__footer mt-20" style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', margin: '0' }}>
                            Competitive Excellence
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mutual Respect Card */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="ethical__card" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '3px solid #6c757d',
                        borderRadius: '15px',
                        padding: '2.5rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%'
                      }}>
                        <div className="ethical__header text-center mb-25">
                          <div className="ethical__icon mb-15" style={{ fontSize: '3rem', color: '#6c757d' }}>🤝</div>
                          <h4 className="ethical__title" style={{ 
                            color: '#6c757d', 
                            fontSize: '1.6rem', 
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            Mutual Respect
                          </h4>
                          <div className="ethical__divider" style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        
                        <div className="ethical__content">
                          <p className="ethical__desc mb-20" style={{ 
                            fontSize: '1rem', 
                            lineHeight: '1.6', 
                            color: '#555',
                            textAlign: 'center'
                          }}>
                            We believe true success comes from ethical behavior, mutual respect, and doing what's right for our clients and industry partners.
                          </p>
                          <div className="ethical__details" style={{
                            background: 'rgba(108, 117, 125, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(108, 117, 125, 0.1)'
                          }}>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Belief:</strong> Ethical Success
                            </p>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Values:</strong> Respect & Righteousness
                            </p>
                            <p style={{ fontSize: '1rem', color: '#666', margin: '0' }}>
                              <strong style={{ color: '#6c757d' }}>Commitment:</strong> <span style={{ color: '#495057', fontWeight: '600' }}>Client-First</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="ethical__footer mt-20" style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', margin: '0' }}>
                            Partnership Excellence
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-30" style={{ marginTop: '2rem' }}>
                    <p className="about__content--desc" style={{ fontSize: '1.4rem', color: '#555', fontStyle: 'italic' }}>
                      Our commitment to ethical competition and integrity drives everything we do, ensuring sustainable success built on trust, respect, and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* DIPA Awards Display */}
            <div className="row mb-50">
              <div className="col-lg-12">
                <div className="about__content text-center" style={{ 
                  background: '#ffffff', 
                  padding: '3rem', 
                  borderRadius: '15px',
                  border: '2px solid #6c757d',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <h3 className="about__content--maintitle mb-30" style={{ color: '#6c757d', fontSize: '2.2rem' }}>
                    🏆 DIPA Gold Award Recognition
                  </h3>
                  <p className="about__content--desc mb-40" style={{ fontSize: '1.6rem', color: '#666' }}>
                    RAQAM International is proud to be the first Saudi Arabian flexographic company to win the prestigious "Print & Pack DIPA Gold Award" for two consecutive years.
                  </p>
                  
                  {/* DIPA Award Cards */}
                  <div className="row justify-content-center">
                    {/* Year 1 Award */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="award__card" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '3px solid #6c757d',
                        borderRadius: '15px',
                        padding: '2.5rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        {/* Award Header */}
                        <div className="award__header text-center mb-25">
                          <div className="award__icon mb-15" style={{ fontSize: '3rem', color: '#6c757d' }}>🥇</div>
                          <h4 className="award__title" style={{ 
                            color: '#6c757d', 
                            fontSize: '1.6rem', 
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            DIPA Gold Award
                          </h4>
                          <div className="award__divider" style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        
                        {/* Award Content */}
                        <div className="award__content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                          <h5 className="award__subtitle mb-20" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.3rem', 
                            fontWeight: '600',
                            textAlign: 'center'
                          }}>
                            Flexographic Printing Excellence
                          </h5>
                          <p className="award__desc mb-20" style={{ 
                            fontSize: '1rem', 
                            lineHeight: '1.6', 
                            color: '#555',
                            textAlign: 'center',
                            flex: '1'
                          }}>
                            First Saudi Arabian company to receive this prestigious international recognition in flexographic printing.
                          </p>
                          <div className="award__details" style={{
                            background: 'rgba(108, 117, 125, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(108, 117, 125, 0.1)'
                          }}>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Category:</strong> Flexographic Printing
                            </p>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Year:</strong> First Consecutive Year
                            </p>
                            <p style={{ fontSize: '1rem', color: '#666', margin: '0' }}>
                              <strong style={{ color: '#6c757d' }}>Status:</strong> <span style={{ color: '#495057', fontWeight: '600' }}>Achieved</span>
                            </p>
                          </div>
                        </div>
                        
                        {/* Award Footer */}
                        <div className="award__footer mt-20" style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', margin: '0' }}>
                            International Excellence Recognition
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Year 2 Award */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="award__card" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '3px solid #6c757d',
                        borderRadius: '15px',
                        padding: '2.5rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        {/* Award Header */}
                        <div className="award__header text-center mb-25">
                          <div className="award__icon mb-15" style={{ fontSize: '3rem', color: '#6c757d' }}>🏆</div>
                          <h4 className="award__title" style={{ 
                            color: '#6c757d', 
                            fontSize: '1.6rem', 
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            DIPA Gold Award
                          </h4>
                          <div className="award__divider" style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        
                        {/* Award Content */}
                        <div className="award__content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                          <h5 className="award__subtitle mb-20" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.3rem', 
                            fontWeight: '600',
                            textAlign: 'center'
                          }}>
                            Consecutive Excellence
                          </h5>
                          <p className="award__desc mb-20" style={{ 
                            fontSize: '1rem', 
                            lineHeight: '1.6', 
                            color: '#555',
                            textAlign: 'center',
                            flex: '1'
                          }}>
                            Maintaining the highest standards of quality and innovation, securing the award for the second consecutive year.
                          </p>
                          <div className="award__details" style={{
                            background: 'rgba(108, 117, 125, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(108, 117, 125, 0.1)'
                          }}>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Category:</strong> Flexographic Printing
                            </p>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Year:</strong> Second Consecutive Year
                            </p>
                            <p style={{ fontSize: '1rem', color: '#666', margin: '0' }}>
                              <strong style={{ color: '#6c757d' }}>Status:</strong> <span style={{ color: '#495057', fontWeight: '600' }}>Achieved</span>
                            </p>
                          </div>
                        </div>
                        
                        {/* Award Footer */}
                        <div className="award__footer mt-20" style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', margin: '0' }}>
                            Sustained Excellence Recognition
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Summary */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="achievement__summary" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '3px solid #6c757d',
                        borderRadius: '15px',
                        padding: '2.5rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <div className="achievement__header text-center mb-25">
                          <div className="achievement__icon mb-15" style={{ fontSize: '3rem', color: '#6c757d' }}>⭐</div>
                          <h4 className="achievement__title" style={{ 
                            color: '#6c757d', 
                            fontSize: '1.6rem', 
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            Industry Pioneer
                          </h4>
                          <div className="achievement__divider" style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        
                        <div className="achievement__content" style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                          <h5 className="achievement__subtitle mb-20" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.3rem', 
                            fontWeight: '600',
                            textAlign: 'center'
                          }}>
                            Two-Year Excellence
                          </h5>
                          <p className="achievement__desc mb-20" style={{ 
                            fontSize: '1rem', 
                            lineHeight: '1.6', 
                            color: '#555',
                            textAlign: 'center',
                            flex: '1'
                          }}>
                            The only Saudi Arabian company to achieve this prestigious international recognition, demonstrating consistent excellence in flexographic printing.
                          </p>
                          <div className="achievement__details" style={{
                            background: 'rgba(108, 117, 125, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(108, 117, 125, 0.1)'
                          }}>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Achievement:</strong> Two Consecutive Years
                            </p>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Position:</strong> First Saudi Company
                            </p>
                            <p style={{ fontSize: '1rem', color: '#666', margin: '0' }}>
                              <strong style={{ color: '#6c757d' }}>Status:</strong> <span style={{ color: '#495057', fontWeight: '600' }}>Pioneer</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="achievement__footer mt-20" style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', margin: '0' }}>
                            Industry Leadership Recognition
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-30" style={{ marginTop: '2rem' }}>
                    <p className="about__content--desc" style={{ fontSize: '1.4rem', color: '#555', fontStyle: 'italic' }}>
                      These prestigious awards validate our commitment to excellence and innovation in the flexographic printing industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Display */}
            <div className="row mb-50">
              <div className="col-lg-12">
                <div className="about__content text-center" style={{ 
                  background: '#ffffff', 
                  padding: '3rem', 
                  borderRadius: '15px',
                  border: '2px solid #6c757d',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <h3 className="about__content--maintitle mb-30" style={{ color: '#6c757d', fontSize: '2.2rem' }}>
                    📜 ISO  Certifications
                  </h3>
                  <p className="about__content--desc mb-40" style={{ fontSize: '1.6rem', color: '#666' }}>
                    RAQAM International holds internationally recognized certifications that demonstrate our commitment to quality, safety, and continuous improvement.
                  </p>
                  
                  {/* Certification Cards */}
                  <div className="row justify-content-center">
                    {/* ISO 9001 */}
                    <div className="col-lg-5 col-md-6 mb-30">
                      <div className="certification__card" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '3px solid #6c757d',
                        borderRadius: '15px',
                        padding: '2.5rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <div className="certification__header text-center mb-25">
                          <div className="certification__icon mb-15" style={{ fontSize: '3rem', color: '#6c757d' }}>🏅</div>
                          <h4 className="certification__title" style={{ 
                            color: '#6c757d', 
                            fontSize: '1.8rem', 
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            ISO 9001:2015
                          </h4>
                          <div className="certification__divider" style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        
                        <div className="certification__content">
                          <h5 className="certification__subtitle mb-20" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.4rem', 
                            fontWeight: '600',
                            textAlign: 'center'
                          }}>
                            Quality Management System
                          </h5>
                          <p className="certification__desc mb-20" style={{ 
                            fontSize: '1.1rem', 
                            lineHeight: '1.6', 
                            color: '#555',
                            textAlign: 'center'
                          }}>
                            Certified for implementing and maintaining a comprehensive quality management system ensuring consistent product quality and customer satisfaction.
                          </p>
                          <div className="certification__details" style={{
                            background: 'rgba(108, 117, 125, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(108, 117, 125, 0.1)'
                          }}>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Scope:</strong> Manufacturing of Labels and Packaging Materials
                            </p>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Valid Until:</strong> Continuously Maintained
                            </p>
                            <p style={{ fontSize: '1rem', color: '#666', margin: '0' }}>
                              <strong style={{ color: '#6c757d' }}>Status:</strong> <span style={{ color: '#495057', fontWeight: '600' }}>Active</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="certification__footer mt-20" style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', margin: '0' }}>
                            Internationally Recognized Standard
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ISO 22000 */}
                    <div className="col-lg-5 col-md-6 mb-30">
                      <div className="certification__card" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        border: '3px solid #6c757d',
                        borderRadius: '15px',
                        padding: '2.5rem',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <div className="certification__header text-center mb-25">
                          <div className="certification__icon mb-15" style={{ fontSize: '3rem', color: '#6c757d' }}>🛡️</div>
                          <h4 className="certification__title" style={{ 
                            color: '#6c757d', 
                            fontSize: '1.8rem', 
                            fontWeight: '700',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            ISO 22000:2018
                          </h4>
                          <div className="certification__divider" style={{
                            width: '60px',
                            height: '3px',
                            background: 'linear-gradient(90deg, #6c757d, #adb5bd)',
                            margin: '0 auto',
                            borderRadius: '2px'
                          }}></div>
                        </div>
                        
                        <div className="certification__content">
                          <h5 className="certification__subtitle mb-20" style={{ 
                            color: '#2c3e50', 
                            fontSize: '1.4rem', 
                            fontWeight: '600',
                            textAlign: 'center'
                          }}>
                            Food Safety Management System
                          </h5>
                          <p className="certification__desc mb-20" style={{ 
                            fontSize: '1.1rem', 
                            lineHeight: '1.6', 
                            color: '#555',
                            textAlign: 'center'
                          }}>
                            Certified for implementing food safety management systems ensuring safe production of food packaging materials and maintaining the highest hygiene standards.
                          </p>
                          <div className="certification__details" style={{
                            background: 'rgba(108, 117, 125, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                            border: '1px solid rgba(108, 117, 125, 0.1)'
                          }}>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Scope:</strong> Food Packaging Materials Manufacturing
                            </p>
                            <p className="mb-10" style={{ fontSize: '1rem', color: '#666', margin: '0 0 0.5rem 0' }}>
                              <strong style={{ color: '#6c757d' }}>Valid Until:</strong> Continuously Maintained
                            </p>
                            <p style={{ fontSize: '1rem', color: '#666', margin: '0' }}>
                              <strong style={{ color: '#6c757d' }}>Status:</strong> <span style={{ color: '#495057', fontWeight: '600' }}>Active</span>
                            </p>
                          </div>
                        </div>
                        
                        <div className="certification__footer mt-20" style={{ textAlign: 'center' }}>
                          <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic', margin: '0' }}>
                            Food Safety Excellence Standard
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-30" style={{ marginTop: '2rem' }}>
                    <p className="about__content--desc" style={{ fontSize: '1.4rem', color: '#555', fontStyle: 'italic' }}>
                      These certifications validate our adherence to international standards and our unwavering commitment to delivering excellence in every aspect of our operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Certificates Display */}
            <div className="row mb-50" id="certifications">
              <div className="col-lg-12">
                <div className="about__content text-center" style={{ 
                  background: '#ffffff', 
                  padding: '3rem', 
                  borderRadius: '15px',
                  border: '2px solid #6c757d',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <h3 className="about__content--maintitle mb-30" style={{ color: '#6c757d', fontSize: '2.2rem' }}>
                    📜 Other Certificates
                  </h3>
                  <p className="about__content--desc mb-40" style={{ fontSize: '1.6rem', color: '#666' }}>
                    RAQAM International is proud to be an authorized partner and distributor for leading industry technology providers.
                  </p>
                  
                  {/* Certificate Cards */}
                  <div className="row justify-content-center">
                    {/* Zebra Associate Partner Card */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="certification__card h-100" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        padding: '3.5rem 2rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.05)',
                        textAlign: 'center',
                        border: '2px solid #6c757d',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '4px',
                          background: 'linear-gradient(90deg, #6c757d, #adb5bd)'
                        }}></div>
                        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                          <img 
                            src="/assets/img/zebra_technologies.jpg" 
                            alt="Zebra Technologies" 
                            style={{ 
                              width: '80px', 
                              height: '80px', 
                              objectFit: 'contain'
                            }} 
                          />
                        </div>
                        <h3 className="about__content--maintitle mb-20" style={{ fontSize: '1.8rem', fontWeight: '600', color: '#2c3e50' }}>Zebra Associate Partner</h3>
                        <div style={{ marginBottom: '1.5rem' }}>
                          <p className="about__content--desc mb-8" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Awarded to: <strong style={{ color: '#2c3e50' }}>RAQAM International</strong>
                          </p>
                          <p className="about__content--desc mb-8" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Status: <span style={{ color: '#6c757d', fontWeight: '600' }}>Associate Partner</span>
                          </p>
                          <p className="about__content--desc mb-15" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Year: <span style={{ color: '#6c757d', fontWeight: '600' }}>2013</span>
                          </p>
                        </div>
                        <div style={{
                          padding: '1rem 1rem 0.2rem 1rem',
                          background: 'rgba(108, 117, 125, 0.05)',
                          borderRadius: '10px',
                          border: '1px solid rgba(108, 117, 125, 0.1)'
                        }}>
                          <p className="about__content--desc" style={{ fontSize: '1.1rem', color: '#495057', margin: '0 0 0.5rem 0' }}>
                            Signed by: Davide Guerra, Director EMEA Sales
                          </p>
                          <p className="about__content--desc" style={{ fontStyle: 'italic', fontSize: '1rem', color: '#495057', margin: 0 }}>
                            Zebra Technologies Europe Limited
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Datalogic KSA Distributor Card */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="certification__card h-100" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        padding: '2.5rem 2rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.05)',
                        textAlign: 'center',
                        border: '2px solid #6c757d',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '4px',
                          background: 'linear-gradient(90deg, #6c757d, #adb5bd)'
                        }}></div>
                        <div style={{textAlign: 'center', marginTop: '-1rem' }}>
                          <img 
                            src="/assets/img/datalogic.webp" 
                            alt="Datalogic" 
                            style={{ 
                              width: '150px', 
                              height: '150px', 
                              objectFit: 'contain'
                            }}  
                          />
                        </div>
                        <h3 className="about__content--maintitle mb-20" style={{ fontSize: '1.8rem', fontWeight: '600', color: '#2c3e50', marginTop: '-2.5rem' }}>Datalogic KSA Authorized Distributor</h3>
                        <div style={{ marginBottom: '1.5rem' }}>
                          <p className="about__content--desc mb-8" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Awarded to: <strong style={{ color: '#2c3e50' }}>RAQAM International</strong>
                          </p>
                          <p className="about__content--desc mb-8" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Status: <span style={{ color: '#6c757d', fontWeight: '600' }}>Authorized Distributor</span>
                          </p>
                          <p className="about__content--desc mb-8" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Year: <span style={{ color: '#6c757d', fontWeight: '600' }}>2013</span>
                          </p>
                        </div>
                        <div style={{
                          padding: '1rem',
                          background: 'rgba(108, 117, 125, 0.05)',
                          borderRadius: '10px',
                          border: '1px solid rgba(108, 117, 125, 0.1)'
                        }}>
                          <p className="about__content--desc" style={{ fontSize: '1.1rem', color: '#495057', margin: '0 0 0.5rem 0' }}>
                            Signed by: Roberto Schiavo, VP Emerging Markets
                          </p>
                          <p className="about__content--desc" style={{ fontStyle: 'italic', fontSize: '1rem', color: '#495057', margin: 0 }}>
                            Datalogic ADC
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Zebra Supplies Specialist Card */}
                    <div className="col-lg-4 col-md-6 mb-30">
                      <div className="certification__card h-100" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        padding: '3.5rem 2rem',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.05)',
                        textAlign: 'center',
                        border: '2px solid #6c757d',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '4px',
                          background: 'linear-gradient(90deg, #6c757d, #adb5bd)'
                        }}></div>
                        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                          <img 
                            src="/assets/img/zebra_technologies.jpg" 
                            alt="Zebra Technologies" 
                            style={{ 
                              width: '80px', 
                              height: '80px', 
                              objectFit: 'contain'
                            }} 
                          />
                        </div>
                        <h3 className="about__content--maintitle mb-20" style={{ fontSize: '1.8rem', fontWeight: '600', color: '#2c3e50' }}>Zebra Supplies Specialist</h3>
                        <div style={{ marginBottom: '1.5rem' }}>
                          <p className="about__content--desc mb-8" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Awarded to: <strong style={{ color: '#2c3e50' }}>RAQAM International</strong>
                          </p>
                          <p className="about__content--desc mb-8" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Status: <span style={{ color: '#6c757d', fontWeight: '600' }}>Supplies Specialist</span>
                          </p>
                          <p className="about__content--desc mb-15" style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                            Year: <span style={{ color: '#6c757d', fontWeight: '600' }}>2013</span>
                          </p>
                        </div>
                        <div style={{
                          padding: '1rem 1rem 0.2rem 1rem',
                          background: 'rgba(108, 117, 125, 0.05)',
                          borderRadius: '10px',
                          border: '1px solid rgba(108, 117, 125, 0.1)'
                        }}>
                          <p className="about__content--desc" style={{ fontSize: '1.1rem', color: '#495057', margin: '0 0 0.5rem 0' }}>
                            Signed by: George Morawetz, CEO
                          </p>
                          <p className="about__content--desc" style={{ fontStyle: 'italic', fontSize: '1rem', color: '#495057', margin: 0 }}>
                            Zebra Technologies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-30" style={{ marginTop: '2rem' }}>
                    <p className="about__content--desc" style={{ fontSize: '1.4rem', color: '#555', fontStyle: 'italic' }}>
                      Our strategic partnerships with industry leaders enable us to provide cutting-edge solutions and support to our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Awards section */}

        {/* Start Team section */}
        <section id="team" className="about__section section--padding" style={{backgroundColor: '#ffffff'}}>
          <div className="container">
            <div className="section__heading text-center mb-40">
              <h2 className="section__heading--maintitle" style={{color: '#ed1f26'}}>Our Team</h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="about__content text-center">
                  <p className="about__content--desc mb-25">
                    RAQAM's success is driven by a team of diverse talented professionals who bring expertise in printing, packaging, and design. Our team's dedication, knowledge, and creativity ensure that each client receives reliable solutions tailored to their unique business needs and industry demands.
                  </p>
                  <div className="row mt-4">
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="team__item text-center">
                        <div className="team__icon mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        </div>
                        <h4>Leadership Team</h4>
                        <p>Experienced executives guiding our strategic direction and growth.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="team__item text-center">
                        <div className="team__icon mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                            <path d="M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                        <h4>Production Team</h4>
                        <p>Skilled technicians ensuring quality and precision in every product.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="team__item text-center">
                        <div className="team__icon mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                            <path d="M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                        <h4>Design Team</h4>
                        <p>Creative professionals bringing innovative solutions to life.</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                      <div className="team__item text-center">
                        <div className="team__icon mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                        </div>
                        <h4>Sales Team</h4>
                        <p>Dedicated professionals ensuring exceptional customer experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team section */}

        {/* Start testimonial section */}
        {/* <section className="testimonial__section position__relative testimonial__bg--two section--padding">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="testimonial__section--inner">
                  <div className="section__heading text-center mb-40">
                    <h2 className="section__heading--maintitle">
                      What Say Our Top Clints
                    </h2>
                  </div>
                  <div className=" testimonial__swiper--column3 testimonial__padding swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial__items--style2 position__relative border-radius-5 d-flex align-items-center">
                          <div className="testimonial__thumbnail--style2">
                            <img
                              className="testimonial__items--thumbnail__img display-block"
                              src="/assets/img/other/testimonial-thumb1.webp"
                              alt="testimonial-img"
                            />
                          </div>
                          <div className="testimonial__content--style2">
                            <h3 className="testimonial__items--author__title h4">
                              Abdur Razzak
                            </h3>
                            <h4 className="testimonial__items--author__subtitle h5">
                              Ui Ux Designer
                            </h4>
                            <p className="testimonial__items--desc style2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8.101"
                                height="6.481"
                                viewBox="0 0 8.101 6.481"
                              >
                                <path
                                  data-name="Icon metro-quote"
                                  d="M5.57,9.667v3.24H8.81V9.667H7.19a1.587,1.587,0,0,1,1.62-1.62V6.427A3.174,3.174,0,0,0,5.57,9.667Zm8.1-1.62V6.427a3.174,3.174,0,0,0-3.24,3.24v3.24h3.24V9.667h-1.62A1.587,1.587,0,0,1,13.671,8.047Z"
                                  transform="translate(-5.57 -6.427)"
                                  fill="currentColor"
                                />
                              </svg>
                              Mum ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusan tium doloremque.{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.774"
                                height="6.803"
                                viewBox="0 0 7.774 6.803"
                              >
                                <path
                                  data-name="Icon awesome-quote-right"
                                  d="M7.046,1.5H5.1a.729.729,0,0,0-.729.729V4.172A.729.729,0,0,0,5.1,4.9H6.317v.972a.973.973,0,0,1-.972.972H5.223a.364.364,0,0,0-.364.364v.729a.364.364,0,0,0,.364.364h.121a2.429,2.429,0,0,0,2.43-2.43V2.229A.729.729,0,0,0,7.046,1.5Zm-4.373,0H.729A.729.729,0,0,0,0,2.229V4.172A.729.729,0,0,0,.729,4.9H1.944v.972a.973.973,0,0,1-.972.972H.85a.364.364,0,0,0-.364.364v.729A.364.364,0,0,0,.85,8.3H.972A2.429,2.429,0,0,0,3.4,5.873V2.229A.729.729,0,0,0,2.672,1.5Z"
                                  transform="translate(0 -1.5)"
                                  fill="currentColor"
                                />
                              </svg>
                            </p>
                            <ul className="rating testimonial__rating d-flex">
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                          <div className="testimonial__quote--icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25.599"
                              height="22.572"
                              viewBox="0 0 25.599 22.572"
                            >
                              <g
                                data-name="Group 382"
                                transform="translate(-164 -5399)"
                              >
                                <path
                                  data-name="Path 131"
                                  d="M10.284,11.81a1.231,1.231,0,0,0,.62-1.652L9.892,8.031a1.235,1.235,0,0,0-1.611-.6A14.227,14.227,0,0,0,3.82,10.324,10.79,10.79,0,0,0,.826,15.052,25.936,25.936,0,0,0,0,22.321v6.34A1.243,1.243,0,0,0,1.239,29.9H9.355a1.243,1.243,0,0,0,1.239-1.239V20.545a1.243,1.243,0,0,0-1.239-1.239H5.472a8.707,8.707,0,0,1,1.446-5.018A7.849,7.849,0,0,1,10.284,11.81Z"
                                  transform="translate(164 5391.672)"
                                  fill="#f1f1f1"
                                />
                                <path
                                  data-name="Path 132"
                                  d="M80.963,11.89a1.231,1.231,0,0,0,.62-1.652L80.571,8.132a1.235,1.235,0,0,0-1.611-.6,14.959,14.959,0,0,0-4.44,2.87,11.021,11.021,0,0,0-3.015,4.75A25.587,25.587,0,0,0,70.7,22.4v6.34a1.243,1.243,0,0,0,1.239,1.239h8.116a1.243,1.243,0,0,0,1.239-1.239V20.625a1.243,1.243,0,0,0-1.239-1.239h-3.9A8.709,8.709,0,0,1,77.6,14.368,7.848,7.848,0,0,1,80.963,11.89Z"
                                  transform="translate(107.9 5391.592)"
                                  fill="#f1f1f1"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial__items--style2 position__relative border-radius-5 d-flex align-items-center">
                          <div className="testimonial__thumbnail--style2">
                            <img
                              className="testimonial__items--thumbnail__img display-block"
                              src="/assets/img/other/testimonial-thumb2.webp"
                              alt="testimonial-img"
                            />
                          </div>
                          <div className="testimonial__content--style2">
                            <h3 className="testimonial__items--author__title h4">
                              Hamid Khalid
                            </h3>
                            <h4 className="testimonial__items--author__subtitle h5">
                              Web Designer
                            </h4>
                            <p className="testimonial__items--desc style2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8.101"
                                height="6.481"
                                viewBox="0 0 8.101 6.481"
                              >
                                <path
                                  data-name="Icon metro-quote"
                                  d="M5.57,9.667v3.24H8.81V9.667H7.19a1.587,1.587,0,0,1,1.62-1.62V6.427A3.174,3.174,0,0,0,5.57,9.667Zm8.1-1.62V6.427a3.174,3.174,0,0,0-3.24,3.24v3.24h3.24V9.667h-1.62A1.587,1.587,0,0,1,13.671,8.047Z"
                                  transform="translate(-5.57 -6.427)"
                                  fill="currentColor"
                                />
                              </svg>
                              Mum ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusan tium doloremque.{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.774"
                                height="6.803"
                                viewBox="0 0 7.774 6.803"
                              >
                                <path
                                  data-name="Icon awesome-quote-right"
                                  d="M7.046,1.5H5.1a.729.729,0,0,0-.729.729V4.172A.729.729,0,0,0,5.1,4.9H6.317v.972a.973.973,0,0,1-.972.972H5.223a.364.364,0,0,0-.364.364v.729a.364.364,0,0,0,.364.364h.121a2.429,2.429,0,0,0,2.43-2.43V2.229A.729.729,0,0,0,7.046,1.5Zm-4.373,0H.729A.729.729,0,0,0,0,2.229V4.172A.729.729,0,0,0,.729,4.9H1.944v.972a.973.973,0,0,1-.972.972H.85a.364.364,0,0,0-.364.364v.729A.364.364,0,0,0,.85,8.3H.972A2.429,2.429,0,0,0,3.4,5.873V2.229A.729.729,0,0,0,2.672,1.5Z"
                                  transform="translate(0 -1.5)"
                                  fill="currentColor"
                                />
                              </svg>
                            </p>
                            <ul className="rating testimonial__rating d-flex">
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                          <div className="testimonial__quote--icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25.599"
                              height="22.572"
                              viewBox="0 0 25.599 22.572"
                            >
                              <g
                                data-name="Group 382"
                                transform="translate(-164 -5399)"
                              >
                                <path
                                  data-name="Path 131"
                                  d="M10.284,11.81a1.231,1.231,0,0,0,.62-1.652L9.892,8.031a1.235,1.235,0,0,0-1.611-.6A14.227,14.227,0,0,0,3.82,10.324,10.79,10.79,0,0,0,.826,15.052,25.936,25.936,0,0,0,0,22.321v6.34A1.243,1.243,0,0,0,1.239,29.9H9.355a1.243,1.243,0,0,0,1.239-1.239V20.545a1.243,1.243,0,0,0-1.239-1.239H5.472a8.707,8.707,0,0,1,1.446-5.018A7.849,7.849,0,0,1,10.284,11.81Z"
                                  transform="translate(164 5391.672)"
                                  fill="#f1f1f1"
                                />
                                <path
                                  data-name="Path 132"
                                  d="M80.963,11.89a1.231,1.231,0,0,0,.62-1.652L80.571,8.132a1.235,1.235,0,0,0-1.611-.6,14.959,14.959,0,0,0-4.44,2.87,11.021,11.021,0,0,0-3.015,4.75A25.587,25.587,0,0,0,70.7,22.4v6.34a1.243,1.243,0,0,0,1.239,1.239h8.116a1.243,1.243,0,0,0,1.239-1.239V20.625a1.243,1.243,0,0,0-1.239-1.239h-3.9A8.709,8.709,0,0,1,77.6,14.368,7.848,7.848,0,0,1,80.963,11.89Z"
                                  transform="translate(107.9 5391.592)"
                                  fill="#f1f1f1"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial__items--style2 position__relative border-radius-5 d-flex align-items-center">
                          <div className="testimonial__thumbnail--style2">
                            <img
                              className="testimonial__items--thumbnail__img display-block"
                              src="/assets/img/other/testimonial-thumb3.webp"
                              alt="testimonial-img"
                            />
                          </div>
                          <div className="testimonial__content--style2">
                            <h3 className="testimonial__items--author__title h4">
                              Sohidul Alam
                            </h3>
                            <h4 className="testimonial__items--author__subtitle h5">
                              CEO Peque Theme
                            </h4>
                            <p className="testimonial__items--desc style2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8.101"
                                height="6.481"
                                viewBox="0 0 8.101 6.481"
                              >
                                <path
                                  data-name="Icon metro-quote"
                                  d="M5.57,9.667v3.24H8.81V9.667H7.19a1.587,1.587,0,0,1,1.62-1.62V6.427A3.174,3.174,0,0,0,5.57,9.667Zm8.1-1.62V6.427a3.174,3.174,0,0,0-3.24,3.24v3.24h3.24V9.667h-1.62A1.587,1.587,0,0,1,13.671,8.047Z"
                                  transform="translate(-5.57 -6.427)"
                                  fill="currentColor"
                                />
                              </svg>
                              Mum ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusan tium doloremque.{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.774"
                                height="6.803"
                                viewBox="0 0 7.774 6.803"
                              >
                                <path
                                  data-name="Icon awesome-quote-right"
                                  d="M7.046,1.5H5.1a.729.729,0,0,0-.729.729V4.172A.729.729,0,0,0,5.1,4.9H6.317v.972a.973.973,0,0,1-.972.972H5.223a.364.364,0,0,0-.364.364v.729a.364.364,0,0,0,.364.364h.121a2.429,2.429,0,0,0,2.43-2.43V2.229A.729.729,0,0,0,7.046,1.5Zm-4.373,0H.729A.729.729,0,0,0,0,2.229V4.172A.729.729,0,0,0,.729,4.9H1.944v.972a.973.973,0,0,1-.972.972H.85a.364.364,0,0,0-.364.364v.729A.364.364,0,0,0,.85,8.3H.972A2.429,2.429,0,0,0,3.4,5.873V2.229A.729.729,0,0,0,2.672,1.5Z"
                                  transform="translate(0 -1.5)"
                                  fill="currentColor"
                                />
                              </svg>
                            </p>
                            <ul className="rating testimonial__rating d-flex">
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                          <div className="testimonial__quote--icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25.599"
                              height="22.572"
                              viewBox="0 0 25.599 22.572"
                            >
                              <g
                                data-name="Group 382"
                                transform="translate(-164 -5399)"
                              >
                                <path
                                  data-name="Path 131"
                                  d="M10.284,11.81a1.231,1.231,0,0,0,.62-1.652L9.892,8.031a1.235,1.235,0,0,0-1.611-.6A14.227,14.227,0,0,0,3.82,10.324,10.79,10.79,0,0,0,.826,15.052,25.936,25.936,0,0,0,0,22.321v6.34A1.243,1.243,0,0,0,1.239,29.9H9.355a1.243,1.243,0,0,0,1.239-1.239V20.545a1.243,1.243,0,0,0-1.239-1.239H5.472a8.707,8.707,0,0,1,1.446-5.018A7.849,7.849,0,0,1,10.284,11.81Z"
                                  transform="translate(164 5391.672)"
                                  fill="#f1f1f1"
                                />
                                <path
                                  data-name="Path 132"
                                  d="M80.963,11.89a1.231,1.231,0,0,0,.62-1.652L80.571,8.132a1.235,1.235,0,0,0-1.611-.6,14.959,14.959,0,0,0-4.44,2.87,11.021,11.021,0,0,0-3.015,4.75A25.587,25.587,0,0,0,70.7,22.4v6.34a1.243,1.243,0,0,0,1.239,1.239h8.116a1.243,1.243,0,0,0,1.239-1.239V20.625a1.243,1.243,0,0,0-1.239-1.239h-3.9A8.709,8.709,0,0,1,77.6,14.368,7.848,7.848,0,0,1,80.963,11.89Z"
                                  transform="translate(107.9 5391.592)"
                                  fill="#f1f1f1"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial__items--style2 position__relative border-radius-5 d-flex align-items-center">
                          <div className="testimonial__thumbnail--style2">
                            <img
                              className="testimonial__items--thumbnail__img display-block"
                              src="/assets/img/other/testimonial-thumb1.webp"
                              alt="testimonial-img"
                            />
                          </div>
                          <div className="testimonial__content--style2">
                            <h3 className="testimonial__items--author__title h4">
                              Abdur Razzak
                            </h3>
                            <h4 className="testimonial__items--author__subtitle h5">
                              Ui Ux Designer
                            </h4>
                            <p className="testimonial__items--desc style2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="8.101"
                                height="6.481"
                                viewBox="0 0 8.101 6.481"
                              >
                                <path
                                  data-name="Icon metro-quote"
                                  d="M5.57,9.667v3.24H8.81V9.667H7.19a1.587,1.587,0,0,1,1.62-1.62V6.427A3.174,3.174,0,0,0,5.57,9.667Zm8.1-1.62V6.427a3.174,3.174,0,0,0-3.24,3.24v3.24h3.24V9.667h-1.62A1.587,1.587,0,0,1,13.671,8.047Z"
                                  transform="translate(-5.57 -6.427)"
                                  fill="currentColor"
                                />
                              </svg>
                              Mum ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusan tium doloremque.{" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7.774"
                                height="6.803"
                                viewBox="0 0 7.774 6.803"
                              >
                                <path
                                  data-name="Icon awesome-quote-right"
                                  d="M7.046,1.5H5.1a.729.729,0,0,0-.729.729V4.172A.729.729,0,0,0,5.1,4.9H6.317v.972a.973.973,0,0,1-.972.972H5.223a.364.364,0,0,0-.364.364v.729a.364.364,0,0,0,.364.364h.121a2.429,2.429,0,0,0,2.43-2.43V2.229A.729.729,0,0,0,7.046,1.5Zm-4.373,0H.729A.729.729,0,0,0,0,2.229V4.172A.729.729,0,0,0,.729,4.9H1.944v.972a.973.973,0,0,1-.972.972H.85a.364.364,0,0,0-.364.364v.729A.364.364,0,0,0,.85,8.3H.972A2.429,2.429,0,0,0,3.4,5.873V2.229A.729.729,0,0,0,2.672,1.5Z"
                                  transform="translate(0 -1.5)"
                                  fill="currentColor"
                                />
                              </svg>
                            </p>
                            <ul className="rating testimonial__rating d-flex">
                              <li className="rating__list">
                                <span className="rating__list--icon">
                                  <svg
                                    className="rating__list--icon__svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                                    width="11.105"
                                    height="11.732"
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
                          <div className="testimonial__quote--icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25.599"
                              height="22.572"
                              viewBox="0 0 25.599 22.572"
                            >
                              <g
                                data-name="Group 382"
                                transform="translate(-164 -5399)"
                              >
                                <path
                                  data-name="Path 131"
                                  d="M10.284,11.81a1.231,1.231,0,0,0,.62-1.652L9.892,8.031a1.235,1.235,0,0,0-1.611-.6A14.227,14.227,0,0,0,3.82,10.324,10.79,10.79,0,0,0,.826,15.052,25.936,25.936,0,0,0,0,22.321v6.34A1.243,1.243,0,0,0,1.239,29.9H9.355a1.243,1.243,0,0,0,1.239-1.239V20.545a1.243,1.243,0,0,0-1.239-1.239H5.472a8.707,8.707,0,0,1,1.446-5.018A7.849,7.849,0,0,1,10.284,11.81Z"
                                  transform="translate(164 5391.672)"
                                  fill="#f1f1f1"
                                />
                                <path
                                  data-name="Path 132"
                                  d="M80.963,11.89a1.231,1.231,0,0,0,.62-1.652L80.571,8.132a1.235,1.235,0,0,0-1.611-.6,14.959,14.959,0,0,0-4.44,2.87,11.021,11.021,0,0,0-3.015,4.75A25.587,25.587,0,0,0,70.7,22.4v6.34a1.243,1.243,0,0,0,1.239,1.239h8.116a1.243,1.243,0,0,0,1.239-1.239V20.625a1.243,1.243,0,0,0-1.239-1.239h-3.9A8.709,8.709,0,0,1,77.6,14.368,7.848,7.848,0,0,1,80.963,11.89Z"
                                  transform="translate(107.9 5391.592)"
                                  fill="#f1f1f1"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial__pagination swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="testimonial__bg--shape1"
            src="/assets/img/other/testimonial-shape.webp"
            alt=""
          />
          <img
            className="testimonial__bg--shape2"
            src="/assets/img/other/testimonial-shape2.webp"
            alt=""
          />
        </section>
        {/* End testimonial section */}
        {/* Start Newsletter banner section */}
        {/* <section className="newsletter__banner--section section--padding">
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
        </section>  */}
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
