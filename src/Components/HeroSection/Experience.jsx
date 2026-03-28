import React from 'react';

const Experience = () => {
  const experiences = [
    { role: "Full-stack Developer", company: "Freelance", period: "2025 — Now" },
    { role: "Frontend Developer", company: "Tekuvo", period: "2023 — 2025" },
    { role: "Web Developer", company: "QuickShip", period: "2022 — 2023" },
    { role: "Junior Developer", company: "Genpay", period: "2021 — 2022" },
  ];

  return (
    <section className="w-full bg-black py-14 md:py-20 px-4 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-white/30"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">Experience</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-display uppercase leading-[0.9] tracking-tight text-white">
            Career <br />
            <span className="text-gray-500 italic">Journey</span>
          </h3>
        </div>
        
        <div className="lg:col-span-2 flex flex-col">
          {experiences.map((exp, index) => (
            <div key={index} className="group grid grid-cols-1 md:grid-cols-3 py-10 border-b border-white/10 gap-6 md:gap-12 items-center transition-all duration-500 hover:px-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{exp.period}</span>
                <h4 className="text-xl md:text-2xl font-display uppercase tracking-tight text-white group-hover:text-gray-300 transition-colors">
                  {exp.role}
                </h4>
              </div>
              <p className="text-gray-400 font-medium uppercase tracking-[0.2em] text-xs md:text-sm">
                {exp.company}
              </p>
              <div className="flex md:justify-end">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
