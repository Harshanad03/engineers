import React from 'react';
import SwipeableTestimonialCards from './SwipeableTestimonialCards';

const Testimonials = () => {

  return (
    <section 
      className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/images/categorybg1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ 
                color: '#0a1a3f', 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '2px 2px 4px rgba(255,255,255,0.8)'
              }}
            >
              Our Clients
              <br />
              <span style={{ color: '#facc15' }}>Love Us</span>
            </h1>

            {/* Subtext */}
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ 
                color: '#374151', 
                fontFamily: 'Inter, sans-serif',
                textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
              }}
            >
              Trusted by industry leaders across India for over 25 years. Our engineering solutions have powered countless successful projects.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg font-semibold text-white text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: '#0a1a3f',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 4px 15px rgba(10, 26, 63, 0.3)'
                }}
              >
                Get Quote
              </a>
              <a
                href="tel:+919876543210"
                className="px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: '#facc15',
                  color: '#0a1a3f',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 4px 15px rgba(250, 204, 21, 0.3)'
                }}
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Side - Swipeable Testimonial Cards */}
          <div className="relative">
            <SwipeableTestimonialCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
