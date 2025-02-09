import { Mail,  Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';
import { FloatingDock } from "./ui/floating-dock";

const Contact = () => {
  const links = [
    {
      title: "Email",
      icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:contact@datavedhi.com",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://twitter.com/datavedhi",
    },
    {
      title: "LinkedIn",
      icon: <LinkedIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://linkedin.com/company/datavedhi",
    },
    {
      title: "Instagram",
      icon: <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://instagram.com/datavedhi",
    },
  ];

  return (
    <section id="contact" className="relative h-[40vh] bg-gradient-to-b from-[#93c5fd] via-[#818cf8] to-[#3b82f6] dark:from-black dark:via-neutral-950 dark:to-neutral-950">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative h-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
        <div className="flex items-center justify-center h-[14rem] w-full">
          <FloatingDock
            items={links}
            mobileClassName="translate-y-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;