"use client";

import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─── Animated word helper ─── */
function AnimatedWord({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <span
      ref={ref}
      className="inline-block mr-[0.3em]"
      style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
    >
      {children}
    </span>
  );
}

/* ─── Fade-in section wrapper ─── */
function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
    >
      {children}
    </div>
  );
}

/* ─── DATA ─── */
const pillars = [
  {
    num: "01",
    title: "Full-Stack Architecture",
    desc: "Building scalable, type-safe systems with Next.js, Node.js, PostgreSQL/MongoDB, and tRPC. End-to-end from schema design to deployed product.",
  },
  {
    num: "02",
    title: "iOS Development",
    desc: "Native iOS apps with Swift & SwiftUI. Clean architectures, elegant UI, and seamless Apple-ecosystem integrations built for performance.",
  },
  {
    num: "03",
    title: "UI/UX & Interactive Design",
    desc: "Pixel-perfect interfaces with Figma, Tailwind CSS, and Framer Motion. Intuitive design systems and immersive 3D web experiences with Three.js.",
  },
];

const metrics = [
  { value: "4+", label: "Years of experience" },
  { value: "30+", label: "Projects completed" },
  { value: "100%", label: "Type-safe architecture" },
  { value: "10+", label: "Production applications" },
];

const techGroups = [
  {
    label: "Languages & Frameworks",
    items: ["TypeScript", "Swift", "React", "Next.js", "Node.js", "SwiftUI"],
  },
  {
    label: "Mobile & 3D",
    items: ["iOS SDK", "Xcode", "Three.js", "React Three Fiber", "GSAP"],
  },
  {
    label: "Databases & State",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "Zustand"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "Vercel", "GCP", "CI/CD", "Nginx"],
  },
];

const experience = [
  { period: "2025 – Present", role: "Full Stack Developer", company: "Freelance / Self-Made Products", type: "Part-time" },
  { period: "2024 – 2025", role: "iOS Developer", company: "Independent Projects", type: "Full-time" },
  { period: "2023 – 2024", role: "Frontend Developer", company: "Digital Agency", type: "Full-time" },
];

export default function AboutPage() {
  const bioWords = [
    "I'm", "Abhinav", "——", "a", "Full", "Stack", "Developer", "&", "iOS", "Developer",
    "focused", "on", "building", "fast,", "scalable,", "and", "beautiful", "digital",
    "products", "that", "take", "ideas", "from", "concept", "to", "polished", "reality.",
  ];

  return (
    <div className="bg-[#E6E6E6] min-h-screen font-display overflow-x-hidden">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <FadeSection>
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">About Me</p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight mb-0">
            Building things
            <br />
            <span className="text-black/30">that matter.</span>
          </h1>
        </FadeSection>
      </section>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-black/10" />

      {/* ── Bio paragraph ── */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="max-w-4xl">
          <p className="text-[clamp(1.4rem,3vw,2.4rem)] font-medium leading-[1.3] text-[#111111]">
            {bioWords.map((word, i) => (
              <AnimatedWord key={i} delay={i * 35}>
                {word}
              </AnimatedWord>
            ))}
          </p>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="border-t border-b border-black/10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeSection key={i}>
              <div
                className={`px-8 py-14 flex flex-col gap-3 ${i !== metrics.length - 1 ? "border-r border-black/10" : ""}`}
              >
                <span className="text-[clamp(3rem,7vw,5rem)] font-medium leading-none tracking-tighter">{m.value}</span>
                <span className="text-xs tracking-[0.18em] uppercase text-black/40">{m.label}</span>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── Core Pillars ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <FadeSection>
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-16">Core Pillars</p>
        </FadeSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10">
          {pillars.map((p, i) => (
            <FadeSection key={i}>
              <div className={`p-8 lg:p-12 flex flex-col gap-6 min-h-[280px] ${i !== pillars.length - 1 ? "border-b md:border-b-0 md:border-r border-black/10" : ""}`}>
                <span className="text-xs text-black/30 font-medium">{p.num}</span>
                <h3 className="text-2xl font-medium leading-tight">{p.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed mt-auto">{p.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="bg-[#111111] py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1280px] mx-auto">
          <FadeSection>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-16">Experience</p>
          </FadeSection>
          <div className="flex flex-col divide-y divide-white/10">
            {experience.map((exp, i) => (
              <FadeSection key={i}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8">
                  <span className="text-white/30 text-sm font-mono">{exp.period}</span>
                  <div className="flex-1 sm:text-center">
                    <p className="text-white text-xl font-medium">{exp.role}</p>
                    <p className="text-white/40 text-sm mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[#D9FF32] text-xs tracking-widest uppercase">{exp.type}</span>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <FadeSection>
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-16">Technology Arsenal</p>
        </FadeSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-black/10">
          {techGroups.map((group, i) => (
            <FadeSection key={i}>
              <div className={`p-8 flex flex-col gap-5 ${i !== techGroups.length - 1 ? "border-b lg:border-b-0 lg:border-r border-black/10" : ""}`}>
                <p className="text-xs tracking-[0.2em] uppercase text-black/40">{group.label}</p>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-[#111111] text-base font-medium flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF32] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto text-center">
        <FadeSection>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.95] mb-10 tracking-tight">
            Ready to build something<br />exceptional?
          </h2>
          <Link href="mailto:abhinav@example.com" className="group inline-flex items-center">
            <div className="inline-flex items-center justify-center gap-4 bg-[#111111] text-white font-medium rounded-full px-10 py-5 text-lg group-hover:bg-[#D9FF32] group-hover:text-black transition-colors duration-500">
              Get in touch
            </div>
            <div className="w-16 h-16 ml-[-1px] bg-[#111111] rounded-full flex items-center justify-center group-hover:bg-[#D9FF32] transition-colors duration-500">
              <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" />
            </div>
          </Link>
        </FadeSection>
      </section>

      <Footer />
    </div>
  );
}
