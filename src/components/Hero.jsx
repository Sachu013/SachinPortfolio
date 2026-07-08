import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid-bg">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-brand-blue/15 blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-brand-purple/15 blur-[120px] animate-blob [animation-delay:4s] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[25rem] h-[25rem] rounded-full bg-brand-pink/5 blur-[100px] animate-blob [animation-delay:7s] pointer-events-none" />

      {/* Grid overlay styling */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span>Available for placements & internships</span>
          </motion.div>

          {/* Name & Introduction */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4"
          >
            Hi, I am <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent">Sachin Suresh</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl font-medium text-slate-300 mb-6 max-w-3xl"
          >
            B.Tech Computer Science and Business Systems Student
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed"
          >
            Aspiring Software Engineer <span className="text-brand-blue">|</span> Full Stack Developer <span className="text-brand-purple">|</span> Java Enthusiast.
            Passionate about building scalable web solutions and combining technical excellence with business intelligence.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-md sm:max-w-none"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium shadow-lg shadow-brand-blue/25 hover:shadow-brand-purple/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="/Sachin_Suresh_Resume.pdf"
              download="Sachin_Suresh_Resume.pdf"
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto backdrop-blur-sm"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-900 border border-white/5 text-slate-300 hover:text-white hover:bg-slate-800 font-medium hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto"
            >
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Profiles */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 text-slate-400"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sachinsuresh@example.com"
              className="hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] transition-all duration-200"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
