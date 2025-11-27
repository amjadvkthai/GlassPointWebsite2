import React from 'react';
import { Layers, Zap, PenTool, Sparkles, Droplet, Hammer } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-serif text-white mb-3 group-hover:text-blue-200 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Hammer size={24} />,
      title: "Glass Fitting",
      description: "Expert installation services for residential and commercial spaces, ensuring structural integrity and flawless finish."
    },
    {
      icon: <Layers size={24} />,
      title: "Machine Beveling",
      description: "Precision edge grinding to create angled surfaces that refract light and add elegance to mirrors and glass panels."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Polishing",
      description: "High-grade polishing techniques to remove imperfections and achieve crystal-clear transparency and shine."
    },
    {
      icon: <PenTool size={24} />,
      title: "Etchings",
      description: "Custom artistic designs sandblasted or chemically etched onto glass for branding, privacy, or decoration."
    },
    {
      icon: <Zap size={24} />,
      title: "Colouring",
      description: "Advanced glass coloring and back-painting services to match any interior design palette or architectural requirement."
    },
    {
      icon: <Droplet size={24} />,
      title: "Acid Work",
      description: "Specialized acid treatment for frosted, textured, and privacy glass applications with smooth, durable finishes."
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-950 relative">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-blue-900/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-400 font-medium tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Comprehensive Glass Solutions</h2>
          <p className="text-slate-400 text-lg">
            From industrial processing to artistic detailing, we cover every aspect of glass enhancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;