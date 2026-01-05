
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCMS } from '../context/CMSContext';
import { Check, Info, Sparkles, ArrowRight, Zap, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
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

const PricingPage: React.FC = () => {
  const { pricing } = useCMS();
  const [isYearly, setIsYearly] = useState(false);

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
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-200/50 dark:border-green-500/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-6"
            >
              <Sparkles size={16} className="text-green-500" />
              <span>14-Day Free Trial</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-500 dark:text-slate-400 mb-10"
            >
              Start for free, scale when you're ready. No hidden fees. No long-term contracts.
            </motion.p>

            {/* Toggle */}
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
              <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative w-16 h-9 rounded-full p-1 transition-colors ${isYearly ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}
              >
                <motion.div
                  className="w-7 h-7 rounded-full bg-white shadow-lg"
                  animate={{ x: isYearly ? 28 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm font-bold transition-colors flex items-center gap-2 ${isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                Yearly
                <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold">
                  Save 20%
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <AnimatedSection className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.id}
                variants={scaleIn}
                className={`relative p-10 rounded-3xl border-2 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-transparent shadow-2xl shadow-blue-500/25 scale-105 z-10'
                    : 'bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 card-hover'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1 shadow-lg">
                      <Star size={12} fill="currentColor" />
                      Most Popular
                    </div>
                  </div>
                )}

                <h3 className={`text-2xl font-black mb-3 ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-8 h-10 ${plan.isPopular ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                  {plan.description}
                </p>

                <div className="flex items-end gap-2 mb-8">
                  <motion.span
                    key={isYearly ? plan.yearlyPrice : plan.price}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-5xl font-black ${plan.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}
                  >
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </motion.span>
                  <span className={`font-bold mb-2 ${plan.isPopular ? 'text-white/60' : 'text-slate-400'}`}>/month</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm font-medium ${plan.isPopular ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.isPopular ? 'bg-white/20' : 'bg-green-500/10'}`}>
                        <Check size={12} className={plan.isPopular ? 'text-white' : 'text-green-600'} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`group block w-full py-4 text-center font-bold rounded-2xl transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-xl'
                      : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Start Free Trial
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Features Comparison */}
      <AnimatedSection className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">All Plans Include</h2>
            <p className="text-slate-500 dark:text-slate-400">Essential features to help you capture every lead</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              'Unlimited CRM syncs',
              '24/7 AI availability',
              'Call recordings & transcripts',
              'TCPA compliance built-in',
              'Email & SMS notifications',
              'Mobile app access',
              'Dedicated onboarding',
              'Priority support',
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800/50"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle size={18} className="text-green-600" />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-black mb-4">Pricing Questions</h2>
            <p className="text-slate-500 dark:text-slate-400">Everything you need to know about our pricing</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes, our monthly plans are no-contract. You can cancel with a single click from your dashboard.' },
              { q: 'How do auto-callbacks work?', a: 'When you miss a call, our AI instantly calls the prospect back. Each unique conversation counts as one callback toward your monthly limit.' },
              { q: 'Is there a limit on CRM syncs?', a: 'No, all plans include unlimited synchronization with your connected CRM platforms.' },
              { q: 'Do you offer custom enterprise plans?', a: 'Yes, for brokerages with 10+ agents, we offer custom volume pricing and white-label options.' },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all card-hover"
              >
                <h4 className="font-bold mb-3 flex items-center gap-2 text-slate-900 dark:text-white">
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Info size={14} className="text-blue-600" />
                  </div>
                  {faq.q}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
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

        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <motion.div variants={fadeInUp} className="mb-8">
            <Zap size={48} className="mx-auto text-yellow-400 mb-4" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight"
          >
            Still have questions?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-10"
          >
            Our team is here to help you find the perfect plan for your business.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-10 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Talk to Sales
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PricingPage;
