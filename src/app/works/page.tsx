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
    title: "AI Assistant",
    category: "Vexlogic",
    tags: ["AI", "SaaS", "Next.js"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/p-vexlogic-ai-assistant_1a9ca26b-3.jpg",
    wide: true,
  },
  {
    title: "Business Expander",
    category: "Vexlogic",
    tags: ["SaaS", "Full Stack"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/p-vexlogic-business-expander_84d3869a-4.jpg",
    wide: false,
  },
  {
    title: "3D Visualisation",
    category: "Comra",
    tags: ["3D", "WebGL", "Real Estate"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/p-comra_66d67f23-5.jpg",
    wide: false,
  },
  {
    title: "Property Booking",
    category: "Super Host",
    tags: ["Booking", "Full Stack"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/super-host-phone_6e0451d2-6.jpg",
    wide: true,
  },
  {
    title: "CV Builder",
    category: "SiraDatia",
    tags: ["SaaS", "React", "PDF"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/p-vexlogic-ai-assistant_1a9ca26b-3.jpg",
    wide: false,
  },
  {
    title: "Digital Receipt",
    category: "Fintechracy",
    tags: ["PWA", "Fintech", "Mobile"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/p-vexlogic-business-expander_84d3869a-4.jpg",
    wide: false,
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
          {projects.map((project, i) => (
            <FadeSection
              key={i}
              delay={i * 60}
              className={project.wide ? "md:col-span-2" : ""}
            >
              <div className="group cursor-pointer flex flex-col gap-4">
                {/* Meta row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-black/40 font-medium tracking-widest uppercase">{project.category}</span>
                    <span className="text-black/20">·</span>
                    <span className="text-xs text-black/60 tracking-wider uppercase font-medium">{project.title}</span>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag, t) => (
                      <span key={t} className="text-[0.65rem] px-2.5 py-1 rounded-full bg-[#111111]/8 text-black/50 uppercase tracking-wider font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl bg-[#D1D1D1]/30 ${project.wide ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-2 text-white font-medium text-sm">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 py-28 px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto text-center">
        <FadeSection>
          <p className="text-black/40 text-sm tracking-widest uppercase mb-6">Have a project in mind?</p>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[0.95] mb-10 tracking-tight">
            Let&apos;s work together.
          </h2>
          <a href="mailto:abhinav@example.com" className="group inline-flex items-center">
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
