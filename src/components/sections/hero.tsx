'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const roles = ['Full Stack Developer', 'iOS Developer'];
const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex(i => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero relative h-screen w-full flex items-center justify-center overflow-hidden z-20">

      {/* Liquid Glass Blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mt-12 lg:mt-6">
        <div
          className="relative w-[95vw] h-[95vw] max-w-[820px] max-h-[820px]"
          style={{ mixBlendMode: 'multiply' }}
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-contain">
            <source src="https://azizkhaldi.com/_next/static/media/glassyObj.3c74f580.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Left Sidebar */}
      <div className="z-50 flex-col flex lg:h-[80vh] h-[85vh] px-5 lg:px-9 pt-20 lg:pt-0 py-5 lg:py-10 items-center left-0 top-0 absolute justify-end lg:justify-between font-display">
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
          className="item lg:flex hidden lg:mb-14 h-[40vh] w-[1px] bg-black/20 relative origin-top"
        >
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 h-[0.4rem] bg-black rounded-full w-[0.4rem]" />
          <div className="absolute top-0 right-1/2 translate-x-1/2 h-[0.4rem] bg-black rounded-full w-[0.4rem]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="flex z-50 w-full flex-col gap-6 lg:gap-8"
        >
          <a href="https://www.linkedin.com/in/abhinav-raj-a1979421b" target="_blank" rel="noopener noreferrer" className="group">
            <Linkedin className="w-[1.2rem] h-[1.2rem] lg:w-[1.5rem] lg:h-[1.5rem] text-black transition-opacity duration-300 group-hover:opacity-50" />
          </a>
          <a href="https://wa.me/918002634000" target="_blank" rel="noopener noreferrer" className="group">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.3rem] h-[1.3rem] lg:w-[1.6rem] lg:h-[1.6rem] text-black transition-opacity duration-300 group-hover:opacity-50">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 017.008 2.899 9.825 9.825 0 012.892 7.01c-.001 5.45-4.435 9.884-9.886 9.884M12 2.045c-5.474 0-9.923 4.449-9.923 9.923 0 1.751.458 3.46 1.328 4.965L2 22l5.076-1.332A9.88 9.88 0 0012 21.954c5.473 0 9.922-4.449 9.922-9.922 0-2.642-1.028-5.126-2.896-6.995A9.87 9.87 0 0012 2.045" />
            </svg>
          </a>
          <a href="https://github.com/abbinavv" target="_blank" rel="noopener noreferrer" className="group">
            <Github className="w-[1.2rem] h-[1.2rem] lg:w-[1.5rem] lg:h-[1.5rem] text-black transition-opacity duration-300 group-hover:opacity-50" />
          </a>
        </motion.div>
      </div>

      {/* Main Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="flex flex-col items-center text-black select-none">

          {/* Greeting */}
          <div className="overflow-hidden" style={{ lineHeight: 1.5 }}>
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.05, ease }}
              className="font-display text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-[1.4rem] text-center font-normal tracking-[0.04em] opacity-70"
            >
              Hi! i&rsquo;m Abhinav
            </motion.p>
          </div>

          {/* Cycling role — Full Stack Developer / iOS Developer in same slot */}
          <div
            className="overflow-hidden"
            style={{ lineHeight: 0.95 }}
          >
            <motion.div
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.18, ease }}
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={roleIndex}
                  initial={{ opacity: 0, scale: 1.06, filter: 'blur(14px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.94, filter: 'blur(14px)' }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-display text-[2.4rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] 2xl:text-[9.5rem] text-center font-medium tracking-[-0.03em] leading-[0.95]"
                >
                  {roles[roleIndex]}
                </motion.h1>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Static last line */}
          <div className="overflow-hidden" style={{ lineHeight: 0.95 }}>
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.31, ease }}
              className="font-display text-[2.4rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[8rem] 2xl:text-[9.5rem] text-center font-medium tracking-[-0.03em] leading-[0.95]"
            >
              UI &amp; UX Designer.
            </motion.h1>
          </div>

        </div>
      </div>

      {/* Right Vertical Name Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1, delay: 0.9, ease }}
        className="absolute hidden font-display lg:flex items-center -rotate-90 top-[42%] right-0 translate-x-[calc(50%-1.5rem)] -translate-y-1/2 tracking-[0.25em] select-none"
      >
        <span className="text-[0.7rem] leading-none whitespace-nowrap uppercase font-medium">
          ABHINAV RAJ
        </span>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease }}
        className="absolute z-30 bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-display text-[0.65rem] lg:text-[0.7rem] uppercase tracking-[0.55em] text-black">
          scroll down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-black/40 rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
