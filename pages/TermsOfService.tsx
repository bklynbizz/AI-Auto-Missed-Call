
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-5xl font-black mb-12">Terms of Service</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
          <p className="text-lg font-bold">Effective Date: October 2023</p>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptable Use</h2>
            <p>Iron Maiden Realty provides an AI automation platform for real estate professionals. You agree to use the service in compliance with all local, state, and federal real estate regulations, including TCPA and DNC rules.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Subscription & Billing</h2>
            <p>Monthly subscriptions are billed in advance. You may cancel at any time, but no partial refunds will be issued for the remaining days in a billing cycle.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Limitation of Liability</h2>
            <p>While our AI is highly accurate, Iron Maiden Realty is not responsible for the specific content of AI-generated conversations or any loss of business resulting from technical interruptions.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
