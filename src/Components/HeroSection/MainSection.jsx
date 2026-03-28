import React, { useState, useEffect, useRef } from "react";

const MainSection = () => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const gifs = [
    "https://picsum.photos/seed/gif1/800/800",
    "https://picsum.photos/seed/gif2/800/800",
    "https://picsum.photos/seed/gif3/800/800",
    "https://picsum.photos/seed/gif4/800/800",
    "https://picsum.photos/seed/gif5/800/800"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gifs.length]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-screen bg-black text-white flex items-center justify-center px-4  md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Responsive GIF container */}
        <div
          className={`
            w-full max-w-[320px] md:max-w-[450px] mx-auto lg:mx-0
            transition-all duration-1000 ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
          `}
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl group relative">
            <img
              src={gifs[currentGifIndex]}
              alt="Ajejohnson Emmanuel"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Bio text */}
        <div
          className={`
            flex flex-col gap-8 text-center lg:text-left
            transition-all duration-1000 delay-300 ease-out
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
          `}
        >
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="w-8 h-px bg-white/30"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">About Me</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display uppercase leading-[0.9] tracking-tight">
            Crafting Digital <br />
            <span className="text-gray-500 italic">Experiences</span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-gray-400 max-w-xl mx-auto lg:mx-0">
            I'm <span className="text-white font-medium">Ajejohnson Emmanuel</span>, a full-stack developer and <span className="text-white font-medium">Founder of Tekuvo</span>. I specialize in building modern web applications that turn complex ideas into seamless digital products.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1">Expertise</span>
              <span className="text-sm uppercase tracking-wider">Full-Stack Dev</span>
            </div>
            <div className="w-px h-8 bg-white/10 mx-4 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1">Focus</span>
              <span className="text-sm uppercase tracking-wider">Scalable Products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
