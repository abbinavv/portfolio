"use client";

import React, { useEffect, useRef } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
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

const projects = [
  {
    title: "EnVision AR App",
    category: "iOS · AR",
    year: "2025–2026",
    tags: ["Swift", "ARKit", "UIKit", "Figma"],
    description: "Augmented reality furniture placement app — place, visualise, and buy furniture in your real space before purchasing.",
    image: "/envision-preview.png",
    imagePosition: "center center",
    link: "https://apps.apple.com/in/app/envision-imagine-see-buy/id6761647280",
    linkLabel: "View on App Store",
    wide: true,
    accent: "#a855f7",
    placeholder: null,
  },
  {
    title: "Retail Store Management",
    category: "iOS · Infosys",
    year: "2026",
    tags: ["Swift", "Supabase", "CoreML", "AVFoundation"],
    description: "Native iOS inventory & product tracking system with barcode scanning, SKU management, and real-time database sync.",
    image: null,
    wide: false,
    accent: "#4f8ef7",
    placeholder: { bg: "from-[#1a1f2e] to-[#0d1219]", icon: "📦" },
  },
  {
    title: "Carbon Footprint Calculator",
    category: "Web · Full-Stack",
    year: "2025",
    tags: ["Flask", "MySQL", "JavaScript", "Python"],
    description: "Full-stack web app for real-time CO₂ emission tracking with calculation logic and data visualisation.",
    image: null,
    wide: false,
    accent: "#22c55e",
    placeholder: { bg: "from-[#0f2218] to-[#071410]", icon: "🌱" },
  },
];

export default function WorksPage() {
  return (
    <div className="bg-[#E6E6E6] min-h-screen font-display overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <FadeSection>
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">Selected Works</p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight">
            Projects that
            <br />
            <span className="text-black/30">speak for themselves.</span>
          </h1>
        </FadeSection>
      </section>

      <div className="w-full h-px bg-black/10" />

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => {
            const card = (
              <div className="group cursor-pointer flex flex-col gap-4">
                {/* Meta row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-black/40 font-medium tracking-widest uppercase">{project.category}</span>
                    <span className="text-black/20">·</span>
                    <span className="text-xs text-black/60 tracking-wider uppercase font-medium">{project.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, t) => (
                      <span key={t} className="text-[0.65rem] px-2.5 py-1 rounded-full bg-[#111111]/8 text-black/50 uppercase tracking-wider font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card */}
                <div className={`relative overflow-hidden rounded-2xl ${project.wide ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        style={{ objectPosition: ('imagePosition' in project ? project.imagePosition : 'center') as string }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1280px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </>
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.placeholder!.bg} flex flex-col items-center justify-center gap-4`}>
                      <span className="text-6xl opacity-20 select-none">{project.placeholder!.icon}</span>
                      <span className="text-white/10 text-xs tracking-[0.4em] uppercase font-medium">Coming Soon</span>
                    </div>
                  )}

                  {/* Bottom info overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium text-lg leading-tight drop-shadow">{project.title}</p>
                      {project.description && (
                        <p className="text-white/60 text-sm leading-snug max-w-lg hidden group-hover:block transition-all">
                          {project.description}
                        </p>
                      )}
                    </div>
                    {'linkLabel' in project && project.link && (
                      <span className="text-xs font-medium px-3 py-1.5 rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                        style={{ color: project.accent, borderColor: project.accent + '50' }}>
                        {project.linkLabel} ↗
                      </span>
                    )}
                  </div>

                  {/* Year badge */}
                  <span className="absolute top-5 right-5 text-xs font-mono tracking-widest px-3 py-1 rounded-full border"
                    style={{ color: project.accent, borderColor: project.accent + '40' }}>
                    {project.year}
                  </span>
                </div>
              </div>
            );

            return (
              <FadeSection key={i} delay={i * 80} className={project.wide ? "md:col-span-2" : ""}>
                {'link' in project && project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">{card}</a>
                ) : card}
              </FadeSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 py-28 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto text-center">
        <FadeSection>
          <p className="text-black/40 text-sm tracking-widest uppercase mb-6">Have a project in mind?</p>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[0.95] mb-10 tracking-tight">
            Let&apos;s work together.
          </h2>
          <a href="mailto:abhinavraj000001@gmail.com" className="group inline-flex items-center">
            <div className="inline-flex items-center justify-center bg-[#111111] text-white font-medium rounded-full px-10 py-5 text-lg group-hover:bg-[#D9FF32] group-hover:text-black transition-colors duration-500">
              Start a project
            </div>
            <div className="w-16 h-16 ml-[-1px] bg-[#111111] rounded-full flex items-center justify-center group-hover:bg-[#D9FF32] transition-colors duration-500">
              <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" />
            </div>
          </a>
        </FadeSection>
      </section>

      <Footer />
    </div>
  );
}
