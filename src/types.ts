export interface Project {
  id: string;
  title: string;
  category: "school" | "realestate" | "business";
  categoryLabel: string;
  description: string;
  detailedDescription: string;
  image: string;
  year: string;
  stats: { label: string; value: string }[];
  features: string[];
  techStack: string[];
  liveUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface DesignPhilosophy {
  concept: string;
  description: string;
}
