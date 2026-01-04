
export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  brokerage?: string;
  missedCallsPerWeek: number;
  status: 'new' | 'contacted' | 'qualified' | 'lost';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  brokerage: string;
  content: string;
  image: string;
  result: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface SiteConfig {
  siteName: string;
  heroHeadline: string;
  heroSubheadline: string;
  primaryColor: string;
  darkMode: boolean;
  featuredPlans: PricingPlan[];
  testimonials: Testimonial[];
  blogs: Blog[];
}
