import React from 'react';
import SectionTitle from './SectionTitle';

// Mock data structures matching your portfolio schema
const featuredProject = {
  title: "Cosmetics E-Commerce Platform",
  description: "A comprehensive, production-ready digital storefront built to optimize product discoverability and streamline user conversion funnels. Features an item catalog matrix, responsive shopping bag states, and interactive checkout architectures.",
  tags: ["React", "Django", "PostgreSQL", "Tailwind CSS", "REST API"],
  liveLink: "#",
  githubLink: "#",
  image: null // Replace with real asset path when ready: "/assets/cosmetics-hero.jpg"
};

const secondaryProjects = [
  {
    id: 1,
    title: "Event Management System",
    description: "A robust full-stack platform managing programmatic event registration workflows, dynamic scheduling constraints, and multi-tier attendee access tokens.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    image: null
  },
  {
    id: 2,
    title: "Offline Learning Application",
    description: "A standalone desktop educational portal optimized for low-bandwidth regions. Facilitates modular quizzes, progress markers, and local structural word arrays.",
    tags: ["React", "Tailwind CSS", "Local Node Storage"],
    liveLink: "#",
    githubLink: "#",
    image: null
  },
  {
    id: 3,
    title: "Fitness Tracking Ecosystem",
    description: "A mobile-first health hub tracking metabolic output, target metrics, and custom workout progression trees.",
    tags: ["React Native", "Expo", "Context API"],
    liveLink: "#",
    githubLink: "#",
    image: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      
      {/* Section Header */}
      <div className="mb-16">
        <SectionTitle number="03" title="Featured Systems Showcase" />
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mt-[-2rem] leading-relaxed">
          Here are some real-world applications I have architected and deployed, engineered to solve programmatic challenges across frontend execution environments and server-side runtimes.
        </p>
      </div>

      {/* 1. TOP FLAGSHIP FEATURED PROJECT (Full-Width Card) */}
      <div className="mb-12 group bg-[#1E293B]/40 border border-[#1E293B] hover:border-[#38BDF8]/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl shadow-black/20">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* Left Hero Preview Panel */}
          <div className="lg:w-3/5 bg-[#0F172A] min-h-[240px] md:min-h-[320px] relative overflow-hidden flex items-center justify-center text-[#64748B] border-b lg:border-b-0 lg:border-r border-[#1E293B]">
            {featuredProject.image ? (
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 to-transparent flex flex-col items-center justify-center p-4">
                <span className="text-3xl mb-2">🛍️</span>
                <span className="text-xs font-mono tracking-widest uppercase opacity-60">[ Flagship Project Preview Image ]</span>
              </div>
            )}
            <span className="absolute top-4 left-4 bg-[#38BDF8] text-[#0F172A] font-mono text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded">
              ⭐ Premium Highlight
            </span>
          </div>

          {/* Right Core Content Details */}
          <div className="lg:w-2/5 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest">E-Commerce Architecture</span>
              <h3 className="text-2xl font-black text-[#F8FAFC] mt-1 mb-4 group-hover:text-[#38BDF8] transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
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
              <div className="flex items-center gap-6 text-sm font-semibold pt-2 border-t border-[#1E293B]">
                <a href={featuredProject.liveLink} className="text-[#38BDF8] hover:underline flex items-center gap-1">
                  Live System Deployment <span className="text-xs">→</span>
                </a>
                <a href={featuredProject.githubLink} className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
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
            <div className="h-48 bg-[#0F172A] relative overflow-hidden flex items-center justify-center text-[#64748B] border-b border-[#1E293B]">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover/card:scale-103 transition-transform duration-500" 
                />
              ) : (
                <span className="text-xs font-mono opacity-40">[ Application Sandbox Asset ]</span>
              )}
            </div>

            {/* Core Project Copy details */}
            <div className="p-6 flex flex-col flex-grow justify-between">
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
                  <a href={project.githubLink} className="text-[#64748B] hover:text-[#F8FAFC] transition-colors">
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