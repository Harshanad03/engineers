import React, { useState, useEffect, useRef, useCallback } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  // Function to start counting animation with specific increments
  const startCounting = useCallback(() => {
    // Clear any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    // Reset to 0
    setCounts({ projects: 0, clients: 0, years: 0 });

    const increments = { projects: 100, clients: 50, years: 10 };
    const targets = { projects: 500, clients: 200, years: 35 };
    const interval = 200; // milliseconds between each increment

    let currentCounts = { projects: 0, clients: 0, years: 0 };

    animationRef.current = setInterval(() => {
      let allComplete = true;

      // Update projects counter (increment by 100)
      if (currentCounts.projects < targets.projects) {
        currentCounts.projects = Math.min(
          currentCounts.projects + increments.projects,
          targets.projects
        );
        allComplete = false;
      }

      // Update clients counter (increment by 50)
      if (currentCounts.clients < targets.clients) {
        currentCounts.clients = Math.min(
          currentCounts.clients + increments.clients,
          targets.clients
        );
        allComplete = false;
      }

      // Update years counter (increment by 10)
      if (currentCounts.years < targets.years) {
        currentCounts.years = Math.min(
          currentCounts.years + increments.years,
          targets.years
        );
        allComplete = false;
      }

      // Update state
      setCounts({ ...currentCounts });

      // Stop animation when all counters reach their targets
      if (allComplete) {
        clearInterval(animationRef.current);
      }
    }, interval);
  }, []);

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset counters and start animation when section comes into view
          startCounting();
        } else {
          // Reset counters when section leaves view
          setCounts({ projects: 0, clients: 0, years: 0 });
          if (animationRef.current) {
            clearInterval(animationRef.current);
          }
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
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [startCounting]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        background: '#ffffff',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* White Elevated Container */}
        <div 
          className="bg-white rounded-3xl px-6 py-12 md:px-12 md:py-16 relative overflow-hidden"
          style={{
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.12), 0 15px 35px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Projects */}
            <div className="text-center transform transition-all duration-500 hover:scale-110">
              <div 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3"
                style={{ 
                  color: '#facc15',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {counts.projects}+
              </div>
              <div 
                className="text-xl sm:text-2xl font-semibold"
                style={{ 
                  color: '#0a1a3f', 
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Projects
              </div>
              <div 
                className="text-sm mt-2"
                style={{ 
                  color: '#6b7280', 
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Successfully Delivered
              </div>
            </div>
            
            {/* Clients */}
            <div className="text-center transform transition-all duration-500 hover:scale-110">
              <div 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3"
                style={{ 
                  color: '#facc15',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {counts.clients}+
              </div>
              <div 
                className="text-xl sm:text-2xl font-semibold"
                style={{ 
                  color: '#0a1a3f', 
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Clients
              </div>
              <div 
                className="text-sm mt-2"
                style={{ 
                  color: '#6b7280', 
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Trusted Partners
              </div>
            </div>
            
            {/* Years Experience */}
            <div className="text-center transform transition-all duration-500 hover:scale-110">
              <div 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3"
                style={{ 
                  color: '#facc15',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {counts.years}+
              </div>
              <div 
                className="text-xl sm:text-2xl font-semibold"
                style={{ 
                  color: '#0a1a3f', 
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.05em'
                }}
              >
                Years Experience
              </div>
              <div 
                className="text-sm mt-2"
                style={{ 
                  color: '#6b7280', 
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Industry Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

