"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-me/' },
  { name: 'Works', href: '/works/' },
];

export default function Navigation() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handle = () => {
      // Hero is 100vh; hide nav once user scrolls past it
      setPastHero(window.scrollY > window.innerHeight * 0.88);
    };
    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <>
      {/* ── Full nav — visible only over the hero ── */}
      <nav
        className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-6 md:px-10 py-5 md:py-6 font-cabinetGrotesk transition-all duration-500"
        style={{
          opacity: pastHero ? 0 : 1,
          pointerEvents: pastHero ? 'none' : 'auto',
          transform: pastHero ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/icons/AzizLogoBlack_37268d44-1.png"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Links + CTA */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[0.95rem] font-medium text-[#111111] group inline-block"
              >
                <span className="relative overflow-hidden block h-[1.15em]">
                  <span className="block leading-none transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {link.name}
                  </span>
                  <span className="absolute top-0 left-0 w-full leading-none transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                    {link.name}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* Contact pill */}
          <a
            href="mailto:abhinavraj000001@gmail.com"
            className="hidden md:flex items-center group cursor-pointer select-none"
          >
            <div className="bg-[#111111] text-white text-[0.85rem] font-medium px-5 py-2.5 rounded-full -mr-2 z-10 transition-colors duration-300 group-hover:bg-[#333]">
              <span className="relative overflow-hidden block h-[1.15em]">
                <span className="block leading-none transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                  Contact
                </span>
                <span className="absolute top-0 left-0 w-full leading-none transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                  Contact
                </span>
              </span>
            </div>
            <div className="w-9 h-9 bg-[#111111] rounded-full flex items-center justify-center z-0 transition-colors duration-300 group-hover:bg-[#333] relative overflow-hidden">
              <ArrowUpRight
                className="w-4 h-4 text-white absolute transition-all duration-400
                  translate-y-0 translate-x-0 opacity-100
                  group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
              />
              <ArrowUpRight
                className="w-4 h-4 text-white absolute transition-all duration-400
                  translate-y-full -translate-x-full opacity-0
                  group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </div>
          </a>

          {/* Mobile burger */}
          <div className="md:hidden w-10 h-10 bg-[#111111] rounded-full flex flex-col items-center justify-center gap-[5px] cursor-pointer">
            <div className="w-4 h-[1.5px] bg-white rounded-full" />
            <div className="w-4 h-[1.5px] bg-white rounded-full" />
          </div>
        </div>
      </nav>

      {/* ── Compact back-to-top button — appears after hero ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-[60] w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center transition-all duration-500 group"
        style={{
          opacity: pastHero ? 1 : 0,
          pointerEvents: pastHero ? 'auto' : 'none',
          transform: pastHero ? 'scale(1)' : 'scale(0.7)',
        }}
        aria-label="Back to top"
      >
        <ArrowUpRight className="w-5 h-5 text-white -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
      </button>
    </>
  );
}
