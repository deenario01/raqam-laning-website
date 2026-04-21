"use client";

import { useCallback, useState } from "react";

export default function QuantityBox({ initial = 1 }) {
  const [quantity, setQuantity] = useState(Number(initial) > 0 ? Number(initial) : 50);

  const decrease = useCallback(() => {
    setQuantity((q) => {
      let newQty = q - 1;
      while(newQty % 50){
        newQty--
      }
      return newQty > 0 ? newQty : 1;
    });
  }, []);

  const increase = useCallback(() => {
    setQuantity((q) => {
      let newQty = q + 1;
      while(newQty % 50){
        newQty++
      }
      return newQty;
    });
  }, []);

  const onChange = useCallback((e) => {
    const next = parseInt(e.target.value, 10);
    if (!isNaN(next) && next > 0) setQuantity(next);
  }, []);

  return (
    <div className="quantity__box">
      <button
        type="button"
        className="quantity__value quickview__value--quantity decrease"
        aria-label="quantity value"
        value="Decrease Value"
        onClick={decrease}
      >
        -
      </button>
      <label>
        <input
          type="number"
          className="quantity__number quickview__value--number"
          value={quantity}
          onChange={onChange}
        />
      </label>
      <button
        type="button"
        className="quantity__value quickview__value--quantity increase"
        aria-label="quantity value"
        value="Increase Value"
        onClick={increase}
      >
        +
      </button>
    </div>
  );
}


