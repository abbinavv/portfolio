"use client";

import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─── Marquee Hero ─── */
function MarqueeHero() {
  const flowerSrc =
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/green-flower_7426aff1-1.avif";

  const Item = () => (
    <div className="flex items-center gap-10 whitespace-nowrap shrink-0">
      <Image src={flowerSrc} alt="green flower" width={128} height={128} className="h-16 w-16 lg:h-[8rem] lg:w-[8rem]" />
      FULL-STACK DEVELOPER&nbsp;&nbsp;UI &amp; UX DESIGNER.
      <svg className="h-16 w-16 lg:h-20 lg:w-20 shrink-0" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" />
        <circle cx="50" cy="50" r="20" fill="black" />
      </svg>
      <Image src={flowerSrc} alt="green flower" width={128} height={128} className="h-16 w-16 lg:h-[8rem] lg:w-[8rem]" />
    </div>
  );

  return (
    <section className="relative w-full bg-[#E6E6E6] overflow-hidden py-10 lg:py-16 font-display">
      <div
        className="flex items-center font-semibold text-[5rem] lg:text-[8rem] leading-none text-black"
        style={{ animation: "marquee 20s linear infinite", width: "max-content", display: "flex" }}
      >
        <div className="flex items-center gap-10 px-10"><Item /><Item /><Item /></div>
        <div className="flex items-center gap-10 px-10" aria-hidden><Item /><Item /><Item /></div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ─── Scroll-scale image ─── */
function ScaleImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.6);
  const [br, setBr] = useState(48);
  const [opacity, setOpacity] = useState(0.5);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handle = () => {
      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const wh = window.innerHeight;
        const start = wh * 0.9, end = wh * 0.2;
        let p = rect.top <= start && rect.top >= end ? (start - rect.top) / (start - end) : rect.top < end ? 1 : 0;
        p = Math.max(0, Math.min(1, p));
        const e = 1 - Math.pow(1 - p, 3);
        setScale(0.6 + e * 0.4);
        setBr(48 - e * 40);
        setOpacity(0.5 + e * 0.5);
      });
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => { window.removeEventListener("scroll", handle); cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-[#D1D1D1]/20 will-change-transform"
      style={{ transform: `scale(${scale})`, borderRadius: `${br}px`, opacity, transition: "transform 0.1s ease-out, border-radius 0.1s ease-out, opacity 0.1s ease-out" }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden group">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/me-sitting_37df8593-2.png"
          alt="Abhinav Raj - Full Stack Developer"
          fill
          priority
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          sizes="1280px"
        />
      </div>
    </div>
  );
}

/* ─── Word-by-word animated text ─── */
function AnimatedWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.3em]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(1.2rem)",
            transition: `opacity 0.55s ease ${i * 28}ms, transform 0.55s ease ${i * 28}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

/* ─── FadeIn ─── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(2rem)", transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── DATA matching original site ─── */
const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    desc: "End-to-end web applications with Next.js, Node.js, TypeScript, PostgreSQL, and tRPC. From architecture to deployment.",
  },
  {
    num: "02",
    title: "iOS Development",
    desc: "Native iOS apps built with Swift & SwiftUI. Clean architecture, polished UI, and seamless Apple ecosystem integration.",
  },
  {
    num: "03",
    title: "UI & UX Design",
    desc: "Pixel-perfect interfaces designed in Figma. Design systems, interactive prototypes, and immersive web experiences.",
  },
];

const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "GSAP"] },
  { category: "Backend", items: ["Node.js", "tRPC", "Prisma", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "Mobile", items: ["Swift", "SwiftUI", "iOS SDK", "Xcode", "CoreData"] },
  { category: "DevOps", items: ["Vercel", "Docker", "GCP", "GitHub Actions", "Nginx"] },
];

const experience = [
  { year: "2025 — Present", role: "Full Stack Developer", company: "Freelance & Self-Built Products", type: "Part-time" },
  { year: "2024 — 2025",    role: "iOS Developer",         company: "Independent Projects",          type: "Full-time" },
  { year: "2023 — 2024",    role: "UI/UX Designer",        company: "Digital Agency",                type: "Full-time" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#E6E6E6] text-black min-h-screen font-display overflow-x-hidden">
      <Navigation />

      {/* ── Marquee Hero ── */}
      <MarqueeHero />

      {/* ── Profile Image ── */}
      <section className="w-full bg-white pt-16 lg:pt-24 pb-0">
        <div className="container max-w-[1280px] mx-auto px-6 lg:px-12">
          <ScaleImage />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-t border-black/10">
        <div className="container max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
            {[
              { val: "4+",   label: "Years of Experience" },
              { val: "30+",  label: "Projects Completed" },
              { val: "10+",  label: "Production Apps" },
              { val: "100%", label: "Type-Safe Code" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 80} className="px-6 lg:px-10 py-14 flex flex-col gap-3">
                <span className="text-[clamp(3rem,7vw,5.5rem)] font-medium leading-none tracking-tighter">
                  {stat.val}
                </span>
                <span className="text-[0.65rem] tracking-[0.22em] uppercase text-black/40 font-medium">
                  {stat.label}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Bio ── */}
      <section className="bg-[#111111] relative py-28 lg:py-40 px-6 overflow-hidden">
        {/* curved top */}
        <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-[110%] h-16 pointer-events-none">
          <div className="absolute inset-0 rounded-[50%] bg-[#111111]" />
        </div>

        <div className="container max-w-[1280px] mx-auto">
          <AnimatedWords
            text="I'm Abhinav — a Full Stack, iOS Developer & UI/UX Designer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision."
            className="text-white text-[clamp(1.8rem,3.8vw,3.2rem)] font-medium leading-[1.25] max-w-5xl"
          />
          <div className="mt-12 lg:mt-16">
            <AnimatedWords
              text="I specialize in SaaS platforms, AI-driven products, and interactive 3D web experiences using Next.js, Node.js, Swift, and Three.js."
              className="text-white/50 text-[clamp(1rem,2vw,1.4rem)] font-light leading-relaxed max-w-3xl"
            />
          </div>

          <FadeIn delay={200} className="mt-16">
            <Link href="/works" className="group inline-flex items-center">
              <div className="relative inline-flex items-center gap-4 bg-[#E6E6E6] text-black font-medium rounded-full overflow-hidden text-base px-9 py-4 group-hover:bg-white transition-colors duration-500">
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="relative z-10">See My Work</span>
              </div>
              <div className="w-14 h-14 ml-[-1px] bg-[#E6E6E6] rounded-full flex items-center justify-center overflow-hidden relative group-hover:bg-white transition-colors duration-500">
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <ArrowUpRight className="w-5 h-5 text-black relative z-10 group-hover:-translate-y-8 group-hover:translate-x-8 transition-transform duration-500" />
                <ArrowUpRight className="w-5 h-5 text-black absolute z-10 translate-y-8 -translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Services / Pillars ── */}
      <section className="bg-[#E6E6E6] py-28 lg:py-36 px-6">
        <div className="container max-w-[1280px] mx-auto">
          <FadeIn>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-black/40 font-medium mb-14">
              What I Do
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-black/10">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className={`p-8 lg:p-12 flex flex-col gap-6 min-h-[280px] ${i < services.length - 1 ? "border-b md:border-b-0 md:border-r border-black/10" : ""}`}>
                  <span className="text-[0.65rem] text-black/25 tracking-widest font-medium">{s.num}</span>
                  <h3 className="text-2xl font-medium leading-tight">{s.title}</h3>
                  <p className="text-black/40 text-sm leading-relaxed mt-auto">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="bg-white border-t border-black/10 py-28 lg:py-36 px-6">
        <div className="container max-w-[1280px] mx-auto">
          <FadeIn>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-black/40 font-medium mb-14">
              Experience
            </p>
          </FadeIn>
          <div className="flex flex-col divide-y divide-black/10">
            {experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 group cursor-default">
                  <span className="text-black/30 text-sm font-mono shrink-0 w-44">{exp.year}</span>
                  <div className="flex-1">
                    <p className="text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                      {exp.role}
                    </p>
                    <p className="text-black/40 text-sm mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[#111111] bg-[#D9FF32] text-[0.6rem] tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-full self-start sm:self-center">
                    {exp.type}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="bg-[#E6E6E6] border-t border-black/10 py-28 lg:py-36 px-6">
        <div className="container max-w-[1280px] mx-auto">
          <FadeIn>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-black/40 font-medium mb-14">
              Technology Stack
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black/10">
            {techStack.map((group, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className={`p-8 lg:p-10 flex flex-col gap-5 ${i < techStack.length - 1 ? "border-b lg:border-b-0 lg:border-r border-black/10" : ""}`}>
                  <p className="text-[0.62rem] tracking-[0.25em] uppercase text-black/40 font-medium">{group.category}</p>
                  <ul className="flex flex-col gap-3">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-base font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/70 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111111] py-32 lg:py-44 px-6 text-center">
        <FadeIn>
          <h2 className="text-white text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-tight mb-14">
            Have a project in mind?
            <br />
            <span className="text-white/20">Let's build it.</span>
          </h2>
          <Link href="mailto:contact@example.com" className="group inline-flex items-center">
            <div className="relative inline-flex items-center gap-4 bg-[#E6E6E6] text-black font-medium rounded-full overflow-hidden text-lg px-10 py-5 group-hover:bg-[#D9FF32] transition-colors duration-500">
              <div className="absolute inset-0 bg-[#D9FF32] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10">Get in touch</span>
            </div>
            <div className="w-16 h-16 ml-[-1px] bg-[#E6E6E6] rounded-full flex items-center justify-center overflow-hidden relative group-hover:bg-[#D9FF32] transition-colors duration-500">
              <div className="absolute inset-0 bg-[#D9FF32] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <ArrowUpRight className="w-6 h-6 text-black relative z-10 group-hover:-translate-y-8 group-hover:translate-x-8 transition-transform duration-500" />
              <ArrowUpRight className="w-6 h-6 text-black absolute z-10 translate-y-8 -translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
