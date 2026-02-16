import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, TrendingUp, Zap, Target } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Zap size={16} />
              <span>Performance-Driven Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We Grow Your <br />
              <span className="gradient-text">Business Online</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Performance-driven digital marketing solutions that deliver real results.
              We combine data, creativity, and technology to transform your online presence.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <button onClick={scrollToContact} className="btn btn-primary btn-large">
                Get Started
                <ArrowRight size={20} />
              </button>
              <a href="tel:8669880738" className="btn btn-outline btn-large">
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="stat">
                <div className="stat-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Target size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Zap size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-number">3x</div>
                  <div className="stat-label">Average ROI</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="hero-card hero-card-1">
              <div className="card-icon">
                <TrendingUp size={32} />
              </div>
              <div className="card-content">
                <div className="card-label">Monthly Growth</div>
                <div className="card-value">+142%</div>
              </div>
            </div>

            <div className="hero-card hero-card-2">
              <div className="card-icon">
                <Target size={32} />
              </div>
              <div className="card-content">
                <div className="card-label">Conversion Rate</div>
                <div className="card-value">8.4%</div>
              </div>
            </div>

            <div className="hero-card hero-card-3">
              <div className="card-icon">
                <Zap size={32} />
              </div>
              <div className="card-content">
                <div className="card-label">ROI Increase</div>
                <div className="card-value">3.2x</div>
              </div>
            </div>

            <div className="hero-circle hero-circle-1"></div>
            <div className="hero-circle hero-circle-2"></div>
            <div className="hero-circle hero-circle-3"></div>
          </motion.div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
