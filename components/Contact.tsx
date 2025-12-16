import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Phone, Clock } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto py-16 px-4 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
        >
          <div className="p-10 bg-slate-900 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I am actively seeking internship or entry-level opportunities within the energy and utility sector in Sarawak. Feel free to reach out for a discussion.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300 group hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                     <Mail size={20} />
                  </div>
                  <span>student@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300 group hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                     <Phone size={20} />
                  </div>
                  <span>+60 12-345 6789</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300 group hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                     <MapPin size={20} />
                  </div>
                  <span>Kuching, Sarawak, Malaysia</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300 group hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                     <Clock size={20} />
                  </div>
                  <span>Available for Immediate Hire</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-8 border-t border-slate-800">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="p-10 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="Your Name" />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="e.g. Sarawak Energy" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="email@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="Tell me about your project or opportunity..."></textarea>
              </div>
              <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
                Send Message <Mail size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;