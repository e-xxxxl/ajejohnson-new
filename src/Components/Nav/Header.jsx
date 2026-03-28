import React from "react";
import cv from "../../assets/ajejohnsoncv.pdf";
const Header = () => {
  return (
    <header className="w-full min-h-[80vh] flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8 animate-pulse">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
            Available for projects
          </span>
        </div>

        <h1 className="hero-text text-[clamp(60px,18vw,280px)] w-full select-none">
          Emmanuel
        </h1>

        <div className="flex flex-col md:flex-row justify-between w-full max-w-[90%] md:max-w-[80%] mt-4 gap-4 md:gap-0">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-500 text-center md:text-left">
            Full-Stack Developer
          </span>
          {/* <span href="tekuvo.com.ng" className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-500 text-center md:text-right">
            Founder of Tekuvo
          </span> */}

          <a
            href="https://tekuvo.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-500 text-center md:text-right"
          >
            Founder of Tekuvo
          </a>

          <a
            href={cv}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-500 text-center md:text-right"
          >
            Download CV
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-3 md:gap-6 mt-16 md:mt-24">
          <a href="#about" className="nav-pill">
            About
          </a>
          <a href="#works" className="nav-pill">
            Works
          </a>
          <a href="#fun" className="nav-pill">
            Fun
          </a>
          <a href="#contact" className="nav-pill">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
