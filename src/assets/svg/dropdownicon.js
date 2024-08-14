import React from "react";

function Dropdownicon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="5"
      fill="none"
      class="h-[2.133vw] w-[2.133vw] rotate-180 group-hover:rotate-0 peer-checked:rotate-0 tablet:h-[1vw] tablet:w-[1vw] desktop:h-[0.417vw] desktop:w-[0.417vw] group-hover:[&amp;>path]:fill-secondary-100 peer-checked:[&amp;>path]:fill-secondary-100"
      viewBox="0 0 6 5"
    >
      <path fill="#FFF" d="M3.866.5a1 1 0 0 0-1.732 0l-1.732 3A1 1 0 0 0 1.268 5h3.464a1 1 0 0 0 .866-1.5L3.866.5Z"></path>
      <defs>
        <linearGradient id="a" x1="6.464" x2="-0.464" y1="5" y2="5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#467BFF"></stop>
          <stop offset="1" stop-color="#75D9D9"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Dropdownicon;
