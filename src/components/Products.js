import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [activeTab, setActiveTab] = useState('Cattle Feed Machiners');
  const navigate = useNavigate();

  const categories = [
    'Cattle Feed Machiners',
    'Poultry Feed Machiners', 
    'Conveyers',
    'Special Purpose Machiners',
    'Automation',
    'Services And Spares'
  ];

  const products = {
    'Cattle Feed Machiners': {
      id: 1,
      title: "Cattle Feed Mixer",
      image: "/images/Cattle Feed Machiners.png",
      description: "The cattle feed mixer is designed for efficient mixing of various feed ingredients. It features robust construction and easy operation, ensuring consistent feed quality for optimal livestock nutrition."
    },
    'Poultry Feed Machiners': {
      id: 2,
      title: "Poultry Feed Machine",
      image: "/images/Poultry Feed Machiners.png",
      description: "Advanced poultry feed manufacturing equipment designed for optimal nutrition and efficient production processes."
    },
    'Conveyers': {
      id: 3,
      title: "Conveyor System",
      image: "/images/Conveyers.png",
      description: "Robust conveyor systems for efficient material handling and transportation in industrial environments."
    },
    'Special Purpose Machiners': {
      id: 4,
      title: "Special Purpose Machine",
      image: "/images/Special Purpose Machiners.png",
      description: "Specialized machinery designed for specific industrial applications with precision engineering."
    },
    'Automation': {
      id: 5,
      title: "Automated Control System",
      image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23f3f4f6'/><rect x='50' y='50' width='200' height='100' fill='%23d1d5db' rx='10'/><rect x='70' y='70' width='160' height='60' fill='%239ca3af' rx='5'/><rect x='90' y='90' width='30' height='20' fill='%23fbbf24' rx='3'/><rect x='130' y='90' width='30' height='20' fill='%23fbbf24' rx='3'/><rect x='170' y='90' width='30' height='20' fill='%23fbbf24' rx='3'/><circle cx='105' cy='100' r='3' fill='%23d1d5db'/><circle cx='145' cy='100' r='3' fill='%23d1d5db'/><circle cx='185' cy='100' r='3' fill='%23d1d5db'/></svg>",
      description: "State-of-the-art automation solutions for enhanced productivity and operational efficiency."
    },
    'Services And Spares': {
      id: 6,
      title: "Services And Spares",
      image: "/images/Services And Spares.png",
      description: "Comprehensive maintenance and spare parts services for all equipment with expert technical support."
    }
  };

  return (
    <section 
      id="products" 
      className="py-16 px-4 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/productsbg.jpg)'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#0a1a3f] rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#0a1a3f] rounded-full opacity-10 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1a3f] mb-4 sm:mb-5 md:mb-6">
            Our Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of industrial machinery and solutions designed for excellence
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#0a1a3f] mx-auto mt-4 sm:mt-5 md:mt-6 rounded-full"></div>
        </div>

        {/* Enhanced Category Tab Selector */}
        <div className="flex justify-center mb-8 md:mb-16 px-4">
          <div className="bg-[#0a1a3f] rounded-xl shadow-xl p-3 sm:p-4 border border-gray-200/50 w-full max-w-7xl">
            {/* Mobile Layout - 2 per row */}
            <div className="grid grid-cols-2 gap-2 sm:hidden">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`
                    relative px-2 py-2.5 rounded-lg font-semibold 
                    text-xs
                    transition-all duration-300 ease-out
                    border border-gray-200/50
                    hover:scale-105 hover:shadow-lg
                    group overflow-hidden
                    whitespace-nowrap
                    ${activeTab === category 
                      ? 'text-[#0a1a3f] shadow-lg border-transparent transform scale-105' 
                      : 'text-white bg-transparent hover:bg-[#facc15]/10'
                    }
                  `}
                  style={{
                    backgroundColor: activeTab === category ? '#facc15' : 'transparent'
                  }}
                >
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>

            {/* Desktop Layout - Flex wrap */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`
                    relative px-4 py-2.5 md:px-5 md:py-3 rounded-full font-semibold 
                    text-sm md:text-base
                    transition-all duration-500 ease-out
                    border border-gray-200/50
                    hover:scale-105 hover:shadow-lg
                    group overflow-hidden
                    whitespace-nowrap
                    ${activeTab === category 
                      ? 'text-[#0a1a3f] shadow-lg border-transparent transform scale-105' 
                      : 'text-white bg-transparent hover:bg-[#facc15]/10'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    backgroundColor: activeTab === category ? '#facc15' : 'transparent'
                  }}
                >
                  {/* Active tab glow effect */}
                  {activeTab === category && (
                    <div className="absolute inset-0 bg-[#0a1a3f]/20 rounded-full blur-sm"></div>
                  )}
                  
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
              {/* Transparent Background */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
              
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
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#facc15] rounded-full opacity-20"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#0a1a3f] rounded-full opacity-10"></div>
                    <div className="absolute top-1/2 -right-8 w-6 h-6 bg-[#facc15] rounded-full opacity-30"></div>
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
                          'Cattle Feed Machiners': '/cattle-feed-machiners',
                          'Poultry Feed Machiners': '/poultry-feed-machiners',
                          'Conveyers': '/conveyers',
                          'Special Purpose Machiners': '/special-purpose-machiners',
                          'Automation': '/automation',
                          'Services And Spares': '/services-and-spares'
                        };
                        navigate(routeMap[activeTab]);
                      }}
                      className="group bg-[#0a1a3f] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0a1a3f] hover:border-[#0a1a3f] border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center"
                    >
                      View All {activeTab}
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
