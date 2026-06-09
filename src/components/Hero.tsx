import { motion } from "motion/react";
import { ArrowDown, CheckCircle, GraduationCap, Building2, Briefcase } from "lucide-react";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const specializations = [
    {
      icon: GraduationCap,
      num: "01",
      label: "Schools & Academies",
      description: "Structured academic portals, course directories, and real-time student access. Focused on clear navigation, visual contrast, and deep search filters.",
      color: "bg-zinc-800/40 text-amber-400 border-zinc-800"
    },
    {
      icon: Building2,
      num: "02",
      label: "Luxury Real Estate",
      description: "Immersive architectural displays, wide side-scrolling catalog views, and modern filter grids. Handcrafted for supreme visual impact and leads.",
      color: "bg-zinc-800/40 text-emerald-400 border-zinc-800"
    },
    {
      icon: Briefcase,
      num: "03",
      label: "Business & Personal Hubs",
      description: "Sleek Swiss-style brand interfaces, bold minimalist landing components, and high-converting contact funnels. Engineered to showcase expertise.",
      color: "bg-zinc-800/40 text-indigo-400 border-zinc-800"
    },
  ];

  return (
    <section id="hero-section" className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden px-4">
      {/* Decorative subtle background grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto w-full z-10">
        
        {/* Availability Badge */}
        <motion.div
          id="hero-availability"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-zinc-900 text-zinc-100 rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider mb-8 border border-zinc-800 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>AVAILABLE FOR NEW PROJECTS</span>
        </motion.div>

        {/* Big Display Title - Stark Layout */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-100 leading-[1.05] mb-6"
        >
          CRAFTING HIGH-CONVERSION <br className="hidden md:inline" />
          <span className="text-zinc-500 font-light italic">WEBSITES</span> WITH PURPOSE.
        </motion.h1>

        {/* Subtitle / Paragraph */}
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl font-normal leading-relaxed mb-10"
        >
          Hey, I'm Stefan Ojietu. I design websites that are simple, beautiful, and structured like physical architecture.
          Specialized in high-fidelity interactive solutions for academies, luxury real estate, commercial brands, and ambitious individuals.
        </motion.p>

        {/* Quick Action Button Pairs - White/Black Stark contrast */}
        <motion.div
          id="hero-cta-group"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4 mb-20"
        >
          <button
            id="hero-view-work-btn"
            onClick={() => onScrollTo("projects")}
            className="bg-white text-zinc-950 font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-zinc-200 active:scale-98 transition-all duration-200 cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <span>Explore Portfolio Showcase</span>
            <ArrowDown className="h-4 w-4 animate-bounce text-zinc-950" />
          </button>

          <button
            id="hero-contact-trigger-btn"
            onClick={() => onScrollTo("estimator")}
            className="bg-zinc-900 border border-zinc-800 text-zinc-100 font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-zinc-800/80 active:scale-98 transition-all duration-200 cursor-pointer shadow-sm"
          >
            Calculate Design Budget
          </button>
        </motion.div>

        {/* Bento Grid Specializations container */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-3">NICHE REPERTOIRE Showcase</span>
          <h2 className="font-display font-light text-2xl sm:text-3xl text-zinc-200 tracking-tight">Three Pillars of Layout Design</h2>
        </div>

        <motion.div
          id="hero-specializations-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {specializations.map((spec, i) => {
            const IconComponent = spec.icon;
            // The first item is a bit larger and prominent to act as bento hero visual
            return (
              <div
                key={i}
                id={`spec-card-${i}`}
                className="group p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div id={`spec-icon-wrapper-${i}`} className={`h-11 w-11 rounded-xl flex items-center justify-center border group-hover:scale-105 transition-transform duration-300 ${spec.color}`}>
                      <IconComponent className="h-5 w-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-mono text-zinc-650 tracking-widest">{spec.num} — SPECIALTY</span>
                  </div>
                  
                  <h3 id={`spec-title-${i}`} className="font-display font-bold text-zinc-100 text-lg sm:text-xl mb-3 tracking-tight">
                    {spec.label}
                  </h3>
                  
                  <p id={`spec-desc-${i}`} className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {spec.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800/60 pt-4 mt-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Iterative Dev Mode</span>
                  <span className="text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono">View Work →</span>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
