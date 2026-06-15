import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action layer hook placement (e.g., Formspree, EmailJS, or custom API route)
    console.log('Form telemetry submitted:', formData);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      
      {/* Section Strategic Header */}
      <div className="mb-16 text-left">
        <SectionTitle number="05" title="Let's Connect" />
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mt-[-2rem] leading-relaxed">
          I am currently open to Frontend Developer roles, full-stack collaboration projects, and technical engineering opportunities. Let's start a conversation.
        </p>
      </div>

      {/* Main Structural Twin Column Grid Wrapper */}
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        
        {/* Left Side: Connection Directory Cards (2/5 Column Split) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight mb-2">
            Contact Directory
          </h3>

          {/* Directory Card */}
          <div className="bg-[#1E293B]/40 border border-[#1E293B] rounded-2xl p-6 space-y-5 shadow-xl shadow-black/10">
            
            {/* Email Grid Item */}
            <div className="group flex items-start gap-4">
              <div className="p-2.5 bg-[#0F172A]/60 border border-[#1E293B] group-hover:border-[#38BDF8]/30 rounded-xl text-lg transition-colors duration-200">
                📧
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block tracking-wider">Direct Email</span>
                <a href="mailto:nara1415karol@gmail.com" className="text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 font-medium text-sm">
                  nara1415karol@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn Grid Item */}
            <div className="group flex items-start gap-4">
              <div className="p-2.5 bg-[#0F172A]/60 border border-[#1E293B] group-hover:border-[#38BDF8]/30 rounded-xl text-lg transition-colors duration-200">
                🔗
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block tracking-wider">Professional Network</span>
                <a href="https://www.linkedin.com/in/rediet-abreham-8a8b49250/" target="_blank" rel="noreferrer" className="text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 font-medium text-sm">
                  linkedin.com/in/rediet-abreham
                </a>
              </div>
            </div>

            {/* GitHub Grid Item */}
            <div className="group flex items-start gap-4">
              <div className="p-2.5 bg-[#0F172A]/60 border border-[#1E293B] group-hover:border-[#38BDF8]/30 rounded-xl text-lg transition-colors duration-200">
                💻
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block tracking-wider">Code Repositories</span>
                <a href="https://github.com/redu-1995" target="_blank" rel="noreferrer" className="text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 font-medium text-sm">
                  github.com/redu-1995
                </a>
              </div>
            </div>

            {/* Location Grid Item */}
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#0F172A]/60 border border-[#1E293B] rounded-xl text-lg">
                📍
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block tracking-wider">Location Baseline</span>
                <span className="text-[#F8FAFC] font-medium text-sm block">
                  Addis Ababa, Ethiopia
                </span>
              </div>
            </div>

            {/* Availability Grid Item */}
            <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748B]">Operational Status:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold text-[#0F172A] bg-[#38BDF8] rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#0F172A] rounded-full animate-ping" />
                Open to Work
              </span>
            </div>

          </div>
        </div>

        {/* Right Side: High-Conversion Interactive Input Form (3/5 Column Split) */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight mb-2">
            Transmission Channel
          </h3>

          <form onSubmit={handleSubmit} className="bg-[#1E293B]/40 border border-[#1E293B] rounded-2xl p-6 md:p-8 space-y-5 shadow-xl shadow-black/10">
            
            {/* Split row for Name and Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono font-bold text-[#94A3B8] uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="w-full bg-[#0F172A]/60 border border-[#1E293B] focus:border-[#38BDF8]/40 rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all duration-200"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono font-bold text-[#94A3B8] uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-[#0F172A]/60 border border-[#1E293B] focus:border-[#38BDF8]/40 rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all duration-200"
                />
              </div>
            </div>

            {/* Subject Input Box */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-mono font-bold text-[#94A3B8] uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Opportunities / Project Discussion" 
                className="w-full bg-[#0F172A]/60 border border-[#1E293B] focus:border-[#38BDF8]/40 rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all duration-200"
              />
            </div>

            {/* Message Textarea Box */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-mono font-bold text-[#94A3B8] uppercase tracking-wider">Message</label>
              <textarea 
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Hi Rediet, I stumbled across your portfolio and wanted to discuss..." 
                className="w-full bg-[#0F172A]/60 border border-[#1E293B] focus:border-[#38BDF8]/40 rounded-xl px-4 py-4 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all duration-200 resize-none"
              />
            </div>

            {/* High-Impact Conversion Action Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3.5 bg-[#38BDF8] text-[#0F172A] font-bold text-sm tracking-wide rounded-xl shadow-md shadow-[#38BDF8]/10 hover:bg-[#22a6df] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>

    </section>
  );
}