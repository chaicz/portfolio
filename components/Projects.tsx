import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import HydroMonitor from './projects/HydroMonitor';
import SolarCalculator from './projects/SolarCalculator';
import TariffCalculator from './projects/TariffCalculator';
import LoadBalancer from './projects/LoadBalancer';
import CarbonTracker from './projects/CarbonTracker';
import BackgroundAnimation from './BackgroundAnimation';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Monitoring', 'Tools', 'Sustainability'];

  // Project data structure with category mapping
  const projects = [
    { 
      id: 'hydro', 
      component: <HydroMonitor />, 
      category: 'Monitoring',
      colSpan: 'col-span-1 md:col-span-2 lg:col-span-2'
    },
    { 
      id: 'tariff', 
      component: <TariffCalculator />, 
      category: 'Tools',
      colSpan: 'col-span-1'
    },
    { 
      id: 'solar', 
      component: <SolarCalculator />, 
      category: 'Tools',
      colSpan: 'col-span-1'
    },
    { 
      id: 'load', 
      component: <LoadBalancer />, 
      category: 'Monitoring',
      colSpan: 'col-span-1'
    },
    { 
      id: 'carbon', 
      component: <CarbonTracker />, 
      category: 'Sustainability',
      colSpan: 'col-span-1'
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const cardStyle = "bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 transition-shadow duration-300 h-full cursor-pointer overflow-hidden relative z-10";
  const hoverEffect = {
    y: -8,
    scale: 1.01,
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Energy Sector Projects</h2>
            <p className="text-slate-500 mt-2 max-w-2xl">Interactive tools developed to simulate and solve energy challenges in Sarawak. Hover cards to interact.</p>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 mr-2 text-slate-400 text-sm">
              <Filter size={16} />
              <span>Filter:</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id}
                variants={item}
                initial="hidden" 
                animate="show"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={hoverEffect} 
                className={`${cardStyle} ${project.colSpan} h-[380px]`}
              >
                 {project.component}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;