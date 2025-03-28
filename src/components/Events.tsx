import { Timeline } from "../components/ui/timeline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from '../assets/logo.png';

// Default event images - using the existing logo for all images
const EVENT_IMAGES = {
  hackathon: logo,
  workshop: logo,
  flagship: logo,
  default: logo
};

const EVENTS = [
  {
    id: 1,
    title: 'IGNIS XR-AI: Learn, Hack, Relish',
    category: 'Hackathon',
    date: '2024-03-15',
    image: EVENT_IMAGES.hackathon,
    description: 'A three-day technical event focused on Extended Reality (XR) and Artificial Intelligence (AI), featuring workshops, hackathon, and industry collaboration with TalentFarm.ai and Digital Motive Technologies.',
  },
  {
    id: 2,
    title: 'BI Nexus: A Power BI Odyssey',
    category: 'Workshop',
    date: '2024-03-04',
    image: EVENT_IMAGES.workshop,
    description: 'An immersive one-day workshop on Business Intelligence and Analytics using Microsoft Power BI, providing hands-on experience in data visualization and analysis.',
  },
  {
    id: 3,
    title: 'TechFiesta 2K23',
    category: 'Flagship Event',
    date: '2023-10-15',
    image: EVENT_IMAGES.flagship,
    description: 'A grand tech fest featuring 3+ technical competitions, two-day bootcamp, and 24-hour hackathon focused on AI, Machine Learning, and Data Science.',
  },
  {
    id: 4,
    title: 'VAIDHUSHI',
    category: 'Flagship Event',
    date: '2023-08-20',
    image: EVENT_IMAGES.flagship,
    description: 'A hands-on bootcamp focused on R programming and Data Mining techniques, providing practical exposure to real-world data analysis.',
  }
];

// Simple image component with loading state
interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const EventImage = ({ src, alt, className }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Use default image if there's an error loading the specified image
  const imageSrc = error ? EVENT_IMAGES.default : src;

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setError(true);
          setIsLoaded(true);
        }}
      />
    </div>
  );
};

const Events = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Innovation and Growth
          </p>
          <div className="grid grid-cols-2 gap-4">
            {EVENTS.filter(event => event.date.startsWith('2024')).map(event => (
              <div key={event.id} className="relative group">
                <EventImage
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-sm sm:text-base md:text-lg text-white font-semibold mb-2">{event.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Innovation and Growth
          </p>
          <div className="grid grid-cols-2 gap-4">
            {EVENTS.filter(event => event.date.startsWith('2023')).map(event => (
              <div key={event.id} className="relative group">
                <EventImage
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-sm sm:text-base md:text-lg text-white font-semibold mb-2">{event.title}</h3>
                    <p className="text-xs sm:text-sm text-white/80">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="events" className="relative md:min-h-screen h-auto bg-gradient-to-b from-[#ABC7E2] via-[#818cf8] to-[#93c5fd] dark:from-neutral-950 dark:via-black dark:to-neutral-950 py-6 sm:py-10 md:py-20">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="text-xl sm:text-3xl md:text-7xl font-bold text-white text-center pt-10 md:pt-20">
            Events and Workshops
          </div>
          <div className="font-extralight text-xs sm:text-sm md:text-xl text-neutral-200 py-4 text-center max-w-3xl mx-auto">
            We have conducted a number of events and workshops to help students and professionals to learn and grow.
          </div>
          <Timeline data={timelineData} />
        </motion.div>
      </div>
    </section>
  );
};

export default Events;