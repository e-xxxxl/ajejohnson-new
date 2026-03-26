import React from 'react';

const Marquee = () => {
  const techStacks = [
    'React', 'JavaScript', 'Node.js', 'Python', 'TypeScript', 'Tailwind', 
    'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Next.js', 'Framer Motion'
  ];

  const marqueeItems = [...techStacks, ...techStacks];

  return (
    <div className="w-full py-12 border-y border-white/5 bg-black overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {marqueeItems.map((tech, index) => (
          <div key={index} className="flex items-center gap-4 mx-8">
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="uppercase text-[10px] md:text-xs font-mono tracking-[0.4em] text-gray-400">
              {tech}
            </span>
          </div>
        ))}
      </div>
      
      {/* Gradient masks for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
  );
};

export default Marquee;
