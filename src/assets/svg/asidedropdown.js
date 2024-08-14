import React from "react";

export default function Asidedropdown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      class="ease-[cubic-bezier(0.87,_0,_0.13,_1)] h-[4.8vw] w-[4.8vw] rotate-90 transition-transform duration-300 group-data-[state=open]:-rotate-90 tablet:h-[2.25vw] tablet:w-[2.25vw] group-data-[state=open]:[&amp;>path]:stroke-secondary-100"
      viewBox="0 0 24 24"
    >
      <path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6 6 6-6 6"></path>
      <defs>
        <linearGradient id="a" x1="15" x2="9" y1="18" y2="18" gradientUnits="userSpaceOnUse">
          <stop stop-color="#467BFF"></stop>
          <stop offset="1" stop-color="#75D9D9"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
