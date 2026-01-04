
import React, { useState } from 'react';
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
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { config, testimonials, addLead } = useCMS();
  const [calcCalls, setCalcCalls] = useState(5);
  const [calcCommission, setCalcCommission] = useState(10000);

  const estimatedLoss = calcCalls * calcCommission * 0.15; // Assuming 15% conversion rate on missed calls

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-6 animate-pulse">
              <Zap size={14} /> NEW: AI Voice v3.0 Just Launched
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              {config.heroHeadline}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              {config.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                Try Free for 14 Days <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-blue-200 dark:border-blue-900/50 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-[0_0_15px_rgba(37,99,235,0.15)] dark:shadow-[0_0_25px_rgba(37,99,235,0.2)] hover:shadow-[0_0_35px_rgba(37,99,235,0.4)]">
                Agent Login
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 10}/40/40`} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" />
                ))}
              </div>
              <span>Trusted by 500+ Top Realtors</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="animate-float relative">
               <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 aspect-video">
                  <img src="https://picsum.photos/seed/dash/1200/800" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                      <Play size={32} fill="white" />
                    </button>
                  </div>
               </div>
               {/* Badges removed to prevent obstruction */}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-slate-900 py-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 text-white/60">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white">50,000+</p>
              <p className="text-sm">Leads Captured</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white">&lt;60s</p>
              <p className="text-sm">Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white">500+</p>
              <p className="text-sm">Active Realtors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-white flex items-center justify-center gap-2"><ShieldCheck className="text-green-400" /> TCPA</p>
              <p className="text-sm">Compliant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-900" id="features">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold mb-4">Everything You Need to Capture Every Lead</h2>
            <p className="text-lg text-slate-500">Stop worrying about your phone and start focusing on your clients. Our suite of AI tools works in the background 24/7.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: PhoneCall, title: 'Instant Auto-Callback', desc: 'AI calls back within 60 seconds of any missed call.' },
              { icon: MessageCircle, title: 'Smart AI Conversations', desc: 'Natural dialogue that qualifies leads and captures key data.' },
              { icon: Calendar, title: 'Automatic Scheduling', desc: 'Books showings directly into your Google or Outlook calendar.' },
              { icon: BarChart3, title: 'Lead Intelligence', desc: 'Captures property interests, budget, and timeline automatically.' },
              { icon: Zap, title: 'CRM Integration', desc: 'Syncs with Zillow, Follow Up Boss, KvCore, and major CRMs.' },
              { icon: MessageCircle, title: 'SMS Follow-Up', desc: 'Sends property links and confirmation texts immediately.' },
              { icon: Clock, title: '24/7 Availability', desc: 'Never miss a weekend or late-night lead again.' },
              { icon: ShieldCheck, title: 'Recording & Transcripts', desc: 'Review every conversation for compliance and training.' },
            ].map((feat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-transparent hover:border-blue-100 group">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feat.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto max-w-5xl rounded-[3rem] bg-blue-600 p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold mb-6">How much is a missed call costing you?</h2>
              <p className="text-xl opacity-90 mb-10">Use our interactive calculator to see the potential revenue you're leaving on the table every month.</p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold">Missed calls per week</label>
                    <span className="font-mono bg-white/20 px-2 rounded">{calcCalls}</span>
                  </div>
                  <input 
                    type="range" min="1" max="20" value={calcCalls} 
                    onChange={(e) => setCalcCalls(parseInt(e.target.value))}
                    className="w-full accent-white" 
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold">Average commission per sale</label>
                    <span className="font-mono bg-white/20 px-2 rounded">${calcCommission.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="5000" max="50000" step="1000" value={calcCommission} 
                    onChange={(e) => setCalcCommission(parseInt(e.target.value))}
                    className="w-full accent-white" 
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 text-center">
              <p className="uppercase tracking-widest text-xs font-bold mb-4 opacity-70">Monthly Opportunity Loss</p>
              <p className="text-6xl font-black mb-6">${estimatedLoss.toLocaleString()}</p>
              <p className="text-sm opacity-80 mb-8 italic">*Based on a 15% conversion rate from missed calls to closed deals.</p>
              <Link to="/contact" className="block w-full py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-xl">
                Stop Losing Money Today
              </Link>
            </div>
          </div>
          {/* Decor */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
           <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Trusted by Top-Performing Realtors</h2>
            <p className="text-slate-500">Join 500+ agents who have automated their growth.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((t, i) => (
               <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.image} className="w-14 h-14 rounded-full border-2 border-blue-100" />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-xs text-slate-500">{t.role} @ {t.brokerage}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 italic mb-6">"{t.content}"</p>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Result</p>
                    <p className="text-lg font-black">{t.result}</p>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center max-w-4xl">
           <h2 className="text-5xl lg:text-7xl font-black mb-8">Ready to capture every lead?</h2>
           <p className="text-2xl text-slate-500 mb-12">Start your 14-day free trial today. No credit card required. No risk. Just more deals.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-500/40 transition-all">
                Start Free Trial
              </Link>
              <Link to="/demo" className="px-12 py-5 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold text-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                Book a Demo
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
