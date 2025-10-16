import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

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
    const currentSection = sectionRef.current;
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

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [startCounting]);

  return (
    <section 
      ref={sectionRef}
      id="stats"
      className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      style={{
        background: '#ffffff',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Statistics Grid - Individual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Projects Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#0a1a3f] to-[#1a2a4f] rounded-3xl px-6 py-8 md:px-8 md:py-12 relative overflow-hidden border border-white/10 transform transition-all duration-500 hover:scale-105 group"
              style={{
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#facc15]/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#facc15]/5 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="relative mb-4">
                  {/* Projects Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img 
                        src="/images/closure.png" 
                        alt="Projects Icon"
                        className="w-16 h-16 drop-shadow-lg filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div 
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg"
                    style={{ 
                      color: '#facc15',
                      fontFamily: 'Poppins, sans-serif',
                      textShadow: '0 0 20px rgba(250, 204, 21, 0.3)',
                    }}
                  >
                    {counts.projects}+
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#facc15]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div 
                  className="text-xl sm:text-2xl font-semibold mb-2"
                  style={{ 
                    color: '#ffffff', 
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  Projects
                </div>
                <div 
                  className="text-sm mt-2"
                  style={{ 
                    color: '#ffffff', 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Successfully Delivered
                </div>
              </div>
            </motion.div>
            
            {/* Clients Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#0a1a3f] to-[#1a2a4f] rounded-3xl px-6 py-8 md:px-8 md:py-12 relative overflow-hidden border border-white/10 transform transition-all duration-500 hover:scale-105 group"
              style={{
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#facc15]/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#facc15]/5 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="relative mb-4">
                  {/* Clients Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img 
                        src="/images/group.png" 
                        alt="Clients Icon"
                        className="w-16 h-16 drop-shadow-lg filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div 
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg"
                    style={{ 
                      color: '#facc15',
                      fontFamily: 'Poppins, sans-serif',
                      textShadow: '0 0 20px rgba(250, 204, 21, 0.3)',
                    }}
                  >
                    {counts.clients}+
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#facc15]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div 
                  className="text-xl sm:text-2xl font-semibold mb-2"
                  style={{ 
                    color: '#ffffff', 
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  Clients
                </div>
                <div 
                  className="text-sm mt-2"
                  style={{ 
                    color: '#ffffff', 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Trusted Partners
                </div>
              </div>
            </motion.div>
            
            {/* Years Experience Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#0a1a3f] to-[#1a2a4f] rounded-3xl px-6 py-8 md:px-8 md:py-12 relative overflow-hidden border border-white/10 transform transition-all duration-500 hover:scale-105 group"
              style={{
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#facc15]/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#facc15]/5 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center relative z-10">
                <div className="relative mb-4">
                  {/* Experience/Award Icon - Star Badge */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img 
                        src="/images/star-badge.png" 
                        alt="Years Experience Badge"
                        className="w-16 h-16 drop-shadow-lg filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div 
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg"
                    style={{ 
                      color: '#facc15',
                      fontFamily: 'Poppins, sans-serif',
                      textShadow: '0 0 20px rgba(250, 204, 21, 0.3)',
                    }}
                  >
                    {counts.years}+
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#facc15]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div 
                  className="text-xl sm:text-2xl font-semibold mb-2"
                  style={{ 
                    color: '#ffffff', 
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  Years Experience
                </div>
                <div 
                  className="text-sm mt-2"
                  style={{ 
                    color: '#ffffff', 
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Industry Excellence
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

