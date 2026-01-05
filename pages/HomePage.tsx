
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useCMS } from '../context/CMSContext';
import {
  CheckCircle,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Calendar,
  Zap,
  ShieldCheck,
  Users,
  BarChart3,
  Clock,
  Play,
  Sparkles,
  TrendingUp,
  Star,
  X,
  PhoneMissed,
  Bot,
  CalendarCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation variants
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

// Animated counter component
const AnimatedCounter: React.FC<{ target: number; suffix?: string; prefix?: string; duration?: number }> = ({
  target, suffix = '', prefix = '', duration = 2000
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// Section wrapper with scroll animation
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Video Modal Component
const VideoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Video placeholder - replace with actual video embed */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600/20 flex items-center justify-center">
              <Play size={32} className="text-blue-400 ml-1" />
            </div>
            <p className="text-white text-xl font-semibold mb-2">Demo Video</p>
            <p className="text-slate-400 text-sm">Replace with your YouTube/Vimeo embed</p>
            {/* Example embed: */}
            {/* <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
            /> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  const { config, testimonials, addLead } = useCMS();
  const [calcCalls, setCalcCalls] = useState(5);
  const [calcCommission, setCalcCommission] = useState(10000);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const estimatedLoss = calcCalls * calcCommission * 0.15;

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const features = [
    { icon: PhoneCall, title: 'Instant Auto-Callback', desc: 'AI calls back within 60 seconds of any missed call.', color: 'from-blue-500 to-cyan-500' },
    { icon: MessageCircle, title: 'Smart AI Conversations', desc: 'Natural dialogue that qualifies leads and captures key data.', color: 'from-purple-500 to-pink-500' },
    { icon: Calendar, title: 'Automatic Scheduling', desc: 'Books showings directly into your Google or Outlook calendar.', color: 'from-orange-500 to-red-500' },
    { icon: BarChart3, title: 'Lead Intelligence', desc: 'Captures property interests, budget, and timeline automatically.', color: 'from-green-500 to-emerald-500' },
    { icon: Zap, title: 'CRM Integration', desc: 'Syncs with Zillow, Follow Up Boss, KvCore, and major CRMs.', color: 'from-yellow-500 to-orange-500' },
    { icon: MessageCircle, title: 'SMS Follow-Up', desc: 'Sends property links and confirmation texts immediately.', color: 'from-indigo-500 to-purple-500' },
    { icon: Clock, title: '24/7 Availability', desc: 'Never miss a weekend or late-night lead again.', color: 'from-teal-500 to-cyan-500' },
    { icon: ShieldCheck, title: 'Recording & Transcripts', desc: 'Review every conversation for compliance and training.', color: 'from-rose-500 to-pink-500' },
  ];

  return (
    <>
    <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"></div>
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 right-1/3 w-72 h-72 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10"
        >
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6"
            >
              <Sparkles size={16} className="text-blue-500" />
              <span>NEW: AI Voice v3.0 Just Launched</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              <span className="block">{config.heroHeadline.split(' ').slice(0, 2).join(' ')}</span>
              <span className="gradient-text">{config.heroHeadline.split(' ').slice(2).join(' ')}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed"
            >
              {config.heroSubheadline}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Try Free for 14 Days</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Play size={18} className="text-blue-600" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.img
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/40/40`}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 shadow-md"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-slate-500 dark:text-slate-400">Trusted by <strong className="text-slate-700 dark:text-white">500+</strong> Top Realtors</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="gradient-border">
                <div className="relative z-10 rounded-[14px] overflow-hidden bg-slate-900 aspect-video">
                  <img src="https://picsum.photos/seed/dash/1200/800" className="w-full h-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={32} fill="white" className="ml-1" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="glass rounded-lg px-3 py-2 text-white text-sm font-medium">
                      Live Demo Preview
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      2:34
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Response Rate</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">98.5%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <PhoneCall className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Avg Callback</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">&lt;45 sec</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <AnimatedSection className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: 50000, suffix: '+', label: 'Leads Captured', icon: Users },
              { value: 60, prefix: '<', suffix: 's', label: 'Response Time', icon: Clock },
              { value: 500, suffix: '+', label: 'Active Realtors', icon: BarChart3 },
              { value: 99, suffix: '%', label: 'TCPA Compliant', icon: ShieldCheck },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <stat.icon className="text-blue-400" size={24} />
                </div>
                <p className="text-4xl md:text-5xl font-black text-white mb-2">
                  <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="py-24 px-6 bg-white dark:bg-slate-900 relative" id="how-it-works">
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Get started in minutes. Our AI handles everything automatically so you can focus on closing deals.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent -translate-y-1/2 z-0" />

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10"
            >
              {[
                {
                  step: 1,
                  icon: PhoneMissed,
                  title: 'Missed Call Detected',
                  description: 'When you miss a call, our system instantly detects it and triggers the AI callback sequence within seconds.',
                  color: 'from-blue-500 to-cyan-500',
                  bgColor: 'bg-blue-500'
                },
                {
                  step: 2,
                  icon: Bot,
                  title: 'AI Calls Back',
                  description: 'Our advanced AI voice agent calls the lead back, engages in natural conversation, and qualifies them in real-time.',
                  color: 'from-purple-500 to-pink-500',
                  bgColor: 'bg-purple-500'
                },
                {
                  step: 3,
                  icon: CalendarCheck,
                  title: 'Appointment Booked',
                  description: 'The AI schedules appointments directly to your calendar, sends confirmations, and syncs everything to your CRM.',
                  color: 'from-green-500 to-emerald-500',
                  bgColor: 'bg-green-500'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="relative"
                >
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 lg:p-10 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 card-hover h-full">
                    {/* Step number */}
                    <div className={`absolute -top-4 left-8 w-8 h-8 ${item.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mb-6`}>
                      <div className="w-full h-full rounded-[14px] bg-white dark:bg-slate-800 flex items-center justify-center">
                        <item.icon className="text-slate-700 dark:text-white" size={28} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>

                    {/* Arrow for desktop */}
                    {i < 2 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                        <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                          <ArrowRight className="text-blue-600" size={20} />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA below steps */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Ready to see it in action?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play size={20} />
                Watch 2-Minute Demo
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative" id="features">
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
              Powerful Features
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Everything You Need to <span className="gradient-text">Capture Every Lead</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Stop worrying about your phone and start focusing on your clients. Our suite of AI tools works in the background 24/7.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feat, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 card-hover"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-[14px] bg-white dark:bg-slate-800 flex items-center justify-center">
                    <feat.icon className="text-slate-700 dark:text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ROI Calculator */}
      <AnimatedSection className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            variants={scaleIn}
            className="relative rounded-[2.5rem] overflow-hidden"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient bg-300%" />
            <div className="absolute inset-[2px] rounded-[calc(2.5rem-2px)] bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700" />

            <div className="relative p-10 lg:p-16">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <motion.div variants={fadeInLeft} className="lg:w-1/2 text-white">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                    <BarChart3 size={14} />
                    ROI Calculator
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    How much is a missed call <span className="text-blue-200">costing you?</span>
                  </h2>
                  <p className="text-xl text-white/80 mb-10 leading-relaxed">
                    Use our interactive calculator to see the potential revenue you're leaving on the table every month.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="font-semibold">Missed calls per week</label>
                        <span className="font-mono bg-white/20 px-3 py-1 rounded-lg">{calcCalls}</span>
                      </div>
                      <input
                        type="range" min="1" max="20" value={calcCalls}
                        onChange={(e) => setCalcCalls(parseInt(e.target.value))}
                        className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-3">
                        <label className="font-semibold">Average commission per sale</label>
                        <span className="font-mono bg-white/20 px-3 py-1 rounded-lg">${calcCommission.toLocaleString()}</span>
                      </div>
                      <input
                        type="range" min="5000" max="50000" step="1000" value={calcCommission}
                        onChange={(e) => setCalcCommission(parseInt(e.target.value))}
                        className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="lg:w-1/2">
                  <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 text-center text-white">
                    <p className="uppercase tracking-widest text-xs font-bold mb-2 text-white/60">Monthly Opportunity Loss</p>
                    <motion.p
                      key={estimatedLoss}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-6xl md:text-7xl font-black mb-4"
                    >
                      ${estimatedLoss.toLocaleString()}
                    </motion.p>
                    <p className="text-sm text-white/60 mb-8">*Based on a 15% conversion rate from missed calls to closed deals.</p>

                    <Link
                      to="/contact"
                      className="group relative block w-full py-4 px-8 bg-white text-blue-600 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Stop Losing Money Today
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400/10 blur-3xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="py-24 px-6 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Trusted by <span className="gradient-text">Top-Performing Realtors</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Join 500+ agents who have automated their growth.</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className={`relative p-8 rounded-3xl bg-white dark:bg-slate-800 border transition-all duration-500 card-hover ${
                  i === activeTestimonial
                    ? 'border-blue-300 dark:border-blue-500 shadow-xl shadow-blue-500/10'
                    : 'border-slate-100 dark:border-slate-700 shadow-lg'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img src={t.image} className="w-14 h-14 rounded-full object-cover" />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center">
                      <CheckCircle size={10} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.role} @ {t.brokerage}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">"{t.content}"</p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">Result</p>
                  <p className="text-xl font-black text-slate-900 dark:text-white">{t.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial navigation dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeTestimonial
                    ? 'bg-blue-600 w-8'
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-50" />

        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-8">
              <Zap size={16} className="text-yellow-400" />
              Start capturing leads in minutes
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-black mb-8 text-white leading-tight"
          >
            Ready to capture <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">every lead?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed"
          >
            Start your 14-day free trial today. No credit card required. No risk. Just more deals.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="group relative px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              to="/demo"
              className="group px-12 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Calendar size={20} />
              Book a Demo
            </Link>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-slate-400 text-sm flex items-center justify-center gap-4"
          >
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              24/7 support
            </span>
          </motion.p>
        </div>
      </AnimatedSection>
    </div>
    </>
  );
};

export default HomePage;
