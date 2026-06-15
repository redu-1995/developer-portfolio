import React from 'react';
import SectionTitle from './SectionTitle';

const jobExperience = {
  role: "Junior IT Officer",
  company: "Yetem Trading PLC",
  location: "Addis Ababa, Ethiopia",
  period: "2025 - Present",
  bullets: [
    "Diagnose, isolate, and resolve systemic network infrastructure faults and software bugs, mitigating operational downtime.",
    "Administer access tokens, database permissions, and security credential sets to enforce internal data governance boundaries.",
    "Support core enterprise system deployments, assisting multi-departmental teams with system adoption, data validation, and technical onboarding."
  ]
};

const educationDetails = {
  degree: "Bachelor’s Degree in Computer Science",
  institution: "American College Of Technology", // Replace with your actual University name if different
  period: "Graduated 2025"
};

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      
      {/* Section Strategic Header */}
      <div className="mb-12">
        <SectionTitle number="01" title="About & Background" />
      </div>

      {/* Main Two-Column Layout Wrapper */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        
        {/* Left Column: Narrative, Experience Timeline, and Education */}
        <div className="flex-1 space-y-8 text-left">
          
          {/* Intro Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#F8FAFC]">
              Hi, I'm Rediet — a Frontend & Django Developer based in Ethiopia.
            </h3>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              I enjoy building responsive, user-friendly web applications and solving real-world problems using technology. My approach focuses heavily on writing clean, maintainable code and creating applications that are both highly functional and visually appealing.
            </p>
          </div>

          {/* Combined Experience & Education Track */}
          <div className="space-y-6 pt-2">
            
            {/* 1. PROFESSIONAL ENGAGEMENT ELEMENT */}
            <div>
              <h4 className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                Current Professional Engagement
              </h4>

              <div className="relative border-l border-[#1E293B] ml-2 pl-6 pb-2">
                {/* Timeline Node overlay indicator */}
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-[#38BDF8] rounded-full shadow-sm shadow-[#38BDF8]/50" />
                
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-3">
                  <h5 className="text-base font-bold text-[#F8FAFC]">
                    {jobExperience.role} <span className="text-[#38BDF8] font-normal">@ {jobExperience.company}</span>
                  </h5>
                  <span className="text-xs font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">
                    {jobExperience.period}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-[#94A3B8] leading-relaxed">
                  {jobExperience.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#38BDF8] mt-1 text-[10px]">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. ACADEMIC FOUNDATION ELEMENT */}
            <div>
              <h4 className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-600" />
                Academic Foundation
              </h4>

              <div className="relative border-l border-[#1E293B] ml-2 pl-6 pb-2">
                {/* Timeline Node overlay indicator */}
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-slate-500 rounded-full" />
                
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <div>
                    <h5 className="text-base font-bold text-[#F8FAFC]">
                      {educationDetails.degree}
                    </h5>
                    <p className="text-sm text-[#94A3B8] mt-0.5">
                      {educationDetails.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#64748B] bg-[#1E293B] px-2 py-0.5 rounded border border-[#1E293B]">
                    {educationDetails.period}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: High-Scannability Context Telemetry Card */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-[#1E293B]/40 border border-[#1E293B] rounded-2xl p-6 relative overflow-hidden shadow-xl shadow-black/10 group hover:border-[#38BDF8]/20 transition-all duration-300">
            
            {/* Top Card Structural Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#38BDF8] to-blue-500" />
            
            <h4 className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-6 block">
              // Telemetry Core
            </h4>

            {/* Quick Fact Rows */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block">Location Baseline</span>
                <span className="text-[#F8FAFC] font-medium flex items-center gap-2 mt-0.5 text-sm">
                  📍 Addis Ababa, Ethiopia
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block">Tech Focus Cluster</span>
                <span className="text-[#F8FAFC] font-medium flex items-center gap-2 mt-0.5 text-sm">
                  🌐 React • Django • APIs
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block">Target Workflow</span>
                <span className="text-[#38BDF8] font-medium flex items-center gap-2 mt-0.5 text-xs font-mono">
                  Full-Stack Web Systems
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono text-[#64748B] uppercase block mb-1.5">Availability Status</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#0F172A] bg-[#38BDF8] rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 bg-[#0F172A] rounded-full animate-ping" />
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Micro Technology List inside Card */}
            <div className="mt-6 pt-5 border-t border-[#1E293B] text-[11px] font-mono text-[#64748B]">
              <div className="flex justify-between mb-1">
                <span>Languages:</span>
                <span className="text-[#94A3B8]">JavaScript, Python</span>
              </div>
              <div className="flex justify-between">
                <span>Ecosystem:</span>
                <span className="text-[#94A3B8]">Git, REST, SQL</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}