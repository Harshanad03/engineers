import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    '/images/about1.mp4',
    '/images/about2.mp4'
  ];

  // Switch videos every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        key={currentVideo}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Hero Content */}
      <div className="relative z-10 text-left px-6 max-w-4xl mx-auto -mt-13 -ml-1">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Leading Manufacturer of
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Industrial & Feed Machinery
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          Since 1990
        </h3>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 font-normal">
          Precision Engineered | Trusted Quality Proven Performance
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
          <button className="bg-[#0a1a3f] hover:bg-[#142c66] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
            Our Products
          </button>
          <button className="bg-[#facc15] hover:bg-[#fde047] text-[#0a1a3f] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
