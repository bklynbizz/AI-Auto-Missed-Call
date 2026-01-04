
import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { CheckCircle, Shield } from 'lucide-react';

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
      <div className="min-h-screen pt-40 flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center p-12 rounded-[3rem] bg-white dark:bg-slate-800 shadow-2xl">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">You're on the list!</h2>
          <p className="text-slate-500 mb-8">We've received your request. An AI specialist will call you shortly to set up your account and start your 14-day trial.</p>
          <button 
            onClick={() => window.location.href = '#/'}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl font-black mb-6">Start your 14-day free trial today</h1>
          <p className="text-xl text-slate-500 mb-10">Get set up in less than 2 minutes. No credit card required. Cancel anytime.</p>
          
          <div className="space-y-6">
            {[
              'Unlimited AI auto-callbacks',
              'Full CRM integration (Zillow, FUB, etc.)',
              'Custom AI script customization',
              'TCPA & DNC compliant out of the box'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle size={14} />
                </div>
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex items-start gap-4">
            <Shield className="text-blue-600 shrink-0" size={32} />
            <div>
              <p className="font-bold mb-1">Privacy Guarantee</p>
              <p className="text-sm text-slate-500">Your data is yours. We never sell lead information to third parties. Our systems are SOC2 compliant and encrypted.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-70">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-70">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold opacity-70">Phone Number</label>
              <input 
                required
                type="tel" 
                placeholder="(555) 000-0000"
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold opacity-70">Brokerage Name</label>
              <input 
                type="text" 
                placeholder="e.g. Keller Williams"
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all"
                value={formData.brokerage}
                onChange={(e) => setFormData({...formData, brokerage: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold opacity-70">Estimated Missed Calls Per Week: {formData.missedCallsPerWeek}</label>
              <input 
                type="range" min="1" max="50"
                className="w-full accent-blue-600"
                value={formData.missedCallsPerWeek}
                onChange={(e) => setFormData({...formData, missedCallsPerWeek: parseInt(e.target.value)})}
              />
            </div>

            <button type="submit" className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/30 transition-all">
              Activate Trial Now
            </button>
            <p className="text-xs text-center text-slate-400">By signing up, you agree to our Terms of Service and Privacy Policy. We may send you transactional texts about your account setup.</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
