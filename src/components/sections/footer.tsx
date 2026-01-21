import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full font-cabinetGrotesk">
      {/* Ticker Section - Crossed Ribbons */}
      <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-background">
        {/* Ribbon 1: Top-Left to Bottom-Right */}
        <div 
          className="absolute w-[150%] h-[60px] lg:h-[80px] bg-[#111111] flex items-center overflow-hidden"
          style={{ 
            transform: 'rotate(-5deg)',
            zIndex: 10
          }}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <span className="text-white text-lg lg:text-2xl font-medium tracking-tight">Driven by Passion, Built with Code</span>
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-white text-lg lg:text-2xl font-medium tracking-tight">Custom Web Experiences</span>
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-white text-lg lg:text-2xl font-medium tracking-tight">Innovative Self-Made Creations</span>
                <div className="w-2 h-2 rounded-full bg-secondary" />
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Bottom-Left to Top-Right */}
        <div 
          className="absolute w-[150%] h-[60px] lg:h-[80px] bg-[#111111] flex items-center overflow-hidden"
          style={{ 
            transform: 'rotate(5deg)',
            zIndex: 5
          }}
        >
          <div className="flex whitespace-nowrap animate-marquee-reverse translate-x-[-50%]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <span className="text-white text-lg lg:text-2xl font-medium tracking-tight">Handcrafted Digital Solutions</span>
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-white text-lg lg:text-2xl font-medium tracking-tight">Tailored Web Development for You</span>
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-white text-lg lg:text-2xl font-medium tracking-tight">Driven by Passion, Built with Code</span>
                <div className="w-2 h-2 rounded-full bg-secondary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative bg-[#111111] pt-[120px] lg:pt-[160px] pb-10 px-8 lg:px-16 overflow-hidden rounded-t-[50px] lg:rounded-t-[100px] -mt-[100px]">
        {/* Curved Top Shape Overlap */}
        <div className="absolute top-0 left-0 right-0 h-[100px] bg-background curved-section-bottom" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 relative z-10">
          {/* Logo & Intro */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-white text-4xl lg:text-6xl font-medium leading-[1.1] mb-8">
                Let&apos;s build something<br />
                extraordinary together.
              </h2>
              <p className="text-[#666666] text-xl max-w-md">
                Exploring my journey and the technologies that define my craft.
              </p>
            </div>
            
            <div className="hidden lg:block mt-20">
              <span className="text-[#444444] text-[180px] font-medium leading-none tracking-tighter opacity-10">
                ABHINAV
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[#666666] uppercase text-xs tracking-widest mb-10">Links</h3>
            <ul className="flex flex-col gap-4">
              {['Home', 'Work', 'About', 'Contact'].map((item) => (
                <li key={item} className="group overflow-hidden">
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white text-2xl lg:text-3xl block relative transition-transform duration-500 hover:-translate-y-full">
                    <span className="block h-full">{item}</span>
                    <span className="block absolute top-full left-0 text-secondary">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Info */}
          <div className="lg:col-span-2">
            <h3 className="text-[#666666] uppercase text-xs tracking-widest mb-10">Socials</h3>
            <ul className="flex flex-col gap-4">
              {['Email', 'Linkdin', 'Whatsapp', 'Github'].map((item) => (
                <li key={item} className="group overflow-hidden">
                  <a href="#" className="text-white text-2xl lg:text-3xl block relative transition-transform duration-500 hover:-translate-y-full">
                    <span className="block h-full">{item}</span>
                    <span className="block absolute top-full left-0 text-secondary">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="mb-12">
              <h3 className="text-[#666666] uppercase text-xs tracking-widest mb-6">Local Time</h3>
              <p className="text-white text-xl">11:09 AM UTC+2</p>
            </div>
            <div>
              <h3 className="text-[#666666] uppercase text-xs tracking-widest mb-6">Version</h3>
              <p className="text-white text-xl">2026 © Edition</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Wrapper */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-[#666666] text-sm">DESIGN & DEVELOPED BY ABHINAV RAJ</p>
          <div className="flex gap-8">
            <a href="#" className="text-[#666666] uppercase text-xs tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#666666] uppercase text-xs tracking-widest hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>

        {/* Floating Contact Trigger (Bottom Right) */}
        <div className="fixed bottom-8 right-8 z-[100]">
          <button className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
            <ArrowUpRight className="text-black group-hover:rotate-45 transition-transform duration-300" size={24} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        .curved-section-bottom {
          border-bottom-left-radius: 50% 100px;
          border-bottom-right-radius: 50% 100px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;