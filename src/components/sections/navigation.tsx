"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

/**
 * Navigation component featuring:
 * - Logo on the left
 * - Minimalist menu (Home, About, Works) with text-reveal hover animations
 * - Pill-shaped Contact CTA button with dual-animation effect
 */
export default function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-me/' },
    { name: 'Works', href: '/works/' },
  ];

  return (
    <div className={`w-full justify-between items-center flex z-[60] p-4 md:p-8 pt-[1.5rem] md:pt-[2.5rem] font-cabinetGrotesk transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 bg-background/80 backdrop-blur-md' : 'relative'}`}>
      {/* Logo */}
      <Link href="/">
        <img 
          className="item h-[1.8rem] z-50 w-[1.7rem] lg:w-[1.9rem] lg:h-[2.3rem] cursor-pointer" 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/icons/AzizLogoBlack_37268d44-1.png" 
          alt="Logo"
        />
      </Link>

      <div className="flex items-center gap-8">
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-lg hover:opacity-70 transition-opacity duration-300 group"
            >
              <div className="relative block overflow-hidden whitespace-nowrap">
                {/* Reveal Animation Container */}
                <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                  {link.name.split('').map((char, i) => (
                    <span key={i} className="inline-block">{char}</span>
                  ))}
                </div>
                <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                  {link.name.split('').map((char, i) => (
                    <span key={i} className="inline-block">{char}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </nav>

        {/* Contact CTA Button */}
        <div className="flex items-center gap-2">
          <button className="relative group flex items-center justify-center cursor-pointer select-none">
            <div className="group relative inline-flex items-center justify-center gap-3 bg-[#111111] text-white font-medium rounded-full transition-all duration-300 hover:gap-4 overflow-hidden text-sm px-6 py-2.5 hidden md:flex hover:!text-black">
              {/* Background fill animation */}
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative z-10 overflow-hidden flex items-center">
                <div className="relative overflow-hidden inline-block cursor-pointer select-none h-5">
                  <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    <span className="inline-block whitespace-pre">Contact</span>
                  </div>
                  <div className="absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
                    <span className="inline-block whitespace-pre">Contact</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Icon Circle Animation */}
            <div className="hidden overflow-hidden md:flex w-10 h-10 bg-[#111111] rounded-full items-center justify-center relative ml-[-10px] z-20">
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black absolute transition-all duration-500 translate-y-0 translate-x-0 opacity-100 group-hover:-translate-y-full group-hover:translate-x-full" />
              <ArrowUpRight className="w-4 h-4 text-black absolute transition-all duration-500 translate-y-full -translate-x-full opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle (Simplified placeholder for the burger mentioned in structure) */}
        <div className="md:hidden">
            <div className="w-12 h-12 bg-[#111111] rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer">
                <div className="w-5 h-0.5 bg-white rounded-full"></div>
                <div className="w-5 h-0.5 bg-white rounded-full"></div>
                <div className="w-5 h-0.5 bg-white rounded-full"></div>
            </div>
        </div>
      </div>
    </div>
  );
}