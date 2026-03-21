import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const team = [
    { name: 'Pankaj Banga', role: 'Founder' },
    { name: 'Guneet Uppal', role: 'Principal Consultant' },
    { name: 'Ronny Garg', role: 'Principal Consultant' },
    { name: 'Tayyab Qureshi', role: 'Delivery Lead' },
    { name: 'Bharat Shori', role: 'QA Head' },
    { name: 'Kris Ganugapati', role: 'QA Lead' },
    { name: 'Raushan Kumar', role: 'Technical Lead' }
  ];

  return (
    <footer id="contact" className="modern-footer">
      <div className="container footer-content">
        <div className="footer-cta-box" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(53, 118, 193, 0.3)', padding: '3rem', borderRadius: '16px', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, var(--color-accent-blue), var(--color-accent-yellow))', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Ready to turn an AI idea into a working product?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            If you're exploring AI, modernising systems, improving user experience, or building something new, DEKODE can help. Start with a discovery call and we'll map the fastest path to a secure, usable outcome.
          </p>
          <a href="mailto:pm@dekodeglobal.com" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '2rem' }}>Book a Discovery Call</a>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Email</h4>
              <a href="mailto:pm@dekodeglobal.com" style={{ color: 'var(--color-accent-blue)', textDecoration: 'none' }}>pm@dekodeglobal.com</a>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Phone</h4>
              <p style={{ color: '#ffffff', margin: 0 }}>+61 421 196 363 (AU)</p>
              <p style={{ color: '#ffffff', margin: 0 }}>+91 98115 10998 (IN)</p>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo-text" style={{ textDecoration: 'none', color: '#ffffff' }}>DEKODE</Link>
            <p className="footer-mission">
              Making technology work for the people who use it. No jargon. No bloated scopes.
            </p>
            <div className="social-links">
              <a href="mailto:pm@dekodeglobal.com" className="social-link" style={{ fontSize: '0.8rem' }}>EMAIL</a>
              <a href="#contact" className="social-link" style={{ fontSize: '0.8rem' }}>CALL</a>
            </div>
          </div>
          
          <div className="footer-links-group" style={{ marginLeft: 'auto' }}>
            <h4>Services</h4>
            <ul>
              <li><a href="/#services">AI Strategy & Consulting</a></li>
              <li><a href="/#services">Custom AI Development</a></li>
              <li><a href="/#services">Web & Mobile Dev</a></li>
              <li><a href="/#services">AI E-Commerce</a></li>
              <li><a href="/#services">Cloud & Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ color: '#ffffff' }}>&copy; {new Date().getFullYear()} DEKODE Consultancy. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
