import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' }, // Added for filler to match 3 links in ref
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div 
        className={`
          relative flex items-center justify-between px-2 py-2 rounded-full transition-all duration-300
          ${isScrolled ? 'bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-lg w-full max-w-4xl' : 'bg-white/10 backdrop-blur-md border border-white/10 w-auto min-w-[320px] md:min-w-[500px]'}
        `}
      >
        {/* Logo Icon Area */}
        <div className="pl-4 pr-4">
           <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-inner group-hover:scale-105 transition-transform">
                G
              </div>
              <span className={`font-serif font-bold tracking-wider text-white ${isScrolled ? 'opacity-100' : 'hidden md:block'} transition-opacity`}>
                GLASSPOINT
              </span>
           </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-300 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pl-4">
          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-medium py-2 px-4 rounded-full transition-all border border-white/10 shadow-lg group"
          >
            Get Quote
            <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
              <ArrowRight size={10} />
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden ml-2 p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col gap-4 md:hidden shadow-2xl animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-serif text-white/90 hover:text-blue-400 border-b border-white/5 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-2 text-center bg-blue-600 text-white py-3 rounded-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;