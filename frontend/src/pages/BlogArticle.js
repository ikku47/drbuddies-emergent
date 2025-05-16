import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserMd, FaArrowRight } from 'react-icons/fa';

import PageHeader from '../components/common/PageHeader';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Footer from '../components/layout/Footer';

// Import blog data (we'll create a separate file for this in a real application)
const articles = {
  'heart-health': {
    id: 'heart-health',
    title: "Understanding Heart Health: Prevention Tips From Our Cardiologists",
    excerpt: "Learn key strategies to maintain a healthy heart and reduce your risk of cardiovascular disease with advice from our top heart specialists.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    category: "Heart Health",
    author: "Dr. James Wilson",
    authorRole: "Head of Cardiology",
    authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    date: "June 15, 2023",
    readTime: "5 min read",
    paragraphs: [
      'Heart disease remains the leading cause of death globally, but many cases are preventable with the right lifestyle choices and medical care. At DrBuddies, our cardiology team is dedicated to helping patients maintain optimal heart health through both preventive strategies and advanced treatments when needed.',
      'The first step in heart disease prevention is understanding your personal risk factors. These can be divided into two categories: those you can modify and those you cannot. Non-modifiable risk factors include age, gender, family history, and genetic predisposition. While these cannot be changed, knowing about them helps you and your doctor develop a more personalized prevention strategy.',
      'Modifiable risk factors are aspects of your health and lifestyle that you can change to reduce your risk. These include high blood pressure, high cholesterol levels, smoking, physical inactivity, obesity, diabetes, poor diet, excessive alcohol consumption, and chronic stress.',
      'Based on decades of clinical research and experience, our cardiology team recommends the following strategies for maintaining heart health:',
      'Regular Physical Activity: Aim for at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous activity each week, spread throughout the week. Even short bursts of activity can provide benefits. Walking, swimming, cycling, and dancing are excellent options that are gentle on the joints while effectively strengthening the cardiovascular system.',
      'Heart-Healthy Diet: Focus on a diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. The Mediterranean diet, which emphasizes olive oil, fish, nuts, and plant foods, has been consistently shown to reduce heart disease risk. Limit sodium, saturated fats, processed foods, and added sugars.',
      'Maintain a Healthy Weight: Excess weight, especially around the midsection, increases strain on the heart and contributes to conditions like high blood pressure and diabetes. Even modest weight loss (5-10% of your body weight) can significantly improve heart health markers.'
    ],
    tags: ['heart health', 'cardiovascular disease', 'prevention', 'healthy lifestyle', 'cardiology'],
    relatedArticles: ['pediatric-checkups', 'chronic-pain']
  },
  'pediatric-checkups': {
    id: 'pediatric-checkups',
    title: "The Importance of Regular Check-ups for Children",
    excerpt: "Discover why regular pediatric check-ups are essential for your child's development and how they can prevent potential health issues.",
    image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207",
    category: "Pediatrics",
    author: "Dr. Maya Patel",
    authorRole: "Pediatric Specialist",
    authorImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    date: "May 28, 2023",
    readTime: "4 min read",
    paragraphs: [
      'Regular pediatric check-ups, also known as well-child visits, are a cornerstone of preventive healthcare for children. These scheduled appointments allow healthcare providers to monitor your child\'s growth and development, administer vaccinations, screen for potential health issues, and provide guidance on nutrition, safety, and overall wellness.',
      'Well-child visits serve multiple important purposes in maintaining and promoting your child\'s health. They help track physical growth, social and emotional development, discuss developmental milestones and behavioral concerns, administer scheduled vaccinations to prevent serious illnesses, and screen for health problems before they become serious.',
      'Regular check-ups allow us to catch potential issues early when they\'re most treatable, while also establishing a foundation of health that will benefit children throughout their lives.'
    ],
    tags: ['pediatrics', 'children health', 'preventive care', 'vaccinations', 'child development'],
    relatedArticles: ['heart-health', 'chronic-pain']
  },
  'chronic-pain': {
    id: 'chronic-pain',
    title: "Managing Chronic Pain: New Approaches and Treatments",
    excerpt: "Explore the latest innovations in chronic pain management and how multidisciplinary approaches are changing patients' lives.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    category: "Pain Management",
    author: "Dr. Robert Kim",
    authorRole: "Neurological Surgeon",
    authorImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
    date: "May 12, 2023",
    readTime: "6 min read",
    paragraphs: [
      'Chronic pain affects millions of people worldwide, impacting not just physical health but also emotional wellbeing, daily functioning, and quality of life. Traditional approaches to pain management have often focused on medication, but modern treatment strategies take a more comprehensive, multidisciplinary approach.',
      'Chronic pain is generally defined as pain lasting longer than three months or beyond the normal healing time for an injury. Unlike acute pain, which serves as a warning signal, chronic pain often persists even after the initial injury has healed, becoming a condition in itself rather than just a symptom.',
      'Common types of chronic pain include back and neck pain, arthritis and joint pain, neuropathic pain (from nerve damage), headaches and migraines, fibromyalgia, complex regional pain syndrome, post-surgical pain, and cancer-related pain.'
    ],
    tags: ['pain management', 'chronic pain', 'neurology', 'multidisciplinary care', 'pain treatment'],
    relatedArticles: ['heart-health', 'pediatric-checkups']
  }
};

const BlogArticle = () => {
  const { articleId } = useParams();
  
  // Get the article or show not found
  const article = articles[articleId];
  
  if (!article) {
    return <div>Article not found. Redirecting...</div>;
  }

  // Get related articles data
  const relatedArticlesData = article.relatedArticles.map(id => articles[id]);

  return (
    <>
      <PageHeader 
        title={article.title}
        subtitle={article.excerpt}
        backgroundImage={article.image}
      />
      
      <Breadcrumbs 
        items={[
          { label: 'Blog', path: '/blog' },
          { label: article.category, path: `/blog/category/${article.category.toLowerCase().replace(' ', '-')}` },
          { label: article.title }
        ]}
      />
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex items-center justify-between flex-wrap">
              <div className="flex items-center mb-4 md:mb-0">
                <img 
                  src={article.authorImage} 
                  alt={article.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium">{article.author}</p>
                  <p className="text-sm text-neutral-600">{article.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-neutral-600">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-primary-500" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <FaUserMd className="mr-2 text-primary-500" />
                  {article.readTime}
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              {article.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-neutral-700 mb-6">{paragraph}</p>
              ))}
            </motion.div>
            
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm text-neutral-600 mb-2">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticlesData.map((relatedArticle) => (
                <div key={relatedArticle.id} className="bg-white rounded-xl shadow-soft overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="bg-primary-100 text-primary-800 text-xs px-2.5 py-1 rounded-full">
                        {relatedArticle.category}
                      </span>
                      <span className="text-xs text-neutral-500">{relatedArticle.readTime}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2">{relatedArticle.title}</h4>
                    <p className="text-neutral-600 text-sm mb-4">{relatedArticle.excerpt}</p>
                    
                    <Link 
                      to={`/blog/${relatedArticle.id}`}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      Read Article
                      <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/blog" className="btn-secondary inline-flex items-center">
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogArticle;