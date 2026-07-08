import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-premium-white text-premium-black antialiased">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Page Content sections */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer Area */}
      <Footer />
    </div>
  );
}
