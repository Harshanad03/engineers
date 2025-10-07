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
      icon: <Cog />,
      title: "Special purpose machine",
      route: "/special-purpose-machiners"
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
      className="py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(/images/categorybg1.jpg)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1a3f] mb-4">
            Our Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center group cursor-pointer p-2 sm:p-4 ${
                index === 3 ? 'col-start-1' : index === 4 ? 'col-start-3' : ''
              }`}
              onClick={() => handleCategoryClick(category.route)}
            >
              {/* Circular Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[#0a1a3f] rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:bg-[#facc15] transition-all duration-300 group-hover:scale-110">
                <div className="text-white group-hover:text-[#0a1a3f] transition-colors duration-300 flex items-center justify-center">
                  {React.cloneElement(category.icon, {
                    className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
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
    </section>
  );
};

export default Categories;
