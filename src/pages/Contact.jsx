// src/pages/Contact.jsx
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  // IMPORTANT: Apne Google Form ka link yahan paste karein (viewform ko formResponse se replace karke)
  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  return (
    <div className="bg-white dark:bg-dark-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Have a question? We'd love to hear from you.</p>
        </div>

        <AnimatedSection>
          <div className="mt-12 max-w-3xl mx-auto bg-gray-50 dark:bg-dark-card p-8 rounded-xl shadow-lg">
             <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Submit Enquiry</h2>
              <form 
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="_blank" // Form submission ko new tab me open karega
              >
                  {/* NOTE: 'name' attribute me aapko apne Google Form ke entry ID daalne honge */}
                  {/* Example: name="entry.123456789" */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" name="entry.YOUR_ID" placeholder="Name" required className="input-style" />
                      <input type="email" name="entry.YOUR_ID" placeholder="Email" required className="input-style" />
                      <input type="tel" name="entry.YOUR_ID" placeholder="Phone" required className="input-style" />
                      <input type="text" name="entry.YOUR_ID" placeholder="Postcode" className="input-style" />
                      <input type="text" name="entry.YOUR_ID" placeholder="City" className="input-style" />
                      <input type="text" name="entry.YOUR_ID" placeholder="State" className="input-style" />
                  </div>
                  <div className="mt-6">
                      <textarea name="entry.YOUR_ID" placeholder="Details of enquiry" rows="5" required className="input-style"></textarea>
                  </div>
                  <div className="mt-6 text-center">
                      <button type="submit" className="w-full md:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
                          Submit
                      </button>
                  </div>
              </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};
export default Contact;

// Add this CSS to your src/index.css file for form input styling
/*
  .input-style {
    @apply w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:text-white;
  }
*/