import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const Breadcrumbs = ({ items }) => {
  return (
    <div className="bg-neutral-50 py-3 border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-primary-600">
                <FaHome className="mr-2 text-neutral-400" />
                Home
              </Link>
            </li>
            
            {items.map((item, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <FaChevronRight className="text-neutral-400 mx-1" />
                  {index === items.length - 1 ? (
                    <span className="ml-1 text-sm font-medium text-primary-600">{item.label}</span>
                  ) : (
                    <Link to={item.path} className="ml-1 text-sm font-medium text-neutral-600 hover:text-primary-600">
                      {item.label}
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;