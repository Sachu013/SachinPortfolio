import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, Binary, Boxes, Atom, Server, Cpu, 
  Database, Flame, Code, Layers, FileCode, GitBranch 
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillPillars = [
    {
      title: "Core & Programming",
      subtitle: "Foundations of computational thinking",
      skills: [
        { name: "Java", icon: <Coffee size={18} className="text-amber-600" />, level: 90, note: "Multithreading, OOPs, Collections" },
        { name: "Data Structures & Algorithms", icon: <Binary size={18} className="text-emerald-600" />, level: 85, note: "Searching, Sorting, Trees, Graphs" },
        { name: "Object-Oriented Programming", icon: <Boxes size={18} className="text-indigo-600" />, level: 85, note: "Design patterns, Abstraction, Polymorphism" },
        { name: "JavaScript (ES6+)", icon: <FileCode size={18} className="text-yellow-600" />, level: 80, note: "Async/Await, DOM, Event loop" }
      ]
    },
    {
      title: "Frontend Engineering",
      subtitle: "Building responsive, modern interfaces",
      skills: [
        { name: "React.js", icon: <Atom size={18} className="text-cyan-600" />, level: 85, note: "Hooks, Context API, Virtual DOM" },
        { name: "Tailwind CSS & Vanilla CSS", icon: <Layers size={18} className="text-sky-600" />, level: 85, note: "Grids, flexbox, custom themes" },
        { name: "HTML5 Structure", icon: <Code size={18} className="text-orange-600" />, level: 90, note: "Semantic elements, SEO optimization" }
      ]
    },
    {
      title: "Backend & Databases",
      subtitle: "Handling logic, APIs, and data modeling",
      skills: [
        { name: "Node.js", icon: <Server size={18} className="text-green-600" />, level: 75, note: "REST APIs, Event loop, File systems" },
        { name: "Express.js", icon: <Cpu size={18} className="text-slate-600" />, level: 75, note: "Middlewares, routing, error handling" },
        { name: "MongoDB", icon: <Database size={18} className="text-green-700" />, level: 80, note: "Aggregation, Mongoose, indexing" },
        { name: "Firebase", icon: <Flame size={18} className="text-amber-600" />, level: 80, note: "Auth, Firestore, Cloud Storage" }
      ]
    },
    {
      title: "Tools & Collaboration",
      subtitle: "Version control and team development workflows",
      skills: [
        { name: "Git & GitHub", icon: <GitBranch size={18} className="text-orange-700" />, level: 85, note: "Pull requests, branch splits, merge conflicts" }
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
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-32 relative bg-premium-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-premium-teal uppercase font-display block mb-1">
            Capabilities
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-premium-black mt-3 leading-tight">
            Skill <span className="text-premium-teal">Visualization.</span>
          </h2>
          <div className="w-12 h-1 bg-premium-teal mx-auto mt-5 rounded-full" />
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-20 border-b border-premium-border pb-5">
          {skillPillars.map((pillar, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 relative ${
                activeCategory === idx 
                  ? 'text-premium-white' 
                  : 'text-premium-gray hover:text-premium-black hover:bg-premium-beige'
              }`}
            >
              <span className="relative z-10">{pillar.title}</span>
              {activeCategory === idx && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-premium-teal rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Pillar Subtitle Description */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm sm:text-base font-bold text-premium-teal uppercase tracking-widest mb-2 font-display">
            {skillPillars[activeCategory].title}
          </p>
          <p className="text-base sm:text-lg text-premium-gray leading-relaxed">
            {skillPillars[activeCategory].subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillPillars[activeCategory].skills.map((skill, skillIdx) => {
            // Circular SVG calculations
            const radius = 26;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;

            return (
              <motion.div
                key={skillIdx}
                variants={cardVariants}
                className="premium-glass p-6 sm:p-8 rounded-3xl border border-premium-border flex items-center justify-between group hover:border-premium-teal/40 transition-editorial cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="p-3.5 rounded-2xl bg-premium-beige border border-premium-border group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-premium-black font-display">
                      {skill.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-premium-gray mt-1.5 font-semibold italic">
                      {skill.note}
                    </p>
                  </div>
                </div>

                {/* Circular Skill Tracker */}
                <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    {/* Background Track */}
                    <circle
                      cx="32"
                      cy="32"
                      r={radius}
                      className="stroke-premium-border fill-transparent"
                      strokeWidth="2.5"
                    />
                    {/* Animated Fill Circle */}
                    <motion.circle
                      cx="32"
                      cy="32"
                      r={radius}
                      className="stroke-premium-teal fill-transparent"
                      strokeWidth="2.5"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-xs sm:text-sm font-black text-premium-black font-display">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
