import { FocusCards } from "../components/ui/focus-cards";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/background-stars";

const OurTeam = () => {
  const coreTeamCards = [
    {
      title: "John Doe - Team Lead",
      src: "",
    },
    {
      title: "Jane Smith - Senior Developer",
       src: "",
    },
    {
      title: "Mike Johnson - Designer",
      src: "",
    },
    {
      title: "Sarah Williams - Project Manager",
      src: "",
    },
    {
      title: "Alex Chen - Technical Architect",
      src: "",
    },
    {
      title: "Emma Davis - Product Owner",
      src: "", 
    }
  ];

  const portfolioSections = [
    {
      title: "Technical Team",
      cards: [
        { title: "sedf", src: "" },
        { title: "Backend Developer", src: "" },
        { title: "DevOps Engineer", src: "" },
        { title: "Ashik Gottam", src: "images/technical-team/G.ASHIK.png" }
      ]
    },
    {
      title: "Documentation Team",
      cards: [
        { title: "Technical Writer", src: "" },
        { title: "Bhumika Macharla", src: "/images/doc-team/Bhumika Macharla.png" },
        { title: "Jonathan Raj", src: "/images/doc-team/Jonathan Raj.png" },
        { title: "Harshith Baddam", src: "/images/doc-team/Harshith Baddam.png" }
      ]
    },
    {
      title: "Design Team",
      cards: [
        { title: "TUMU MANISH", src: "/images/design-team/TUMU MANISH.png" },
        { title: "THAVVA JAYASIMHA REDDY", src: "/images/design-team/THAVVA JAYASIMHA REDDY.png" },
        { title: "Deepthi priya", src: "/images/design-team/Deepthi Priya.png" },
        { title: "Gnanika Naidu", src: "/images/design-team/Gnanika Naidu.png" }
      ]
    },
    {
      title: "Project Team",
      cards: [
        { title: "Akshay Patel", src: "/images/project-team/Akshay.png" },
        { title: "Gayatri Gurram", src: "/images/project-team/Gayathri Gurram.png" },
        { title: "Arutla Sowmya", src: "/images/project-team/Arutla Sowmya.png" },
        { title: "Project Manager", src: "" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 p-8 pt-32 relative">
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
        <section className="mb-32 container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-white mb-16 text-center">Core Team</h1>
          <FocusCards cards={coreTeamCards} />
        </section>

        {/* Portfolio Sections */}
        <section className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Portfolios</h2>
          {portfolioSections.map((section, index) => (
            <div key={index} className="mb-32">
              <h3 className="text-2xl font-semibold text-white mb-12 text-center">{section.title}</h3>
              <FocusCards cards={section.cards} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OurTeam; 



