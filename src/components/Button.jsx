import React from 'react';

export default function Button({ children, href, variant = 'primary', ...props }) {
  const baseStyles = "px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 inline-block text-center";
  
  const variants = {
    primary: "bg-[#38BDF8] text-[#0F172A] hover:bg-[#38BDF8]/80",
    secondary: "bg-[#1E293B] text-[#F8FAFC] border border-[#38BDF8]/20 hover:border-[#38BDF8]/50",
    outline: "border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}