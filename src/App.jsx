import React from 'react';

// Section Layout Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-[#F8FAFC] font-sans antialiased selection:bg-[#38BDF8]/30">
      {/* Global Navigation Layout */}
      <Navbar />
      
      {/* Single Page Core Sections */}
      <main>
        {/* Intro viewport */}
        <Hero />
        
        {/* Profile Breakdown */}
        <About />
        
        {/* Tech Stack Matrix */}
        <Skills />
        
        {/* Projects Display (Highest Priority Section) */}
        <Projects />
        
        
        {/* Lead Generation & Network Channels */}
        <Contact />
      </main>
      
      {/* Structural Closing */}
      <Footer />
    </div>
  );
}

export default App;