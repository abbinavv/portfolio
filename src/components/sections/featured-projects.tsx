'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const GitHub3DIcon = () => (
  <div className="relative w-28 h-28 mx-auto mb-2">
    {/* depth shadow */}
    <div className="absolute inset-0 rounded-[28px] bg-black/60 translate-y-4 blur-xl" />
    <div className="absolute inset-0 rounded-[28px] bg-black/30 translate-y-2 translate-x-0.5 blur-md" />
    {/* icon face */}
    <div
      className="absolute inset-0 rounded-[28px] flex items-center justify-center"
      style={{
        background: 'linear-gradient(145deg, #2b3137 0%, #0d1117 60%)',
        boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.5), 0 12px 40px rgba(0,0,0,0.7)',
      }}
    >
      {/* highlight rim */}
      <div className="absolute inset-0 rounded-[28px] border border-white/10" />
      <svg viewBox="0 0 24 24" className="w-14 h-14 fill-white drop-shadow-lg">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    </div>
  </div>
);

const projects = [
  {
    title: "Retail Store Management",
    stack: "Swift · Supabase · CoreML · AVFoundation",
    description: "Native iOS inventory & product tracking system with barcode scanning, SKU management, and real-time database sync.",
    bg: "from-[#1a1f2e] to-[#0f1419]",
    accent: "#4f8ef7",
    year: "2026",
  },
  {
    title: "EnVision AR App",
    stack: "Swift · ARKit · UIKit · Figma",
    description: "Augmented reality furniture placement prototype with full UI/UX design and spatial computing architecture.",
    bg: "from-[#1e1230] to-[#120b1f]",
    accent: "#a855f7",
    year: "2025–2026",
    image: "/envision-preview.png",
    appStoreLink: "https://apps.apple.com/in/app/envision-imagine-see-buy/id6761647280",
  },
  {
    title: "Carbon Footprint Calculator",
    stack: "HTML · CSS · JavaScript · MySQL · Flask",
    description: "Full-stack web app for real-time CO₂ emission tracking with calculation logic and data visualization.",
    bg: "from-[#0f2218] to-[#091510]",
    accent: "#22c55e",
    year: "2025",
  },
  {
    title: "More on GitHub",
    stack: "Various Projects",
    description: "Explore additional work including ML experiments, academic projects, and open-source contributions.",
    bg: "from-[#1a1a1a] to-[#111111]",
    accent: "#D9FF32",
    year: "→",
    isLink: true,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-[#E6E6E6] font-display">
      <div className="container mx-auto px-4 md:px-8 pt-20 lg:pt-28 pb-12">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-[#111111] max-w-2xl">
          Building solutions that bring ideas to life
        </h2>
      </div>

      <div className="container mx-auto px-4 md:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          {projects.map((project, index) => {
            const isEnvision = 'appStoreLink' in project;
            const isGitHub = project.isLink;
            const cardContent = (
              <div
                key={index}
                className="group cursor-pointer flex flex-col gap-3"
              >
                <span className="text-[0.7rem] text-[#888888] uppercase tracking-[0.2em] font-medium px-1">
                  {project.title}
                </span>

                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-sm bg-gradient-to-br ${project.bg} flex flex-col justify-end p-6 lg:p-8 transition-transform duration-500 group-hover:scale-[1.01]`}
                >
                  {/* EnVision background image */}
                  {'image' in project && project.image && (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        sizes="(max-width: 768px) 100vw, 640px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120b1f] via-transparent to-transparent" />
                    </>
                  )}

                  {/* GitHub 3D icon centered */}
                  {isGitHub && (
                    <div className="absolute inset-0 flex items-center justify-center pb-16">
                      <GitHub3DIcon />
                    </div>
                  )}

                  {/* Year badge */}
                  <span
                    className="absolute top-5 right-5 text-xs font-mono tracking-widest px-3 py-1 rounded-full border"
                    style={{ color: project.accent, borderColor: project.accent + '40' }}
                  >
                    {project.year}
                  </span>

                  {/* Content */}
                  <div className="relative flex flex-col gap-3">
                    <p className="text-white/40 text-xs tracking-wider uppercase font-mono">
                      {project.stack}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                    {isEnvision && (
                      <span
                        className="inline-flex items-center gap-2 mt-1 text-sm font-medium"
                        style={{ color: project.accent }}
                      >
                        View on App Store <ArrowUpRight className="w-4 h-4" />
                      </span>
                    )}
                    {isGitHub && (
                      <a
                        href="https://github.com/abbinavv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-1 text-sm font-medium transition-opacity duration-200 hover:opacity-70"
                        style={{ color: project.accent }}
                      >
                        View GitHub <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );

            if (isEnvision) {
              return (
                <a
                  key={index}
                  href={(project as typeof project & { appStoreLink: string }).appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {cardContent}
                </a>
              );
            }
            return cardContent;
          })}
        </div>
      </div>

      <div className="flex justify-center py-16 md:py-20">
        <a href="/works" className="flex items-center group">
          <div className="relative bg-[#D9FF32] text-black h-14 px-10 rounded-full flex items-center justify-center font-medium text-lg overflow-hidden -mr-2 z-10 group-hover:bg-[#c8ee20] transition-colors duration-300">
            projects
          </div>
          <div className="w-14 h-14 bg-[#D9FF32] rounded-full flex items-center justify-center text-black border-l-2 border-[#E6E6E6] group-hover:bg-[#c8ee20] transition-colors duration-300 z-0">
            <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
