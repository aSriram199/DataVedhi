import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { ThemeToggle } from "./ui/theme-toggle";
import { cn } from "../lib/utils";
import { Menu as MenuIcon, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black/50 backdrop-blur-sm md:hidden"
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MenuIcon className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Desktop Menu */}
      <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 hidden md:block">
        <Menu setActive={setActive} className="bg-black/50 backdrop-blur-sm border-white/[0.2]">
          <MenuItem setActive={setActive} active={active} item="Home" onClick={() => handleMenuClick('home')} />
          <MenuItem setActive={setActive} active={active} item="Events" onClick={() => handleMenuClick('events')}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="/upcoming-events">Upcoming Events</HoveredLink>
              <HoveredLink to="#events">Past Events</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="About" onClick={() => handleMenuClick('about')}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="#about">Our Story</HoveredLink>
              <HoveredLink to="/our-team">Our Team</HoveredLink>
            </div>
          </MenuItem>
         
          <MenuItem setActive={setActive} active={active} item="Contact" onClick={() => handleMenuClick('contact')}>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink to="#contact">Get in Touch</HoveredLink>
              <HoveredLink to="#contact">Support</HoveredLink>
            </div>
          </MenuItem>
          <div className="border-l border-white/[0.2] pl-4 ml-4">
            <ThemeToggle />
          </div>
        </Menu>
      </div>

      {/* Updated Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          className={cn(
            "absolute inset-0 flex flex-col items-start justify-center p-8 space-y-8 transition-all duration-300",
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-1rem] opacity-0"
          )}
        >
          <Link 
            to="/"
            className="text-white hover:text-neutral-300 transition-colors text-2xl font-medium"
            onClick={() => {
              handleMenuClick('home');
              setIsMenuOpen(false);
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/about"
            className="text-white hover:text-neutral-300 transition-colors text-2xl font-medium"
            onClick={() => {
              handleMenuClick('about');
              setIsMenuOpen(false);
            }}
          >
            About
          </Link>

          <Link 
            to="/events"
            className="text-white hover:text-neutral-300 transition-colors text-2xl font-medium"
            onClick={() => {
              handleMenuClick('events');
              setIsMenuOpen(false);
            }}
          >
            Events
          </Link>

          <Link 
            to="/contact"
            className="text-white hover:text-neutral-300 transition-colors text-2xl font-medium"
            onClick={() => {
              handleMenuClick('contact');
              setIsMenuOpen(false);
            }}
          >
            Contact
          </Link>

          <Link 
            to="/our-team"
            className="text-white hover:text-neutral-300 transition-colors text-2xl font-medium"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Our Team
          </Link>

          <Link 
            to="/upcoming-events"
            className="text-white hover:text-neutral-300 transition-colors text-2xl font-medium"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Upcoming Events
          </Link>

          <div className="pt-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}