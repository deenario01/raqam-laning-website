"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Banner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    let animationId;

    const updateImages = () => {
      if (bannerRef.current) {
        const images = bannerRef.current.querySelectorAll('.banner__items--thumbnail__img');
        const rect = bannerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate how much of the element is visible
        const visibleHeight = Math.min(windowHeight, elementTop + elementHeight) - Math.max(0, elementTop);
        const visibilityRatio = Math.max(0, Math.min(1, visibleHeight / elementHeight));
        
        images.forEach((img, index) => {
          const baseScale = [1.4, 1.35, 1.45, 1.38][index] || 1.3;
          const minScale = 1.0; // Fully visible scale
          
          // Start zoomed in, zoom out as element becomes more visible
          const scale = baseScale - (visibilityRatio * (baseScale - minScale));
          
          // Stop zooming when fully visible (scale reaches minScale)
          const finalScale = Math.max(minScale, scale);
          
          img.style.transform = `scale(${finalScale})`;
          img.style.transition = 'transform 0.1s ease-out';
        });
      }
      
      // Continue the animation loop
      animationId = requestAnimationFrame(updateImages);
    };
    
    updateImages();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <>
      {/* Start banner section */}
      <section
        className="banner__section banner__section--uniform-tiles section--padding"
        ref={bannerRef}
      >
        <div className="container-fluid">

          <div className="row mb--n28">
            {/* Left column: Laser + Label */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-28">
              <div className="banner__items mb-25">
                <Link
                  className="banner__items--thumbnail position__relative"
                  href="/shop"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="/assets/img/laser_printing.jpg"
                    alt="Laser printing"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="banner__items--content three">
                    <h2 className="banner__items--content__title" style={{ color: "white" }}>
                      Laser Printing
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="banner__items">
                <Link
                  className="banner__items--thumbnail position__relative"
                  href="/shop"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="/assets/img/label_printing.jpg"
                    alt="Label printing"
                    decoding="async"
                  />
                  <div className="banner__items--content four">
                    <h2 className="banner__items--content__title four" style={{ color: "white" }}>
                      Label Printing
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
            {/* Right column: Receipt + Holographics */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-28">
              <div className="banner__items mb-25">
                <Link
                  className="banner__items--thumbnail position__relative"
                  href="/shop"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="/assets/img/receipt_printing.jpg"
                    alt="Receipt printing"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="banner__items--content five">
                    <h2 className="banner__items--content__title" style={{ color: "white" }}>
                      Receipt Printing
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="banner__items">
                <Link
                  className="banner__items--thumbnail position__relative"
                  href="/product-details/holographic_labels/"
                >
                  <img
                    className="banner__items--thumbnail__img"
                    src="/assets/img/holographics_printing.png"
                    alt="Holographics printing"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="banner__items--content two">
                    <h2 className="banner__items--content__title" style={{ color: "white" }}>
                      Holographics Printing
                    </h2>
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
