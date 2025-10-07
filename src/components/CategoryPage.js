import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeSubCategory, setActiveSubCategory] = useState('');

  // Category data with subcategories
  const categoryData = {
    'Cattle Feed Machiners': {
      title: 'Cattle Feed Machiners',
      description: 'Comprehensive range of cattle feed processing machinery for efficient livestock nutrition',
      subcategories: [
        {
          id: 'pellet-machines',
          name: 'Pellet Machines',
          image: '/images/Cattle Feed Machiners.png',
          description: 'High-capacity pellet machines for producing uniform cattle feed pellets',
          products: [
            'Ring Die Pellet Mill',
            'Flat Die Pellet Mill',
            'Vertical Pellet Mill',
            'Horizontal Pellet Mill'
          ]
        },
        {
          id: 'mixers',
          name: 'Feed Mixers',
          image: '/images/Cattle Feed Machiners.png',
          description: 'Advanced mixing equipment for uniform feed distribution',
          products: [
            'Horizontal Mixer',
            'Vertical Mixer',
            'Ribbon Mixer',
            'Paddle Mixer'
          ]
        },
        {
          id: 'grinders',
          name: 'Feed Grinders',
          image: '/images/Cattle Feed Machiners.png',
          description: 'Efficient grinding equipment for feed preparation',
          products: [
            'Hammer Mill',
            'Roller Mill',
            'Disc Mill',
            'Attrition Mill'
          ]
        },
        {
          id: 'coolers',
          name: 'Coolers & Dryers',
          image: '/images/Cattle Feed Machiners.png',
          description: 'Cooling and drying systems for processed feed',
          products: [
            'Counter Flow Cooler',
            'Fluid Bed Cooler',
            'Rotary Dryer',
            'Flash Dryer'
          ]
        }
      ]
    },
    'Poultry Feed Machiners': {
      title: 'Poultry Feed Machiners',
      description: 'Specialized poultry feed manufacturing equipment for optimal bird nutrition',
      subcategories: [
        {
          id: 'poultry-pellets',
          name: 'Poultry Pellet Machines',
          image: '/images/Poultry Feed Machiners.png',
          description: 'Specialized pellet machines for poultry feed production',
          products: [
            'Poultry Pellet Mill',
            'Mini Pellet Mill',
            'Commercial Pellet Mill',
            'Industrial Pellet Mill'
          ]
        },
        {
          id: 'poultry-mixers',
          name: 'Poultry Mixers',
          image: '/images/Poultry Feed Machiners.png',
          description: 'Mixing equipment designed for poultry feed formulations',
          products: [
            'Batch Mixer',
            'Continuous Mixer',
            'Drum Mixer',
            'Conical Mixer'
          ]
        },
        {
          id: 'poultry-grinders',
          name: 'Poultry Grinders',
          image: '/images/Poultry Feed Machiners.png',
          description: 'Grinding equipment for poultry feed preparation',
          products: [
            'Fine Grinder',
            'Coarse Grinder',
            'Universal Grinder',
            'Precision Grinder'
          ]
        }
      ]
    },
    'Conveyers': {
      title: 'Conveyor Systems',
      description: 'Complete range of conveyor systems for efficient material handling',
      subcategories: [
        {
          id: 'belt-conveyors',
          name: 'Belt Conveyors',
          image: '/images/Conveyers.png',
          description: 'Heavy-duty belt conveyor systems for various applications',
          products: [
            'Flat Belt Conveyor',
            'Troughed Belt Conveyor',
            'Inclined Belt Conveyor',
            'Declined Belt Conveyor'
          ]
        },
        {
          id: 'screw-conveyors',
          name: 'Screw Conveyors',
          image: '/images/Conveyers.png',
          description: 'Efficient screw conveyor systems for bulk material handling',
          products: [
            'Horizontal Screw Conveyor',
            'Inclined Screw Conveyor',
            'Vertical Screw Conveyor',
            'Flexible Screw Conveyor'
          ]
        },
        {
          id: 'chain-conveyors',
          name: 'Chain Conveyors',
          image: '/images/Conveyers.png',
          description: 'Robust chain conveyor systems for heavy-duty applications',
          products: [
            'Drag Chain Conveyor',
            'Apron Chain Conveyor',
            'Flight Chain Conveyor',
            'Bucket Chain Conveyor'
          ]
        }
      ]
    },
    'Special Purpose Machiners': {
      title: 'Special Purpose Machines',
      description: 'Customized machinery solutions for specific industrial applications',
      subcategories: [
        {
          id: 'custom-machines',
          name: 'Custom Machines',
          image: '/images/Special Purpose Machiners.png',
          description: 'Tailored machinery solutions for unique requirements',
          products: [
            'Custom Processing Line',
            'Specialized Assembly Machine',
            'Custom Packaging Machine',
            'Bespoke Manufacturing Unit'
          ]
        },
        {
          id: 'automation-systems',
          name: 'Automation Systems',
          image: '/images/Special Purpose Machiners.png',
          description: 'Automated systems for enhanced productivity',
          products: [
            'PLC Control System',
            'Robotic Integration',
            'Automated Assembly Line',
            'Smart Manufacturing System'
          ]
        }
      ]
    },
    'Automation': {
      title: 'Automation Solutions',
      description: 'Advanced automation systems for modern industrial operations',
      subcategories: [
        {
          id: 'control-systems',
          name: 'Control Systems',
          image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><rect x="50" y="50" width="200" height="100" fill="%23d1d5db" rx="10"/><rect x="70" y="70" width="160" height="60" fill="%239ca3af" rx="5"/><rect x="90" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="130" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="170" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><circle cx="105" cy="100" r="3" fill="%23d1d5db"/><circle cx="145" cy="100" r="3" fill="%23d1d5db"/><circle cx="185" cy="100" r="3" fill="%23d1d5db"/></svg>',
          description: 'Comprehensive control systems for industrial automation',
          products: [
            'PLC Programming',
            'HMI Development',
            'SCADA Systems',
            'Industrial Networking'
          ]
        },
        {
          id: 'sensors-actuators',
          name: 'Sensors & Actuators',
          image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><rect x="50" y="50" width="200" height="100" fill="%23d1d5db" rx="10"/><rect x="70" y="70" width="160" height="60" fill="%239ca3af" rx="5"/><rect x="90" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="130" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="170" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><circle cx="105" cy="100" r="3" fill="%23d1d5db"/><circle cx="145" cy="100" r="3" fill="%23d1d5db"/><circle cx="185" cy="100" r="3" fill="%23d1d5db"/></svg>',
          description: 'Advanced sensors and actuators for precise control',
          products: [
            'Proximity Sensors',
            'Temperature Sensors',
            'Pressure Sensors',
            'Servo Motors'
          ]
        }
      ]
    },
    'Services And Spares': {
      title: 'Services & Spares',
      description: 'Comprehensive maintenance and spare parts services for all equipment',
      subcategories: [
        {
          id: 'maintenance-services',
          name: 'Maintenance Services',
          image: '/images/Services And Spares.png',
          description: 'Professional maintenance services for optimal equipment performance',
          products: [
            'Preventive Maintenance',
            'Corrective Maintenance',
            'Emergency Repairs',
            'Performance Optimization'
          ]
        },
        {
          id: 'spare-parts',
          name: 'Spare Parts',
          image: '/images/Services And Spares.png',
          description: 'Genuine spare parts for all machinery',
          products: [
            'Original Equipment Parts',
            'Wear Parts',
            'Electrical Components',
            'Hydraulic Components'
          ]
        },
        {
          id: 'technical-support',
          name: 'Technical Support',
          image: '/images/Services And Spares.png',
          description: 'Expert technical support and consultation services',
          products: [
            '24/7 Technical Support',
            'On-site Consultation',
            'Training Programs',
            'Installation Services'
          ]
        }
      ]
    }
  };

  const currentCategory = categoryData[category];

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0a1a3f] mb-4">Category Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#0a1a3f] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#0a1a3f] hover:border-[#0a1a3f] border-2 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-white to-[#f1f5f9]">
      {/* Header */}
      <div className="bg-[#0a1a3f] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-white hover:text-[#facc15] transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </button>
          <h1 className="text-2xl font-bold">{currentCategory.title}</h1>
          <div></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Description */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.subcategories.map((subcategory) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Subcategory Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a1a3f] mb-3">
                  {subcategory.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {subcategory.description}
                </p>
                
                {/* Products List */}
                {activeSubCategory === subcategory.id && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-[#0a1a3f] mb-3">Products:</h4>
                    <ul className="space-y-2">
                      {subcategory.products.map((product, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#facc15] rounded-full mr-3"></div>
                          {product}
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
        <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0a1a3f] mb-4">
            Need More Information?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact our experts for detailed specifications and custom solutions
          </p>
          <button className="bg-[#0a1a3f] text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] hover:border-[#0a1a3f] border-2 transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
