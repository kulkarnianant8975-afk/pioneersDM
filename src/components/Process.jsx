import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Settings, TrendingUp } from 'lucide-react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      icon: <Lightbulb size={40} />,
      number: '01',
      title: 'Strategy',
      description: 'We analyze your business, competitors, and audience to create a winning strategy'
    },
    {
      icon: <Rocket size={40} />,
      number: '02',
      title: 'Execution',
      description: 'Our expert team launches campaigns with precision and creativity'
    },
    {
      icon: <Settings size={40} />,
      number: '03',
      title: 'Optimization',
      description: 'Continuous monitoring and refinement to maximize performance'
    },
    {
      icon: <TrendingUp size={40} />,
      number: '04',
      title: 'Growth',
      description: 'Measurable results that scale your business and boost ROI'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="process" className="process section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Process</h2>
          <p>
            A proven methodology that delivers consistent results
          </p>
        </motion.div>

        <motion.div
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
