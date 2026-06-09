import React, { useState } from 'react';
import { Briefcase, Code, Palette, Lightbulb, X, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedExp, setSelectedExp] = useState(null);

  // Map icon types to Lucide components with specific styling
  const getIcon = (type) => {
    const iconClass = "w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300";
    switch (type) {
      case 'internship':
        return (
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 flex items-center justify-center">
            <Briefcase className={iconClass} />
            <div className="absolute inset-0 bg-indigo-500/20 blur-md rounded-2xl opacity-50 pointer-events-none" />
          </div>
        );
      case 'code':
        return (
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 flex items-center justify-center">
            <Code className={iconClass} />
            <div className="absolute inset-0 bg-purple-500/20 blur-md rounded-2xl opacity-50 pointer-events-none" />
          </div>
        );
      case 'design':
        return (
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/10 border border-pink-500/30 flex items-center justify-center">
            <Palette className={iconClass} />
            <div className="absolute inset-0 bg-pink-500/20 blur-md rounded-2xl opacity-50 pointer-events-none" />
          </div>
        );
      case 'bulb':
      default:
        return (
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/30 flex items-center justify-center">
            <Lightbulb className={iconClass} />
            <div className="absolute inset-0 bg-amber-500/20 blur-md rounded-2xl opacity-50 pointer-events-none" />
          </div>
        );
    }
  };

  return (
    <section id="about" className="relative py-24 bg-bg-darker overflow-hidden">
      {/* Glow Backdrop */}
      <div className="glow-blur w-[500px] h-[500px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp) => (
            <div 
              key={exp.id}
              className="glass-card p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-start group relative overflow-hidden"
            >
              {/* Outer Card Radial Glow on Hover */}
              <div className="absolute inset-0 bg-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Left Column: Styled semi-3D Icon badge */}
              <div className="flex-shrink-0">
                {getIcon(exp.iconType)}
              </div>

              {/* Right Column: Title and details */}
              <div className="flex-grow text-left">
                <span className="text-xs font-semibold text-secondary tracking-wider block mb-1">
                  {exp.duration}
                </span>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors duration-300">
                  {exp.title}
                </h3>
                <h4 className="text-sm font-semibold text-gray-400 mb-4">
                  {exp.company}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <button 
                  onClick={() => setSelectedExp(exp)}
                  className="px-5 py-2 rounded-full border border-primary/40 text-xs text-secondary font-medium tracking-wide hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Experience Details Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            onClick={() => setSelectedExp(null)} 
            className="absolute inset-0 bg-bg-darker/80 backdrop-blur-md cursor-pointer"
          />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-lg glass-card-no-hover bg-bg-dark border border-primary/20 p-8 rounded-3xl z-10 shadow-2xl animate-scale-in">
            {/* Close button */}
            <button 
              onClick={() => setSelectedExp(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="text-left">
              <span className="text-xs font-semibold text-secondary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">
                {selectedExp.duration}
              </span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-1">
                {selectedExp.title}
              </h3>
              <h4 className="text-lg font-semibold text-gray-400 mb-6 flex items-center">
                <span>{selectedExp.company}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary mx-2"></span>
                <span className="text-sm flex items-center font-normal text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  Internship Profile
                </span>
              </h4>

              <div className="border-t border-primary/10 pt-6">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedExp.description}
                </p>

                <h5 className="font-display font-semibold text-white mb-3 flex items-center text-sm uppercase tracking-wider">
                  <CheckCircle size={16} className="text-primary mr-2" />
                  Key Achievements & Focus:
                </h5>
                <ul className="space-y-2.5 text-sm text-gray-400 pl-6 list-disc marker:text-primary">
                  {selectedExp.id === 1 ? (
                    <>
                      <li>Translated high-fidelity Figma mockups into structured React components.</li>
                      <li>Implemented mobile-responsive designs using Tailwind CSS utility patterns.</li>
                      <li>Cooperated with senior developers to troubleshoot styling and layout issues.</li>
                      <li>Participated in daily standups and sprint planning workflows during the 6-month term.</li>
                    </>
                  ) : (
                    <>
                      <li>Built reusable, component-based frontend codebases.</li>
                      <li>Connected RESTful API requests to update views in real time.</li>
                      <li>Organized assets, variables, and themes to streamline design execution.</li>
                      <li>Validated pages for responsive performance on multiple display dimensions.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
