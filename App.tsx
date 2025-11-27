import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple time state for the top right corner
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      {/* Time Display - Fixed Top Right matching reference */}
      <div className="fixed top-6 right-6 z-50 text-xs font-medium tracking-widest text-white/80 hidden md:block mix-blend-difference">
        {time} <span className="ml-2">NYC</span>
      </div>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;