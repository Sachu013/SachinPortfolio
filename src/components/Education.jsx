import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

export default function Education() {
  const academics = [
    {
      degree: "B.Tech Computer Science & Business Systems",
      institution: "Bannari Amman Institute of Technology",
      duration: "2022 - Present",
      metrics: "CGPA: 8.45",
      description: "Focusing on core software engineering, data structures, backend engineering, and financial/business systems analysis."
    },
    {
      degree: "Higher Secondary Course (12th Grade - TN State Board)",
      institution: "St. Thomas Higher Secondary School",
      duration: "2021 - 2022",
      metrics: "Score: 91.3%",
      description: "Advanced physics, chemistry, mathematics, and computer science study."
    },
    {
      degree: "Matriculation (10th Grade - ICSE)",
      institution: "St. Thomas English High School",
      duration: "2020",
      metrics: "Score: 90.6%",
      description: "General Science, Mathematics, and Computer Applications foundations."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="education" className="py-40 sm:py-48 relative bg-premium-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-premium-teal uppercase font-display block mb-1">
            Timeline
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-premium-black mt-3 leading-tight">
            Academic <span className="text-premium-teal">Milestones.</span>
          </h2>
          <div className="w-12 h-1 bg-premium-teal mx-auto mt-5 rounded-full" />
        </div>

        {/* Centralised timeline layout */}
        <div className="relative border-l border-premium-border pl-8 sm:pl-10 space-y-16 ml-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-16"
          >
            {academics.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline point Cap Icon */}
                <div className="absolute -left-[45px] sm:-left-[53px] top-1.5 p-2 rounded-full bg-premium-white border border-premium-border text-premium-teal shadow-sm group-hover:border-premium-teal transition-colors">
                  <GraduationCap size={16} />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-premium-gray uppercase tracking-widest">
                      <Calendar size={12} />
                      <span>{edu.duration}</span>
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-premium-teal/10 border border-premium-teal/20 text-premium-teal text-xs sm:text-sm font-bold uppercase tracking-wider">
                      {edu.metrics}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-premium-black tracking-tight font-display">
                    {edu.degree}
                  </h4>
                  <p className="text-sm sm:text-base font-bold text-premium-teal uppercase tracking-wider">
                    {edu.institution}
                  </p>
                  <p className="text-base sm:text-lg text-premium-gray leading-relaxed max-w-2xl pt-2">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
