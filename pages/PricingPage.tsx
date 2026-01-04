
import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const { pricing } = useCMS();
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-black mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-500 mb-10">Start for free, scale when you're ready. No hidden fees. No long-term contracts.</p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? 'text-blue-600' : 'opacity-50'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-800 relative p-1 transition-all"
            >
              <div className={`w-6 h-6 rounded-full bg-blue-600 shadow-lg absolute top-1 transition-all ${isYearly ? 'left-7' : 'left-1'}`}></div>
            </button>
            <span className={`text-sm font-bold ${isYearly ? 'text-blue-600' : 'opacity-50'}`}>Yearly (Save 20%)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricing.map((plan) => (
            <div 
              key={plan.id} 
              className={`p-10 rounded-[3rem] border-2 transition-all ${plan.isPopular ? 'bg-white dark:bg-slate-800 border-blue-600 shadow-2xl relative' : 'bg-slate-50 dark:bg-slate-900 border-transparent hover:border-slate-200 dark:hover:border-slate-800'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white rounded-full text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black mb-4">{plan.name}</h3>
              <p className="text-slate-500 mb-8 h-12">{plan.description}</p>
              <div className="flex items-end gap-2 mb-10">
                <span className="text-5xl font-black">${isYearly ? plan.yearlyPrice : plan.price}</span>
                <span className="text-slate-400 font-bold mb-2">/month</span>
              </div>
              
              <ul className="space-y-5 mb-10">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <Check size={18} className="text-blue-600 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`block w-full py-4 text-center font-bold rounded-2xl transition-all ${plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/30' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes, our monthly plans are no-contract. You can cancel with a single click from your dashboard.' },
              { q: 'How do auto-callbacks work?', a: 'When you miss a call, our AI instantly calls the prospect back. Each unique conversation counts as one callback toward your monthly limit.' },
              { q: 'Is there a limit on CRM syncs?', a: 'No, all plans include unlimited synchronization with your connected CRM platforms.' },
              { q: 'Do you offer custom enterprise plans?', a: 'Yes, for brokerages with 10+ agents, we offer custom volume pricing and white-label options.' },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold mb-3 flex items-center gap-2"><Info size={16} className="text-blue-600" /> {faq.q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
