import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesAndSpares = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'die',
      name: 'Die',
      image: '/images/die.png',
      description: 'A Ring Die is a cylindrical, precision-engineered steel component used in pellet mills, where feedstock is compressed by rollers and forced through radial holes on the die\'s inner surface to form uniform pellets. Known for its high strength, wear resistance, and long service life, the ring die is ideal for large-scale pellet production in industries such as animal feed, biomass fuel, and fertilizers, ensuring consistent high efficiency, and reduced operational costs.',
      products: [
        {
          name: 'Ring Die - 6mm Holes',
          capacity: '6mm hole diameter',
          features: ['High quality steel', 'Precision holes', 'Long lasting']
        },
        {
          name: 'Ring Die - 8mm Holes',
          capacity: '8mm hole diameter',
          features: ['Durable construction', 'Consistent pellets', 'Easy maintenance']
        },
        {
          name: 'Flat Die - 4mm Holes',
          capacity: '4mm hole diameter',
          features: ['Compact design', 'High efficiency', 'Cost effective']
        }
      ]
    },
    {
      id: 'beaters',
      name: 'Beaters',
      image: '/images/beaters.png',
      description: 'Beaters in animal feed grinders are impact parts fixed on the rotor to crush materials against the screen. Made from hardened alloy steel or wear-resistant plates (50-60 HRC), they are usually 4-6 mm thick with their performance depends on hardness, tip speed, and balance, and they may be hardfaced for abrasive feeds reversible edges for longer life. Beaters should be flipped or replaced when worn or unbalanced to ensure smooth and efficient grinding.',
      products: [
        {
          name: 'Heavy Duty Beaters - 4 inch',
          capacity: '4 inch length',
          features: ['Hardened steel', 'High impact resistance', 'Long service life']
        },
        {
          name: 'Standard Beaters - 3 inch',
          capacity: '3 inch length',
          features: ['Durable construction', 'Easy replacement', 'Cost effective']
        },
        {
          name: 'Compact Beaters - 2 inch',
          capacity: '2 inch length',
          features: ['Lightweight design', 'Quick installation', 'Reliable performance']
        }
      ]
    },
    {
      id: 'connecting-rod',
      name: 'Rods',
      image: '/images/rods.png',
      description: 'Connecting rods (also called hammer pins or beater rods) in animal feed grinders are hardened alloy steel shafts that hold the beaters and spacers in place on the rotor, allowing the beaters to swing freely during operation. They are usually 16-25 mm in diameter, precision-ground, and heat-treated for strength and wear resistance, with lengths matching the rotor width. These rods are secured with nuts or locking systems, and must be kept smooth and straight to avoid vibration or uneven wear. They should be replaced if bent, worn, or scored. And always checked for balance to ensure efficient grinder performance.',
      products: [
        {
          name: 'Heavy Duty Connecting Rod - 50 HP',
          capacity: '50 HP rated',
          features: ['Precision machined', 'High strength steel', 'Reliable operation']
        },
        {
          name: 'Standard Connecting Rod - 30 HP',
          capacity: '30 HP rated',
          features: ['Durable construction', 'Easy installation', 'Long lasting']
        },
        {
          name: 'Compact Connecting Rod - 20 HP',
          capacity: '20 HP rated',
          features: ['Lightweight design', 'Cost effective', 'Reliable performance']
        }
      ]
    },
    {
      id: 'screens',
      name: 'Screens',
      image: '/images/screens.png',
      description: 'Our durable grinder screens deliver uniform particle size, higher efficiency, and smoother feed production every time.',
      products: [
        {
          name: 'Fine Mesh Screen - 0.5mm',
          capacity: '0.5mm mesh size',
          features: ['Stainless steel', 'Fine screening', 'Easy cleaning']
        },
        {
          name: 'Medium Mesh Screen - 1mm',
          capacity: '1mm mesh size',
          features: ['Durable construction', 'Consistent screening', 'Long lasting']
        },
        {
          name: 'Coarse Mesh Screen - 2mm',
          capacity: '2mm mesh size',
          features: ['Heavy duty', 'High capacity', 'Reliable operation']
        }
      ]
    },
    {
      id: 'rollers',
      name: 'Roller Shells',
      image: '/images/roller.png',
      description: 'Our roll shells deliver unbeatable grip, consistent pellets and longer service life, keeping your production running at its best.',
      products: [
        {
          name: 'Pellet Mill Rollers - 6 inch',
          capacity: '6 inch diameter',
          features: ['Hardened surface', 'High pressure', 'Long service life']
        },
        {
          name: 'Conveyor Rollers - 4 inch',
          capacity: '4 inch diameter',
          features: ['Smooth operation', 'Low maintenance', 'Durable construction']
        },
        {
          name: 'Heavy Duty Rollers - 8 inch',
          capacity: '8 inch diameter',
          features: ['High capacity', 'Robust design', 'Reliable performance']
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
            Service Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Complete range of service solutions to ensure your equipment operates at peak performance
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
                  
                  <div className="text-gray-700 text-lg sm:text-xl leading-relaxed space-y-4">
                    <p>{subcategory.description}</p>
                    
                    {/* Additional content for Beaters Types */}
                    {subcategory.id === 'beaters' && (
                      <div className="space-y-3 mt-6">
                        <h5 className="font-bold text-[#0a1a3f] text-xl mb-3">Types:</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#facc15] text-center">
                            <p className="font-semibold text-[#0a1a3f]">Single Edged Hammer</p>
                          </div>
                          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#0a1a3f] text-center">
                            <p className="font-semibold text-[#0a1a3f]">Multi Edged Hammer</p>
                          </div>
                          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#facc15] text-center">
                            <p className="font-semibold text-[#0a1a3f]">Hard Facing Hammer</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Additional content for Roller Shells Types */}
                    {subcategory.id === 'rollers' && (
                      <div className="space-y-3 mt-6">
                        <h5 className="font-bold text-[#0a1a3f] text-xl mb-3">Types:</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#facc15] text-center">
                            <p className="font-semibold text-[#0a1a3f]">Corrugated Roll Shell</p>
                          </div>
                          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#0a1a3f] text-center">
                            <p className="font-semibold text-[#0a1a3f]">Helical Roll Shell</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Additional content for Rods Types */}
                    {subcategory.id === 'connecting-rod' && (
                      <div className="space-y-3 mt-6">
                        <h5 className="font-bold text-[#0a1a3f] text-xl mb-3">Types:</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#facc15] text-center">
                            <p className="font-semibold text-[#0a1a3f]">16 MM Rod</p>
                          </div>
                          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border-l-4 border-[#0a1a3f] text-center">
                            <p className="font-semibold text-[#0a1a3f]">20 MM Rod</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
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

export default ServicesAndSpares;
