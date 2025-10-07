import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Conveyers = () => {
  const navigate = useNavigate();
  const [activeSubCategory, setActiveSubCategory] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'belt-conveyors',
      name: 'Belt Conveyors',
      image: '/images/Conveyers.png',
      description: 'Heavy-duty belt conveyor systems for efficient material handling in various industrial applications',
      products: [
        'Flat Belt Conveyor - 5-200 tons/hour capacity',
        'Troughed Belt Conveyor - 10-500 tons/hour capacity',
        'Inclined Belt Conveyor - 3-150 tons/hour capacity',
        'Declined Belt Conveyor - 5-300 tons/hour capacity',
        'Curved Belt Conveyor - 2-100 tons/hour capacity',
        'Modular Belt Conveyor - 1-50 tons/hour capacity'
      ]
    },
    {
      id: 'screw-conveyors',
      name: 'Screw Conveyors',
      image: '/images/Conveyers.png',
      description: 'Efficient screw conveyor systems for bulk material handling with precise control',
      products: [
        'Horizontal Screw Conveyor - 2-100 tons/hour',
        'Inclined Screw Conveyor - 1-75 tons/hour',
        'Vertical Screw Conveyor - 0.5-50 tons/hour',
        'Flexible Screw Conveyor - 0.1-20 tons/hour',
        'Tubular Screw Conveyor - 1-80 tons/hour',
        'U-Trough Screw Conveyor - 2-120 tons/hour'
      ]
    },
    {
      id: 'chain-conveyors',
      name: 'Chain Conveyors',
      image: '/images/Conveyers.png',
      description: 'Robust chain conveyor systems for heavy-duty applications and harsh environments',
      products: [
        'Drag Chain Conveyor - 10-500 tons/hour',
        'Apron Chain Conveyor - 5-300 tons/hour',
        'Flight Chain Conveyor - 3-200 tons/hour',
        'Bucket Chain Conveyor - 2-150 tons/hour',
        'Slat Chain Conveyor - 1-100 tons/hour',
        'Overhead Chain Conveyor - 0.5-50 tons/hour'
      ]
    },
    {
      id: 'pneumatic-conveyors',
      name: 'Pneumatic Conveyors',
      image: '/images/Conveyers.png',
      description: 'Air-powered conveying systems for dust-free material transportation',
      products: [
        'Dense Phase Conveyor - 1-50 tons/hour',
        'Dilute Phase Conveyor - 0.5-30 tons/hour',
        'Vacuum Conveyor - 0.1-20 tons/hour',
        'Pressure Conveyor - 1-40 tons/hour',
        'Combination System - 2-60 tons/hour',
        'Mobile Pneumatic Conveyor - 0.5-15 tons/hour'
      ]
    },
    {
      id: 'bucket-elevators',
      name: 'Bucket Elevators',
      image: '/images/Conveyers.png',
      description: 'Vertical material handling systems for efficient elevation of bulk materials',
      products: [
        'Centrifugal Bucket Elevator - 5-200 tons/hour',
        'Continuous Bucket Elevator - 3-150 tons/hour',
        'Super Capacity Elevator - 10-500 tons/hour',
        'Chain Bucket Elevator - 2-100 tons/hour',
        'Belt Bucket Elevator - 1-80 tons/hour',
        'Z-Type Bucket Elevator - 0.5-50 tons/hour'
      ]
    },
    {
      id: 'vibrating-conveyors',
      name: 'Vibrating Conveyors',
      image: '/images/Conveyers.png',
      description: 'Vibration-based conveying systems for gentle material handling and screening',
      products: [
        'Natural Frequency Conveyor - 2-100 tons/hour',
        'Electromagnetic Conveyor - 1-75 tons/hour',
        'Mechanical Vibrating Conveyor - 3-150 tons/hour',
        'Resonant Conveyor - 5-200 tons/hour',
        'Screening Conveyor - 1-50 tons/hour',
        'Cooling Conveyor - 2-80 tons/hour'
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
            <h2 className="text-2xl font-bold text-[#0a1a3f] mb-4">Complete Conveyor System Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive range of conveyor systems is designed to handle various materials and applications 
              with maximum efficiency. From simple belt conveyors to complex automated systems, we provide 
              reliable solutions that optimize your material handling operations.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Reliable Performance
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Custom Solutions
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Low Maintenance
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
              Streamline Your Material Handling
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get customized conveyor solutions for your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#facc15] text-[#0a1a3f] px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Request Design
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Get Consultation
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

export default Conveyers;
