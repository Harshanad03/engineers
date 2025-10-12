import React, { useState, useEffect } from 'react';
import GradientText from './GradientText';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const videos = [
    '/images/landingpage.mp4',
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
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Hero Content */}
      <div className="relative z-10 text-center px-3 xs:px-4 sm:px-6 lg:px-12 xl:px-16 max-w-7xl mx-auto mt-56 sm:mt-64 lg:mt-72">
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-4 xs:mb-5 sm:mb-6 lg:mb-8 xl:mb-10 font-normal max-w-4xl mx-auto leading-relaxed px-2 xs:px-0">
          With a focus on responsible transformation, advanced solutions, and sustainable investments, we build a future that benefits all.
        </p>
        
         <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center items-center px-2 xs:px-0">
           <button 
             onClick={scrollToProducts}
             className="hero-btn group relative w-3/4 xs:w-auto bg-bharath-blue-900 hover:bg-bharath-blue-800 text-white px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 hover:scale-105 overflow-hidden"
           >
             <span className="relative z-10">Our Products</span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           </button>
           <button 
             onClick={scrollToContact}
             className="hero-btn group relative w-3/4 xs:w-auto bg-bharath-yellow-500 hover:bg-bharath-yellow-400 text-bharath-blue-900 px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 hover:scale-105 overflow-hidden"
           >
             <span className="relative z-10">Request Quote</span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           </button>
         </div>
      </div>
    </section>
  );
};

export default Hero;
