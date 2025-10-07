import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bharath-blue text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Bharath Engineerings Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">BHARATH</span>
                <span className="text-sm">ENGINEERINGS</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading Manufacturer of Industrial & Feed Machinery Since 1990. 
              Precision Engineered, Trusted Quality, Proven Performance.
            </p>
          </div>

           {/* Quick Links */}
           <div>
             <h3 className="text-lg font-semibold mb-4 text-[#facc15]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-bharath-yellow transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-bharath-yellow transition-colors duration-200">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-bharath-yellow transition-colors duration-200">Products</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-bharath-yellow transition-colors duration-200">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-bharath-yellow transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

           {/* Contact Info */}
           <div>
             <h3 className="text-lg font-semibold mb-4 text-[#facc15]">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-bharath-yellow mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-300">151, Karur Main road,</p>
                  <p className="text-gray-300">Chinnammapuram,</p>
                  <p className="text-gray-300">Ganapathipayam (po)</p>
                  <p className="text-gray-300">Erode 638 153</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-bharath-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-300">9842750053</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-bharath-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-300">bharathengineerings@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Bharath Engineerings. All rights reserved. | 
            <a href="/privacy-policy" className="hover:text-bharath-yellow transition-colors duration-200 ml-1">Privacy Policy</a> | 
            <a href="/terms-of-service" className="hover:text-bharath-yellow transition-colors duration-200 ml-1">Terms of Service</a>
          </p>
          <p className="text-gray-400 mt-2">
            Designed and developed by{' '}
            <a 
              href="mailto:infothillaitech@gmail.com" 
              className="text-[#facc15] hover:text-white transition-colors duration-200 font-semibold"
            >
              ThillaiTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
