export type Category =
  | "prototype-vehicle"
  | "products"
  | "simulation-analysis"
  | "fabrication";

export const CATEGORY_LABEL: Record<Category, string> = {
  "prototype-vehicle": "Prototype Vehicle",
  products: "Products",
  "simulation-analysis": "Simulation and Analysis",
  fabrication: "Fabrication",
};

export interface GalleryImage {
  /** filename inside /public/assets/projects/<slug>/ */
  file: string;
  alt: string;
  caption?: string;
}

export interface ProjectSection {
  heading: string;
  body: string[];
}

export interface DesignParameter {
  label: string;
  symbol: string;
  value: string;
}

export interface ProjectRole {
  title: string;
  points: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** subtitle / project type line */
  type: string;
  categories: Category[];
  featured: boolean;
  /** short card + intro description */
  summary: string;
  tags: string[];
  hero: GalleryImage;
  /** shown instead of hero on grid cards, only while the Simulation and Analysis filter is active */
  analysisImage?: GalleryImage;
  problem?: string[];
  role?: ProjectRole;
  results?: string[];
  approach?: { flow: string; body: string };
  parameters?: { heading: string; rows: DesignParameter[] };
  sections?: ProjectSection[];
  gallery: GalleryImage[];
  /** note this project's images/data were sourced directly from the Figma deck */
  sourceVerified?: boolean;
}

export interface ExperienceRole {
  title: string;
  employment?: string;
  dates: string;
  location?: string;
  description: string;
  skills?: string;
}

export interface ExperienceEntry {
  organization: string;
  slug: string;
  duration: string;
  location?: string;
  roles: ExperienceRole[];
  photos?: { file: string; alt: string }[];
}
