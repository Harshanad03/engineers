import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "High Strength",
      description: "Built with premium materials for maximum durability and performance"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Corrosion Resistant",
      description: "Advanced coating technology ensures long-lasting protection"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Long Life",
      description: "Engineered for extended operational life with minimal maintenance"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "Nationwide Supply",
      description: "Comprehensive distribution network across India for easy access"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
          >
            Why Choose Us
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#facc15' }}
          ></div>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            With over three decades of experience, we deliver unmatched quality and reliability in every product we manufacture.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon Container */}
              <div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 group-hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#facc15' }}
              >
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 
                className="text-xl md:text-2xl font-bold mb-4"
                style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-gray-600 leading-relaxed"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
