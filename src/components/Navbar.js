import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setIsMenuOpen(false);
    if (link.name === 'Home') {
      navigate('/');
    } else {
      navigate('/#' + link.href);
    }
  };

  const getActiveLink = () => {
    if (location.pathname === '/') {
      return 'Home';
    } else if (location.pathname.includes('cattle-feed-machiners') || 
               location.pathname.includes('poultry-feed-machiners') || 
               location.pathname.includes('conveyers') || 
               location.pathname.includes('special-purpose-machiners') || 
               location.pathname.includes('automation') || 
               location.pathname.includes('services-and-spares')) {
      return 'Products';
    }
    return 'Home';
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Products', href: 'products' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1a3f] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Bharath Engineerings Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span 
                className="text-xl font-bold uppercase text-white leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                BHARATH
              </span>
              <span 
                className="text-sm font-bold uppercase text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                ENGINEERINGS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                className={`font-medium text-base transition-all duration-200 ease-in-out relative ${
                  getActiveLink() === link.name
                    ? 'text-[#facc15] border-b-2 border-[#facc15] pb-1'
                    : 'text-white hover:text-[#facc15]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#facc15] focus:outline-none focus:text-[#facc15] transition-all duration-200 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-64 opacity-100 transform translate-y-0' 
              : 'max-h-0 opacity-0 transform -translate-y-4'
          }`}
        >
          <div className="bg-[#0a1a3f] border-t border-gray-700 py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={`font-medium text-base transition-all duration-200 ease-in-out py-2 px-4 rounded-lg ${
                    getActiveLink() === link.name
                      ? 'text-[#facc15] bg-white/10'
                      : 'text-white hover:text-[#facc15] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
