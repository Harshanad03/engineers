import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Beef, Egg, ArrowRightLeft, Cog, Cpu, Settings } from "lucide-react";

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
      title: "Service and Spares",
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
      className="py-8 sm:py-12 md:py-16 relative overflow-hidden bg-white"
    >
      {/* Floating Bubbles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bubble 1 */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-[#0a1a3f]/20 rounded-full animate-bounce" style={{animationDuration: '3s', animationDelay: '0s'}}></div>
        {/* Bubble 2 */}
        <div className="absolute top-1/3 right-1/5 w-6 h-6 bg-[#0a1a3f]/15 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        {/* Bubble 3 */}
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#0a1a3f]/25 rounded-full animate-bounce" style={{animationDuration: '2.5s', animationDelay: '2s'}}></div>
        {/* Bubble 4 */}
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-[#0a1a3f]/10 rounded-full animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}></div>
        {/* Bubble 5 */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#0a1a3f]/30 rounded-full animate-bounce" style={{animationDuration: '2s', animationDelay: '1.5s'}}></div>
        {/* Bubble 6 */}
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-[#0a1a3f]/20 rounded-full animate-bounce" style={{animationDuration: '3.2s', animationDelay: '2.5s'}}></div>
        {/* Bubble 7 */}
        <div className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-[#0a1a3f]/15 rounded-full animate-bounce" style={{animationDuration: '2.8s', animationDelay: '3s'}}></div>
        {/* Bubble 8 */}
        <div className="absolute top-1/5 right-1/2 w-5 h-5 bg-[#0a1a3f]/25 rounded-full animate-bounce" style={{animationDuration: '4.5s', animationDelay: '1.2s'}}></div>
        {/* Bubble 9 */}
        <div className="absolute bottom-1/5 left-1/5 w-2 h-2 bg-[#0a1a3f]/20 rounded-full animate-bounce" style={{animationDuration: '2.2s', animationDelay: '0.8s'}}></div>
        {/* Bubble 10 */}
        <div className="absolute top-3/4 right-1/6 w-4 h-4 bg-[#0a1a3f]/18 rounded-full animate-bounce" style={{animationDuration: '3.8s', animationDelay: '2.2s'}}></div>
        {/* Bubble 11 */}
        <div className="absolute top-1/6 left-1/3 w-3 h-3 bg-[#0a1a3f]/22 rounded-full animate-bounce" style={{animationDuration: '2.8s', animationDelay: '1.8s'}}></div>
        {/* Bubble 12 */}
        <div className="absolute bottom-1/6 right-1/5 w-4 h-4 bg-[#0a1a3f]/16 rounded-full animate-bounce" style={{animationDuration: '3.3s', animationDelay: '2.8s'}}></div>
        {/* Bubble 13 */}
        <div className="absolute top-2/5 left-1/8 w-2 h-2 bg-[#0a1a3f]/28 rounded-full animate-bounce" style={{animationDuration: '2.3s', animationDelay: '0.3s'}}></div>
        {/* Bubble 14 */}
        <div className="absolute bottom-2/5 right-1/8 w-5 h-5 bg-[#0a1a3f]/12 rounded-full animate-bounce" style={{animationDuration: '4.2s', animationDelay: '1.7s'}}></div>
        {/* Bubble 15 */}
        <div className="absolute top-4/5 left-2/3 w-3 h-3 bg-[#0a1a3f]/24 rounded-full animate-bounce" style={{animationDuration: '2.7s', animationDelay: '3.2s'}}></div>
        {/* Bubble 16 */}
        <div className="absolute bottom-3/5 right-2/3 w-4 h-4 bg-[#0a1a3f]/19 rounded-full animate-bounce" style={{animationDuration: '3.6s', animationDelay: '0.9s'}}></div>
        {/* Bubble 17 */}
        <div className="absolute top-1/8 left-1/2 w-2 h-2 bg-[#0a1a3f]/26 rounded-full animate-bounce" style={{animationDuration: '2.1s', animationDelay: '2.1s'}}></div>
        {/* Bubble 18 */}
        <div className="absolute bottom-1/8 right-1/2 w-3 h-3 bg-[#0a1a3f]/21 rounded-full animate-bounce" style={{animationDuration: '2.9s', animationDelay: '1.4s'}}></div>
        {/* Bubble 19 */}
        <div className="absolute top-3/5 left-1/7 w-4 h-4 bg-[#0a1a3f]/17 rounded-full animate-bounce" style={{animationDuration: '3.4s', animationDelay: '2.6s'}}></div>
        {/* Bubble 20 */}
        <div className="absolute bottom-4/5 right-1/7 w-2 h-2 bg-[#0a1a3f]/27 rounded-full animate-bounce" style={{animationDuration: '2.4s', animationDelay: '0.6s'}}></div>
        
        {/* Additional Falling Bubbles */}
        {/* Bubble 21 - Falling */}
        <div className="absolute top-0 left-1/4 w-3 h-3 bg-[#0a1a3f]/20 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '0s'}}></div>
        {/* Bubble 22 - Falling */}
        <div className="absolute top-0 right-1/3 w-4 h-4 bg-[#0a1a3f]/15 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
        {/* Bubble 23 - Falling */}
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#0a1a3f]/25 rounded-full animate-bounce" style={{animationDuration: '3.5s', animationDelay: '2s'}}></div>
        {/* Bubble 24 - Falling */}
        <div className="absolute top-0 right-1/4 w-5 h-5 bg-[#0a1a3f]/12 rounded-full animate-bounce" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
        {/* Bubble 25 - Falling */}
        <div className="absolute top-0 left-1/6 w-3 h-3 bg-[#0a1a3f]/18 rounded-full animate-bounce" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}></div>
        {/* Bubble 26 - Falling */}
        <div className="absolute top-0 right-1/6 w-2 h-2 bg-[#0a1a3f]/22 rounded-full animate-bounce" style={{animationDuration: '3.8s', animationDelay: '2.5s'}}></div>
        {/* Bubble 27 - Falling */}
        <div className="absolute top-0 left-2/3 w-4 h-4 bg-[#0a1a3f]/16 rounded-full animate-bounce" style={{animationDuration: '5.5s', animationDelay: '0.8s'}}></div>
        {/* Bubble 28 - Falling */}
        <div className="absolute top-0 right-2/3 w-3 h-3 bg-[#0a1a3f]/21 rounded-full animate-bounce" style={{animationDuration: '4.2s', animationDelay: '1.8s'}}></div>
        {/* Bubble 29 - Falling */}
        <div className="absolute top-0 left-3/4 w-2 h-2 bg-[#0a1a3f]/28 rounded-full animate-bounce" style={{animationDuration: '3.2s', animationDelay: '2.8s'}}></div>
        {/* Bubble 30 - Falling */}
        <div className="absolute top-0 right-3/4 w-4 h-4 bg-[#0a1a3f]/14 rounded-full animate-bounce" style={{animationDuration: '5.8s', animationDelay: '1.2s'}}></div>
        {/* Bubble 31 - Falling */}
        <div className="absolute top-0 left-1/8 w-3 h-3 bg-[#0a1a3f]/19 rounded-full animate-bounce" style={{animationDuration: '4.8s', animationDelay: '0.3s'}}></div>
        {/* Bubble 32 - Falling */}
        <div className="absolute top-0 right-1/8 w-2 h-2 bg-[#0a1a3f]/26 rounded-full animate-bounce" style={{animationDuration: '3.6s', animationDelay: '2.2s'}}></div>
        {/* Bubble 33 - Falling */}
        <div className="absolute top-0 left-5/6 w-4 h-4 bg-[#0a1a3f]/17 rounded-full animate-bounce" style={{animationDuration: '5.2s', animationDelay: '1.6s'}}></div>
        {/* Bubble 34 - Falling */}
        <div className="absolute top-0 right-5/6 w-3 h-3 bg-[#0a1a3f]/23 rounded-full animate-bounce" style={{animationDuration: '4.1s', animationDelay: '2.9s'}}></div>
        {/* Bubble 35 - Falling */}
        <div className="absolute top-0 left-1/5 w-2 h-2 bg-[#0a1a3f]/29 rounded-full animate-bounce" style={{animationDuration: '3.9s', animationDelay: '0.7s'}}></div>
        {/* Bubble 36 - Falling */}
        <div className="absolute top-0 right-1/5 w-5 h-5 bg-[#0a1a3f]/13 rounded-full animate-bounce" style={{animationDuration: '6.2s', animationDelay: '1.9s'}}></div>
        {/* Bubble 37 - Falling */}
        <div className="absolute top-0 left-4/5 w-3 h-3 bg-[#0a1a3f]/20 rounded-full animate-bounce" style={{animationDuration: '4.7s', animationDelay: '2.3s'}}></div>
        {/* Bubble 38 - Falling */}
        <div className="absolute top-0 right-4/5 w-2 h-2 bg-[#0a1a3f]/27 rounded-full animate-bounce" style={{animationDuration: '3.4s', animationDelay: '0.9s'}}></div>
        {/* Bubble 39 - Falling */}
        <div className="absolute top-0 left-1/3 w-4 h-4 bg-[#0a1a3f]/15 rounded-full animate-bounce" style={{animationDuration: '5.3s', animationDelay: '1.4s'}}></div>
        {/* Bubble 40 - Falling */}
        <div className="absolute top-0 right-1/3 w-3 h-3 bg-[#0a1a3f]/24 rounded-full animate-bounce" style={{animationDuration: '4.4s', animationDelay: '2.7s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1a3f] mb-4">
           Our Categories
          </h2>
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
                  {/* Circular Icon */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#0a1a3f] rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:bg-[#facc15] transition-all duration-300 group-hover:scale-110">
                    <div className="text-white group-hover:text-[#0a1a3f] transition-colors duration-300 flex items-center justify-center">
                      {React.cloneElement(category.icon, {
                        className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                      })}
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
                  {/* Circular Icon */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#0a1a3f] rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:bg-[#facc15] transition-all duration-300 group-hover:scale-110">
                    <div className="text-white group-hover:text-[#0a1a3f] transition-colors duration-300 flex items-center justify-center">
                      {React.cloneElement(category.icon, {
                        className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                      })}
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
                {/* Circular Icon */}
                <div className="w-32 h-32 bg-[#0a1a3f] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#facc15] transition-all duration-300 group-hover:scale-110">
                  <div className="text-white group-hover:text-[#0a1a3f] transition-colors duration-300 flex items-center justify-center">
                    {React.cloneElement(category.icon, {
                      className: "w-12 h-12"
                    })}
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
