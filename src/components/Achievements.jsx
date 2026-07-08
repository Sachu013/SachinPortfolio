import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, ShieldAlert, GraduationCap } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "Academic Excellence",
      subtitle: "CSBS Core",
      icon: <GraduationCap className="text-brand-blue" size={24} />,
      points: [
        "Maintained a consistent CGPA of 8.45 / 10 in B.Tech CSBS",
        "Scored 91.3% in Higher Secondary Education (12th State Board)",
        "Scored 90.6% in Matriculation Education (10th ICSE Board)"
      ]
    },
    {
      title: "Hackathon Track Record",
      subtitle: "Coding Competitions",
      icon: <Award className="text-brand-purple" size={24} />,
      points: [
        "Developed MVP civic platform within a 36-hour hackathon",
        "Pioneered AI issue categorization module for municipal routing",
        "Led a team of 4 to design responsive front-end dashboard applications"
      ]
    },
    {
      title: "Technical Projects",
      subtitle: "Core Engineering",
      icon: <Code2 className="text-emerald-500" size={24} />,
      points: [
        "Architected an Online Subscription Management Platform using MERN stack",
        "Engineered Campus Connect: A college communication platform with React & Firebase",
        "Utilized clean modular coding rules and OOP principles in Java implementations"
      ]
    },
    {
      title: "Professional Credentials",
      subtitle: "Industry Badges",
      icon: <ShieldAlert className="text-brand-pink" size={24} />,
      points: [
        "Successfully certified as a Meta Professional Front-End Developer",
        "Acquired specialized networking foundation through Cisco NetAcad Basics",
        "Earning Python Essentials and IBM Cognitive Class Data Science badges"
      ]
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
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#05060d]">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Key <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#0d1127]/20 hover:border-white/10 transition duration-300 flex flex-col sm:flex-row gap-6"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 w-fit">
                  {ach.icon}
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-display block mb-1">
                  {ach.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 font-display tracking-tight leading-snug">
                  {ach.title}
                </h3>
                
                <ul className="space-y-3">
                  {ach.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2 text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
