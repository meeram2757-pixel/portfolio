import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-darker text-gray-100 flex flex-col font-sans select-none antialiased">
      {/* Dynamic Header */}
      <Navbar />

      {/* Hero Intro */}
      <Hero />

      {/* Work Experiences */}
      <Experience />

      {/* Skills Branching Constellation */}
      <Skills />

      {/* Projects Showcase Layout */}
      <Projects />

      {/* Message and Contact Dashboard */}
      <Contact />

      {/* Bottom Footer block */}
      <Footer />
    </div>
  );
}
