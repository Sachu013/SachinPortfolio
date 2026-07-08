import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import useMousePosition from '../hooks/useMousePosition';
import profileImg from '../assets/profile.png';

export default function Hero() {
  const containerRef = useRef(null);
  const mouse = useMousePosition();

  // Scroll Parallax Hooks
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const imgY = useTransform(scrollY, [0, 500], [0, -40]);
  const bgY = useTransform(scrollY, [0, 500], [0, 50]);

  // Spotlight Coordinates
  const spotlightStyle = {
    '--x': `${mouse.x}px`,
    '--y': `${mouse.y}px`
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imgRevealVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
    { icon: <Mail size={18} />, href: "mailto:sachinsuresh@example.com" }
  ];

  return (
    <section
      ref={containerRef}
      style={spotlightStyle}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-premium-white light-grid-bg"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div className="cursor-glow pointer-events-none absolute inset-0 z-0" />

      {/* Subtle Floating Background Lines */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-premium-teal/[0.02] blur-[80px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgY }}
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-premium-teal/[0.015] blur-[80px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: textY }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Minimal Badge */}
            <div className="overflow-hidden h-fit">
              <motion.div
                variants={textRevealVariants}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-premium-beige border border-premium-border text-premium-teal text-[10px] font-bold uppercase tracking-widest"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-premium-teal animate-pulse" />
                <span>B.Tech Computer Science & Business Systems</span>
              </motion.div>
            </div>

            {/* Headline Reveal */}
            <div className="space-y-3">
              <div className="overflow-hidden">
                <motion.h1 
                  variants={textRevealVariants}
                  className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-premium-black leading-[1.1]"
                >
                  Architecting digital Solutions
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  variants={textRevealVariants}
                  className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-premium-teal leading-[1.1]"
                >
                  bridging code & business.
                </motion.h1>
              </div>
            </div>

            {/* Paragraph Subtitle */}
            <div className="overflow-hidden">
              <motion.p
                variants={textRevealVariants}
                className="text-base sm:text-lg text-premium-gray max-w-xl leading-relaxed"
              >
                Hi, I am <strong className="text-premium-black font-semibold">Sachin Suresh</strong>. 
                Aspiring Software Engineer, Full Stack Developer, and Java Enthusiast. I design minimalist, premium interfaces and build robust systems optimized for real business operations.
              </motion.p>
            </div>

            {/* Action Buttons Staggered */}
            <motion.div
              variants={textRevealVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-premium-black hover:bg-premium-teal text-premium-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-md shadow-premium-black/5"
              >
                <span>View Projects</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/Sachin_Suresh_Resume.pdf"
                download="Sachin_Suresh_Resume.pdf"
                className="flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-premium-beige hover:bg-[#eae9e2] border border-premium-border text-premium-black text-xs font-bold uppercase tracking-widest transition-colors duration-300"
              >
                <FileText size={14} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Anchor List */}
            <motion.div 
              variants={textRevealVariants}
              className="flex items-center space-x-4 pt-4 border-t border-premium-border/40 w-fit"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-premium-gray">Follow:</span>
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-premium-beige border border-premium-border text-premium-gray hover:text-premium-teal hover:scale-105 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Premium Photo Canvas */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              style={{ y: imgY }}
              variants={imgRevealVariants}
              initial="hidden"
              animate="visible"
              className="relative group cursor-pointer"
            >
              {/* Abstract Offset Beige Backdrop Frame */}
              <div className="absolute top-6 left-6 -right-6 -bottom-6 rounded-2xl bg-premium-beige border border-premium-border transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />

              {/* Decorative Teal Border Highlight */}
              <div className="absolute -inset-0.5 rounded-2xl bg-premium-teal opacity-0 group-hover:opacity-100 blur-[2px] transition duration-500 pointer-events-none" />

              {/* Main Photo Wrapper Frame */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl bg-premium-white border border-premium-border overflow-hidden">
                <img
                  src={profileImg}
                  alt="Sachin Suresh"
                  className="w-full h-full object-cover grayscale-[20%] contrast-[105%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Overlaid Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-premium-black/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Visual Label Corner */}
                <div className="absolute bottom-4 left-4 right-4 py-2 px-3.5 rounded-xl premium-glass text-center border border-premium-border">
                  <span className="text-[10px] font-bold tracking-widest text-premium-black font-display uppercase">SACHIN SURESH // B.Tech CSBS</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Bottom Subtle Transition Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-premium-white to-transparent pointer-events-none" />
    </section>
  );
}
