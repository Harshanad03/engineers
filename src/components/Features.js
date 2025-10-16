import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Quality",
      description: "Durable and corrosion resistant"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      ),
      title: "Reliability",
      description: "Trustworthy performance"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Experience",
      description: "Decades of expertise"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "After-Sales",
      description: "Support and maintenance"
    }
  ];

  return (
    <section className="relative">
      {/* Floating Features Box */}
      <div className="relative -mt-20 z-20">
        <div className="bg-white rounded-2xl shadow-lg py-10 px-4 sm:px-6 md:px-8 mx-auto w-11/12 sm:w-4/5 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`text-center py-4 md:py-6 px-2 md:px-4 ${
                  (index % 2 === 0 && index < 3) || (index === 1) ? 'md:border-r border-gray-200' : ''
                }`}
              >
                <div className="flex justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-sm md:text-lg font-bold text-[#0a1a3f] mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4b5563]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
