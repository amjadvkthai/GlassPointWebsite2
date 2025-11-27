import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -left-64 top-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <img 
              src="assets/glass-fix.png" 
              alt="Glass Craftsman" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative border frame */}
          <div className="absolute top-6 -right-6 w-full h-full border border-white/10 rounded-2xl z-0 hidden md:block"></div>
        </div>

        <div className="space-y-8">
          <span className="text-blue-400 font-medium tracking-widest text-xs uppercase">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            We transform raw glass into <span className="italic text-blue-200">architectural art.</span>
          </h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              At GLASSPOINT, we believe that glass is more than just a material—it's a medium for light, space, and perspective. For over a decade, we have been at the forefront of the glass industry, delivering high-precision solutions for both residential and commercial projects.
            </p>
            <p>
              Our facility is equipped with state-of-the-art machinery capable of complex beveling, polishing, and custom etching. Whether it's a structural facade or a decorative interior piece, our team brings clarity and strength to every vision.
            </p>
          </div>
          
          <div className="pt-4 grid grid-cols-3 gap-8 border-t border-white/10">
            <div>
              <h4 className="text-3xl font-serif text-white">12+</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif text-white">500+</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Projects Done</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif text-white">100%</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;