'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProfileStats: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const maxDistance = windowHeight;
      
      const progress = 1 - Math.min(distanceFromCenter / maxDistance, 1);
      
      const newScale = 0.8 + (progress * 0.2);
      setScale(Math.min(Math.max(newScale, 0.8), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-white font-display flex flex-col items-center pt-24 pb-32">
      {/* Profile Image Container */}
      <div className="container max-w-[1280px] px-8 lg:px-16 flex flex-col items-center">
        <div 
          ref={imageRef}
          className="relative w-full group overflow-hidden bg-[#D1D1D1]/20 rounded-lg transition-transform duration-100 ease-out"
          style={{ transform: `scale(${scale})` }}
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

        {/* Statistics Row */}
        <div className="w-full mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Experience Stat */}
          <div className="flex flex-col space-y-4 border-t border-black/10 pt-8">
            <span className="text-[0.75rem] font-medium tracking-[0.2em] text-black/50 uppercase">
              Years of Experience
            </span>
            <div className="flex items-baseline">
              <span className="text-[5rem] md:text-[6rem] lg:text-[8rem] font-medium leading-[0.9] tracking-tighter">
                4+
              </span>
            </div>
          </div>

          {/* Projects Stat */}
          <div className="flex flex-col space-y-4 border-t border-black/10 pt-8">
            <span className="text-[0.75rem] font-medium tracking-[0.2em] text-black/50 uppercase">
              Projects Completed
            </span>
            <div className="flex items-baseline">
              <span className="text-[5rem] md:text-[6rem] lg:text-[8rem] font-medium leading-[0.9] tracking-tighter">
                30+
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileStats;
