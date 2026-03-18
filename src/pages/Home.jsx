import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import ServicesGrid from '../components/ServicesGrid';
import DeliveryFlow from '../components/DeliveryFlow';
import PortfolioShowcase from '../components/PortfolioShowcase';
import AnimatedOutcomes from '../components/AnimatedOutcomes';
import LazySection from '../components/LazySection';
import './Home.css';

// Lazy-load Globe — splits Three.js into its own async chunk,
// so it won't block the initial hero render
const GlobeDemo = lazy(() => import('../components/GlobeDemo').then(m => ({ default: m.GlobeDemo })));


const Home = () => {
  return (
    <div className="page-container">
      <section className="home-hero" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
        <div className="hero-background">
          <div className="grid-overlay"></div>
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2" style={{ top: '20%', right: '-10%', bottom: 'auto' }}></div>
        </div>
        <div className="container hero-content text-center" style={{ paddingTop: '6rem' }}>
          <div className="inline-block px-3 py-1 mb-6 font-mono text-xs uppercase tracking-widest visible" style={{ animationDelay: '0.1s', color: 'var(--color-accent-blue)', letterSpacing: '0.15em', background: 'rgba(0, 210, 255, 0.05)', borderRadius: '4px' }}>
            DEKODE
          </div>
          <h1 className="hero-headline visible mb-6" style={{ fontSize: '4.25rem', fontWeight: '700', lineHeight: '1.15', animationDelay: '0.2s', letterSpacing: '-0.02em', maxWidth: '900px', margin: '0 auto 1.5rem' }}>
            Future-proof your business and people with <span style={{color: 'var(--color-accent-blue)'}}>secure</span> <span style={{color: 'var(--color-accent-purple)'}}>AI</span> and scalable IT foundations
          </h1>
          <p className="hero-subheadline visible mx-auto text-lg text-gray-300" style={{ margin: '0 auto 3rem', maxWidth: '750px', animationDelay: '0.3s', lineHeight: '1.6' }}>
            We combine AI consultancy, solution development, infrastructure, and security to deliver real systems your team can adopt from day one.
          </p>
          <div className="hero-actions justify-center visible mb-16" style={{ animationDelay: '0.4s' }}>
            <a href="mailto:pm@dekodeglobal.com" className="btn-primary glow-btn" style={{ display: 'inline-block', textDecoration: 'none', position: 'relative', zIndex: 20 }}>Book a Discovery Call</a>
            <Link to="/#services" className="btn-secondary" style={{ display: 'inline-block', textDecoration: 'none', position: 'relative', zIndex: 20 }}>EXPLORE CAPABILITIES</Link>
          </div>
          
          <div className="globe-section visible w-full flex justify-center relative" style={{ zIndex: 10, animationDelay: '0.5s', marginBottom: '-4rem' }}>
            <Suspense fallback={<div style={{ width: '100%', maxWidth: '800px', aspectRatio: '1 / 1', margin: '0 auto' }} />}>
              <GlobeDemo />
            </Suspense>
          </div>
        </div>
      </section>

      <LazySection minHeight="40rem">
        <section id="services" className="py-20 bg-dark-layer">
          <div className="container text-center mb-16">
            <h2 className="section-title">Everything you need to go from AI idea to real-world adoption</h2>
            <p className="section-subtitle">Strategy is only useful when it ships. We bring AI, infrastructure, and security together so your solution works in the real world, not just in a demo.</p>
          </div>
          <ServicesGrid />
        </section>
      </LazySection>

      <LazySection minHeight="30rem">
        <section id="methodology" className="py-20">
          <div className="container text-center mb-16">
            <h2 className="section-title">A simple delivery flow that reduces risk and speeds up results</h2>
            <p className="section-subtitle">Clear steps. Clean scope. Security built in. We move from discovery to launch, then stay with you to run and improve what we build.</p>
          </div>
          <DeliveryFlow />
        </section>
      </LazySection>

      <LazySection minHeight="20rem">
        <section className="py-20 bg-dark-layer">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title text-left">What changes after DEKODE builds with you</h2>
                <p className="section-subtitle text-left mb-8">Practical improvements you can measure, across operations, decision-making, adoption, and security.</p>
              </div>
              <div className="outcomes-list">
                <AnimatedOutcomes 
                  outcomes={[
                    "Faster execution through automation and AI-assisted workflows",
                    "Better decisions with reliable data and intelligent insights",
                    "Reduced operational load on teams",
                    "Higher adoption through intuitive UI and streamlined user journeys",
                    "Stronger security posture while adopting new AI capabilities",
                    "Infrastructure that scales as your business grows"
                  ]} 
                />
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection minHeight="20rem">
        <section className="py-20">
          <div className="container text-center mb-16">
            <h2 className="section-title">Practical delivery, not hype</h2>
            <p className="section-subtitle">We don't just advise. We design, build, secure, and support systems that your team can use from day one, and improve over time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container">
            {[
              { title: "Practical AI, not hype", desc: "Focused on outcomes your team can actually use" },
              { title: "UI that drives adoption", desc: "Interfaces built for clarity, speed, and real workflows" },
              { title: "Simple by default", desc: "Clear communication, clean scope, no jargon" },
              { title: "Security-first", desc: "Governance and protection embedded from day one" },
              { title: "Sustainable foundations", desc: "Maintainable systems and cost-aware infrastructure" },
              { title: "Long-term partner mindset", desc: "Build it, run it, improve it" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </LazySection>

      <LazySection minHeight="20rem">
        <PortfolioShowcase />
      </LazySection>
    </div>
  );
};

export default Home;
