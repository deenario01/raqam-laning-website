"use client";

import Link from "next/link";

export default function AdminProductCard({ product }) {
  return (
    <div className="col mb-30">
      <div className="product__items">
        <div className="product__items--thumbnail">
          <Link className="product__items--link" href={`/admin/product/${encodeURIComponent(product.id)}/`}>
            <img
              className="product__items--img product__primary--img"
              src={product.primaryImage}
              alt=""
            />
            <img
              className="product__items--img product__secondary--img"
              src="/assets/img/product/product2.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="product__items--content text-center">
          <h3
            className={`product__items--content__title h4 ${
              product.id === "personal_care_products_labels" ? "personal-care-products" : ""
            }`}
          >
            <Link href={`/admin/product/${encodeURIComponent(product.id)}/`}>{product.name}</Link>
          </h3>
          <Link
            className="product__items--action__cart--btn primary__btn d-flex align-items-center justify-content-center"
            href={`/admin/product/${encodeURIComponent(product.id)}/`}
          >
            <span className="add__to--cart__text d-none d-sm-inline">Edit product</span>
            <span className="d-inline d-sm-none">Edit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
