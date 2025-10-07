import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Kumar Industries",
      position: "Plant Manager",
      testimonial: "Bharath Engineerings has been our trusted partner for over 10 years. Their cattle feed machinery has significantly improved our production efficiency and quality.",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Sharma Agro Products",
      position: "Operations Director",
      testimonial: "The cement silos from Bharath Engineerings are incredibly durable and maintenance-free. Their nationwide supply network makes procurement hassle-free.",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Patel Manufacturing",
      position: "CEO",
      testimonial: "Outstanding quality and excellent after-sales support. Their fly ash silos have exceeded our expectations in terms of performance and longevity.",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Sunita Reddy",
      company: "Reddy Feeds Ltd",
      position: "Production Head",
      testimonial: "The high-strength materials and corrosion-resistant coating of their machinery have reduced our maintenance costs by 40%. Highly recommended!",
      rating: 5,
      logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <div 
            className="w-20 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: '#facc15' }}
          ></div>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Trusted by industry leaders across India
          </p>
        </div>

        {/* Simplified Testimonial Card */}
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto border border-gray-100 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full opacity-30 transform translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 transform -translate-x-10 translate-y-10"></div>
            
            <div className="relative">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: '#facc15' }}
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                  </svg>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote 
                className="text-xl md:text-2xl text-gray-800 text-center leading-relaxed font-medium mb-8"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                  <span className="ml-3 text-lg font-semibold text-gray-600">({testimonials[currentTestimonial].rating}.0)</span>
                </div>
              </div>

              {/* Client Info - Simplified */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <img 
                      src={testimonials[currentTestimonial].logo} 
                      alt={`${testimonials[currentTestimonial].company} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h4 
                      className="text-xl font-bold mb-1"
                      style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p 
                      className="text-gray-600 font-medium"
                      style={{ fontFamily: 'Open Sans, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].position} • {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots - Simplified */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'w-8 scale-100' 
                    : 'hover:scale-125'
                }`}
                style={{
                  backgroundColor: index === currentTestimonial ? '#0a1a3f' : '#D1D5DB'
                }}
              />
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
            className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}
            className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="#0a1a3f" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats Section - Simplified */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
              >
                500+
              </div>
              <p 
                className="text-gray-600 font-semibold"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Happy Clients
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
              >
                30+
              </div>
              <p 
                className="text-gray-600 font-semibold"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Years Experience
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
              >
                1000+
              </div>
              <p 
                className="text-gray-600 font-semibold"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                Projects Delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
