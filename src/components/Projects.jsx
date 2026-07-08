import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BarChart3, MapPin, Share2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Subscription Management System",
      description: "A comprehensive SaaS licensing and subscription management platform built to help businesses track and manage client licenses, renewals, and payments seamlessly.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      graphic: (
        <div className="w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 flex flex-col justify-between p-6 relative overflow-hidden">
          {/* Card Mockup Graphic */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-bold text-slate-400 font-display">SUBSCRIPTION FLOW</span>
            <BarChart3 className="text-brand-blue" size={16} />
          </div>
          <div className="space-y-3">
            <div className="h-6 w-full rounded bg-white/5 border border-white/5 flex items-center px-2 justify-between">
              <span className="text-[8px] text-slate-300">Basic Tier License</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">Active</span>
            </div>
            <div className="h-6 w-full rounded bg-white/5 border border-white/5 flex items-center px-2 justify-between">
              <span className="text-[8px] text-slate-300">Enterprise Suite</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold">Renewal Pending</span>
            </div>
          </div>
          <div className="h-10 w-full rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple opacity-70 flex items-center justify-center">
            <span className="text-[9px] font-bold text-white tracking-wider uppercase">Analytics Dashboard</span>
          </div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-brand-blue/10 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      )
    },
    {
      title: "Civic Sense Reporting Platform",
      description: "A civic engagement and complaint reporting system allowing citizens to file grievances, map incident areas, and leverage AI categorization for immediate authority routing.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Google Maps"],
      github: "https://github.com",
      demo: "https://example.com",
      graphic: (
        <div className="w-full h-full bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex flex-col justify-between p-6 relative overflow-hidden">
          {/* Card Mockup Graphic */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-bold text-slate-400 font-display">CIVIC REPORTING MAP</span>
            <MapPin className="text-brand-purple" size={16} />
          </div>
          <div className="flex items-center justify-center flex-1">
            <div className="w-20 h-20 rounded-full border-4 border-dashed border-brand-purple/30 flex items-center justify-center animate-spin [animation-duration:15s]">
              <MapPin className="text-brand-pink -rotate-45" size={24} />
            </div>
            <div className="absolute p-2 bg-black/60 border border-white/10 rounded-xl text-center text-[8px] text-slate-300">
              AI Categorized: <span className="text-brand-blue font-bold">Pothole</span>
            </div>
          </div>
          <div className="h-6 w-full rounded bg-white/5 border border-white/5 flex items-center justify-center">
            <span className="text-[8px] font-semibold text-slate-400">Grievance Routed to Municipal Corp</span>
          </div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-brand-purple/10 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      )
    },
    {
      title: "Campus Connect Social Network",
      description: "A secure college-specific social networking and communications dashboard built to help students coordinate events, announcements, and peer messages.",
      tech: ["ReactJS", "Firebase Auth", "Firestore", "Firebase Storage", "TailwindCSS"],
      github: "https://github.com",
      demo: "https://example.com",
      graphic: (
        <div className="w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-pink/20 flex flex-col justify-between p-6 relative overflow-hidden">
          {/* Card Mockup Graphic */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-bold text-slate-400 font-display">CAMPUS FEED</span>
            <Share2 className="text-brand-pink" size={16} />
          </div>
          <div className="space-y-2">
            <div className="p-2 rounded bg-white/5 border border-white/5 flex items-start space-x-2">
              <div className="w-4 h-4 rounded-full bg-brand-blue flex-shrink-0" />
              <div className="space-y-1 flex-1">
                <div className="h-1.5 w-12 bg-white/20 rounded" />
                <div className="h-1.5 w-full bg-white/10 rounded" />
              </div>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5 flex items-start space-x-2">
              <div className="w-4 h-4 rounded-full bg-brand-purple flex-shrink-0" />
              <div className="space-y-1 flex-1">
                <div className="h-1.5 w-12 bg-white/20 rounded" />
                <div className="h-1.5 w-full bg-white/10 rounded" />
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-brand-pink/5 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel glass-panel-hover flex flex-col h-full rounded-3xl border border-white/5 overflow-hidden bg-[#0d1127]/20"
            >
              {/* Project Image Placeholder (Interactive Vector Graphic) */}
              <div className="h-48 border-b border-white/5 relative overflow-hidden flex-shrink-0 bg-slate-950">
                {project.graphic}
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 font-display">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-sm font-semibold transition-all duration-200"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-sm font-semibold shadow-md shadow-brand-blue/15 hover:shadow-brand-purple/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
