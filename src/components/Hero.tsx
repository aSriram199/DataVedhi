import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { ArrowDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Hero = () => {
  // Function to handle scroll down when arrow is clicked
  const handleScrollDown = () => {
    // Find the next section (events section)
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-b from-[#e5e2df] via-[#bad5ef] to-[#9bc3e1] dark:from-black dark:via-neutral-950 dark:to-neutral-950">
      <AuroraBackground className="bg-transparent dark:bg-transparent">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 h-screen"
        >
          <motion.img
            src={logo}
            alt="Data Vedhi Club Logo"
            className="w-40 h-40 object-contain mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          />
          <div className="text-3xl md:text-7xl font-bold text-black dark:text-white text-center">
            Data Vedhi
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-800 dark:text-neutral-200 py-4">
            Where Innovation Meets Community
          </div>
          <p className="text-lg  text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl text-center">
           A vibrant community of tech enthusiasts, developers, and innovators shaping the future of technology.
          </p>
        </motion.div>
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={handleScrollDown}
          aria-label="Scroll down"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleScrollDown();
            }
          }}
        >
          <ArrowDown className="w-6 h-6 text-black dark:text-white" />
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;