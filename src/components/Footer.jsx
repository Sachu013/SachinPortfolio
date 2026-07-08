import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03040a] border-t border-white/5 py-12 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-lg tracking-tight text-white">
              Sachin<span className="text-brand-purple">.Suresh</span>
            </span>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
              Aspiring Software Engineer bridging Computer Science with Business Systems.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-brand-blue/20 hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/15 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-brand-purple/20 hover:scale-105 hover:shadow-lg hover:shadow-brand-purple/15 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sachinsuresh@example.com"
              className="p-3 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-brand-pink/20 hover:scale-105 hover:shadow-lg hover:shadow-brand-pink/15 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Sachin Suresh. All rights reserved. Built with React and Tailwind CSS.
          </p>

          <div className="flex items-center space-x-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a
              href="#"
              onClick={handleScrollTop}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-all group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
