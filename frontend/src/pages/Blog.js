import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserMd, FaArrowRight, FaSearch } from 'react-icons/fa';

import PageHeader from '../components/common/PageHeader';
import Breadcrumbs from '../components/common/Breadcrumbs';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample articles data
  const articles = [
    {
      id: 'heart-health',
      title: "Understanding Heart Health: Prevention Tips From Our Cardiologists",
      excerpt: "Learn key strategies to maintain a healthy heart and reduce your risk of cardiovascular disease with advice from our top heart specialists.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
      category: "Heart Health",
      author: "Dr. James Wilson",
      authorRole: "Head of Cardiology",
      authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
      date: "June 15, 2023",
      readTime: "5 min read"
    },
    {
      id: 'pediatric-checkups',
      title: "The Importance of Regular Check-ups for Children",
      excerpt: "Discover why regular pediatric check-ups are essential for your child's development and how they can prevent potential health issues.",
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207",
      category: "Pediatrics",
      author: "Dr. Maya Patel",
      authorRole: "Pediatric Specialist",
      authorImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      date: "May 28, 2023",
      readTime: "4 min read"
    },
    {
      id: 'chronic-pain',
      title: "Managing Chronic Pain: New Approaches and Treatments",
      excerpt: "Explore the latest innovations in chronic pain management and how multidisciplinary approaches are changing patients' lives.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
      category: "Pain Management",
      author: "Dr. Robert Kim",
      authorRole: "Neurological Surgeon",
      authorImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
      date: "May 12, 2023",
      readTime: "6 min read"
    },
    {
      id: 'diabetes-management',
      title: "Living Well with Diabetes: Comprehensive Management Strategies",
      excerpt: "Learn effective ways to manage diabetes through lifestyle changes, monitoring, and the latest treatment options.",
      image: "https://images.unsplash.com/photo-1579684288361-5c1a2957cc38",
      category: "Chronic Disease",
      author: "Dr. Sarah Chen",
      authorRole: "Chief of Internal Medicine",
      authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      date: "April 30, 2023",
      readTime: "5 min read"
    },
    {
      id: 'mental-health-awareness',
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt: "Understanding the importance of mental health care and how to recognize when you or a loved one might need support.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      category: "Mental Health",
      author: "Dr. Emily Nguyen",
      authorRole: "Psychiatrist",
      authorImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
      date: "April 15, 2023",
      readTime: "4 min read"
    },
    {
      id: 'exercise-for-seniors',
      title: "Safe and Effective Exercise Options for Seniors",
      excerpt: "Discover age-appropriate physical activities that can help maintain mobility, strength, and overall health in older adults.",
      image: "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517",
      category: "Senior Health",
      author: "Dr. Michael Thomas",
      authorRole: "Geriatric Specialist",
      authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
      date: "March 28, 2023",
      readTime: "5 min read"
    }
  ];

  // Get unique categories for filter
  const categories = ['all', ...new Set(articles.map(article => article.category))];

  // Filter articles based on active category and search term
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <>
      <PageHeader
        title="Health Insights & Articles"
        subtitle="Stay informed with the latest medical insights, health tips, and hospital news from our expert physicians."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
      />

      <Breadcrumbs
        items={[
          { label: 'Blog' }
        ]}
      />

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-semibold mb-2">Latest Articles</h2>
                <p className="text-neutral-600">
                  Health insights and medical information from our experts
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-soft overflow-hidden feature-card"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center text-neutral-500 text-sm">
                        <FaCalendarAlt className="mr-1 text-xs" />
                        {article.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                    <p className="text-neutral-600 mb-4">{article.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={article.authorImage}
                          alt={article.author}
                          className="w-8 h-8 rounded-full object-cover mr-2"
                        />
                        <div>
                          <p className="text-sm font-medium text-neutral-800">{article.author}</p>
                          <p className="text-xs text-neutral-500">{article.authorRole}</p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-500">{article.readTime}</span>
                    </div>
                  </div>

                  <div className="border-t border-neutral-100 p-4">
                    <Link
                      to={`/blog/${article.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center transition-colors duration-300"
                    >
                      Read Full Article
                      <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12 bg-neutral-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-neutral-600 mb-4">Try adjusting your search criteria or category</p>
              <button
                onClick={() => {setActiveCategory('all'); setSearchTerm('');}}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          )}

          <div className="mt-16 bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-neutral-600 mb-6">
                  Stay updated with the latest health insights, medical advancements, and hospital news delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-500 flex-grow"
                  />
                  <button className="btn-primary">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-neutral-500 mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold mb-4">Popular Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {['Heart Health', 'Preventive Care', 'Pediatrics', 'Mental Health', 'Chronic Disease', 'Nutrition', 'Women\'s Health', 'Men\'s Health', 'Senior Care'].map((topic, index) => (
                    <span
                      key={index}
                      className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-3 py-1.5 rounded-full text-sm cursor-pointer transition-colors"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;