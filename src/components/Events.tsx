import { Timeline } from "../components/ui/timeline";
import { motion } from "framer-motion";

const EVENTS = [
  {
    id: 1,
    title: 'IGNIS XR-AI: Learn, Hack, Relish',
    category: 'Hackathon',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    description: 'A three-day technical event focused on Extended Reality (XR) and Artificial Intelligence (AI), featuring workshops, hackathon, and industry collaboration with TalentFarm.ai and Digital Motive Technologies.',
  },
  {
    id: 2,
    title: 'BI Nexus: A Power BI Odyssey',
    category: 'Workshop',
    date: '2024-03-04',
    image: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&q=80',
    description: 'An immersive one-day workshop on Business Intelligence and Analytics using Microsoft Power BI, providing hands-on experience in data visualization and analysis.',
  },
  {
    id: 3,
    title: 'TechFiesta 2K23',
    category: 'Flagship Event',
    date: '2023-10-15',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    description: 'A grand tech fest featuring 3+ technical competitions, two-day bootcamp, and 24-hour hackathon focused on AI, Machine Learning, and Data Science.',
  },
  {
    id: 4,
    title: 'VAIDHUSHI',
    category: 'Flagship Event',
    date: '2023-08-20',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    description: 'A hands-on bootcamp focused on R programming and Data Mining techniques, providing practical exposure to real-world data analysis.',
  }
];

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
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-2">{event.title}</h3>
                    <p className="text-white/80 text-sm">{event.description}</p>
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
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-2">{event.title}</h3>
                    <p className="text-white/80 text-sm">{event.description}</p>
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
    <section id="events" className="relative min-h-screen bg-gradient-to-b from-[#3b82f6] via-[#818cf8] to-[#93c5fd] dark:from-neutral-950 dark:via-black dark:to-neutral-950 py-10 sm:py-20">
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
          <div className="text-2xl sm:text-3xl md:text-7xl font-bold text-white text-center pt-20">
            Events and Workshops
          </div>
          <div className="font-extralight text-sm sm:text-base md:text-xl text-neutral-200 py-4 text-center max-w-3xl mx-auto">
            We have conducted a number of events and workshops to help students and professionals to learn and grow.
          </div>
          <Timeline data={timelineData} />
        </motion.div>
      </div>
    </section>
  );
};

export default Events;