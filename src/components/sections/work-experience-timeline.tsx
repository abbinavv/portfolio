'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const entries = [
  {
    company: 'Techivation',
    role: 'Full Stack Developer (Part-time)',
    desc: "Building and maintaining Techivation's full web and SaaS ecosystem powering audio plugin licensing and management.",
    period: 'May 2025 – Present',
    side: 'left',
  },
  {
    company: 'VexLogic',
    role: 'Full Stack Engineer (Part-time)',
    desc: 'Developing an AI-powered SaaS platform with real-time collaboration, billing systems, and intelligent document management.',
    period: 'Jun 2025 – Present',
    side: 'right',
  },
  {
    company: 'Comra AI',
    role: 'Full Stack Developer (Full-time)',
    desc: 'Building immersive 3D virtual tour systems using React Three Fiber, Prisma, and PostgreSQL for real estate and architecture.',
    period: 'Nov 2024 – Present',
    side: 'left',
  },
  {
    company: 'DigitalNatives',
    role: 'Frontend Developer (Full-time)',
    desc: 'Delivered responsive, high-performance frontends for enterprise clients across e-commerce and media industries.',
    period: 'Feb 2024 – Oct 2024',
    side: 'right',
  },
  {
    company: 'Fintechracy',
    role: 'Frontend Developer (Full-time)',
    desc: 'Developed a mobile-first PWA for financial management with offline storage, barcode scanning, and performance optimization.',
    period: 'Nov 2023 – Mar 2024',
    side: 'left',
  },
  {
    company: 'Codintex',
    role: 'Frontend Developer (Internship)',
    desc: 'Built UI components and contributed to internal tools, gaining hands-on experience with React and modern web workflows.',
    period: 'Jul 2022 – Sep 2023',
    side: 'right',
  },
] as const;

function TimelineEntry({
  entry,
  index,
  lineProgress,
  totalEntries,
}: {
  entry: (typeof entries)[number];
  index: number;
  lineProgress: any;
  totalEntries: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [dotActive, setDotActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          setDotActive(true);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLeft = entry.side === 'left';

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_48px_1fr] items-center py-20 lg:py-28"
    >
      {/* Left content */}
      <div
        className="pr-10 lg:pr-16 flex flex-col gap-3 items-end text-right"
        style={{
          opacity: isLeft ? (visible ? 1 : 0) : 0,
          transform: isLeft
            ? visible
              ? 'translateX(0)'
              : 'translateX(-40px)'
            : 'translateX(-40px)',
          pointerEvents: isLeft ? 'auto' : 'none',
          transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms`,
        }}
      >
        {isLeft && (
          <>
            <span className="text-white/30 text-xs tracking-widest uppercase font-mono">
              {entry.period}
            </span>
            <h3 className="text-[2.2rem] sm:text-[3rem] lg:text-[4rem] font-bold text-white leading-none tracking-tight">
              {entry.company}
            </h3>
            <p className="text-white/50 text-base lg:text-lg font-light">{entry.role}</p>
            <p className="text-white/25 text-sm leading-relaxed max-w-[280px]">{entry.desc}</p>
          </>
        )}
      </div>

      {/* Center dot */}
      <div className="flex items-center justify-center z-10">
        <div
          className="w-3.5 h-3.5 rounded-full border-2 shrink-0 transition-all duration-500"
          style={{
            background: dotActive ? '#D9FF32' : '#1a1a1a',
            borderColor: '#D9FF32',
            boxShadow: dotActive
              ? '0 0 0 4px rgba(217,255,50,0.2), 0 0 16px rgba(217,255,50,0.7)'
              : '0 0 0 3px rgba(217,255,50,0.1)',
          }}
        />
      </div>

      {/* Right content */}
      <div
        className="pl-10 lg:pl-16 flex flex-col gap-3 items-start text-left"
        style={{
          opacity: !isLeft ? (visible ? 1 : 0) : 0,
          transform: !isLeft
            ? visible
              ? 'translateX(0)'
              : 'translateX(40px)'
            : 'translateX(40px)',
          pointerEvents: !isLeft ? 'auto' : 'none',
          transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms`,
        }}
      >
        {!isLeft && (
          <>
            <span className="text-white/30 text-xs tracking-widest uppercase font-mono">
              {entry.period}
            </span>
            <h3 className="text-[2.2rem] sm:text-[3rem] lg:text-[4rem] font-bold text-white leading-none tracking-tight">
              {entry.company}
            </h3>
            <p className="text-white/50 text-base lg:text-lg font-light">{entry.role}</p>
            <p className="text-white/25 text-sm leading-relaxed max-w-[280px]">{entry.desc}</p>
          </>
        )}
      </div>
    </div>
  );
}

const WorkExperienceTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  // Smooth spring so line flows naturally
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section className="w-full font-display">
      {/* Light heading section */}
      <div className="bg-[#E6E6E6] px-8 lg:px-16 pt-16 pb-20 text-center">
        <p className="text-2xl lg:text-4xl xl:text-5xl font-medium text-black leading-tight max-w-3xl mx-auto">
          Explore my journey and the technologies that define my craft.
        </p>
      </div>

      {/* Dark timeline */}
      <div ref={sectionRef} className="bg-[#1a1a1a] px-4 lg:px-8 relative">
        {/* Static dim track line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
          style={{ background: 'rgba(217,255,50,0.08)' }}
        />

        {/* Growing neon line — scaleY from 0→1, originY top */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] origin-top"
          style={{
            scaleY,
            background: '#D9FF32',
            boxShadow: '0 0 6px rgba(217,255,50,0.8), 0 0 20px rgba(217,255,50,0.4)',
          }}
        />

        {entries.map((entry, i) => (
          <TimelineEntry
            key={entry.company}
            entry={entry}
            index={i}
            lineProgress={scaleY}
            totalEntries={entries.length}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceTimeline;
