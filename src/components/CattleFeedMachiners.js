import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CattleFeedMachiners = () => {
  const navigate = useNavigate();
  const [activeSubCategory, setActiveSubCategory] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'pellet-machines',
      name: 'Pellet Machines',
      image: '/images/Cattle Feed Machiners.png',
      description: 'High-capacity pellet machines for producing uniform cattle feed pellets with optimal nutrition density',
      products: [
        'Ring Die Pellet Mill - 50-500 HP capacity',
        'Flat Die Pellet Mill - 15-150 HP capacity', 
        'Vertical Pellet Mill - 30-300 HP capacity',
        'Horizontal Pellet Mill - 75-750 HP capacity',
        'Mini Pellet Mill - 5-15 HP capacity',
        'Commercial Pellet Mill - 100-1000 HP capacity'
      ]
    },
    {
      id: 'mixers',
      name: 'Feed Mixers',
      image: '/images/Cattle Feed Machiners.png',
      description: 'Advanced mixing equipment for uniform feed distribution and consistent nutrition',
      products: [
        'Horizontal Mixer - 500kg to 10 tons capacity',
        'Vertical Mixer - 100kg to 2 tons capacity',
        'Ribbon Mixer - 200kg to 5 tons capacity',
        'Paddle Mixer - 300kg to 8 tons capacity',
        'Twin Shaft Mixer - 1 ton to 15 tons capacity',
        'Continuous Mixer - 2 tons to 20 tons/hour'
      ]
    },
    {
      id: 'grinders',
      name: 'Feed Grinders',
      image: '/images/Cattle Feed Machiners.png',
      description: 'Efficient grinding equipment for feed preparation and particle size optimization',
      products: [
        'Hammer Mill - 5-200 HP capacity',
        'Roller Mill - 10-150 HP capacity',
        'Disc Mill - 7.5-100 HP capacity',
        'Attrition Mill - 15-75 HP capacity',
        'Fine Grinder - 3-50 HP capacity',
        'Coarse Grinder - 10-100 HP capacity'
      ]
    },
    {
      id: 'coolers',
      name: 'Coolers & Dryers',
      image: '/images/Cattle Feed Machiners.png',
      description: 'Cooling and drying systems for processed feed to maintain quality and shelf life',
      products: [
        'Counter Flow Cooler - 1-20 tons/hour',
        'Fluid Bed Cooler - 2-15 tons/hour',
        'Rotary Dryer - 5-50 tons/hour',
        'Flash Dryer - 3-30 tons/hour',
        'Belt Cooler - 1-10 tons/hour',
        'Vertical Cooler - 2-25 tons/hour'
      ]
    },
    {
      id: 'conveyors',
      name: 'Feed Conveyors',
      image: '/images/Cattle Feed Machiners.png',
      description: 'Material handling systems for efficient feed transportation and processing',
      products: [
        'Belt Conveyor - 5-100 tons/hour',
        'Screw Conveyor - 2-50 tons/hour',
        'Chain Conveyor - 10-200 tons/hour',
        'Pneumatic Conveyor - 1-30 tons/hour',
        'Bucket Elevator - 5-150 tons/hour',
        'Vibrating Conveyor - 3-75 tons/hour'
      ]
    },
    {
      id: 'storage',
      name: 'Storage Systems',
      image: '/images/Cattle Feed Machiners.png',
      description: 'Storage solutions for feed ingredients and finished products',
      products: [
        'Silo Storage - 10-1000 tons capacity',
        'Bulk Storage Bins - 5-500 tons capacity',
        'Bag Storage Systems - 100-10000 bags',
        'Liquid Storage Tanks - 1000-50000 liters',
        'Grain Storage - 50-2000 tons capacity',
        'Feed Bunk Systems - 10-500 head capacity'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-white to-[#f1f5f9]">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        {/* Category Description */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0a1a3f] mb-4">Comprehensive Cattle Feed Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our complete range of cattle feed processing machinery is designed for efficient, high-quality feed production. 
              From raw material handling to finished pellet packaging, we provide integrated solutions that ensure optimal 
              nutrition for your livestock while maximizing operational efficiency.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                High Efficiency
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Durable Construction
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Easy Maintenance
              </div>
            </div>
          </div>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subcategories.map((subcategory) => (
            <div 
              key={subcategory.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setActiveSubCategory(activeSubCategory === subcategory.id ? '' : subcategory.id)}
            >
              {/* Subcategory Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={subcategory.image} 
                  alt={subcategory.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">{subcategory.name}</h3>
                </div>
              </div>
              
              {/* Subcategory Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {subcategory.description}
                </p>
                
                {/* Products List */}
                {activeSubCategory === subcategory.id && (
                  <div className="border-t pt-4 animate-fadeIn">
                    <h4 className="font-semibold text-[#0a1a3f] mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-[#facc15]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Available Products:
                    </h4>
                    <ul className="space-y-2">
                      {subcategory.products.map((product, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#facc15] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Expand/Collapse Button */}
                <button className="mt-4 text-[#0a1a3f] font-semibold hover:text-[#facc15] transition-colors duration-300 flex items-center">
                  {activeSubCategory === subcategory.id ? 'Show Less' : 'View Products'}
                  <svg 
                    className={`ml-2 w-4 h-4 transition-transform duration-300 ${activeSubCategory === subcategory.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#0a1a3f] to-[#1e3a8a] rounded-xl shadow-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Upgrade Your Cattle Feed Production?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert consultation and customized solutions for your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#facc15] text-[#0a1a3f] px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Request Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Contact Expert
              </button>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
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
    </div>
  );
};

export default CattleFeedMachiners;
