
import React from 'react';
import { useCMS } from '../context/CMSContext';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const { blogs } = useCMS();

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-black mb-6">Expertise & Insights</h1>
          <p className="text-xl text-slate-500">Strategies, technology guides, and market analysis for the modern automated realtor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-blue-600 shadow-sm">{post.category}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Clock size={14} /> 5 min read</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">{post.title}</h2>
                <p className="text-slate-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 font-bold text-blue-600 group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
