import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll listener to detect active section
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (location.pathname !== '/') return;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ['home', 'about', 'categories', 'products', 'testimonials', 'why-choose-us', 'stats', 'contact'];
          const scrollPosition = window.scrollY + 200; // Increased offset for better detection
          
          let currentSection = 'Home';
          
          for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const sectionBottom = sectionTop + sectionHeight;
              
              // Check if we're in the middle portion of the section for better accuracy
              if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
                // Map sections to navbar display
                if (sections[i] === 'categories') {
                  currentSection = 'Products';
                } else if (sections[i] === 'why-choose-us' || sections[i] === 'stats') {
                  currentSection = 'Testimonials';
                } else {
                  currentSection = sections[i].charAt(0).toUpperCase() + sections[i].slice(1);
                }
                break;
              }
            }
          }
          
          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setIsMenuOpen(false);
    
    if (link.name === 'Home') {
      navigate('/');
      setActiveSection('Home');
    } else if (link.href.startsWith('/')) {
      // Handle direct route navigation (Projects, etc.)
      navigate(link.href);
      setActiveSection(link.name);
    } else {
      // If we're already on the home page, just scroll to the section
      if (location.pathname === '/') {
        const element = document.querySelector('#' + link.href);
        if (element) {
          // Set active section after a small delay to allow smooth scrolling
          setTimeout(() => {
            setActiveSection(link.name);
          }, 100);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to home page with hash
        navigate('/#' + link.href);
        setActiveSection(link.name);
      }
    }
  };

  const getActiveLink = () => {
    // Check if we're on a product page
    if (location.pathname.includes('cattle-feed-machiners') || 
        location.pathname.includes('poultry-feed-machiners') || 
        location.pathname.includes('conveyers') || 
        location.pathname.includes('special-purpose-machiners') || 
        location.pathname.includes('automation') || 
        location.pathname.includes('services-and-spares')) {
      return 'Products';
    }
    
    if (location.pathname === '/our-clients-adore-our-work') {
      return 'Testimonials';
    }
    if (location.pathname === '/why-choose-us') {
      return 'Why Choose Us';
    }
    
    // Use the activeSection state for home page
    if (location.pathname === '/') {
      return activeSection;
    }
    
    return 'Home';
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Products', href: 'products' },
    { name: 'Testimonials', href: 'testimonials' },
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
                BHARATH ENGINEERINGS
              </span>
              <span 
                className="text-xs text-[#facc15] uppercase tracking-wider"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Design, Build, Deliver
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                className={`font-medium text-base transition-all duration-300 ease-in-out relative border-b-2 pb-1 ${
                  getActiveLink() === link.name
                    ? 'text-[#facc15] border-[#facc15]'
                    : 'text-white border-transparent hover:text-[#facc15] hover:border-[#facc15]'
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
