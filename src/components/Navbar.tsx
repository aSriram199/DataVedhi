import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  const handleMenuClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
        <Menu setActive={setActive} className="bg-black/50 backdrop-blur-sm border-white/[0.2]">
          <MenuItem setActive={setActive} active={active} item="Home" onClick={() => handleMenuClick('home')} />
          <MenuItem setActive={setActive} active={active} item="About" onClick={() => handleMenuClick('about')}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="about">Our Story</HoveredLink>
              <HoveredLink to="about">Our Mission</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Events" onClick={() => handleMenuClick('events')}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="events">Upcoming Events</HoveredLink>
              <HoveredLink to="events">Past Events</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Achievements" onClick={() => handleMenuClick('about')}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="about">Awards</HoveredLink>
              <HoveredLink to="about">Recognition</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact" onClick={() => handleMenuClick('contact')}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="contact">Get in Touch</HoveredLink>
              <HoveredLink to="contact">Support</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}