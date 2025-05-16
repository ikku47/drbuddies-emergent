import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaCalendarCheck, FaUserMd, FaClipboardList, FaHospital, FaHeartbeat, FaClipboardCheck } from 'react-icons/fa';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: <FaCalendarCheck className="text-2xl" />,
      title: 'Schedule Appointment',
      description: 'Book your appointment online, by phone, or in person. Our scheduling system allows you to select your preferred doctor, date, and time slot.'
    },
    {
      icon: <FaClipboardList className="text-2xl" />,
      title: 'Initial Consultation',
      description: 'Meet with your healthcare provider for a thorough evaluation of your health concerns, medical history, and to develop an initial care plan.'
    },
    {
      icon: <FaUserMd className="text-2xl" />,
      title: 'Diagnostic Testing',
      description: 'If needed, undergo comprehensive diagnostic testing to provide an accurate diagnosis and inform your personalized treatment approach.'
    },
    {
      icon: <FaHospital className="text-2xl" />,
      title: 'Treatment Plan',
      description: 'Receive a detailed treatment plan tailored to your specific needs, with clear explanations of all recommended procedures and therapies.'
    },
    {
      icon: <FaHeartbeat className="text-2xl" />,
      title: 'Treatment & Care',
      description: 'Experience high-quality care from our medical team using advanced techniques and technologies for optimal treatment outcomes.'
    },
    {
      icon: <FaClipboardCheck className="text-2xl" />,
      title: 'Follow-up & Recovery',
      description: 'Benefit from attentive follow-up care and support throughout your recovery process, with regular check-ins and adjustments to your care plan as needed.'
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      // Animate through each step
      const interval = setInterval(() => {
        setActiveStep((prevActive) => {
          if (prevActive < steps.length - 1) {
            return prevActive + 1;
          }
          clearInterval(interval);
          return prevActive;
        });
      }, 1200);
      
      return () => clearInterval(interval);
    }
  }, [isInView, controls, steps.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="process" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Your <span className="text-primary-500">Patient Journey</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            We've designed a seamless healthcare experience that prioritizes your comfort and well-being at every step.
          </p>
        </div>

        <motion.div 
          ref={timelineRef}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-primary-100"></div>

            {/* Timeline Steps */}
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`timeline-item relative flex flex-col md:flex-row md:justify-between items-start mb-12 ${index <= activeStep ? 'active' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white z-10">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>

                {/* Content positioning based on even/odd */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto pl-12 md:pl-0 md:pr-8' : 'md:ml-auto pl-12 md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-soft">
                    <div className="text-primary-500 mb-3">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            Ready to start your health journey with DrBuddies?
          </p>
          <a href="#schedule" className="btn-primary inline-flex items-center">
            Schedule Your First Appointment
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;