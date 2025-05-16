import React from 'react';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="relative py-24 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 35, 75, 0.8), rgba(0, 71, 179, 0.7)), url('${backgroundImage || 'https://images.unsplash.com/photo-1579684288361-5c1a2957cc38'}')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-700/50 z-0"></div>
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;