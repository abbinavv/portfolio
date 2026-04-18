'use client';

import React, { useRef, useState, useEffect } from 'react';

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
}: {
  entry: (typeof entries)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLeft = entry.side === 'left';

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_auto_1fr] min-h-[60vh] lg:min-h-[75vh] items-center"
    >
      {/* Left content */}
      <div
        className={`pr-10 lg:pr-20 flex flex-col gap-4 ${isLeft ? 'items-end text-right' : ''}`}
        style={{
          opacity: visible && isLeft ? 1 : isLeft ? 0 : undefined,
          transform: visible && isLeft ? 'translateX(0)' : isLeft ? 'translateX(-2rem)' : undefined,
          transition: `opacity 0.7s ease ${index * 60}ms, transform 0.7s ease ${index * 60}ms`,
        }}
      >
        {isLeft && (
          <>
            <h3 className="text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-bold text-white leading-none tracking-tight">
              {entry.company}
            </h3>
            <p className="text-white/40 text-lg lg:text-2xl font-light">{entry.role}</p>
            <p className="text-white/25 text-sm lg:text-base leading-relaxed max-w-sm">{entry.desc}</p>
            <p className="text-white/30 text-sm">{entry.period}</p>
          </>
        )}
      </div>

      {/* Center line + dot */}
      <div className="flex flex-col items-center self-stretch">
        <div className="w-[2px] flex-1 bg-[#D9FF32]" />
        <div
          className="w-3 h-3 rounded-full bg-black border-2 border-white/40 shrink-0 my-1"
          style={{ boxShadow: '0 0 0 4px rgba(217,255,50,0.2)' }}
        />
        <div className="w-[2px] flex-1 bg-[#D9FF32]" />
      </div>

      {/* Right content */}
      <div
        className={`pl-10 lg:pl-20 flex flex-col gap-4 ${!isLeft ? 'items-start text-left' : ''}`}
        style={{
          opacity: visible && !isLeft ? 1 : !isLeft ? 0 : undefined,
          transform: visible && !isLeft ? 'translateX(0)' : !isLeft ? 'translateX(2rem)' : undefined,
          transition: `opacity 0.7s ease ${index * 60}ms, transform 0.7s ease ${index * 60}ms`,
        }}
      >
        {!isLeft && (
          <>
            <h3 className="text-[3rem] sm:text-[4rem] lg:text-[5.5rem] font-bold text-white leading-none tracking-tight">
              {entry.company}
            </h3>
            <p className="text-white/40 text-lg lg:text-2xl font-light">{entry.role}</p>
            <p className="text-white/25 text-sm lg:text-base leading-relaxed max-w-sm">{entry.desc}</p>
            <p className="text-white/30 text-sm">{entry.period}</p>
          </>
        )}
      </div>
    </div>
  );
}

const WorkExperienceTimeline = () => {
  return (
    <section className="w-full font-display">
      {/* Light heading section */}
      <div className="bg-[#E6E6E6] px-8 lg:px-16 pt-16 pb-20 text-center">
        <p className="text-2xl lg:text-4xl xl:text-5xl font-medium text-black leading-tight max-w-3xl mx-auto">
          Explore my journey and the technologies that define my craft.
        </p>
      </div>

      {/* Dark timeline */}
      <div className="bg-[#1a1a1a] px-4 lg:px-8">
        {entries.map((entry, i) => (
          <TimelineEntry key={entry.company} entry={entry} index={i} />
        ))}
        {/* Bottom cap of line */}
        <div className="flex justify-center pb-8">
          <div className="w-[2px] h-20 bg-[#D9FF32]/30" />
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceTimeline;
