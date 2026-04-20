"use client";

import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/sections/navigation";
import Image from "next/image";
import Link from "next/link";

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(2rem)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

function Marquee() {
  const Item = () => (
    <span className="inline-flex items-center gap-8 whitespace-nowrap shrink-0">
      <svg viewBox="0 0 24 24" width="64" height="64" className="h-12 w-12 lg:h-16 lg:w-16 shrink-0 fill-[#111111]">
        <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 22l-2.09-6.26L4 14l5.91-1.74z" />
      </svg>
      <span>iOS DEVELOPER&nbsp;&nbsp;FULL-STACK&nbsp;&nbsp;UI &amp; UX DESIGNER.</span>
    </span>
  );
  return (
    <div className="w-full overflow-hidden bg-[#E6E6E6] py-6 border-y border-black/10">
      <div className="flex items-center font-semibold text-[3rem] lg:text-[6rem] leading-none text-black" style={{ animation: "marquee-about 22s linear infinite", width: "max-content" }}>
        <div className="flex items-center gap-12 px-12"><Item /><Item /><Item /></div>
        <div className="flex items-center gap-12 px-12" aria-hidden><Item /><Item /><Item /></div>
      </div>
      <style jsx global>{`@keyframes marquee-about{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function AboutFooter() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }) + " IST");
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="w-full font-display overflow-hidden">
      <div className="relative h-[280px] lg:h-[360px] flex items-center justify-center overflow-hidden bg-[#E6E6E6]">
        {[{ deg: -5, rev: false }, { deg: 5, rev: true }].map((b, bi) => (
          <div key={bi} className="absolute w-[160%] h-[56px] lg:h-[72px] bg-[#111111] flex items-center overflow-hidden" style={{ transform: `rotate(${b.deg}deg)`, zIndex: 10 - bi * 5 }}>
            <div className="flex whitespace-nowrap items-center" style={{ animation: `about-band-${bi} 28s linear infinite`, width: "max-content", transform: b.rev ? "translateX(-50%)" : undefined }}>
              {[0,1,2,3,4].map(i => (
                <span key={i} className="inline-flex items-center gap-5 px-5 text-white text-base lg:text-xl font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  {bi === 0 ? (i%3===0?"Driven by Curiosity, Built with Code":i%3===1?"iOS & Full-Stack Developer":"Oracle Cloud Certified") : (i%3===0?"SRM Institute — CGPA 9.42":i%3===1?"Infosys · UpSmart · BSNL":"Building Real-World Solutions")}
                </span>
              ))}
            </div>
          </div>
        ))}
        <style jsx global>{`@keyframes about-band-0{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@keyframes about-band-1{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}`}</style>
      </div>

      <div className="bg-[#111111] pt-16 pb-10 px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 max-w-5xl">
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-6">Links</p>
            <ul className="flex flex-col gap-3">{[{l:"Home",h:"/"},{l:"Work",h:"/works"},{l:"About",h:"/about-me"},{l:"Contact",h:"mailto:abhinavraj00001@gmail.com"}].map(x=>(
              <li key={x.l}><Link href={x.h} className="text-white text-lg hover:text-[#D9FF32] transition-colors">{x.l}</Link></li>
            ))}</ul>
          </div>
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-6">Socials</p>
            <ul className="flex flex-col gap-3">{[{l:"Email",h:"mailto:abhinavraj00001@gmail.com"},{l:"LinkedIn",h:"https://www.linkedin.com/in/abhinavraj"},{l:"Github",h:"https://github.com/abhinavraj"}].map(x=>(
              <li key={x.l}><a href={x.h} target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-[#D9FF32] transition-colors">{x.l}</a></li>
            ))}</ul>
          </div>
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-6">Local Time</p>
            <p className="text-white text-lg">{time}</p>
          </div>
          <div>
            <p className="text-[#666] text-[0.6rem] tracking-[0.25em] uppercase mb-6">Status</p>
            <p className="text-white text-lg">Open to Opportunities</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-16 justify-end">
          <a href="tel:+918002634000" className="inline-flex items-center justify-center border border-white/20 rounded-full px-7 py-3 text-white text-sm hover:border-[#D9FF32] hover:text-[#D9FF32] transition-colors">+91-8002634000</a>
          <a href="mailto:abhinavraj00001@gmail.com" className="inline-flex items-center justify-center border border-white/20 rounded-full px-7 py-3 text-white text-sm hover:border-[#D9FF32] hover:text-[#D9FF32] transition-colors">abhinavraj00001@gmail.com</a>
        </div>

        <div className="w-full overflow-hidden text-center">
          <p className="text-white font-bold leading-none tracking-tighter select-none" style={{ fontSize: "clamp(5rem,18vw,16rem)", lineHeight: 0.85 }}>ABHINAV</p>
        </div>
      </div>
    </footer>
  );
}

const competencies = [
  { num: "01", title: "iOS & Mobile Development", desc: "Native iOS applications with Swift, SwiftUI, ARKit, CoreML, and AVFoundation. From AR furniture visualization to barcode-driven inventory systems — end-to-end from Xcode to App Store." },
  { num: "02", title: "Full-Stack Web Development", desc: "Web applications built with React, Flask, JavaScript, and Python. RESTful APIs, PostgreSQL and Supabase databases, clean frontends, and real-time data visualization tools." },
  { num: "03", title: "Machine Learning & AI", desc: "Applying TensorFlow, OpenCV, Scikit-learn, Pandas, and CoreML to build intelligent features — from image recognition and data science pipelines to predictive models in production apps." },
];

const techStack = [
  { category: "Languages", items: ["Swift", "Python", "JavaScript", "Java", "C++", "HTML", "CSS", "SQL"] },
  { category: "iOS & Mobile", items: ["SwiftUI", "ARKit", "UIKit", "CoreML", "AVFoundation", "Xcode"] },
  { category: "Web Frameworks", items: ["React", "Flask", "Node.js"] },
  { category: "ML & Data Science", items: ["TensorFlow", "OpenCV", "Scikit-learn", "Pandas", "NumPy"] },
  { category: "Databases", items: ["PostgreSQL", "Supabase", "Oracle DB", "MySQL"] },
  { category: "Tools & Design", items: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Blender", "Jira"] },
];

const experience = [
  { period: "March 2026", role: "iOS Developer Intern", company: "Infosys", type: "Internship", current: true, desc: "Developed iOS modules with Swift & Xcode. Contributed to retail ops platform — inventory, cataloging, barcode tracking." },
  { period: "Dec 2025 – Feb 2026", role: "Software Development Intern", company: "UpSmart Solutions Pvt. Ltd.", type: "Internship", current: false, desc: "Delivered feature-level modules, participated in code reviews, debugging, and iterative improvements." },
  { period: "Jun 2025 – Jul 2025", role: "Vocational Trainee", company: "BSNL", type: "Training", current: false, desc: "Gained exposure to telecom infrastructure, routing protocols, and network systems." },
];

const impactStats = [
  { val: "9.42", label: "CGPA at SRM Institute" },
  { val: "3+", label: "Production Projects Built" },
  { val: "3", label: "Industry Internships" },
  { val: "OCI", label: "Oracle Cloud Certified" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#E6E6E6] text-black min-h-screen font-display overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="px-8 lg:px-16 pt-16 lg:pt-20 pb-10 max-w-[780px]">
        <FadeIn><h1 className="text-[5rem] lg:text-[8rem] font-medium leading-[0.9] tracking-tight mb-10">About Me</h1></FadeIn>
        <FadeIn delay={80}>
          <p className="text-base lg:text-lg leading-relaxed text-black/80 max-w-[600px]">
            I&apos;m Abhinav Raj — a Computer Science student at SRM Institute of Science and Technology (CGPA 9.42) who builds things that solve real problems. I work across iOS development, full-stack web apps, and machine learning. Whether it&apos;s a native Swift app with AR capabilities, a Flask-powered data tool, or a React interface — I take ideas from concept to working product with clean code and thoughtful design.
          </p>
        </FadeIn>
      </section>

      <Marquee />

      {/* Two-column bio + image */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="px-8 lg:px-16 py-16 lg:py-24 flex flex-col gap-8 justify-center max-w-[680px]">
          <FadeIn>
            <p className="text-base lg:text-lg leading-relaxed text-black/80">
              I&apos;m an iOS Developer and Full-Stack Engineer who bridges the gap between clean engineering and great user experience. With internship experience at Infosys, UpSmart Solutions, and BSNL, I&apos;ve worked on retail inventory platforms, software development workflows, and telecom infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="text-base lg:text-lg leading-relaxed text-black/80">
              My approach combines strong fundamentals — DSA, system design, agile practices — with hands-on delivery. I&apos;ve built AR furniture visualization apps using ARKit, inventory systems with CoreML and barcode scanning, and full-stack carbon tracking tools with Flask and MySQL.
            </p>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="text-base lg:text-lg leading-relaxed text-black/80">
              I&apos;m Oracle Cloud Infrastructure certified in Data Science, hold TOCFL Level 2 Chinese proficiency, and ranked in the top 20% academically at SRM. I don&apos;t just write code — I architect solutions that work in the real world.
            </p>
          </FadeIn>
        </div>
        <div className="relative min-h-[500px] lg:min-h-0 bg-[#1a1a1a]">
          <Image
            src="/abhinav-photo.png"
            alt="Abhinav Raj"
            fill
            className="object-cover object-top grayscale"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Core Competencies */}
      <section className="bg-[#E6E6E6] px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black/10">
          {competencies.map((c, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className={`pt-8 pb-10 pr-10 ${i < competencies.length - 1 ? "border-b md:border-b-0 md:border-r border-black/10" : ""} ${i > 0 ? "md:pl-10" : ""}`}>
                <p className="text-xs text-black/30 tracking-widest font-medium mb-6">{c.num}</p>
                <h3 className="text-2xl font-semibold mb-5 leading-tight">{c.title}</h3>
                <p className="text-sm leading-relaxed text-black/50">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Proven Impact */}
      <section className="bg-[#E6E6E6] px-8 lg:px-16 pb-24">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-3">Proven Impact</h2>
          <p className="text-black/40 text-base">Academic excellence, real-world experience, and certified skills</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactStats.map((s, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="bg-[#111111] rounded-2xl p-8 flex flex-col gap-4 h-full">
                <span className="text-[4rem] lg:text-[5rem] font-bold text-white leading-none tracking-tighter">{s.val}</span>
                <p className="text-white/40 text-sm leading-relaxed">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="bg-white border-t border-black/10 py-28 lg:py-36 px-6">
        <div className="container max-w-[1280px] mx-auto">
          <FadeIn><p className="text-[0.65rem] tracking-[0.3em] uppercase text-black/40 font-medium mb-14">Work Experience</p></FadeIn>
          <div className="flex flex-col divide-y divide-black/10">
            {experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 70}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 py-8 group cursor-default">
                  <div className="flex items-center gap-4 sm:w-52 shrink-0">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${exp.current ? "bg-[#D9FF32]" : "bg-black/20"}`} />
                    <span className="text-black/30 text-sm font-mono">{exp.period}</span>
                  </div>
                  <div className="flex-1 pl-6 sm:pl-0">
                    <p className="text-2xl lg:text-3xl font-medium group-hover:translate-x-2 transition-transform duration-300">{exp.company}</p>
                    <p className="text-black/40 text-sm mt-1">{exp.role}</p>
                    <p className="text-black/30 text-sm mt-2 leading-relaxed max-w-lg">{exp.desc}</p>
                  </div>
                  <span className="text-[#111111] bg-[#D9FF32] text-[0.6rem] tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-full self-start ml-6 sm:ml-0 shrink-0">{exp.type}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Arsenal */}
      <section className="bg-[#E6E6E6] border-t border-black/10 py-28 lg:py-36 px-6">
        <div className="container max-w-[1280px] mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-3">Technology Arsenal</h2>
            <p className="text-black/40 text-base">Tools and languages I use to build real things</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {techStack.map((group, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div>
                  <h4 className="text-xl font-semibold mb-5">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span key={item} className="border border-black/15 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200 cursor-default">{item}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white border-t border-black/10 py-20 px-6">
        <div className="container max-w-[1280px] mx-auto">
          <FadeIn><p className="text-[0.65rem] tracking-[0.3em] uppercase text-black/40 font-medium mb-10">Certifications & Achievements</p></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Oracle Cloud Infrastructure 2025", sub: "Data Science Certified", icon: "☁️" },
              { title: "TOCFL Level 2", sub: "Chinese Language Proficiency", icon: "🀄" },
              { title: "Academic Scholarship", sub: "Top 20% — SRM Institute of Science and Technology", icon: "🏆" },
            ].map((cert, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="border border-black/10 rounded-2xl p-7 flex flex-col gap-3">
                  <span className="text-3xl">{cert.icon}</span>
                  <p className="font-semibold text-lg leading-tight">{cert.title}</p>
                  <p className="text-black/40 text-sm">{cert.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 pb-24 pt-4">
        <FadeIn>
          <div className="bg-[#111111] rounded-3xl px-8 lg:px-20 py-16 lg:py-20 text-center">
            <h2 className="text-white text-3xl lg:text-5xl font-semibold mb-6 leading-tight">Ready to Build Something?</h2>
            <p className="text-white/50 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you need a native iOS app, a full-stack web tool, or a machine learning solution — I bring strong fundamentals, real internship experience, and the drive to deliver results. Let&apos;s connect.
            </p>
            <Link href="mailto:abhinavraj00001@gmail.com" className="inline-flex items-center gap-2 bg-white text-black font-medium rounded-full px-8 py-4 text-base hover:bg-[#D9FF32] transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </section>

      <AboutFooter />
    </div>
  );
}
