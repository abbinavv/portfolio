'use client';

import React, { useEffect, useRef, ReactNode } from 'react';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const rafId = useRef<number | null>(null);
  const ease = 0.08;

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const body = document.body;
    const html = document.documentElement;

    const setBodyHeight = () => {
      body.style.height = `${element.scrollHeight}px`;
    };

    const smoothScroll = () => {
      targetScroll.current = window.scrollY;
      const diff = targetScroll.current - currentScroll.current;
      const delta = Math.abs(diff) < 0.1 ? 0 : diff * ease;
      
      if (delta !== 0) {
        currentScroll.current += delta;
        element.style.transform = `translate3d(0, ${-currentScroll.current}px, 0)`;
      }
      
      rafId.current = requestAnimationFrame(smoothScroll);
    };

    setBodyHeight();
    element.style.position = 'fixed';
    element.style.top = '0';
    element.style.left = '0';
    element.style.width = '100%';
    element.style.willChange = 'transform';

    const resizeObserver = new ResizeObserver(setBodyHeight);
    resizeObserver.observe(element);

    rafId.current = requestAnimationFrame(smoothScroll);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      resizeObserver.disconnect();
      body.style.height = '';
      html.style.overflow = '';
    };
  }, []);

  return (
    <div ref={scrollRef}>
      {children}
    </div>
  );
}
