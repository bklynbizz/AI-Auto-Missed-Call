
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-5xl font-black mb-12">Privacy Policy</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
          <p className="text-lg font-bold">Last Updated: October 2023</p>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Data Collection</h2>
            <p>At Iron Maiden Realty, we prioritize the security and privacy of your real estate data. We collect information necessary to provide our AI callback services, including phone numbers, conversation transcripts, and lead details provided during interactions.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. How We Use Data</h2>
            <p>Data is used exclusively for training your specific AI instance, syncing with your connected CRM, and improving the accuracy of lead qualification. We NEVER sell your leads or your data to third-party marketing companies or competitors.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Security</h2>
            <p>All data is encrypted in transit and at rest using industry-standard AES-256 encryption. Our systems are housed in SOC 2 Type II compliant data centers.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
