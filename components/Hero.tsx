import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Background Image with Blue Tone */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Blue Overlay Gradient to match reference vibe */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/20 to-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-12 max-w-7xl mx-auto pt-32 pb-12">
        
        {/* Top Center Heading */}
        <div className="w-full flex flex-col items-center text-center mt-8 md:mt-16 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white drop-shadow-lg tracking-tight">
            The Glass Point <br />
            <span className="text-blue-200 italic font-light">Solutions Of Tomorrow</span>
          </h1>
          <p className="mt-6 text-blue-100/80 text-lg md:text-xl max-w-2xl font-light tracking-wide">
             Elevating architecture through precision glass craftsmanship.
          </p>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row items-end justify-between w-full mt-auto gap-8">
          
          {/* Glass Card - Bottom Left (Matches Reference) */}
          <div className="glass-panel rounded-3xl p-8 w-full md:w-[450px] relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
            {/* Subtle light effect */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
            
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
              Craftsmanship that defines <br/>
              <span className="italic text-blue-300">modern spaces.</span>
            </h2>
            
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
              GlassPoint is a premier provider of architectural glass solutions. 
              From intricate etchings to large-scale structural fitting, we shape the transparency of your world.
            </p>

            <a href="#about" className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all duration-300 group-hover:text-blue-300">
              <span className="border-b border-white/30 pb-0.5 group-hover:border-blue-300">Get to know us</span>
              <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                <ArrowRight size={10} />
              </div>
            </a>
          </div>

          {/* Decorative/Additional Info (Optional - to balance right side) */}
          <div className="hidden md:block text-right text-white/50 text-sm font-mono space-y-2">
            <p>EST. 2010</p>
            <p>BASED IN NY</p>
            <p>SCROLL TO EXPLORE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;