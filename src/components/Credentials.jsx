import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Layout, Network } from 'lucide-react';

export default function Credentials() {
  const certifications = [
    {
      title: "Java Programming Course (Self-Paced)",
      issuer: "GeeksforGeeks | 2026",
      icon: <Code2 className="text-amber-500" size={24} />,
      skills: "Data Structures, Algorithms, Object-Oriented Programming"
    },
    {
      title: "AWS Educate: Introduction to Cloud 101",
      issuer: "Amazon Web Services (AWS)",
      icon: <Cloud className="text-sky-500" size={24} />,
      skills: "Cloud Computing foundations, AWS services, virtualization"
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta | 2025",
      icon: <Layout className="text-blue-500" size={24} />,
      skills: "HTML5, CSS3, UX design principles, modern responsive styling"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      icon: <Network className="text-cyan-500" size={24} />,
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="credentials" className="py-40 sm:py-48 relative bg-premium-beige border-y border-premium-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-premium-teal uppercase font-display block mb-1">
            Certifications
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-premium-black mt-3 leading-tight">
            Professional <span className="text-premium-teal">Credentials.</span>
          </h2>
          <div className="w-12 h-1 bg-premium-teal mx-auto mt-5 rounded-full" />
        </div>

        {/* 2x2 Grid of Certification Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="premium-glass p-8 sm:p-10 rounded-3xl border border-premium-border bg-premium-white hover:border-premium-teal/40 transition-editorial flex items-start space-x-6 sm:space-x-8 group"
            >
              {/* Icon Container */}
              <div className="p-4 rounded-2xl bg-premium-beige border border-premium-border text-premium-teal group-hover:scale-105 transition-transform duration-300">
                {cert.icon}
              </div>

              {/* Text Info */}
              <div className="space-y-3 flex-1">
                <span className="text-xs font-bold text-premium-gray uppercase tracking-widest block">
                  {cert.issuer}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-premium-black tracking-tight font-display">
                  {cert.title}
                </h4>
                <div className="pt-2">
                  <span className="text-xs font-bold text-premium-teal uppercase tracking-wider block mb-1.5">
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
    </section>
  );
}
