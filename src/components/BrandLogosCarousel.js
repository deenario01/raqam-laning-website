"use client";

import { useEffect, useRef } from 'react';

export default function BrandLogosCarousel() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  const brandLogos = [
    { src: "/assets/img/customers/almarai.png", alt: "Almarai" },
    { src: "/assets/img/customers/alsafi.png", alt: "Al Safi" },
    { src: "/assets/img/customers/berain.png", alt: "Berain" },
    { src: "/assets/img/customers/dhl.png", alt: "DHL" },
    { src: "/assets/img/customers/fedex.png", alt: "FedEx" },
    { src: "/assets/img/customers/lg.png", alt: "LG" },
    { src: "/assets/img/customers/pure_life.png", alt: "Pure Life" },
    { src: "/assets/img/customers/pure_life2.png", alt: "Pure Life 2" },
  ];

  useEffect(() => {
    const animate = () => {
      if (trackRef.current) {
        positionRef.current -= 0.5; // Move 0.5px per frame
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
        
        // Reset position when we've moved one complete set
        const logoWidth = trackRef.current.children[0].offsetWidth * brandLogos.length;
        if (Math.abs(positionRef.current) >= logoWidth) {
          positionRef.current = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [brandLogos.length]);

  return (
    <>
      <div className="section__heading text-center mb-30 mt-100">
        <h2 className="section__heading--maintitle">Our Brand Partners</h2>
      </div>
      <div className="brand__logo--section bg__secondary section--padding">
        <div className="container-fluid">
          <div className="row row-cols-1">
            <div className="col">
              <div className="brand__logo--carousel">
                <div className="brand__logo--track" ref={trackRef}>
                  {/* First set of logos */}
                  {brandLogos.map((logo, index) => (
                    <div key={index} className="brand__logo--item">
                      <img
                        className="brand__logo--img"
                        src={logo.src}
                        alt={logo.alt}
                      />
                    </div>
                  ))}
                  {/* Second set of logos for seamless loop */}
                  {brandLogos.map((logo, index) => (
                    <div key={`duplicate-1-${index}`} className="brand__logo--item">
                      <img
                        className="brand__logo--img"
                        src={logo.src}
                        alt={logo.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
