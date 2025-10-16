import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [activeTab, setActiveTab] = useState('Mash plant');
  const navigate = useNavigate();

  const categories = [
    'Mash plant',
    'Cattle feed unit', 
    'Conveyors',
    'Service Solutions',
    'Special purpose machine'
  ];

  const products = {
    'Mash plant': {
      id: 1,
      title: "Mash Plant Machine",
      image: "/images/Poultry Feed Machiners.png",
      description: "Advanced mash plant manufacturing equipment designed for optimal nutrition and efficient production processes."
    },
    'Cattle feed unit': {
      id: 2,
      title: "Cattle Feed Unit",
      image: "/images/Cattle Feed Machiners.png",
      description: "The cattle feed unit is designed for efficient mixing of various feed ingredients. It features robust construction and easy operation, ensuring consistent feed quality for optimal livestock nutrition."
    },
    'Special purpose machine': {
      id: 3,
      title: "Special Purpose Machine",
      image: "/images/jacketmixture.png",
      description: "Specialized machinery designed for specific industrial applications with precision engineering."
    },
    'Conveyors': {
      id: 4,
      title: "Conveyor System",
      image: "/images/loadingconveyor.png",
      description: "Robust conveyor systems for efficient material handling and transportation in industrial environments."
    },
    'Service Solutions': {
      id: 5,
      title: "Service Solutions",
      image: "/images/gear1.png",
      description: "Comprehensive maintenance and spare parts services for all equipment with expert technical support."
    }
  };

  return (
    <section 
      id="products" 
      className="py-10 px-4 bg-cover bg-center bg-fixed bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/productsbg.jpg)'
      }}
    >
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#0a1a3f] rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#0a1a3f] rounded-full opacity-10 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of industrial machinery and solutions designed for excellence
          </p>
        </div>

        {/* Enhanced Category Tab Selector */}
        <div className="flex justify-center mb-8 md:mb-16 px-4">
          <div className="bg-[#0a1a3f] rounded-xl shadow-xl p-4 sm:p-5 border border-gray-200/50 w-full max-w-5xl">
            {/* Mobile Layout - 2 per row with centered last item */}
            <div className="grid grid-cols-2 gap-4 sm:hidden">
              {categories.slice(0, 4).map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`
                    relative px-3 py-3 rounded-lg font-semibold 
                    text-xs
                    transition-all duration-300 ease-out
                    border border-gray-200/50
                    hover:scale-105 hover:shadow-sm
                    group overflow-hidden
                    whitespace-nowrap
                    ${activeTab === category 
                      ? 'text-[#0a1a3f] shadow-sm border-transparent transform scale-105' 
                      : 'text-white bg-transparent hover:bg-transparent'
                    }
                  `}
                    style={{
                      backgroundColor: activeTab === category ? '#facc15' : 'transparent'
                    }}
                >
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
              {/* Centered last item */}
              {categories.length > 4 && (
                <div className="col-span-2 flex justify-center">
                  <button
                    onClick={() => setActiveTab(categories[4])}
                    className={`
                      relative px-3 py-3 rounded-lg font-semibold 
                      text-xs
                      transition-all duration-300 ease-out
                      border border-gray-200/50
                      hover:scale-105 hover:shadow-sm
                      group overflow-hidden
                      whitespace-nowrap
                      ${activeTab === categories[4] 
                        ? 'text-[#0a1a3f] shadow-sm border-transparent transform scale-105' 
                        : 'text-white bg-transparent hover:bg-transparent'
                      }
                    `}
                    style={{
                      backgroundColor: activeTab === categories[4] ? '#facc15' : 'transparent'
                    }}
                  >
                    <span className="relative z-10">{categories[4]}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Layout - Single row */}
            <div className="hidden sm:flex justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`
                    relative px-5 py-3 md:px-6 md:py-4 rounded-full font-semibold 
                    text-sm md:text-base
                    transition-all duration-500 ease-out
                    border border-gray-200/50
                    hover:scale-105 hover:shadow-sm
                    group overflow-hidden
                    whitespace-nowrap
                    ${activeTab === category 
                      ? 'text-[#0a1a3f] shadow-sm border-transparent transform scale-105' 
                      : 'text-white bg-transparent hover:bg-transparent'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    backgroundColor: activeTab === category ? '#facc15' : 'transparent'
                  }}
                >
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-[#0a1a3f]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10">{category}</span>
                  
                  {/* Active indicator */}
                  {activeTab === category && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#0a1a3f] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Product Display */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-16 px-4">
          {products[activeTab] && (
            <div className="relative">
              
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">
                {/* Product Image Section */}
                <div className="relative flex justify-center lg:justify-start">
                  <div className="relative">
                    <img 
                      src={products[activeTab].image} 
                      alt={products[activeTab].title}
                      className="w-full max-w-md h-auto object-contain transform hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#0a1a3f] rounded-full opacity-10"></div>
                  </div>
                </div>
                
                {/* Product Content Section */}
                <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1a3f] mb-4 leading-tight">
                      {products[activeTab].title}
                    </h3>
                    <div className="w-16 h-1 bg-[#facc15] rounded-full"></div>
                  </div>
                  
                  <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                    {products[activeTab].description}
                  </p>
                  
                  {/* Premium Quality Indicator */}
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#facc15] rounded-full"></div>
                    <span className="text-[#0a1a3f] font-semibold text-lg">Premium Quality</span>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        const routeMap = {
                          'Mash plant': '/poultry-feed-machiners',
                          'Cattle feed unit': '/cattle-feed-machiners',
                          'Special purpose machine': '/special-purpose-machiners',
                          'Conveyors': '/conveyers',
                          'Service Solutions': '/services-and-spares'
                        };
                        navigate(routeMap[activeTab]);
                      }}
                      className="group bg-[#0a1a3f] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0a1a3f] hover:border-[#0a1a3f] border-2 transition-all duration-300 hover:scale-105 hover:shadow-sm flex items-center"
                    >
                      View All Products
                      <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
