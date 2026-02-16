import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import JobOpenings from './components/JobOpenings';
import Hiring from './components/Hiring';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Smooth scroll reveal animation
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
        <JobOpenings />  {/* Job openings banner with graphics */}
        <Hiring />       {/* Full application form */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;