import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight, FaLinkedinIn } from 'react-icons/fa';

const PhysiciansSection = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Chief of Internal Medicine',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yfHx8fHx8MTY4ODQ5MjQ4MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      specialty: 'Internal Medicine',
      experience: '15+ years experience',
      education: 'Harvard Medical School',
      testimonial: 'Dr. Chen took the time to listen to all my concerns and developed a comprehensive treatment plan that addressed every aspect of my health.',
      patientName: 'Michael T.',
      rating: 5
    },
    {
      id: 2,
      name: 'Dr. James Wilson',
      title: 'Head of Cardiology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yfHx8fHx8MTY4ODQ5MjUxNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      specialty: 'Cardiology',
      experience: '20+ years experience',
      education: 'Johns Hopkins University',
      testimonial: "Following my heart surgery, Dr. Wilson's careful monitoring and personalized care plan helped me recover faster than expected.",
      patientName: 'Rebecca M.',
      rating: 5
    },
    {
      id: 3,
      name: 'Dr. Maya Patel',
      title: 'Pediatric Specialist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yfHx8fHx8MTY4ODQ5MjU0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      specialty: 'Pediatrics',
      experience: '12+ years experience',
      education: 'Stanford University',
      testimonial: "Dr. Patel has such a wonderful way with children. My son, who's normally terrified of doctors, actually looks forward to his appointments with her.",
      patientName: 'Jennifer L.',
      rating: 5
    },
    {
      id: 4,
      name: 'Dr. Robert Kim',
      title: 'Neurological Surgeon',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZG9jdG9yfHx8fHx8MTY4ODQ5MjU3Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
      specialty: 'Neurosurgery',
      experience: '18+ years experience',
      education: 'Yale School of Medicine',
      testimonial: "Dr. Kim's expertise in neurosurgery and his compassionate approach gave me confidence during an incredibly difficult time. He truly saved my life.",
      patientName: 'Thomas B.',
      rating: 5
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
    <section id="physicians" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Meet Our <span className="text-primary-500">Expert Physicians</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Our team of board-certified doctors brings decades of experience and a commitment to delivering personalized, compassionate care.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div 
              key={doctor.id}
              variants={itemVariants}
              className="doctor-card bg-white rounded-xl overflow-hidden shadow-soft"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="doctor-info p-6 bg-white">
                <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                <p className="doctor-title text-primary-600 mb-3">{doctor.title}</p>
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full font-medium">
                      {doctor.specialty}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-600 mt-2">
                    <p>{doctor.experience}</p>
                    <p>{doctor.education}</p>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-4 mt-4">
                  <div className="flex mb-2">
                    {[...Array(doctor.rating)].map((_, i) => (
                      <FaStar key={i} className="text-accent-500" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <FaQuoteRight className="quote-icon absolute top-0 left-0 text-primary-100 text-xl" />
                    <p className="text-sm text-neutral-700 italic pl-7 mb-2">
                      "{doctor.testimonial}"
                    </p>
                    <p className="text-xs text-primary-600 font-medium">{doctor.patientName}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <a 
                    href="#" 
                    className="bg-primary-50 hover:bg-primary-100 text-primary-600 p-2 rounded-full transition duration-300"
                    aria-label={`View ${doctor.name}'s profile`}
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a href="#meet-doctors" className="btn-secondary inline-flex items-center">
            View All Physicians
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhysiciansSection;