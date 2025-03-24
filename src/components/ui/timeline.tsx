import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    
    // Check if mobile view
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Calculate a shorter line height for mobile
  const lineHeight = isMobile ? height * 1 : height;

  return (
    <div
      className="w-full font-sans md:px-10 bg-[#ABC7E2] dark:bg-transparent"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-6 sm:py-10 md:py-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-md md:text-2xl max-w-sm">
          The following are the events and workshops we have conducted.
        </h1>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-4 sm:pb-10 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 sm:pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 sm:h-10 absolute left-3 md:left-3 w-8 sm:w-10 rounded-full bg-neutral-900 flex items-center justify-center">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-neutral-800 border border-neutral-700 p-1.5 sm:p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 sm:pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-lg sm:text-2xl mb-3 sm:mb-4 text-left font-bold text-white">
                {item.title}
              </h3>
              <div className="text-neutral-200 text-xs sm:text-sm font-normal mb-4 sm:mb-6 md:mb-8">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: lineHeight + "px",
          }}
          className="absolute md:left-8 left-6 sm:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-cyan-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
