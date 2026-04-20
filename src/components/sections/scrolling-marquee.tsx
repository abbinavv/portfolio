"use client";

import React from "react";

const Star = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" className="h-8 w-8 lg:h-12 lg:w-12 shrink-0 fill-[#111111]">
    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 22l-2.09-6.26L4 14l5.91-1.74z" />
  </svg>
);

const textContent = "iOS DEVELOPER  FULL-STACK  UI & UX DESIGNER.";

const MarqueeItem = () => (
  <div className="flex items-center gap-6 lg:gap-10 shrink-0">
    <Star />
    <span className="whitespace-nowrap uppercase">{textContent}</span>
  </div>
);

export default function ScrollingMarquee() {
  return (
    <section className="relative w-full bg-[#E6E6E6] overflow-hidden py-12 lg:py-20 font-display">
      <div className="flex animate-marquee whitespace-nowrap items-center font-medium text-[2.5rem] md:text-[5rem] lg:text-[7rem] leading-none text-[#111111]">
        <div className="flex items-center gap-8 lg:gap-12 px-4">
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
        <div className="flex items-center gap-8 lg:gap-12 px-4" aria-hidden="true">
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
