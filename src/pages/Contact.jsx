// src/pages/Contact.jsx
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    city: '',
    state: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Our Office',
      content: 'Unit No - 259, 2nd Floor, Tower – B1, Spaze Itech Park, Sector – 49, Gurgaon, Haryana 122018',
      color: 'from-primary to-blue-600'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      content: '+91 9811067755',
      link: 'tel:+919811067755',
      color: 'from-secondary to-pink-600'
    },
    {
      icon: HiMail,
      title: 'Email',
      content: 'umesh@patronagehr.com',
      link: 'mailto:umesh@patronagehr.com',
      color: 'from-accent to-green-600'
    },
    {
      icon: HiClock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-dark-bg text-gray-800 dark:text-gray-200 pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20"></div>
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <FaPaperPlane className="text-7xl text-accent animate-bounce-slow" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact Info Cards */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, translateY: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500`}></div>
                <div className="relative bg-white dark:bg-dark-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 dark:border-gray-800 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <info.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className={`text-gray-600 dark:text-gray-400 hover:text-primary transition-colors break-words`}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Form Section */}
        <AnimatedSection delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white dark:bg-dark-card rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-800">
                <h2 className="text-3xl font-extrabold mb-8">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-semibold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-style"
                        placeholder="Your Name"
                      />
                    </motion.div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-style"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-style"
                        placeholder="+91 98110 67755"
                      />
                    </motion.div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-semibold mb-2">Postcode</label>
                      <input
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="input-style"
                        placeholder="122018"
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-semibold mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="input-style"
                        placeholder="Gurgaon"
                      />
                    </motion.div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-semibold mb-2">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="input-style"
                        placeholder="Haryana"
                      />
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="input-style resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold py-5 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <span className="text-lg">Send Message</span>
                    <FaPaperPlane className="text-xl" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative lg:sticky lg:top-24"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white dark:bg-dark-card rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                <div className="p-6 bg-gradient-to-r from-primary to-secondary">
                  <h3 className="text-2xl font-bold text-white">Find Us Here</h3>
                </div>
                
                {/* Google Map Embed */}
                <div className="h-96 lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0543!2d77.0469!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229b7c3e3f7d%3A0x5d3f3e3e3e3e3e3e!2sSpaze%20iTech%20Park!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>

                {/* Quick Contact Info */}
                <div className="p-6 space-y-4 bg-gray-50 dark:bg-dark-bg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <HiLocationMarker className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">Office Location</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Sector 49, Gurgaon</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Additional Info */}
        <AnimatedSection delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 dark:from-dark-card dark:to-dark-bg p-12 text-center mt-20"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Looking for Top Talent?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you build your dream team with the right talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+919811067755"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <HiPhone className="text-xl" />
                  <span>Call Us Now</span>
                </motion.a>
                <motion.a
                  href="mailto:umesh@patronagehr.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <HiMail className="text-xl" />
                  <span>Email Us</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;