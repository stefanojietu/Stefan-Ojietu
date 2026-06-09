import { motion } from "motion/react";
import { processSteps } from "../data/projects";
import { ArrowRight, Sparkles, Sliders, Milestone } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#09090b] border-t border-zinc-900 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div id="process-header" className="max-w-3xl mb-16 md:mb-20">
          <div id="process-meta-header" className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
            <Milestone className="h-3.5 w-3.5 text-indigo-500" />
            <span>HOW WE CO-CREATE Process</span>
          </div>
          <h2 id="process-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Design Blueprint
          </h2>
          <p id="process-desc" className="text-zinc-400 text-sm sm:text-base mt-2">
            No templates. No assembly lines. I employ an iterative, collaborative process mapped specifically to your operational requirements.
          </p>
        </div>

        {/* Steps Grid */}
        <div id="process-steps-columns" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              id={`process-step-item-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 shadow-md transition-all duration-300 h-full"
            >
              <div>
                {/* Number floating */}
                <div 
                  id={`process-num-${index}`}
                  className="font-display text-4xl sm:text-5xl font-black text-zinc-800 group-hover:text-zinc-700 transition-colors duration-300 mb-6 leading-none"
                >
                  {step.number}
                </div>
                
                {/* Text titles */}
                <h3 
                  id={`process-step-title-${index}`}
                  className="font-display font-extrabold text-white text-base sm:text-lg mb-2 tracking-tight transition-colors"
                >
                  {step.title}
                </h3>
                
                <p 
                  id={`process-step-desc-${index}`}
                  className="text-zinc-400 group-hover:text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 transition-colors"
                >
                  {step.description}
                </p>
              </div>

              {/* Minimalist interactive arrow indicator */}
              <div className="flex items-center gap-1.5 self-start text-[10px] font-mono tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors">
                <span>STAGE {step.number}</span>
                <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1.5 transition-transform text-zinc-500 group-hover:text-white" />
              </div>

              {/* Decorative line joining cards on desktop (with absolute indexes) */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-zinc-800 group-hover:bg-zinc-700 z-10 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Dynamic callout banner under process - Bento Grid format */}
        <div id="process-callout-banner" className="mt-16 bg-zinc-900 text-zinc-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              Need a completely tailormade layout?
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm">
              We can map custom integrations (booking systems, private pupil portals, real estate MLS syncs).
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("estimator");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-shrink-0 bg-white text-zinc-950 font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-zinc-200 transition-all cursor-pointer shadow-sm active:scale-95 text-center w-full md:w-auto"
          >
            Calculate Your Package
          </button>
        </div>

      </div>
    </section>
  );
}
