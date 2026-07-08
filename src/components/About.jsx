import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const narrativeMilestones = [
    {
      number: "01",
      title: "The Computational Foundation",
      role: "Java & Core Algorithms",
      period: "2022 - 2023",
      description: "My journey started with standard software foundations. I mastered Object-Oriented Programming and Data Structures in Java. I enjoyed solving algorithmic challenges, forming a rigorous approach to system performance and memory management.",
      icon: <BookOpen className="text-premium-teal" size={16} />
    },
    {
      number: "02",
      title: "The Business Intersection",
      role: "Business Systems & Analytics",
      period: "2023 - 2024",
      description: "Specializing in Computer Science and Business Systems allowed me to study the mechanics of corporate systems. I integrated software design with financial management, operation strategies, and user experience analytics, learning how to write code that meets real-world commercial needs.",
      icon: <TrendingUp className="text-premium-teal" size={16} />
    },
    {
      number: "03",
      title: "The Product Execution",
      role: "Full-Stack Development",
      period: "2024 - Present",
      description: "Translating computational concepts into interactive web apps. I focused heavily on building full-stack platforms using the MERN stack (React, Node, Express, MongoDB) and Firebase. Projects like Civic Sense and Subscription Management have refined my design system knowledge and API routing skills.",
      icon: <Briefcase className="text-premium-teal" size={16} />
    }
  ];

  const textRevealVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-32 relative bg-premium-beige border-y border-premium-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Summary & Metrics */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-premium-teal uppercase font-display block">
                Journal
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-premium-black">
                My Story & <br />
                <span className="text-stroke text-premium-black">Academics.</span>
              </h2>
              <div className="w-12 h-1 bg-premium-teal rounded-full" />
            </div>

            <p className="text-sm text-premium-gray leading-relaxed max-w-sm">
              I specialize in bridging the gap between rigorous technical codebases and structured business platforms. I build robust products with a focus on usability, clean code, and business alignment.
            </p>

            {/* Academic Grade Block */}
            <div className="p-6 rounded-2xl bg-premium-white border border-premium-border shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute right-4 top-4 text-8xl font-black text-premium-beige/40 pointer-events-none group-hover:scale-105 transition-transform duration-500 font-display">
                CSBS
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-premium-gray uppercase tracking-widest block mb-2">
                  Academic Performance
                </span>
                <span className="text-4xl font-black text-premium-black font-display tracking-tight">
                  8.45 <span className="text-sm text-premium-teal font-bold">/ 10</span>
                </span>
                <span className="text-xs font-semibold text-premium-teal block mt-1 uppercase tracking-wide">
                  Current B.Tech CGPA
                </span>
                <p className="text-[11px] text-premium-gray mt-4 leading-relaxed max-w-[200px]">
                  Bannari Amman Institute of Technology
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Chronological Narrative */}
          <div className="lg:col-span-8 space-y-12 relative pl-4 sm:pl-8 border-l border-premium-border/40">
            {narrativeMilestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={textRevealVariants}
                className="relative space-y-4 group"
              >
                {/* Visual Timeline Connector Node */}
                <div className="absolute -left-[29px] sm:-left-[45px] top-2 p-2 rounded-full bg-premium-white border border-premium-border group-hover:border-premium-teal text-premium-gray group-hover:text-premium-teal shadow-sm transition-colors duration-300">
                  {milestone.icon}
                </div>

                {/* Milestone Detail Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-premium-white border border-premium-border hover:border-premium-border/80 transition-editorial relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <span className="text-4xl font-black text-premium-beige font-display tracking-tight group-hover:text-premium-teal/10 transition-colors duration-300">
                      {milestone.number}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-premium-beige border border-premium-border text-premium-gray text-[10px] font-bold uppercase tracking-widest w-fit">
                      {milestone.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-premium-black tracking-tight font-display mb-1">
                    {milestone.title}
                  </h3>
                  <h4 className="text-xs font-bold text-premium-teal uppercase tracking-widest mb-4">
                    {milestone.role}
                  </h4>

                  <p className="text-sm sm:text-base text-premium-gray leading-relaxed font-sans">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
