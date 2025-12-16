import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Code2, Briefcase, Zap, Target } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      <div className="max-w-4xl mx-auto py-16 px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-8"></div>
            
            <div className="prose prose-lg text-slate-600 mx-auto text-center max-w-2xl leading-relaxed">
              <p className="mb-6">
                I am a final-year <strong>Computer Science Diploma</strong> student with a strong passion for industrial-grade application development. 
                My vision is to modernize the energy sector in Sarawak through intelligent software solutions.
              </p>
              <p>
                I actively study <strong>Sarawak Energy's</strong> grid infrastructure and renewable initiatives (like the Bakun and Murum HEPs) to create relevant, data-driven projects that demonstrate how IT can optimize sustainable energy management.
              </p>
            </div>
          </div>

          {/* Experience & Education Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="text-blue-600" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">Experience</h3>
                </div>
                <ul className="space-y-6">
                  <li className="relative pl-6 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-blue-500"></div>
                    <h4 className="font-bold text-slate-800">Web Developer Intern (Simulated)</h4>
                    <p className="text-sm text-slate-500 mb-1">Sarawak Energy Berhad (Case Study)</p>
                    <p className="text-sm text-slate-600">Developed prototype dashboard for monitoring hydro dam telemetry using React & Recharts.</p>
                  </li>
                  <li className="relative pl-6 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-slate-300"></div>
                    <h4 className="font-bold text-slate-800">Freelance Frontend Dev</h4>
                    <p className="text-sm text-slate-500 mb-1">Various Local SMEs</p>
                    <p className="text-sm text-slate-600">Built responsive landing pages and inventory systems for local businesses in Kuching.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-emerald-600" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">Education</h3>
                </div>
                <ul className="space-y-6">
                  <li className="relative pl-6 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-500"></div>
                    <h4 className="font-bold text-slate-800">Diploma in Computer Science</h4>
                    <p className="text-sm text-slate-500 mb-1">Politeknik Kuching Sarawak</p>
                    <p className="text-sm text-slate-600">CGPA: 3.89 • Dean's List Award (4 Semesters)</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Algorithms</span>
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">Database Design</span>
                      <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-md">System Analysis</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Goals / Company Alignment Section */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 opacity-10">
                <Zap size={200} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-emerald-400" size={24} />
                <h3 className="text-xl font-bold">Career Objective: The Sarawak Energy Vision</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    My goal is to contribute to <strong>Sarawak Energy's digitalization roadmap</strong>. I aim to leverage my skills in full-stack development to build systems that improve grid reliability, optimize rural electrification planning, and transparently communicate sustainability metrics to the public.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold">1</div>
                    <p className="text-sm text-slate-300"><strong className="text-white">Smart Grid Visualization:</strong> Creating intuitive UIs for complex SCADA data.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold">2</div>
                    <p className="text-sm text-slate-300"><strong className="text-white">Rural Access Tools:</strong> Mobile-first apps for calculating solar needs in remote longhouses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Code2 size={24} className="text-purple-600" />
              Technical Proficiency
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python', 'SQL', 'Git', 'Data Vis'].map((skill) => (
                <div key={skill} className="bg-white/90 backdrop-blur border border-slate-200 p-3 rounded-lg text-center text-slate-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all cursor-default shadow-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;