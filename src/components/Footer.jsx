// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-bg border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Patronage<span className="text-primary">HR</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A fast growing recruitment consulting firm based out of Gurgaon.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Contact Info</h3>
            <address className="mt-4 not-italic text-gray-600 dark:text-gray-400 space-y-2">
              <p>Unit No - 259, 2nd Floor, Tower – B1, Spaze Itech Park, Sector – 49, Gurgaon, Haryana 122018</p>
              <p><strong>Person:</strong> Umesh Saini</p>
              <p><strong>Mobile:</strong> +91 9811067755</p>
              <p><strong>Email:</strong> umesh@patronagehr.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Stay Connected</h3>
             <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-primary"><FaFacebookF size={22} /></a>
                <a href="#" className="text-gray-500 hover:text-primary"><FaInstagram size={22} /></a>
                <a href="#" className="text-gray-500 hover:text-primary"><FaYoutube size={22} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Patronage HR Solution Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;