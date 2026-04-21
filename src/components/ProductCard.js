"use client";

import Link from "next/link";

export default function ProductCard(props) {
    const { product } = props;
  return (
      <div className="col mb-30">
        <div className="product__items ">
          <div className="product__items--thumbnail">
            <Link
              className="product__items--link"
              href={`/product-details/${product.id}`}
            >
              <img
                className="product__items--img product__primary--img"
                src={product.primaryImage}
                alt="product-img"
              />
              <img
                className="product__items--img product__secondary--img"
                src="/assets/img/product/product2.webp"
                alt="product-img"
              />
            </Link>
          </div>
          <div className="product__items--content text-center">
            <h3
              className={`product__items--content__title h4 ${
                product.id === "personal_care_products_labels" ? "personal-care-products" : ""
              }`}
            >
              <Link href={`/product-details/${product.id}`}>
                {product.name}
              </Link>
            </h3>
            <Link
              className="product__items--action__cart--btn primary__btn d-flex align-items-center justify-content-center"
              href={`/product-details/${product.id}`}
            >
              <span className="add__to--cart__text d-none d-sm-inline">Show Details</span>
              <span className="d-inline d-sm-none">Show Details</span>
            </Link>
          </div>
        </div>
      </div>
  );
}
