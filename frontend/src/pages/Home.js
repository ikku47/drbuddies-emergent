import React from 'react';

// Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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
  return (
    <>
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
    </>
  );
};

export default Home;