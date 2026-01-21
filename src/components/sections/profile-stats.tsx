import React from 'react';
import Image from 'next/image';

/**
 * ProfileStats Component
 * 
 * featuring a large grayscale image of the developer sitting,
 * followed by a statistics row showing "4+ Years of Experience" and "30+ Projects Completed."
 */
const ProfileStats: React.FC = () => {
  return (
    <section className="relative w-full bg-[#E6E6E6] font-display flex flex-col items-center pt-24 pb-32">
      {/* Profile Image Container */}
      <div className="container max-w-[1280px] px-8 lg:px-16 flex flex-col items-center">
        <div className="relative w-full group overflow-hidden bg-[#D1D1D1]/20 rounded-lg">
          {/* Grayscale image that transitions on hover */}
          <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[16/9] w-full overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/11924a9c-dc90-419c-887e-5382d3ba8158-azizkhaldi-com/assets/images/me-sitting_37df8593-2.png"
              alt="Abhinav Raj - Full Stack Developer Sitting"
              fill
              priority
              className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        </div>

        {/* Statistics Row */}
        <div className="w-full mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Experience Stat */}
          <div className="flex flex-col space-y-4 border-t border-black/10 pt-8">
            <span className="text-[0.75rem] font-medium tracking-[0.2em] text-black/50 uppercase">
              Years of Experience
            </span>
            <div className="flex items-baseline">
              <span className="text-[5rem] md:text-[6rem] lg:text-[8rem] font-medium leading-[0.9] tracking-tighter">
                4+
              </span>
            </div>
          </div>

          {/* Projects Stat */}
          <div className="flex flex-col space-y-4 border-t border-black/10 pt-8">
            <span className="text-[0.75rem] font-medium tracking-[0.2em] text-black/50 uppercase">
              Projects Completed
            </span>
            <div className="flex items-baseline">
              <span className="text-[5rem] md:text-[6rem] lg:text-[8rem] font-medium leading-[0.9] tracking-tighter">
                30+
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileStats;