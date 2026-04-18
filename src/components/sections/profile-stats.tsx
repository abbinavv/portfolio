'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProfileStats: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.6);
  const [borderRadius, setBorderRadius] = useState(48);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    let rafId: number;
    const handle = () => {
      rafId = requestAnimationFrame(() => {
        if (!imageRef.current) return;
        const rect = imageRef.current.getBoundingClientRect();
        const wh = window.innerHeight;
        const start = wh * 0.9, end = wh * 0.2;
        let p = rect.top <= start && rect.top >= end ? (start - rect.top) / (start - end) : rect.top < end ? 1 : 0;
        p = Math.max(0, Math.min(1, p));
        const e = 1 - Math.pow(1 - p, 3);
        setScale(0.6 + e * 0.4);
        setBorderRadius(48 - e * 40);
        setOpacity(0.5 + e * 0.5);
      });
    };
    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => { window.removeEventListener('scroll', handle); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <section className="relative w-full bg-white font-display flex flex-col items-center pt-16 lg:pt-24 pb-0">
      <div className="container max-w-[1280px] px-6 lg:px-12 flex flex-col items-center">
        {/* Scroll-scale image */}
        <div
          ref={imageRef}
          className="relative w-full group overflow-hidden bg-[#D1D1D1]/20 will-change-transform"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            opacity,
            transition: 'transform 0.1s ease-out, border-radius 0.1s ease-out, opacity 0.1s ease-out',
          }}
        >
          <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[16/9] w-full overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/me-sitting_37df8593-2.png"
              alt="Aziz Khaldi - Full Stack Developer"
              fill
              priority
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* Stats row — two columns each with text + stat */}
        <div className="w-full mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left */}
          <div className="flex flex-col gap-6 border-t border-black/10 pt-8 pb-14 pr-0 md:pr-16">
            <p className="text-xl lg:text-2xl font-medium leading-snug text-black max-w-xs">
              Driving measurable growth and engagement through thoughtful design and engineering.
            </p>
            <div className="mt-auto pt-6 border-t border-black/10">
              <span className="text-[0.62rem] font-medium tracking-[0.22em] text-black/40 uppercase block mb-3">
                Years of Experience
              </span>
              <span className="text-[6rem] lg:text-[8rem] font-medium leading-[0.85] tracking-tighter">
                4+
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 border-t border-black/10 pt-8 pb-14 pl-0 md:pl-16 md:border-l md:border-l-black/10">
            <p className="text-sm lg:text-base leading-relaxed text-black/50">
              Every product I build starts with understanding user goals and translating them into intuitive, high-performance experiences. From concept to launch, I focus on meaningful results — boosting user engagement, retention, and overall business impact.
            </p>
            <div className="mt-auto pt-6 border-t border-black/10">
              <span className="text-[0.62rem] font-medium tracking-[0.22em] text-black/40 uppercase block mb-3">
                Projects Completed
              </span>
              <span className="text-[6rem] lg:text-[8rem] font-medium leading-[0.85] tracking-tighter">
                30+
              </span>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="w-full py-16 lg:py-20">
          <p className="text-2xl lg:text-4xl font-medium leading-tight text-black max-w-3xl">
            Transforming ideas into exceptional digital experiences through expertise and innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileStats;
