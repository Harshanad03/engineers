import React from 'react';

const Stats = () => {
  // Static values - no animations
  const counts = { projects: 500, clients: 200, years: 35 };

  return (
    <section 
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
            <div 
              className="bg-gradient-to-br from-[#0a1a3f] to-[#1a2a4f] rounded-3xl px-6 py-8 md:px-8 md:py-12 relative overflow-hidden border border-white/10 transform transition-all duration-500 hover:scale-105 group"
              style={{
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#facc15]/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#facc15]/5 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center relative z-10">
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#facc15] leading-none">
                    {counts.projects}+
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Projects
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base">
                  Successfully Delivered
                </p>
              </div>
            </div>

            {/* Clients Card */}
            <div 
              className="bg-gradient-to-br from-[#0a1a3f] to-[#1a2a4f] rounded-3xl px-6 py-8 md:px-8 md:py-12 relative overflow-hidden border border-white/10 transform transition-all duration-500 hover:scale-105 group"
              style={{
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#facc15]/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#facc15]/5 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center relative z-10">
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#facc15] leading-none">
                    {counts.clients}+
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Clients
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base">
                  Trusted Partners
                </p>
              </div>
            </div>

            {/* Years Experience Card */}
            <div 
              className="bg-gradient-to-br from-[#0a1a3f] to-[#1a2a4f] rounded-3xl px-6 py-8 md:px-8 md:py-12 relative overflow-hidden border border-white/10 transform transition-all duration-500 hover:scale-105 group"
              style={{
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-4 left-4 w-12 h-12 bg-[#facc15]/10 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#facc15]/5 rounded-full blur-xl"></div>
              </div>
              
              <div className="text-center relative z-10">
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#facc15] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>

                {/* Number */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#facc15] leading-none">
                    {counts.years}+
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Years Experience
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base">
                  Industry Excellence
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;