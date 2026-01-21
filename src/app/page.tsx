"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import { LazySection } from "@/components/lazy-section";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const AboutIntro = dynamic(() => import("@/components/sections/about-intro"), {
  ssr: false,
});
const ScrollingMarquee = dynamic(() => import("@/components/sections/scrolling-marquee"), {
  ssr: false,
});
const ProfileStats = dynamic(() => import("@/components/sections/profile-stats"), {
  ssr: false,
});
const ServicesGrid = dynamic(() => import("@/components/sections/services-grid"), {
  ssr: false,
});
const FeaturedProjects = dynamic(() => import("@/components/sections/featured-projects"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/sections/footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative">
        <Navigation />
        <HeroSection />
        
        <LazySection zIndex={10} stickyOffset={0}>
          <AboutIntro />
        </LazySection>
        
        <LazySection zIndex={20} stickyOffset={0}>
          <ScrollingMarquee />
        </LazySection>
        
        <LazySection zIndex={30} stickyOffset={0}>
          <ProfileStats />
        </LazySection>
        
        <LazySection zIndex={40} stickyOffset={0}>
          <ServicesGrid />
        </LazySection>
        
        <LazySection zIndex={50} stickyOffset={0}>
          <FeaturedProjects />
        </LazySection>
        
        <LazySection zIndex={60} stickyOffset={0}>
          <Footer />
        </LazySection>
      </main>
    </SmoothScrollProvider>
  );
}
