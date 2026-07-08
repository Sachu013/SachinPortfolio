import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Cpu } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <GraduationCap className="text-brand-blue" size={24} />,
      title: "Current CGPA",
      value: "8.45 / 10",
      description: "B.Tech Computer Science & Business Systems"
    },
    {
      icon: <Cpu className="text-brand-purple" size={24} />,
      title: "Focus Areas",
      value: "Software & Business",
      description: "Algorithms, Web Dev, OOPs & Business Strategy"
    },
    {
      icon: <Award className="text-brand-pink" size={24} />,
      title: "Achievements",
      value: "Hackathon Winner",
      description: "Recognized for innovative tech solutions"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Canvas Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-blue to-brand-purple opacity-40 blur-lg group-hover:opacity-75 transition duration-500" />
              
              {/* Main Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-[#0d1127] border border-white/10 overflow-hidden flex items-center justify-center">
                {/* Abstract Interactive Geometric Face Vector */}
                <svg className="w-48 h-48 text-slate-500 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Decorative grid lines */}
                  <line x1="10" y1="50" x2="190" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  <line x1="10" y1="150" x2="190" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  <line x1="50" y1="10" x2="50" y2="190" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  <line x1="150" y1="10" x2="150" y2="190" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
                  
                  {/* Outer circle */}
                  <circle cx="100" cy="100" r="80" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="5 5"/>
                  
                  {/* Code avatar graphic */}
                  <path d="M70 120L45 100L70 80" stroke="url(#paint1_linear)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M130 80L155 100L130 120" stroke="url(#paint1_linear)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M110 70L90 130" stroke="url(#paint2_linear)" strokeWidth="4" strokeLinecap="round"/>
                  
                  {/* Gimmick nodes */}
                  <circle cx="45" cy="100" r="4" fill="#3b82f6"/>
                  <circle cx="155" cy="100" r="4" fill="#8b5cf6"/>
                  <circle cx="100" cy="100" r="6" fill="#ec4899" className="animate-ping"/>
                  <circle cx="100" cy="100" r="4" fill="#ec4899"/>
                  
                  <defs>
                    <linearGradient id="paint0_linear" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6"/>
                      <stop offset="1" stopColor="#8b5cf6"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="45" y1="100" x2="155" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6"/>
                      <stop offset="1" stopColor="#8b5cf6"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="90" y1="130" x2="110" y2="70" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8b5cf6"/>
                      <stop offset="1" stopColor="#ec4899"/>
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Tech Badges on corner */}
                <div className="absolute bottom-4 left-4 right-4 py-2 px-3 rounded-xl bg-black/60 backdrop-blur-sm border border-white/5 text-center">
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-300 tracking-wider font-display">CSBS STUDENT @ BIT</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Aspiring Software Engineer & Full-Stack Developer
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                I am a B.Tech student specializing in <strong>Computer Science and Business Systems</strong>. This unique program allows me to bridge the gap between core software engineering principles and strategic business operations.
              </p>

              <p className="text-slate-300 mb-8 leading-relaxed">
                With a strong command over <strong>Java, Data Structures, and Modern Web Architectures (MERN Stack)</strong>, I enjoy solving complex programmatic problems. I am continuously learning and keeping up with industry advancements to build high-performance, robust, and accessible products that drive business value.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5 flex flex-col justify-between"
                  >
                    <div className="p-2.5 rounded-xl bg-white/5 w-fit mb-4">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="text-xs text-slate-400 font-medium tracking-wide uppercase">{card.title}</h4>
                      <p className="text-lg font-bold text-white mt-1">{card.value}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
