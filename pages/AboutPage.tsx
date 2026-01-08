
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Heart, Shield, Users, TrendingUp, Award, ArrowRight, Sparkles } from 'lucide-react';
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

const AboutPage: React.FC = () => {
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
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6"
            >
              <Sparkles size={16} className="text-blue-500" />
              <span>Our Story</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              Our Mission is Simple: <span className="gradient-text">Save Every Lead.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed"
            >
              AGenetic Realtor was founded by real estate agents who were tired of losing deals because they were busy doing the work their clients hired them for—being in the field.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />

        <div className="container mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '500+', label: 'Active Brokerages', icon: Users },
              { value: '10K+', label: 'Weekly Conversations', icon: TrendingUp },
              { value: '$50M+', label: 'Commission Captured', icon: Award },
              { value: '98%', label: 'Customer Satisfaction', icon: Heart },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <stat.icon className="text-blue-400" size={24} />
                </div>
                <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: 'Efficiency First',
                text: 'We believe realtors should spend their time closing, not chasing missed calls.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Heart,
                title: 'Realtor-Centric',
                text: "Built by agents, for agents. We understand the unique pressure of a 'now' market.",
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Shield,
                title: 'Trust & Integrity',
                text: 'Your leads are your most valuable asset. We treat them with the security they deserve.',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((val, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="group p-10 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 text-center card-hover"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${val.color} p-0.5 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-[22px] bg-white dark:bg-slate-800 flex items-center justify-center">
                    <val.icon className="text-slate-700 dark:text-white" size={36} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{val.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{val.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Story Section */}
      <AnimatedSection className="py-32 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <motion.div variants={fadeInLeft} className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white leading-tight">
                From a spreadsheet to a <span className="gradient-text">global platform.</span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                What started as a simple Python script to help our founder manage missed calls during a luxury open house has grown into a sophisticated AI platform serving 500+ brokerages across North America.
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                Today, we handle over 10,000 conversations every single week, helping agents capture millions of dollars in commission that would have otherwise vanished into voice mail.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                Join Our Story
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={fadeInRight} className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <div className="gradient-border">
                    <img
                      src="https://picsum.photos/seed/team1/400/500"
                      className="rounded-[calc(1rem-2px)] w-full h-auto object-cover"
                      alt="Team member"
                    />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="gradient-border">
                    <img
                      src="https://picsum.photos/seed/team2/400/500"
                      className="rounded-[calc(1rem-2px)] w-full h-auto object-cover"
                      alt="Team member"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight"
          >
            Ready to become part of our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">success story?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-12"
          >
            Join 500+ top realtors who have transformed their business with AI-powered lead capture.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group relative px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/demo"
              className="group px-12 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
