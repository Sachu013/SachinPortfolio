import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Timeline', href: '#education' },
    { name: 'Inbox', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#FCFBF7]/70 backdrop-blur-md border-b border-premium-border/50 shadow-sm shadow-premium-black/[0.01]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <a href="#" className="flex items-center space-x-2 text-premium-black group">
            <span className="font-display font-black text-lg tracking-tight transition-colors duration-300 group-hover:text-premium-teal">
              SS<span className="text-premium-teal group-hover:text-premium-black">.</span>
            </span>
            <span className="font-display text-sm font-semibold tracking-wide border-l border-premium-border pl-2 text-premium-gray">
              Sachin Suresh
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="text-xs font-semibold uppercase tracking-widest text-premium-gray hover:text-premium-black py-2.5 px-4 rounded-full relative transition-colors duration-300"
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="navbarHoverBg"
                    className="absolute inset-0 bg-[#F0EFEA] rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  />
                )}
              </a>
            ))}
            
            {/* Magnetic Hire Me CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-6 flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-premium-black hover:bg-premium-teal text-premium-white text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={12} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-premium-gray hover:text-premium-black hover:bg-[#F5F4EF] transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-premium-border/40 bg-[#FCFBF7] shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-bold uppercase tracking-widest text-premium-gray hover:text-premium-black py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-premium-border/40">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-full bg-premium-black text-premium-white text-xs font-bold uppercase tracking-widest"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
