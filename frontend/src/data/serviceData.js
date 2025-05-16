export const serviceData = {
  'primary-care': {
    title: 'Primary Care',
    subtitle: 'Comprehensive healthcare services focused on prevention, early intervention, and management of common conditions.',
    description: 'Our primary care services are the foundation of your healthcare journey. Our dedicated physicians provide personalized care for patients of all ages, focusing on preventive medicine, early detection, and management of chronic conditions.',
    image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115',
    features: [
      'Comprehensive annual physical examinations',
      'Preventive screenings and vaccinations',
      'Management of chronic conditions',
      'Health education and lifestyle counseling',
      'Coordination of specialty care',
      'Same-day appointments for acute issues'
    ],
    stats: [
      { value: '98%', label: 'Patient satisfaction rate' },
      { value: '15 min', label: 'Average wait time' },
      { value: '24/7', label: 'Online access to records' }
    ],
    team: [
      { name: 'Dr. Sarah Chen', title: 'Chief of Internal Medicine', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2' },
      { name: 'Dr. James Wilson', title: 'Family Medicine', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d' }
    ],
    faq: [
      {
        question: 'How often should I schedule a check-up?',
        answer: 'We recommend annual wellness visits for most adults. However, patients with chronic conditions may need more frequent appointments. Children and seniors often require more regular check-ups based on their specific health needs.'
      },
      {
        question: 'Can I choose my primary care physician?',
        answer: 'Yes, you can select your preferred primary care physician from our team of qualified healthcare providers. Having a consistent relationship with one doctor helps ensure continuity of care and better health outcomes.'
      },
      {
        question: 'What should I bring to my first appointment?',
        answer: 'Please bring your photo ID, insurance card, a list of current medications (including over-the-counter supplements), medical records if available, and a list of questions or concerns you would like to address.'
      }
    ]
  },
  'specialized-treatments': {
    title: 'Specialized Treatments',
    subtitle: 'Expert care from specialists in cardiology, neurology, orthopedics, and other key medical fields.',
    description: 'Our network of specialists delivers advanced treatment options across multiple disciplines. Using the latest evidence-based approaches, our expert physicians develop personalized care plans to address complex medical conditions.',
    image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115',
    features: [
      'State-of-the-art diagnostic capabilities',
      'Minimally invasive surgical options',
      'Advanced treatment protocols',
      'Collaborative multidisciplinary approach',
      'Clinical research and trial opportunities',
      'Comprehensive pre and post-procedure care'
    ],
    stats: [
      { value: '25+', label: 'Medical specialties' },
      { value: '93%', label: 'Treatment success rate' },
      { value: '2,000+', label: 'Procedures annually' }
    ],
    team: [
      { name: 'Dr. Robert Kim', title: 'Neurological Surgeon', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d' },
      { name: 'Dr. Maya Patel', title: 'Cardiologist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f' }
    ],
    faq: [
      {
        question: 'How do I get a referral to a specialist?',
        answer: 'Your primary care physician can provide a referral to one of our specialists. In some cases, you may be able to schedule directly with a specialist, depending on your insurance plan and the specialty area.'
      },
      {
        question: 'What is the wait time to see a specialist?',
        answer: 'Wait times vary by specialty and urgency. Urgent cases are typically seen within 24-48 hours. For non-urgent specialty appointments, the wait time is usually 1-3 weeks. Our scheduling team works diligently to accommodate your needs.'
      },
      {
        question: 'Do you offer virtual consultations with specialists?',
        answer: 'Yes, many of our specialists offer telemedicine appointments for initial consultations, follow-up visits, and certain types of care. This option provides convenience while maintaining the high quality of care you expect.'
      }
    ]
  },
  'emergency-care': {
    title: 'Emergency Care',
    subtitle: '24/7 emergency medical services with rapid response times and advanced life-saving capabilities.',
    description: 'Our emergency department is equipped to handle all medical emergencies with state-of-the-art technology and a team of board-certified emergency physicians. We provide immediate, life-saving care when every minute counts.',
    image: 'https://images.unsplash.com/photo-1564732005956-20420ebdab60',
    features: [
      'Level I Trauma Center certification',
      'Rapid triage and assessment',
      'Advanced cardiac care unit',
      'Stroke treatment protocols',
      'Pediatric emergency services',
      'Disaster response capabilities'
    ],
    stats: [
      { value: '<10 min', label: 'Average wait time' },
      { value: '24/7', label: 'Specialist availability' },
      { value: '100%', label: 'Board-certified physicians' }
    ],
    team: [
      { name: 'Dr. Alex Martinez', title: 'Emergency Medicine Director', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2' },
      { name: 'Dr. Lisa Johnson', title: 'Trauma Surgeon', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f' }
    ],
    faq: [
      {
        question: 'When should I go to the emergency room vs. urgent care?',
        answer: 'Visit the emergency room for severe, life-threatening conditions such as chest pain, difficulty breathing, severe bleeding, stroke symptoms, or major trauma. Urgent care is appropriate for non-life-threatening issues that require same-day attention, such as minor injuries, sprains, or mild infections.'
      },
      {
        question: 'What is the triage process in your emergency department?',
        answer: 'When you arrive, a triage nurse will quickly assess your condition based on severity. Patients with life-threatening conditions are seen immediately, while less urgent cases are prioritized accordingly. This system ensures that those in critical condition receive immediate attention.'
      },
      {
        question: 'Will I be admitted to the hospital after an ER visit?',
        answer: 'Admission depends on your medical condition. Some patients can be treated and released from the emergency department, while others may require hospitalization for further treatment, observation, or specialized care. Our team will make this determination based on your specific needs.'
      }
    ]
  },
  'diagnostics': {
    title: 'Advanced Diagnostics',
    subtitle: 'Cutting-edge diagnostic technology including MRI, CT scans, ultrasound, and specialized lab testing.',
    description: 'Our comprehensive diagnostic services provide accurate, timely results using state-of-the-art imaging and laboratory technologies. From routine screenings to complex diagnostics, we deliver precise information to guide your treatment plan.',
    image: 'https://images.unsplash.com/photo-1582719298866-977ee81c87d7',
    features: [
      '3T MRI for detailed imaging',
      'CT scanning with advanced reconstruction',
      'Digital mammography and breast imaging',
      'Cardiac stress testing and echocardiography',
      'Full-service clinical laboratory',
      'Interventional radiology procedures'
    ],
    stats: [
      { value: 'Same Day', label: 'Results for most tests' },
      { value: '99.8%', label: 'Accuracy rate' },
      { value: '24/7', label: 'Emergency imaging access' }
    ],
    team: [
      { name: 'Dr. Emily Nguyen', title: 'Chief Radiologist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f' },
      { name: 'Dr. Michael Thomas', title: 'Laboratory Director', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d' }
    ],
    faq: [
      {
        question: "Do I need a doctor's referral for diagnostic testing?",
        answer: 'Most diagnostic tests require a referral from your healthcare provider to ensure appropriate medical necessity. However, some screening tests like routine mammograms may be available without a referral, depending on your age and risk factors.'
      },
      {
        question: 'How should I prepare for an MRI or CT scan?',
        answer: 'Preparation varies by test. Generally, you may be asked to fast for a few hours before certain scans, avoid wearing metal objects, and inform us of any implants or devices in your body. Detailed instructions will be provided when you schedule your appointment.'
      },
      {
        question: 'How quickly will I receive my test results?',
        answer: 'Most routine lab tests are available within 24 hours, and many imaging results are available the same day. For more specialized tests, results typically take 1-3 days. Critical results are communicated immediately to your healthcare provider.'
      }
    ]
  }
};