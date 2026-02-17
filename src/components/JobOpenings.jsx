import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, ArrowRight, TrendingUp, 
  Mail, Phone, MapPin, CheckSquare, Bell
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import './JobOpenings.css';

const JobOpenings = () => {

  // =============================================
  // TOGGLE: true = show jobs | false = no openings
  // =============================================
  const HIRING_ACTIVE = true;

  const jobs = [
    { title: 'Sales Executive',    icon: '💼', color: '#F59E0B' },
    { title: 'Video Editor',       icon: '🎬', color: '#0066FF' },
    { title: 'Marketing Staff',    icon: '📢', color: '#00D4AA' },
    { title: 'Product Consultant', icon: '🧠', color: '#EC4899' }
  ];

  const scrollToHiring = () => {
    const element = document.getElementById('hiring');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // =============================================
  // NO OPENINGS VIEW
  // =============================================
  if (!HIRING_ACTIVE) {
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
              We're not actively hiring at the moment, but we're always looking 
              for talented individuals! Drop us your resume and we'll reach out 
              when opportunities arise.
            </p>
            <div className="no-openings-actions">
              <button
                onClick={() => {
                  scrollToContact();
                  toast.success("Fill the contact form — we'll notify you! 📧");
                }}
                className="btn btn-primary btn-large"
              >
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
                {[
                  'Competitive Salary & Benefits',
                  'Career Growth Opportunities',
                  'Flexible Work Environment',
                  'Learning & Development Programs'
                ].map((b, i) => (
                  <div className="future-benefit" key={i}>
                    <div className="future-icon">✓</div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // =============================================
  // ACTIVE HIRING VIEW
  // =============================================
  return (
    <section id="job-openings" className="job-openings section">
      <Toaster position="top-right" />

      <div className="job-openings-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hiring-layout">

          {/* ── LEFT: Dark Poster Card ── */}
          <motion.div
            className="hiring-poster-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="poster-header">
              <p className="poster-pre">WE ARE</p>
              <h2 className="poster-title">HIRING</h2>
              <p className="poster-sub">JOIN OUR TEAM</p>
            </div>

            {/* Open Positions */}
            <div className="poster-section">
              <div className="poster-badge">
                <CheckSquare size={18} />
                <span>Open Positions :</span>
              </div>
              <ul className="positions-list">
                {jobs.map((job, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <CheckSquare size={20} fill={job.color} color={job.color} />
                    <span>{job.title}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Send CV To */}
            <div className="poster-section">
              <div className="poster-badge">
                <Mail size={18} />
                <span>Send Your CV To :</span>
              </div>
              <div className="contact-details">
                <a href="mailto:pdmasolutions@gmail.com" className="contact-detail-item">
                  <div className="contact-detail-icon" style={{ background: '#F59E0B' }}>
                    <Mail size={16} />
                  </div>
                  <span>pdmasolutions@gmail.com</span>
                </a>
                <a href="tel:+918975165813" className="contact-detail-item">
                  <div className="contact-detail-icon" style={{ background: '#0066FF' }}>
                    <Phone size={16} />
                  </div>
                  <span>+91 8975165813</span>
                </a>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon" style={{ background: '#00D4AA' }}>
                    <MapPin size={16} />
                  </div>
                  <span>Basmat Road, Parbhani</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="poster-footer">
              <span>Full Time &nbsp;|&nbsp; Work From Office</span>
            </div>
          </motion.div>

          {/* ── RIGHT: Job Cards + CTA ── */}
          <motion.div
            className="hiring-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="hiring-right-header">
              <div className="header-badge-pill">
                <TrendingUp size={16} />
                <span>We're Growing Fast!</span>
              </div>
              <h2>Shape Your Career With Us</h2>
              <p>
                Join the Pioneers Digital Marketing team and be part of something extraordinary.
                We're looking for passionate, driven individuals who want to make an impact 
                in the digital world.
              </p>
            </div>

            {/* Job Mini Cards */}
            <div className="job-mini-cards">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  className="job-mini-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8 }}
                  onClick={scrollToHiring}
                >
                  <div
                    className="mini-card-icon"
                    style={{ background: `${job.color}20`, color: job.color }}
                  >
                    <span className="mini-icon-emoji">{job.icon}</span>
                  </div>
                  <div className="mini-card-content">
                    <h4>{job.title}</h4>
                    <p>Full Time &nbsp;•&nbsp; Work From Office &nbsp;•&nbsp; Parbhani</p>
                  </div>
                  <div className="mini-card-arrow" style={{ color: job.color }}>
                    <ArrowRight size={20} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Apply Now Button */}
            <motion.button
              className="apply-now-btn"
              onClick={scrollToHiring}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              APPLY NOW
              <ArrowRight size={22} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;