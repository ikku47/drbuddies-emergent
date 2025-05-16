import React, { useEffect } from 'react';

// Section Components
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PhysiciansSection from '../components/sections/PhysiciansSection';
import ProcessSection from '../components/sections/ProcessSection';
import ResourcesSection from '../components/sections/ResourcesSection';
import CommunitySection from '../components/sections/CommunitySection';
import BlogSection from '../components/sections/BlogSection';
import FAQSection from '../components/sections/FAQSection';
import ScheduleSection from '../components/sections/ScheduleSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <PhysiciansSection />
      <ProcessSection />
      <ResourcesSection />
      <CommunitySection />
      <BlogSection />
      <FAQSection />
      <ScheduleSection />
      <CTASection />
    </main>
  );
};

export default Home;