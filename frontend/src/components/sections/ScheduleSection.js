import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserMd, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const ScheduleSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="schedule" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Schedule Your <span className="text-primary-500">Appointment</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Book your visit with our expert physicians. We'll respond promptly to confirm your appointment time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* Appointment Form */}
            <div className="lg:col-span-3 bg-white rounded-xl shadow-soft p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <FaCalendarAlt className="mr-2 text-primary-500" />
                      Book Your Visit
                    </h3>
                    <p className="text-neutral-600 text-sm mb-6">
                      Fill out the form below and our scheduling team will contact you to confirm your appointment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                      Department/Service*
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                      required
                    >
                      <option value="">Select a department</option>
                      <option value="primary-care">Primary Care</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="gynecology">Gynecology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                        Preferred Date*
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">
                        Preferred Time
                      </label>
                      <select
                        id="time"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (8AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 transition duration-200"
                      placeholder="Please share any relevant information about your visit..."
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start">
                      <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 mt-1 border border-neutral-300 rounded focus:ring-primary-500 text-primary-600"
                        required
                      />
                      <label htmlFor="terms" className="ml-2 text-sm text-neutral-600">
                        I agree to the privacy policy and consent to being contacted regarding my medical care.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex justify-center items-center"
                  >
                    <FaCalendarAlt className="mr-2" />
                    Schedule Appointment
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-500 mb-6">
                    <FaCheckCircle className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-neutral-600 mb-4">
                    Your appointment request has been submitted successfully. Our team will contact you shortly to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary inline-flex items-center mt-4"
                  >
                    Schedule Another Appointment
                  </button>
                </motion.div>
              )}
            </div>

            {/* Contact Info & Schedule Calendar Image */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-soft p-8 mb-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaPhone className="text-primary-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-neutral-600">1-800-DRBUDDY</p>
                      <p className="text-sm text-neutral-500">Mon-Fri: 8am-8pm, Sat: 9am-5pm</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-primary-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-neutral-600">appointments@drbuddies.com</p>
                      <p className="text-sm text-neutral-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaUserMd className="text-primary-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Urgent Care</p>
                      <p className="text-neutral-600">Walk-in available daily</p>
                      <p className="text-sm text-neutral-500">8am-10pm, 7 days a week</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e" 
                  alt="Medical appointment calendar" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;