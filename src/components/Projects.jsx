import React from 'react';
import { ExternalLink } from 'lucide-react';

// const GithubIcon = ({ size = 20, className }) => (
//   <svg 
//     viewBox="0 0 24 24" 
//     width={size} 
//     height={size} 
//     fill="currentColor" 
//     className={className}
//   >
//     <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
//   </svg>
// );
import { portfolioData } from '../data/portfolio';

// Import screenshot images
import comfyStoreImg from '../assets/thecomfystore.png';
import weatherDashboardImg from '../assets/weatherdashboard.png';
import floridaImg from '../assets/florida.png';
import spaceTravelImg from '../assets/spacetravel.png';

// Map project ID to corresponding image
const projectImages = {
  1: comfyStoreImg,
  2: weatherDashboardImg,
  3: floridaImg,
  4: spaceTravelImg
};

export default function Projects() {
  const { projects } = portfolioData;

  // Renders a high-fidelity mockup of the web page screenshot inside a browser container
  const renderProjectMockup = (id, title, url) => {
    return (
      <div className="relative w-full h-[240px] sm:h-[300px] rounded-2xl border border-primary/10 bg-bg-darker overflow-hidden shadow-2xl group/mockup flex flex-col">
        {/* Browser Top Header Bar */}
        <div className="bg-bg-dark/80 px-4 py-2.5 border-b border-primary/5 flex items-center space-x-2 flex-shrink-0">
          {/* Browser Dots */}
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          {/* Mock Address Bar */}
          <div className="flex-grow max-w-xs mx-auto bg-bg-darker/60 text-[9px] text-gray-500 px-3 py-1 rounded-md text-center font-mono truncate select-none border border-primary/5">
            {url.replace('https://', '')}
          </div>
        </div>

        {/* Browser Content Area - Renders the project screenshot */}
        <div className="flex-grow relative bg-[#0d071a] overflow-hidden">
          {projectImages[id] ? (
            <img 
              src={projectImages[id]} 
              alt={`${title} screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/mockup:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs font-mono">
              Screenshot not available
            </div>
          )}

          {/* Hologram Gradient Hover Layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-24 bg-bg-darker overflow-hidden">
      {/* Background Blurs */}
      <div className="glow-blur w-[450px] h-[450px] bg-accent/5 top-1/3 right-1/4" />
      <div className="glow-blur w-[400px] h-[400px] bg-primary/10 bottom-1/3 left-1/4" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-20 text-left">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary block mb-1">
            Browse My Creations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Featured Lab Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Alternating Project Layout */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={proj.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Project Mockup Shell (Left on desktop if even, right if odd) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} w-full`}>
                  {renderProjectMockup(proj.id, proj.title, proj.netlifyUrl)}
                </div>

                {/* Content Overlay Card (Right on desktop if even, left if odd) */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} text-left flex flex-col justify-center`}>
                  
                  {/* Small tags label */}
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2 block">
                    {proj.featured ? 'Featured Project' : 'Development Concept'}
                  </span>

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-6 hover:text-secondary transition-colors duration-300">
                    {proj.title}
                  </h3>

                  {/* Glass Card Description containing description text */}
                  <div className="glass-card p-6 rounded-2xl relative mb-6">
                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Stack badging */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tech.map((t) => (
                      <span 
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-primary/10 border border-primary/25 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-6">
                    <a 
                      href={proj.netlifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-white font-display font-medium hover:text-secondary flex items-center space-x-1.5 transition-colors group cursor-pointer"
                    >
                      <ExternalLink size={16} className="text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Live Netlify Site</span>
                    </a>
                    {/* <a 
                      href={proj.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 font-display font-medium hover:text-white flex items-center space-x-1.5 transition-colors group cursor-pointer"
                    >
                      <GithubIcon size={16} className="text-gray-500 group-hover:scale-105 transition-transform" />
                      <span>Source Code</span>
                    </a> */}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
