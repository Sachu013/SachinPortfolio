import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={16} />, href: "https://github.com/Sachu013" },
    { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/sachin-suresh-2391922a8/" },
    { icon: <Mail size={16} />, href: "mailto:sachinsuresh.1311@gmail.com" }
  ];

  return (
    <footer className="relative bg-premium-beige border-t border-premium-border/60 py-16 overflow-hidden">
      {/* Subtle organic light gradient block */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-premium-teal/[0.01] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-premium-border/50">
          
          {/* Brand info */}
          <div className="text-center md:text-left space-y-2">
            <span className="font-display font-black text-lg tracking-tight text-premium-black">
              SS<span className="text-premium-teal">.</span>
            </span>
            <p className="text-sm sm:text-base text-premium-gray max-w-xs leading-relaxed">
              B.Tech Computer Science & Business Systems student specializing in high-performance web products.
            </p>
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-premium-white border border-premium-border text-premium-gray hover:text-premium-teal hover:scale-105 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-premium-gray">
            &copy; {currentYear} Sachin Suresh. Handcrafted with React and Tailwind.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-premium-gray">
            <a href="#education" className="hover:text-premium-black transition-colors">Academics</a>
            <a href="#credentials" className="hover:text-premium-black transition-colors">Credentials</a>
            <a href="#skills" className="hover:text-premium-black transition-colors">Skills</a>
            <a href="#projects" className="hover:text-premium-black transition-colors">Work</a>
            <a
              href="#"
              onClick={handleScrollTop}
              className="p-2.5 rounded-full bg-premium-white border border-premium-border text-premium-gray hover:text-premium-teal hover:-translate-y-0.5 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
