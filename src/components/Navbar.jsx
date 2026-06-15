import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import image from '../assets/Rediet Abreham_cv.pdf';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Track active section on scroll (simple version)
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const handleScroll = () => {
      let current = "about";

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0F172A]/80 border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5">
            <span className="text-xl font-black text-white hover:text-[#38BDF8] transition">
              Rediet
            </span>
            <span className="text-xl font-black text-[#38BDF8]">
              .dev
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative py-2 transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-[#38BDF8]"
                      : "text-[#F8FAFC] hover:text-[#38BDF8]"
                  } before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-[#38BDF8] before:transition-all before:duration-300 ${
                    activeSection === item.id
                      ? "before:w-full"
                      : "before:w-0 hover:before:w-full"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CV Button */}
          <a
            href={image}
            download
            className="hidden md:block px-4 py-2 text-sm font-semibold text-[#38BDF8] border border-[#38BDF8]/30 rounded-lg hover:bg-[#38BDF8] hover:text-[#0F172A] transition"
          >
            Download CV
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 text-[#F8FAFC]"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-[#1E293B]">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg transition ${
                  activeSection === item.id
                    ? "text-[#38BDF8] bg-[#1E293B]"
                    : "text-[#F8FAFC] hover:bg-[#1E293B] hover:text-[#38BDF8]"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 px-3">
              <a
                href="/assets/Rediet Abreham_cv.pdf"
                download
                className="block text-center px-4 py-2 bg-[#38BDF8] text-[#0F172A] rounded-lg font-semibold"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}