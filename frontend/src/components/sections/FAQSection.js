import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaCalendarAlt } from 'react-icons/fa';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment through our online booking system, by calling our appointment line at 1-800-DRBUDDY, or by visiting our facility in person. We offer same-day appointments for urgent matters as well as scheduled visits for routine care and consultations."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "DrBuddies accepts most major insurance plans, including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and many others. Please contact our billing department or check our insurance information page for a complete list of accepted plans."
    },
    {
      question: "How can I access my medical records?",
      answer: "Your medical records are available through our secure patient portal. After registering for portal access, you can view test results, appointment summaries, and communicate with your healthcare team. For full medical record copies, please submit a request through our medical records department."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring your photo ID, insurance card, list of current medications (including dosages), medical history information, and any recent test results or medical records from previous providers. Arriving 15 minutes early will allow time to complete any necessary paperwork."
    },
    {
      question: "Do you offer telehealth appointments?",
      answer: "Yes, we offer telehealth services for many types of appointments. Virtual visits allow you to connect with your healthcare provider from the comfort of your home. Not all conditions can be treated via telehealth, but our scheduling team can help determine if your concern is appropriate for a virtual visit."
    },
    {
      question: "What are your hospital's visiting hours?",
      answer: "Our general visiting hours are from 8:00 AM to 8:00 PM daily. Specialty units such as ICU, maternity, and pediatrics may have different visiting policies. We encourage family involvement in patient care while balancing the need for rest and recovery."
    },
    {
      question: "How do I refill my prescription?",
      answer: "The easiest way to request a prescription refill is through our patient portal. Alternatively, you can call our pharmacy line or have your pharmacy send a refill request directly to your doctor. Please allow 48-72 hours for processing routine refill requests."
    },
    {
      question: "What should I do in case of a medical emergency?",
      answer: "For life-threatening emergencies, call 911 immediately. Our emergency department is open 24/7 for urgent medical needs. If you're unsure whether your situation requires emergency care, you can call our nurse triage line for guidance."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked <span className="text-primary-500">Questions</span>
            </h2>
            <p className="text-neutral-600 text-lg">
              Find answers to common questions about our services, policies, and procedures.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item bg-white rounded-xl shadow-soft overflow-hidden ${activeIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question w-full text-left p-6 focus:outline-none flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <span className="faq-icon text-primary-500">
                    <FaPlus className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`} />
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer px-6 pb-6 text-neutral-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-4">Can't find the answer you're looking for?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center">
                Contact Us
              </a>
              <a href="#schedule" className="btn-primary inline-flex items-center justify-center">
                <FaCalendarAlt className="mr-2" />
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;