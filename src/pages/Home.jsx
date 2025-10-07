// src/pages/Home.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaFilter, FaUserTie, FaBuilding, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const values = [
    { title: 'Client Value Creation', description: 'Enabling clients to become high-performance businesses and building long-term relationships.' },
    { title: 'Integrity & Transparency', description: 'Being ethically unyielding and inspiring trust by saying what we mean.' },
    { title: 'Commitment & Passion', description: 'Our unrelenting passion towards our work helps us remain in good stead.' },
    { title: 'Speed in Delivery', description: 'We continuously seek to beat timelines and ensure expeditious delivery of our work.' },
    { title: 'Excellence', description: 'We constantly strive to deliver value with high performance for our clients.' },
  ];

  return (
    <div className="bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2073')" }}
        ></div>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-white"
        >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                The Right Talent for a Brighter Future
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl">
                "Acquiring the right talent is the most critical part to growth. Patronage HR is one stop solution for all hiring needs."
            </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Expertise Section */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 text-center">
              <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaBuilding className="mx-auto text-primary text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Helping Technology Companies</h3>
                <p className="text-gray-600 dark:text-gray-400">Specializing in scaling teams for product-based and tech startups.</p>
              </div>
              <div className="p-8 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaUserTie className="mx-auto text-primary text-5xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Executive & Niche Hiring</h3>
                <p className="text-gray-600 dark:text-gray-400">Connecting companies to experts, market leaders, and advisors for mid-level & niche roles.</p>
              </div>
          </div>
        </AnimatedSection>

        {/* Why PatronageHR Section */}
        <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map(val => (
                <div key={val.title} className="bg-gray-50 dark:bg-dark-card p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-2">{val.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{val.description}</p>
                </div>
              ))}
            </div>
        </AnimatedSection>
        
        {/* Testimonial Section */}
        <AnimatedSection>
            <div className="bg-primary/10 dark:bg-dark-card p-10 rounded-xl text-center">
                 <p className="text-xl italic text-gray-700 dark:text-gray-300">
                    "Patronage HR has been our go-to partners for any tech and non-tech positions. They have an in-depth understanding of the business and a deep awareness of the changing hiring requirements."
                 </p>
                 <p className="mt-4 font-semibold text-gray-900 dark:text-white">- Bhiksu Nainwal</p>
                 <p className="text-sm text-gray-600 dark:text-gray-400">HRBP, Shine.com, HT Media</p>
            </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default Home;