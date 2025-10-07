import React, { useState, useEffect, useRef } from 'react';
import SwipeableTestimonialCards from './SwipeableTestimonialCards';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      const duration = 8000; // 8 seconds for ultra-slow animation
      const steps = 160; // More steps for extremely smooth, slow animation
      const stepDuration = duration / steps;

      const targets = { projects: 500, clients: 200, years: 35 };
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        // Ultra-slow easing function - starts extremely slow
        const easeInQuint = progress * progress * progress * progress * progress;
        
        setCounts({
          projects: Math.floor(targets.projects * easeInQuint),
          clients: Math.floor(targets.clients * easeInQuint),
          years: Math.floor(targets.years * easeInQuint)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targets); // Ensure final values are exact
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-6 px-4 md:px-8 lg:px-16 relative overflow-hidden flex items-center"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Main Heading */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{ 
                color: '#0a1a3f', 
                fontFamily: 'Poppins, sans-serif',
                textShadow: '2px 2px 4px rgba(255,255,255,0.8)'
              }}
            >
              Our Clients
              <br />
              <span style={{ color: '#facc15' }}>Adore Our Work</span>
            </h1>

            {/* Subtext */}
            <p 
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ 
                color: '#374151', 
                fontFamily: 'Inter, sans-serif',
                textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
              }}
            >
              Trusted by industry leaders across India for over 35 years. Our engineering solutions have powered countless successful projects.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              <div className="text-center">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                  style={{ 
                    color: '#0a1a3f', 
                    fontFamily: 'Poppins, sans-serif',
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                  }}
                >
                  {counts.projects}+
                </div>
                <div 
                  className="text-xs sm:text-sm font-medium"
                  style={{ 
                    color: '#6b7280', 
                    fontFamily: 'Inter, sans-serif',
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                  }}
                >
                  Projects
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                  style={{ 
                    color: '#0a1a3f', 
                    fontFamily: 'Poppins, sans-serif',
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                  }}
                >
                  {counts.clients}+
                </div>
                <div 
                  className="text-xs sm:text-sm font-medium"
                  style={{ 
                    color: '#6b7280', 
                    fontFamily: 'Inter, sans-serif',
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                  }}
                >
                  Clients
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                  style={{ 
                    color: '#facc15', 
                    fontFamily: 'Poppins, sans-serif',
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                  }}
                >
                  {counts.years}+
                </div>
                <div 
                  className="text-xs sm:text-sm font-medium"
                  style={{ 
                    color: '#6b7280', 
                    fontFamily: 'Inter, sans-serif',
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                  }}
                >
                   Years Experience
                </div>
              </div>
            </div>

             {/* Call to Action */}
             <div className="flex flex-row gap-3 sm:gap-4 w-fit">
              <a
                href="#contact"
                className="group relative px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold text-sm sm:text-base text-white text-center overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl transform-gpu whitespace-nowrap"
                style={{
                  backgroundColor: '#0a1a3f',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 8px 25px rgba(10, 26, 63, 0.4)'
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Quote
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-active:opacity-20 bg-white transition-opacity duration-150"></div>
              </a>
              
              <a
                href="tel:+919876543210"
                className="group relative px-5 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold text-sm sm:text-base text-center overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl transform-gpu whitespace-nowrap"
                style={{
                  backgroundColor: '#facc15',
                  color: '#0a1a3f',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 8px 25px rgba(250, 204, 21, 0.4)'
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </span>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-active:opacity-20 bg-white transition-opacity duration-150"></div>
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
