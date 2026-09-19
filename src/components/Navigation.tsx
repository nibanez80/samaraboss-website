import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for home to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Drink Less Live More', id: 'why-be-free' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Explore Thrive', id: 'resources' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-semibold text-xl text-gray-800">
            Samara Boss Coaching
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/resources"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/own-your-drink"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Own Your Drink
            </Link>

            <button
              onClick={() => scrollToSection('book-session')}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Book Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <Link
                to="/resources"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Resources
              </Link>
              <Link
                to="/own-your-drink"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left"
              >
                Own Your Drink
              </Link>

              <button
                onClick={() => scrollToSection('book-session')}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full w-fit"
              >
                Book Session
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
