import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, Phone, Mail, ArrowRight, TrendingUp, Zap, Target,
  CheckCircle, Code, Palette, Lightbulb, Rocket, Settings,
  Star, Quote, MessageCircle, Send, Facebook, Instagram, Linkedin,
  PenTool, Brain
} from 'lucide-react';

// ============================================
// HEADER COMPONENT
// ============================================
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-icon">P</div>
            <div className="logo-text">
              <span className="logo-title">Pioneers</span>
              <span className="logo-subtitle">Digital Marketing</span>
            </div>
          </motion.div>

          <nav className="nav-desktop">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <motion.a
            href="tel:8669880738"
            className="header-cta btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Phone size={18} />
            <span className="header-cta-text">Call Now</span>
          </motion.a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <motion.nav
          className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link-mobile"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{ delay: index * 0.05 }}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.a
            href="tel:8669880738"
            className="nav-link-mobile cta-mobile"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : -20
            }}
            transition={{ delay: navItems.length * 0.05 }}
          >
            <Phone size={18} />
            Call: 8669880738
          </motion.a>
        </motion.nav>
      </div>
    </motion.header>
  );
};

// ============================================
// HERO COMPONENT
// ============================================
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
                <div className="stat-icon"><TrendingUp size={24} /></div>
                <div className="stat-content">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon"><Target size={24} /></div>
                <div className="stat-content">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon"><Zap size={24} /></div>
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
              <div className="card-icon"><TrendingUp size={32} /></div>
              <div className="card-content">
                <div className="card-label">Monthly Growth</div>
                <div className="card-value">+142%</div>
              </div>
            </div>

            <div className="hero-card hero-card-2">
              <div className="card-icon"><Target size={32} /></div>
              <div className="card-content">
                <div className="card-label">Conversion Rate</div>
                <div className="card-value">8.4%</div>
              </div>
            </div>

            <div className="hero-card hero-card-3">
              <div className="card-icon"><Zap size={32} /></div>
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

// ============================================
// ABOUT COMPONENT
// ============================================
const About = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: 'Result-Oriented Strategies',
      description: 'We focus on measurable outcomes that drive your business growth'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Data-Driven Campaigns',
      description: 'Every decision backed by analytics and performance metrics'
    },
    {
      icon: <Zap size={24} />,
      title: 'Creative & Innovative Team',
      description: 'Expert marketers, designers, and strategists working for you'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Transparent Reporting',
      description: 'Clear insights and regular updates on campaign performance'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Pioneers Digital Marketing</h2>
          <p>Your trusted partner in digital transformation and business growth</p>
        </motion.div>

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

          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SERVICES COMPONENT
// ============================================
const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers',
      features: ['Responsive websites', 'eCommerce development', 'SEO-friendly structure'],
      color: '#0066FF'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Facebook & Instagram Ads',
      description: 'Targeted ad campaigns that generate qualified leads and sales',
      features: ['Lead generation campaigns', 'Conversion ads', 'Retargeting strategy'],
      color: '#8B5CF6'
    },
    {
      icon: <Zap size={32} />,
      title: 'Marketing Automation',
      description: 'Streamline your marketing with intelligent automation systems',
      features: ['Email automation', 'CRM integration', 'Sales funnel automation'],
      color: '#00D4AA'
    },
    {
      icon: <Palette size={32} />,
      title: 'Graphic Design',
      description: 'Eye-catching designs that communicate your brand message',
      features: ['Branding & Logo Design', 'Social Media Creatives', 'Ad Creatives & Banners'],
      color: '#EC4899'
    },
    {
      icon: <PenTool size={32} />,
      title: 'Content Creation',
      description: 'Engaging content that captures attention and drives engagement',
      features: ['Blog posts & articles', 'Video content production', 'Social media content'],
      color: '#F59E0B'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI Automation',
      description: 'Leverage cutting-edge AI to automate and optimize your workflows',
      features: ['AI-powered chatbots', 'Process automation', 'Intelligent analytics'],
      color: '#10B981'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive digital marketing solutions tailored to your business goals</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -12 }}
            >
              <div className="service-card-inner">
                <div 
                  className="service-icon"
                  style={{ background: `linear-gradient(135deg, ${service.color}dd, ${service.color})` }}
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
                  style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROCESS COMPONENT
// ============================================
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
          <p>A proven methodology that delivers consistent results</p>
        </motion.div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS COMPONENT
// ============================================
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

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Client Success Stories</h2>
          <p>See what our clients say about their experience working with us</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="quote-icon"><Quote size={32} /></div>

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
        </div>
      </div>
    </section>
  );
};

// ============================================
// CTA COMPONENT
// ============================================
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
            <a href="tel:8669880738" className="cta-phone-number">8669880738</a>
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
            <a href="https://wa.me/918669880738" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-large">
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

// ============================================
// CONTACT COMPONENT
// ============================================
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Let's start a conversation about growing your business</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-intro">
              Ready to transform your digital presence? Reach out to us and let's 
              discuss how we can help you achieve your business goals.
            </p>

            <div className="contact-methods">
              <a href="tel:8669880738" className="contact-method">
                <div className="method-icon"><Phone size={24} /></div>
                <div className="method-content">
                  <div className="method-label">Phone</div>
                  <div className="method-value">8669880738</div>
                </div>
              </a>

              <a href="mailto:pdmasolutions@gmail.com" className="contact-method">
                <div className="method-icon"><Mail size={24} /></div>
                <div className="method-content">
                  <div className="method-label">Email</div>
                  <div className="method-value">pdmasolutions@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/918669880738" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon"><MessageCircle size={24} /></div>
                <div className="method-content">
                  <div className="method-label">WhatsApp</div>
                  <div className="method-value">+91 8669880738</div>
                </div>
              </a>
            </div>

            <div className="contact-cta-box">
              <h4>Prefer to call?</h4>
              <p>Our team is ready to help you</p>
              <a href="tel:8669880738" className="btn btn-primary">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="form-success">
                <CheckCircle size={64} />
                <h3>Thank You!</h3>
                <p>We've received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Enter your name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="10-digit number"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your project..."
                    rows="5"
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-large btn-submit">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

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

// ============================================
// FOOTER COMPONENT
// ============================================
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = ['Web Development', 'Facebook & Instagram Ads', 'Marketing Automation', 'Graphic Design', 'Content Creation', 'AI Automation'];
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
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

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
                    <button onClick={() => scrollToSection('services')}>{service}</button>
                  </li>
                ))}
              </ul>
            </motion.div>

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
                    <button onClick={() => scrollToSection(link.id)}>{link.name}</button>
                  </li>
                ))}
              </ul>
            </motion.div>

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
                  <a href="mailto:pdmasolutions@gmail.com">pdmasolutions@gmail.com</a>
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

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

