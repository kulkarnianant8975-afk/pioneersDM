import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

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

  // ✅ PROFESSIONAL SCROLL FUNCTION (Dynamic Header Height)
  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (!element) return;

  // First close mobile menu
  setIsMobileMenuOpen(false);

  // Small delay to allow menu animation to finish
  setTimeout(() => {
    const header = document.querySelector('.header');
    const headerHeight = header ? header.offsetHeight : 0;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, 300); // match your motion duration
};

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Careers', id: 'hiring' },
    { name: 'Contact', id: 'contact' },
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

          {/* Logo */}
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
          >
            <div className="logo-icon">P</div>
            <div className="logo-text">
              <span className="logo-title">Pioneers</span>
              <span className="logo-subtitle">Digital Marketing</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
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

          {/* CTA Button */}
          <motion.a
            href="tel:8669880738"
            className="header-cta btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={18} />
            <span className="header-cta-text">Call Now</span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
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
                x: isMobileMenuOpen ? 0 : -20,
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
              x: isMobileMenuOpen ? 0 : -20,
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

export default Header;
