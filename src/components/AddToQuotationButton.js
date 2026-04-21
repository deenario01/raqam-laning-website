"use client";

import { useCallback } from "react";

export default function AddToQuotationButton({
  productId,
  name,
  price,
  image,
  className = "quickview__cart--btn primary__btn",
  children = "Add To Quotation",
}) {
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      // Try to read quantity from the nearest quantity input
      let quantity = 1;
      try {
        const scope = e.currentTarget.closest(
          ".product__variant--list, .quickview__variant--list, .product__details--info, .modal-dialog"
        ) || document;
        const qtyInput = scope.querySelector(".quantity__number");
        if (qtyInput) {
          const parsed = parseInt(qtyInput.value || qtyInput.getAttribute("value") || qtyInput.defaultValue || "1", 10);
          if (!isNaN(parsed) && parsed > 0) quantity = parsed;
        }
      } catch {}
      const item = {
        id: productId || name,
        name: name || "Product",
        price: Number(price) || 0,
        image: image || "/assets/img/product/product1.webp",
        quantity,
        href: productId ? `/product-details/${productId}` : "/product-details",
      };

      try {
        const raw = localStorage.getItem("quotationCart");
        const cart = raw ? JSON.parse(raw) : [];
        const index = cart.findIndex((p) => p.id === item.id);
        if (index >= 0) {
          cart[index].quantity = (cart[index].quantity || 1) + quantity;
        } else {
          cart.push(item);
        }
        localStorage.setItem("quotationCart", JSON.stringify(cart));
        
        // Dispatch custom event to notify other components about cart update
        window.dispatchEvent(new CustomEvent('cartUpdated'));
      } catch {}
      try {
        sessionStorage.setItem("quotationFrom", "details");
      } catch {}
      window.location.href = "/cart";
    },
    [productId, name, price, image]
  );

  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}


