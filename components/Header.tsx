
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCMS } from '../context/CMSContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { config, updateConfig } = useCMS();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md border-b border-slate-200 dark:border-slate-800' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
          IRON MAIDEN
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-sm font-semibold hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => updateConfig({ darkMode: !config.darkMode })}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {config.darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/contact" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all">
            Start Free Trial
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => updateConfig({ darkMode: !config.darkMode })} className="p-2">
            {config.darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-slate-200 dark:border-slate-800 p-6 absolute w-full left-0 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-blue-600 text-white text-center font-bold rounded-xl"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
