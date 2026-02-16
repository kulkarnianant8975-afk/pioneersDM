import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, TrendingUp, Mail, Bell } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import './JobOpenings.css';

const JobOpenings = () => {
  // ========================================
  // CONFIGURATION: Set this to control visibility
  // ========================================
  const HIRING_ACTIVE = false;  // Set to false when no openings
  
  const jobs = [
    {
      title: 'Digital Marketing Executive',
      department: 'Marketing',
      location: 'Mumbai, India',
      type: 'Full-Time',
      salary: '₹3-5 LPA',
      experience: '1-3 years',
      description: 'Looking for creative minds to lead our digital marketing campaigns and drive growth.',
      color: '#0066FF'
    },
    {
      title: 'Social Media Manager',
      department: 'Content',
      location: 'Remote',
      type: 'Full-Time',
      salary: '₹4-6 LPA',
      experience: '2-4 years',
      description: 'Manage our social media presence and create engaging content that converts.',
      color: '#EC4899'
    },
    {
      title: 'Web Developer',
      department: 'Technology',
      location: 'Mumbai, India',
      type: 'Full-Time',
      salary: '₹5-8 LPA',
      experience: '2-5 years',
      description: 'Build stunning websites and web applications using modern technologies.',
      color: '#00D4AA'
    },
    {
      title: 'Graphic Designer',
      department: 'Design',
      location: 'Hybrid',
      type: 'Full-Time',
      salary: '₹3-5 LPA',
      experience: '1-3 years',
      description: 'Create eye-catching designs for brands and marketing campaigns.',
      color: '#F59E0B'
    }
  ];

  const scrollToHiring = () => {
    const element = document.getElementById('hiring');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNotifyMe = () => {
    scrollToContact();
    toast.success('Fill the contact form to get notified about future openings! 📧');
  };

  // ========================================
  // NO OPENINGS VIEW
  // ========================================
  if (!HIRING_ACTIVE || jobs.length === 0) {
    return (
      <section id="job-openings" className="job-openings section no-openings-section">
        <Toaster position="top-right" />
        
        <div className="container">
          <motion.div
            className="no-openings-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="no-openings-icon">
              <Briefcase size={64} />
            </div>

            <h2>No Current Openings</h2>
            <p className="no-openings-text">
              We're not actively hiring at the moment, but we're always looking for talented individuals! 
              Drop us your resume and we'll reach out when opportunities arise.
            </p>

            <div className="no-openings-actions">
              <button onClick={handleNotifyMe} className="btn btn-primary btn-large">
                <Bell size={20} />
                Notify Me About Openings
              </button>
              <button onClick={scrollToContact} className="btn btn-secondary btn-large">
                <Mail size={20} />
                Send Your Resume
              </button>
            </div>

            <div className="why-join-future">
              <h3>Why Join Pioneers Digital Marketing?</h3>
              <div className="future-benefits">
                <div className="future-benefit">
                  <div className="future-icon">✓</div>
                  <span>Competitive Salary & Benefits</span>
                </div>
                <div className="future-benefit">
                  <div className="future-icon">✓</div>
                  <span>Career Growth Opportunities</span>
                </div>
                <div className="future-benefit">
                  <div className="future-icon">✓</div>
                  <span>Flexible Work Environment</span>
                </div>
                <div className="future-benefit">
                  <div className="future-icon">✓</div>
                  <span>Learning & Development Programs</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ========================================
  // ACTIVE HIRING VIEW (With Job Cards)
  // ========================================
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
    <section id="job-openings" className="job-openings section">
      {/* Animated Background */}
      <div className="job-openings-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        {/* Banner Header */}
        <motion.div
          className="job-openings-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-badge">
            <TrendingUp size={20} />
            <span>We're Growing!</span>
          </div>
          <h2>Join Our Amazing Team</h2>
          <p>
            We're looking for talented individuals to help us revolutionize digital marketing. 
            Explore opportunities and grow your career with us!
          </p>
        </motion.div>

        {/* Job Cards Grid */}
        <motion.div
          className="jobs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="job-card"
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={scrollToHiring}
            >
              <div className="job-card-header" style={{ background: `${job.color}15` }}>
                <div className="job-icon" style={{ background: job.color }}>
                  <Briefcase size={24} />
                </div>
                <div className="job-badge" style={{ background: `${job.color}25`, color: job.color }}>
                  {job.department}
                </div>
              </div>

              <div className="job-card-body">
                <h3>{job.title}</h3>
                <p className="job-description">{job.description}</p>

                <div className="job-details">
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{job.type}</span>
                  </div>
                  <div className="detail-item">
                    <DollarSign size={16} />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="job-experience">
                  <strong>Experience:</strong> {job.experience}
                </div>
              </div>

              <div className="job-card-footer">
                <button className="apply-btn" style={{ background: job.color }}>
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="job-card-glow" style={{ background: `${job.color}20` }}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="view-all-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <button onClick={scrollToHiring} className="btn btn-primary btn-large">
            View All Openings & Apply
            <ArrowRight size={20} />
          </button>
          <p className="openings-count">
            🎯 <strong>{jobs.length}+ positions</strong> available across departments
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JobOpenings;