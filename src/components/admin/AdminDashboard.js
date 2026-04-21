"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AdminProductCard from "@/components/admin/AdminProductCard";
import AdminNewsCard from "@/components/admin/AdminNewsCard";

export default function AdminDashboard() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const showNews = tab === "news";

  const [products, setProducts] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch("/api/data/products")
      .then((r) => r.json())
      .then((d) => setProducts(d.items || []))
      .catch(() => setProducts([]));
    fetch("/api/data/news")
      .then((r) => r.json())
      .then((d) => setNews(d.items || []))
      .catch(() => setNews([]));
  }, []);

  return (
    <>
      {showNews ? (
        <section className="blog__section section--padding">
          <div className="container">
            <div className="row align-items-center mb-4 justify-content-between">
              <div className="col-auto">
                <h2 className="section__heading--maintitle mb-0">News</h2>
              </div>
              <div className="col-auto">
                <Link href="/admin/news/new/" className="primary__btn">
                  Add news article
                </Link>
              </div>
            </div>
            <div className="blog__section--inner p-0">
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n30">
                {news === null ? (
                  <div className="col-12 text-center py-5">
                    <p>Loading news…</p>
                  </div>
                ) : (
                  news.map((post) => <AdminNewsCard key={post.id} post={post} />)
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="shop__section section--padding">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col">
                <h2 className="section__title--desc text-center text-md-start mb-0">Products</h2>
              </div>
              <div className="col-12 col-md-auto text-center text-md-end mt-3 mt-md-0">
                <Link href="/admin/product/new/" className="primary__btn">
                  Add product
                </Link>
              </div>
            </div>
            <div className="shop__product--wrapper">
              <div className="tab_content">
                <div className="tab_pane active show">
                  <div className="product__section--inner product__grid--inner">
                    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-1 mb--n30">
                      {products === null ? (
                        <div className="col-12 text-center py-5">
                          <p>Loading products…</p>
                        </div>
                      ) : (
                        products.map((product) => (
                          <AdminProductCard key={product.id} product={product} />
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
