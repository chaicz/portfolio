import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Server, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import BackgroundAnimation from './BackgroundAnimation';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <BackgroundAnimation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-slate-600">Open for Internship / Employment</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Building Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Energy Solutions
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              I develop efficient, scalable web applications with a special focus on sustainable technology and the Sarawak energy sector.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <NavLink 
                to="/projects" 
                className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
              >
                View Portfolio <ArrowRight size={18} />
              </NavLink>
              <NavLink 
                to="/contact" 
                className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                Contact Me
              </NavLink>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>5+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>CS Diploma Candidate</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                  <Code className="text-blue-500 mb-3" size={32} />
                  <h3 className="font-bold text-slate-800">Frontend</h3>
                  <p className="text-sm text-slate-500">React, TypeScript, Tailwind</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                  <Server className="text-purple-500 mb-3" size={32} />
                  <h3 className="font-bold text-slate-800">Logic</h3>
                  <p className="text-sm text-slate-500">Algorithms, Data Structure</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-emerald-600 p-6 rounded-2xl shadow-lg border border-emerald-500 text-white hover:-translate-y-1 transition-transform duration-300">
                  <Database className="text-emerald-100 mb-3" size={32} />
                  <h3 className="font-bold">Data</h3>
                  <p className="text-sm text-emerald-100">Real-time Visualization</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;