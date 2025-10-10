import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpecialPurposeMachiners = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'industrial-blender',
      name: 'Industrial Blender',
      image: '/images/Special Purpose Machiners.png',
      description: 'In a feed mill unit, an industrial blender is a machine used to thoroughly mix various feed ingredients to produce a uniform and homogeneous feed blend. It ensures that every particle of feed contains the correct proportion of energy, protein, vitamins, and minerals, which is essential for animal growth and health.',
      products: [
        {
          name: 'Heavy Duty Industrial Blender - 5 Ton',
          capacity: '5 ton capacity',
          features: ['Robust construction', 'High torque mixing', 'Easy maintenance']
        },
        {
          name: 'Continuous Industrial Blender - 10 TPH',
          capacity: '10 tons per hour',
          features: ['Continuous operation', 'Uniform mixing', 'High efficiency']
        },
        {
          name: 'Batch Industrial Blender - 2 Ton',
          capacity: '2 ton batch',
          features: ['Precise mixing', 'Variable speed', 'Quality control']
        }
      ]
    },
    {
      id: 'jacket-blender',
      name: 'Jacket Blender',
      image: '/images/jacketmixture.png',
      description: 'A jacketed blender is a specialized type of industrial mixer designed to mix feed ingredients while controlling temperature. The jacket surrounding the blender allows hot or cold fluid (usually steam, hot water, or oil) to circulate, which can heat or maintain the temperature of the feed during mixing. This is particularly useful when fats, molasses, or other heat-sensitive additives are included, or when slightly warming the feed improves pellet quality and binding.',
      products: [
        {
          name: 'Jacket Blender with Heating - 1 Ton',
          capacity: '1 ton capacity',
          features: ['Temperature control', 'Steam jacket', 'Precise heating']
        },
        {
          name: 'Jacket Blender with Cooling - 1.5 Ton',
          capacity: '1.5 ton capacity',
          features: ['Cooling jacket', 'Temperature monitoring', 'Efficient cooling']
        },
        {
          name: 'Dual Jacket Blender - 2 Ton',
          capacity: '2 ton capacity',
          features: ['Heating & cooling', 'Advanced control', 'Versatile operation']
        }
      ]
    },
    {
      id: 'crumbler',
      name: 'Crumbler',
      image: '/images/Special Purpose Machiners.png',
      description: 'A crumbler is a machine used to break large pellets into smaller, uniform sizes suitable for young animals like chicks, piglets, or fish that cannot consume standard-size pellets. Crumbling ensures that the feed is easier to ingest and digest, reduces wastage, and maintains nutrient balance.',
      products: [
        {
          name: 'Pellet Crumbler - 3 TPH',
          capacity: '3 tons per hour',
          features: ['Adjustable rollers', 'Gentle crumbling', 'Consistent output']
        },
        {
          name: 'Heavy Duty Crumbler - 5 TPH',
          capacity: '5 tons per hour',
          features: ['High capacity', 'Durable construction', 'Easy adjustment']
        },
        {
          name: 'Compact Crumbler - 1 TPH',
          capacity: '1 ton per hour',
          features: ['Space efficient', 'Low maintenance', 'Reliable operation']
        }
      ]
    },
    {
      id: 'peddle-conveyor',
      name: 'Paddle Conveyor',
      image: '/images/Special Purpose Machiners.png',
      description: 'A paddle conveyor (also called a paddle feeder or drag conveyor) is used to move bulk materials such as grains, feed powders, or pellets from one process to another in a controlled manner. It consists of a rotating shaft with paddles inside a trough, which gently pushes the material forward without damaging it.',
      products: [
        {
          name: 'Heavy Duty Peddle Conveyor - 20 TPH',
          capacity: '20 tons per hour',
          features: ['Robust peddles', 'High capacity', 'Smooth operation']
        },
        {
          name: 'Inclined Peddle Conveyor - 15 TPH',
          capacity: '15 tons per hour',
          features: ['Steep incline', 'Secure material handling', 'Efficient transport']
        },
        {
          name: 'Horizontal Peddle Conveyor - 25 TPH',
          capacity: '25 tons per hour',
          features: ['Level transport', 'High speed', 'Low maintenance']
        }
      ]
    },
    {
      id: 'grass-cutting-machine',
      name: 'Grass Cutting Machine',
      image: '/images/Special Purpose Machiners.png',
      description: 'A grass cutting machine (also called a forage cutter or chopper) is widely used in agriculture and feed preparation to cut, chop, or shred green fodder like grass, maize stalks, sugarcane tops, and other crops into smaller pieces suitable for animal feeding or silage preparation. It helps livestock farmers provide uniform, manageable, and digestible feed, improving intake and nutrient utilization.',
      products: [
        {
          name: 'Heavy Duty Grass Cutter - 10 HP',
          capacity: '10 HP motor',
          features: ['Sharp blades', 'High capacity', 'Durable construction']
        },
        {
          name: 'Compact Grass Cutter - 5 HP',
          capacity: '5 HP motor',
          features: ['Portable design', 'Easy operation', 'Efficient cutting']
        },
        {
          name: 'Industrial Grass Chopper - 15 HP',
          capacity: '15 HP motor',
          features: ['Fine chopping', 'High output', 'Reliable performance']
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
            Special Purpose Machine Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Engineered solutions to meet your specific manufacturing challenges with precision and reliability
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

export default SpecialPurposeMachiners;
