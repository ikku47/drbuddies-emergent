import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPhone, FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Navigation links with dropdowns
  const navLinks = [
    {
      title: 'Services',
      path: '#services',
      dropdown: [
        { title: 'Primary Care', path: '#primary-care' },
        { title: 'Specialized Treatments', path: '#specialized-treatments' },
        { title: 'Emergency Care', path: '#emergency-care' },
        { title: 'Diagnostics', path: '#diagnostics' }
      ]
    },
    {
      title: 'Our Physicians',
      path: '#physicians',
      dropdown: [
        { title: 'Meet Our Doctors', path: '#meet-doctors' },
        { title: 'Specialties', path: '#specialties' },
        { title: 'Patient Success Stories', path: '#success-stories' }
      ]
    },
    {
      title: 'Patient Resources',
      path: '#resources',
      dropdown: [
        { title: 'Insurance Information', path: '#insurance' },
        { title: 'Patient Forms', path: '#forms' },
        { title: 'Patient Portal', path: '#portal' },
        { title: 'FAQs', path: '#faqs' }
      ]
    },
    { title: 'Our Process', path: '#process' },
    { title: 'Community', path: '#community' },
    { title: 'Blog', path: '#blog' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-display font-bold text-primary-600"
              >
                <span className="text-primary-500">Dr</span>
                <span className={isScrolled ? 'text-primary-800' : 'text-white'}>Buddies</span>
              </motion.div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <button 
                  onClick={() => toggleDropdown(index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-100'
                  }`}
                >
                  {link.title}
                  {link.dropdown && (
                    <FaChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  )}
                </button>
                
                {/* Dropdown */}
                {link.dropdown && (
                  <div 
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 nav-dropdown ${activeDropdown === index ? 'active' : ''}`}
                    style={{ display: activeDropdown === index ? 'block' : 'none' }}
                  >
                    <div className="py-1">
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className={`flex items-center ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              <FaPhone className="mr-2" />
              <span>1-800-DRBUDDY</span>
            </a>
            <a href="#schedule" className="btn-primary flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>Schedule Appointment</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`rounded-md p-2 inline-flex items-center justify-center ${
                isScrolled ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100' 
                : 'text-white hover:text-primary-100 hover:bg-primary-700'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-primary-900'} overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link, index) => (
            <div key={index}>
              <button
                onClick={() => toggleDropdown(index)}
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100' 
                    : 'text-white hover:text-primary-100 hover:bg-primary-700'
                }`}
              >
                {link.title}
                {link.dropdown && (
                  <FaChevronRight className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-90' : ''}`} />
                )}
              </button>
              
              {/* Mobile Dropdown */}
              {link.dropdown && (
                <motion.div 
                  initial={false}
                  animate={activeDropdown === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4">
                    {link.dropdown.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.path}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          isScrolled ? 'text-gray-500 hover:text-primary-600' : 'text-primary-100 hover:text-white'
                        }`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <a href="#contact" className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
                <FaPhone className="mr-2" />
                <span>1-800-DRBUDDY</span>
              </a>
            </div>
            <div className="mt-3 flex justify-center">
              <a href="#schedule" className="btn-primary flex items-center text-center justify-center w-full mx-3">
                <FaCalendarAlt className="mr-2" />
                <span>Schedule Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;