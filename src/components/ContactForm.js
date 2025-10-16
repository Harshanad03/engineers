import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        company: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
          >
            Get In Touch
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#facc15' }}
          ></div>
          <p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Ready to discuss your industrial machinery needs? Contact us today for expert consultation and competitive quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 
                className="text-2xl md:text-3xl font-bold mb-6"
                style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Information
              </h3>
              <div 
                className="w-16 h-1 mb-6"
                style={{ backgroundColor: '#facc15' }}
              ></div>
              <p 
                className="text-gray-600 mb-8"
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                We're here to help you find the perfect industrial machinery solutions for your business needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#facc15' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="font-semibold text-lg mb-1"
                    style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                  >
                    Phone
                  </h4>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    9842750053
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#facc15' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="font-semibold text-lg mb-1"
                    style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                  >
                    Email
                  </h4>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    bharathengineerings@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#facc15' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="font-semibold text-lg mb-1"
                    style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                  >
                    Address
                  </h4>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    151, Karur Main road,<br />
                    Chinnammapuram,<br />
                    Ganapathipayam (po)<br />
                    Erode 638 153
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#facc15' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="font-semibold text-lg mb-1"
                    style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                  >
                    Business Hours
                  </h4>
                  <p 
                    className="text-gray-600"
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
            <h3 
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
            >
              Send us a Message
            </h3>
            <div 
              className="w-16 h-1 mb-6"
              style={{ backgroundColor: '#facc15' }}
            ></div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0a1a3f] focus:outline-none transition-all duration-300"
                  style={{ 
                    fontFamily: 'Open Sans, sans-serif'
                  }}
                  placeholder="Your full name"
                />
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0a1a3f] focus:outline-none transition-all duration-300"
                    style={{ 
                      fontFamily: 'Open Sans, sans-serif',
                      '--tw-ring-color': '#facc15'
                    }}
                    placeholder="+91 98427 50053"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="company" 
                    className="block text-sm font-semibold mb-2"
                    style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#0a1a3f] focus:outline-none transition-all duration-300"
                    style={{ 
                      fontFamily: 'Open Sans, sans-serif',
                      '--tw-ring-color': '#facc15'
                    }}
                    placeholder="Your company name"
                  />
                </div>
              </div>


              {/* Message */}
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 resize-vertical"
                  style={{ 
                    fontFamily: 'Open Sans, sans-serif'
                  }}
                  placeholder="Tell us about your requirements, specifications, or any questions you have..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`hero-btn group relative w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  }`}
                  style={{ 
                    backgroundColor: isSubmitting ? '#9CA3AF' : '#0a1a3f',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </span>
                  {!isSubmitting && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: '#0a1a3f', fontFamily: 'Poppins, sans-serif' }}
            >
              Find Us Here
            </h3>
            <div 
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: '#facc15' }}
            ></div>
            <p 
              className="text-gray-600"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Visit our manufacturing facility in Erode, Tamil Nadu
            </p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="relative w-full h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2083.2951772827223!2d77.80714258697354!3d11.249727301216861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba97b7aca0db6a1%3A0x2a1d3f3633a2a19c!2sBharath%20Engineerings!5e0!3m2!1sen!2sin!4v1760081381356!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bharath Engineerings Location - Erode, Tamil Nadu"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
