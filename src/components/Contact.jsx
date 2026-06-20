import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Tracking state to show the client their submission progress
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // REPLACE THIS URL STRING WITH YOUR ACTUAL FORMSPREE ENDPOINT
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqeorjan";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        // Wipe the input boxes clean after successful transmission
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Transmission interruption. Please try again.");
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16">
      
      <div className="mb-16 text-left">
        <SectionTitle number="05" title="Let's Connect" />
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mt-[-2rem] leading-relaxed">
          I am currently open to Frontend Developer roles, full-stack collaboration projects, and technical engineering opportunities. Let's start a conversation.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        
        {/* Left Directory Side */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight mb-2">Contact Directory</h3>
          <div className="bg-[#1E293B]/40 border border-[#1E293B] rounded-2xl p-6 space-y-5 shadow-xl shadow-black/10">
            <div className="group flex items-start gap-4">
              <div className="p-2.5 bg-[#0F172A]/60 border border-[#1E293B] group-hover:border-[#38BDF8]/30 rounded-xl text-lg transition-colors duration-200">📧</div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block tracking-wider">Direct Email</span>
                <a href="mailto:rediet@example.com" className="text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 font-medium text-sm">rediet@example.com</a>
              </div>
            </div>
            <div className="group flex items-start gap-4">
              <div className="p-2.5 bg-[#0F172A]/60 border border-[#1E293B] group-hover:border-[#38BDF8]/30 rounded-xl text-lg transition-colors duration-200">🔗</div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block tracking-wider">Professional Network</span>
                <a href="https://linkedin.com/in/rediet" target="_blank" rel="noreferrer" className="text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 font-medium text-sm">linkedin.com/in/rediet</a>
              </div>
            </div>
            <div className="group flex items-start gap-4">
              <div className="p-2.5 bg-[#0F172A]/60 border border-[#1E293B] group-hover:border-[#38BDF8]/30 rounded-xl text-lg transition-colors duration-200">💻</div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block tracking-wider">Code Repositories</span>
                <a href="https://github.com/rediet" target="_blank" rel="noreferrer" className="text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-200 font-medium text-sm">github.com/rediet</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#0F172A]/60 border border-[#1E293B] rounded-xl text-lg">📍</div>
              <div>
                <span className="text-[10px] font-mono text-[#64748B] uppercase block tracking-wider">Location Baseline</span>
                <span className="text-[#F8FAFC] font-medium text-sm block">Addis Ababa, Ethiopia</span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#1E293B] flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748B]">Operational Status:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold text-[#0F172A] bg-[#38BDF8] rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#0F172A] rounded-full animate-ping" />
                Open to Work
              </span>
            </div>
          </div>
        </div>

        {/* Right Input Form Side */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight mb-2">Transmission Channel</h3>
          
          <form onSubmit={handleSubmit} className="bg-[#1E293B]/40 border border-[#1E293B] rounded-2xl p-6 md:p-8 space-y-5 shadow-xl shadow-black/10">
            
            {/* Success/Error Notifications Interface UI */}
            {status.success && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl text-left">
                ⚡ Message delivered securely. Thank you, I will get back to you shortly!
              </div>
            )}
            {status.error && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm rounded-xl text-left">
                ❌ Error: {status.error}
              </div>
            )}

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

            <div className="pt-2 text-left">
              <button 
                type="submit" 
                disabled={status.submitting}
                className="w-full md:w-auto px-8 py-3.5 bg-[#38BDF8] disabled:bg-[#38BDF8]/40 text-[#0F172A] font-bold text-sm tracking-wide rounded-xl shadow-md shadow-[#38BDF8]/10 hover:bg-[#22a6df] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
              >
                {status.submitting ? 'Transmitting...' : 'Send Message'}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}