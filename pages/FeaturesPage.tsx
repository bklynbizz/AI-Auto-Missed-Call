
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PhoneCall, MessageCircle, Calendar, Shield, Zap, Search, Globe, Repeat, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
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

const FeaturesPage: React.FC = () => {
  const features = [
    {
      title: "Instant AI Callback",
      desc: "The moment you miss a call, our AI triggers a callback. No more calling back 2 hours later to find the lead has already spoken to another agent.",
      details: ["Response in < 60 seconds", "Local presence caller ID", "Intelligent voice detection", "Automatic voice-to-SMS fallback"],
      icon: PhoneCall,
      img: "https://picsum.photos/seed/feat1/800/600",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-600"
    },
    {
      title: "Lead Qualification v3",
      desc: "Don't just capture a name. Our AI asks the right questions: What's their budget? When are they looking to move? Are they pre-approved?",
      details: ["Budget & Timeline discovery", "Location preference analysis", "Automatic pre-approval checking", "Sentiment & Urgency scoring"],
      icon: Search,
      img: "https://picsum.photos/seed/feat2/800/600",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-600"
    },
    {
      title: "Smart Calendar Integration",
      desc: "Let the AI book the showing for you. If a lead is hot, the system checks your availability and puts them directly on your schedule.",
      details: ["Google & Outlook sync", "Custom buffer times", "Showing instructions delivery", "Automated reminders for both parties"],
      icon: Calendar,
      img: "https://picsum.photos/seed/feat3/800/600",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-600"
    },
    {
      title: "CRM Sync & Automation",
      desc: "Every lead, every conversation, every appointment is automatically synced to your CRM. No more manual data entry.",
      details: ["Follow Up Boss integration", "KvCore & Zillow sync", "Custom field mapping", "Real-time updates"],
      icon: Repeat,
      img: "https://picsum.photos/seed/feat4/800/600",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-600"
    }
  ];

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
          className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"
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
              <span>Next-Gen AI Technology</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              Automation that <span className="gradient-text">actually feels human.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
            >
              Traditional auto-dialers are robotic. Iron Maiden uses next-gen LLMs to handle real estate conversations naturally.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
              >
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 px-6">
        <div className="container mx-auto space-y-32">
          {features.map((feature, i) => (
            <AnimatedSection key={i}>
              <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-20 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                  className="lg:w-1/2"
                >
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/20`}>
                    <feature.icon size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">{feature.title}</h2>
                  <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">{feature.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.details.map((detail, d) => (
                      <motion.div
                        key={d}
                        variants={fadeInUp}
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={14} />
                        </div>
                        <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={i % 2 === 0 ? fadeInRight : fadeInLeft}
                  className="lg:w-1/2"
                >
                  <div className="relative">
                    <div className="gradient-border">
                      <div className="rounded-[calc(1rem-2px)] overflow-hidden bg-slate-900">
                        <img src={feature.img} className="w-full h-auto object-cover" alt={feature.title} />
                      </div>
                    </div>
                    {/* Floating accent */}
                    <div className={`absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl`} />
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Additional Features Grid */}
      <AnimatedSection className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-4">
              And Much More
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Everything You Need to <span className="gradient-text">Close More Deals</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, title: 'TCPA Compliant', desc: 'All calls are recorded and compliant with regulations.' },
              { icon: Globe, title: 'Multi-Language', desc: 'AI speaks English, Spanish, and more languages.' },
              { icon: MessageCircle, title: 'SMS Fallback', desc: 'If they don\'t answer, we text them automatically.' },
              { icon: Zap, title: 'Instant Alerts', desc: 'Get notified immediately when a hot lead is captured.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-[14px] bg-white dark:bg-slate-800 flex items-center justify-center">
                    <item.icon className="text-slate-700 dark:text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight"
          >
            Ready to supercharge your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">lead capture?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-12"
          >
            Join 500+ top realtors who never miss a lead again.
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
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default FeaturesPage;
