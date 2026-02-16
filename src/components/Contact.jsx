import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const countryCodes = [
    { code: '+91', label: '🇮🇳 +91' },
    { code: '+1', label: '🇺🇸 +1' },
    { code: '+44', label: '🇬🇧 +44' },
    { code: '+61', label: '🇦🇺 +61' }
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    let errorMessage = '';

    if (name === 'phone') {
      updatedValue = value.replace(/\D/g, '').slice(0, 10);
      if (!updatedValue) errorMessage = 'Phone is required';
      else if (updatedValue.length !== 10) errorMessage = 'Enter valid 10-digit number';
    }

    if (name === 'email') {
      if (!value.trim()) errorMessage = 'Email is required';
      else if (!validateEmail(value)) errorMessage = 'Enter valid email';
    }

    if (name === 'name' && !value.trim()) errorMessage = 'Name is required';
    if (name === 'message' && !value.trim()) errorMessage = 'Message is required';

    setFormData(prev => ({
      ...prev,
      [name]: updatedValue
    }));

    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';

    if (!formData.phone.trim()) newErrors.phone = 'Phone required';
    else if (formData.phone.length !== 10) newErrors.phone = 'Invalid phone';

    if (!formData.message.trim()) newErrors.message = 'Message required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors");
      return;
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      message: formData.message
    };

    try {
      await emailjs.send(
        'service_pawbhjv',
        'template_rhadowk',
        templateParams,
        'OPf_qpcMtwb8J00UK'
      );

      toast.success("Message sent successfully 🎉");

      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact section">
      <Toaster position="top-right" />

      <div className="container">
        {/* FIXED: Changed from motion.div to regular div */}
        <div className="section-title">
          <h2>Get In Touch</h2>
          <p>Let's start a conversation about growing your business</p>
        </div>

        {/* Single Column Layout */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    style={{
                      width: '120px',
                      padding: '1rem',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      color: 'var(--charcoal)',
                      background: 'var(--off-white)',
                      border: '2px solid var(--light-gray)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary-blue)';
                      e.target.style.background = 'var(--white)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--light-gray)';
                      e.target.style.background = 'var(--off-white)';
                    }}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="10"
                    className={errors.phone ? 'error' : ''}
                    placeholder="10-digit number"
                    style={{ flex: 1 }}
                  />
                </div>
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large btn-submit"
                disabled={loading}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? "Sending..." : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918669880738"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
};

export default Contact;