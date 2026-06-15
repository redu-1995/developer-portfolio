import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0F172A] border-t border-[#1E293B]/60 w-full mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Tier: Brand Statement, Navigation Matrix, and Platform Vectors */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-8 border-b border-[#1E293B]/40">
          
          {/* Brand Vector block */}
          <div className="text-left space-y-2">
            <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight">
              Rediet<span className="text-[#38BDF8]">.dev</span>
            </h3>
            <p className="text-xs font-mono text-[#64748B] max-w-xs leading-relaxed">
              Frontend & Django Developer focused on shipping clean architectural logic and functional interfaces.
            </p>
          </div>

          {/* Practical Quick Links Matrix Re-entry */}
          <div className="flex flex-col sm:flex-row gap-x-12 gap-y-6 text-left">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">// Directory</span>
              <ul className="space-y-2 text-sm font-medium text-[#94A3B8]">
                <li><a href="#hero" className="hover:text-[#38BDF8] transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="hover:text-[#38BDF8] transition-colors duration-200">About</a></li>
                <li><a href="#skills" className="hover:text-[#38BDF8] transition-colors duration-200">Skills</a></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block">// Connect</span>
              <ul className="space-y-2 text-sm font-medium text-[#94A3B8]">
                <li><a href="https://github.com/redu-1995" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] transition-colors duration-200">GitHub</a></li>
                <li><a href="https://linkedin.com/in/rediet" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8] transition-colors duration-200">LinkedIn</a></li>
                <li><a href="mailto:rediet@example.com" className="hover:text-[#38BDF8] transition-colors duration-200">Email</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Telemetry Meta Data & Action Items */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs font-mono text-[#64748B]">
          
          {/* Copyright Boundaries */}
          <div className="text-center sm:text-left space-y-1 order-2 sm:order-1">
            <p className="text-[#94A3B8]">
              &copy; {new Date().getFullYear()} Rediet. All rights reserved.
            </p>
            <p className="text-[11px]">
              Built with <span className="text-[#38BDF8]">React</span> &amp; <span className="text-[#38BDF8]">Tailwind CSS</span>
            </p>
          </div>

          {/* Interactive Back-To-Top Anchor Toggle */}
          <div className="order-1 sm:order-2">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 bg-[#1E293B]/40 hover:bg-[#1E293B] border border-[#1E293B] hover:border-[#38BDF8]/20 rounded-xl text-[#94A3B8] hover:text-[#F8FAFC] transition-all duration-200 group cursor-pointer"
            >
              <span>Back to top</span>
              <span className="transform group-hover:-translate-y-0.5 transition-transform duration-200 text-[#38BDF8]">↑</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}