import { Timeline } from "../components/ui/timeline";

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
          <div className="grid grid-cols-2 gap-4">
            {EVENTS.filter(event => event.date.startsWith('2024')).map(event => (
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
    <section id="events" className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      <div className="w-full">
       
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default Events;