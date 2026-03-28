import React from 'react';

const Services = () => {
  const services = [
    "Website Design",
    "Full-Stack Development",
    "Branding",
    "UX / UI Design",
    // "Cloud Architecture",
    "API Integration",
    "Design System"
  ];

  return (
    <section className="w-full bg-black py-14 md:py-26 px-4 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-white/30"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">Services</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-display uppercase leading-[0.9] tracking-tight text-white">
            What I <br />
            <span className="text-gray-500 italic">Deliver</span>
          </h3>
        </div>
        
        <div className="lg:col-span-2 flex flex-col">
          {services.map((service, index) => (
            <div key={index} className="group flex items-center justify-between py-8 border-b border-white/10 cursor-default transition-all duration-500 hover:px-4">
              <h4 className="text-3xl md:text-5xl lg:text-6xl font-display uppercase tracking-tighter text-white/20 group-hover:text-white transition-colors duration-500">
                {service}
              </h4>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                <span className="text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
