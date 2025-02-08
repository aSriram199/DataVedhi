import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-black">
      <AuroraBackground className="bg-black">
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
          <div className="text-3xl md:text-7xl font-bold text-white text-center">
          Data Vedhi
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
            Where Innovation Meets Community
          </div>
          <p className="text-lg text-neutral-300 mb-8 max-w-2xl text-center">
            Join a vibrant community of tech enthusiasts, developers, and innovators shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-neutral-200 transition-colors">
              Join Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-white px-8 py-3 font-medium hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;