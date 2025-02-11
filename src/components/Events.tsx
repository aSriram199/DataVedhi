import { Timeline } from "../components/ui/timeline";
import { motion } from "framer-motion";

const EVENTS = [
  {
    id: 1,
    title: 'Advanced AI Workshop',
    category: 'Workshop',
    date: '2024-03-25',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    description: 'Deep dive into artificial intelligence and machine learning.',
  },
  {
    id: 2,
    title: 'Data Science Summit',
    category: 'Conference',
    date: '2024-02-15',
    image: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a?auto=format&fit=crop&q=80',
    description: 'Exploring the latest trends in data science and analytics.',
  },
  {
    id: 3,
    title: 'Web3 Development',
    category: 'Workshop',
    date: '2023-11-10',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    description: 'Building decentralized applications with blockchain technology.',
  },
  {
    id: 4,
    title: 'Cloud Computing Conference',
    category: 'Conference',
    date: '2023-08-20',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    description: 'Latest advancements in cloud technologies and infrastructure.',
  },
  {
    id: 5,
    title: 'Cybersecurity Symposium',
    category: 'Conference',
    date: '2022-12-05',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    description: 'Advanced security protocols and threat prevention.',
  },
  {
    id: 6,
    title: 'Mobile App Development',
    category: 'Workshop',
    date: '2022-07-15',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80',
    description: 'Creating cross-platform mobile applications.',
  },
];

const Events = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Advancing Technology Frontiers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 sm:px-4">
            {EVENTS.filter(event => event.date.startsWith('2024')).map(event => (
              <div key={event.id} className="relative group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg object-cover h-48 sm:h-44 lg:h-60 w-full shadow-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-white/80 text-sm sm:text-base">{event.description}</p>
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
                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
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
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Foundation and Early Success
          </p>
          <div className="grid grid-cols-2 gap-4">
            {EVENTS.filter(event => event.date.startsWith('2022')).map(event => (
              <div key={event.id} className="relative group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
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