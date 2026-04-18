"use client";

import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─── Animated word-by-word reveal ─── */
function AnimatedParagraph({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.28em]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 0.55s ease ${i * 30}ms, transform 0.55s ease ${i * 30}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

/* ─── Scroll-triggered fade-in ─── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
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
    desc: "Pixel-perfect interfaces with Figma, Tailwind CSS, and Framer Motion. Intuitive design systems and immersive interactive experiences.",
  },
];

const metrics = [
  { value: "4+", label: "Years of Experience" },
  { value: "30+", label: "Projects Completed" },
  { value: "10+", label: "Production Applications" },
  { value: "100%", label: "Type-Safe Architecture" },
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
  {
    period: "2025 — Present",
    role: "Full Stack Developer",
    company: "Freelance / Self-Made Products",
    tag: "Part-time",
  },
  {
    period: "2024 — 2025",
    role: "iOS Developer",
    company: "Independent Projects",
    tag: "Full-time",
  },
  {
    period: "2023 — 2024",
    role: "UI/UX Designer",
    company: "Digital Agency",
    tag: "Full-time",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#111111] text-white min-h-screen font-cabinetGrotesk overflow-x-hidden">
      <Navigation />

      {/* ── Hero ── */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-28 pb-20 max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6 font-medium">
            About Me
          </p>
        </FadeIn>
        <FadeIn delay={80}>
          <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.92] tracking-tight">
            Full-Stack Developer
            <br />
            <span className="text-white/25">iOS Developer.</span>
          </h1>
        </FadeIn>
      </section>

      {/* ── Divider ── */}
      <div className="w-full h-px bg-white/10" />

      {/* ── Bio paragraph ── */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="max-w-4xl">
          <AnimatedParagraph
            text="I'm Abhinav — a Full Stack Developer & iOS Developer focused on building fast, scalable, and beautiful digital products that take ideas from first concept to polished reality."
            className="text-[clamp(1.5rem,3vw,2.6rem)] font-medium leading-[1.3] text-white"
          />
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className="border-t border-b border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                className={`px-8 py-14 flex flex-col gap-3 ${
                  i !== metrics.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <span className="text-[clamp(2.8rem,6vw,4.5rem)] font-medium leading-none tracking-tighter text-white">
                  {m.value}
                </span>
                <span className="text-xs tracking-[0.18em] uppercase text-white/30 font-medium">
                  {m.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Core Pillars ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-16 font-medium">
            Core Pillars
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
          {pillars.map((p, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                className={`p-8 lg:p-12 flex flex-col gap-6 min-h-[300px] ${
                  i !== pillars.length - 1
                    ? "border-b md:border-b-0 md:border-r border-white/10"
                    : ""
                }`}
              >
                <span className="text-xs text-white/20 font-medium tracking-widest">
                  {p.num}
                </span>
                <h3 className="text-2xl font-medium leading-tight">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mt-auto">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="border-t border-white/10 py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-16 font-medium">
              Experience
            </p>
          </FadeIn>
          <div className="flex flex-col divide-y divide-white/10">
            {experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 group cursor-default">
                  <span className="text-white/30 text-sm font-mono w-40 shrink-0">
                    {exp.period}
                  </span>
                  <div className="flex-1">
                    <p className="text-white text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                      {exp.role}
                    </p>
                    <p className="text-white/30 text-sm mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[#D9FF32] text-xs tracking-[0.2em] uppercase font-medium">
                    {exp.tag}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Arsenal ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-16 font-medium">
            Technology Arsenal
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10">
          {techGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                className={`p-8 flex flex-col gap-6 ${
                  i !== techGroups.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-white/10"
                    : ""
                }`}
              >
                <p className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-white text-base font-medium flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF32] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.95] mb-12 tracking-tight">
            Ready to build something
            <br />
            <span className="text-white/25">exceptional?</span>
          </h2>
          <Link href="mailto:abhinav@example.com" className="group inline-flex items-center">
            <div className="inline-flex items-center gap-4 bg-white text-black font-medium rounded-full px-10 py-5 text-lg group-hover:bg-[#D9FF32] transition-colors duration-500">
              Get in touch
            </div>
            <div className="w-16 h-16 ml-[-1px] bg-white rounded-full flex items-center justify-center group-hover:bg-[#D9FF32] transition-colors duration-500">
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
