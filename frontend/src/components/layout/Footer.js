import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">
              <span className="text-primary-500">Dr</span>
              <span className="text-white">Buddies</span>
            </h3>
            <p className="text-neutral-300 mb-6">
              Your trusted healthcare partner providing comprehensive medical services with a commitment to excellence and patient-centered care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-800 hover:bg-primary-700 text-white p-2 rounded-full transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 text-white p-2 rounded-full transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 text-white p-2 rounded-full transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 text-white p-2 rounded-full transition duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/physicians" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Our Physicians
                </Link>
              </li>
              <li>
                <Link to="/#process" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Patient Journey
                </Link>
              </li>
              <li>
                <Link to="/#resources" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Health Blog
                </Link>
              </li>
              <li>
                <Link to="/#faqs" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/primary-care" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Primary Care
                </Link>
              </li>
              <li>
                <Link to="/services/specialized-treatments" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Specialized Treatments
                </Link>
              </li>
              <li>
                <Link to="/services/emergency-care" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link to="/services/diagnostics" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Advanced Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services/preventive-care" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Preventive Care
                </Link>
              </li>
              <li>
                <Link to="/services/telehealth" className="text-neutral-300 hover:text-primary-400 transition duration-300 flex items-center">
                  <FaArrowRight className="mr-2 text-xs text-primary-500" />
                  Telehealth Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-500 mt-1 mr-3" />
                <span className="text-neutral-300">
                  123 Medical Center Drive<br />
                  Healthcare City, HC 12345
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-500 mr-3" />
                <span className="text-neutral-300">1-800-DRBUDDY</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-500 mr-3" />
                <a href="mailto:care@drbuddies.com" className="text-neutral-300 hover:text-primary-400 transition duration-300">
                  care@drbuddies.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/#schedule" className="btn-primary inline-flex items-center">
                Schedule Appointment
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-neutral-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DrBuddies Medical Center. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-neutral-400 hover:text-primary-400 text-sm transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-neutral-400 hover:text-primary-400 text-sm transition duration-300">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-neutral-400 hover:text-primary-400 text-sm transition duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;