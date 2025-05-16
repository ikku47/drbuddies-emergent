import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import PageHeader from '../components/common/PageHeader';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Footer from '../components/layout/Footer';

// Import service data
import { serviceData } from '../data/serviceData';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <PageHeader 
        title="Our Medical Services"
        subtitle="Comprehensive healthcare solutions designed to meet your unique needs with a focus on quality, compassion, and cutting-edge medical expertise."
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Services' }
        ]}
      />
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">Complete Healthcare Solutions</h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              At DrBuddies, we offer a comprehensive range of medical services designed to address your healthcare needs at every stage of life. Our expert physicians and state-of-the-art facilities ensure you receive the highest quality care.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(serviceData).map(([id, service]) => (
              <motion.div 
                key={id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-soft overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-neutral-600 mb-4">{service.subtitle}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-primary-600 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                          <span className="text-sm text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/services/${id}`}
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors duration-300"
                  >
                    Learn More 
                    <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Need a Specialized Service?</h3>
                <p className="text-neutral-600 mb-6">
                  Our team of medical experts offers a wide range of specialized services not listed here. Contact us to discuss your specific healthcare needs and how we can assist you.
                </p>
                <Link 
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Contact Our Team
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-4">Additional Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                    <span>Occupational Health Services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                    <span>Travel Medicine</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                    <span>Pain Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                    <span>Medical Weight Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-3"></span>
                    <span>Behavioral Health Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Services;