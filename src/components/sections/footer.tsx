'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Starburst icon matching original */
const Starburst = () => (
  <svg viewBox="0 0 32 32" className="w-6 h-6 lg:w-8 lg:h-8 fill-white shrink-0">
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
      className="absolute w-[170%] h-[56px] lg:h-[76px] bg-[#111111] flex items-center overflow-hidden"
      style={{ transform: `rotate(${deg}deg)`, zIndex: reverse ? 5 : 10 }}
    >
      <div
        className="flex items-center whitespace-nowrap gap-6"
        style={{
          animation: `${animName} 30s linear infinite`,
          width: 'max-content',
          transform: reverse ? 'translateX(-50%)' : undefined,
        }}
      >
        {[0, 1, 2, 3, 4].map((rep) =>
          phrases.map((phrase, pi) => (
            <React.Fragment key={`${rep}-${pi}`}>
              <Starburst />
              <span className="text-white text-base lg:text-xl font-medium tracking-tight pr-2">
                {phrase}
              </span>
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
};

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Africa/Algiers',
        }) + ' UTC+1'
      );
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="w-full font-display overflow-hidden">
      {/* Crossed ribbon marquee */}
      <div className="relative h-[320px] lg:h-[420px] flex items-center justify-center overflow-hidden bg-[#E6E6E6]">
        <Ribbon
          deg={-5}
          reverse={false}
          phrases={['Driven by Passion, Built with Code', 'Custom Web Experiences', 'Innovative Self-Made Creations']}
        />
        <Ribbon
          deg={5}
          reverse={true}
          phrases={['Handcrafted Digital Solutions', 'Tailored Web Development for You', 'Driven by Passion, Built with Code']}
        />
      </div>

      {/* Dark footer body with curved top */}
      <div className="relative bg-[#111111] -mt-[80px] pt-[100px] lg:pt-[130px] px-8 lg:px-16 pb-0 overflow-hidden rounded-t-[60px] lg:rounded-t-[120px]">
        {/* Curved light cap */}
        <div className="absolute top-0 left-0 right-0 h-[80px] bg-[#E6E6E6] curved-section-bottom pointer-events-none" />

        {/* Links + socials + time + version + contact pills */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12 pt-4">
          {/* Links */}
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-5">Links</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Work', href: '/works' },
                { label: 'About', href: '/about-me' },
                { label: 'Contact', href: 'mailto:contact@azizkhaldi.com' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white text-lg hover:text-[#D9FF32] transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-5">Socials</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Email', href: 'mailto:contact@azizkhaldi.com' },
                { label: 'Linkdin', href: 'https://www.linkedin.com/in/aziz-khaldi-b28207261/' },
                { label: 'Whatsapp', href: 'https://wa.me/213779577865' },
                { label: 'Github', href: 'https://github.com/AzizKhaldi01' },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-[#D9FF32] transition-colors duration-300">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Time */}
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-5">Local Time</p>
            <p className="text-white text-lg">{time}</p>
          </div>

          {/* Version */}
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-5">Version</p>
            <p className="text-white text-lg">2026 © Edition</p>
          </div>
        </div>

        {/* Contact pill buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 mb-16 justify-end">
          <a
            href="tel:+213779577865"
            className="inline-flex items-center justify-center border border-white/20 rounded-full px-7 py-3 text-white text-sm hover:border-[#D9FF32] hover:text-[#D9FF32] transition-colors duration-300"
          >
            +213779577865
          </a>
          <a
            href="mailto:contact@azizkhaldi.com"
            className="inline-flex items-center justify-center border border-white/20 rounded-full px-7 py-3 text-white text-sm hover:border-[#D9FF32] hover:text-[#D9FF32] transition-colors duration-300"
          >
            contact@azizkhaldi.com
          </a>
        </div>

        {/* Robot + Giant AZIZ */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Robot character placeholder */}
          <div className="relative w-32 h-40 lg:w-44 lg:h-56 mb-0 z-10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/green-flower_7426aff1-1.avif"
              alt="robot"
              fill
              className="object-contain"
            />
          </div>

          {/* Giant name */}
          <div className="w-full overflow-hidden">
            <p
              className="text-white font-bold text-center leading-none tracking-tighter select-none"
              style={{ fontSize: 'clamp(6rem, 22vw, 20rem)', lineHeight: 0.85 }}
            >
              AZIZ
            </p>
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
        .curved-section-bottom {
          border-bottom-left-radius: 50% 80px;
          border-bottom-right-radius: 50% 80px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
