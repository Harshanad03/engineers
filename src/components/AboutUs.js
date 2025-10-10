import React from 'react';

const AboutUs = () => {

  return (
    <section id="about" className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <h2 
                className="text-2xl md:text-3xl font-bold tracking-wider uppercase"
                style={{ color: '#facc15', fontFamily: 'Poppins, sans-serif' }}
              >
                ABOUT US
              </h2>
              
              <h3 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
              >
                Bharath Engineerings
              </h3>
            </div>

            {/* Body Text */}
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ 
                color: '#4F4F4F', 
                fontFamily: 'Open Sans, sans-serif'
              }}
            >
              Incepted in the year 1990, at Erode (Tamil Nadu, India), we 'Bharath Engineerings' have acquired a distinct identity of our own in the field of manufacturing and supplying qualitative ranges of Animal (Cattle) Feed Making Machinery, Cement Silo, and Fly Ash Silos. Our products feature longer functional life, anti-corrosion, high tensile strength, and optimum efficiency. By inculcating the latest fabrication techniques and technologies, we manufacture our products from supreme quality raw materials sourced from authorized vendors across the country.
            </p>

          </div>

          {/* Right Side - Side by Side Videos */}
          <div className="grid grid-cols-2 gap-10 md:gap-16">
            {/* Left Video */}
            <div className="relative -mt-8 md:-mt-16">
              {/* White card border */}
              <div className="relative bg-white p-3 md:p-4 shadow-lg border-8 border-gray-100">
                <div className="relative overflow-hidden">
                  <video
                    src="/images/aboutus.mp4"
                    className="w-full h-48 md:h-64 object-cover"
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
            <div className="relative mt-4 md:mt-8">
              {/* White card border */}
              <div className="relative bg-white p-3 md:p-4 shadow-lg border-8 border-gray-100">
                <div className="relative overflow-hidden">
                  <video
                    src="/images/aboutus1.mp4"
                    className="w-full h-48 md:h-64 object-cover"
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
