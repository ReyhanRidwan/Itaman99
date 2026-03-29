export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'minimalist' | 'tropical' | 'dry' | 'vertical' | 'water' | 'hardscape';
  image: string;
  isBeforeAfter?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface USP {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
}
