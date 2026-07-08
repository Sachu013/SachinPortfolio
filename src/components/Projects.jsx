import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import subscriptionImg from '../assets/subscription.png';
import civicImg from '../assets/civic.png';

// Individual Tilt Card Component for Performance Isolation
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  
  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform coordinates to degree rotation
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse offset relative to card center
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="premium-glass rounded-3xl border border-premium-border bg-premium-white overflow-hidden flex flex-col h-full hover:shadow-xl hover:shadow-premium-teal/[0.02] hover:border-premium-teal/20 transition-all duration-300"
    >
      {/* Project Image Frame */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="h-56 bg-premium-beige border-b border-premium-border overflow-hidden relative group"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          /* High-Fidelity Custom CSS/HTML Mockup for Campus Connect */
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-tr from-[#FCFBF7] to-[#F5F4EF] relative">
            <div className="flex items-center justify-between border-b border-premium-border/60 pb-3">
              <span className="text-[10px] font-bold text-premium-teal tracking-widest font-display">CAMPUS FEED</span>
              <span className="w-2.5 h-2.5 rounded-full bg-premium-teal" />
            </div>
            
            <div className="space-y-3 relative z-10">
              <div className="p-2.5 rounded-xl bg-premium-white border border-premium-border flex items-start space-x-3 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-premium-teal/20 flex-shrink-0 flex items-center justify-center text-[8px] font-bold text-premium-teal font-display">CS</div>
                <div className="space-y-1.5 flex-1">
                  <div className="h-2 w-16 bg-[#EBEAE3] rounded" />
                  <div className="h-2 w-full bg-[#FCFBF7] border border-premium-border rounded" />
                </div>
              </div>
            </div>

            <div className="h-6 w-full rounded-xl bg-premium-teal/10 flex items-center justify-center border border-premium-teal/20">
              <span className="text-[9px] font-bold text-premium-teal tracking-wider uppercase font-display">Firebase Sync: Online</span>
            </div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full bg-premium-teal/5 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        )}
        
        {/* Subtle overlay hover cover */}
        <div className="absolute inset-0 bg-premium-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Details Area */}
      <div 
        style={{ transform: "translateZ(15px)" }}
        className="p-6 sm:p-8 flex flex-col flex-1"
      >
        <h3 className="text-lg sm:text-xl font-extrabold text-premium-black tracking-tight mb-2 font-display">
          {project.title}
        </h3>
        
        <p className="text-sm sm:text-base text-premium-gray leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-full bg-premium-beige border border-premium-border text-premium-gray text-[10px] font-bold uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 py-3 px-4 rounded-full bg-premium-beige hover:bg-[#eae9e2] border border-premium-border text-premium-black text-xs font-bold uppercase tracking-widest transition-colors duration-300"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 py-3 px-4 rounded-full bg-premium-black hover:bg-premium-teal text-premium-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-md shadow-premium-black/5"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Subscription Management",
      description: "A secure subscription licensing system engineered to help enterprise SaaS providers manage client contracts, trace renewals, and monitor licensing operations.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Sachu013",
      demo: "https://example.com",
      image: subscriptionImg
    },
    {
      title: "Civic Sense Reporting",
      description: "A civic engagement platform designed for municipal grievance management. Features geolocation reporting, status tracking, and AI issue classification routing.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI", "Google Maps"],
      github: "https://github.com/Sachu013",
      demo: "https://example.com",
      image: civicImg
    },
    {
      title: "Campus Connect Social",
      description: "A real-time college networking dashboard allowing students, clubs, and admin boards to send notifications, post event updates, and coordinate threads.",
      tech: ["React.js", "Firebase", "Firestore", "Storage API", "Tailwind CSS"],
      github: "https://github.com/Sachu013",
      demo: "https://example.com",
      image: null // Renders high-fidelity custom visual mockup
    }
  ];

  return (
    <section id="projects" className="py-32 relative bg-premium-beige border-y border-premium-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-widest text-premium-teal uppercase font-display block">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-premium-black mt-2">
            Showcase <span className="text-premium-teal">Projects.</span>
          </h2>
          <div className="w-12 h-1 bg-premium-teal mx-auto mt-4 rounded-full" />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
