import React, { useState } from 'react';

export default function ContactSimple() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default email client
    window.location.href = `mailto:nanna.abhiram25@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative z-10 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Let's Work Together</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleFormChange}
              required
              className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleFormChange}
              required
              className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleFormChange}
              required
              className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/15 transition-all duration-300 resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>

          <p className="text-gray-400 text-center text-sm">
            Or email directly: 
            <a href="mailto:nanna.abhiram25@gmail.com" className="text-blue-400 hover:text-blue-300 ml-1">
              nanna.abhiram25@gmail.com
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
