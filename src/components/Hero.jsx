import React from 'react';
import image from '../assets/Rediet Abreham_cv.pdf';
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-[#0F172A] text-[#F8FAFC] overflow-hidden relative"
    >
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 py-16 z-10">

        {/* Left Content Column */}
        <div className="flex-1 text-left">
          <p className="text-[#38BDF8] font-mono text-sm md:text-base tracking-wider mb-3 flex items-center gap-2">
            <span className="inline-block animate-bounce">👋</span> Hello, I am
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#F8FAFC] leading-none">
            Rediet
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-[#94A3B8] mt-4 tracking-tight leading-none">
            Frontend & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-blue-400">Django Developer</span>
          </h2>

          <p className="mt-6 text-[#94A3B8] text-base md:text-lg max-w-xl leading-relaxed">
            I craft pristine client-side user interfaces and link them seamlessly to robust backend systems. Focused on solving real-world challenges with elegant, structured codebases.
          </p>

          {/* Action Callouts */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-[#38BDF8] text-[#0F172A] font-bold text-sm tracking-wide rounded-lg hover:bg-[#38BDF8]/80 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-[#38BDF8]/10"
            >
              View Projects
            </a>

            <a
              href={image}
              download
              className="px-6 py-3.5 border border-[#38BDF8]/30 text-[#38BDF8] font-bold text-sm tracking-wide rounded-lg hover:bg-[#38BDF8]/5 hover:border-[#38BDF8] transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column: High-Fidelity Mock IDE Graphic */}
        <div className="flex-1 w-full max-w-md md:max-w-none flex justify-center items-center">
          <div className="w-full max-w-lg bg-[#1E293B]/60 border border-[#1E293B] backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl shadow-black/40 font-mono text-xs md:text-sm text-[#94A3B8]">
            
            {/* IDE Header Bar */}
            <div className="bg-[#0F172A]/80 px-4 py-3 flex items-center justify-between border-b border-[#1E293B]">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[11px] text-[#64748B] font-sans">developer.py</span>
              <div className="w-4" />
            </div>

            {/* IDE Workspace Pane */}
            <div className="p-6 space-y-2 overflow-x-auto selection:bg-[#38BDF8]/20">
              <div>
                <span className="text-fuchsia-400">class</span> <span className="text-[#38BDF8]">Developer</span>:
              </div>
              <div className="pl-4">
                <span className="text-fuchsia-400">def</span> <span className="text-amber-300">__init__</span>(<span className="text-amber-500">self</span>):
              </div>
              <div className="pl-8">
                <span className="text-amber-500">self</span>.name = <span className="text-emerald-400">"Rediet"</span>
              </div>
              <div className="pl-8">
                <span className="text-amber-500">self</span>.role = <span className="text-emerald-400">"Full-Stack Software Engineer"</span>
              </div>
              <div className="pl-8">
                <span className="text-amber-500">self</span>.stack = [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Django"</span>, <span className="text-emerald-400">"Tailwind"</span>]
              </div>
              
              <div className="pt-2 pl-4">
                <span className="text-fuchsia-400">def</span> <span className="text-amber-300">solve_problems</span>(<span className="text-amber-500">self</span>):
              </div>
              <div className="pl-8 text-slate-500 italic">
                # Building real-world solutions...
              </div>
              <div className="pl-8">
                <span className="text-fuchsia-400">return</span> <span className="text-amber-500">self</span>.stack.deploy_clean_apps()
              </div>

              {/* Console Output Accent */}
              <div className="pt-4 mt-4 border-t border-[#1E293B]/80 text-[#64748B] text-[11px]">
                <span>&gt; Developer profile initialized successfully.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}