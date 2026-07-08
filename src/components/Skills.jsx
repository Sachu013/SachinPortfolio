import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, Binary, Boxes, Atom, Server, Cpu, 
  Database, Flame, Code, Layers, FileCode, GitBranch 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Core & Programming",
      skills: [
        { name: "Java", icon: <Coffee className="text-amber-500" />, level: 90 },
        { name: "Data Structures & Algorithms", icon: <Binary className="text-emerald-500" />, level: 85 },
        { name: "Object-Oriented Programming", icon: <Boxes className="text-indigo-500" />, level: 85 },
        { name: "JavaScript", icon: <FileCode className="text-yellow-500" />, level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <Atom className="text-cyan-400" />, level: 85 },
        { name: "HTML5", icon: <Code className="text-orange-500" />, level: 90 },
        { name: "CSS3 & Tailwind", icon: <Layers className="text-sky-400" />, level: 85 }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <Server className="text-green-500" />, level: 75 },
        { name: "Express.js", icon: <Cpu className="text-gray-400" />, level: 75 },
        { name: "MongoDB", icon: <Database className="text-green-600" />, level: 80 },
        { name: "Firebase", icon: <Flame className="text-amber-600" />, level: 80 }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git & GitHub", icon: <GitBranch className="text-orange-600" />, level: 85 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#05060d]">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Technical <span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 bg-[#0d1127]/30"
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-3 tracking-wide font-display">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    {/* Skill Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
