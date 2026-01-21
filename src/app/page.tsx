"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import { LazySection } from "@/components/lazy-section";

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
    <main>
      <Navigation />
      <HeroSection />
      
      <LazySection>
        <AboutIntro />
      </LazySection>
      
      <LazySection>
        <ScrollingMarquee />
      </LazySection>
      
      <LazySection>
        <ProfileStats />
      </LazySection>
      
      <LazySection>
        <ServicesGrid />
      </LazySection>
      
      <LazySection>
        <FeaturedProjects />
      </LazySection>
      
      <LazySection>
        <Footer />
      </LazySection>
    </main>
  );
}
