import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesAndSpares = () => {
  const navigate = useNavigate();
  const [activeSubCategory, setActiveSubCategory] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'maintenance-services',
      name: 'Maintenance Services',
      image: '/images/Services And Spares.png',
      description: 'Professional maintenance services to ensure optimal equipment performance and longevity',
      products: [
        'Preventive Maintenance - Scheduled maintenance programs',
        'Corrective Maintenance - Emergency repair services',
        'Predictive Maintenance - Condition-based monitoring',
        'Performance Optimization - Efficiency improvement services',
        'Equipment Overhaul - Complete system refurbishment',
        'Maintenance Training - Operator and technician training'
      ]
    },
    {
      id: 'spare-parts',
      name: 'Spare Parts',
      image: '/images/Services And Spares.png',
      description: 'Genuine spare parts and components for all machinery with guaranteed quality',
      products: [
        'Original Equipment Parts - OEM certified components',
        'Wear Parts - High-wear components and replacements',
        'Electrical Components - Motors, drives, and controls',
        'Hydraulic Components - Pumps, valves, and cylinders',
        'Mechanical Parts - Gears, bearings, and shafts',
        'Consumables - Filters, belts, and lubricants'
      ]
    },
    {
      id: 'technical-support',
      name: 'Technical Support',
      image: '/images/Services And Spares.png',
      description: 'Expert technical support and consultation services for all your equipment needs',
      products: [
        '24/7 Technical Support - Round-the-clock assistance',
        'On-site Consultation - Expert field service',
        'Remote Diagnostics - Online troubleshooting',
        'Installation Services - Professional equipment setup',
        'Commissioning - System startup and optimization',
        'Training Programs - Comprehensive operator training'
      ]
    },
    {
      id: 'upgrade-services',
      name: 'Upgrade Services',
      image: '/images/Services And Spares.png',
      description: 'Equipment modernization and upgrade services to enhance performance and efficiency',
      products: [
        'System Upgrades - Technology and performance enhancements',
        'Automation Integration - Modern control system installation',
        'Energy Efficiency - Power consumption optimization',
        'Capacity Expansion - Production capacity increases',
        'Safety Upgrades - Modern safety system installation',
        'Retrofitting - Legacy equipment modernization'
      ]
    },
    {
      id: 'calibration-services',
      name: 'Calibration Services',
      image: '/images/Services And Spares.png',
      description: 'Precision calibration services to ensure accurate measurements and optimal performance',
      products: [
        'Equipment Calibration - Precision measurement calibration',
        'Process Calibration - System parameter optimization',
        'Quality Assurance - Calibration certification',
        'Calibration Training - In-house calibration programs',
        'Calibration Equipment - Precision measurement tools',
        'Compliance Testing - Regulatory standard validation'
      ]
    },
    {
      id: 'emergency-services',
      name: 'Emergency Services',
      image: '/images/Services And Spares.png',
      description: 'Rapid response emergency services to minimize downtime and production losses',
      products: [
        'Emergency Repairs - 24/7 breakdown service',
        'Rapid Response - On-site emergency support',
        'Critical Spares - Emergency parts delivery',
        'Temporary Solutions - Quick fix implementations',
        'Damage Assessment - Post-incident evaluation',
        'Recovery Services - System restoration support'
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
            <h2 className="text-2xl font-bold text-[#0a1a3f] mb-4">Service and Spares Support</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our complete range of service and spares ensures your equipment operates at peak performance. 
              From preventive maintenance to emergency repairs, we provide reliable support that minimizes downtime 
              and maximizes your investment in industrial machinery.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Reliable Support
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Quality Parts
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Expert Service
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
                      Available Services:
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
                  {activeSubCategory === subcategory.id ? 'Show Less' : 'View Services'}
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
              Need Immediate Support?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our expert team is ready to help you with all your service and spare parts needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#facc15] text-[#0a1a3f] px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Emergency Service
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Request Quote
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

export default ServicesAndSpares;
