import { BackgroundBeams } from "./ui/background-line";
import { Carousel } from "./ui/carousel";


const slideData = [
  {
    title: "Web Workshop",
    button: "Register",
    src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=3374&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "React Workshop",
    button: "Register",
    src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
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
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <p className="z-30 text-white text-2xl font-bold pb-5">Upcoming Events</p>
      <BackgroundBeams />
      <div className="z-30">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};

export default UpcomingEvents; 












