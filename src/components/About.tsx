import { BackgroundGradient } from "./ui/about-card";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-[#93c5fd] via-[#818cf8] to-[#3b82f6] dark:from-black dark:via-neutral-950 dark:to-neutral-950">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Story Section */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
            Our Story
          </h2>
          <p className="text-gray-300 mb-8 text-justify text-sm sm:text-base md:text-lg">
          Datavedhi.club, the official Data Science club of VBIT, is dedicated to fostering a strong foundation in data-driven technologies. Established under the guidance of Dr. Y. Raju (HoD, Data Science) with faculty coordinator K. Kamal sir, the club provides a platform for students to explore Machine Learning, Artificial Intelligence, Data Analytics, and Big Data. By organizing hands-on workshops, hackathons, and industry collaborations, Datavedhi.club empowers aspiring data scientists to solve real-world problems with data-driven insights. The club encourages innovation, collaboration, and continuous learning to shape future leaders in the field of Data Science
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24 px-4">
          {/* Mission Card */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
              Our Mission
            </h3>
           
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-8 bg-white dark:bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop"
                alt="Tech Workshop"
                className="object-cover rounded-lg w-full h-[300px]"
              />
              <p className="text-sm sm:text-base md:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                Tech Workshops & Training
              </p>
              <p className="text-xs sm:text-sm text-justify text-neutral-600 dark:text-neutral-400">
              To cultivate a dynamic learning environment by organizing hackathons, flagship events, and workshops in Data Science. Equip students with practical skills in AI, Machine Learning, and Data Analytics through hands-on experience. Bridge the gap between academia and industry, empowering future data professionals to solve real-world challenges.
              </p>
            </BackgroundGradient>
          </div>

          {/* Vision Card */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
              Our Vision
            </h3>
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-8 bg-white dark:bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
                alt="Tech Community"
                className="object-cover rounded-lg w-full h-[300px]"
              />
              <p className="text-sm sm:text-base md:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                Community Events
              </p>
              <p className="text-xs sm:text-sm text-justify text-neutral-600 dark:text-neutral-400">
              To be a leading Data Science community that nurtures innovation through hackathons, flagship events, and workshops. Empower students with industry-relevant skills to solve real-world data challenges. Foster a culture of continuous learning, collaboration, and technological advancement in AI, Machine Learning, and Data Analytics.
              </p>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;







