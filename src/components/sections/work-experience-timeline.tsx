'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const entries = [
  {
    company: 'Infosys',
    role: 'iOS Developer Intern',
    desc: 'Developed iOS application modules using Swift and Xcode. Contributed to a retail operations platform covering inventory, cataloging, and barcode tracking.',
    period: 'March 2026',
  },
  {
    company: 'UpSmart Solutions',
    role: 'Software Development Intern',
    desc: 'Delivered feature-level modules following structured development workflows. Participated in code reviews, debugging, and iterative product improvements.',
    period: 'Dec 2025 – Feb 2026',
  },
  {
    company: 'BSNL',
    role: 'Vocational Trainee',
    desc: 'Gained hands-on exposure to telecom infrastructure, network routing systems, and enterprise-level network management in a government telecom environment.',
    period: 'Jun 2025 – Jul 2025',
  },
] as const;

function TimelineEntry({ entry, index }: { entry: (typeof entries)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Alternates: index 0 → right, index 1 → left, index 2 → right
  const isRight = index % 2 === 0;

  const content = (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(32px)`,
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)`,
      }}
      className={`flex flex-col gap-5 ${isRight ? 'text-left pl-10 lg:pl-16' : 'text-right pr-10 lg:pr-16 items-end'}`}
    >
      <span className="text-white/30 text-[0.68rem] tracking-[0.22em] uppercase font-mono">
        {entry.period}
      </span>
      <h3 className="text-[2.8rem] sm:text-[3.8rem] lg:text-[5rem] xl:text-[6rem] font-bold text-white leading-[0.9] tracking-tight">
        {entry.company}
      </h3>
      <p className="text-white/45 text-base lg:text-lg font-light tracking-wide">
        {entry.role}
      </p>
      <p className={`text-white/22 text-sm leading-relaxed max-w-[340px] ${isRight ? '' : 'text-right'}`}>
        {entry.desc}
      </p>
    </div>
  );

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_2px_1fr] py-20 lg:py-28 items-start">
      {/* Left slot */}
      {isRight ? <div /> : content}

      {/* Center — dot */}
      <div className="relative flex justify-center">
        <div
          className="absolute top-4 w-[10px] h-[10px] rounded-full -translate-x-1/2 left-1/2 z-10 transition-all duration-700"
          style={{
            background: '#1a1a1a',
            border: '2px solid rgba(217,255,50,0.5)',
            boxShadow: visible ? '0 0 0 4px rgba(217,255,50,0.12)' : 'none',
          }}
        />
      </div>

      {/* Right slot */}
      {isRight ? content : <div />}
    </div>
  );
}

const WorkExperienceTimeline = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lineContainerRef = useRef<HTMLDivElement>(null);

  // Background transitions from page-gray to dark over the heading area
  const { scrollYProgress: bgProgress } = useScroll({
    target: wrapperRef,
    offset: ['start 80%', 'start 10%'],
  });
  const backgroundColor = useTransform(bgProgress, [0, 1], ['#E6E6E6', '#1a1a1a']);
  const headingTextColor = useTransform(bgProgress, [0, 0.6], ['#111111', '#ffffff']);

  // Lime line grows as you scroll through the entries
  const { scrollYProgress: lineProgress } = useScroll({
    target: lineContainerRef,
    offset: ['start 70%', 'end 30%'],
  });
  const scaleY = useSpring(lineProgress, { stiffness: 60, damping: 18, restDelta: 0.001 });

  return (
    <motion.section
      ref={wrapperRef}
      className="w-full font-display overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Heading */}
      <div className="px-8 lg:px-20 pt-20 lg:pt-28 pb-16 lg:pb-20">
        <motion.p
          style={{ color: headingTextColor }}
          className="text-2xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] tracking-tight max-w-3xl"
        >
          Explore my journey and the experiences that define my craft.
        </motion.p>
      </div>

      {/* Entries area */}
      <div ref={lineContainerRef} className="relative px-8 lg:px-20 pb-16">
        {/* Background track line (faint) */}
        <div
          className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
          style={{ left: 'calc(50% + 40px)', background: 'rgba(217,255,50,0.06)' }}
        />
        {/* Scroll-driven lime line */}
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] origin-top pointer-events-none"
          style={{
            left: 'calc(50% + 40px)',
            scaleY,
            background: 'linear-gradient(to bottom, #D9FF32 0%, rgba(217,255,50,0.3) 100%)',
            boxShadow: '0 0 8px rgba(217,255,50,0.6), 0 0 24px rgba(217,255,50,0.25)',
          }}
        />

        {entries.map((entry, i) => (
          <TimelineEntry key={entry.company} entry={entry} index={i} />
        ))}
      </div>

      {/* Bottom fade out */}
      <div className="h-16 lg:h-20 bg-gradient-to-b from-[#1a1a1a] to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default WorkExperienceTimeline;
