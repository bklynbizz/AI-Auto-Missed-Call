
import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  Settings2, 
  Star, 
  DollarSign, 
  Plus, 
  Trash2, 
  Edit2,
  CheckCircle,
  Clock,
  ChevronRight,
  BarChart,
  LogOut
} from 'lucide-react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-slate-900 text-white p-6 border-r border-slate-800">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-black">IM</div>
        <span className="font-bold text-xl tracking-tight">Admin Console</span>
      </div>
      
      <nav className="space-y-2">
        <Link to="/admin" className="flex items-center gap-3 px-4 py-3 bg-blue-600 rounded-xl font-bold transition-all"><LayoutDashboard size={20} /> Overview</Link>
        <Link to="/admin/leads" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition-all"><Users size={20} /> Lead Pipeline</Link>
        <Link to="/admin/cms" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition-all"><FileText size={20} /> CMS Editor</Link>
        <Link to="/admin/pricing" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition-all"><DollarSign size={20} /> Pricing Mgmt</Link>
        <Link to="/admin/testimonials" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition-all"><Star size={20} /> Testimonials</Link>
        <Link to="/admin/settings" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition-all"><Settings size={20} /> Site Settings</Link>
      </nav>

      <div className="absolute bottom-6 left-6 w-full pr-12">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-all"><LogOut size={20} /> View Site</Link>
      </div>
    </div>
  );
};

const Overview: React.FC = () => {
  const { leads } = useCMS();
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black">Admin Dashboard</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center gap-2 font-bold"><Clock size={18} /> Last 30 Days</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 font-bold"><Plus size={18} /> Add Record</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Leads', val: leads.length, change: '+12%', icon: Users, color: 'text-blue-600' },
          { label: 'Active Demos', val: '42', change: '+5%', icon: BarChart, color: 'text-green-600' },
          { label: 'Trial Revenue', val: '$24.5k', change: '+18%', icon: DollarSign, color: 'text-purple-600' },
          { label: 'Avg ROI', val: '420%', change: '+2%', icon: Star, color: 'text-orange-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-900 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">{stat.change}</span>
            </div>
            <p className="text-sm font-bold opacity-50 uppercase tracking-wider">{stat.label}</p>
            <p className="text-3xl font-black">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
          <h2 className="text-xl font-bold">Recent Signups</h2>
          <button className="text-blue-600 font-bold text-sm">View Pipeline</button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900 text-left">
              <th className="p-4 text-xs font-bold uppercase opacity-50">Agent</th>
              <th className="p-4 text-xs font-bold uppercase opacity-50">Brokerage</th>
              <th className="p-4 text-xs font-bold uppercase opacity-50">Date</th>
              <th className="p-4 text-xs font-bold uppercase opacity-50">Status</th>
              <th className="p-4 text-xs font-bold uppercase opacity-50">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.length > 0 ? leads.map((lead) => (
              <tr key={lead.id} className="border-t border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/50">
                <td className="p-4 font-bold">{lead.name}</td>
                <td className="p-4 text-slate-500">{lead.brokerage}</td>
                <td className="p-4 text-sm opacity-60">{new Date(lead.createdAt).toLocaleDateString()}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${lead.status === 'new' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                    {lead.status.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 flex gap-2">
                  <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg"><Edit2 size={16} /></button>
                  <button className="p-2 hover:bg-red-100 text-red-600 rounded-lg"><Trash2 size={16} /></button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan={5} className="p-12 text-center text-slate-400">No leads captured yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CMSEditor: React.FC = () => {
  const { config, updateConfig } = useCMS();
  const [headline, setHeadline] = useState(config.heroHeadline);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-black mb-8">CMS Editor</h1>
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 max-w-4xl shadow-sm">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Settings2 className="text-blue-600" /> Landing Page Content</h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold opacity-70">Main Hero Headline</label>
            <textarea 
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
             <label className="text-sm font-bold opacity-70">Hero Subheadline</label>
             <textarea 
               value={config.heroSubheadline}
               onChange={(e) => updateConfig({ heroSubheadline: e.target.value })}
               className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 min-h-[100px]"
             />
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button className="px-6 py-3 font-bold opacity-50 hover:opacity-100">Reset</button>
            <button 
              onClick={() => updateConfig({ heroHeadline: headline })}
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100">
      <AdminSidebar />
      <div className="ml-64">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/leads" element={<Overview />} />
          <Route path="/cms" element={<CMSEditor />} />
          <Route path="/pricing" element={<div className="p-8"><h1 className="text-3xl font-black">Pricing Manager</h1></div>} />
          <Route path="/testimonials" element={<div className="p-8"><h1 className="text-3xl font-black">Testimonials Manager</h1></div>} />
          <Route path="/settings" element={<div className="p-8"><h1 className="text-3xl font-black">Global Settings</h1></div>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
