
import { Carousel } from "./ui/carousel";

const slideData = [
  {
    title: "Hackathon",
    button: "Register",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "AI Workshop",
    button: "Register",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="min-h-screen w-full rounded-md dark:bg-neutral-950 bg-white relative flex flex-col items-center justify-center antialiased overflow-hidden text-slate-800 dark:text-white">
      <div className="max-w-6xl mx-auto p-4 w-full relative z-10">
        <h1 className="relative z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Upcoming Events
        </h1>
        
        <div className="relative z-10 mt-8 w-full max-w-full">
          <Carousel slides={slideData} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents; 












