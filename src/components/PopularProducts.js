"use client";

import ProductCard from "./ProductCard";
import { useState, useEffect, useMemo } from "react";

export default function PopularProducts({ skip }) {
  const [isMobile, setIsMobile] = useState(false);
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    fetch("/api/data/products")
      .then((r) => r.json())
      .then(setPayload)
      .catch(() => setPayload({ items: [], featuredIds: [] }));
  }, []);

  const allProducts = useMemo(() => {
    if (!payload?.items) return [];
    return payload.items
      .filter((p) => payload.featuredIds?.includes(p.id) && p.id !== skip)
      .slice(0, 5);
  }, [payload, skip]);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  // Show only 4 items on mobile, all items on larger screens
  const productsList = isMobile ? allProducts.slice(0, 4) : allProducts;
  
  return (
    <>
      {/* Start product section */}
      <section className="product__section section--padding pt-0">
        <div className="container-fluid">
          <div className="section__heading text-center mb-30">
            <h2 className="section__heading--maintitle">Most Popular Items</h2>
          </div>
          <div className="tab_content">
            <div id="chair" className="tab_pane active show">
              <div className="product__section--inner">
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-1 mb--n30">
                  {productsList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End product section */}
    </>
  );
}