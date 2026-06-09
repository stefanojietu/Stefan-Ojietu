import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { projectsData } from "../data/projects";
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Calendar, 
  Check, 
  X, 
  School, 
  Home, 
  Building 
} from "lucide-react";

interface ProjectsSectionProps {
  onScrollTo: (id: string) => void;
}

export default function ProjectsSection({ onScrollTo }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<"all" | "school" | "realestate" | "business">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(project => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "school": return <School className="h-3.5 w-3.5" />;
      case "realestate": return <Home className="h-3.5 w-3.5" />;
      case "business": return <Building className="h-3.5 w-3.5" />;
      default: return <Layers className="h-3.5 w-3.5" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#09090b] border-t border-zinc-900 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div id="portfolio-header" className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div id="portfolio-meta-header" className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
              <Sparkles className="h-3 w-3 text-indigo-500" />
              <span>DESIGN PORTFOLIO Showcase</span>
            </div>
            <h2 id="portfolio-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Selected Collaborations
            </h2>
            <p id="portfolio-desc" className="text-zinc-400 text-sm max-w-lg mt-2">
              Browse elite web interfaces designed and engineered for real-world user workflows and maximum conversion rates.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div id="portfolio-tabs-container" className="flex flex-wrap gap-1.5 bg-zinc-900 border border-zinc-800 p-1 rounded-xl self-start md:self-end">
            {(["all", "school", "realestate", "business"] as const).map((cat) => {
              const catLabels: Record<string, string> = {
                all: "All Sites",
                school: "Schools",
                realestate: "Real Estate",
                business: "Businesses"
              };
              return (
                <button
                  key={cat}
                  id={`filter-tab-${cat}`}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all uppercase cursor-pointer ${
                    filter === cat
                      ? "bg-white text-zinc-950 shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-850"
                  }`}
                >
                  {catLabels[cat]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Grid Showcase */}
        <motion.div 
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col h-full bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Visual Cover Layer */}
                <div 
                  id={`project-img-wrapper-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="aspect-[4/3] bg-zinc-950 overflow-hidden relative cursor-pointer border-b border-zinc-800/50"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Category Accent Badge */}
                  <div id={`project-badge-${project.id}`} className="absolute top-4 left-4 flex items-center gap-1.5 bg-zinc-950/95 text-zinc-100 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-lg border border-zinc-800 backdrop-blur-sm shadow-md">
                    {getCategoryIcon(project.category)}
                    <span>{project.categoryLabel}</span>
                  </div>
                  {/* Design Year overlay */}
                  <div className="absolute bottom-4 right-4 bg-zinc-950/95 text-zinc-100 text-[10px] font-mono px-2 py-1 border border-zinc-800 rounded shadow-sm font-bold">
                    {project.year}
                  </div>
                </div>

                {/* Content Details Block */}
                <div id={`project-content-${project.id}`} className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 
                      id={`project-title-clickable-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="font-display font-extrabold text-white text-lg sm:text-xl hover:text-zinc-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.liveUrl && (
                        <a 
                          id={`project-live-btn-${project.id}`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 px-2.5 bg-indigo-950/40 border border-indigo-900/50 hover:border-indigo-700/65 text-indigo-300 text-xs font-mono rounded-lg hover:bg-indigo-900/60 hover:text-white transition-all cursor-pointer flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>DEMO</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                      <button 
                        id={`project-detail-btn-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className="p-1 px-2.5 bg-zinc-800 border border-zinc-750 text-white text-xs font-mono rounded-lg hover:bg-white hover:text-black transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>SPEC</span>
                        <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>

                  <p id={`project-description-${project.id}`} className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Highlight core performance stats */}
                  <div id={`project-metrics-${project.id}`} className="grid grid-cols-3 gap-1 border-t border-zinc-800 pt-5 mt-auto">
                    {project.stats.slice(0, 3).map((stat, index) => (
                      <div key={index} id={`project-metric-${project.id}-${index}`} className="text-center md:text-left">
                        <div className="font-display font-black text-white text-sm sm:text-base leading-none">
                          {stat.value}
                        </div>
                        <div className="text-[9px] font-mono tracking-tight text-zinc-500 uppercase mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Floating Case Study Overlay Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div id="case-study-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Dimmed backdrop */}
              <motion.div
                id="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
              />

              {/* Box Dialog wrapper */}
              <motion.div
                id="modal-dialog-content"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative bg-zinc-900 text-zinc-100 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl border border-zinc-800 z-10 max-h-[88vh] flex flex-col"
              >
                {/* Header Actions */}
                <div id="modal-titlebar" className="flex items-center justify-between border-b border-zinc-800/80 p-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1">
                      {getCategoryIcon(selectedProject.category)}
                      <span>{selectedProject.categoryLabel}</span>
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl mt-0.5 tracking-tight text-white animate-fade-in">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    id="modal-close-trigger"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 cursor-pointer transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div id="modal-scroller" className="p-6 overflow-y-auto no-scrollbar flex-grow space-y-6">
                  
                  {/* Featured Mockup Screen */}
                  <div id="modal-featured-image-wrapper" className="aspect-video bg-zinc-950 rounded-2xl overflow-hidden shadow-inner border border-zinc-800/50">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Core Information split columns */}
                  <div id="modal-meta-split" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    
                    {/* Left detailed summary */}
                    <div id="modal-left-summary" className="md:col-span-2 space-y-4">
                      <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                        Case Overview
                      </h4>
                      <p className="text-zinc-300 font-normal leading-relaxed text-sm">
                        {selectedProject.detailedDescription}
                      </p>

                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
                          Key Solutions Included
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm">
                              <span className="h-5 w-5 mt-0.5 rounded-full bg-white text-zinc-950 flex items-center justify-center flex-shrink-0 text-[10px]">
                                <Check className="h-3 w-3 stroke-[3]" />
                              </span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right specification metadata column */}
                    <div id="modal-right-specs" className="space-y-5 bg-zinc-950 p-5 rounded-2xl border border-zinc-800 h-fit">
                      {/* Metric widgets */}
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                          Performance Stats
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {selectedProject.stats.map((stat, i) => (
                            <div key={i} className="flex justify-between items-baseline border-b border-zinc-800/80 pb-1.5 font-mono">
                              <span className="text-[11px] text-zinc-400 font-medium">{stat.label}</span>
                              <span className="font-display font-extrabold text-xs sm:text-sm text-white">{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stack details */}
                      <div className="space-y-2 pt-2">
                        <h4 className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                          Engine / Tools
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {selectedProject.techStack.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-zinc-800 pt-4 flex flex-col gap-2">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-zinc-500">Launch Year</span>
                          <span className="text-white font-bold">{selectedProject.year}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer buttons */}
                <div id="modal-footer" className="bg-zinc-950 border-t border-zinc-800/80 p-6 flex flex-wrap gap-3 items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">
                    * Results verified via analytics monitoring.
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-650 hover:bg-indigo-550 text-white font-black text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>Launch Live Demo</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 border border-zinc-800 text-zinc-300 font-semibold text-xs rounded-xl hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer"
                    >
                      Close Overlay
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onScrollTo("estimator");
                      }}
                      className="px-4 py-2 bg-white text-zinc-950 font-bold text-xs rounded-xl hover:bg-zinc-200 transition-all cursor-pointer"
                    >
                      Request Similar Solution
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
