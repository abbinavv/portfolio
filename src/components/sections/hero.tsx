'use client';

import React, { useState, useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';

/**
 * HeroSection Component
 * Clones the hero section with centered typography, social links,
 * vertical name tag, and a 3D background video.
 */
const roles = ['Full Stack Developer', 'iOS Developer'];

const HeroSection: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero relative h-screen w-full flex items-center justify-center overflow-hidden z-20 bg-[#E6E6E6]">
      {/* 3D Glassy Object Background/Overlay */}
      <div className="absolute 2xl:-top-[5.5rem] xl:-top-[5rem] lg:-top-[6rem] top-[16rem] lg:-right-3 -z-10 w-full h-full pointer-events-none opacity-80 md:opacity-100">
        <span className="relative overflow-hidden w-full h-full block">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="obj3d w-full h-full object-cover grayscale brightness-110"
          >
            <source src="https://azizkhaldi.com/_next/static/media/glassyObj.3c74f580.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle bottom gradient to blend video if needed, though the original uses a mask div */}
          <span className="w-full h-[15rem] bg-[#E6E6E6] absolute -bottom-[1px] right-0 z-20"></span>
        </span>
      </div>

      {/* Left Sidebar: Socials and Decorative Line */}
      <div className="z-50 flex-col flex lg:h-[80vh] h-[85vh] px-5 lg:px-9 pt-[5rem] lg:-mt-3 xl:mt-10 py-5 lg:py-10 items-center left-0 top-0 absolute justify-end lg:justify-between font-display">
        {/* Decorative Vertical Line */}
        <div className="item lg:block hidden lg:mb-14 h-[40vh] w-[1px] bg-black/20 relative">
          <div className="absolute bottom-0 right-[50%] transform translate-x-[50%] h-[0.4rem] bg-black rounded-full w-[0.4rem]"></div>
          <div className="absolute top-0 right-[50%] transform translate-x-[50%] h-[0.4rem] bg-black rounded-full w-[0.4rem]"></div>
        </div>

        {/* Social Icons */}
        <div className="flex item z-50 w-full flex-col gap-6 lg:gap-8">
          <a 
            href="https://www.linkedin.com/in/aziz-khaldi-b28207261/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <Linkedin className="w-[1.2rem] h-[1.2rem] lg:w-[1.5rem] lg:h-[1.5rem] text-black transition-opacity duration-300 group-hover:opacity-60" />
          </a>
          <a 
            href="https://wa.me/213779577865" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group text-black font-bold text-lg"
          >
            {/* Simple WhatsApp-style icon or generic representative */}
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-[1.3rem] h-[1.3rem] lg:w-[1.6rem] lg:h-[1.6rem] transition-opacity duration-300 group-hover:opacity-60"
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
            <Github className="w-[1.2rem] h-[1.2rem] lg:w-[1.5rem] lg:h-[1.5rem] text-black transition-opacity duration-300 group-hover:opacity-60" />
          </a>
        </div>
      </div>

      {/* Main Content: Centered Typography */}
      <div className="flex lg:pl-0 pl-0 lg:-mt-[11rem] -mt-[30rem] flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col item lg:px-0 px-[1rem] text-black z-50 justify-center">
          <div className="words overflow-hidden lg:leading-[4rem] xl:leading-[5.6rem] md:leading-[3.2rem] leading-[2.5rem]">
              <h1 className="font-display text-[1.2rem] xs:text-[1.5rem] sm:text-[1.6rem] md:text-[1.65rem] lg:text-[1.6rem] text-center mb-1 lg:-mb-1">
                Hi! i&rsquo;m Abhinav
              </h1>
            </div>
            <div className="words overflow-hidden lg:leading-[4rem] xl:leading-[5.6rem] md:leading-[3.2rem] leading-[2.5rem]">
                <h1 className="font-display text-[2.3rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.4rem] 2xl:text-[6rem] pb-2 text-center transition-opacity duration-500">
                  {roles[currentRoleIndex]}
                </h1>
            </div>
          <div className="words overflow-hidden lg:leading-[4rem] xl:leading-[5.6rem] md:leading-[3.2rem] leading-[2.5rem]">
            <h1 className="font-display text-[2.3rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5.4rem] 2xl:text-[6rem] pb-1 text-center">
              UI &amp; UX Designer.
            </h1>
          </div>
        </div>
      </div>

      {/* Right Name Tag: Vertical Label */}
      <div className="item absolute hidden font-display -mt-10 lg:block -rotate-90 top-[40%] -right-[6.5%] transform -translate-y-1/2 tracking-widest opacity-80 select-none">
        <span className="text-[0.8rem] leading-none whitespace-nowrap">
          ABHINAV RAJ
        </span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute z-[100] bottom-[10%] left-1/2 transform -translate-x-1/2">
        <h1 className="item font-display lg:text-sm text-xs uppercase tracking-[0.6em] cursor-default opacity-50">
          scroll down
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;