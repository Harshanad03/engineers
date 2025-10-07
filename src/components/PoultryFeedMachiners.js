import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PoultryFeedMachiners = () => {
  const navigate = useNavigate();
  const [activeSubCategory, setActiveSubCategory] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'poultry-pellets',
      name: 'Poultry Pellet Machines',
      image: '/images/Poultry Feed Machiners.png',
      description: 'Specialized pellet machines designed for optimal poultry feed production with precise nutrition control',
      products: [
        'Poultry Pellet Mill - 30-400 HP capacity',
        'Mini Pellet Mill - 5-20 HP capacity',
        'Commercial Pellet Mill - 100-800 HP capacity',
        'Industrial Pellet Mill - 200-1200 HP capacity',
        'Ring Die Pellet Mill - 50-600 HP capacity',
        'Flat Die Pellet Mill - 10-200 HP capacity'
      ]
    },
    {
      id: 'poultry-mixers',
      name: 'Poultry Mixers',
      image: '/images/Poultry Feed Machiners.png',
      description: 'Advanced mixing equipment specifically designed for poultry feed formulations and additives',
      products: [
        'Batch Mixer - 200kg to 5 tons capacity',
        'Continuous Mixer - 1 ton to 15 tons/hour',
        'Drum Mixer - 100kg to 2 tons capacity',
        'Conical Mixer - 50kg to 1 ton capacity',
        'Ribbon Mixer - 150kg to 3 tons capacity',
        'Paddle Mixer - 300kg to 6 tons capacity'
      ]
    },
    {
      id: 'poultry-grinders',
      name: 'Poultry Grinders',
      image: '/images/Poultry Feed Machiners.png',
      description: 'Precision grinding equipment for optimal particle size in poultry feed preparation',
      products: [
        'Fine Grinder - 3-75 HP capacity',
        'Coarse Grinder - 10-150 HP capacity',
        'Universal Grinder - 5-100 HP capacity',
        'Precision Grinder - 7.5-50 HP capacity',
        'Hammer Mill - 5-200 HP capacity',
        'Roller Mill - 15-120 HP capacity'
      ]
    },
    {
      id: 'poultry-coolers',
      name: 'Cooling Systems',
      image: '/images/Poultry Feed Machiners.png',
      description: 'Efficient cooling systems to maintain feed quality and prevent nutrient degradation',
      products: [
        'Counter Flow Cooler - 1-25 tons/hour',
        'Fluid Bed Cooler - 2-20 tons/hour',
        'Belt Cooler - 1-12 tons/hour',
        'Vertical Cooler - 3-30 tons/hour',
        'Rotary Cooler - 5-40 tons/hour',
        'Flash Cooler - 2-15 tons/hour'
      ]
    },
    {
      id: 'poultry-conveyors',
      name: 'Material Handling',
      image: '/images/Poultry Feed Machiners.png',
      description: 'Specialized conveying systems for poultry feed processing and distribution',
      products: [
        'Belt Conveyor - 3-80 tons/hour',
        'Screw Conveyor - 1-40 tons/hour',
        'Chain Conveyor - 5-150 tons/hour',
        'Pneumatic Conveyor - 0.5-25 tons/hour',
        'Bucket Elevator - 3-120 tons/hour',
        'Vibrating Conveyor - 2-60 tons/hour'
      ]
    },
    {
      id: 'poultry-storage',
      name: 'Storage Solutions',
      image: '/images/Poultry Feed Machiners.png',
      description: 'Storage systems designed for poultry feed ingredients and finished products',
      products: [
        'Silo Storage - 5-800 tons capacity',
        'Bulk Storage Bins - 2-400 tons capacity',
        'Bag Storage Systems - 50-8000 bags',
        'Liquid Storage Tanks - 500-40000 liters',
        'Grain Storage - 25-1500 tons capacity',
        'Feed Hopper Systems - 1-50 tons capacity'
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
            <h2 className="text-2xl font-bold text-[#0a1a3f] mb-4">Complete Poultry Feed Manufacturing Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our specialized poultry feed machinery is engineered to deliver consistent, high-quality feed that meets 
              the specific nutritional requirements of different poultry species. From broilers to layers, our equipment 
              ensures optimal feed conversion ratios and bird health.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Precision Control
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                High Efficiency
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Quality Assurance
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
              Optimize Your Poultry Feed Production
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get specialized solutions tailored for your poultry operation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#facc15] text-[#0a1a3f] px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Get Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Talk to Expert
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

export default PoultryFeedMachiners;
