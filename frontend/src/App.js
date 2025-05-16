import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./App.css";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Section Components
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import PhysiciansSection from "./components/sections/PhysiciansSection";
import ProcessSection from "./components/sections/ProcessSection";
import ResourcesSection from "./components/sections/ResourcesSection";
import CommunitySection from "./components/sections/CommunitySection";
import BlogSection from "./components/sections/BlogSection";
import ScheduleSection from "./components/sections/ScheduleSection";
import FAQSection from "./components/sections/FAQSection";
import CTASection from "./components/sections/CTASection";

function App() {
  const { scrollYProgress } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate page load
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="App">
      {/* Loading Screen */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-primary-600 font-medium">Loading DrBuddies...</p>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      
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
      
      <Footer />
    </div>
  );
}

export default App;
