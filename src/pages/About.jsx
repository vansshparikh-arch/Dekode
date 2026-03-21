import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header-section" ref={addToRefs}>
        <div className="container">
          <h1 className="about-headline">About Us</h1>
          <h2 className="about-subheadline">
            We make technology work for the people who use it.
          </h2>
          <p className="about-lead">
            DEKODE helps businesses and communities modernise their systems, adopt AI with confidence, and build digital products that teams actually want to use. We handle the complexity so you don’t have to: from strategy and architecture through to build, security, and long-term support.
          </p>
          <p className="about-accent-text">
            Progress only counts when it reaches everyone.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="about-why-section glass-section" ref={addToRefs}>
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content">
              <h2 className="about-section-title">Why We Exist</h2>
              <p>
                We started DEKODE because we kept seeing the same problem: businesses that knew they needed to evolve but couldn’t find a partner that made the process feel manageable. The big IT firms were too expensive, too impersonal, and spoke a language most teams couldn’t follow. Meanwhile, the technology gap kept growing.
              </p>
              <p>
                We believed there was a better way. Practical technology, delivered simply, at a price that respects your budget. No jargon. No bloated scopes. No disappearing after launch.
              </p>
              <p className="about-highlight-box">
                That belief still drives everything we do.
              </p>
            </div>
            
            <div className="about-image-standin">
              <div className="glow-shape blue-shape"></div>
              <div className="glow-shape yellow-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="about-different-section" ref={addToRefs}>
        <div className="container">
          <h2 className="about-section-title text-center">What Makes Us Different</h2>
          <div className="differences-grid">
            
            <div className="difference-card" ref={addToRefs}>
              <div className="diff-icon">🎯</div>
              <h3>Simple</h3>
              <p>We communicate in plain language, keep scope focused, and prioritise what actually moves your business forward.</p>
            </div>
            
            <div className="difference-card" ref={addToRefs}>
              <div className="diff-icon">🔍</div>
              <h3>Transparent</h3>
              <p>You'll always know what we're building, what it costs, and how we'll measure success. No surprises.</p>
            </div>
            
            <div className="difference-card" ref={addToRefs}>
              <div className="diff-icon">🤝</div>
              <h3>Accountable</h3>
              <p>We own the outcome, not just the output. If something isn't working, we fix it.</p>
            </div>
            
            <div className="difference-card" ref={addToRefs}>
              <div className="diff-icon">🛡️</div>
              <h3>Reliable</h3>
              <p>Security and stability aren't afterthoughts. They're built into every system from day one, with ongoing support to keep things running.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Who We Work With & Where We're Going */}
      <section className="about-vision-section" ref={addToRefs}>
        <div className="container">
          <div className="vision-boxes">
            
            <div className="vision-box" ref={addToRefs}>
              <h2 className="about-section-title">Who We Work With</h2>
              <p>
                We partner with small and medium businesses across education, healthcare, finance, accounting, legal, food and agriculture, and retail. Our clients share one thing in common: they want technology that solves real problems without creating new ones.
              </p>
            </div>
            
            <div className="vision-box" ref={addToRefs}>
              <h2 className="about-section-title">Where We're Going</h2>
              <p>
                The world is shifting fast. AI is reshaping how businesses operate, compete, and serve their customers. There’s a lot of noise and a lot of fear, but also an extraordinary opportunity for businesses willing to participate rather than wait.
              </p>
              <p>
                DEKODE is building toward becoming a trusted global technology partner for businesses navigating that shift. Our goal is simple: make digital transformation and AI adoption accessible, affordable, and genuinely useful for the people it’s meant to serve.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
