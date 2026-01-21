"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  stickyOffset?: number;
  zIndex?: number;
}

export function LazySection({
  children,
  className = "",
  threshold = 0.05,
  rootMargin = "200px",
  stickyOffset = 0,
  zIndex = 1,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (!hasLoaded) return;
    
    let rafId: number;
    
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const startTrigger = windowHeight;
        const endTrigger = -rect.height * 0.5;
        
        let progress = 0;
        if (rect.top <= startTrigger && rect.top >= endTrigger) {
          progress = (startTrigger - rect.top) / (startTrigger - endTrigger);
        } else if (rect.top < endTrigger) {
          progress = 1;
        }
        
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasLoaded]);

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  const easedProgress = easeOutCubic(scrollProgress);
  
  const opacity = 0.3 + easedProgress * 0.7;
  const translateY = (1 - easedProgress) * 30;
  const scale = 0.97 + easedProgress * 0.03;

  return (
    <div
      ref={ref}
      className={`${className} will-change-transform`}
      style={{
        position: "sticky",
        top: stickyOffset,
        zIndex: zIndex,
        opacity: isVisible ? opacity : 0,
        transform: isVisible 
          ? `translate3d(0, ${translateY}px, 0) scale(${scale})`
          : 'translate3d(0, 40px, 0) scale(0.95)',
        transition: isVisible ? 'none' : 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {hasLoaded ? children : <div className="min-h-[50vh]" />}
    </div>
  );
}
