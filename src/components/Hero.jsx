import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import girlAvatar from '../assets/girl_avatar.png';

export default function Hero() {
  const { name, role, subtitle, boldPhrase, subtext, typingRoles, internshipInfo, about } = portfolioData.profile;
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    }

    // Handle end of typing word
    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait 1.5s before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % typingRoles.length); // Cycle through roles
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, typingRoles]);

  return (
    <section id="home" className="relative min-h-screen lg:min-h-[800px] xl:min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glowing Blurs */}
      <div className="glow-blur w-[400px] h-[400px] bg-primary/20 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="glow-blur w-[350px] h-[350px] bg-accent/10 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Avatar & Hello pointer */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none lg:-left-[70px] left-[-10px]">

          {/* Curved Hand-drawn SVG Arrow and Greeting */}
       <div className="absolute -top-12 -right-4 sm:-right-8 lg:-right-12 z-20 flex items-center">
  {/* Arrow SVG - Moved up independently by 20px using -translate-y-5 */}
  <svg 
    width="80" 
    height="60" 
    viewBox="0 0 100 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="mr-2 transform -scale-x-100 rotate-[170deg] -translate-y-5"
  >
    <path d="M10 10C25 35 60 40 85 20" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
    <path d="M85 20L75 15M85 20L80 30" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
  </svg>
  
  <span className="font-display text-sm md:text-base text-secondary font-medium tracking-wide rotate-6">
    Hello! I Am <span className="text-white font-bold">{name}</span>
  </span>
</div>
          {/* Glowing Avatar Frame */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center bg-radial from-primary/30 to-transparent">
            {/* Circle backdrop glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary/20 to-accent/30 blur-lg animate-pulse-slow" />

            {/* Main Avatar Circle Container */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border border-primary/20 bg-bg-dark/60 backdrop-blur-sm shadow-2xl flex items-center justify-center">
              <img
                src={girlAvatar}
                alt={`${name} Avatar`}
                className="w-[90%] h-[90%] object-contain mt-4 transform scale-110 hover:scale-115 -translate-y-[10px] transition-transform duration-500 cursor-pointer"
              />
            </div>

            {/* Decorative orbit ring */}
            <div className="absolute inset-0 rounded-full border border-primary/10 animate-orbit-slow pointer-events-none" />
          </div>
        </div>

        {/* Right Column: Hero copy and details */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">

          {/* Tagline style from Figma */}
          <div className="mb-4">
            <span className="inline-block border-b-2 border-primary/60 pb-1 font-display text-sm md:text-base text-gray-300 tracking-wider">
              {subtitle}
            </span>
          </div>

          {/* Main heading headline with Oval loop highlight */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight mb-4">
            Judges a website by its{' '}
            <span className="relative inline-block px-4 py-1">
              <span className="relative z-10 text-secondary">execution</span>
              {/* Oval SVG loop */}
              <svg
                className="absolute inset-0 w-full h-full text-primary -rotate-[-10deg] origin-center"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 50C5 25 25 5 50 5C75 5 95 25 95 50C95 75 75 95 50 95C25 95 5 75 5 50Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>

          {/* Small subtext */}
          <p className="text-sm text-gray-400 font-sans max-w-lg mb-8 italic">
            "{subtext}"
          </p>

          {/* Typing Effect */}
          <div className="mb-4 flex items-center font-display text-2xl md:text-3xl font-semibold text-white">
            <span className="mr-2">I'm a</span>
            <span className="text-primary border-r-2 border-transparent animate-blink pr-1">
              {typedText}
            </span>
          </div>

          {/* Current role/internship badge */}
          <div className="flex items-center space-x-2.5 mb-6 bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl max-w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <p className="text-sm font-medium text-secondary">
              Currently: {internshipInfo}
            </p>
          </div>

          {/* About description paragraph */}
          <p className="text-base text-gray-300 font-sans leading-relaxed max-w-2xl mb-8">
            {about}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="btn-primary cursor-pointer flex items-center space-x-1"
            >
              <span>See My Work</span>
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="btn-outline cursor-pointer"
            >
              Contact Me
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
