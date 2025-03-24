import { FocusCards } from "./ui/focus-cards";

const OurTeam = () => {
  const coreTeamCards = [
    {
      title: "John Doe - Team Lead",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Jane Smith - Senior Developer",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Mike Johnson - Designer",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Sarah Williams - Project Manager",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Alex Chen - Technical Architect",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "Emma Davis - Product Owner",
      src: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=2940&auto=format&fit=crop", 
    },
    {
      title: "Emma Davis - Product Owner",
      src: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=2940&auto=format&fit=crop", 
    },
    {
      title: "Emma Davis - Product Owner",
      src: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=2940&auto=format&fit=crop", 
    }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8 pt-32">
      <div className="relative">
        {/* Core Team Section */}
        <section className="mb-32 container mx-auto max-w-7xl">
          <h1 className="text-2xl mt-5 sm:text-3xl md:text-4xl font-bold text-white mb-16 text-center">Core Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {coreTeamCards.map((card, index) => (
              <div key={index} className="w-full">
                <FocusCards cards={[card]} />
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Sections */}
        <section className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-16 text-center">Portfolios</h2>
          {portfolioSections.map((section, index) => (
            <div key={index} className="mb-32">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-12 text-center">{section.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {section.cards.map((card, cardIndex) => (
                  <div key={cardIndex} className="w-full">
                    <FocusCards cards={[card]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OurTeam; 



