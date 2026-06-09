import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skills, profile } = portfolioData;
  const [hoveredSkill, setHoveredSkill] = useState(null);
 const isMobile = window.innerWidth < 768;
  // SVG dimensions
  const width = 600;
  const height = 450;
  const cx = width / 2;
  const cy = height * 0.58; // Center it lower down to make space for skills above

  // Map skill icons to short representations or colors
  const getSkillColor = (name) => {
    switch (name.toLowerCase()) {
      case 'react': return 'from-cyan-500 to-blue-600';
      case 'tailwind css': return 'from-sky-400 to-cyan-500';
      case 'javascript': return 'from-yellow-400 to-amber-500';
      case 'figma': return 'from-orange-500 to-pink-600';
      case 'wordpress': return 'from-blue-500 to-sky-600';
      case 'node.js': return 'from-green-500 to-emerald-600';
      case 'redux': return 'from-purple-500 to-indigo-600';
      case 'seo': return 'from-emerald-400 to-teal-600';
      case 'css3': return 'from-blue-500 to-indigo-600';
      case 'next.js': return 'from-slate-700 to-slate-900';
      case 'git/github': return 'from-orange-600 to-red-600';
      default: return 'from-primary to-accent';
    }
  };

  const renderSkillIcon = (name, isHovered = false) => {
    const scale = isHovered ? 1.15 : 1;
    const style = {
      transform: `scale(${scale})`,
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transformOrigin: '0px 0px'
    };

    const getInnerContent = () => {
      switch (name.toLowerCase()) {
        case 'react':
          return (
            <g transform="scale(0.9)">
              <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </g>
          );
        case 'tailwind css':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#38BDF8"
                d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
              />
            </g>
          );
        case 'javascript':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#F7DF1E"
                d="M0 0h24v24H0z"
              />
              <path
                fill="#000000"
                d="M22.448 18.995c.002.396-.134.773-.377 1.077-.282.355-.693.565-1.144.587-.803.04-1.547-.417-1.782-1.187l-1.667 1.006c.38 1.072 1.357 1.82 2.49 1.874.887.03 1.763-.3 2.36-.932.535-.596.822-1.38.808-2.185v-7.838h-1.69v7.598zm-7.604-5.263l-1.69 1.016c.328.736 1.06 1.233 1.87 1.258.468.016.924-.16 1.25-.49.3-.323.46-.757.447-1.202 0-.877-.53-1.246-1.583-1.7l-.608-.26c-1.378-.588-2.008-1.257-2.008-2.518 0-1.206.915-2.223 2.148-2.26 1.026-.036 1.956.516 2.357 1.468l-1.56 1.036c-.237-.506-.737-.828-1.294-.828-.35 0-.677.164-.88.452-.196.257-.297.577-.282.9.01.696.386.996 1.332 1.4l.643.277c1.558.677 2.28 1.295 2.28 2.684.004 1.386-.99 2.593-2.378 2.696-1.164.062-2.234-.51-2.73-1.56z"
              />
            </g>
          );
        case 'figma':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path d="M8.5 0A4.5 4.5 0 0 0 4 4.5 4.5 4.5 0 0 0 8.5 9H12V0z" fill="#F24E1E"/>
              <path d="M8.5 9A4.5 4.5 0 0 0 4 13.5 4.5 4.5 0 0 0 8.5 18H12V9z" fill="#A259FF"/>
              <path d="M12 18a4.5 4.5 0 0 0 4.5-4.5A4.5 4.5 0 0 0 12 9z" fill="#1ABCFE"/>
              <path d="M12 0h3.5A4.5 4.5 0 0 1 20 4.5 4.5 4.5 0 0 1 15.5 9H12z" fill="#FF7262"/>
              <path d="M12 9h3.5a4.5 4.5 0 0 1 0 9H12z" fill="#0ACF83"/>
            </g>
          );
        case 'node.js':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#339933"
                d="M12 1.5L2.25 7.125v11.25L12 24l9.75-5.625V7.125L12 1.5zM6.375 9.75l4.5-2.625V18l-4.5-2.625V9.75zm11.25 5.625l-4.5 2.625V9.75l4.5 2.625v2.625z"
              />
            </g>
          );
        case 'redux':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#764ABC"
                d="M12 0a12 12 0 00-11.83 10c1.55-.3 3.65-.4 5.92-.3 1.9-3.23 4.23-5.26 6.37-5.26 2.13 0 3.73 1.63 4.64 4.38-1.57.87-3.66 2.14-5.88 3.63-2.16-1.5-4.14-2.8-5.65-3.67a19.78 19.78 0 00-.57 4.23c1.78.6 3.97 1.5 6.27 2.66-2.3 1.15-4.5 2.05-6.27 2.65.1 1.52.3 2.94.57 4.23 1.5-.88 3.5-2.18 5.65-3.67 2.22 1.5 4.3 2.76 5.88 3.63-.9 2.75-2.5 4.38-4.64 4.38-2.14 0-4.47-2.03-6.37-5.26-2.27.1-4.37 0-5.92-.3A12 12 0 1012 0zm0 14.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
              />
            </g>
          );
        case 'css3':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#1572B6"
                d="M1.5 0L3.29 20.24l8.71 2.42L20.71 20.24L22.5 0H1.5zM19.78 5.63l-.32 3.6H9.3l.28 3.1 2.42.66 2.42-.66.26-2.88h3.33l-.51 5.76-5.49 1.52-5.49-1.52-.37-4.14h3.18l.08.85 1.62.44 1.62-.44.17-1.87H6.07l-.57-6.26h14.28z"
              />
            </g>
          );
        case 'next.js':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#FFFFFF"
                d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.66 18.32l-9.06-11.8v11.8H6.55V5.68h2.05l9.06 11.8V5.68h2.05v12.64z"
              />
            </g>
          );
        case 'git/github':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#F05032"
                d="M23.54 11.48L12.52.46a1.47 1.47 0 00-2.08 0L8.38 2.52 11.4 5.54a2.82 2.82 0 013.13.56c1.1 1.1 1.1 2.85 0 3.95a2.82 2.82 0 01-3.95 0 2.81 2.81 0 01-.54-3.1L7.02 3.93 4.3 6.65a1.47 1.47 0 000 2.08l11.02 11.02a1.47 1.47 0 002.08 0l7.14-7.14a1.47 1.47 0 000-2.08v-.05zM9.54 14.15a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8z"
              />
            </g>
          );
        case 'wordpress':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#21759B"
                d="M12.158 12.786l-2.698 7.84c1.758.528 3.614.307 5.21-.622l-2.512-7.218zm5.54-5.362c0-.573-.205-1.026-.41-1.396-.328-.532-.656-.983-.656-1.516 0-.615.492-1.066 1.148-1.066.082 0 .164.008.246.024A9.873 9.873 0 0 0 12 2C6.486 2 2 6.486 2 12c0 2.221.738 4.262 1.975 5.922L8.258 5.722c.492-1.352 1.27-2.13 2.664-2.13H11v.697c0 .082-.041.123-.123.123h-.205c-.82 0-1.434.902-1.434 2.05 0 .41.082.86.164 1.23l2.87 8.36 1.762-5.37-1.189-3.237c-.45-.983-.983-1.68-.983-2.377 0-1.148.86-2.05 2.008-2.05h.205c.082 0 .123-.041.123-.123V3.59h-.082c-.82 0-1.393.738-1.393 1.844 0 .37.041.78.123 1.148l2.91 8.238 1.434-4.836c.328-.983.492-1.72.492-2.377zm-1.885 9.467l2.254-6.84c.328.984.45 1.763.45 2.42 0 1.27-.45 2.376-.86 3.318l-1.844 1.102zM12 22c-5.514 0-10-4.486-10-10 0-2.05.615-3.934 1.68-5.533l5.574 15.246A9.92 9.92 0 0 0 12 22zm0-20C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"
              />
            </g>
          );
        case 'seo':
          return (
            <g transform="translate(-10, -10) scale(0.8333)">
              <path
                fill="#10B981"
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
              <path
                d="M7 11.5l2-2 2 2 2-3"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        default:
          return null;
      }
    };

    return (
      <g style={style}>
        {getInnerContent()}
      </g>
    );
  };

  return (
    <section id="skills" className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-blur w-[450px] h-[450px] bg-primary/10 bottom-1/4 left-1/4 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        
        {/* Title / Description matching Figma style */}
        <h2 className="text-xl md:text-2xl font-display text-gray-300 max-w-3xl mx-auto mb-16 md:mb-0 leading-relaxed">
          I'm currently looking to join a{' '}
          <span className="text-secondary font-semibold relative inline-block">
            cross-functional team
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary/40 rounded-full" />
          </span>{' '}
          that values improving people's lives through accessible websites.
        </h2>

        {/* Interactive Constellation View */}
        <div className="flex items-center justify-center relative w-full overflow-hidden px-4">
          
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[900px] h-auto overflow-visible">
            {/* SVG Gradients definitions */}
            <defs>
              <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
              </linearGradient>
              <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#090416" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Glowing background behind central orb */}
            <circle cx={cx} cy={cy} r="100" fill="url(#center-glow)" />

            {/* Concentric rotating orbital rings at the bottom */}
            <circle cx={cx} cy={cy} r="50" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" strokeDasharray="3 3" className="animate-orbit-fast origin-[300px_261px]" />
            <circle cx={cx} cy={cy} r="90" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" strokeDasharray="6 4" className="animate-orbit-medium origin-[300px_261px]" />
            <circle cx={cx} cy={cy} r="130" fill="none" stroke="rgba(139, 92, 246, 0.08)" strokeWidth="1.5" strokeDasharray="8 6" className="animate-orbit-slow origin-[300px_261px]" />

            {/* Orbiting dot accents */}
            <circle cx={cx + 50} cy={cy} r="4" fill="#a78bfa" className="animate-orbit-fast origin-[300px_261px]" />
            <circle cx={cx - 90} cy={cy} r="3" fill="#c084fc" className="animate-orbit-medium origin-[300px_261px]" />
            <circle cx={cx + 130} cy={cy} r="5" fill="#8b5cf6" className="animate-orbit-slow origin-[300px_261px]" />

            {/* Branching SVG curves to Skill badging nodes */}
            {skills.map((skill, index) => {
              const targetX = cx + skill.x;
              const targetY = cy + skill.y;
              
              // Draw curved connection (Bezier path) from logo center to the bubble
              // Control points pull the curve slightly inwards or upwards to make a nice branching trunk
              const cp1x = cx + skill.x * 0.1;
              const cp1y = cy + skill.y * 0.5;
              const cp2x = cx + skill.x * 0.6;
              const cp2y = cy + skill.y * 0.8;

              const isHovered = hoveredSkill === skill.name;

              return (
                <g key={skill.name} className="cursor-pointer">
                  {/* Path Connector line */}
                  <path
                    d={`M ${cx} ${cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`}
                    fill="none"
                    stroke={isHovered ? '#c084fc' : 'url(#line-glow)'}
                    strokeWidth={isHovered ? '2.5' : '1.5'}
                    strokeDasharray={isHovered ? 'none' : 'none'}
                    className="transition-all duration-300"
                  />
                  
                  {/* Animated pulse along active hover lines */}
                  {isHovered && (
                    <path
                      d={`M ${cx} ${cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`}
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="10 50"
                      strokeDashoffset="100"
                      className="animate-[dash_2s_linear_infinite]"
                      style={{
                        animation: 'dash 1.5s linear infinite',
                        strokeDasharray: '8, 40',
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Central Monogram Logo Orb */}
            <g transform={`translate(${cx - 32}, ${cy - 32})`} className="select-none">
              {/* Outer Glow */}
              <circle cx="32" cy="32" r="30" fill="#090416" stroke="#8b5cf6" strokeWidth="3" className="shadow-2xl" />
              <circle cx="32" cy="32" r="24" fill="#170d2e" />
              {/* Centered stylized M monogram symbol */}
              <path d="M22 42V24L32 34L42 24V42" stroke="#a78bfa" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Skill Node Bubbles */}
            {skills.map((skill) => {
              const targetX = cx + skill.x;
              const targetY = cy + skill.y;
              const isHovered = hoveredSkill === skill.name;

              return (
                <g 
                  key={`node-${skill.name}`}
                  transform={`translate(${targetX}, ${targetY})`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group"
                >
                  {/* Outer glow ring on hover */}
                  <circle 
                    r={isHovered ? "28" : "24"} 
                    fill="none" 
                    stroke={isHovered ? "#a78bfa" : "rgba(139, 92, 246, 0.2)"} 
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />

                  {/* Bubble fill */}
                  <circle 
                    r={isHovered ? "24" : "20"} 
                    className="fill-bg-card transition-all duration-300 shadow-lg" 
                  />

                  {/* Gradient core */}
                  <circle 
                    r={isHovered ? "20" : "16"} 
                    className={`bg-gradient-to-br ${getSkillColor(skill.name)} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} 
                  />

                  {/* Tech Icon inside node */}
                  {renderSkillIcon(skill.name, isHovered)}
                  
                  {/* Floating Full Name on Hover */}
                  {isHovered && (
                    <g transform="translate(0, -38)">
                      <rect 
                        x="-50" 
                        y="-12" 
                        width="100" 
                        height="22" 
                        rx="6" 
                        fill="#170d2e" 
                        stroke="rgba(167, 139, 250, 0.4)" 
                        strokeWidth="1" 
                      />
                      <text 
                        textAnchor="middle" 
                        y="0" 
                        dominantBaseline="middle" 
                        className="font-display text-[9px] font-bold fill-white tracking-wide"
                      >
                        {skill.name}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>


      </div>

      {/* Embedded CSS for SVG path animation */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </section>
  );
}
