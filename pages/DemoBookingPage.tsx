
import React from 'react';
import { Calendar, Video, Clock, CheckCircle } from 'lucide-react';

const DemoBookingPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h1 className="text-4xl font-black mb-6">Schedule a Personalized Demo</h1>
            <p className="text-lg text-slate-500 mb-10">See how AGenetic Realtor fits into your specific workflow. 15 minutes is all it takes to transform your lead response game.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <Video className="text-blue-600 shrink-0" />
                <div>
                  <p className="font-bold">Live Product Walkthrough</p>
                  <p className="text-sm text-slate-500">Watch the AI handle a live call in real-time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-blue-600 shrink-0" />
                <div>
                  <p className="font-bold">Workflow Audit</p>
                  <p className="text-sm text-slate-500">We'll identify where you're losing the most leads.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-blue-600 shrink-0" />
                <div>
                  <p className="font-bold">ROI Projections</p>
                  <p className="text-sm text-slate-500">Get a custom revenue forecast based on your data.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl p-1 overflow-hidden min-h-[600px] flex items-center justify-center border border-slate-100 dark:border-slate-700">
            {/* Embedded Calendar Widget Mockup */}
            <div className="text-center p-12">
               <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <Calendar size={48} className="text-blue-600" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Calendar is Loading...</h3>
               <p className="text-slate-500">Connecting to our specialist's schedule...</p>
               <div className="mt-8 flex justify-center gap-2">
                 <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                 <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                 <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBookingPage;
