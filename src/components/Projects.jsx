import React from 'react';
import SectionTitle from './SectionTitle';

// Dynamic, high-quality production preview images mapped to project aesthetics
const cosmeticsImage = "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1200&q=80";
const eventSysImage = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80";
const learningAppImage = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80";
const fitnessTrackerImage = "https://images.unsplash.com/photo-1510256572813-a04e7672837b?auto=format&fit=crop&w=800&q=80";

const featuredProject = {
  title: "Cosmetics E-Commerce Platform",
  description: "A comprehensive, production-ready digital storefront built to optimize product discoverability and streamline user conversion funnels. Features an item catalog matrix, responsive shopping bag states, and interactive checkout architectures.",
  tags: ["React", "Tailwind CSS"],
  liveLink: "https://yvbeauty.netlify.app/",
  githubLink: "https://github.com/redu-1995/beauty",
  image: cosmeticsImage
};

const secondaryProjects = [
  {
    id: 1,
    title: "Event Management System",
    description: "A robust full-stack platform managing programmatic event registration workflows, dynamic scheduling constraints, and multi-tier attendee access tokens.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://event-management-system-ashy-seven.vercel.app/",
    githubLink: "https://github.com/redu-1995/Event_Management_System",
    image: eventSysImage // Integrated elegant conference/keynote hall presentation asset
  },
  {
    id: 2,
    title: "Offline Learning Application",
    description: "A standalone desktop educational portal optimized for low-bandwidth regions. Facilitates modular quizzes, progress markers, and local structural word arrays.",
    tags: ["React", "Tailwind CSS", "Local Node Storage"],
    liveLink: "#",
    githubLink: "#",
    image: learningAppImage // Integrated clean, focused educational/classroom layout asset
  },
  {
    id: 3,
    title: "Fitness Tracking Ecosystem",
    description: "A mobile-first health hub tracking metabolic output, target metrics, and custom workout progression trees.",
    tags: ["React Native", "Expo", "Context API"],
    liveLink: "#",
    githubLink: "#",
    image: fitnessTrackerImage // Integrated premium smartwatch health sensor calibration asset
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      
      {/* Section Header */}
      <div className="mb-16">
        <SectionTitle number="03" title="Featured Systems Showcase" />
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mt-4 leading-relaxed">
          Here are some real-world applications I have architected and deployed, engineered to solve programmatic challenges across frontend execution environments and server-side runtimes.
        </p>
      </div>

      {/* 1. TOP FLAGSHIP FEATURED PROJECT (Full-Width Card) */}
      <div className="mb-12 group bg-[#1E293B]/40 border border-[#1E293B] hover:border-[#38BDF8]/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl shadow-black/20">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Left Hero Preview Panel */}
          <div className="lg:w-3/5 bg-[#0F172A] min-h-[280px] md:min-h-[360px] relative overflow-hidden flex items-center justify-center text-[#64748B] border-b lg:border-b-0 lg:border-r border-[#1E293B]">
            <img 
              src={featuredProject.image} 
              alt={featuredProject.title} 
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <span className="absolute top-4 left-4 bg-[#38BDF8] text-[#0F172A] font-mono text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded shadow-md">
              ⭐ Flagship Project
            </span>
          </div>

          {/* Right Core Content Details */}
          {/* Right Core Content Details */}
<div className="lg:w-2/5 p-8 flex flex-col justify-start space-y-6 bg-[#0F172A]/20">
  <div>
    <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest">E-Commerce Architecture</span>
    <h3 className="text-2xl font-black text-[#F8FAFC] mt-1 mb-4 group-hover:text-[#38BDF8] transition-colors">
      {featuredProject.title}
    </h3>
    <p className="text-[#94A3B8] text-sm leading-relaxed">
      {featuredProject.description}
    </p>
  </div>

  <div>
    {/* Badges Array */}
    <div className="flex flex-wrap gap-2 mb-6">
      {featuredProject.tags.map((tag, idx) => (
        <span 
          key={idx} 
          className="text-[11px] font-mono font-medium border border-[#38BDF8]/10 bg-[#0F172A]/60 text-[#38BDF8] px-2.5 py-1 rounded-md group-hover:border-[#38BDF8]/30 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Action Targets */}
    <div className="flex items-center gap-6 text-sm font-semibold pt-4 border-t border-[#1E293B]">
      <a href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-[#38BDF8] hover:underline flex items-center gap-1">
        Live System Deployment <span className="text-xs">→</span>
      </a>
      <a href={featuredProject.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
        GitHub Repository
      </a>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* 2. SECONDARY PROJECTS GRID MATRIX (2 Columns Desktop / 1 Column Mobile) */}
      <div className="grid md:grid-cols-2 gap-8">
        {secondaryProjects.map((project) => (
          <div 
            key={project.id} 
            className="group/card bg-[#1E293B]/40 border border-[#1E293B] hover:border-[#38BDF8]/20 rounded-xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 flex flex-col shadow-lg shadow-black/10"
          >
            {/* Project Image Header */}
            <div className="h-52 bg-[#0F172A] relative overflow-hidden flex items-center justify-center text-[#64748B] border-b border-[#1E293B]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center group-hover/card:scale-[1.04] transition-transform duration-700 ease-out" 
              />
            </div>

            {/* Core Project Copy details */}
            <div className="p-6 flex flex-col flex-grow justify-between bg-[#0F172A]/10">
              <div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover/card:text-[#38BDF8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#94A3B8] text-sm line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Micro Badges wrapper */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono border border-[#1E293B] bg-[#0F172A]/40 text-[#94A3B8] group-hover/card:text-[#38BDF8] group-hover/card:border-[#38BDF8]/10 px-2 py-0.5 rounded transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Entryways */}
                <div className="flex space-x-4 text-xs font-bold pt-3 border-t border-[#1E293B]/60">
                  <a href={project.liveLink} className="text-[#38BDF8] hover:underline">
                    Live Demo ↗
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#64748B] hover:text-[#F8FAFC] transition-colors">
                    Source Code
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}