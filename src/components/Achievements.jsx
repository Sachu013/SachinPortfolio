import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Code, ShieldCheck } from 'lucide-react';

export default function Achievements() {
  const accolades = [
    {
      index: "01",
      icon: <Award className="text-premium-teal" size={18} />,
      title: "Academic Honor Roll",
      desc: "Maintained a top-tier CGPA of 8.45 / 10 within the CSBS program, alongside securing 91.3% and 90.6% in 12th and 10th standard board examinations."
    },
    {
      index: "02",
      icon: <Zap className="text-premium-teal" size={18} />,
      title: "Hackathon Track Record",
      desc: "Architected and presented a real-time civic grievance dashboard in under 36 hours, securing recognition for routing efficiency and OpenAI classification integrations."
    },
    {
      index: "03",
      icon: <Code className="text-premium-teal" size={18} />,
      title: "Product Execution",
      desc: "Developed and launched complete MERN applications and React + Firebase communication dashboards with secure token auth and client licensing parameters."
    },
    {
      index: "04",
      icon: <ShieldCheck className="text-premium-teal" size={18} />,
      title: "Professional Badges",
      desc: "Certified in Meta Front-End Engineering and Cisco Networking Basics, mastering modular layouts, IP subnets, and routing protocols."
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="achievements" className="py-40 sm:py-48 relative bg-premium-beige border-y border-premium-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-premium-teal uppercase font-display block mb-1">
            Accolades
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-premium-black mt-3 leading-tight">
            Key <span className="text-premium-teal">Achievements.</span>
          </h2>
          <div className="w-12 h-1 bg-premium-teal mx-auto mt-5 rounded-full" />
        </div>

        {/* Accolades List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
        >
          {accolades.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="premium-glass p-8 sm:p-10 rounded-3xl border border-premium-border bg-premium-white hover:border-premium-teal/40 transition-editorial flex items-start space-x-8 group"
            >
              {/* Number and Icon */}
              <div className="flex flex-col items-center space-y-4">
                <span className="text-3xl font-black text-premium-beige font-display group-hover:text-premium-teal/20 transition-colors">
                  {item.index}
                </span>
                <div className="p-3 rounded-xl bg-premium-beige border border-premium-border text-premium-teal">
                  {item.icon}
                </div>
              </div>

              {/* Text info */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-black text-premium-black font-display tracking-tight">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-premium-gray leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
