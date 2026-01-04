
import React from 'react';
import { PhoneCall, MessageCircle, Calendar, Shield, Zap, Search, Globe, Repeat } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h1 className="text-6xl font-black mb-8 leading-tight">Automation that actually feels human.</h1>
          <p className="text-xl text-slate-500">Traditional auto-dialers are robotic. Iron Maiden uses next-gen LLMs to handle real estate conversations naturally.</p>
        </div>

        <div className="space-y-40">
          {[
            {
              title: "Instant AI Callback",
              desc: "The moment you miss a call, our AI triggers a callback. No more calling back 2 hours later to find the lead has already spoken to another agent.",
              details: ["Response in < 60 seconds", "Local presence caller ID", "Intelligent voice detection", "Automatic voice-to-SMS fallback"],
              icon: PhoneCall,
              img: "https://picsum.photos/seed/feat1/800/600",
              reverse: false
            },
            {
              title: "Lead Qualification v3",
              desc: "Don't just capture a name. Our AI asks the right questions: What's their budget? When are they looking to move? Are they pre-approved?",
              details: ["Budget & Timeline discovery", "Location preference analysis", "Automatic pre-approval checking", "Sentiment & Urgency scoring"],
              icon: Search,
              img: "https://picsum.photos/seed/feat2/800/600",
              reverse: true
            },
            {
              title: "Smart Calendar Integration",
              desc: "Let the AI book the showing for you. If a lead is hot, the system checks your availability and puts them directly on your schedule.",
              details: ["Google & Outlook sync", "Custom buffer times", "Showing instructions delivery", "Automated reminders for both parties"],
              icon: Calendar,
              img: "https://picsum.photos/seed/feat3/800/600",
              reverse: false
            }
          ].map((section, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-20 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/20">
                  <section.icon size={32} />
                </div>
                <h2 className="text-4xl font-black mb-6">{section.title}</h2>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">{section.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.details.map((detail, d) => (
                    <div key={d} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                        <Zap size={12} fill="currentColor" />
                      </div>
                      <span className="font-bold text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 dark:border-slate-800">
                  <img src={section.img} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
