import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, BarChart, Users, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: 'Result-Oriented Strategies',
      description: 'We focus on measurable outcomes that drive your business growth'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Data-Driven Campaigns',
      description: 'Every decision backed by analytics and performance metrics'
    },
    {
      icon: <Users size={24} />,
      title: 'Creative & Innovative Team',
      description: 'Expert marketers, designers, and strategists working for you'
    },
    {
      icon: <Award size={24} />,
      title: 'Transparent Reporting',
      description: 'Clear insights and regular updates on campaign performance'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2>About Pioneers Digital Marketing</h2>
          <p>
            Your trusted partner in digital transformation and business growth
          </p>
        </div>

        <div className="about-content">
          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-intro">
              <p className="about-lead">
                At <strong>Pioneers Digital Marketing</strong>, we help businesses unlock their 
                full potential through innovative digital marketing solutions. Our mission is to 
                deliver exceptional results that transform your online presence and drive sustainable growth.
              </p>
              <p>
                We combine cutting-edge technology, creative excellence, and data-driven strategies 
                to create campaigns that resonate with your audience and achieve your business objectives. 
                From startups to established enterprises, we've helped hundreds of businesses scale their 
                digital footprint and maximize ROI.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <CheckCircle className="highlight-icon" size={20} />
                <span>5+ Years of Excellence in Digital Marketing</span>
              </div>
              <div className="highlight-item">
                <CheckCircle className="highlight-icon" size={20} />
                <span>200+ Successful Projects Delivered</span>
              </div>
              <div className="highlight-item">
                <CheckCircle className="highlight-icon" size={20} />
                <span>Expert Team of Marketing Professionals</span>
              </div>
              <div className="highlight-item">
                <CheckCircle className="highlight-icon" size={20} />
                <span>Proven Track Record of Client Success</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-features"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;