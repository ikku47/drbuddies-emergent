import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight, FaLinkedinIn, FaFilter, FaSearch } from 'react-icons/fa';

import PageHeader from '../components/common/PageHeader';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Footer from '../components/layout/Footer';

const Physicians = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Chief of Internal Medicine',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
      specialty: 'Internal Medicine',
      experience: '15+ years experience',
      education: 'Harvard Medical School',
      testimonial: 'Dr. Chen took the time to listen to all my concerns and developed a comprehensive treatment plan that addressed every aspect of my health.',
      patientName: 'Michael T.',
      rating: 5,
      bio: 'Dr. Chen leads our Internal Medicine department with a focus on preventive care and chronic disease management. Her patient-centered approach has earned her multiple awards for excellence in patient care.',
      specialties: ['primary-care', 'internal-medicine']
    },
    {
      id: 2,
      name: 'Dr. James Wilson',
      title: 'Head of Cardiology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
      specialty: 'Cardiology',
      experience: '20+ years experience',
      education: 'Johns Hopkins University',
      testimonial: "Following my heart surgery, Dr. Wilson's careful monitoring and personalized care plan helped me recover faster than expected.",
      patientName: 'Rebecca M.',
      rating: 5,
      bio: 'Dr. Wilson is a renowned cardiologist specializing in interventional procedures and cardiac rehabilitation. He has pioneered several minimally invasive cardiac techniques used throughout the country.',
      specialties: ['cardiology', 'specialized-treatments']
    },
    {
      id: 3,
      name: 'Dr. Maya Patel',
      title: 'Pediatric Specialist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
      specialty: 'Pediatrics',
      experience: '12+ years experience',
      education: 'Stanford University',
      testimonial: "Dr. Patel has such a wonderful way with children. My son, who's normally terrified of doctors, actually looks forward to his appointments with her.",
      patientName: 'Jennifer L.',
      rating: 5,
      bio: 'Dr. Patel specializes in pediatric care with a focus on developmental health and childhood wellness. Her gentle approach helps children feel comfortable while receiving the care they need.',
      specialties: ['pediatrics', 'primary-care']
    },
    {
      id: 4,
      name: 'Dr. Robert Kim',
      title: 'Neurological Surgeon',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d',
      specialty: 'Neurosurgery',
      experience: '18+ years experience',
      education: 'Yale School of Medicine',
      testimonial: "Dr. Kim's expertise in neurosurgery and his compassionate approach gave me confidence during an incredibly difficult time. He truly saved my life.",
      patientName: 'Thomas B.',
      rating: 5,
      bio: 'Dr. Kim is a board-certified neurosurgeon specializing in complex brain and spine procedures. He uses cutting-edge techniques to provide the best possible outcomes for patients with neurological conditions.',
      specialties: ['neurosurgery', 'specialized-treatments']
    },
    {
      id: 5,
      name: 'Dr. Emily Nguyen',
      title: 'Chief Radiologist',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
      specialty: 'Radiology',
      experience: '14+ years experience',
      education: 'University of California',
      testimonial: "Dr. Nguyen's detailed analysis of my imaging studies helped identify a condition that other doctors had missed. Her expertise made all the difference in my treatment.",
      patientName: 'David K.',
      rating: 5,
      bio: 'Dr. Nguyen leads our Radiology department, specializing in advanced imaging techniques and intervention radiology. She is committed to precise diagnostics that guide effective treatment plans.',
      specialties: ['radiology', 'diagnostics']
    },
    {
      id: 6,
      name: 'Dr. Alex Martinez',
      title: 'Emergency Medicine Director',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
      specialty: 'Emergency Medicine',
      experience: '16+ years experience',
      education: 'University of Pennsylvania',
      testimonial: "When my daughter had a severe allergic reaction, Dr. Martinez's quick thinking and calm demeanor made a terrifying situation manageable. We're so grateful for his care.",
      patientName: 'Sarah J.',
      rating: 5,
      bio: 'Dr. Martinez directs our Emergency Department with expertise in trauma care and emergency response. His leadership ensures our team delivers rapid, effective care in critical situations.',
      specialties: ['emergency-medicine', 'emergency-care']
    },
    {
      id: 7,
      name: 'Dr. Lisa Johnson',
      title: 'Orthopedic Surgeon',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
      specialty: 'Orthopedics',
      experience: '17+ years experience',
      education: 'Duke University',
      testimonial: "After years of knee pain, Dr. Johnson's surgical skill gave me back my mobility. Her thorough approach to both surgery and rehabilitation made all the difference.",
      patientName: 'Robert T.',
      rating: 5,
      bio: 'Dr. Johnson specializes in orthopedic surgery with a focus on joint replacement and sports medicine. She combines surgical expertise with comprehensive rehabilitation planning for optimal recovery.',
      specialties: ['orthopedics', 'specialized-treatments']
    },
    {
      id: 8,
      name: 'Dr. Michael Thomas',
      title: 'Family Medicine Physician',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
      specialty: 'Family Medicine',
      experience: '10+ years experience',
      education: 'Columbia University',
      testimonial: "Dr. Thomas cares for our entire family, from my young children to my elderly parents. His comprehensive knowledge and personal attention make him an invaluable part of our healthcare.",
      patientName: 'Elizabeth W.',
      rating: 5,
      bio: 'Dr. Thomas provides comprehensive family medicine, caring for patients of all ages. He emphasizes preventive care and building long-term relationships with families to support their health through all life stages.',
      specialties: ['family-medicine', 'primary-care']
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Specialties' },
    { id: 'primary-care', label: 'Primary Care' },
    { id: 'specialized-treatments', label: 'Specialized Treatments' },
    { id: 'emergency-care', label: 'Emergency Care' },
    { id: 'diagnostics', label: 'Diagnostics & Imaging' }
  ];

  // Filter doctors based on active filter and search term
  const filteredDoctors = doctors.filter(doctor => {
    const matchesFilter = activeFilter === 'all' || doctor.specialties.includes(activeFilter);
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
    <>
      <PageHeader 
        title="Our Expert Physicians"
        subtitle="Meet our team of board-certified doctors bringing decades of experience and a commitment to delivering personalized, compassionate care."
        backgroundImage="https://images.unsplash.com/photo-1579684288361-5c1a2957cc38"
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Physicians' }
        ]}
      />
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold mb-2">Find Your Doctor</h2>
                <p className="text-neutral-600">
                  Search our team of medical professionals by name or specialty
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-neutral-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search doctors..."
                    className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 w-full md:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="relative inline-block">
                  <select
                    className="appearance-none bg-white border border-neutral-300 rounded-lg py-2 pl-4 pr-8 focus:ring-2 focus:ring-primary-400 focus:border-primary-500 w-full"
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                  >
                    {filterOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-500">
                    <FaFilter className="text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {filteredDoctors.length > 0 ? (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {filteredDoctors.map((doctor) => (
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
          ) : (
            <div className="text-center py-12 bg-neutral-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">No physicians found</h3>
              <p className="text-neutral-600 mb-4">Try adjusting your search criteria or filter</p>
              <button 
                onClick={() => {setActiveFilter('all'); setSearchTerm('');}}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          <div className="mt-16 bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Join Our Medical Team</h3>
              <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
                We're always looking for talented, compassionate healthcare professionals to join our team. If you're committed to providing exceptional patient care in a collaborative environment, we'd love to hear from you.
              </p>
              <a href="#careers" className="btn-primary inline-flex items-center">
                View Career Opportunities
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Physicians;