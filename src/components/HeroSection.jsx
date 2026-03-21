import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [initialized, setInitialized] = useState(false);
  const [textStage, setTextStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setInitialized(true), 500);
    const timer2 = setTimeout(() => setTextStage(1), 1500);
    const timer3 = setTimeout(() => setTextStage(2), 2500);
    const timer4 = setTimeout(() => setTextStage(3), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section id="about" className="hero-section">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="container hero-content" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
        <div style={{ maxWidth: '800px', width: '100%', marginBottom: '4rem', zIndex: 10 }}>
          <h1 className={`hero-headline ${textStage >= 1 ? 'visible' : ''}`} style={{ color: '#ffffff' }}>
            Future-proof your business and people with secure AI and <span style={{color: 'var(--color-accent-yellow)'}}>scalable IT foundations</span>
          </h1>
          <p className={`hero-subheadline ${textStage >= 2 ? 'visible' : ''}`} style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            We combine AI consultancy, solution development, infrastructure, and security to deliver real systems your team can adopt from day one.
          </p>
          
          <div className={`hero-actions ${textStage >= 3 ? 'visible' : ''}`} style={{ justifyContent: 'flex-start' }}>
            <a href="mailto:pm@dekodeglobal.com" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none', position: 'relative', zIndex: 20 }}>BOOK A DISCOVERY CALL &rarr;</a>
            <a href="#services" className="btn-secondary" style={{ display: 'inline-block', textDecoration: 'none', position: 'relative', zIndex: 20 }}>EXPLORE CAPABILITIES</a>
          </div>
        </div>
        <div className={`vision-cards ${textStage >= 3 ? 'visible' : ''}`}>
          <div className="glass-card vision-card">
            <div className="card-icon neon-emoji-1">⚡</div>
            <h3>Practical Technology</h3>
            <p>Delivered simply, at a price that respects your budget.</p>
          </div>
          <div className="glass-card vision-card">
            <div className="card-icon neon-emoji-2">🧠</div>
            <h3>AI With Confidence</h3>
            <p>Turn AI uncertainty into a clear, prioritized roadmap.</p>
          </div>
          <div className="glass-card vision-card">
            <div className="card-icon neon-emoji-3">🤝</div>
            <h3>True Partnership</h3>
            <p>No jargon. No bloated scopes. No disappearing after launch.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
