import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Orbit, Menu, X, ArrowUpRight, Clock } from "lucide-react";

interface NavbarProps {
  onScrollTo: (id: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollTo, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as HH:MM:SS format
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString("en-GB", options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { label: "Portfolio", id: "projects" },
    { label: "Our Process", id: "process" },
    { label: "Estimate Cost", id: "estimator" },
    { label: "Designer", id: "designer" },
  ];

  return (
    <motion.header 
      id="site-header"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:pt-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-neutral-900/90 text-neutral-100 backdrop-blur-md px-4 py-3 md:px-6 rounded-2xl border border-neutral-800/80 shadow-2xl pointer-events-auto">
        {/* Brand Logo */}
        <button 
          id="nav-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
          className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-neutral-50 hover:opacity-85 transition-opacity duration-300 pointer-events-auto cursor-pointer"
        >
          <div id="nav-logo-icon" className="h-6 w-6 rounded-lg bg-white text-neutral-950 flex items-center justify-center font-mono text-xs font-bold shadow-sm">
            SO
          </div>
          <span className="hidden sm:inline">Stefan Ojietu</span>
          <span className="text-neutral-400 font-normal text-xs font-mono hidden md:inline ml-1 border-l border-neutral-800 pl-3">
            WEB DESIGN
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onScrollTo(item.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium tracking-tight transition-all duration-300 relative cursor-pointer ${
                  isActive ? "text-neutral-950 font-semibold" : "text-neutral-400 hover:text-neutral-100"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Info: Time Clock / Free Consultation */}
        <div id="nav-right-actions" className="flex items-center gap-4">
          {/* Time dynamic widget */}
          <div id="dynamic-time-widget" className="hidden lg:flex items-center gap-1.5 bg-neutral-800/50 border border-neutral-700/30 px-3 py-1 rounded-lg text-neutral-300 font-mono text-[10px] tracking-widest uppercase">
            <Clock className="h-3 w-3 animate-pulse text-indigo-400" />
            <span>UTC {currentTime}</span>
          </div>

          <button
            id="nav-cta-btn"
            onClick={() => onScrollTo("estimator")}
            className="hidden sm:flex items-center gap-1 bg-white text-neutral-950 font-semibold text-xs py-2 px-3.5 rounded-xl hover:bg-neutral-100 active:scale-95 transition-all duration-200 cursor-pointer shadow-md shadow-black/10"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile hamburger menu */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-neutral-100 rounded-lg hover:bg-neutral-800/40 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-4 right-4 mt-2 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl shadow-black/40 p-4 overflow-hidden md:hidden pointer-events-auto"
          >
            <div id="mobile-menu-links-container" className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => {
                    onScrollTo(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-tight transition-all text-neutral-300 hover:bg-neutral-800/50 ${
                    activeSection === item.id ? "bg-neutral-800 text-white" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-neutral-800 mt-2 pt-3 flex flex-col gap-2">
                <div id="mobile-time-indicator" className="flex items-center gap-1.5 px-3 py-2 text-neutral-400 font-mono text-[10px] tracking-wider">
                  <Clock className="h-3.5 w-3.5 text-indigo-400" />
                  <span>UTC TIME: {currentTime}</span>
                </div>
                <button
                  id="mobile-cta-btn"
                  onClick={() => {
                    onScrollTo("estimator");
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-1 bg-white text-neutral-950 font-bold text-sm py-3 rounded-xl hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Request Estimate</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
