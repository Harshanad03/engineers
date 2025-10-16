import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Industrial Feed Processing Plant",
      image: "/images/Poultry Feed Machiners.png",
      description: "Complete mash plant installation for a leading poultry feed manufacturer in Tamil Nadu.",
      location: "Coimbatore, Tamil Nadu",
      year: "2023",
      category: "Mash Plant"
    },
    {
      id: 2,
      title: "Cattle Feed Manufacturing Unit",
      image: "/images/Cattle Feed Machiners.png",
      description: "Automated cattle feed production facility with advanced mixing technology.",
      location: "Mysore, Karnataka",
      year: "2023",
      category: "Cattle Feed"
    },
    {
      id: 3,
      title: "Material Handling Conveyor System",
      image: "/images/loadingconveyor.png",
      description: "Custom conveyor system for efficient material transportation in industrial setting.",
      location: "Ahmedabad, Gujarat",
      year: "2022",
      category: "Conveyors"
    },
    {
      id: 4,
      title: "Special Purpose Mixing Equipment",
      image: "/images/jacketmixture.png",
      description: "Specialized mixing machinery for pharmaceutical industry applications.",
      location: "Hyderabad, Telangana",
      year: "2022",
      category: "Special Purpose"
    },
    {
      id: 5,
      title: "Service & Maintenance Program",
      image: "/images/gear1.png",
      description: "Comprehensive maintenance services for industrial machinery across multiple locations.",
      location: "Pan India",
      year: "2023",
      category: "Services"
    },
    {
      id: 6,
      title: "Advanced Automation System",
      image: "/images/gear2.png",
      description: "Complete automation solution for feed processing plant with PLC controls.",
      location: "Pune, Maharashtra",
      year: "2023",
      category: "Automation"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section 
        id="projects"
        className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen"
        style={{
          backgroundImage: 'url(/images/productsbg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/95"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
            >
              Our Projects
            </h2>
            <div 
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: '#facc15' }}
            ></div>
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Explore our successful project implementations across India, showcasing our expertise in industrial machinery and solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: '#facc15', color: '#0a1a3f' }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {project.year}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-4">
                    <button 
                      className="w-full bg-[#0a1a3f] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#facc15] hover:text-[#0a1a3f] transition-all duration-300 text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
              >
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's discuss your requirements and create a custom solution for your industrial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-[#0a1a3f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#facc15] hover:text-[#0a1a3f] transition-all duration-300"
                >
                  Get Quote
                </button>
                <button 
                  className="border-2 border-[#0a1a3f] text-[#0a1a3f] px-6 py-3 rounded-lg font-semibold hover:bg-[#0a1a3f] hover:text-white transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
