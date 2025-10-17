import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    // EmailJS configuration
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS Public Key

    // Template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'nanna.abhiram25@gmail.com',
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully! I will get back to you soon.');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');
        alert('Failed to send message. Please try again or email me directly at nanna.abhiram25@gmail.com');
      })
      .finally(() => {
        setSending(false);
      });
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
            disabled={sending}
            className={`w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 ${
              sending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="text-green-400 text-center mt-4">✓ Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center mt-4">✗ Failed to send. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
