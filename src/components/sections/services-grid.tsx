'use client';

import React from 'react';
import { Smartphone, Globe, BrainCircuit, Palette } from 'lucide-react';

const services = [
  {
    index: '01',
    title: 'iOS Development',
    description: 'Building native iOS applications using Swift, SwiftUI, ARKit, and CoreML. From AR furniture visualization to retail inventory systems with barcode scanning and real-time data.',
    icon: <Smartphone className="w-8 h-8 text-[#111111]" />,
  },
  {
    index: '02',
    title: 'Full-Stack Development',
    description: 'Developing end-to-end web applications with React, Flask, and Python. Implementing RESTful APIs, database design with PostgreSQL and Supabase, and clean frontend interfaces.',
    icon: <Globe className="w-8 h-8 text-[#111111]" />,
  },
  {
    index: '03',
    title: 'Machine Learning & AI',
    description: 'Applying TensorFlow, OpenCV, Scikit-learn, and CoreML to build intelligent systems. From real-time data visualization to predictive models and computer vision applications.',
    icon: <BrainCircuit className="w-8 h-8 text-[#111111]" />,
  },
  {
    index: '04',
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces with Figma and UIKit. Focused on user-centered design, clean design systems, interactive prototypes, and pixel-perfect implementation.',
    icon: <Palette className="w-8 h-8 text-[#111111]" />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="w-full bg-[#E6E6E6] border-t border-black/10 overflow-hidden">
      <div
        className="flex overflow-x-auto snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, idx) => (
          <div
            key={service.index}
            className="
              relative flex-shrink-0 snap-start
              w-[82vw] sm:w-[55vw] md:w-[42vw] lg:w-[33vw] xl:w-[25vw]
              flex flex-col
              min-h-[520px] lg:min-h-[580px]
              p-10 lg:p-12
              bg-[#EBEBEB]
              border-r border-black/10
            "
          >
            {/* Index */}
            <span className="absolute top-10 right-10 lg:top-12 lg:right-12 text-sm text-black/25 font-display">
              {service.index}
            </span>

            {/* Icon */}
            <div className="w-[72px] h-[72px] rounded-full bg-[#D9FF32] flex items-center justify-center mb-12 shrink-0">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-[1.9rem] md:text-[2.1rem] lg:text-[2.3rem] font-bold text-[#111111] font-display leading-[1.1] mb-auto">
              {service.title}
            </h3>

            {/* Divider + description */}
            <div className="mt-10 pt-7 border-t border-black/10">
              <p className="text-[#555] text-[0.9rem] leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
