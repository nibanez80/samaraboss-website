import React from 'react';
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Samara Boss Coaching</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering individuals to break free from alcohol and create lasting, meaningful change. 
              Your journey to clarity and freedom starts here.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-be-free')} className="text-gray-300 hover:text-white transition-colors">
                  Drink Less Live More
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('book-session')} className="text-gray-300 hover:text-white transition-colors">
                  Book Session
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('resources')} className="text-gray-300 hover:text-white transition-colors">
                  Explore Thrive
                </button>
              </li>
              <li>
                <a href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/own-your-drink" className="text-gray-300 hover:text-white transition-colors">
                  Own Your Drink
                </a>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: <a href="mailto:hi@samaraboss.com" className="hover:text-white transition-colors">hi@samaraboss.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2026 Samara Boss Coaching. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;