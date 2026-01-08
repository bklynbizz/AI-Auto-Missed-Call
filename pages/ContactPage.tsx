
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useCMS } from '../context/CMSContext';
import { CheckCircle, Shield, Sparkles, ArrowRight, Phone, Mail, MapPin, Clock, Send, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ContactPage: React.FC = () => {
  const { addLead } = useCMS();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brokerage: '',
    missedCallsPerWeek: 5
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center p-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-green-50/50 to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-green-400/20 dark:bg-green-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-80 h-80 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md w-full text-center p-12 rounded-3xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-slate-700/50 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
            className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/30"
          >
            <CheckCircle className="text-white" size={48} />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-black mb-4 text-slate-900 dark:text-white"
          >
            You're on the list!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed"
          >
            We've received your request. An AI specialist will call you shortly to set up your account and start your 14-day trial.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              Back to Home
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -left-40 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6"
            >
              <Sparkles size={16} className="text-blue-500" />
              <span>Start Your Free Trial</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              Get Started in <span className="gradient-text">Under 2 Minutes</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-500 dark:text-slate-400"
            >
              No credit card required. Cancel anytime. Start capturing more leads today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <AnimatedSection className="pb-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Benefits */}
            <motion.div variants={fadeInLeft}>
              <h2 className="text-3xl font-black mb-8 text-slate-900 dark:text-white">
                What's Included in Your Trial
              </h2>

              <div className="space-y-4 mb-10">
                {[
                  { text: 'Unlimited AI auto-callbacks', desc: 'Never miss a lead again' },
                  { text: 'Full CRM integration', desc: 'Works with Zillow, FUB, and more' },
                  { text: 'Custom AI script customization', desc: 'Personalized to your brand' },
                  { text: 'TCPA & DNC compliant', desc: 'Built-in legal protection' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-green-200 dark:hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-green-500/30">
                      <CheckCircle size={16} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">{item.text}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Privacy Card */}
              <motion.div
                variants={scaleIn}
                className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Privacy Guarantee</h3>
                    <p className="text-white/80 leading-relaxed">
                      Your data is yours. We never sell lead information to third parties. Our systems are SOC2 compliant and encrypted end-to-end.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info Cards */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {[
                  { icon: Phone, label: 'Call Us', value: '(888) 555-0123' },
                  { icon: Mail, label: 'Email', value: 'hello@hindsightx.com' },
                  { icon: MapPin, label: 'Location', value: 'New York, NY' },
                  { icon: Clock, label: 'Response Time', value: '< 24 hours' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                      <item.icon size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{item.label}</p>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div variants={fadeInRight}>
              <div className="gradient-border">
                <div className="bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-[calc(1.5rem-2px)]">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Zap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">Start Your Free Trial</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Takes less than 2 minutes</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Brokerage Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Keller Williams"
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                        value={formData.brokerage}
                        onChange={(e) => setFormData({ ...formData, brokerage: e.target.value })}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          Estimated Missed Calls Per Week
                        </label>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold">
                          {formData.missedCallsPerWeek} calls
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-blue-600"
                        value={formData.missedCallsPerWeek}
                        onChange={(e) => setFormData({ ...formData, missedCallsPerWeek: parseInt(e.target.value) })}
                      />
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>1</span>
                        <span>25</span>
                        <span>50</span>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group w-full py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Activate Trial Now
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <p className="text-xs text-center text-slate-400 leading-relaxed">
                      By signing up, you agree to our{' '}
                      <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                      We may send you transactional texts about your account setup.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900" />
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight"
          >
            Have questions? We're here to help.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-10"
          >
            Our team is available 24/7 to help you get started and answer any questions.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8885550123"
              className="group px-10 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <Link
              to="/demo"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
