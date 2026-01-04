
import React from 'react';
import { Target, Heart, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-32">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-7xl font-black mb-8">Our Mission is Simple: Save Every Lead.</h1>
          <p className="text-2xl text-slate-500 leading-relaxed">Iron Maiden was founded by real estate agents who were tired of losing deals because they were busy doing the work their clients hired them for—being in the field.</p>
        </div>
      </section>

      <section className="px-6 py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: 'Efficiency First', text: 'We believe realtors should spend their time closing, not chasing missed calls.' },
              { icon: Heart, title: 'Realtor-Centric', text: "Built by agents, for agents. We understand the unique pressure of a 'now' market." },
              { icon: Shield, title: 'Trust & Integrity', text: 'Your leads are your most valuable asset. We treat them with the security they deserve.' }
            ].map((val, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-blue-500/20">
                  <val.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                <p className="text-slate-500 leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
             <h2 className="text-5xl font-black mb-8">From a spreadsheet to a global platform.</h2>
             <p className="text-lg text-slate-500 mb-6">What started as a simple Python script to help our founder manage missed calls during a luxury open house has grown into a sophisticated AI platform serving 500+ brokerages across North America.</p>
             <p className="text-lg text-slate-500">Today, we handle over 10,000 conversations every single week, helping agents capture millions of dollars in commission that would have otherwise vanished into voice mail.</p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/team1/400/500" className="rounded-3xl shadow-xl mt-8" />
            <img src="https://picsum.photos/seed/team2/400/500" className="rounded-3xl shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
