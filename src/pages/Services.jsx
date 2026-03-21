import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
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
    <div className="services-page">
      {/* Page Header */}
      <section className="services-header-section" ref={addToRefs}>
        <div className="container">
          <h1 className="services-headline">
            From strategy to build to ongoing support. Everything your business needs to move forward with confidence
          </h1>
          <p className="services-subheadline">
            We bring together AI, product development, integrations, cloud infrastructure, and security into one delivery partner. No patchwork of vendors. No handoff gaps. Just practical solutions, cleanly scoped and built to last.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-details-section">
        <div className="container">
          
          <div className="service-detail-card" ref={addToRefs}>
            <h2 className="service-title">AI Strategy & Consulting</h2>
            <p className="service-lead">
              Most businesses know AI matters. Fewer know where to start. We help you cut through the noise, identify the use cases that will actually move the needle, and build a roadmap grounded in your real data, workflows, and goals. Not hype.
            </p>
            <div className="service-includes-for">
              <div className="service-includes">
                <h3>What this includes:</h3>
                <ul>
                  <li>AI readiness assessment and opportunity mapping</li>
                  <li>Use case selection, ROI logic, and prioritisation</li>
                  <li>Data and workflow review to determine what's needed to make AI work</li>
                  <li>Responsible AI guidance covering privacy, safety, and governance</li>
                  <li>Vendor-neutral tool and platform recommendations</li>
                </ul>
              </div>
              <div className="service-for">
                <h3>Who it's for:</h3>
                <p>Businesses exploring AI for the first time, or those who’ve tried and need a clearer direction.</p>
              </div>
            </div>
          </div>

          <div className="service-detail-card" ref={addToRefs}>
            <h2 className="service-title">Custom AI Development</h2>
            <p className="service-lead">
              Build AI that fits your business. Not the other way around. Off-the-shelf AI rarely solves the specific problems your team faces every day. We design and develop custom AI solutions, from machine learning models to generative AI features, that plug directly into your operations and deliver measurable results.
            </p>
            <div className="service-includes-for">
              <div className="service-includes">
                <h3>What this includes:</h3>
                <ul>
                  <li>Custom AI and machine learning development</li>
                  <li>Generative AI solutions tailored to your workflows</li>
                  <li>Internal copilots, intelligent search, and knowledge systems</li>
                  <li>AI-powered support, sales enablement, and operations tools</li>
                  <li>From proof-of-concept to production-grade deployment</li>
                </ul>
              </div>
              <div className="service-for">
                <h3>Who it's for:</h3>
                <p>Businesses with a specific problem or idea that needs purpose-built AI to solve it.</p>
              </div>
            </div>
          </div>

          <div className="service-detail-card" ref={addToRefs}>
            <h2 className="service-title">Web & Mobile Development</h2>
            <p className="service-lead">
              Build apps and interfaces that people actually want to use. A powerful system means nothing if your team can’t navigate it. We design and develop web apps, mobile apps, dashboards, and internal tools with user experience at the centre, so adoption happens naturally, not by force.
            </p>
            <div className="service-includes-for">
              <div className="service-includes">
                <h3>What this includes:</h3>
                <ul>
                  <li>Web application development</li>
                  <li>iOS and Android mobile apps</li>
                  <li>UX/UI design: user journeys, wireframes, prototypes, and design systems</li>
                  <li>Dashboards and internal portals for operations, visibility, and decision-making</li>
                  <li>Rapid prototyping through to production-ready delivery</li>
                </ul>
              </div>
              <div className="service-for">
                <h3>Who it's for:</h3>
                <p>Businesses building a new digital product, or modernising existing tools that teams have outgrown.</p>
              </div>
            </div>
          </div>

          <div className="service-detail-card" ref={addToRefs}>
            <h2 className="service-title">AI-Powered E-Commerce Development</h2>
            <p className="service-lead">
              Smarter shopping experiences that convert and scale. E-commerce is no longer just a storefront. It’s a system of recommendations, personalisation, search intelligence, and automation. We build e-commerce platforms with AI woven in from the ground up, so your customers get better experiences and your operations run leaner.
            </p>
            <div className="service-includes-for">
              <div className="service-includes">
                <h3>What this includes:</h3>
                <ul>
                  <li>AI-powered e-commerce platform development</li>
                  <li>Personalised product recommendations and intelligent search</li>
                  <li>Automated inventory, pricing, and fulfilment workflows</li>
                  <li>Performance and UX optimisation</li>
                  <li>Scalable architecture built for growth</li>
                </ul>
              </div>
              <div className="service-for">
                <h3>Who it's for:</h3>
                <p>Retailers and brands launching or upgrading their online presence with AI-driven competitive advantage.</p>
              </div>
            </div>
          </div>

          <div className="service-detail-card" ref={addToRefs}>
            <h2 className="service-title">Integrations & Automation</h2>
            <p className="service-lead">
              Connect your tools. Automate the repetitive work. Free your team to focus. Most businesses run on a patchwork of systems that don’t talk to each other. We connect your stack, build custom integrations, and automate the manual processes that slow your team down, so information flows cleanly and work gets done faster.
            </p>
            <div className="service-includes-for">
              <div className="service-includes">
                <h3>What this includes:</h3>
                <ul>
                  <li>Payment gateway integrations</li>
                  <li>Chat, text, and email integrations</li>
                  <li>Custom API development and third-party connections</li>
                  <li>DevOps pipelines and CI/CD setup</li>
                  <li>Business process automation across operations, finance, and support</li>
                </ul>
              </div>
              <div className="service-for">
                <h3>Who it's for:</h3>
                <p>Businesses drowning in manual workflows, disconnected platforms, or fragile integrations that keep breaking.</p>
              </div>
            </div>
          </div>

          <div className="service-detail-card" ref={addToRefs}>
            <h2 className="service-title">Cloud, Managed IT & Security</h2>
            <p className="service-lead">
              Secure, scalable foundations, with someone watching the systems so you don’t have to. Everything we build runs on infrastructure that’s designed for reliability, cost efficiency, and long-term maintainability. We handle cloud strategy, migration, day-to-day IT management, and security hardening as one connected service. Not separate line items from separate teams.
            </p>
            <div className="service-includes-for">
              <div className="service-includes">
                <h3>What this includes:</h3>
                <ul>
                  <li>Cloud consulting and migration across AWS, Azure, and Google Cloud Platform</li>
                  <li>Infrastructure architecture, monitoring, and incident readiness</li>
                  <li>Identity and access management, data protection, and encryption</li>
                  <li>Security posture reviews, threat modelling, and risk reduction</li>
                  <li>Ongoing managed IT support, patching, and performance optimisation</li>
                </ul>
              </div>
              <div className="service-for">
                <h3>Who it's for:</h3>
                <p>Businesses that need their systems to be stable, secure, and professionally managed, without building a full in-house IT team.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Delivery Process */}
      <section className="delivery-process-section" ref={addToRefs}>
        <div className="container">
          <div className="process-header">
            <h2>How We Deliver Every Service</h2>
            <p>No matter which capability you need, the process stays the same. Structured, transparent, and designed to reduce risk at every stage.</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step" ref={addToRefs}>
              <div className="step-number">01</div>
              <h3>Discover</h3>
              <p>We align on goals, users, workflows, constraints, and quick wins.</p>
            </div>
            <div className="process-step" ref={addToRefs}>
              <div className="step-number">02</div>
              <h3>Design</h3>
              <p>We define the solution architecture, UI/UX flows, delivery plan, and success measures.</p>
            </div>
            <div className="process-step" ref={addToRefs}>
              <div className="step-number">03</div>
              <h3>Build</h3>
              <p>We implement, integrate, test, and document so it’s production-ready.</p>
            </div>
            <div className="process-step" ref={addToRefs}>
              <div className="step-number">04</div>
              <h3>Secure</h3>
              <p>We embed privacy, access control, governance, and hardening from day one.</p>
            </div>
            <div className="process-step" ref={addToRefs}>
              <div className="step-number">05</div>
              <h3>Run & Optimise</h3>
              <p>We support what we ship, monitor performance, iterate, and optimise over time.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
