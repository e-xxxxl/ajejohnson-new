import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-black pt-32 pb-12 px-4 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-white/30"></div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">Contact</span>
            </div>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase leading-[0.9] tracking-tight text-white">
              Let's build <br />
              <span className="text-gray-500 italic">Something Great</span>
            </h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="mailto:eajejohnson@gmail.com" className="nav-pill px-8 py-4 bg-white text-black border-white">
                eajejohnson@gmail.com
              </a>
              <button className="nav-pill px-8 py-4">Copy Email</button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Social</span>
              <div className="flex flex-col gap-2">
                <a href="https://www.instagram.com/emmy_gram._/" className="text-sm uppercase tracking-wider hover:text-gray-400 transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/in/ajejohnson-emmanuel-8929902a0/" className="text-sm uppercase tracking-wider hover:text-gray-400 transition-colors">LinkedIn</a>
                <a href="https://x.com/eajejohnson" className="text-sm uppercase tracking-wider hover:text-gray-400 transition-colors">Twitter</a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Location</span>
              <div className="flex flex-col gap-2">
                <p className="text-sm uppercase tracking-wider">Kufuki Land</p>
                <p className="text-sm uppercase tracking-wider text-gray-500">Remote (GMT+1)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col items-center gap-12">
          <h2 className="hero-text text-[clamp(40px,12vw,180px)] opacity-10 hover:opacity-100 transition-opacity duration-1000 cursor-default w-full">
            Ajejohnson
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              © 2026 Ajejohnson Emmanuel
            </p>
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Built with love & Coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
