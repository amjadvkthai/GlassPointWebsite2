import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Let's craft your <br />
              <span className="italic text-blue-300">vision together.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Whether you need a custom quote or have a question about our services, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">Visit Us</h4>
                  <p className="text-slate-500 mt-1">123 Glassworks Avenue<br/>Industrial District, New York, NY 10012</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">Email Us</h4>
                  <p className="text-slate-500 mt-1">solutions@glasspoint.com<br/>support@glasspoint.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg">Call Us</h4>
                  <p className="text-slate-500 mt-1">+1 (555) 123-4567<br/>Mon-Fri, 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-slate-400 uppercase tracking-wide">Name</label>
                  <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-slate-400 uppercase tracking-wide">Email</label>
                  <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm text-slate-400 uppercase tracking-wide">Service Interested In</label>
                <select id="service" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white/70 focus:outline-none focus:border-blue-500 transition-colors">
                  <option className="bg-slate-900">General Inquiry</option>
                  <option className="bg-slate-900">Glass Fitting</option>
                  <option className="bg-slate-900">Etching & Design</option>
                  <option className="bg-slate-900">Bulk Order</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-slate-400 uppercase tracking-wide">Message</label>
                <textarea id="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-white text-slate-900 font-medium py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;