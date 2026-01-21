'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProfileStats: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.6);
  const [borderRadius, setBorderRadius] = useState(48);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (!imageRef.current) return;

        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const startTrigger = windowHeight * 0.9;
        const endTrigger = windowHeight * 0.2;
        
        let progress = 0;
        
        if (rect.top <= startTrigger && rect.top >= endTrigger) {
          progress = (startTrigger - rect.top) / (startTrigger - endTrigger);
        } else if (rect.top < endTrigger) {
          progress = 1;
        }
        
        progress = Math.max(0, Math.min(1, progress));
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        const newScale = 0.6 + (easeOutCubic * 0.4);
        const newBorderRadius = 48 - (easeOutCubic * 40);
        const newOpacity = 0.5 + (easeOutCubic * 0.5);
        
        setScale(newScale);
        setBorderRadius(newBorderRadius);
        setOpacity(newOpacity);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

    return (
      <section className="relative w-full bg-white font-display flex flex-col items-center pt-16 lg:pt-24 pb-20 lg:pb-28">
        <div className="container max-w-[1280px] px-6 lg:px-12 flex flex-col items-center">
        <div 
          ref={imageRef}
          className="relative w-full group overflow-hidden bg-[#D1D1D1]/20 will-change-transform"
          style={{ 
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            opacity: opacity,
            transition: 'transform 0.1s ease-out, border-radius 0.1s ease-out, opacity 0.1s ease-out'
          }}
        >
          {/* Grayscale image that transitions on hover */}
          <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[16/9] w-full overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/me-sitting_37df8593-2.png"
              alt="Abhinav Raj - Full Stack Developer Sitting"
              fill
              priority
              className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        </div>

          <div className="w-full mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          <div className="flex flex-col space-y-3 border-t border-black/10 pt-6">
            <span className="text-[0.7rem] font-medium tracking-[0.2em] text-black/50 uppercase">
              Years of Experience
            </span>
            <span className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-medium leading-[0.9] tracking-tighter">
              4+
            </span>
          </div>

          <div className="flex flex-col space-y-3 border-t border-black/10 pt-6">
            <span className="text-[0.7rem] font-medium tracking-[0.2em] text-black/50 uppercase">
              Projects Completed
            </span>
            <span className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-medium leading-[0.9] tracking-tighter">
              30+
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileStats;
