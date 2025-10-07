import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Beef, Egg, ArrowRightLeft, Cog, Cpu, Settings } from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      icon: <Beef className="w-12 h-12" />,
      title: "Cattle Feed Machiners",
      route: "/cattle-feed-machiners"
    },
    {
      icon: <Egg className="w-12 h-12" />,
      title: "Poultry Feed Machiners",
      route: "/poultry-feed-machiners"
    },
    {
      icon: <ArrowRightLeft className="w-12 h-12" />,
      title: "Conveyers",
      route: "/conveyers"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Special Purpose Machiners",
      route: "/special-purpose-machiners"
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Automation",
      route: "/automation"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Services And Spares",
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
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(/images/categorybg1.jpg)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a3f] mb-4">
            Our Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-pointer"
              onClick={() => handleCategoryClick(category.route)}
            >
              {/* Circular Icon */}
              <div className="w-32 h-32 bg-[#0a1a3f] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#facc15] transition-all duration-300 group-hover:scale-110">
                <div className="text-white group-hover:text-[#0a1a3f] transition-colors duration-300">
                  {category.icon}
                </div>
              </div>
              
              {/* Category Title */}
              <h3 className="text-sm font-medium text-[#0a1a3f] leading-tight">
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
