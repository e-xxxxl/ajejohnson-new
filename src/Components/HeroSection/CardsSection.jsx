import React, { useState } from "react";
import pro1 from "../../assets/images/genpayshot.png";
import pro2 from "../../assets/images/xrepublik.png";
import pro3 from "../../assets/images/quickshipp.png";
import pro4 from "../../assets/images/tekuvv.png";
import pro5 from "../../assets/images/deadline.jfif";
import pro6 from "../../assets/images/bookitt.png";

const CardsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const mockups = [
    {
      id: 1,
      name: "Genpay",
      category: "Event Ticketing",
      status: "Live",
      year: "2025",
      image: pro1,
      alt: "Genpay NG",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "X-republik",
      category: "Entertainment",
      status: "Development",
      year: "2024",
      image: pro2,
      alt: "X-republik",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      name: "QuickShip",
      category: "Logistics",
      status: "Live",
      year: "2024",
      image: pro3,
      alt: "QuickShip",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      id: 4,
      name: "Tekuvo",
      category: "Agency",
      status: "Live",
      year: "2023",
      image: pro4,
      alt: "Tekuvo",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      name: "Bip",
      category: "SaaS",
      status: "Development",
      year: "2023",
      image: pro5,
      alt: "Bip Mockup",
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 6,
      name: "Bookit",
      category: "Hotel Management",
      status: "Development",
      year: "2022",
      image: pro6,
      alt: "Bookit Mockup",
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  return (
    <section id="works" className="w-full bg-black py-20 md:py-40 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-white/30"></div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">Portfolio</span>
            </div>
            <h3 className="text-4xl md:text-7xl font-display uppercase tracking-tight text-white">
              Selected <br />
              <span className="text-gray-500 italic">Works</span>
            </h3>
          </div>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xs md:text-right">
            A curated collection of digital products, experiments, and collaborations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {mockups.map((mockup) => (
            <div
              key={mockup.id}
              className="group flex flex-col gap-6"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3] md:aspect-[16/10]">
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${mockup.color} z-10 pointer-events-none`}
                />
                <img
                  src={mockup.image}
                  alt={mockup.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      mockup.status === "Live" ? "bg-emerald-500" : "bg-amber-500"
                    }`} />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      {mockup.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2 px-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-white group-hover:text-gray-300 transition-colors">
                    {mockup.name}
                  </h4>
                  <span className="text-xs font-mono text-gray-600">{mockup.year}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                    {mockup.category}
                  </span>
                  <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                  <button className="text-[10px] font-mono uppercase tracking-widest text-white hover:text-gray-400 transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 md:mt-30 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4 max-w-lg">
            <h4 className="text-xl md:text-2xl font-display uppercase text-white">Want to see more?</h4>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              I'm always working on new things. Check out my archive for a deeper dive into my process and older projects.
            </p>
          </div>
          <a href="https://github.com/e-xxxxl" className="nav-pill px-12 py-4">Visit Github</a>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
