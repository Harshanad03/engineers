import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#0a1a3f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" transform="rotate(45 12 12)"/>
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" transform="rotate(90 12 12)"/>
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" transform="rotate(135 12 12)"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-tight text-white">BHARATH</span>
              <span className="text-sm font-medium text-white">ENGINEERINGS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-[#facc15] transition-colors duration-200 font-medium">Home</a>
            <a href="#about" className="text-white hover:text-[#facc15] transition-colors duration-200 font-medium">About</a>
            <a href="#products" className="text-white hover:text-[#facc15] transition-colors duration-200 font-medium">Products</a>
            <a href="#services" className="text-white hover:text-[#facc15] transition-colors duration-200 font-medium">Services</a>
            <a href="#contact" className="text-white hover:text-[#facc15] transition-colors duration-200 font-medium">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#facc15] focus:outline-none focus:text-[#facc15]"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/20">
              <a href="#home" className="block px-3 py-2 text-white hover:text-[#facc15] transition-colors duration-200 font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-[#facc15] transition-colors duration-200 font-medium">About</a>
              <a href="#products" className="block px-3 py-2 text-white hover:text-[#facc15] transition-colors duration-200 font-medium">Products</a>
              <a href="#services" className="block px-3 py-2 text-white hover:text-[#facc15] transition-colors duration-200 font-medium">Services</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-[#facc15] transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
