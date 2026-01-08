
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCMS } from '../context/CMSContext';
import { Moon, Sun, Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const { config, updateConfig } = useCMS();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-slate-900/20 border-b border-slate-200/50 dark:border-slate-700/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                src="/hindsightx-logo.png"
                alt="Hindsight X"
                className="h-10 w-10 object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent bg-300% animate-gradient leading-tight">
                AGenetic Realtor
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                powered by Hindsight X
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors rounded-lg group ${
                    location.pathname === link.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/70 to-blue-500/0 transition-opacity ${
                    location.pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </Link>
              </motion.div>
            ))}

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />

            {/* Dark mode toggle */}
            <motion.button
              onClick={() => updateConfig({ darkMode: !config.darkMode })}
              className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {config.darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} className="text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} className="text-slate-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="group relative ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center gap-1"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ChevronRight size={16} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={() => updateConfig({ darkMode: !config.darkMode })}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800"
              whileTap={{ scale: 0.9 }}
            >
              {config.darkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} />}
            </motion.button>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[72px] left-4 right-4 z-50 md:hidden bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div className="p-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                        location.pathname === link.href
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-lg font-bold">{link.name}</span>
                      <ChevronRight size={20} className="text-slate-400" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700"
                >
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-bold rounded-xl shadow-lg shadow-blue-500/25"
                  >
                    Start Free Trial
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
