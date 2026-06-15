import React from 'react';

export default function SectionTitle({ number, title }) {
  return (
    <h2 className="text-3xl font-bold text-[#F8FAFC] mb-12 flex items-center">
      <span className="text-[#38BDF8] font-mono text-xl mr-2">{number}.</span>
      {title}
    </h2>
  );
}