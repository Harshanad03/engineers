import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Conveyers = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'belt-conveyor',
      name: 'Belt Conveyor',
      image: '/images/Conveyers.png',
      description: 'A belt conveyor in a feed mill is a machine used to efficiently transport bulk materials such as grains, powders, or pellets from one process to another, either horizontally or at an incline. It consists of a continuous belt stretched over pulleys, with one pulley powered by a motor to move the material. Belt conveyors help reduce manual labor, handle large volumes, and maintain a continuous, controlled flow of feed ingredients or finished pellets between machines like grinders, mixers, pellet mills, coolers, and storage bins, improving overall production efficiency and workflow in the feed mill.',
      products: [
        {
          name: 'Heavy Duty Belt Conveyor - 50 TPH',
          capacity: '50 tons per hour',
          features: ['Industrial grade belt', 'High capacity', 'Durable construction']
        },
        {
          name: 'Inclined Belt Conveyor - 30 TPH',
          capacity: '30 tons per hour',
          features: ['Steep incline capability', 'Secure material handling', 'Efficient transport']
        },
        {
          name: 'Flat Belt Conveyor - 25 TPH',
          capacity: '25 tons per hour',
          features: ['Level transport', 'Smooth operation', 'Low maintenance']
        }
      ]
    },
    {
      id: 'z-type-conveyor',
      name: 'Z Type Conveyor',
      image: '/images/Conveyers.png',
      description: 'A Z-type conveyor in a feed mill is a compact machine designed to lift and transport feed materials both vertically and horizontally in a single system, following a "Z" shaped path. Material is fed into a lower hopper, carried upward by a belt or chain with flights, and then discharged horizontally to the next process, such as a mixer, pellet mill, or storage bin. It ensures continuous, controlled flow, handles large volumes without damaging feed, reduces manual labor and spillage, and saves floor space, making it an efficient solution for moving ingredients or finished feed within the feed mill.',
      products: [
        {
          name: 'Z Type Bucket Conveyor - 20 TPH',
          capacity: '20 tons per hour',
          features: ['Space efficient design', 'Vertical elevation', 'High capacity']
        },
        {
          name: 'Z Type Belt Conveyor - 15 TPH',
          capacity: '15 tons per hour',
          features: ['Smooth operation', 'Low noise', 'Easy maintenance']
        },
        {
          name: 'Compact Z Type Conveyor - 10 TPH',
          capacity: '10 tons per hour',
          features: ['Compact design', 'Versatile application', 'Reliable operation']
        }
      ]
    },
    {
      id: 'loading-conveyor',
      name: 'Loading Conveyor',
      image: '/images/loadingconveyor.png',
      description: 'A loading conveyor in a feed mill is a machine used to transfer feed materials, grains, or finished pellets from the production area to trucks, silos, or storage bins efficiently. It consists of a belt or chain system that moves material from the feed inlet to the discharge point, often with adjustable height or incline to reach the desired loading position. Loading conveyors ensure continuous, controlled flow, reduce manual handling and spillage, and speed up the loading process, making feed mill operations more efficient and organized.',
      products: [
        {
          name: 'Truck Loading Conveyor - 40 TPH',
          capacity: '40 tons per hour',
          features: ['Adjustable height', 'Truck loading', 'High speed loading']
        },
        {
          name: 'Rail Car Loading Conveyor - 60 TPH',
          capacity: '60 tons per hour',
          features: ['Rail car loading', 'High capacity', 'Precise positioning']
        },
        {
          name: 'Portable Loading Conveyor - 20 TPH',
          capacity: '20 tons per hour',
          features: ['Portable design', 'Easy setup', 'Versatile application']
        }
      ]
    },
    {
      id: 'chain-conveyor',
      name: 'Chain Conveyor',
      image: '/images/Conveyers.png',
      description: 'A chain conveyor in a feed mill is a durable machine used to transport bulk materials or feed products over short or long distances, especially in heavy-duty applications. It consists of a series of chains with attached flights or paddles that move material along a trough or enclosed channel. Chain conveyors are ideal for moving heavy, abrasive, or hot feed ingredients, ensuring a controlled, continuous flow between machines like grinders, mixers, pellet mills, or storage bins. They are robust, reliable, and capable of handling large volumes while minimizing spillage and labor, making them essential for efficient feed mill operations.',
      products: [
        {
          name: 'Heavy Duty Chain Conveyor - 30 TPH',
          capacity: '30 tons per hour',
          features: ['Heavy-duty chains', 'Abrasive material handling', 'High temperature resistance']
        },
        {
          name: 'Enclosed Chain Conveyor - 25 TPH',
          capacity: '25 tons per hour',
          features: ['Enclosed channel', 'Minimal spillage', 'Dust-free operation']
        },
        {
          name: 'Industrial Chain Conveyor - 40 TPH',
          capacity: '40 tons per hour',
          features: ['Large volume capacity', 'Robust construction', 'Long-distance transport']
        }
      ]
    }
  ];

  return (
    <section 
      className="py-10 px-4 bg-cover bg-center bg-fixed bg-no-repeat relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: 'url(/images/productsbg.jpg)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#0a1a3f] rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#0a1a3f] rounded-full opacity-10 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 pt-16">
        {/* Enhanced Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6"
            style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
          >
            Conveyor System Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of conveyor systems designed for efficient material handling and transportation
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#0a1a3f] mx-auto mt-4 sm:mt-5 md:mt-6 rounded-full"></div>
        </div>

        {/* All Products Display */}
        <div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-20">
          {subcategories.map((subcategory, categoryIndex) => (
            <div key={subcategory.id} className="relative">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12 ${categoryIndex % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Product Image Section */}
                <div className={`relative flex justify-center lg:justify-start ${categoryIndex % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img 
                      src={subcategory.image} 
                      alt={subcategory.name}
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
                <div className={`flex flex-col justify-center space-y-6 lg:space-y-8 ${categoryIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1a3f] mb-4 leading-tight">
                      {subcategory.name}
                    </h3>
                    <div className="w-16 h-1 bg-[#facc15] rounded-full"></div>
                  </div>
                  
                  <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
                    {subcategory.description}
                  </p>
                  
                  {/* Premium Quality Indicator */}
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-[#facc15] rounded-full"></div>
                    <span className="text-[#0a1a3f] font-semibold text-lg">Premium Quality</span>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <button 
                      onClick={() => navigate('/#contact')}
                      className="group bg-[#0a1a3f] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0a1a3f] hover:border-[#0a1a3f] border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center"
                    >
                      Get Quote
                      <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Divider between sections (except last one) */}
              {categoryIndex < subcategories.length - 1 && (
                <div className="mt-12 mb-4">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 mb-8 text-center">
          <button 
            onClick={() => navigate('/')}
            className="bg-[#0a1a3f] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] hover:border-[#0a1a3f] border-2 transition-all duration-300 hover:scale-105 flex items-center mx-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Conveyers;
