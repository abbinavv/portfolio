import React from 'react';
import { Smartphone, Monitor, Disc, Network } from 'lucide-react';

const services = [
  {
    index: '01',
    title: 'Full Stack Developer',
    description: 'Building high-performance native iOS applications using Swift and SwiftUI. Creating seamless user experiences with elegant UI and robust architectures across the Apple ecosystem.',
    icon: <Smartphone className="w-6 h-6 text-[#111111]" />,
  },
  {
    index: '02',
    title: 'UI/UX Design & Frontend',
    description: 'Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.',
    icon: <Monitor className="w-6 h-6 text-[#111111]" />,
  },
  {
    index: '03',
    title: 'SaaS Platform Development',
    description: 'Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management. Ensuring scalability and secure user management.',
    icon: <Disc className="w-6 h-6 text-[#111111]" />,
  },
  {
    index: '04',
    title: 'API & System Architecture',
    description: 'Designing maintainable APIs with PostgreSQL, Prisma, and MongoDB. Focusing on performance optimization, security best practices, and reliable data flow.',
    icon: <Network className="w-8 h-8 text-[#111111]" />,
  },
];

const ServicesGrid = () => {
  return (
    <section className="w-full bg-[#E6E6E6] border-t border-b border-[rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full">
        {services.map((service, idx) => (
          <div
            key={service.index}
            className={`
              relative p-6 md:p-8 flex flex-col min-h-[320px] md:min-h-[360px] transition-colors duration-300 hover:bg-[#D9FF32]/5
              ${idx !== services.length - 1 ? 'border-b xl:border-b-0 xl:border-r border-[rgba(0,0,0,0.1)]' : ''}
              ${idx === 1 ? 'md:border-r xl:border-r' : ''}
              ${idx === 0 || idx === 1 ? 'md:border-b xl:border-b-0' : ''}
            `}
          >
            <span className="absolute top-6 md:top-8 right-6 md:right-8 text-xs font-medium text-[#666666] font-display">
              {service.index}
            </span>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-[#D9FF32] flex items-center justify-center">
                {service.icon}
              </div>
            </div>

            <div className="flex-grow flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-medium text-[#111111] font-display leading-tight">
                {service.title}
              </h3>
              
              <div className="mt-auto pt-4 border-t border-[rgba(0,0,0,0.1)]">
                <p className="text-[#666666] text-sm leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;