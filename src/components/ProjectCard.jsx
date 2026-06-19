import React from 'react';

export default function ProjectCard({ title, description, technologies = [], liveLink, githubLink, image }) {
  return (
    <div className="max-w-[420px] bg-[#1E293B] border border-[#1E293B] hover:border-[#38BDF8]/20 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col group mx-auto w-full shadow-xl shadow-black/20">
      
      {/* 1. TOP PORTION: The Project Image Frame */}
      <div className="w-full aspect-video bg-[#0F172A] relative overflow-hidden border-b border-[#1E293B]/80">
        
        {/* Flagship Project Floating Badge */}
        <div className="absolute top-3 left-3 z-10 bg-[#38BDF8] text-[#0F172A] text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
          <span>⭐</span> Flagship Project
        </div>

        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-contain object-center bg-[#0F172A] group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xs font-mono opacity-40 text-[#94A3B8]">[ Project Showcase ]</span>
          </div>
        )}
      </div>
      
      {/* 2. BOTTOM PORTION: Structured Metadata & Context */}
      <div className="p-6 flex flex-col flex-grow text-left">
        
        <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-widest block mb-1">
          E-Commerce Architecture
        </span>
        
        <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 tracking-tight group-hover:text-[#38BDF8] transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-[#94A3B8] text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        {/* Tech Stack Pills Matrix */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, idx) => (
            <span key={idx} className="text-xs font-mono bg-[#0F172A]/60 border border-[#1E293B] text-[#38BDF8] px-2.5 py-1 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links Panel: Fixed to prevent text wrapping strings */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1E293B]/60 mt-auto">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs font-mono font-bold text-[#38BDF8] hover:underline flex items-center gap-1 transition-all"
            >
              Live Demo <span className="text-xs">→</span>
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
            >
              GitHub Repo
            </a>
          )}
        </div>

      </div>
    </div>
  );
}