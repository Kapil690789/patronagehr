// src/pages/About.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiSparkles, HiLightningBolt, HiTrendingUp } from 'react-icons/hi';
import { FaRocket, FaHandshake, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaRocket,
      title: 'Fast Growing',
      description: 'Rapidly expanding recruitment consulting firm',
      color: 'from-primary to-blue-600'
    },
    {
      icon: FaHandshake,
      title: 'Trusted Partners',
      description: 'Building long-term relationships with clients',
      color: 'from-secondary to-pink-600'
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Experienced professionals with proven track records',
      color: 'from-accent to-green-600'
    },
    {
      icon: FaChartLine,
      title: 'Quality Focus',
      description: 'Emphasis on quality over quantity',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const milestones = [
    { year: '2015', title: 'Company Founded', description: 'Started our journey in Gurgaon' },
    { year: '2017', title: '100+ Placements', description: 'Reached our first major milestone' },
    { year: '2020', title: 'Tech Specialization', description: 'Focused on technology sector hiring' },
    { year: '2023', title: 'Industry Leader', description: 'Recognized as top recruitment partner' }
  ];

  return (
    <div className="bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20"></div>
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <HiSparkles className="text-7xl text-primary animate-pulse-slow" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            About <span className="gradient-text">Patronage HR</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Your Trusted Partner in Growth and Talent Acquisition
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Section */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800" 
                alt="Team Discussion" 
                className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-xl font-semibold">
                  <span className="gradient-text">PatronageHR</span> is a fast-growing recruitment consulting firm based out of Gurgaon.
                </p>
                
                <p>
                  We are shaping the software product-based companies with a talent pool for today and the future. We are backed by experienced and vibrant youngsters with proven track records.
                </p>
                
                <p>
                  We have strong connections with domain experts, market leaders, and advisors. It helps us make company-wide alignments.
                </p>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-2xl border-l-4 border-primary">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    At PatronageHR, we assist organizations in deciding the right talent for their growth and executing their business plans timely. Our core focus is on <span className="gradient-text">quality rather than quantity</span> with competent executions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <AnimatedSection delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-extrabold mb-4"
            >
              Why Choose <span className="gradient-text">Us?</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500`}></div>
                <div className="relative bg-white dark:bg-dark-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Timeline Section */}
        <AnimatedSection delay={0.3}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-extrabold mb-4"
            >
              Our <span className="gradient-text">Journey</span>
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'} text-center md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                      <h3 className="text-3xl font-bold gradient-text mb-2">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </motion.div>
                  </div>

                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl pulse-glow">
                    <HiCheckCircle className="text-white text-3xl" />
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Mission & Vision */}
        <AnimatedSection delay={0.4}>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03, translateY: -10 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600"></div>
              <div className="relative z-10 p-10 text-white">
                <HiTrendingUp className="text-6xl mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To connect exceptional talent with innovative companies, fostering growth and success for both individuals and organizations through personalized, efficient, and ethical recruitment solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, translateY: -10 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-pink-600"></div>
              <div className="relative z-10 p-10 text-white">
                <HiLightningBolt className="text-6xl mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To be the most trusted recruitment partner in the technology sector, recognized for our integrity, speed, and ability to consistently deliver high-quality talent that drives business transformation.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;