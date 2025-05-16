import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaArrowRight } from 'react-icons/fa';

const CommunitySection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "After my heart surgery, the care team at DrBuddies was incredible. They not only provided exceptional medical care but also emotional support that made all the difference in my recovery.",
      name: "Robert Johnson",
      title: "Cardiac Patient",
      image: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      id: 2,
      quote: "When my daughter needed emergency surgery, the pediatric team at DrBuddies acted quickly and with such compassion. Their expertise saved her life, and their kindness helped our family through a difficult time.",
      name: "Maria Rodriguez",
      title: "Parent of Patient",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
      id: 3,
      quote: "Living with chronic illness isn't easy, but my care team at DrBuddies has made it manageable. They take a holistic approach to my health and make me feel like a partner in my care, not just a patient.",
      name: "David Williams",
      title: "Chronic Care Patient",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];

  const initiatives = [
    {
      title: "Community Health Screenings",
      description: "Free monthly health screenings in underserved areas, providing early detection and prevention services to those who need it most.",
      stats: "5,000+ community members served annually"
    },
    {
      title: "Youth Health Education",
      description: "Educational programs in local schools promoting healthy habits, nutrition, and preventive care knowledge to young people.",
      stats: "Reaching 20+ schools and 15,000 students"
    },
    {
      title: "Senior Wellness Program",
      description: "Specialized wellness initiatives for seniors focusing on mobility, nutrition, cognitive health, and social connection.",
      stats: "3,500 seniors participating in weekly programs"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="community" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="text-primary-500">Community Impact</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            We're committed to creating healthier communities through exceptional patient care, support programs, and community initiatives.
          </p>
        </div>

        {/* Patient Success Stories */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Patient Success Stories</h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={itemVariants}
                className="testimonial-card bg-white p-8 rounded-xl shadow-soft relative"
              >
                <FaQuoteLeft className="quote-icon text-2xl text-primary-200 absolute top-6 left-6" />
                <div className="pl-4">
                  <p className="text-neutral-700 mb-6 relative z-10">{testimonial.quote}</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Community Initiatives */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Community Health Initiatives</h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {initiatives.map((initiative, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-soft border-t-4 border-primary-500"
              >
                <h4 className="text-xl font-semibold mb-3 text-neutral-800">{initiative.title}</h4>
                <p className="text-neutral-600 mb-6">{initiative.description}</p>
                <div className="bg-primary-50 p-3 rounded-lg">
                  <p className="text-primary-700 font-medium">{initiative.stats}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <a href="#community-involvement" className="btn-secondary inline-flex items-center">
              Learn More About Our Community Work
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;