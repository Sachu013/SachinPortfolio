import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Code2, Cloud, Layout, Network } from 'lucide-react';

export default function Education() {
  const academics = [
    {
      degree: "B.Tech Computer Science & Business Systems",
      institution: "Bannari Amman Institute of Technology",
      duration: "2022 - Present",
      metrics: "CGPA: 8.45 / 10",
      description: "Combining technical foundations (Java, DSA, OOPs) with business processes, financial modelling, operations strategy, and UX/UI research."
    },
    {
      degree: "Higher Secondary (12th Grade - HSC)",
      institution: "St. Thomas Higher Secondary School",
      duration: "2020 - 2022",
      metrics: "Score: 91.3%",
      description: "Major in Computer Science, Mathematics, Physics, and Chemistry (TN State Board)."
    },
    {
      degree: "Matriculation (10th Grade - ICSE)",
      institution: "St. Thomas English High School",
      duration: "2020",
      metrics: "Score: 90.6%",
      description: "General Science, Mathematics, and Computer Applications foundations."
    }
  ];

  const certifications = [
    {
      title: "Java Programming Course (Self-Paced)",
      issuer: "GeeksforGeeks | 2026",
      icon: <Code2 className="text-amber-500" size={16} />,
      skills: "Data Structures, Algorithms, Object-Oriented Programming"
    },
    {
      title: "AWS Educate: Introduction to Cloud 101",
      issuer: "Amazon Web Services (AWS)",
      icon: <Cloud className="text-sky-500" size={16} />,
      skills: "Cloud Computing foundations, AWS services, virtualization"
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta | 2025",
      icon: <Layout className="text-blue-500" size={16} />,
      skills: "HTML5, CSS3, UX design principles, modern responsive styling"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      icon: <Network className="text-cyan-500" size={16} />,
      skills: "Network protocols, OSI models, routing & switching basics"
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-premium-teal uppercase font-display block mb-1">
            Timeline
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-premium-black mt-3 leading-tight">
            Academics & <span className="text-premium-teal">Credentials.</span>
          </h2>
          <div className="w-12 h-1 bg-premium-teal mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16 items-start">
          
          {/* Left half: Academic Timeline */}
          <div className="lg:col-span-6 space-y-12">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-premium-teal mb-10 pl-4 border-l-4 border-premium-teal font-display">
              Academic Milestones
            </h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative border-l border-premium-border pl-6 sm:pl-8 space-y-14 ml-2"
            >
              {academics.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline point */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 p-1 rounded-full bg-premium-white border border-premium-border text-premium-teal shadow-sm group-hover:border-premium-teal transition-colors">
                    <GraduationCap size={12} />
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
                    <p className="text-base sm:text-lg text-premium-gray leading-relaxed max-w-xl pt-2">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right half: Professional Certifications */}
          <div className="lg:col-span-6 space-y-12">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-premium-teal mb-10 pl-4 border-l-4 border-premium-teal font-display">
              Professional Badges
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative border-l border-premium-border pl-6 sm:pl-8 space-y-14 ml-2"
            >
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 p-1.5 rounded-full bg-premium-white border border-premium-border text-premium-teal shadow-sm group-hover:border-premium-teal transition-colors">
                    {cert.icon}
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-bold text-premium-gray uppercase tracking-widest block">
                      {cert.issuer}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-premium-black tracking-tight font-display">
                      {cert.title}
                    </h4>
                    <div className="pt-2">
                      <span className="text-xs font-bold text-premium-gray uppercase tracking-wider block mb-1.5">
                        Core Competency
                      </span>
                      <p className="text-base sm:text-lg text-premium-gray leading-relaxed">
                        {cert.skills}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
