// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaRocket, FaUserTie, FaBuilding, FaCheckCircle, FaStar, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiTrendingUp, HiShieldCheck } from 'react-icons/hi';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const [counts, setCounts] = useState({ clients: 0, positions: 0, satisfaction: 0, experience: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const animateCount = (key, target, duration = 2000) => {
      const step = target / (duration / 50);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount('clients', 558);
          animateCount('positions', 1200);
          animateCount('satisfaction', 98);
          animateCount('experience', 35);
        }
      });
    }, { threshold: 0.3 });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const values = [
    { 
      title: 'Client Value Creation', 
      description: 'Enabling clients to become high-performance businesses and building long-term relationships.',
      icon: HiTrendingUp,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      delay: 0
    },
    { 
      title: 'Integrity & Transparency', 
      description: 'Being ethically unyielding and inspiring trust by saying what we mean.',
      icon: HiShieldCheck,
      color: 'from-purple-500 via-pink-500 to-rose-500',
      delay: 0.1
    },
    { 
      title: 'Commitment & Passion', 
      description: 'Our unrelenting passion towards our work helps us remain in good stead.',
      icon: HiSparkles,
      color: 'from-emerald-500 via-green-500 to-lime-500',
      delay: 0.2
    },
    { 
      title: 'Speed in Delivery', 
      description: 'We continuously seek to beat timelines and ensure expeditious delivery of our work.',
      icon: HiLightningBolt,
      color: 'from-orange-500 via-amber-500 to-yellow-500',
      delay: 0.3
    },
    { 
      title: 'Excellence', 
      description: 'We constantly strive to deliver value with high performance for our clients.',
      icon: FaStar,
      color: 'from-indigo-500 via-violet-500 to-purple-500',
      delay: 0.4
    },
  ];

  const specialties = [
    'Staffing', 'Consulting', 'Executive Searches', 'Talent SOLUTIONS',
    'Recruitment', 'startup', 'Tech Recruitment', 'Talent Acquisition',
    'Industry Mapping', 'Leadership Hiring', 'CXO Hiring', 'Niche Hiring'
  ];

  return (
    <div className="bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />

        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/80"
          />
          <motion.div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')"
            }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3
            }}
            className="mb-8 inline-block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaRocket className="text-8xl drop-shadow-2xl" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.p 
              className="text-lg md:text-xl mb-4 font-semibold tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Moving Minds to Right Place
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="block"
              >
                The Right Talent
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent"
              >
                for a Brighter Future
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed"
          >
            "Acquiring the right talent is the most critical part to growth. 
            <span className="font-bold text-white"> Patronage HR</span> is your one-stop solution for all hiring needs."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-white text-primary rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors">
                Get Started
              </span>
            </motion.a>
            
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-transparent border-3 border-white/80 text-white rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {['558+ Followers', 'Since 2016', 'Gurgaon Based'].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8 + (i * 0.1), type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40 text-sm font-semibold"
              >
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-8 h-14 border-3 border-white/60 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-2 h-4 bg-white rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Section */}
        <AnimatedSection direction="scale">
          <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-30 mb-20">
            {[
              { label: 'Followers', value: counts.clients, suffix: '+', icon: FaUsers, color: 'from-blue-500 to-cyan-500', bg: 'from-blue-500/20 to-cyan-500/20' },
              { label: 'Positions Filled', value: counts.positions, suffix: '+', icon: FaAward, color: 'from-purple-500 to-pink-500', bg: 'from-purple-500/20 to-pink-500/20' },
              { label: 'Client Satisfaction', value: counts.satisfaction, suffix: '%', icon: FaStar, color: 'from-emerald-500 to-teal-500', bg: 'from-emerald-500/20 to-teal-500/20' },
              { label: 'Years Experience', value: counts.experience, suffix: '+', icon: HiTrendingUp, color: 'from-orange-500 to-red-500', bg: 'from-orange-500/20 to-red-500/20' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 10,
                  z: 50
                }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow Effect */}
                <motion.div 
                  className={`absolute -inset-2 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative bg-white dark:bg-dark-card rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 dark:border-gray-800">
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} rounded-3xl opacity-50`} />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <stat.icon className="text-white text-3xl" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-4xl lg:text-5xl font-extrabold text-center mb-3"
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    >
                      <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}{stat.suffix}
                      </span>
                    </motion.h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-center font-semibold text-base lg:text-lg">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Our Expertise Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="px-6 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
                <span className="text-primary dark:text-primary font-semibold">What We Do</span>
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold mb-6"
            >
              Our <span className="gradient-text">Expertise</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Best-in-class solutions to acquire core leadership talent
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: FaBuilding,
                title: 'Helping Technology Companies',
                description: 'Specializing in scaling teams for product-based and tech startups with cutting-edge talent solutions.',
                gradient: 'from-blue-500 via-cyan-500 to-teal-500',
                features: ['Product Teams', 'Engineering Talent', 'Tech Leadership', 'Startup Scaling']
              },
              {
                icon: FaUserTie,
                title: 'Executive & Niche Hiring',
                description: 'Connecting companies to experts, market leaders, and advisors for mid-level & specialized roles.',
                gradient: 'from-purple-500 via-pink-500 to-rose-500',
                features: ['C-Level Executives', 'Domain Experts', 'Advisory Roles', 'CXO Hiring']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Animated Border */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white dark:bg-dark-card rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-2xl`}
                    >
                      <item.icon className="text-white text-5xl" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-center">{item.title}</h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-8 leading-relaxed text-lg">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                      {item.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`px-5 py-2 bg-gradient-to-r ${item.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Specialties Section */}
        <AnimatedSection direction="scale" delay={0.3}>
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-6"
            >
              Our <span className="gradient-text">Specialties</span>
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {specialties.map((specialty, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: Math.random() * 10 - 5,
                  zIndex: 10
                }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full text-gray-700 dark:text-gray-200 font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 dark:border-gray-600"
              >
                {specialty}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Core Values Section */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold mb-6"
            >
              Our Core <span className="gradient-text">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              The principles that drive our success
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 50, rotateX: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: val.delay,
                  type: "spring"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 10,
                  z: 50
                }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div 
                  className={`absolute -inset-2 bg-gradient-to-r ${val.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
                
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-card dark:to-dark-bg p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${val.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                  >
                    <val.icon className="text-white text-3xl" />
                  </motion.div>
                  
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${val.color} bg-clip-text text-transparent`}>
                    {val.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
        
        {/* Testimonial Section */}
        <AnimatedSection direction="scale" delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
            
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
            
            <div className="relative z-10 p-12 md:p-20 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FaStar className="text-yellow-300 text-7xl mx-auto mb-8 drop-shadow-2xl" />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl italic text-white mb-10 leading-relaxed font-medium max-w-4xl mx-auto"
              >
                "Patronage HR has been our go-to partners for any tech and non-tech positions. They have an in-depth understanding of the business and a deep awareness of the changing hiring requirements."
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="inline-block bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/40"
              >
                <p className="font-bold text-2xl text-white mb-1">Bhiksu Nainwal</p>
                <p className="text-gray-100 text-lg">HRBP, Shine.com, HT Media</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection direction="up" delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-dark-card dark:to-dark-bg p-16 md:p-24 text-center mb-24"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <FaHandshake className="text-7xl text-white mx-auto drop-shadow-2xl" />
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Build Your <span className="text-yellow-300">Dream Team?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's connect and discuss how we can help you find the perfect talent for your organization. With over 35 years of combined experience, we're ready to transform your hiring process.
              </p>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-6 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Contact Us Today
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;