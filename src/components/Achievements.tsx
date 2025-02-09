
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/Infinite-moving-cards";

const testimonials = [
  {
    quote: "Data Vedhi has transformed how we approach tech education. Their events are innovative and impactful.",
    name: "Sarah Johnson",
    title: "Tech Education Director",
  },
  {
    quote: "The community here is incredible. I've learned more in months than I did in years of traditional study.",
    name: "Michael Chen",
    title: "Software Developer",
  },
  {
    quote: "Their workshops on AI and machine learning opened new career opportunities for me.",
    name: "Priya Patel",
    title: "Data Scientist",
  },
  {
    quote: "The mentorship and networking opportunities at Data Vedhi are unmatched in the industry.",
    name: "Alex Rodriguez",
    title: "Startup Founder",
  },
  {
    quote: "Data Vedhi's commitment to fostering tech talent has significantly impacted our recruitment success.",
    name: "Emma Wilson",
    title: "HR Director, Tech Corp",
  },
];



const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-screen flex flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-white dark:text-white mb-4">
        Our Achievements
          </h2>
       
        </motion.div>
        
        <div className="w-full h-[40rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements; 