import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CattleFeedMachiners = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'load-cell-hopper',
      name: 'Load Cell Hopper',
      image: '/images/loadcell.png',
      description: 'A load-cell hopper is basically a short belt or chain conveyor section that sits on load cells (weighing sensors). It combines material conveying and weight measurement in one unit. It\'s sometimes called a weigh belt conveyor, weigh conveyor, or in-motion scale.',
      products: [
        {
          name: 'Heavy Duty Load Cell Hopper - 2 Ton',
          capacity: '2 ton capacity',
          features: ['Industrial grade sensors', 'Weather resistant', 'High accuracy']
        },
        {
          name: 'Precision Load Cell Hopper - 1 Ton',
          capacity: '1 ton capacity',
          features: ['Digital weighing system', 'Stainless steel construction', 'Easy calibration']
        },
        {
          name: 'Compact Load Cell Hopper - 500kg',
          capacity: '500kg capacity',
          features: ['Space efficient design', 'Quick setup', 'Reliable performance']
        }
      ]
    },
    {
      id: 'elevator',
      name: 'Elevator',
      image: '/images/elevator.png',
      description: 'A bucket elevator is a continuous vertical conveyor. It consists of a belt or chain running around two pulleys with evenly spaced "buckets" attached. As the belt moves, the buckets scoop up material from a boot section (intake) and discharge it at the head (outlet) at the top.',
      products: [
        {
          name: 'Chain Elevator - 15 TPH',
          capacity: '15 tons per hour',
          features: ['Robust construction', 'Low maintenance', 'High efficiency']
        },
        {
          name: 'Bucket Elevator - 10 TPH',
          capacity: '10 tons per hour',
          features: ['Galvanized buckets', 'Heavy duty chain', 'Smooth operation']
        },
        {
          name: 'Belt Elevator - 20 TPH',
          capacity: '20 tons per hour',
          features: ['Food grade belt', 'Easy cleaning', 'Quiet operation']
        }
      ]
    },
    {
      id: 'storage-hopper',
      name: 'Storage Hopper',
      image: '/images/storagehopper.png',
      description: 'A storage hopper is a conical or pyramidal-bottomed vessel used to hold and discharge bulk materials in a controlled way. In a feed mill, it acts as an intermediate storage point between processes. Think of it as a small silo or bin designed for short-term holding and controlled flow.',
      products: [
        {
          name: 'Stainless Steel Hopper - 10 Ton',
          capacity: '10 ton capacity',
          features: ['Food grade material', 'Easy cleaning', 'Long lasting']
        },
        {
          name: 'Steel Storage Hopper - 5 Ton',
          capacity: '5 ton capacity',
          features: ['Corrosion resistant', 'Easy discharge', 'Durable construction']
        },
        {
          name: 'Galvanized Hopper - 3 Ton',
          capacity: '3 ton capacity',
          features: ['Weather proof', 'Cost effective', 'Reliable storage']
        }
      ]
    },
    {
      id: 'grinder',
      name: 'Grinder',
      image: '/images/grinder.png',
      description: 'In a feed mill unit, a grinder (also called a hammer mill or pulverizer) is an essential machine used for size reduction of raw materials like grains, maize, soybean, or other feed ingredients. The purpose is to make the feed ingredients smaller, uniform, and easier to mix or pelletize.',
      products: [
        {
          name: 'Hammer Mill Grinder - 15 HP',
          capacity: '15 HP motor',
          features: ['Adjustable screen', 'Heavy duty hammers', 'Easy maintenance']
        },
        {
          name: 'Disc Mill Grinder - 20 HP',
          capacity: '20 HP motor',
          features: ['Precision grinding', 'Durable discs', 'Consistent output']
        },
        {
          name: 'Roller Mill Grinder - 25 HP',
          capacity: '25 HP motor',
          features: ['Fine grinding', 'Low power consumption', 'High capacity']
        }
      ]
    },
    {
      id: 'mixture',
      name: 'Mixture',
      image: '/images/mixture.png',
      description: 'In a feed mill unit, the mixture refers to the process of blending different feed ingredients into a homogeneous feed mix before it is either pelleted or packed as mash feed. This ensures animals get a balanced diet with proper nutrients in every portion.',
      products: [
        {
          name: 'Paddle Mixer - 2 Ton',
          capacity: '2 ton batch',
          features: ['Gentle mixing', 'Variable speed', 'Easy cleaning']
        },
        {
          name: 'Ribbon Mixer - 1.5 Ton',
          capacity: '1.5 ton batch',
          features: ['Thorough mixing', 'Stainless steel', 'Quick discharge']
        },
        {
          name: 'Drum Mixer - 1 Ton',
          capacity: '1 ton batch',
          features: ['Tumble mixing', 'Compact design', 'Uniform blend']
        }
      ]
    },
    {
      id: 'pellet-mill',
      name: 'Pellet Mill',
      image: '/images/pelletmill.png',
      description: 'In a feed mill unit, the pellet mill is a critical machine that compresses and shapes mixed feed into uniform pellets, improving digestibility, feed efficiency, and handling. Mixed feed is fed into the mill, often through a conditioner where steam or moisture may be added, and then pressed through a die by rollers to form pellets of desired size, which are cut and discharged for cooling and storage. Pellet mills can be flat die (for small to medium production) or ring die (for large-scale production), and proper control of moisture, temperature, and pellet size ensures high-quality feed with reduced wastage, dust, and selective feeding, making it easier to store, transport, and feed to animals.',
      products: [
        {
          name: 'Ring Die Pellet Mill - 50 HP',
          capacity: '50 HP motor',
          features: ['High capacity', 'Durable ring die', 'Consistent pellets']
        },
        {
          name: 'Flat Die Pellet Mill - 30 HP',
          capacity: '30 HP motor',
          features: ['Easy maintenance', 'Adjustable die', 'Quality pellets']
        },
        {
          name: 'Vertical Pellet Mill - 40 HP',
          capacity: '40 HP motor',
          features: ['Space efficient', 'High output', 'Reliable operation']
        }
      ]
    },
    {
      id: 'cooler',
      name: 'Cooler',
      image: '/images/cooler.png',
      description: 'In a feed mill unit, a cooler is an essential machine used after pelleting to reduce the temperature and moisture of freshly produced pellets. Fresh pellets coming out of the pellet mill are usually hot (80–90°C) and soft due to the heat and steam used during pelleting. If stored or packed immediately, they can become moldy, break easily, or stick together. The cooler resolves this problem.',
      products: [
        {
          name: 'Counter Flow Cooler - 5 TPH',
          capacity: '5 tons per hour',
          features: ['Efficient cooling', 'Low energy consumption', 'Uniform cooling']
        },
        {
          name: 'Fluid Bed Cooler - 3 TPH',
          capacity: '3 tons per hour',
          features: ['Gentle cooling', 'Quick cooling', 'Easy maintenance']
        },
        {
          name: 'Belt Cooler - 8 TPH',
          capacity: '8 tons per hour',
          features: ['Continuous cooling', 'Adjustable speed', 'High capacity']
        }
      ]
    },
    {
      id: 'shaker',
      name: 'Shaker',
      image: '/images/shaker.png',
      description: 'In a feed mill unit, a shaker (sometimes called a vibratory shaker or sieve shaker) is used to separate, classify, or screen feed ingredients based on particle size. It ensures that raw materials or finished feed have the desired consistency and quality before further processing or packing.',
      products: [
        {
          name: 'Vibrating Shaker - 2 TPH',
          capacity: '2 tons per hour',
          features: ['Multiple screens', 'Adjustable vibration', 'Easy cleaning']
        },
        {
          name: 'Rotary Shaker - 3 TPH',
          capacity: '3 tons per hour',
          features: ['Gentle separation', 'Low noise', 'High efficiency']
        },
        {
          name: 'Linear Shaker - 1.5 TPH',
          capacity: '1.5 tons per hour',
          features: ['Precise grading', 'Compact design', 'Reliable operation']
        }
      ]
    },
    {
      id: 'vibrator',
      name: 'Vibrator',
      image: '/images/vibrator.png',
      description: 'In a feed mill unit, a vibrator (also called a vibratory feeder or vibrator feeder) is a device used to move, feed, or separate materials efficiently using vibration. It plays a crucial role in handling bulk ingredients such as grains, powders, or pellets without clogging or manual intervention.',
      products: [
        {
          name: 'Electromagnetic Vibrator - 1 HP',
          capacity: '1 HP motor',
          features: ['Variable frequency', 'Low maintenance', 'High efficiency']
        },
        {
          name: 'Mechanical Vibrator - 2 HP',
          capacity: '2 HP motor',
          features: ['Heavy duty', 'Reliable operation', 'Easy installation']
        },
        {
          name: 'Pneumatic Vibrator - 0.5 HP',
          capacity: '0.5 HP motor',
          features: ['Explosion proof', 'Low power consumption', 'Safe operation']
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
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6"
            style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
          >
            Cattle Feed Unit
          </h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Comprehensive range of cattle feed processing machinery designed for efficient, high-quality feed production
          </motion.p>
          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 bg-[#0a1a3f] mx-auto mt-4 sm:mt-5 md:mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3, delay: 0.15 }}
          ></motion.div>
        </motion.div>

        {/* All Products Display */}
        <div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-20">
          {subcategories.map((subcategory, categoryIndex) => (
            <motion.div 
              key={subcategory.id} 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3, delay: categoryIndex * 0.1, ease: "easeOut" }}
            >
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12 ${categoryIndex % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Product Image Section */}
                <motion.div 
                  className={`relative flex justify-center lg:justify-start ${categoryIndex % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  initial={{ opacity: 0, x: categoryIndex % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + 0.1, ease: "easeOut" }}
                >
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
                </motion.div>
                
                {/* Product Content Section */}
                <motion.div 
                  className={`flex flex-col justify-center space-y-6 lg:space-y-8 ${categoryIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  initial={{ opacity: 0, x: categoryIndex % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + 0.15, ease: "easeOut" }}
                >
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1a3f] mb-4 leading-tight">
                      {subcategory.name}
                    </h3>
                    <motion.div 
                      className="w-16 h-1 bg-[#facc15] rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + 0.2 }}
                    ></motion.div>
                  </div>
                  
                  <div className="text-gray-700 text-lg sm:text-xl leading-relaxed space-y-4">
                    <p>{subcategory.description}</p>
                    
                    {/* Additional content for Elevator */}
                    {subcategory.id === 'elevator' && (
                      <div className="space-y-4 mt-6">
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border-l-4 border-[#facc15]">
                          <h5 className="font-bold text-[#0a1a3f] text-xl mb-3">Single Way (Single Box/Single Casing)</h5>
                          <p className="text-base mb-2">One vertical casing housing both the up and down runs of buckets.</p>
                          <ul className="text-base space-y-1 ml-4">
                            <li>• Compact, lighter, lower cost</li>
                            <li>• Common in smaller feed mills or moderate capacities</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-5 border-l-4 border-[#0a1a3f]">
                          <h5 className="font-bold text-[#0a1a3f] text-xl mb-3">Double Way (Double Box/Split Casing)</h5>
                          <p className="text-base mb-2">Separate casings for the up and down runs.</p>
                          <ul className="text-base space-y-1 ml-4">
                            <li>• More robust, easier maintenance access</li>
                            <li>• Better for very high capacities</li>
                            <li>• Used in large industrial elevators with abrasive or sticky products</li>
                          </ul>
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
                </motion.div>
              </div>
              
              {/* Divider between sections (except last one) */}
              {categoryIndex < subcategories.length - 1 && (
                <div className="mt-12 mb-4">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Back to Home Button */}
        <motion.div 
          className="mt-12 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
        >
          <button 
            onClick={() => navigate('/')}
            className="bg-[#0a1a3f] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] hover:border-[#0a1a3f] border-2 transition-all duration-300 hover:scale-105 flex items-center mx-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CattleFeedMachiners;
