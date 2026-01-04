
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 mb-6 block">
              IRON MAIDEN REALTY
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8">
              The world's first AI callback platform designed exclusively for realtors. Capture every lead, even when you're busy closing.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><Link to="/features" className="hover:text-blue-600">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/integrations" className="hover:text-blue-600">Integrations</Link></li>
              <li><Link to="/demo" className="hover:text-blue-600">Request Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link to="/help" className="hover:text-blue-600">Help Center</Link></li>
              <li><Link to="/tcpa" className="hover:text-blue-600">TCPA Compliance</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-600">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li className="flex items-center gap-2"><Mail size={16} /> support@ironmaiden.io</li>
              <li className="flex items-center gap-2"><Phone size={16} /> (555) 123-4567</li>
              <li className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                <MessageSquare size={16} /> Live Chat
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2023 Iron Maiden Realty. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-blue-600">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
