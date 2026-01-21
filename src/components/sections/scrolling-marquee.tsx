"use client";

import React from "react";
import Image from "next/image";

/**
 * ScrollingMarquee Component
 * 
 * An infinite scrolling marquee section that cycles the text "FULL-STACK DEVELOPER UI & UX DESIGNER"
 * interspersed with a green flower asset. 
 * 
 * Based on the design instructions and HTML structure provided.
 */
export default function ScrollingMarquee() {
  const flowerAsset = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/green-flower_7426aff1-1.avif";
  
  const textContent = "FULL-STACK DEVELOPER  •  iOS DEVELOPER  •  UI & UX DESIGNER";

  // Content block to repeat for seamless infinite loop
  const MarqueeItem = () => (
    <div className="flex items-center gap-10 shrink-0">
      <div className="flex items-center gap-6 lg:gap-10">
        <Image 
          src={flowerAsset} 
          alt="green flower" 
          width={128} 
          height={128} 
          className="h-16 w-16 lg:h-[8rem] lg:w-[8rem] object-contain"
          priority
        />
        <span className="whitespace-nowrap uppercase">
          {textContent}
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-[#E6E6E6] overflow-hidden py-10 lg:py-28 font-display">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center py-20 lg:py-28">
            {/* 
              Custom animation to translate the content horizontally.
              Classes use direct styles for font sizes based on computed styles:
              Desktop: ~8rem (128px)
              Mobile: ~3rem (48px)
            */}
            <div className="flex animate-marquee hover:pause whitespace-nowrap items-center font-medium text-[3rem] md:text-[8rem] leading-none text-[#111111]">
              <div className="flex items-center gap-10 px-5">
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
              </div>
              {/* Duplicated for smooth loop */}
              <div className="flex items-center gap-10 px-5" aria-hidden="true">
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}