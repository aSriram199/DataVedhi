import { Mail,  Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';
import { FloatingDock } from "./ui/floating-dock";

const Contact = () => {
  const links = [
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:vbit.datavedhi@gmail.com",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://twitter.com/datavedhi",
    },
    {
      title: "LinkedIn",
      icon: <LinkedIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/company/data-vedhi-club-vbit/",
    },
    {
      title: "Instagram",
      icon: <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.instagram.com/datavedhi.club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];

  return (
    <section id="contact" className="relative h-[60vh] sm:h-[40vh] md:h-[40vh] bg-gradient-to-b from-[#3b82f6] via-[#818cf8] to-[#93c5fd] dark:from-black dark:via-neutral-950 dark:to-neutral-950">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Desktop View */}
      <div className="relative hidden md:flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-10">Contact Us</h2>
        <div className="flex items-center justify-center w-full">
          <FloatingDock
            items={links}
            desktopClassName="scale-100"
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative md:hidden h-full flex flex-col justify-center">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-3">Contact Us</h2>
          <p className="text-gray-300 text-base">vbit.datavedhi@gmail.com</p>
        </div>
        
        <div className="flex justify-center items-center gap-6">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <div className="h-5 w-5">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;