import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo-container">
          <Link to="/" className="logo-text" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>DEKODE</Link>
        </div>
        
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/about" className="nav-link">ABOUT US</Link></li>
            <li><Link to="/services" className="nav-link">SERVICES</Link></li>
            <li><Link to="/#methodology" className="nav-link">CASE STUDY &or;</Link></li>
            <li><Link to="/bridge" className="nav-link">BRIDGE <span style={{color: 'var(--color-accent-yellow)'}}>(SOON)</span></Link></li>
          </ul>
        </nav>
        
        <div className="cta-container desktop-only">
          <a href="mailto:pm@dekodeglobal.com" className="btn-outline glow-btn" style={{ textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '4px', padding: '0.5rem 1.5rem', color: '#fff' }}>
            CONTACT
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>SERVICES</Link></li>
          <li><Link to="/#methodology" className="mobile-nav-link" onClick={closeMobileMenu}>Methodology</Link></li>
          <li><Link to="/bridge" className="mobile-nav-link" onClick={closeMobileMenu}>Bridge</Link></li>
        </ul>
        <div className="mobile-nav-cta">
          <a href="mailto:pm@dekodeglobal.com" className="btn-primary glow-btn w-full text-center block" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
            Book Discovery Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
