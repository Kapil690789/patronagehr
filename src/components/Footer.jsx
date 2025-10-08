// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', color: 'hover:bg-blue-600', name: 'Facebook' },
    { icon: <FaInstagram />, url: '#', color: 'hover:bg-pink-600', name: 'Instagram' },
    { icon: <FaLinkedinIn />, url: '#', color: 'hover:bg-blue-700', name: 'LinkedIn' },
    { icon: <FaYoutube />, url: '#', color: 'hover:bg-red-600', name: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-2xl">P</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-white">
                Patronage<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HR</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A fast growing recruitment consulting firm shaping software companies with the right talent for today and tomorrow.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/50 text-gray-300 ${social.color} transition-all duration-300 shadow-lg`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact Information
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" size={18} />
                <address className="not-italic">
                  Unit No - 259, 2nd Floor, Tower – B1, Spaze Itech Park, Sector – 49, Gurgaon, Haryana 122018
                </address>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaPhone className="text-blue-500 flex-shrink-0" size={16} />
                <div>
                  <p className="font-semibold text-white">Umesh Saini</p>
                  <a href="tel:+919811067755" className="hover:underline">+91 9811067755</a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaEnvelope className="text-blue-500 flex-shrink-0" size={16} />
                <a href="mailto:umesh@patronagehr.com" className="hover:underline">
                  umesh@patronagehr.com
                </a>
              </motion.div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-3">Subscribe to Updates</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Patronage HR Solution Pvt Ltd</span>. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <motion.a
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="mt-8 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </footer>
  );
};

export default Footer;