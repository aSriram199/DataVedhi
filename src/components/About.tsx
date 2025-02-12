import { BackgroundGradient } from "./ui/about-card";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-[#93c5fd] via-[#818cf8] to-[#3b82f6] dark:from-black dark:via-neutral-950 dark:to-neutral-950">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Story Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Our Story
          </h2>
          <p className="text-gray-300 mb-8">
            Founded in 0000, Data Vedhi is a community of data enthusiasts who are passionate about data.
            we conduct workshops, hackathons, and events to help people learn about data and data science.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24 px-4">
          {/* Mission Card */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Our Mission
            </h3>
           
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-8 bg-white dark:bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop"
                alt="Tech Workshop"
                className="object-cover rounded-lg w-full h-[300px]"
              />
              <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                Tech Workshops & Training
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              To empower individuals through technology education and foster a collaborative 
              environment where innovation thrives.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Learn More</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  Free
                </span>
              </button>
            </BackgroundGradient>
          </div>

          {/* Vision Card */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Our Vision
            </h3>
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-8 bg-white dark:bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
                alt="Tech Community"
                className="object-cover rounded-lg w-full h-[300px]"
              />
              <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                Community Events
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
              To be the leading tech community platform that bridges the gap between learning 
              and opportunity in the technology sector.
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Join Community</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  Members
                </span>
              </button>
            </BackgroundGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;







