import React from 'react';
import Link from 'next/link';

const AboutIntro = () => {
  return (
    <section 
      className="relative flex flex-col items-center w-full min-h-screen text-white z-50 gap-[4rem] -mt-[2rem] bg-[#111111] font-display"
      style={{
        backgroundColor: '#111111',
      }}
    >
      {/* Top Curve Effect */}
      <div className="overflow-hidden absolute left-[50%] lg:-top-[3rem] -top-[2rem] transform translate-x-[-50%] w-[100%] lg:h-[4rem] h-[2rem] mb-14 z-40">
        <div 
          className="absolute right-[-10%] rounded-[50%] h-[150%] w-[120%]" 
          style={{ backgroundColor: '#111111' }}
        />
      </div>

      {/* Primary Paragraph */}
      <div className="z-[60] text-white text-3xl leading-[1.1] lg:text-4xl xl:text-5xl text-center pt-24 lg:pt-32 xl:max-w-6xl lg:max-w-5xl w-full mx-auto px-6">
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">I&apos;m</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">Aziz</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">——</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">a</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">Full</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">Stack</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">Developer</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">&amp;</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">iOS</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">Developer</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">crafting</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">fast,</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">scalable,</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">and</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">immersive</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">digital</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">experiences</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">that</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">merge</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">creativity</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">with</span>
        </span>
        <span className="inline-block overflow-hidden mr-3">
          <span className="inline-block mb-[0.2rem]">engineering</span>
        </span>
        <span className="inline-block overflow-hidden">
          <span className="inline-block mb-[0.2rem]">precision.</span>
        </span>
      </div>

      {/* Secondary Paragraph */}
      <div className="text-white/80 text-lg md:text-2xl lg:text-2xl xl:text-3xl text-center mb-1 max-w-5xl mx-auto px-6 font-display font-light">
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">I</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">specialize</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">in</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">developing</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">SaaS</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">platforms,</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">AI-driven</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">products,</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">and</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">interactive</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">3D</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">web</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">experiences</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">using</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">technologies</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">like</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">Next.js,</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">Node.js,</span>
        </span>
        <span className="inline-block overflow-hidden mr-2">
          <span className="inline-block mb-[0.2rem]">and</span>
        </span>
        <span className="inline-block overflow-hidden">
          <span className="inline-block mb-[0.2rem]">Three.js.</span>
        </span>
      </div>

      {/* About Me Magnetic-style Button Section */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
        <Link href="/about-me" className="group">
          <div className="relative flex items-center justify-center cursor-pointer select-none">
            {/* Pill Button Body */}
            <div 
              className="relative inline-flex items-center justify-center gap-4 bg-[#E6E6E6] text-[#111111] font-medium rounded-full transition-all duration-500 overflow-hidden text-lg px-10 py-5 group-hover:bg-white"
            >
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative z-10 flex items-center">
                <div className="relative overflow-hidden inline-block h-[1.2em]">
                  <div className="block transition-transform duration-500 group-hover:-translate-y-full">
                    About Me
                  </div>
                  <div className="block absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                    About Me
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Arrow Part */}
            <div className="hidden md:flex w-16 h-16 ml-[-1px] bg-[#E6E6E6] rounded-full items-center justify-center overflow-hidden relative group-hover:bg-white transition-colors duration-500 border-l border-white/10">
              <div className="absolute inset-0 delay-100 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <svg 
                className="w-6 h-6 text-[#111111] absolute transition-all duration-500 translate-y-0 translate-x-0 group-hover:translate-y-[-150%] group-hover:translate-x-[150%] opacity-100" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              
              <svg 
                className="w-6 h-6 text-[#111111] absolute transition-all duration-500 translate-y-[150%] translate-x-[-150%] group-hover:translate-y-0 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Footer Meta Info in Section */}
      <div className="flex overflow-hidden justify-between items-center text-xs tracking-widest uppercase text-[#E6E6E6]/40 px-6 w-full max-w-5xl pb-10">
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4 fill-current opacity-40" viewBox="0 0 24 24">
            <path d="M12 4.5v15m0 0l-4.5-4.5m4.5 4.5l4.5-4.5"></path>
          </svg>
          <span>Scroll to Explore</span>
        </div>
        <span>My Short Story</span>
      </div>

      {/* Divider */}
      <div className="w-full z-[10] h-[1px] bg-white/10"></div>
    </section>
  );
};

export default AboutIntro;