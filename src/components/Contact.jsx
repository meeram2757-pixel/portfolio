import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

const InstagramIcon = ({ size = 20, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const GithubIcon = ({ size = 20, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 20, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { email, socials, contactLead } = portfolioData.profile;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate form submission
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Background blurs */}
      <div className="glow-blur w-[400px] h-[400px] bg-primary/10 top-1/2 right-1/4 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
            Contact
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Figma Info Layout */}
          <div className="lg:col-span-6 text-left">
            <p className="text-lg text-gray-300 leading-relaxed font-sans mb-8 max-w-xl">
              {contactLead}
            </p>

            {/* Email Address Link */}
            <div className="mb-10 group">
              <a 
                href={`mailto:${email}`}
                className="inline-flex items-center text-xl md:text-2xl font-semibold font-display text-white hover:text-secondary transition-colors duration-300 relative py-2"
              >
                <Mail className="mr-3 text-secondary group-hover:scale-105 transition-transform" size={24} />
                <span>{email}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            </div>

            {/* Social Icons matching Figma (Instagram, Github, G-icon/LinkedIn) */}
            <div className="flex items-center space-x-6">
              {/* <a 
                href={socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/20 bg-bg-card/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={20} />
              </a> */}
              {/* <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/20 bg-bg-card/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a> */}
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/20 bg-bg-card/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-card p-8 rounded-3xl relative">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-scale-in">
                  <CheckCircle2 size={48} className="text-secondary mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-400">
                    Thank you, Meeram will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-bg-darker/60 border border-primary/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-bg-darker/60 border border-primary/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Meeram, let's collaborate on..."
                      className="w-full bg-bg-darker/60 border border-primary/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn-primary py-3 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
