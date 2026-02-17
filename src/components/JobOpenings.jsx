// import React, { useState } from "react";
// import "./JobOpenings.css";

// const JobOpenings = () => {
//   const [selectedJob, setSelectedJob] = useState(null);

//   // 🔥 Scroll to Hiring Section
//   const scrollToHiring = () => {
//     const hiringSection = document.getElementById("hiring");
//     if (hiringSection) {
//       hiringSection.scrollIntoView({ behavior: "smooth" });
//     }
//     setSelectedJob(null); // Close modal after click
//   };

//   const jobs = [
//     {
//       title: "Sales Executive (Hybrid – Inbound + Field Sales)",
//       location: "Parbhani (Work from Office + Field)",
//       type: "Full-Time",
//       description: `
// About the Role
// We are looking for a result-driven Sales Executive who can handle both inbound leads and field sales. Your job is to convert inquiries into clients and build strong relationships with local businesses.

// Key Responsibilities
// Handle inbound leads from Meta Ads, WhatsApp & website
// Call and qualify potential clients
// Schedule meetings and close deals
// Visit businesses for field sales and presentations
// Understand client needs and recommend suitable marketing services
// Maintain daily follow-ups in CRM
// Achieve monthly revenue targets
// Build long-term client relationships

// Requirements
// Strong communication & negotiation skills
// Confidence in meeting business owners
// Basic understanding of digital marketing (preferred)
// Ability to work with targets
// Two-wheeler preferred for field visits

// What We Offer
// Fixed salary + performance-based incentives
// Real sales exposure in digital marketing industry
// Fast growth opportunity
// Training & support
// `
//     },
//     {
//       title: "Marketing Executive (Field Marketing)",
//       location: "Parbhani",
//       type: "Full-Time (Field Based)",
//       description: `
// About the Role
// We are hiring a proactive Marketing Executive responsible for generating leads and building brand visibility in the local market.

// Key Responsibilities
// Visit local businesses and generate leads
// Explain our services (Meta Ads, WhatsApp Marketing, Automation, Content Creation, etc.)
// Distribute brochures and collect contact details
// Build partnerships with local brands
// Coordinate with sales team for closures
// Conduct small business awareness visits
// Submit daily field reports

// Requirements
// Strong communication skills
// Confident personality
// Self-motivated & energetic
// Ability to approach business owners
// Two-wheeler preferred

// What We Offer
// Fixed salary + incentives
// Direct market exposure
// Skill development in real-world marketing
// Career growth in digital marketing industry
// `
//     },
//     {
//       title: "Video Editor (Full-Time – Work From Office)",
//       location: "Parbhani",
//       type: "Full-Time",
//       description: `
// About the Role
// We are looking for a creative Video Editor who can create engaging content for social media, ads, and client projects.

// Key Responsibilities
// Edit reels, ads, promotional videos
// Add captions, transitions, sound effects
// Work closely with marketing & content team
// Deliver high-quality edits within deadlines
// Understand trends and create attention-grabbing videos
// Manage video files and content library

// Requirements
// Proficiency in Premiere Pro / CapCut / After Effects
// Strong sense of storytelling & pacing
// Basic knowledge of social media trends
// Creativity and attention to detail
// Ability to handle multiple projects

// What We Offer
// Stable full-time role
// Opportunity to work on multiple brands
// Creative freedom
// Skill growth in performance marketing content
// `
//     },
//     {
//       title: "Product Consultant (Client Requirement Specialist)",
//       location: "Parbhani (Work from Office)",
//       type: "Full-Time",
//       description: `
// About the Role
// We are looking for a Product Consultant who can understand business problems and suggest the right digital marketing solutions.

// This is not pure sales — this role requires understanding customer requirements and explaining how our services can help grow their business.

// Key Responsibilities
// Meet clients and understand their business goals
// Identify problems in their marketing
// Suggest suitable services (Meta Ads, Automation, Content, etc.)
// Explain ROI and long-term benefits
// Prepare customized service recommendations
// Support sales team in closing deals
// Build long-term trust with clients

// Requirements
// Strong analytical and communication skills
// Ability to understand business models
// Basic understanding of digital marketing services
// Presentation skills
// Professional attitude

// What We Offer
// Growth into Business Consultant role
// Exposure to multiple industries
// Competitive salary
// Learning environment
// `
//     }
//   ];

//   return (
//     <section className="job-openings">
//       <div className="container">
//         <div className="hiring-layout">

//           {/* LEFT SIDE (UNCHANGED) */}
//           <div className="hiring-poster-card">
//             <div className="poster-header">
//               <p className="poster-pre">WE ARE</p>
//               <h1 className="poster-title">HIRING</h1>
//               <p className="poster-sub">JOIN OUR TEAM</p>
//             </div>

//             <div className="poster-section">
//               <div className="poster-badge">Open Positions</div>
//               <ul className="positions-list">
//                 {jobs.map((job, index) => (
//                   <li key={index}>{job.title}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="hiring-right">
//             <div className="hiring-right-header">
//               <h2>Current Openings</h2>
//               <p>Click on any position to view full job details.</p>
//             </div>

//             <div className="job-mini-cards">
//               {jobs.map((job, index) => (
//                 <div
//                   key={index}
//                   className="job-mini-card"
//                   onClick={() => setSelectedJob(job)}
//                 >
//                   <div className="mini-card-content">
//                     <h4>{job.title}</h4>
//                     <p>{job.location}</p>
//                   </div>
//                 </div>
                
//               ))}
//             </div>

