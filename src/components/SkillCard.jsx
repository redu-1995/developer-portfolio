import React from 'react';

export default function SkillCard({ title, skills = [] }) {
  return (
    <div className="bg-[#1E293B] border border-[#1E293B] p-6 rounded-xl">
      <h3 className="text-lg font-bold text-[#38BDF8] font-mono mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, idx) => (
          <li key={idx} className="text-[#94A3B8] text-sm flex items-center">
            <span className="text-[#38BDF8] mr-2 text-xs">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}