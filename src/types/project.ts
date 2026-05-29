export interface ProjectStep {
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  featured: boolean;
  category: string;
  heroImage: string;
  screenshots: string[];
  problem: string;
  solution: string;
  workflow: ProjectStep[];
  integrations: string[];
  results: ProjectMetric[];
  diagramImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
}
