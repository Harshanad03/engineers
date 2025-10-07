import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpecialPurposeMachiners = () => {
  const navigate = useNavigate();
  const [activeSubCategory, setActiveSubCategory] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'custom-machines',
      name: 'Custom Machines',
      image: '/images/Special Purpose Machiners.png',
      description: 'Tailored machinery solutions designed specifically for your unique manufacturing requirements',
      products: [
        'Custom Processing Line - Designed to specifications',
        'Specialized Assembly Machine - Automated assembly solutions',
        'Custom Packaging Machine - Product-specific packaging',
        'Bespoke Manufacturing Unit - Complete production systems',
        'Custom Testing Equipment - Quality control systems',
        'Specialized Cutting Machine - Precision cutting solutions'
      ]
    },
    {
      id: 'automation-systems',
      name: 'Automation Systems',
      image: '/images/Special Purpose Machiners.png',
      description: 'Advanced automated systems for enhanced productivity and precision manufacturing',
      products: [
        'PLC Control System - Programmable logic controllers',
        'Robotic Integration - Industrial robot systems',
        'Automated Assembly Line - Complete assembly automation',
        'Smart Manufacturing System - IoT-enabled production',
        'CNC Integration - Computer numerical control',
        'Vision Inspection System - Automated quality control'
      ]
    },
    {
      id: 'precision-machines',
      name: 'Precision Machines',
      image: '/images/Special Purpose Machiners.png',
      description: 'High-precision machinery for applications requiring exact tolerances and quality',
      products: [
        'Precision Grinding Machine - Micro-tolerance grinding',
        'High-Speed Machining Center - Rapid precision cutting',
        'Laser Processing System - Laser cutting and welding',
        'EDM Machine - Electrical discharge machining',
        'Coordinate Measuring Machine - Dimensional inspection',
        'Ultra-Precision Lathe - Micro-machining capabilities'
      ]
    },
    {
      id: 'material-processing',
      name: 'Material Processing',
      image: '/images/Special Purpose Machiners.png',
      description: 'Specialized equipment for processing various materials with specific requirements',
      products: [
        'Heat Treatment Furnace - Controlled heating systems',
        'Surface Treatment Line - Coating and finishing',
        'Material Testing Machine - Mechanical property testing',
        'Powder Processing System - Powder metallurgy equipment',
        'Composite Processing - Advanced composite manufacturing',
        'Ceramic Processing - High-temperature ceramic production'
      ]
    },
    {
      id: 'quality-control',
      name: 'Quality Control Systems',
      image: '/images/Special Purpose Machiners.png',
      description: 'Advanced quality control and inspection systems for manufacturing excellence',
      products: [
        'Automated Inspection System - 100% quality inspection',
        'Dimensional Measurement - Precision measurement tools',
        'Surface Quality Analyzer - Surface finish analysis',
        'Non-Destructive Testing - NDT equipment and systems',
        'Statistical Process Control - SPC monitoring systems',
        'Quality Data Management - Quality tracking software'
      ]
    },
    {
      id: 'research-equipment',
      name: 'Research Equipment',
      image: '/images/Special Purpose Machiners.png',
      description: 'Specialized research and development equipment for innovation and testing',
      products: [
        'Laboratory Testing Machine - R&D testing equipment',
        'Prototype Development - Rapid prototyping systems',
        'Material Characterization - Advanced material analysis',
        'Process Development - Pilot plant equipment',
        'Simulation Equipment - Process simulation systems',
        'Innovation Lab Setup - Complete R&D facilities'
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
            <h2 className="text-2xl font-bold text-[#0a1a3f] mb-4">Special Purpose Machine Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our special purpose machine are engineered to meet your specific manufacturing challenges. 
              From custom automation systems to precision processing equipment, we design and build 
              machinery that perfectly fits your unique production requirements and quality standards.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Custom Design
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Precision Engineering
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Advanced Technology
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
                      Available Solutions:
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
                  {activeSubCategory === subcategory.id ? 'Show Less' : 'View Solutions'}
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your specific requirements and design the perfect machine for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#facc15] text-[#0a1a3f] px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Discuss Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Request Consultation
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

export default SpecialPurposeMachiners;
