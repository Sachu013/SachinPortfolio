import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: "B.Tech Computer Science and Business Systems",
      institution: "Bannari Amman Institute of Technology",
      duration: "2022 - Present",
      gradeType: "Current CGPA",
      grade: "8.45 / 10",
      description: "Undergraduate curriculum integrating core computer science streams with business strategy, entrepreneurship, and financial management topics."
    },
    {
      degree: "Higher Secondary Certificate (12th Grade - HSC)",
      institution: "St. Thomas Higher Secondary School (TN State Board)",
      duration: "2020 - 2022",
      gradeType: "Percentage",
      grade: "91.3%",
      description: "Specialized in Computer Science, Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Secondary School Certificate (10th Grade - ICSE)",
      institution: "St. Thomas English High School (ICSE Board)",
      duration: "2020",
      gradeType: "Percentage",
      grade: "90.6%",
      description: "Foundational secondary education with focus on general sciences, mathematics, and computers."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#05060d]">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            My <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12"
        >
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1.5 p-1.5 rounded-full bg-slate-900 border-2 border-brand-blue flex items-center justify-center text-brand-blue shadow-lg shadow-brand-blue/20">
                <GraduationCap size={16} />
              </div>

              {/* Card content */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#0d1127]/20 hover:border-white/10 transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center space-x-1.5 text-xs text-brand-blue font-semibold tracking-wider font-display uppercase">
                    <Calendar size={12} />
                    <span>{edu.duration}</span>
                  </span>
                  
                  {/* Grade pill */}
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-semibold w-fit">
                    <Award size={12} />
                    <span>{edu.gradeType}: {edu.grade}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 font-display tracking-tight">
                  {edu.degree}
                </h3>
                
                <h4 className="text-sm font-semibold text-slate-400 mb-4">
                  {edu.institution}
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
