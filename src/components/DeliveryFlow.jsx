import React, { useEffect, useRef } from 'react';
import './DeliveryFlow.css';

const DeliveryFlow = () => {
  const flowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = flowRef.current.querySelectorAll('.flow-step');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const steps = [
    { num: '01', title: 'Discover', desc: 'Align on goals, users, constraints, workflows, and actionable quick wins.', color: 'var(--color-accent-blue)' },
    { num: '02', title: 'Design', desc: 'Define solution architecture, UI/UX flows, delivery plan, and success measures.', color: 'var(--color-accent-blue)' },
    { num: '03', title: 'Build', desc: 'Implement, integrate, test, and document logic so it’s production-ready.', color: 'var(--color-accent-purple)' },
    { num: '04', title: 'Secure', desc: 'Embed privacy, access control, IT governance, and hardening from day one.', color: 'var(--color-accent-blue)' },
    { num: '05', title: 'Run & Optimise', desc: 'Support what we ship, monitor system performance, iterate, and optimise.', color: 'var(--color-accent-blue)' },
  ];

  return (
    <section id="methodology" className="delivery-section">
      <div className="container">
        <h2 className="section-title">Delivery Methodology</h2>
        <p className="delivery-subtitle">A simple, risk-reducing flow to speed up practical results.</p>
        
        <div className="flow-container" ref={flowRef}>
          <div className="flow-line-bg"></div>
          <div className="flow-line-progress"></div>
          
          <div className="flow-steps-wrapper">
            {steps.map((step, index) => (
              <div key={index} className="flow-step">
                <div className="step-node" style={{ '--node-color': step.color }}>
                  <span className="step-num">{step.num}</span>
                  <div className="node-pulse"></div>
                </div>
                <div className="step-content glass-card">
                  <h3 className="step-title" style={{ color: step.color }}>{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryFlow;
