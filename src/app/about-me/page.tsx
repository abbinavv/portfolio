"use client";

import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/sections/navigation";
import Image from "next/image";
import Link from "next/link";

/* ─── Word-by-word scroll reveal (original site effect) ─── */
function ScrollRevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start = windowH * 0.85;
      const end = windowH * 0.15;
      const ratio = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, ratio)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const words = text.split(" ");
  const total = words.length;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const wordProgress = Math.min(
          1,
          Math.max(0, (progress - i / total) / (1 / total))
        );
        return (
          <span
            key={i}
            style={{
              color: `rgba(0,0,0,${0.15 + wordProgress * 0.65})`,
              transition: "color 0.1s ease",
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

/* ─── FadeIn utility ─── */
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
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
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
        transform: visible ? "translateY(0)" : "translateY(2rem)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Scrolling Marquee ─── */
function Marquee() {
  const flowerSrc =
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/green-flower_7426aff1-1.avif";

  const Item = () => (
    <span className="inline-flex items-center gap-8 whitespace-nowrap shrink-0">
      <Image
        src={flowerSrc}
        alt=""
        width={80}
        height={80}
        className="h-16 w-16 lg:h-24 lg:w-24 object-contain inline-block"
      />
      <span>FULL-STACK DEVELOPER&nbsp;&nbsp;&amp;&nbsp;&nbsp;iOS DEVELOPER.</span>
    </span>
  );

  return (
    <div className="w-full overflow-hidden bg-[#E6E6E6] py-6">
      <div
        className="flex items-center font-bold text-[3.5rem] lg:text-[6.5rem] leading-none text-black"
        style={{
          animation: "marquee-about 22s linear infinite",
          width: "max-content",
        }}
      >
        <div className="flex items-center gap-12 px-12">
          <Item />
          <Item />
          <Item />
        </div>
        <div className="flex items-center gap-12 px-12" aria-hidden>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee-about {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Sticky scroll two-column section ─── */
function StickyScrollSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#E6E6E6]">
      {/* Left: scrolling text */}
      <div className="px-8 lg:px-16 py-20 lg:py-28 flex flex-col gap-16 justify-start">
        <ScrollRevealText
          text="I'm a Full-Stack Developer who bridges the gap between cutting-edge technology and exceptional user experience. With proven experience building AI-powered SaaS platforms, 3D virtual tour systems, and enterprise-grade applications, I specialize in solving complex technical challenges while delivering intuitive, visually stunning interfaces."
          className="text-base lg:text-lg leading-relaxed font-medium"
        />
        <ScrollRevealText
          text="My approach combines strategic architecture with hands-on development — whether it's implementing Retrieval-Augmented Generation (RAG) systems, optimizing WebGL rendering for 3D experiences, or architecting type-safe monorepo setups with tRPC. I've worked across diverse industries from PropTech to FinTech, consistently delivering production-ready solutions that scale."
          className="text-base lg:text-lg leading-relaxed font-medium"
        />
        <ScrollRevealText
          text="What sets me apart is my ability to work across the entire stack: designing systems in Node.js, building dynamic React frontends, integrating AI capabilities, and deploying Dockerized microservices with CI/CD pipelines. I don't just write code — I architect solutions that drive measurable business outcomes."
          className="text-base lg:text-lg leading-relaxed font-medium"
        />
      </div>

      {/* Right: sticky portrait */}
      <div className="relative hidden lg:block">
        <div className="sticky top-0 h-screen">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/me-sitting_37df8593-2.png"
            alt="Abhinav Raj"
            fill
            className="object-cover object-top grayscale"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function AboutFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="w-full font-display overflow-hidden">
      {/* Crossed ribbon marquee */}
      <div className="relative h-[280px] lg:h-[360px] flex items-center justify-center overflow-hidden bg-[#E6E6E6]">
        {[
          { deg: -5, dir: 1 },
          { deg: 5, dir: -1 },
        ].map((band, bi) => (
          <div
            key={bi}
            className="absolute w-[160%] h-[56px] lg:h-[72px] bg-[#111111] flex items-center overflow-hidden"
            style={{
              transform: `rotate(${band.deg}deg)`,
              zIndex: 10 - bi * 5,
            }}
          >
            <div
              className="flex whitespace-nowrap items-center"
              style={{
                animation: `marquee-band-${bi} 28s linear infinite`,
                width: "max-content",
                transform: band.dir === -1 ? "translateX(-50%)" : undefined,
              }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-6 px-6 text-white text-base lg:text-xl font-medium tracking-tight"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 shrink-0"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    {[...Array(12)].map((_, k) => {
                      const angle = (k * 30 * Math.PI) / 180;
                      const x1 = 12 + 7 * Math.cos(angle);
                      const y1 = 12 + 7 * Math.sin(angle);
                      const x2 = 12 + 10 * Math.cos(angle);
                      const y2 = 12 + 10 * Math.sin(angle);
                      return (
                        <line
                          key={k}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="white"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </svg>
                  {bi === 0
                    ? i % 3 === 0
                      ? "Driven by Passion, Built with Code"
                      : i % 3 === 1
                      ? "Custom Web Experiences"
                      : "Innovative Self-Made Creations"
                    : i % 3 === 0
                    ? "Handcrafted Digital Solutions"
                    : i % 3 === 1
                    ? "Tailored Web Development for You"
                    : "Driven by Passion, Built with Code"}
                </span>
              ))}
            </div>
          </div>
        ))}
        <style jsx global>{`
          @keyframes marquee-band-0 {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes marquee-band-1 {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </div>

      {/* Dark footer body */}
      <div className="bg-[#111111] pt-16 pb-10 px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 max-w-5xl">
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-6">
              Links
            </p>
            <ul className="flex flex-col gap-3">
              {["Home", "Work", "About", "Contact"].map((l) => (
                <li key={l}>
                  <Link
                    href={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                    className="text-white text-lg hover:text-[#D9FF32] transition-colors duration-300"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-6">
              Socials
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Email", href: "mailto:abhinav@example.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Github", href: "https://github.com" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg hover:text-[#D9FF32] transition-colors duration-300"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-6">
              Local Time
            </p>
            <p className="text-white text-lg">{time}</p>
          </div>
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-6">
              Version
            </p>
            <p className="text-white text-lg">2026 © Edition</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-16">
          <a
            href="mailto:abhinav@example.com"
            className="inline-flex items-center justify-center border border-white/20 rounded-full px-7 py-3 text-white text-sm hover:border-white/60 transition-colors duration-300"
          >
            abhinav@example.com
          </a>
        </div>

        <div className="relative flex items-end justify-center overflow-hidden mt-8">
          <span
            className="text-white font-bold leading-none tracking-tighter select-none text-[20vw]"
            style={{ lineHeight: 0.85 }}
          >
            ABHINAV
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─── DATA ─── */
const competencies = [
  {
    num: "01",
    title: "Full-Stack Architecture",
    desc: "I architect end-to-end solutions using modern tech stacks — from Node.js backends with PostgreSQL/MongoDB to React and Next.js frontends. Whether building multi-tenant SaaS platforms, real-time dashboards with WebSockets, or RESTful APIs with tRPC, I ensure type-safe, scalable architecture that supports rapid growth and seamless deployment.",
  },
  {
    num: "02",
    title: "iOS Development",
    desc: "I build high-performance native iOS apps using Swift and SwiftUI. From intuitive UI components to complex data flows with Combine and async/await, I deliver polished App Store-ready experiences. I integrate REST APIs, push notifications, Core Data, and third-party SDKs with clean MVVM architecture.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "I create immersive interfaces with deep attention to motion, typography, and interaction. From Figma prototypes to production-ready Tailwind components, I bridge design and engineering to deliver experiences that are both visually stunning and functionally excellent across web and mobile.",
  },
];

const impactStats = [
  {
    val: "4+",
    title: "Years of Experience",
    desc: "Consistently delivering high-quality production software across web and mobile",
  },
  {
    val: "30+",
    title: "Projects Shipped",
    desc: "Successfully deployed and maintained across various industries",
  },
  {
    val: "10+",
    title: "iOS Apps",
    desc: "Native Swift/SwiftUI apps built and submitted to the App Store",
  },
  {
    val: "100%",
    title: "Type-Safe Architecture",
    desc: "End-to-end type safety with TypeScript, tRPC, and modern tooling",
  },
];

const techStack = [
  {
    category: "Languages & Frameworks",
    items: ["Swift", "SwiftUI", "TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    category: "iOS & Mobile",
    items: ["UIKit", "Combine", "Core Data", "WidgetKit", "CloudKit", "TestFlight"],
  },
  {
    category: "Backend & APIs",
    items: ["Express.js", "tRPC", "REST", "GraphQL", "Firebase", "Supabase"],
  },
  {
    category: "Databases & State",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "React Query", "Zustand"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "CI/CD", "Vercel", "AWS", "Nginx"],
  },
  {
    category: "UI & Design",
    items: ["Tailwind CSS", "Figma", "Framer Motion", "ShadCN UI", "GSAP"],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#E6E6E6] text-black min-h-screen font-display overflow-x-hidden">
      <Navigation />

      {/* ── Hero: "About Me" heading + bio text ── */}
      <section className="px-8 lg:px-16 pt-16 lg:pt-24 pb-12 max-w-[820px]">
        <FadeIn>
          <h1 className="text-[5rem] lg:text-[8rem] font-medium leading-[0.9] tracking-tight mb-10">
            About Me
          </h1>
        </FadeIn>
        <FadeIn delay={80}>
          <p className="text-base lg:text-lg leading-relaxed text-black/70 max-w-[640px]">
            I&apos;m a Full-Stack &amp; iOS Developer who enjoys building things
            that genuinely make life easier for users and businesses. Most of my
            work sits at the intersection of mobile, web, and thoughtful UI/UX.
            I like taking ideas from the first concept all the way to a polished
            product — whether that means shipping a SwiftUI app or architecting
            a scalable backend. My goal is always the same: create fast,
            beautiful, and meaningful tools that people actually enjoy using.
          </p>
        </FadeIn>
      </section>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── Sticky scroll: text left, portrait right ── */}
      <StickyScrollSection />

      {/* ── Core Competencies ── */}
      <section className="bg-[#E6E6E6] px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10">
          {competencies.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                className={`pt-8 pb-10 pr-10 ${
                  i < competencies.length - 1
                    ? "border-b md:border-b-0 md:border-r border-black/10"
                    : ""
                } ${i > 0 ? "md:pl-10" : ""}`}
              >
                <p className="text-xs text-black/30 tracking-widest font-medium mb-6">
                  {c.num}
                </p>
                <h3 className="text-2xl font-semibold mb-5 leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-black/50">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Proven Impact ── */}
      <section className="bg-[#E6E6E6] px-8 lg:px-16 pb-24">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-3">
            Proven Impact
          </h2>
          <p className="text-black/40 text-base">
            Throughout my career, I&apos;ve delivered measurable results that
            matter
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactStats.map((s, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="bg-[#111111] rounded-2xl p-8 flex flex-col gap-4 h-full">
                <span className="text-[4.5rem] lg:text-[5rem] font-bold text-white leading-none tracking-tighter">
                  {s.val}
                </span>
                <p className="text-white font-semibold text-lg leading-tight">
                  {s.title}
                </p>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Technology Arsenal ── */}
      <section className="bg-[#E6E6E6] px-8 lg:px-16 pb-24">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-3">
            Technology Arsenal
          </h2>
          <p className="text-black/40 text-base">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {techStack.map((group, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div>
                <h4 className="text-xl font-semibold mb-5">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-black/15 rounded-full px-4 py-1.5 text-sm font-medium bg-transparent hover:bg-black hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA Box ── */}
      <section className="px-8 lg:px-16 pb-24">
        <FadeIn>
          <div className="bg-[#111111] rounded-3xl px-8 lg:px-20 py-16 lg:py-20 text-center">
            <h2 className="text-white text-3xl lg:text-5xl font-semibold mb-6 leading-tight">
              Ready to Build Something Exceptional?
            </h2>
            <p className="text-white/50 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you need a native iOS app, a high-performance web
              application, or end-to-end product design, I bring the technical
              expertise and creative vision to make it happen. Let&apos;s turn
              your ideas into production-ready solutions.
            </p>
            <Link
              href="mailto:abhinav@example.com"
              className="inline-flex items-center gap-2 bg-white text-black font-medium rounded-full px-8 py-4 text-base hover:bg-[#D9FF32] transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </section>

      <AboutFooter />
    </div>
  );
}
