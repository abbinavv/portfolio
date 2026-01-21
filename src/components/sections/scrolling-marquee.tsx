"use client";

import React from "react";
import Image from "next/image";

export default function ScrollingMarquee() {
  const flowerAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/green-flower_7426aff1-1.avif";
  const textContent = "FULL-STACK DEVELOPER UI & UX DESIGNER.";

  const MarqueeItem = () => (
    <div className="flex items-center gap-6 lg:gap-10 shrink-0">
      <Image 
        src={flowerAsset} 
        alt="green flower" 
        width={128} 
        height={128} 
        className="h-12 w-12 lg:h-24 lg:w-24 object-contain"
        priority
      />
      <span className="whitespace-nowrap uppercase">{textContent}</span>
    </div>
  );

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
