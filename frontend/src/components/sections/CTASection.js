import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPhone, FaArrowRight } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary-400 opacity-20"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-primary-300 opacity-10"></div>
        <div className="absolute bottom-0 right-20 w-40 h-40 rounded-full bg-primary-500 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
          >
            Your Journey to Better Health <br />Starts Here
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto"
          >
            Experience comprehensive care with a team dedicated to your well-being. Schedule your appointment today and take the first step toward a healthier life.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="#schedule" 
              className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center"
            >
              <FaCalendarAlt className="mr-2" />
              Book Appointment
            </a>
            <a 
              href="tel:18003374968" 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-[1.02] flex items-center justify-center"
            >
              <FaPhone className="mr-2" />
              Call Us
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-primary-100 flex flex-col sm:flex-row justify-center items-center gap-8"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span>Same-day appointments available</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span>Most insurance plans accepted</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <a href="#services" className="text-primary-100 hover:text-white flex items-center justify-center transition duration-300">
              <span>Learn more about our services</span>
              <FaArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;