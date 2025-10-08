// src/pages/Team.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaLinkedin } from 'react-icons/fa';
import { HiSparkles, HiBriefcase, HiAcademicCap } from 'react-icons/hi';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Umesh Saini',
    experience: '15+ Years of Experience',
    description: 'Prior to PatronageHR, he was associated with Fastfox.com as Associate Vice President-HR, where he was responsible for managing entire facets of HR activities & processes. He has worked closely with the senior management team to attract leadership talent & design strategies aligned with business goals & objectives to create a performance-oriented work culture.',
    linkedin: '#',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    color: 'from-primary to-blue-600'
  },
  {
    name: 'Manoj Kumar',
    experience: '17+ Years of Experience',
    description: 'A seasoned and strategic HR leader with expertise in HR consulting, software and manufacturing sectors with start-ups and large companies. He is a passionate recruiter and has expertise in building sustainable high performance teams from scratch or early stage. Manoj leads the leadership hiring in PatronageHR.',
    linkedin: '#',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    color: 'from-secondary to-pink-600'
  },
  {
    name: 'Rajneesh Kumar',
    experience: '15+ Years of Experience',
    description: 'Brings extensive experience in talent acquisition for technology hiring in front line, lateral and leadership roles for India staffing. Led recruitment strategies for the successful sourcing of candidates. Collaborated with business leadership to assess needs, develop strategy, and implement work plans.',
    linkedin: '#',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    color: 'from-accent to-green-600'
  }
];

const Team = () => {
  return (
    <div className="bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20"></div>
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <HiSparkles className="text-7xl text-secondary animate-pulse-slow" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Our Leadership <span className="gradient-text">Team</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            The driving force behind our success
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Section */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full lg:w-5/12 relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-30 rounded-3xl blur-2xl transition-all duration-500`}></div>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                    />
                    {/* Overlay Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -bottom-6 left-6 right-6 bg-white dark:bg-dark-card rounded-2xl p-6 shadow-2xl"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${member.color} rounded-xl flex items-center justify-center mb-3`}>
                        <HiBriefcase className="text-white text-xl" />
                      </div>
                      <p className={`text-lg font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                        {member.experience}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-7/12 space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-4xl font-extrabold mb-2">{member.name}</h2>
                      <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
                    </div>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 bg-gradient-to-br ${member.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300`}
                    >
                      <FaLinkedin size={24} />
                    </motion.a>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Stats/Highlights */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`bg-gradient-to-br ${member.color} p-6 rounded-2xl text-white`}
                    >
                      <HiBriefcase className="text-3xl mb-2" />
                      <p className="text-sm opacity-90">Industry Expert</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`bg-gradient-to-br ${member.color} p-6 rounded-2xl text-white`}
                    >
                      <HiAcademicCap className="text-3xl mb-2" />
                      <p className="text-sm opacity-90">Thought Leader</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.5}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-32 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-16 text-center"
          >
            <div className="absolute inset-0 opacity-20">
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                }}
                className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
              ></motion.div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Want to Join Our Team?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                We're always looking for talented professionals who share our passion for excellence.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-6 bg-white text-primary rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Team;