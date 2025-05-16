import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 35, 75, 0.7), rgba(0, 71, 179, 0.6)), url('https://images.unsplash.com/photo-1579684288361-5c1a2957cc38')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/40 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
              Your Health, <span className="text-primary-300">Our Priority</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-neutral-100 max-w-lg">
              Experience healthcare reimagined with DrBuddies. Our team of expert physicians provide comprehensive medical care tailored to your needs.
            </p>
            <div className="cta-buttons flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#schedule" 
                className="btn-primary text-center sm:text-left flex justify-center sm:justify-start items-center"
              >
                <FaCalendarAlt className="mr-2" />
                Schedule Appointment
              </a>
              <a 
                href="#services" 
                className="btn-secondary text-center sm:text-left flex justify-center sm:justify-start items-center"
              >
                Our Services
                <FaArrowRight className="ml-2" />
              </a>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-12">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-3xl md:text-4xl font-bold text-primary-300">24/7</span>
                <span className="text-sm text-neutral-200 mt-1">Emergency Care</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-3xl md:text-4xl font-bold text-primary-300">100+</span>
                <span className="text-sm text-neutral-200 mt-1">Specialists</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-3xl md:text-4xl font-bold text-primary-300">50k+</span>
                <span className="text-sm text-neutral-200 mt-1">Patients Served</span>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="glass-card p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-primary-700 mb-4">Schedule an Appointment</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">Service</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="primary-care">Primary Care</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="dermatology">Dermatology</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary flex justify-center items-center mt-2">
                    <FaCalendarAlt className="mr-2" />
                    Book Appointment
                  </button>
                  <p className="text-xs text-neutral-500 text-center mt-2">
                    Our team will confirm your appointment within 24 hours.
                  </p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3 z-20">
                <span className="font-semibold">New Patient?</span> Get 15% Off!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;