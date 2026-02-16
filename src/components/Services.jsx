import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  TrendingUp, 
  Zap, 
  Palette, 
  CheckCircle,
  ArrowRight,
  PenTool,
  Brain
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers',
      features: [
        'Responsive websites',
        'eCommerce development',
        'SEO-friendly structure'
      ],
      color: '#0066FF'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Facebook & Instagram Ads',
      description: 'Targeted ad campaigns that generate qualified leads and sales',
      features: [
        'Lead generation campaigns',
        'Conversion ads',
        'Retargeting strategy'
      ],
      color: '#8B5CF6'
    },
    {
      icon: <Zap size={32} />,
      title: 'Marketing Automation',
      description: 'Streamline your marketing with intelligent automation systems',
      features: [
        'Email automation',
        'CRM integration',
        'Sales funnel automation'
      ],
      color: '#00D4AA'
    },
    {
      icon: <Palette size={32} />,
      title: 'Graphic Design',
      description: 'Eye-catching designs that communicate your brand message',
      features: [
        'Branding & Logo Design',
        'Social Media Creatives',
        'Ad Creatives & Banners'
      ],
      color: '#EC4899'
    },
    {
      icon: <PenTool size={32} />,
      title: 'Content Creation',
      description: 'Engaging content that captures attention and drives engagement',
      features: [
        'Blog posts & articles',
        'Video content production',
        'Social media content'
      ],
      color: '#F59E0B'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI Automation',
      description: 'Leverage cutting-edge AI to automate and optimize your workflows',
      features: [
        'AI-powered chatbots',
        'Process automation',
        'Intelligent analytics'
      ],
      color: '#10B981'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
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
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -12 }}
            >
              <div className="service-card-inner">
                <div 
                  className="service-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}dd, ${service.color})`
                  }}
                >
                  {service.icon}
                </div>

                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-link">
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </div>

                <div 
                  className="service-gradient"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;