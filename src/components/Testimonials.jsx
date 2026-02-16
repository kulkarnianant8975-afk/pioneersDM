import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      role: 'Founder & CEO',
      rating: 5,
      text: 'Working with Pioneers Digital Marketing transformed our online presence completely. Their Facebook ads campaign generated 300+ qualified leads in just 2 months. The ROI was exceptional!',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      company: 'Bloom Fashion',
      role: 'Marketing Director',
      rating: 5,
      text: 'The team at Pioneers is incredibly professional and results-driven. They redesigned our website and implemented SEO strategies that doubled our organic traffic within 3 months. Highly recommended!',
      image: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      company: 'FitLife Wellness',
      role: 'Business Owner',
      rating: 5,
      text: 'Outstanding service! Their marketing automation setup saved us countless hours and improved our customer engagement significantly. The team is responsive, creative, and truly understands digital marketing.',
      image: '👨‍💻'
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>Client Success Stories</h2>
          <p>
            See what our clients say about their experience working with us
          </p>
        </div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="quote-icon">
                <Quote size={32} />
              </div>

              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>{testimonial.image}</span>
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;