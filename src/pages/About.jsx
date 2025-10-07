// src/pages/About.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <div className="bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-4">About Our Company</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Your Partner in Growth and Talent Acquisition</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800" alt="Team Discussion" className="rounded-lg shadow-2xl"/>
                </div>
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                    <p>
                        <strong>PatronageHR</strong> is a fast growing recruitment consulting firm based out of Gurgaon. We are shaping the software product based companies with a talent pool for today and future. We are backed by experienced and vibrant youngsters with proven track records.
                    </p>
                    <p>
                        We have strong connections with domain experts, market leaders and advisors. It helps us to make company wide alignments.
                    </p>
                    <p>
                        At PatronageHR, we are here to assist organisations in deciding the right talent for their growth and execute their business plans timely. Our core focus is on <strong>quality rather than quantity</strong> with competent executions.
                    </p>
                </div>
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;