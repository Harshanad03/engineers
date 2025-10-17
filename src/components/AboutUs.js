import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {

  return (
    <section id="about" className="pt-20 pb-12 px-4 sm:px-6 md:px-8 lg:px-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold tracking-wider uppercase"
                style={{ color: '#facc15', fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                ABOUT US
              </motion.h2>
              
              <motion.h3 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Bharath Engineerings
              </motion.h3>
            </div>

            {/* Body Text */}
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ 
                color: '#4F4F4F', 
                fontFamily: 'Open Sans, sans-serif'
              }}
            >
             Established in 1990 in Erode, Tamil Nadu, Bharath Engineerings is a leading manufacturer and supplier of Animal Feed Making Machinery, Cement Silos, and Fly Ash Silos. Our products are known for their durability, anti-corrosion properties, high tensile strength, and efficiency, crafted using premium raw materials and advanced fabrication techniques.

            </p>

          </div>

          {/* Right Side - Side by Side Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-16">
            {/* Left Video */}
            <div className="relative -mt-2 sm:-mt-4 md:-mt-12">
              {/* White card border */}
              <div className="relative bg-white p-2 sm:p-3 md:p-4 shadow-lg border-4 sm:border-6 md:border-8 border-gray-100">
                <div className="relative overflow-hidden">
                  <video
                    src="/images/aboutus.mp4"
                    className="w-full h-64 sm:h-72 md:h-80 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  
                  {/* Gradient overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div className="relative mt-2 sm:mt-4 md:mt-8">
              {/* White card border */}
              <div className="relative bg-white p-2 sm:p-3 md:p-4 shadow-lg border-4 sm:border-6 md:border-8 border-gray-100">
                <div className="relative overflow-hidden">
                  <video
                    src="/images/aboutus1.mp4"
                    className="w-full h-64 sm:h-72 md:h-80 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  
                  {/* Gradient overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
