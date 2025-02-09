import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
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
          <div className="text-3xl md:text-7xl font-bold text-black dark:text-white text-center">
            Data Vedhi
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-800 dark:text-neutral-200 py-4">
            Where Innovation Meets Community
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl text-center">
            Join a vibrant community of tech enthusiasts, developers, and innovators shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black dark:bg-white text-white dark:text-black rounded-full px-8 py-3 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
              Join Now
            </button>
            <button className="bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full text-black dark:text-white px-8 py-3 font-medium hover:bg-black/20 dark:hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-black dark:text-white" />
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;