"use client";

import Link from "next/link";
import Image from "next/image";

export default function ScrollTopBar() {
  return (
    <>
      {/* Scroll top bar */}
      <button aria-label="scroll top btn" id="scroll__top">
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
