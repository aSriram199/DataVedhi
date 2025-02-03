import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80') no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          TechHub Community
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
          Where Innovation Meets Community
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          Join a vibrant community of tech enthusiasts, developers, and innovators shaping the future of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors">
            Join Now
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold backdrop-blur-sm transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;