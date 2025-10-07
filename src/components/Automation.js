import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Automation = () => {
  const navigate = useNavigate();
  const [activeSubCategory, setActiveSubCategory] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subcategories = [
    {
      id: 'control-systems',
      name: 'Control Systems',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><rect x="50" y="50" width="200" height="100" fill="%23d1d5db" rx="10"/><rect x="70" y="70" width="160" height="60" fill="%239ca3af" rx="5"/><rect x="90" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="130" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="170" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><circle cx="105" cy="100" r="3" fill="%23d1d5db"/><circle cx="145" cy="100" r="3" fill="%23d1d5db"/><circle cx="185" cy="100" r="3" fill="%23d1d5db"/></svg>',
      description: 'Comprehensive control systems for industrial automation and process optimization',
      products: [
        'PLC Programming - Programmable Logic Controllers',
        'HMI Development - Human Machine Interface systems',
        'SCADA Systems - Supervisory Control and Data Acquisition',
        'Industrial Networking - Ethernet and fieldbus systems',
        'Motion Control - Servo and stepper motor control',
        'Process Control - PID and advanced control algorithms'
      ]
    },
    {
      id: 'sensors-actuators',
      name: 'Sensors & Actuators',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><rect x="50" y="50" width="200" height="100" fill="%23d1d5db" rx="10"/><rect x="70" y="70" width="160" height="60" fill="%239ca3af" rx="5"/><rect x="90" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="130" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="170" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><circle cx="105" cy="100" r="3" fill="%23d1d5db"/><circle cx="145" cy="100" r="3" fill="%23d1d5db"/><circle cx="185" cy="100" r="3" fill="%23d1d5db"/></svg>',
      description: 'Advanced sensors and actuators for precise control and monitoring',
      products: [
        'Proximity Sensors - Inductive, capacitive, and ultrasonic',
        'Temperature Sensors - RTD, thermocouple, and infrared',
        'Pressure Sensors - Absolute, gauge, and differential',
        'Servo Motors - High-precision positioning systems',
        'Stepper Motors - Open-loop positioning control',
        'Linear Actuators - Electric and pneumatic systems'
      ]
    },
    {
      id: 'robotics',
      name: 'Robotics Systems',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><rect x="50" y="50" width="200" height="100" fill="%23d1d5db" rx="10"/><rect x="70" y="70" width="160" height="60" fill="%239ca3af" rx="5"/><rect x="90" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="130" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="170" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><circle cx="105" cy="100" r="3" fill="%23d1d5db"/><circle cx="145" cy="100" r="3" fill="%23d1d5db"/><circle cx="185" cy="100" r="3" fill="%23d1d5db"/></svg>',
      description: 'Industrial robotics solutions for automated manufacturing and assembly',
      products: [
        'Articulated Robots - 6-axis industrial robots',
        'SCARA Robots - High-speed pick and place systems',
        'Delta Robots - Parallel kinematic robots',
        'Collaborative Robots - Human-robot collaboration',
        'Mobile Robots - AGV and AMR systems',
        'Robot Programming - Offline and online programming'
      ]
    },
    {
      id: 'vision-systems',
      name: 'Vision Systems',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><rect x="50" y="50" width="200" height="100" fill="%23d1d5db" rx="10"/><rect x="70" y="70" width="160" height="60" fill="%239ca3af" rx="5"/><rect x="90" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="130" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="170" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><circle cx="105" cy="100" r="3" fill="%23d1d5db"/><circle cx="145" cy="100" r="3" fill="%23d1d5db"/><circle cx="185" cy="100" r="3" fill="%23d1d5db"/></svg>',
      description: 'Machine vision systems for quality control and automated inspection',
      products: [
        'Industrial Cameras - High-resolution imaging systems',
        'Vision Software - Image processing and analysis',
        'Inspection Systems - Automated quality control',
        'Barcode Readers - 1D and 2D code reading',
        'OCR Systems - Optical character recognition',
        '3D Vision - Depth measurement and analysis'
      ]
    },
    {
      id: 'iot-systems',
      name: 'IoT Systems',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><rect x="50" y="50" width="200" height="100" fill="%23d1d5db" rx="10"/><rect x="70" y="70" width="160" height="60" fill="%239ca3af" rx="5"/><rect x="90" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="130" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="170" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><circle cx="105" cy="100" r="3" fill="%23d1d5db"/><circle cx="145" cy="100" r="3" fill="%23d1d5db"/><circle cx="185" cy="100" r="3" fill="%23d1d5db"/></svg>',
      description: 'Internet of Things solutions for smart manufacturing and monitoring',
      products: [
        'IoT Sensors - Wireless sensor networks',
        'Edge Computing - Local data processing',
        'Cloud Integration - Remote monitoring and control',
        'Predictive Analytics - Machine learning algorithms',
        'Digital Twin - Virtual system modeling',
        'Remote Diagnostics - Condition monitoring systems'
      ]
    },
    {
      id: 'safety-systems',
      name: 'Safety Systems',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f3f4f6"/><rect x="50" y="50" width="200" height="100" fill="%23d1d5db" rx="10"/><rect x="70" y="70" width="160" height="60" fill="%239ca3af" rx="5"/><rect x="90" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="130" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><rect x="170" y="90" width="30" height="20" fill="%23fbbf24" rx="3"/><circle cx="105" cy="100" r="3" fill="%23d1d5db"/><circle cx="145" cy="100" r="3" fill="%23d1d5db"/><circle cx="185" cy="100" r="3" fill="%23d1d5db"/></svg>',
      description: 'Safety automation systems for secure and compliant operations',
      products: [
        'Safety PLCs - Safety-rated programmable controllers',
        'Emergency Stop Systems - E-stop and safety relays',
        'Light Curtains - Safety light barriers',
        'Safety Interlocks - Door and guard monitoring',
        'Risk Assessment - Safety system design',
        'Compliance Testing - Safety standard validation'
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
            <h2 className="text-2xl font-bold text-[#0a1a3f] mb-4">Advanced Automation Solutions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive automation solutions integrate cutting-edge technology to transform your manufacturing 
              operations. From basic control systems to advanced robotics and IoT integration, we provide 
              scalable solutions that enhance productivity, quality, and operational efficiency.
            </p>
            <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Smart Integration
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Scalable Solutions
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#facc15] rounded-full mr-2"></div>
                Future-Ready
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
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how automation can transform your manufacturing process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#facc15] text-[#0a1a3f] px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Automation Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0a1a3f] transition-all duration-300 hover:scale-105">
                Schedule Demo
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

export default Automation;
