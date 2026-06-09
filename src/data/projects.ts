import { Project, ProcessStep } from "../types";

export const projectsData: Project[] = [
  {
    id: "school-website",
    title: "Schools",
    category: "school",
    categoryLabel: "Schools",
    description: "An elegant, highly structured portal designed for deep academic communication, admissions management, and resource accessibility.",
    detailedDescription: "The absolute standard for primary and higher academies. Features fully organized department blocks, admission pathways, active calendar indices, and news engine configurations designed to look beautiful and professional across all devices.",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQHsEs5uaXn0Yw/feedshare-shrink_1280/B4EZ6sXgYWJIAM-/0/1781008304003?e=1782345600&v=beta&t=1cyAB4y3aAp4ucutwVWZ7PZKdh8xsvR5_YWmveUJAfI",
    year: "2025",
    stats: [
      { label: "Load Speed", value: "Fast" },
      { label: "Mobile Formatting", value: "Beautiful" },
      { label: "Development Time", value: "< 2 Weeks" }
    ],
    features: [
      "Dynamic school events calendar indexable by department",
      "Robust course finder with interactive filters",
      "Dedicated admissions process roadmap with multi-step status trackers",
      "Fully compliant accessible typography and contrasting visual rails",
      "Staff directory with quick-contact integrations"
    ],
    techStack: ["React", "Tailwind CSS", "Motion", "Framer Engine", "Lucide Icons"],
    liveUrl: "https://ma-school-website.vercel.app/"
  },
  {
    id: "realestate-website",
    title: "Real Estate",
    category: "realestate",
    categoryLabel: "Real Estate",
    description: "A sophisticated properties explorer with smooth transitions, modern listings search, and media-rich presentation formats.",
    detailedDescription: "An immersive property presentation platform optimized for elite residential offerings. Equipped with interactive grids, filter engines, WhatsApp direct routing, and quick downloadable specifications sheets to bridge listings and client contacts.",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQFHL15NDMhVTg/feedshare-shrink_1280/B4EZ6sXgKbHkAQ-/0/1781008303058?e=1782345600&v=beta&t=od4T-B08f8A2g2lXtUEWIPFKzLT51VkfHBfol7jSw5o",
    year: "2026",
    stats: [
      { label: "Load Speed", value: "Fast" },
      { label: "Mobile Formatting", value: "Beautiful" },
      { label: "Development Time", value: "< 2 Weeks" }
    ],
    features: [
      "Cinematic wide-ratio responsive imagery presentation",
      "Dynamic interactive filters bar for estate specs",
      "Staggered overlay animations showing subtle interior and floorplan blueprints",
      "Inquire modal with calendar scheduler and WhatsApp redirect",
      "Responsive interactive map grounding for localized site visits"
    ],
    techStack: ["Vite", "Tailwind CSS v4", "Motion Animation", "D3.js Data Map", "Dynamic Modals"],
    liveUrl: "https://explora-homes-properties.vercel.app/"
  },
  {
    id: "business-website",
    title: "Businesses",
    category: "business",
    categoryLabel: "Businesses",
    description: "A bold, Swiss-style corporate showcase featuring expansive negative space, high-speed layout components, and clean contact channels.",
    detailedDescription: "Perfect for strategic service agencies, startups, or executive professional practices. Combines pristine visual grid structures with modern SEO headers, click-to-chat automation, and active lead collection options to convert visitors instantly.",
    image: "https://media.licdn.com/dms/image/v2/D4E22AQEGkH1EpMj00Q/feedshare-shrink_1280/B4EZ6sXgeRJkAM-/0/1781008304382?e=1782345600&v=beta&t=SzdPxu7BtZZwmwsxOhHUMN6_DM_MaHcMAHiVRu37bsE",
    year: "2025",
    stats: [
      { label: "Load Speed", value: "Fast" },
      { label: "Mobile Formatting", value: "Beautiful" },
      { label: "Development Time", value: "< 2 Weeks" }
    ],
    features: [
      "Asymmetric service blocks with interactive hover highlights",
      "Custom-crafted smooth slide-out detail panels",
      "Typography pairing engine with high contrast readability metrics",
      "Quick-estimate cost calculator for custom design scopes",
      "Responsive client reviews with automated transition transitions"
    ],
    techStack: ["TypeScript", "Tailwind CSS", "Motion Hooks", "SVG Vector Canvas", "Estimated Calc Engine"],
    liveUrl: "https://abikeolacharity.vercel.app/"
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    description: "I begin by deeply understanding your brand strategy, current user pain points, and specific industry conversions. We draft modern content wireframes mapping out exact conversion actions before writing a single line of code."
  },
  {
    number: "02",
    title: "High-Fidelity Visual Craft",
    description: "Adhering to high-contrast Swiss-style layout rules, I craft custom mockups targeting impeccable typography pairings, appropriate grid structures, and brand-aligned micro-animations."
  },
  {
    number: "03",
    title: "Modern Fluid Development",
    description: "Using standard React, Vite, and Tailwind CSS, I bring the visuals to life with responsive CSS, compliant touch-targets, custom motion components, and fast loader performance."
  },
  {
    number: "04",
    title: "Polishing & Deployment",
    description: "We optimize all media assets, implement secure contact pathways, verify accessibility standards, and deploy the application on robust cloud infrastructure for extreme sub-second load times."
  }
];
