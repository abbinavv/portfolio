import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "AI Assistant",
    category: "Vexlogic",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/p-vexlogic-ai-assistant_1a9ca26b-3.jpg",
    alt: "Vexlogic AI Assistant Mockup",
    span: "col-span-1",
  },
  {
    title: "Bussiness",
    category: "Business Expander",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/p-vexlogic-business-expander_84d3869a-4.jpg",
    alt: "Business Expander Mockup",
    span: "col-span-1",
  },
  {
    title: "3D Visualisation",
    category: "Comra",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/p-comra_66d67f23-5.jpg",
    alt: "Comra 3D Visualisation Mockup",
    span: "col-span-1",
  },
  {
    title: "Property Booking",
    category: "Super Host",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/super-host-phone_6e0451d2-6.jpg",
    alt: "Super Host Property Booking Mockup",
    span: "col-span-1",
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#E6E6E6] font-cabinetGrotesk">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4 group cursor-pointer">
              {/* Labels Above Image */}
              <div className="flex justify-between items-end px-1">
                <span className="text-[0.8rem] text-muted-foreground uppercase tracking-widest">
                  {project.title}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-muted/20">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-16 md:mt-24">
          <div className="flex items-center">
            {/* Pill Part */}
            <a 
              href="/works"
              className="bg-[#D9FF32] text-black h-14 px-10 rounded-full flex items-center justify-center font-medium text-lg hover:bg-neutral-900 hover:text-[#D9FF32] transition-colors duration-300 -mr-2 z-10"
            >
              projects
            </a>
            {/* Circle Icon Part */}
            <div className="w-14 h-14 bg-[#D9FF32] rounded-full flex items-center justify-center text-black border-l-2 border-[#E6E6E6]">
              <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;