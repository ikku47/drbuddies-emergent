import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaUserMd } from 'react-icons/fa';

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Heart Health: Prevention Tips From Our Cardiologists",
      excerpt: "Learn key strategies to maintain a healthy heart and reduce your risk of cardiovascular disease with advice from our top heart specialists.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Heart Health",
      author: "Dr. James Wilson",
      authorRole: "Head of Cardiology",
      date: "June 15, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Importance of Regular Check-ups for Children",
      excerpt: "Discover why regular pediatric check-ups are essential for your child's development and how they can prevent potential health issues.",
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Pediatrics",
      author: "Dr. Maya Patel",
      authorRole: "Pediatric Specialist",
      date: "May 28, 2023",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Managing Chronic Pain: New Approaches and Treatments",
      excerpt: "Explore the latest innovations in chronic pain management and how multidisciplinary approaches are changing patients' lives.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Pain Management",
      author: "Dr. Robert Kim",
      authorRole: "Neurological Surgeon",
      date: "May 12, 2023",
      readTime: "6 min read"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Health <span className="text-primary-500">Insights</span> & News
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Stay informed with the latest medical insights, health tips, and hospital news from our expert physicians.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
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
                    <FaUserMd className="text-primary-500 mr-2" />
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
                  to={`/blog/heart-health`}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center transition-colors duration-300"
                >
                  Read Full Article
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-secondary inline-flex items-center">
            View All Articles
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;