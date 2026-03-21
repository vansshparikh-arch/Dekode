import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToAnchor from './components/ScrollToAnchor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ── Eagerly import ALL CSS so Vite never splits them into async chunks ──
// This guarantees load order and prevents button/card styles from being overridden
import './pages/Home.css';
import './pages/Bridge.css';
import './components/AnimatedOutcomes.css';
import './components/BridgeTeaser.css';
import './components/DeliveryFlow.css';
import './components/HeroSection.css';
import './components/PortfolioShowcase.css';
import './components/ServicesGrid.css';

// Lazy-load the JS for each page — CSS is already loaded above
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Bridge = lazy(() => import('./pages/Bridge'));
const Services = lazy(() => import('./pages/Services'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <div className="dekode-app">
        <Header />
        <main>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/bridge" element={<Bridge />} />
              <Route path="/services" element={<Services />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
