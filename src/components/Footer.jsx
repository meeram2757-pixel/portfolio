import React from 'react';
import { ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { name } = portfolioData.profile;
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-bg-darker border-t border-primary/5 py-12 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Monogram Logo / Branding */}
        <div className="flex items-center space-x-3">
          <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="20" fill="#170d2e" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="2" />
            <path d="M25 70V30L45 50L65 30V70" stroke="#a78bfa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display font-bold text-sm tracking-wider text-white">
            {name.toUpperCase()}
          </span>
        </div>

        {/* Copyright & Info */}
        <div className="text-center md:text-left text-xs text-gray-500 font-sans">
          <p>© {currentYear} {name}. All rights reserved.</p>
          <p className="mt-1">Designed & coded with frontend excellence.</p>
        </div>

        {/* Back to Top */}
        <button 
          onClick={handleBackToTop}
          className="p-3 rounded-full bg-bg-card hover:bg-primary/20 text-gray-400 hover:text-white border border-primary/10 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ChevronUp size={16} />
        </button>

      </div>
    </footer>
  );
}
