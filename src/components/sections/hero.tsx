'use client';

import React, { useState, useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';

const roles = ['Full-stack Developer', 'iOS Developer'];

const HeroSection: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero relative h-screen w-full flex items-center justify-center overflow-hidden z-20 bg-white">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] object-contain"
        >
          <source src="https://azizkhaldi.com/_next/static/media/glassyObj.3c74f580.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="z-50 flex-col flex h-[70vh] px-5 lg:px-9 py-10 items-center left-0 top-1/2 -translate-y-1/2 absolute justify-between font-display">
        <div className="h-[35vh] w-[1px] bg-black/20 relative hidden lg:block">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.4rem] w-[0.4rem] bg-black rounded-full"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[0.4rem] w-[0.4rem] bg-black rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <a 
            href="https://www.linkedin.com/in/aziz-khaldi-b28207261/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-black transition-opacity duration-300 group-hover:opacity-60" />
          </a>
          <a 
            href="https://wa.me/213779577865" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group text-black"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 lg:w-6 lg:h-6 transition-opacity duration-300 group-hover:opacity-60"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 017.008 2.899 9.825 9.825 0 012.892 7.01c-.001 5.45-4.435 9.884-9.886 9.884M12 2.045c-5.474 0-9.923 4.449-9.923 9.923 0 1.751.458 3.46 1.328 4.965L2 22l5.076-1.332A9.88 9.88 0 0012 21.954c5.473 0 9.922-4.449 9.922-9.922 0-2.642-1.028-5.126-2.896-6.995A9.87 9.87 0 0012 2.045"/>
            </svg>
          </a>
          <a 
            href="https://github.com/AzizKhaldi01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Github className="w-5 h-5 lg:w-6 lg:h-6 text-black transition-opacity duration-300 group-hover:opacity-60" />
          </a>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-black px-4">
        <p className="font-display text-base md:text-lg lg:text-xl mb-2">
          Hi! i&rsquo;m Aziz
        </p>
<h1 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.1] tracking-tight transition-opacity duration-500">
            {roles[currentRoleIndex]}
          </h1>
        <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.1] tracking-tight">
          UI & UX Designer.
        </h1>
      </div>

      <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-4 font-display text-xs tracking-widest">
        <span className="writing-vertical-rl rotate-180">AZIZ</span>
        <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center">
          <span className="text-[10px] font-bold">W.</span>
        </div>
        <span className="writing-vertical-rl rotate-180">Honors</span>
        <span className="writing-vertical-rl rotate-180">K.</span>
      </div>

      <div className="absolute z-[100] bottom-[8%] left-1/2 -translate-x-1/2">
        <p className="font-display text-xs lg:text-sm tracking-[0.3em] opacity-60">
          scroll down
        </p>
      </div>
    </section>
  );
};

export default HeroSection;