//             {/* MAIN APPLY BUTTON */}
//             <button className="apply-now-btn" onClick={scrollToHiring}>
//               Apply Now
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* VIEW JD MODAL */}
//       {selectedJob && (
//         <div
//           className="job-modal-overlay"
//           onClick={() => setSelectedJob(null)}
//         >
//           <div
//             className="job-modal"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="job-modal-close"
//               onClick={() => setSelectedJob(null)}
//             >
//               ×
//             </button>

//             <h2>{selectedJob.title}</h2>
//             <p><strong>Location:</strong> {selectedJob.location}</p>
//             <p><strong>Job Type:</strong> {selectedJob.type}</p>

//             <div className="job-description-text">
//               {selectedJob.description}
//             </div>

//             {/* FIXED APPLY BUTTON */}
//             <button className="apply-now-btn" onClick={scrollToHiring}>
//               Apply Now
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default JobOpenings;

import { motion } from 'framer-motion';
import { 
  Briefcase, ArrowRight, TrendingUp, 
  Mail, Phone, MapPin, CheckSquare, Bell
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import './JobOpenings.css';
import { useState } from 'react';

const JobOpenings = () => {

const [selectedJob, setSelectedJob] = useState(null);
  // =============================================
  // TOGGLE: true = show jobs | false = no openings
  // =============================================
  const HIRING_ACTIVE = true;

  const jobDetails = [
    {
      title: "Sales Executive (Hybrid – Inbound + Field Sales)",
      location: "Parbhani (Work from Office + Field)",
      type: "Full-Time",
      description: `
About the Role
We are looking for a result-driven Sales Executive who can handle both inbound leads and field sales. Your job is to convert inquiries into clients and build strong relationships with local businesses.

Key Responsibilities
Handle inbound leads from Meta Ads, WhatsApp & website
Call and qualify potential clients
Schedule meetings and close deals
Visit businesses for field sales and presentations
Understand client needs and recommend suitable marketing services
Maintain daily follow-ups in CRM
Achieve monthly revenue targets
Build long-term client relationships

Requirements
Strong communication & negotiation skills
Confidence in meeting business owners
Basic understanding of digital marketing (preferred)
Ability to work with targets
Two-wheeler preferred for field visits

What We Offer
Fixed salary + performance-based incentives
Real sales exposure in digital marketing industry
Fast growth opportunity
Training & support
`
    },
    {
      title: "Marketing Executive (Field Marketing)",
      location: "Parbhani",
      type: "Full-Time (Field Based)",
      description: `
About the Role
We are hiring a proactive Marketing Executive responsible for generating leads and building brand visibility in the local market.

Key Responsibilities
Visit local businesses and generate leads
Explain our services (Meta Ads, WhatsApp Marketing, Automation, Content Creation, etc.)
Distribute brochures and collect contact details
Build partnerships with local brands
Coordinate with sales team for closures
Conduct small business awareness visits
Submit daily field reports

Requirements
Strong communication skills
Confident personality
Self-motivated & energetic
Ability to approach business owners
Two-wheeler preferred

What We Offer
Fixed salary + incentives
Direct market exposure
Skill development in real-world marketing
Career growth in digital marketing industry
`
    },
    {
      title: "Video Editor (Full-Time – Work From Office)",
      location: "Parbhani",
      type: "Full-Time",
      description: `
About the Role
We are looking for a creative Video Editor who can create engaging content for social media, ads, and client projects.

Key Responsibilities
Edit reels, ads, promotional videos
Add captions, transitions, sound effects
Work closely with marketing & content team
Deliver high-quality edits within deadlines
Understand trends and create attention-grabbing videos
Manage video files and content library

Requirements
Proficiency in Premiere Pro / CapCut / After Effects
Strong sense of storytelling & pacing
Basic knowledge of social media trends
Creativity and attention to detail
Ability to handle multiple projects

What We Offer
Stable full-time role
Opportunity to work on multiple brands
Creative freedom
Skill growth in performance marketing content
`
    },
    {
      title: "Product Consultant (Client Requirement Specialist)",
      location: "Parbhani (Work from Office)",
      type: "Full-Time",
      description: `
About the Role
We are looking for a Product Consultant who can understand business problems and suggest the right digital marketing solutions.

This is not pure sales — this role requires understanding customer requirements and explaining how our services can help grow their business.

Key Responsibilities
Meet clients and understand their business goals
Identify problems in their marketing
Suggest suitable services (Meta Ads, Automation, Content, etc.)
Explain ROI and long-term benefits
Prepare customized service recommendations
Support sales team in closing deals
Build long-term trust with clients

Requirements
Strong analytical and communication skills
Ability to understand business models
Basic understanding of digital marketing services
Presentation skills
Professional attitude

What We Offer
Growth into Business Consultant role
Exposure to multiple industries
Competitive salary
Learning environment
`
    }
  ];

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
                  onClick={() => {const fullJob=jobDetails.find(j=>j.id==job.id);
                  setSelectedJob(fullJob);}}
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


                {selectedJob && (
        <div
          className="job-modal-overlay"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="job-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="job-modal-close"
              onClick={() => setSelectedJob(null)}
            >
              ×
            </button>

            <h2>{selectedJob.title}</h2>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Job Type:</strong> {selectedJob.type}</p>

            <div className="job-description-text">
              {selectedJob.description}
            </div>

            {/* FIXED APPLY BUTTON */}
            <button className="apply-now-btn" onClick={() =>{setSelectedJob(null);scrollToHiring()}} >
              Apply Now
            </button>
          </div>
        </div>
      )}
//             {/* Apply Now Button */}
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