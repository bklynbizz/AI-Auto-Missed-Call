
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Request Demo', href: '/demo' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Help Center', href: '/help' },
      { name: 'TCPA Compliance', href: '/tcpa' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-slate-800">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Stay ahead of the competition
              </h3>
              <p className="text-slate-400">
                Get weekly tips on converting more leads with AI-powered callbacks.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-80 px-5 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/hindsightx-logo.png"
                alt="Hindsight X"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent leading-tight">
                  AGenetic Realtor
                </span>
                <span className="text-[10px] font-medium text-slate-500 tracking-wide">
                  powered by Hindsight X
                </span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              The world's first AI callback platform designed exclusively for realtors. Capture every lead, even when you're busy closing.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 hover:bg-blue-600 hover:border-blue-600 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@hindsightx.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Mail size={14} />
                  </div>
                  support@hindsightx.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Phone size={14} />
                  </div>
                  (555) 123-4567
                </a>
              </li>
              <li>
                <button className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                    <MessageSquare size={14} className="text-blue-400" />
                  </div>
                  Live Chat
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {currentYear} Hindsight X Inc. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookies</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
