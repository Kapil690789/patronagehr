// src/pages/Team.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Umesh Saini',
    experience: '15+ Years of Experience',
    description: 'Prior to PatronageHR, he was associated with Fastfox.com as Associate Vice President-HR, where he was responsible for managing entire facets of HR activities & processes. He has worked closely with the senior management team to attract leadership talent & design strategies aligned with business goals & objectives to create a performance-oriented work culture.',
    linkedin: '#',
  },
  {
    name: 'Manoj Kumar',
    experience: '17+ Years of Experience',
    description: 'A seasoned and strategic HR leader with expertise in HR consulting, software and manufacturing sectors with start-ups and large companies. He is a passionate recruiter and has expertise in building sustainable high performance teams from scratch or early stage. Manoj leads the leadership hiring in PatronageHR.',
    linkedin: '#',
  },
  {
    name: 'Rajneesh Kumar',
    experience: '15+ Years of Experience',
    description: 'Brings extensive experience in talent acquisition for technology hiring in front line, lateral and leadership roles for India staffing. Led recruitment strategies for the successful sourcing of candidates. Collaborated with business leadership to assess needs, develop strategy, and implement work plans.',
    linkedin: '#',
  }
];

const Team = () => {
  return (
    <div className="bg-gray-50 dark:bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Our Leadership Team</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">The driving force behind our success.</p>
        </div>
        
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{member.name}</h2>
                    <p className="text-primary font-semibold mt-1">{member.experience}</p>
                  </div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
                    <FaLinkedin size={28} />
                  </a>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;