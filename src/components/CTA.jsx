import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="cta-bg">
        <div className="cta-gradient"></div>
        <div className="cta-pattern"></div>
      </div>

      <div className="container">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to Scale Your Business?
          </motion.h2>

          <motion.p
            className="cta-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Let's discuss how we can help you achieve your digital marketing goals
          </motion.p>

          <motion.div
            className="cta-phone"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Phone size={32} />
            <a href="tel:8669880738" className="cta-phone-number">
              8669880738
            </a>
          </motion.div>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="tel:8669880738" className="btn btn-outline btn-large">
              <Phone size={20} />
              Call Now
            </a>
            <a 
              href="https://wa.me/918669880738" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-large"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="cta-features"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="cta-feature">
              <ArrowRight size={18} />
              <span>Free Consultation</span>
            </div>
            <div className="cta-feature">
              <ArrowRight size={18} />
              <span>Custom Strategy</span>
            </div>
            <div className="cta-feature">
              <ArrowRight size={18} />
              <span>No Obligation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
