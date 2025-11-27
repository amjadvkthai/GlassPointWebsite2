import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif text-white mb-2">GLASSPOINT</h3>
          <p className="text-sm text-slate-500">Precision. Clarity. Excellence.</p>
        </div>

        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-xs text-slate-600 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} GlassPoint Solutions Inc.</p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;