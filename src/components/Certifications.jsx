import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Terminal, Database, ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "Meta Front-End Development",
      issuer: "Meta (via Coursera)",
      icon: <Award className="text-brand-blue" size={24} />,
      skills: "React, CSS Frameworks, HTML, JS, UX UI",
      verification: "https://coursera.org"
    },
    {
      title: "Cisco Networking Basics",
      issuer: "Cisco Networking Academy",
      icon: <ShieldCheck className="text-brand-purple" size={24} />,
      skills: "Routing, Switching, IP Subnets, Network Security",
      verification: "https://netacad.com"
    },
    {
      title: "Python Essentials",
      issuer: "Python Institute (Cisco Academy)",
      icon: <Terminal className="text-emerald-500" size={24} />,
      skills: "Object-Oriented Programming, Packages, Scripting",
      verification: "https://pythoninstitute.org"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cognitive Class (IBM)",
      icon: <Database className="text-brand-pink" size={24} />,
      skills: "Data Wrangling, Analytics, Jupyter, R/Python basics",
      verification: "https://cognitiveclass.ai"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/5 bg-[#0d1127]/20 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5">
                    {cert.icon}
                  </div>
                  <a
                    href={cert.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition"
                    aria-label="Verify Certificate"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1 font-display tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <h4 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wide">
                  {cert.issuer}
                </h4>
              </div>

              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Skills Gained
                </span>
                <p className="text-xs text-slate-300">
                  {cert.skills}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
