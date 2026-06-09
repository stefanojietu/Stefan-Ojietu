import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Sparkles, ArrowRight, Star, Check } from "lucide-react";

interface EstimatorSectionProps {
  onQuoteGenerated: (details: {
    type: string;
    tierName: string;
    features: string[];
    total: number;
  }) => void;
}

export default function EstimatorSection({ onQuoteGenerated }: EstimatorSectionProps) {
  const [projectType, setProjectType] = useState<"school" | "realestate" | "business">("school");
  
  // Custom type state for selected tiers of each niche
  const [selectedTierId, setSelectedTierId] = useState<string>("school-tier-2");

  const services = {
    school: {
      name: "Schools & Academies Portal",
      description: "Structured academic portals, course directories, and live pupil access interfaces designed for deep communication.",
      tiers: [
        {
          id: "school-tier-1",
          name: "Tier 1: The Starter (Standard)",
          price: 60000,
          desc: "Essential features for a solid digital footprint.",
          features: [
            "Home Page introductory layout",
            "About Us & History section",
            "Admissions Info page",
            "PDF admission form downloads",
            "Activities Photo Gallery module",
            "Contact Form & directions setup",
            "Academic Calendar display"
          ]
        },
        {
          id: "school-tier-2",
          name: "Tier 2: The Connected School (Most Popular)",
          price: 100000,
          desc: "Full school hub + online admissions and bulletins.",
          features: [
            "Includes everything in Tier 1",
            "Online Admission Forms & Submissions",
            "News & Bulletin blog engine",
            "Live Social Media feeds integration",
            "Basic Pupil & Staff portal linking"
          ]
        },
        {
          id: "school-tier-3",
          name: "Tier 3: The Automated Academy (Premium)",
          price: 200000,
          desc: "Automated payment routes and customized architecture.",
          features: [
            "Includes everything in Tier 2",
            "Integrated payment gateway integrations (Paystack/Flutterwave)",
            "Automated email & SMS admissions notifications",
            "Custom-built private school portal architecture"
          ]
        }
      ]
    },
    realestate: {
      name: "Luxury Real Estate Catalog",
      description: "Cinematic real estate property presentation grids, map clusters, and streamlined lead generation.",
      tiers: [
        {
          id: "realestate-tier-1",
          name: "Tier 1: Agency Brochure",
          price: 100000,
          desc: "Immersive listing catalog for agencies.",
          features: [
            "Basic properties search tool",
            "Manual listing uploads by system admin",
            "Interactive photo galleries & detail lists",
            "Standard lead contact forms"
          ]
        },
        {
          id: "realestate-tier-2",
          name: "Tier 2: Interactive Portal",
          price: 200000,
          desc: "Advanced search filters, maps, and instant lead triggers.",
          features: [
            "Advanced property search filters (bedrooms, locations, price ranges)",
            "Interactive Map location cluster integration",
            "WhatsApp quick lead capture router links",
            "Hidden secure private agent notes fields",
            "Automated PDF brochures generator for properties"
          ]
        }
      ]
    },
    business: {
      name: "Business & Personal Hubs",
      description: "Swiss-inspired display brands, high-speed marketing landing components, and corporate strategy displays.",
      tiers: [
        {
          id: "business-tier-1",
          name: "Tier 1: The Digital Business Card (Landing Page)",
          price: 50000,
          desc: "Frictionless high-speed single-page layout.",
          features: [
            "Single-page scrolling layout",
            "Cinematic Hero section + clear Call to Action",
            "About, Services, and Testimonials modules",
            "Direct WhatsApp Click-to-Chat automation",
            "Standard secure intake Contact Form",
            "Mobile-responsive display optimization"
          ]
        },
        {
          id: "business-tier-2",
          name: "Tier 2: Corporate Growth (Multi-Page Site)",
          price: 120000,
          desc: "Comprehensive 5 to 10 page corporate brand asset.",
          features: [
            "5-10 distinct pages (Home, About, Individual Services, Case Studies, Contact)",
            "Content Management System (CMS) backend portal for easy copy/image edits",
            "Professional On-Page SEO setup (Meta titles, custom meta tag schema)",
            "Active Lead Generation hooks (Newsletter opt-ins, customized quote systems)",
            "Google Business Profile placement alignment"
          ]
        }
      ]
    }
  };

  // Sync state cleanly when projectType switches
  useEffect(() => {
    if (projectType === "school") {
      setSelectedTierId("school-tier-2"); // Default to School Tier 2
    } else if (projectType === "realestate") {
      setSelectedTierId("realestate-tier-1");
    } else {
      setSelectedTierId("business-tier-1");
    }
  }, [projectType]);

  const currentSpecialty = services[projectType];
  const selectedTier = currentSpecialty.tiers.find(t => t.id === selectedTierId) || currentSpecialty.tiers[0];

  const handleApplyEstimate = () => {
    onQuoteGenerated({
      type: currentSpecialty.name,
      tierName: selectedTier.name,
      features: selectedTier.features,
      total: selectedTier.price
    });
    const element = document.getElementById("designer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#09090b] border-t border-zinc-900 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div id="estimator-header" className="text-center max-w-2xl mx-auto mb-16">
          <div id="estimator-banner" className="inline-flex items-center gap-1.5 bg-zinc-900 text-zinc-300 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 border border-zinc-800">
            <Sliders className="h-3.5 w-3.5 text-indigo-450" />
            <span>INTERACTIVE ESTIMATOR</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
            Design Budget Configurator
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
            Select a core domain specialty niche, explore the meticulously structured service tiers, and see immediate transparent pricing formulated in Nigerian Naira (₦).
          </p>
        </div>

        {/* Calculator Main Grid - Bento Layout */}
        <div id="calculator-panel" className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-900 shadow-lg relative overflow-hidden">
          
          {/* Controls Column (7 cols) */}
          <div id="calculator-left-controls" className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Niche Category Choice */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 block">
                01. Core Platform Specialty
              </label>
              
              <div id="niche-selector-tabs" className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "school", name: "Schools & Academies", detail: "Structured portals" },
                  { id: "realestate", name: "Luxury Real Estate", detail: "Cinematic architecture" },
                  { id: "business", name: "Business & Personal Hubs", detail: "Swiss-style brand" },
                ].map((type) => (
                  <button
                    key={type.id}
                    id={`estimator-tab-${type.id}`}
                    onClick={() => setProjectType(type.id as any)}
                    className={`p-4 rounded-xl text-left border cursor-pointer transition-all flex flex-col justify-between h-[100px] ${
                      projectType === type.id
                        ? "bg-white border-white text-zinc-950 shadow-md scale-[1.01]"
                        : "bg-zinc-900 border-zinc-850 text-zinc-400 hover:border-zinc-750 hover:text-zinc-250 animate-fade-in"
                    }`}
                  >
                    <div className="font-display font-bold text-xs sm:text-sm leading-tight">{type.name}</div>
                    <div className={`text-[9px] font-mono uppercase tracking-wider ${projectType === type.id ? "text-zinc-700 font-bold" : "text-zinc-500"}`}>
                      {type.detail}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tier Selector block */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                  02. Service Tier Category
                </label>
                <span className="text-[10px] font-mono text-zinc-450 uppercase">Select a budget format</span>
              </div>

              <div id="tier-package-cards" className="grid grid-cols-1 gap-3.5">
                {currentSpecialty.tiers.map((tier) => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <button
                      key={tier.id}
                      id={`tier-card-btn-${tier.id}`}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer gap-4 ${
                        isSelected
                          ? "bg-zinc-800 border-zinc-600 shadow-sm text-white scale-[1.005]"
                          : "bg-zinc-900 border-zinc-850 text-zinc-450 hover:border-zinc-750 hover:text-zinc-300"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${isSelected ? "border-white bg-white" : "border-zinc-700"}`}>
                            {isSelected && <div className="h-2 w-2 rounded-full bg-zinc-950" />}
                          </div>
                          <span className={`font-display font-medium text-sm sm:text-base ${isSelected ? "text-white" : "text-zinc-200"}`}>
                            {tier.name}
                          </span>
                        </div>
                        <p className={`text-[11px] sm:text-xs pl-6 max-w-lg leading-normal ${isSelected ? "text-zinc-300" : "text-zinc-500"}`}>
                          {tier.desc}
                        </p>
                      </div>

                      <div className="flex items-center pl-6 sm:pl-0">
                        <span className={`font-display font-bold text-sm sm:text-lg shrink-0 px-3.5 py-1.5 rounded-xl ${
                          isSelected ? "bg-white text-zinc-950" : "bg-zinc-950 text-zinc-300 border border-zinc-800"
                        }`}>
                          ₦{tier.price.toLocaleString()}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Price Summary Column (5 cols) - Bento accent side */}
          <div id="calculator-right-summary" className="lg:col-span-5 bg-zinc-900 text-white rounded-3xl p-6 flex flex-col justify-between border border-zinc-800 shadow-xl relative overflow-hidden">
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-800/20 rounded-full blur-2xl z-0" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-zinc-800/10 rounded-full blur-2xl z-0" />

            <div className="relative z-10 space-y-5">
              
              <div className="border-b border-zinc-800/85 pb-4">
                <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                  CHOSEN SPECIALTY
                </span>
                <h3 id="estimator-niche-display" className="font-display font-black text-base sm:text-lg mt-0.5 text-white">
                  {currentSpecialty.name}
                </h3>
                <p className="text-[11px] text-zinc-450 leading-relaxed mt-1.5 font-sans">
                  {currentSpecialty.description}
                </p>
              </div>

              {/* Dynamic Feature Checklist matching exact requested info */}
              <div className="space-y-3.5">
                <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">
                  INCLUDED FEATURES ROADMAP
                </span>
                
                <div id="estimator-active-features-list" className="space-y-2 max-h-[220px] overflow-y-auto no-scrollbar pr-1">
                  {selectedTier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-zinc-300 leading-normal">
                      <div className="h-4.5 w-4.5 rounded-full bg-zinc-800 text-white flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span className="text-xs font-sans font-normal text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-zinc-800/85">
              <div className="flex justify-between items-baseline mb-5">
                <span className="text-xs text-zinc-400 uppercase font-mono tracking-wider">
                  Total Investment:
                </span>
                <div id="estimator-price-ticker" className="flex items-baseline text-white">
                  <span className="font-display text-xl font-bold mr-0.5">₦</span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold leading-none tracking-tight text-white animate-pulse">
                    {selectedTier.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Quote CTA Button */}
              <button
                id="estimator-apply-btn"
                onClick={handleApplyEstimate}
                className="w-full flex items-center justify-center gap-1.5 bg-white text-zinc-950 font-black text-xs py-3.5 rounded-xl hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>Commit Package Specifications</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <div className="flex gap-2 justify-center items-center mt-4 text-[9px] text-zinc-550 font-mono">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span>Price is fixed once the contract is signed.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
