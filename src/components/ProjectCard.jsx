import React from 'react';

export default function ProjectCard({ title, description, technologies = [], liveLink, githubLink, image }) {
  return (
    <div className="bg-[#1E293B] border border-[#1E293B] hover:border-[#38BDF8]/20 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
      <div className="h-48 bg-[#0F172A] relative overflow-hidden flex items-center justify-center text-[#94A3B8]">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <span className="text-xs font-mono opacity-50">[ Screenshot Placeholder ]</span>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{title}</h3>
        <p className="text-[#94A3B8] text-sm mb-4 flex-grow leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, idx) => (
            <span key={idx} className="text-xs font-mono bg-[#0F172A] text-[#38BDF8] px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 text-sm font-medium">
          {liveLink && <a href={liveLink} className="text-[#38BDF8] hover:underline">Live Demo →</a>}
          {githubLink && <a href={githubLink} className="text-[#94A3B8] hover:text-[#F8FAFC]">GitHub</a>}
        </div>
      </div>
    </div>
  );
}