'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

/* Starburst icon matching original */
const Starburst = () => (
  <svg viewBox="0 0 32 32" className="w-5 h-5 lg:w-7 lg:h-7 shrink-0">
    {[...Array(16)].map((_, i) => {
      const angle = (i * 22.5 * Math.PI) / 180;
      const inner = i % 2 === 0 ? 6 : 10;
      const outer = i % 2 === 0 ? 15 : 12;
      const x1 = 16 + inner * Math.cos(angle);
      const y1 = 16 + inner * Math.sin(angle);
      const x2 = 16 + outer * Math.cos(angle);
      const y2 = 16 + outer * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1.5" />;
    })}
    <circle cx="16" cy="16" r="3" fill="white" />
  </svg>
);

const Ribbon = ({
  deg,
  reverse,
  phrases,
}: {
  deg: number;
  reverse: boolean;
  phrases: string[];
}) => {
  const animName = reverse ? 'footer-marquee-rev' : 'footer-marquee-fwd';
  return (
    <div
      className="absolute w-[170%] h-[52px] lg:h-[68px] bg-[#111111] flex items-center overflow-hidden"
      style={{ transform: `rotate(${deg}deg)`, zIndex: reverse ? 5 : 10 }}
    >
      <div
        className="flex items-center whitespace-nowrap gap-8"
        style={{
          animation: `${animName} 28s linear infinite`,
          width: 'max-content',
          transform: reverse ? 'translateX(-50%)' : undefined,
        }}
      >
        {[0, 1, 2, 3, 4].map((rep) =>
          phrases.map((phrase, pi) => (
            <React.Fragment key={`${rep}-${pi}`}>
              <Starburst />
              <span className="text-white text-sm lg:text-lg font-medium tracking-tight">
                {phrase}
              </span>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <div className="overflow-hidden">
    <a href={href}>
      <h1 className="text-[0.95rem] cursor-pointer hover:text-gray-400 text-gray-300 leading-6">
        {label}
      </h1>
    </a>
  </div>
);

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const t = new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
      });
      setTime(`${t} IST`);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="w-full font-display overflow-hidden">
      {/* Crossed ribbon marquee */}
      <div className="relative h-[280px] lg:h-[380px] flex items-center justify-center overflow-hidden bg-[#E6E6E6]">
        <Ribbon
          deg={-5}
          reverse={false}
          phrases={['Driven by Passion, Built with Code', 'Custom Web Experiences', 'Innovative Self-Made Creations']}
        />
        <Ribbon
          deg={5}
          reverse={true}
          phrases={['Handcrafted Digital Solutions', 'Tailored Web Development', 'Unique Code Creations']}
        />
      </div>

      {/* Dark footer body — matches original bg-sec = #1e1e1e */}
      <div
        className="relative font-cabinetGrotesk h-[80vh] lg:h-[100vh] z-30 flex flex-col justify-between text-white pt-[2rem] lg:pt-24 px-[1rem] lg:px-[2rem]"
        style={{ backgroundColor: '#1e1e1e' }}
      >
        {/* Top row: links/socials/time/version LEFT, pills RIGHT */}
        <div className="flex flex-col lg:flex-row justify-between w-full">
          {/* Left: columns */}
          <div className="flex justify-between">
            <div className="text-lg z-50 flex flex-wrap lg:gap-10 gap-6">
              {/* Links */}
              <div className="flex flex-col gap-2">
                <div className="overflow-hidden">
                  <h1 className="opacity-50 text-sm">LINKS</h1>
                </div>
                <div className="flex gap-1 flex-col whitespace-nowrap leading-6">
                  <FooterLink href="/" label="Home" />
                  <FooterLink href="/works" label="Work" />
                  <FooterLink href="/about-me" label="About" />
                  <FooterLink href="mailto:abhinavraj00001@gmail.com" label="Contact" />
                </div>
              </div>

              {/* Socials */}
              <div className="flex flex-col gap-2">
                <div className="overflow-hidden">
                  <h1 className="opacity-50 text-sm">SOCIALS</h1>
                </div>
                <div className="flex gap-1 flex-col whitespace-nowrap leading-6">
                  <FooterLink href="mailto:abhinavraj00001@gmail.com" label="Email" />
                  <FooterLink href="https://www.linkedin.com/in/abhinavraj" label="Linkdin" />
                  <FooterLink href="https://wa.me/918002634000" label="Whatsapp" />
                  <FooterLink href="https://github.com/abhinavraj" label="Github" />
                </div>
              </div>

              {/* Local Time */}
              <div className="flex flex-col gap-2">
                <div className="overflow-hidden">
                  <h1 className="opacity-50 text-sm">LOCAL TIME</h1>
                </div>
                <div className="flex gap-1 flex-col whitespace-nowrap leading-6">
                  <div className="overflow-hidden">
                    <p className="text-[0.95rem]">{time}</p>
                  </div>
                </div>
              </div>

              {/* Version */}
              <div className="flex flex-col gap-2">
                <div className="overflow-hidden">
                  <h1 className="opacity-50 text-sm">VERSION</h1>
                </div>
                <div className="flex gap-1 flex-col whitespace-nowrap leading-6">
                  <div className="overflow-hidden">
                    <p className="text-[0.95rem]">2026 © Edition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact pill buttons */}
          <div className="lg:flex-row lg:w-fit w-full lg:px-0 px-[1rem] md:items-start items-center flex-col flex gap-5 pt-10">
            <div className="w-full">
              <a
                href="https://wa.me/918002634000"
                className="group relative overflow-hidden inline-flex lg:w-fit w-full items-center justify-center border border-white text-white cursor-pointer px-6 py-3 rounded-full hover:border-transparent transition-colors duration-300"
              >
                <span className="relative z-10 group-hover:text-[#1e1e1e] transition-colors duration-300">
                  +91-8002634000
                </span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
              </a>
            </div>
            <div className="w-full">
              <a
                href="mailto:abhinavraj00001@gmail.com"
                className="group relative overflow-hidden inline-flex lg:w-fit w-full items-center justify-center border border-white text-white cursor-pointer px-6 py-3 rounded-full hover:border-transparent transition-colors duration-300"
              >
                <span className="relative z-10 group-hover:text-[#1e1e1e] transition-colors duration-300">
                  abhinavraj00001@gmail.com
                </span>
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Robot + Giant AZIZ */}
        <div className="flex flex-col items-center justify-center w-full relative">
          {/* Decorative star */}
          <div className="absolute xl:-top-[8em] lg:-top-[5em] translate-x-1/2 right-1/2 hidden lg:flex items-center justify-center z-10">
            <svg viewBox="0 0 80 80" width="120" height="120" className="fill-white/10">
              <path d="M40 0l5.88 28.12L80 40l-34.12 11.88L40 80l-5.88-28.12L0 40l34.12-11.88z" />
            </svg>
          </div>

          {/* Giant name */}
          <div
            className="font-display flex flex-col text-center" style={{ fontSize: 'clamp(5rem, 19vw, 22rem)', lineHeight: 0.88 }}
          >
            <h1 className="text-white">ABHINAV</h1>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes footer-marquee-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes footer-marquee-rev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
