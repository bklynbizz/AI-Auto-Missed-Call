
import { SiteConfig, Blog, Testimonial, PricingPlan } from './types';

export const INITIAL_BLOGS: Blog[] = [
  {
    id: '1',
    title: 'How Realtors Lose $10K+ Per Month to Missed Calls',
    excerpt: 'The hidden cost of missed opportunities in a high-stakes market.',
    content: 'Full content about real estate lead loss...',
    author: 'Admin',
    date: '2023-10-24',
    image: 'https://picsum.photos/seed/realestate1/800/400',
    category: 'Lead Gen'
  },
  {
    id: '2',
    title: 'The ROI of AI Call Automation for Real Estate Agents',
    excerpt: 'Why automation is no longer optional for top-performing teams.',
    content: 'Deep dive into automation metrics...',
    author: 'Admin',
    date: '2023-10-20',
    image: 'https://picsum.photos/seed/realestate2/800/400',
    category: 'Technology'
  },
  {
    id: '3',
    title: '5 Scenarios Where Auto-Callback Saves the Deal',
    excerpt: 'From high-speed traffic to mid-showing interruptions.',
    content: 'Case scenarios of successful callbacks...',
    author: 'Admin',
    date: '2023-10-15',
    image: 'https://picsum.photos/seed/realestate3/800/400',
    category: 'Strategy'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Managing Broker',
    brokerage: 'Keller Williams',
    content: "I was losing 3-4 leads per week to missed calls during showings. Now every call gets answered and I've closed 2 deals this month from calls I would have missed.",
    image: 'https://picsum.photos/seed/sarah/100/100',
    result: '40% increase in closings'
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Luxury Specialist',
    brokerage: 'RE/MAX',
    content: "Game changer for my business. The AI sounds so natural, clients don't even realize it's not me calling back.",
    image: 'https://picsum.photos/seed/mike/100/100',
    result: '12 hours saved weekly'
  },
  {
    id: '3',
    name: 'Jennifer Martinez',
    role: 'Residential Expert',
    brokerage: 'Coldwell Banker',
    content: "ROI in the first month. This paid for itself with just one closed deal. It's like having a 24/7 personal assistant.",
    image: 'https://picsum.photos/seed/jennifer/100/100',
    result: '$15k added commission'
  }
];

export const INITIAL_PRICING: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 99,
    yearlyPrice: 79,
    description: 'Perfect for individual agents starting their automation journey.',
    features: ['50 auto-callbacks/month', 'Basic CRM integration', 'SMS follow-up', 'Email support', 'Call recordings'],
    isPopular: false
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 199,
    yearlyPrice: 159,
    description: 'Our most popular plan for high-volume producers.',
    features: ['200 auto-callbacks/month', 'Premium CRM integrations', 'Advanced lead scoring', 'Calendar scheduling', 'Priority support'],
    isPopular: true
  },
  {
    id: 'team',
    name: 'Team',
    price: 399,
    yearlyPrice: 319,
    description: 'Scalable solution for teams and small brokerages.',
    features: ['500 auto-callbacks/month', 'Multi-agent support', 'White-label option', 'Dedicated manager', 'API access'],
    isPopular: false
  }
];

export const SITE_CONFIG_INITIAL: SiteConfig = {
  siteName: 'Iron Maiden Realty',
  heroHeadline: 'Never Lose Another Lead to a Missed Call',
  heroSubheadline: 'AI-powered system that instantly calls back missed prospects—perfect for busy realtors on showings, in meetings, or after hours.',
  primaryColor: '#2563eb',
  darkMode: false,
  featuredPlans: INITIAL_PRICING,
  testimonials: INITIAL_TESTIMONIALS,
  blogs: INITIAL_BLOGS
};
