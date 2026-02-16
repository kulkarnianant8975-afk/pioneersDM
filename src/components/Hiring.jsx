import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Upload, Send, FileText, X } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import './Hiring.css';

const Hiring = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const formRef = useRef(null);

  const positions = [
    'Digital Marketing Executive',
    'Social Media Manager',
    'Content Writer',
    'Graphic Designer',
    'Web Developer',
    'SEO Specialist',
    'Video Editor',
    'Business Development Manager'
  ];

  const experienceLevels = [
    'Fresher (0-1 years)',
    'Junior (1-3 years)',
    'Mid-Level (3-5 years)',
    'Senior (5+ years)'
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    if (name === 'phone') {
      const phoneValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, phone: phoneValue }));
      if (!phoneValue) errorMessage = 'Phone is required';
      else if (phoneValue.length !== 10) errorMessage = 'Enter valid 10-digit number';
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));

      if (name === 'name' && !value.trim()) errorMessage = 'Name is required';
      if (name === 'email') {
        if (!value.trim()) errorMessage = 'Email is required';
        else if (!validateEmail(value)) errorMessage = 'Enter valid email';
      }
      if (name === 'position' && !value) errorMessage = 'Please select a position';
      if (name === 'experience' && !value) errorMessage = 'Please select experience';
    }

    setErrors(prev => ({ ...prev, [name]: errorMessage }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Validate file type
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: 'Only PDF, DOC, or DOCX files allowed' }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }));
        return;
      }

      setResumeFile(file);
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

 const removeFile = () => {
    setResumeFile(null);
    const fileInput = document.querySelector('input[name="attachment"]');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone required';
    else if (formData.phone.length !== 10) newErrors.phone = 'Invalid phone';
    if (!formData.position) newErrors.position = 'Please select a position';
    if (!formData.experience) newErrors.experience = 'Please select experience';
    if (!resumeFile) newErrors.resume = 'Please upload your resume';

    return newErrors;
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors");
      return;
    }

    setLoading(true);

    try {
      // Create FormData from the actual form element
      const formDataToSend = new FormData(formRef.current);
      
      // Add FormSubmit settings
      formDataToSend.append('_subject', `New Job Application - ${formData.position}`);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      // IMPORTANT: Replace with YOUR email
      const response = await fetch('https://formsubmit.co/pdmasolutions@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        toast.success("Application submitted successfully! 🎉");

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: ''
        });
        setResumeFile(null);
        formRef.current.reset();
        
      } else {
        toast.error("Failed to submit application ❌");
      }

    } catch (error) {
      console.error(error);
      toast.error("Failed to submit application ❌");
    }

    setLoading(false);
  };


  return (
    <section id="hiring" className="hiring section">
      <Toaster position="top-right" />

      <div className="container">
        <div className="section-title">
          <h2>Join Our Team</h2>
          <p>
            Be part of a dynamic team that's transforming digital marketing
          </p>
        </div>

        <div className="hiring-content">
          <motion.div
            className="hiring-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="hiring-intro-card">
              <div className="intro-icon">
                <Briefcase size={48} />
              </div>
              <h3>Why Work With Us?</h3>
              <p>
                Join a fast-growing digital marketing agency where innovation meets creativity. 
                We offer competitive packages, growth opportunities, and a vibrant work culture.
              </p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <span>Competitive Salary</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <span>Growth Opportunities</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <span>Flexible Work Hours</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <span>Learning & Development</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <span>Friendly Team Culture</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hiring-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="hiring-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  className={errors.phone ? 'error' : ''}
                  placeholder="10-digit number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label>Position Applying For *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className={errors.position ? 'error' : ''}
                >
                  <option value="">Select a position</option>
                  {positions.map((pos, index) => (
                    <option key={index} value={pos}>{pos}</option>
                  ))}
                </select>
                {errors.position && <span className="error-message">{errors.position}</span>}
              </div>

              <div className="form-group">
                <label>Experience Level *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={errors.experience ? 'error' : ''}
                >
                  <option value="">Select experience level</option>
                  {experienceLevels.map((exp, index) => (
                    <option key={index} value={exp}>{exp}</option>
                  ))}
                </select>
                {errors.experience && <span className="error-message">{errors.experience}</span>}
              </div>

              <div className="form-group">
                <label>Upload Resume * (PDF, DOC, DOCX - Max 5MB)</label>
                <div className="file-upload-container">
                  {!resumeFile ? (
                    <label 
                      className={`file-upload-area ${errors.resume ? 'error' : ''}`}
                      htmlFor="resume-upload"
                    >
                      <Upload size={32} />
                      <p>Click to upload your resume</p>
                      <span>PDF, DOC, or DOCX (Max 5MB)</span>
                    </label>
                  ) : (
                    <div className="file-uploaded">
                      <FileText size={24} />
                      <span className="file-name">{resumeFile.name}</span>
                      <button 
                        type="button" 
                        className="remove-file-btn"
                        onClick={removeFile}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  )}
                  <input
                    id="resume-upload"
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                </div>
                {errors.resume && <span className="error-message">{errors.resume}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large btn-submit"
                disabled={loading}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? "Submitting..." : (
                  <>
                    <Send size={20} />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;