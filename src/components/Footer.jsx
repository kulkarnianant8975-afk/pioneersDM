import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    'Web Development',
    'Facebook & Instagram Ads',
    'Marketing Automation',
    'Graphic Design',
    'Content Creation',
    'AI Automation'
  ];

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="footer-logo">
                <div className="logo-icon">P</div>
                <div className="logo-text">
                  <span className="logo-title">Pioneers</span>
                  <span className="logo-subtitle">Digital Marketing</span>
                </div>
              </div>
              <p className="footer-description">
                Performance-driven digital marketing solutions that deliver real results 
                and transform your online presence.
              </p>
              <div className="footer-social">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-link"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-link"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-link"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4>Services</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <button onClick={() => scrollToSection('services')}>
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button onClick={() => scrollToSection(link.id)}>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <Phone size={18} />
                  <a href="tel:8669880738">8669880738</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:pdmasolutions@gmail.com">
                    pdmasolutions@gmail.com
                  </a>
                </li>
              </ul>
              <div className="footer-cta">
                <a href="tel:8669880738" className="btn btn-primary">
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Pioneers Digital Marketing. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <button onClick={() => scrollToSection('hero')}>Privacy Policy</button>
              <button onClick={() => scrollToSection('hero')}>Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
