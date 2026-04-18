"use client";

import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AboutIntro from "@/components/sections/about-intro";
import ScrollingMarquee from "@/components/sections/scrolling-marquee";
import ProfileStats from "@/components/sections/profile-stats";
import ServicesGrid from "@/components/sections/services-grid";
import FeaturedProjects from "@/components/sections/featured-projects";
import WorkExperienceTimeline from "@/components/sections/work-experience-timeline";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutIntro />
      <ScrollingMarquee />
      <ProfileStats />
      <ServicesGrid />
      <FeaturedProjects />
      <WorkExperienceTimeline />
      <Footer />
    </main>
  );
}
