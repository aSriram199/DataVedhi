import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { ThemeToggle } from "./ui/theme-toggle";
import { cn } from "../lib/utils";
import { Menu as MenuIcon, X, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [excomOpen, setExcomOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
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

  const handleYearClick = (year: string) => {
    console.log('Navigating to ex-com with year:', year);
    navigate('/ex-com', { state: { year } });
    setIsMenuOpen(false);
    setActive(null);
    setExcomOpen(false);
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-3 md:hidden">
        <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
          <ThemeToggle />
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full bg-black/50 backdrop-blur-sm"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="fixed top-10 inset-x-0 max-w-[37.8rem] mx-auto z-50 hidden md:block">
        <div className="relative">
          <Menu setActive={setActive} className="bg-black/50 backdrop-blur-sm border-white/[0.2] py-4">
            <div className="flex items-center relative">
              <div className="flex-1 flex items-center justify-center gap-12 px-3 relative">
                <MenuItem setActive={setActive} active={active} item="Home" onClick={() => handleMenuClick('home')} />
                <MenuItem setActive={setActive} active={active} item="Events" onClick={() => handleMenuClick('events')}>
                  <div className="flex flex-col space-y-6 text-sm py-2">
                    <HoveredLink to="/upcoming-events">Upcoming Events</HoveredLink>
                    <HoveredLink to="#events">Past Events</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About" onClick={() => handleMenuClick('about')}>
                  <div className="flex flex-col space-y-6 text-sm py-2">
                    <HoveredLink to="#about">Our Story</HoveredLink>
                    <HoveredLink to="/our-team">Our Team</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem 
                  setActive={setActive} 
                  active={active} 
                  item="Ex-com" 
                  onClick={() => setActive('ex-com')}
                >
                  <div className="flex flex-col space-y-6 text-sm py-2 relative">
                    <button 
                      className="text-[14px] text-white/60 hover:text-white transition-colors text-left w-full font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleYearClick('2024-2025');
                      }}
                    >
                      2024-2025
                    </button>
                    <button 
                      className="text-[14px] text-white/60 hover:text-white transition-colors text-left w-full font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleYearClick('2023-2024');
                      }}
                    >
                      2023-2024
                    </button>
                    <button 
                      className="text-[14px] text-white/60 hover:text-white transition-colors text-left w-full font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleYearClick('2022-2023');
                      }}
                    >
                      2022-2023
                    </button>
                  </div>
                </MenuItem>

                <MenuItem setActive={setActive} active={active} item="Contact" onClick={() => handleMenuClick('contact')}>
                  <div className="flex flex-col space-y-6 text-sm py-2">
                    <HoveredLink to="#contact">Get in Touch</HoveredLink>
                    <HoveredLink to="/support">Support</HoveredLink>
                  </div>
                </MenuItem>
              </div>
              <div className="border-l border-white/[0.2] pl-3 ml-3 flex items-center h-[38px] relative">
                <ThemeToggle />
              </div>
            </div>
          </Menu>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "absolute top-20 inset-x-4 p-4 rounded-lg bg-black/50 backdrop-blur-sm border border-white/[0.2] transition-all duration-300",
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-1rem] opacity-0"
        )}>
          <div className="flex flex-col space-y-4">
            <button 
              className="text-white hover:text-neutral-200 transition-colors text-xl font-medium text-left"
              onClick={() => handleMenuClick('home')}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div className="space-y-2">
              <button 
                className="text-white hover:text-neutral-200 transition-colors text-xl font-medium text-left w-full flex items-center justify-between"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About
                {aboutOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {aboutOpen && (
                <div className="pl-4 space-y-2">
                  <button 
                    className="text-white/80 hover:text-white transition-colors text-lg font-medium text-left w-full"
                    onClick={() => handleMenuClick('about')}
                  >
                    Our Story
                  </button>
                  <button 
                    className="text-white/80 hover:text-white transition-colors text-lg font-medium text-left w-full"
                    onClick={() => {
                      navigate('/our-team');
                      setIsMenuOpen(false);
                    }}
                  >
                    Our Team
                  </button>
                </div>
              )}
            </div>

            {/* Events Dropdown */}
            <div className="space-y-2">
              <button 
                className="text-white hover:text-neutral-200 transition-colors text-xl font-medium text-left w-full flex items-center justify-between"
                onClick={() => setEventsOpen(!eventsOpen)}
              >
                Events
                {eventsOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {eventsOpen && (
                <div className="pl-4 space-y-2">
                  <button 
                    className="text-white/80 hover:text-white transition-colors text-lg font-medium text-left w-full"
                    onClick={() => {
                      navigate('/upcoming-events');
                      setIsMenuOpen(false);
                    }}
                  >
                    Upcoming Events
                  </button>
                  <button 
                    className="text-white/80 hover:text-white transition-colors text-lg font-medium text-left w-full"
                    onClick={() => handleMenuClick('events')}
                  >
                    Past Events
                  </button>
                </div>
              )}
            </div>

            <button 
              className="text-white hover:text-neutral-200 transition-colors text-xl font-medium text-left"
              onClick={() => handleMenuClick('contact')}
            >
              Contact
            </button>

            <div className="space-y-2">
              <button 
                className="text-white hover:text-neutral-200 transition-colors text-xl font-medium text-left w-full flex items-center justify-between"
                onClick={() => setExcomOpen(!excomOpen)}
              >
                Ex-com
                {excomOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {excomOpen && (
                <div className="pl-4 space-y-2">
                  <button 
                    className="text-[14px] text-white/60 hover:text-white transition-colors text-left w-full font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleYearClick('2024-2025');
                    }}
                  >
                    2024-2025
                  </button>
                  <button 
                    className="text-[14px] text-white/60 hover:text-white transition-colors text-left w-full font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleYearClick('2023-2024');
                    }}
                  >
                    2023-2024
                  </button>
                  <button 
                    className="text-[14px] text-white/60 hover:text-white transition-colors text-left w-full font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleYearClick('2022-2023');
                    }}
                  >
                    2022-2023
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}