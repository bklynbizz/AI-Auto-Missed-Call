
import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, Blog, Lead, Testimonial, PricingPlan } from '../types';
import { SITE_CONFIG_INITIAL, INITIAL_BLOGS, INITIAL_TESTIMONIALS, INITIAL_PRICING } from '../constants';

interface CMSContextType {
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  blogs: Blog[];
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: string) => void;
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'createdAt' | 'status'>) => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  testimonials: Testimonial[];
  updateTestimonial: (t: Testimonial) => void;
  pricing: PricingPlan[];
  updatePricing: (p: PricingPlan) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(SITE_CONFIG_INITIAL);
  const [blogs, setBlogs] = useState<Blog[]>(INITIAL_BLOGS);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [pricing, setPricing] = useState<PricingPlan[]>(INITIAL_PRICING);

  useEffect(() => {
    // Load from localStorage for persistence in this demo
    const savedConfig = localStorage.getItem('iron_maiden_config');
    if (savedConfig) setConfig(JSON.parse(savedConfig));
    const savedLeads = localStorage.getItem('iron_maiden_leads');
    if (savedLeads) setLeads(JSON.parse(savedLeads));
  }, []);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    const updated = { ...config, ...newConfig };
    setConfig(updated);
    localStorage.setItem('iron_maiden_config', JSON.stringify(updated));
  };

  const updateBlog = (blog: Blog) => {
    setBlogs(prev => {
      const index = prev.findIndex(b => b.id === blog.id);
      if (index > -1) {
        const next = [...prev];
        next[index] = blog;
        return next;
      }
      return [...prev, blog];
    });
  };

  const deleteBlog = (id: string) => setBlogs(prev => prev.filter(b => b.id !== id));

  const addLead = (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>) => {
    const newLead: Lead = {
      ...leadData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'new',
      createdAt: new Date().toISOString()
    };
    const updatedLeads = [newLead, ...leads];
    setLeads(updatedLeads);
    localStorage.setItem('iron_maiden_leads', JSON.stringify(updatedLeads));
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  const updateTestimonial = (t: Testimonial) => {
    setTestimonials(prev => prev.map(item => item.id === t.id ? t : item));
  };

  const updatePricing = (p: PricingPlan) => {
    setPricing(prev => prev.map(item => item.id === p.id ? p : item));
  };

  return (
    <CMSContext.Provider value={{
      config, updateConfig,
      blogs, updateBlog, deleteBlog,
      leads, addLead, updateLeadStatus,
      testimonials, updateTestimonial,
      pricing, updatePricing
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useCMS must be used within CMSProvider');
  return context;
};
