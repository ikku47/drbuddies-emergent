import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaIdCard, FaCreditCard, FaCalendarAlt, FaQuestionCircle, FaBookMedical, FaExternalLinkAlt } from 'react-icons/fa';

const ResourcesSection = () => {
  const resources = [
    {
      icon: <FaFileDownload className="text-2xl" />,
      title: 'Patient Forms',
      description: 'Download and complete your new patient forms before your visit to save time.',
      links: [
        { title: 'New Patient Registration', url: '#' },
        { title: 'Medical History Form', url: '#' },
        { title: 'HIPAA Consent Form', url: '#' }
      ],
      color: 'bg-primary-500'
    },
    {
      icon: <FaIdCard className="text-2xl" />,
      title: 'Patient Portal',
      description: 'Access your medical records, test results, and communicate with your healthcare team.',
      links: [
        { title: 'Login to Portal', url: '#' },
        { title: 'Register for Access', url: '#' },
        { title: 'Portal User Guide', url: '#' }
      ],
      color: 'bg-secondary-500'
    },
    {
      icon: <FaCreditCard className="text-2xl" />,
      title: 'Insurance & Billing',
      description: 'Information about accepted insurance plans and our billing procedures.',
      links: [
        { title: 'Accepted Insurance Plans', url: '#' },
        { title: 'Payment Options', url: '#' },
        { title: 'Financial Assistance', url: '#' }
      ],
      color: 'bg-accent-500'
    },
    {
      icon: <FaCalendarAlt className="text-2xl" />,
      title: 'Appointment Info',
      description: 'Everything you need to know before, during, and after your appointment.',
      links: [
        { title: 'Preparing for Your Visit', url: '#' },
        { title: 'What to Bring', url: '#' },
        { title: 'Cancelation Policy', url: '#' }
      ],
      color: 'bg-primary-700'
    },
    {
      icon: <FaQuestionCircle className="text-2xl" />,
      title: 'FAQs',
      description: 'Find answers to commonly asked questions about our services and procedures.',
      links: [
        { title: 'General FAQs', url: '#' },
        { title: 'Insurance Questions', url: '#' },
        { title: 'Procedure FAQs', url: '#' }
      ],
      color: 'bg-secondary-700'
    },
    {
      icon: <FaBookMedical className="text-2xl" />,
      title: 'Health Library',
      description: 'Educational resources to help you better understand your health conditions.',
      links: [
        { title: 'Condition Information', url: '#' },
        { title: 'Treatment Options', url: '#' },
        { title: 'Preventive Health', url: '#' }
      ],
      color: 'bg-accent-700'
    }
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
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Patient <span className="text-primary-500">Resources</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Access the tools and information you need for a smooth healthcare experience at DrBuddies.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="feature-card bg-white rounded-xl shadow-soft overflow-hidden"
            >
              <div className="flex items-center p-6">
                <div className={`${resource.color} w-12 h-12 rounded-full flex items-center justify-center text-white mr-4`}>
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold">{resource.title}</h3>
              </div>
              
              <div className="px-6 pb-6">
                <p className="text-neutral-600 mb-4">{resource.description}</p>
                
                <ul className="space-y-2">
                  {resource.links.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.url} 
                        className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                      >
                        <span className="mr-2">{link.title}</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;