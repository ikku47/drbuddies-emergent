import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default Layout;
