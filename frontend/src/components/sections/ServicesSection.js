import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaHospital, FaAmbulance, FaMicroscope, FaUserMd, FaCalendarCheck, FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FaHeartbeat className="text-4xl" />,
      title: 'Primary Care',
      description: 'Comprehensive healthcare services focused on prevention, early intervention, and management of common conditions.',
      details: 'Our primary care services include annual physical exams, preventive screenings, chronic disease management, and coordination of care across specialties.',
      achievements: ['98% patient satisfaction rate', '15 minute average wait time', 'Seamless electronic health records access'],
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115',
      link: '#primary-care'
    },
    {
      id: 2,
      icon: <FaHospital className="text-4xl" />,
      title: 'Specialized Treatments',
      description: 'Expert care from specialists in cardiology, neurology, orthopedics, and other key medical fields.',
      details: 'Our network of specialists use the latest evidence-based approaches to treat complex conditions with personalized care plans tailored to your needs.',
      achievements: ['25+ subspecialties available', 'State-of-the-art treatment facilities', 'Collaborative care team approach'],
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115',
      link: '#specialized-treatments'
    },
    {
      id: 3,
      icon: <FaAmbulance className="text-4xl" />,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response times and advanced life-saving capabilities.',
      details: 'Our emergency department is equipped to handle all medical emergencies with dedicated trauma bays, cardiac care units, and pediatric emergency services.',
      achievements: ['Under 10 minute average wait time', 'Level I Trauma Center certified', '24/7 specialist availability'],
      image: 'https://images.unsplash.com/photo-1564732005956-20420ebdab60',
      link: '#emergency-care'
    },
    {
      id: 4,
      icon: <FaMicroscope className="text-4xl" />,
      title: 'Advanced Diagnostics',
      description: 'Cutting-edge diagnostic technology including MRI, CT scans, ultrasound, and specialized lab testing.',
      details: 'Our diagnostic services provide accurate, timely results using the latest imaging and laboratory technologies to support precise diagnosis and treatment planning.',
      achievements: ['Same-day results for most tests', 'Advanced 3T MRI imaging', 'Digital pathology capabilities'],
      image: 'https://images.unsplash.com/photo-1582719298866-977ee81c87d7',
      link: '#diagnostics'
    },
    {
      id: 5,
      icon: <FaUserMd className="text-4xl" />,
      title: 'Preventive Care',
      description: 'Comprehensive wellness programs focused on preventing illness and promoting long-term health.',
      details: 'Our preventive services include vaccinations, health screenings, lifestyle counseling, and personalized wellness plans to help you maintain optimal health.',
      achievements: ['Personalized prevention plans', 'Community wellness programs', 'Preventive health navigators'],
      image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115',
      link: '#preventive-care'
    },
    {
      id: 6,
      icon: <FaCalendarCheck className="text-4xl" />,
      title: 'Telehealth Services',
      description: 'Virtual consultations and follow-up care from the comfort of your home.',
      details: 'Our telehealth platform provides secure video visits with your healthcare providers, online prescription refills, and digital health monitoring.',
      achievements: ['Available 7 days a week', 'Integrated with patient portal', 'Same-day appointments often available'],
      image: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e',
      link: '#telehealth'
    },
  ];

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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="text-primary-500">Medical Services</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Comprehensive healthcare solutions designed to meet your unique needs with a focus on quality, compassion, and cutting-edge medical expertise.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="service-card bg-white rounded-xl shadow-soft overflow-hidden"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredService === service.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
              </div>

              <div className="p-6">
                <div className="service-icon text-primary-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                
                <div className="hover-content">
                  <p className="text-neutral-700 mb-4">{service.details}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-primary-600 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {service.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                          <span className="text-sm text-neutral-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a 
                  href={service.link} 
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 transition-colors duration-300"
                >
                  Learn More 
                  <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a href="#schedule" className="btn-primary inline-flex items-center">
            <FaCalendarCheck className="mr-2" />
            Schedule Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;