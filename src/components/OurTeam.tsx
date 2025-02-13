import { FocusCards } from "./ui/focus-cards";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/background-stars";

const OurTeam = () => {
  const coreTeamCards = [
    // Top Row (2)
    {
      title: "Dr. Y. Raju - HOD",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "K. Kamal - Faculty Coordinator",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
    },
    // Middle Row (3)
    {
      title: "John Doe - President",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Jane Smith - Vice President",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Mike Johnson - Secretary",
      src: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=2940&auto=format&fit=crop",
    },
    // Bottom Row (2)
    {
      title: "Sarah Williams - Joint Secretary",
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Alex Chen - Treasurer",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  const portfolioSections = [
    {
      title: "Technical Team",
      cards: [
        { title: "Frontend Developer", src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2940&auto=format&fit=crop" },
        { title: "Backend Developer", src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2940&auto=format&fit=crop" },
        { title: "DevOps Engineer", src: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=2940&auto=format&fit=crop" },
        { title: "Mobile Developer", src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop" }
      ]
    },
    {
      title: "Documentation Team",
      cards: [
        { title: "Technical Writer", src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" },
        { title: "Content Lead", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" },
        { title: "Editor", src: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2940&auto=format&fit=crop" },
        { title: "Content Researcher", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop" }
      ]
    },
    {
      title: "Design Team",
      cards: [
        { title: "UI Designer", src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop" },
        { title: "UX Designer", src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop" },
        { title: "Graphic Designer", src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2940&auto=format&fit=crop" },
        { title: "Motion Designer", src: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2940&auto=format&fit=crop" }
      ]
    },
    {
      title: "Project Team",
      cards: [
        { title: "Project Lead", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop" },
        { title: "Scrum Master", src: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2940&auto=format&fit=crop" },
        { title: "Product Owner", src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2940&auto=format&fit=crop" },
        { title: "Project Manager", src: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=2940&auto=format&fit=crop" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 p-2 sm:p-4 md:p-8 pt-24 sm:pt-28 md:pt-32 relative">
      <ShootingStars 
        minSpeed={10} 
        maxSpeed={30} 
        minDelay={1000} 
        maxDelay={1000}
        starColor="#9E00FF"
        trailColor="#2EB9DF"
        starWidth={12}
        starHeight={1}
      />
      <StarsBackground 
        starDensity={0.0009}
        allStarsTwinkle={true}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={0.5}
        twinkleProbability={0.9}
      />
      <div className="relative z-10">
        {/* Core Team Section */}
        <section className="mb-16 sm:mb-24 md:mb-32 container mx-auto max-w-7xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 md:mb-16 text-center">
            Core Team
          </h1>
          
          {/* Desktop View (2-3-2) */}
          <div className="hidden md:block">
            <div className="mb-4">
              <FocusCards cards={coreTeamCards.slice(0, 2)} />
            </div>
            <div className="mb-4">
              <FocusCards cards={coreTeamCards.slice(2, 5)} />
            </div>
            <div>
              <FocusCards cards={coreTeamCards.slice(5, 7)} />
            </div>
          </div>

          {/* Mobile View (1-2-2-2) */}
          <div className="md:hidden">
            <div className="mb-4">
              <FocusCards cards={coreTeamCards.slice(0, 1)} isMobile={true} />
            </div>
            <div className="mb-4">
              <FocusCards cards={coreTeamCards.slice(1, 3)} isMobile={true} />
            </div>
            <div className="mb-4">
              <FocusCards cards={coreTeamCards.slice(3, 5)} isMobile={true} />
            </div>
            <div>
              <FocusCards cards={coreTeamCards.slice(5, 7)} isMobile={true} />
            </div>
          </div>
        </section>

        {/* Portfolio Sections */}
        <section className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 md:mb-16 text-center">
            Portfolios
          </h2>
          {portfolioSections.map((section, index) => (
            <div key={index} className="mb-16 sm:mb-24 md:mb-32">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 md:mb-12 text-center">
                {section.title}
              </h3>
              <FocusCards cards={section.cards} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OurTeam; 



