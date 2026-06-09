/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ProcessSection from "./components/ProcessSection";
import EstimatorSection from "./components/EstimatorSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [preFilledQuote, setPreFilledQuote] = useState<{
    type: string;
    tierName: string;
    features: string[];
    total: number;
  } | null>(null);

  // Sync scroll positions directly with active navbar links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "process", "estimator", "designer"];
      // Offset to trigger earlier when scrolling down
      const scrollPosition = window.scrollY + 250;

      let currentSection = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load to establish current location
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleQuoteGenerated = (details: {
    type: string;
    tierName: string;
    features: string[];
    total: number;
  }) => {
    setPreFilledQuote(details);
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen text-zinc-100 bg-zinc-950 flex flex-col justify-between selection:bg-white selection:text-black">
      {/* Premium floating glass navbar */}
      <Navbar onScrollTo={handleScrollToSection} activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main id="portfolio-main" className="flex-grow">
        {/* Dynamic introduction section */}
        <Hero onScrollTo={handleScrollToSection} />

        {/* Selected projects category showcase */}
        <ProjectsSection onScrollTo={handleScrollToSection} />

        {/* Workflow & creative methodology */}
        <ProcessSection />

        {/* Interactive rate configurator */}
        <EstimatorSection onQuoteGenerated={handleQuoteGenerated} />
      </main>

      {/* Profile portrait block & Contact panel */}
      <Footer preFilledQuote={preFilledQuote} />
    </div>
  );
}

