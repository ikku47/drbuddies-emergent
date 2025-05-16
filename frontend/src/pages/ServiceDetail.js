import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight, FaCheck, FaUserMd, FaHospital, FaClock } from 'react-icons/fa';

import PageHeader from '../components/common/PageHeader';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Footer from '../components/layout/Footer';

// Import service data
import { serviceData } from '../data/serviceData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Get current service data or redirect to services page if not found
  const service = serviceData[serviceId];

  if (!service) {
    return <div>Service not found. Redirecting...</div>;
  }

  return (
    <>
      <PageHeader 
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.image}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Services', path: '/services' },
          { label: service.title }
        ]}
      />
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto rounded-xl shadow-md mb-10"
                />
                
                <h2 className="text-3xl font-semibold mb-6">About Our {service.title}</h2>
                <p className="text-lg text-neutral-700 mb-8">{service.description}</p>
                
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <FaCheck className="text-primary-500" />
                        </div>
                        <p className="ml-3 text-neutral-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {service.stats.map((stat, index) => (
                    <div key={index} className="bg-primary-50 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                      <div className="text-neutral-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6">Meet Our {service.title} Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.team.map((member, index) => (
                      <div key={index} className="flex items-center bg-white rounded-xl shadow-soft p-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-20 h-20 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-lg font-semibold">{member.name}</h4>
                          <p className="text-primary-600">{member.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {service.faq.map((item, index) => (
                      <div key={index} className="bg-neutral-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-2">{item.question}</h4>
                        <p className="text-neutral-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden sticky top-24">
                <div className="bg-primary-500 text-white p-6">
                  <h3 className="text-xl font-semibold mb-2">Schedule an Appointment</h3>
                  <p className="text-primary-100">Book your visit with our {service.title} team today</p>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
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
                      <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">Preferred Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                      />
                    </div>
                  </div>
                  
                  <button className="w-full btn-primary flex items-center justify-center">
                    <FaCalendarAlt className="mr-2" />
                    Book Appointment
                  </button>
                </div>
                
                <div className="bg-neutral-50 p-6 border-t border-neutral-200">
                  <h4 className="font-semibold mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaUserMd className="text-primary-500 mr-2" />
                      <span>Dedicated {service.title} Team</span>
                    </div>
                    <div className="flex items-center">
                      <FaHospital className="text-primary-500 mr-2" />
                      <span>123 Medical Center Drive</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-primary-500 mr-2" />
                      <span>Mon-Fri: 8am-5pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Explore Our Other Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(serviceData)
                .filter(([id]) => id !== serviceId)
                .slice(0, 3)
                .map(([id, service]) => (
                  <div key={id} className="bg-white rounded-xl shadow-soft overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                      <p className="text-neutral-600 mb-4">{service.subtitle}</p>
                      <Link 
                        to={`/services/${id}`}
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                      >
                        Learn More
                        <FaArrowRight className="ml-2 text-sm" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ServiceDetail;