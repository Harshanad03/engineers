import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Beef, Egg, ArrowRightLeft, Cog, Settings } from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      icon: <Egg />,
      title: "Mash plant",
      route: "/poultry-feed-machiners"
    },
    {
      icon: <Beef />,
      title: "Cattle feed unit",
      route: "/cattle-feed-machiners"
    },
    {
      icon: <ArrowRightLeft />,
      title: "Conveyors",
      route: "/conveyers"
    },
    {
      icon: <Settings />,
      title: "Service Solution",
      route: "/services-and-spares"
    },
    {
      icon: <Cog />,
      title: "Special purpose machine",
      route: "/special-purpose-machiners"
    }
  ];

  const handleCategoryClick = (route) => {
    navigate(route);
  };

  // Scroll to top when component mounts (for when user navigates back)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section 
      className="py-6 sm:py-8 md:py-10 relative overflow-hidden bg-gray-50"
    >
      {/* Clean Minimal Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animation Styles */}
        <style>{`
          @keyframes rotate-dots {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotate-dots-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          @keyframes pulse-ring {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          @keyframes bounce-in {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            70% { transform: scale(0.95); }
            100% { transform: scale(1.1); }
          }
          @keyframes icon-pop {
            0% { transform: scale(1) rotate(0deg); }
            30% { transform: scale(1.2) rotate(-5deg); }
            60% { transform: scale(0.9) rotate(5deg); }
            100% { transform: scale(1) rotate(0deg); }
          }
          @keyframes ring-pulse-hover {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          .rotate-dots { animation: rotate-dots 8s linear infinite; }
          .rotate-dots-reverse { animation: rotate-dots-reverse 6s linear infinite; }
          .pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
          .group:hover .hover-bounce { animation: bounce-in 0.5s ease-out forwards; }
          .group:hover .hover-icon { animation: icon-pop 0.6s ease-out; }
          .group:hover .hover-ring-pulse { animation: ring-pulse-hover 0.6s ease-in-out infinite; }
          .group:hover .hover-rotate-fast { animation: rotate-dots 2s linear infinite; }
          .group:hover .hover-rotate-reverse-fast { animation: rotate-dots-reverse 1.5s linear infinite; }
        `}</style>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
          >
            Discover Our Signature Offerings
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#facc15' }}
          ></div>
        </div>

        {/* Categories Grid */}
        <div className="max-w-4xl mx-auto lg:max-w-6xl">
          {/* Mobile/Tablet Layout */}
          <div className="block lg:hidden">
            {/* First Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4">
              {categories.slice(0, 3).map((category, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center group cursor-pointer p-2 sm:p-4"
                  onClick={() => handleCategoryClick(category.route)}
                >
                  {/* Circular Icon with Animated Dotted Rings */}
                  <div className="relative mb-2 sm:mb-3 md:mb-4">
                    {/* Outer Rotating Dotted Circle */}
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-solid border-[#0a1a3f]/30 group-hover:border-[#0a1a3f]/50 transition-all duration-300 " style={{padding: '6px'}}></div>
                    
                    {/* Middle Rotating Dotted Circle (Reverse) */}
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-solid border-[#facc15]/40 group-hover:border-[#0a1a3f]/70 transition-all duration-300 " style={{padding: '3px'}}></div>
                    
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-[#0a1a3f]/20 group-hover:border-[#0a1a3f]/40 transition-all duration-300 pulse-ring hover-ring-pulse"></div>
                    
                    {/* Main Icon Circle */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#0a1a3f] rounded-full flex items-center justify-center group-hover:bg-[#facc15] transition-all duration-300 shadow-lg hover-bounce  transform-gpu">
                      <div className="text-white group-hover:text-[#0a1a3f] transition-colors duration-300 flex items-center justify-center hover-icon">
                        {React.cloneElement(category.icon, {
                          className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Title */}
                  <h3 className="text-xs sm:text-sm md:text-base font-medium text-[#0a1a3f] leading-tight px-1">
                    {category.title}
                  </h3>
                </div>
              ))}
            </div>
            
            {/* Second Row - Centered */}
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
              {categories.slice(3, 5).map((category, index) => (
                <div 
                  key={index + 3} 
                  className="flex flex-col items-center text-center group cursor-pointer p-2 sm:p-4"
                  onClick={() => handleCategoryClick(category.route)}
                >
                  {/* Circular Icon with Animated Dotted Rings */}
                  <div className="relative mb-2 sm:mb-3 md:mb-4">
                    {/* Outer Rotating Dotted Circle */}
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-solid border-[#0a1a3f]/30 group-hover:border-[#0a1a3f]/50 transition-all duration-300 " style={{padding: '6px'}}></div>
                    
                    {/* Middle Rotating Dotted Circle (Reverse) */}
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-solid border-[#facc15]/40 group-hover:border-[#0a1a3f]/70 transition-all duration-300 " style={{padding: '3px'}}></div>
                    
                    {/* Pulsing Ring */}
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-[#0a1a3f]/20 group-hover:border-[#0a1a3f]/40 transition-all duration-300 pulse-ring hover-ring-pulse"></div>
                    
                    {/* Main Icon Circle */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#0a1a3f] rounded-full flex items-center justify-center group-hover:bg-[#facc15] transition-all duration-300 shadow-lg hover-bounce  transform-gpu">
                      <div className="text-white group-hover:text-[#0a1a3f] transition-colors duration-300 flex items-center justify-center hover-icon">
                        {React.cloneElement(category.icon, {
                          className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Title */}
                  <h3 className="text-xs sm:text-sm md:text-base font-medium text-[#0a1a3f] leading-tight px-1">
                    {category.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Layout - Single Line */}
          <div className="hidden lg:flex lg:justify-center lg:gap-8">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group cursor-pointer p-4"
                onClick={() => handleCategoryClick(category.route)}
              >
                {/* Circular Icon with Animated Dotted Rings */}
                <div className="relative mb-4">
                  {/* Outer Rotating Dotted Circle */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-solid border-[#0a1a3f]/30 group-hover:border-[#0a1a3f]/50 transition-all duration-300 " style={{padding: '8px'}}></div>
                  
                  {/* Middle Rotating Dotted Circle (Reverse) */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-solid border-[#facc15]/40 group-hover:border-[#0a1a3f]/70 transition-all duration-300 " style={{padding: '4px'}}></div>
                  
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full border-2 border-[#0a1a3f]/20 group-hover:border-[#0a1a3f]/40 transition-all duration-300 pulse-ring hover-ring-pulse"></div>
                  
                  {/* Main Icon Circle */}
                  <div className="relative w-32 h-32 bg-[#0a1a3f] rounded-full flex items-center justify-center group-hover:bg-[#facc15] transition-all duration-300 shadow-lg hover-bounce  transform-gpu">
                    <div className="text-white group-hover:text-[#0a1a3f] transition-colors duration-300 flex items-center justify-center hover-icon">
                      {React.cloneElement(category.icon, {
                        className: "w-12 h-12"
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Category Title */}
                <h3 className="text-base font-medium text-[#0a1a3f] leading-tight px-1">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
