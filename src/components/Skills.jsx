import React from 'react';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    id: 1,
    category: "Frontend Architecture",
    description: "Crafting fluid client-side interfaces and modular user experiences.",
    skills: ["React", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Responsive Design", "State Management"]
  },
  {
    id: 2,
    category: "Backend Services",
    description: "Architecting structured application logic and reliable data delivery layers.",
    skills: ["Python", "Django Framework", "RESTful APIs", "User Authentication", "CRUD Workflows", "Server Logic"]
  },
  {
    id: 3,
    category: "Data & Architecture",
    description: "Designing persistent data models and managing system entities.",
    skills: ["PostgreSQL", "SQLite", "Relational Data Modeling", "Query Basics", "Schema Design"]
  },
  {
    id: 4,
    category: "Workflow & Operations",
    description: "Version control habits and modern ecosystem infrastructure.",
    skills: ["Git & Version Control", "GitHub Workflows", "VS Code Environment", "Vercel / Netlify Deployments", "Postman API Testing"]
  },
  {
    id: 5,
    category: "Engineering Strengths",
    description: "Core professional operational logic applied during development lifecycle.",
    skills: ["Systemic Debugging", "Technical Troubleshooting", "Algorithmic Problem Solving", "Clear Documentation", "Collaborative Versioning"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      
      {/* Section Strategic Header */}
      <div className="mb-16">
        <SectionTitle number="02" title="Technical Arsenal" />
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mt-[-2rem] leading-relaxed">
          I leverage an intentional ecosystem of modern languages, robust frameworks, and standard development environments to translate complex technical constraints into scalable, interactive applications.
        </p>
      </div>

      {/* Grid Matrix: 2 columns on tablet, 3 columns on large desktop screens */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div 
            key={cat.id} 
            className="group bg-[#1E293B]/40 border border-[#1E293B] hover:border-[#38BDF8]/20 hover:-translate-y-1.5 rounded-2xl p-6 transition-all duration-300 flex flex-col shadow-lg shadow-black/10"
          >
            {/* Card Header & Domain Label */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200">
                {cat.category}
              </h3>
              <p className="text-xs text-[#64748B] font-medium mt-1 leading-normal">
                {cat.description}
              </p>
            </div>

            {/* Structured Pills Matrix wrapper */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0F172A]/50 border border-[#1E293B] group-hover:border-[#38BDF8]/10 text-xs font-mono text-[#94A3B8] group-hover:text-[#F8FAFC] rounded-lg transition-all duration-200"
                >
                  {/* Subtle technical visual marker indicator */}
                  <span className="text-[#38BDF8] font-bold select-none text-[10px]">
                    🗲
                  </span>
                  {skill}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}