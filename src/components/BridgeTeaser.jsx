import React, { useEffect, useRef } from 'react';
import './BridgeTeaser.css';

const BridgeTeaser = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Simple particle system to represent data connection
    const particles = [];
    const count = 50;
    
    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Node 1 (Australia)
      const n1x = canvas.width * 0.2;
      const n1y = canvas.height * 0.5;
      
      // Node 2 (India)
      const n2x = canvas.width * 0.8;
      const n2y = canvas.height * 0.5;
      
      // Draw connection line
      ctx.beginPath();
      ctx.moveTo(n1x, n1y);
      ctx.bezierCurveTo(
        canvas.width * 0.5, canvas.height * 0.2, // ctrl1
        canvas.width * 0.5, canvas.height * 0.8, // ctrl2
        n2x, n2y
      );
      ctx.strokeStyle = 'rgba(53, 118, 193, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Main Nodes
      ctx.beginPath();
      ctx.arc(n1x, n1y, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'var(--color-accent-blue)';
      ctx.fill();
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'var(--color-accent-blue)';

      ctx.beginPath();
      ctx.arc(n2x, n2y, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#9d4edd';
      ctx.fill();
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#9d4edd';

      // Update and draw particles
      ctx.shadowBlur = 0;
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 245, 212, 0.5)';
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section id="bridge" className="bridge-section">
      <div className="bridge-background">
        <canvas ref={canvasRef} className="bridge-canvas"></canvas>
      </div>
      
      <div className="container bridge-content">
        <div className="bridge-badge">COMING SOON</div>
        <h2 className="bridge-title">The <span className="text-gradient">BRIDGE</span> Initiative</h2>
        <p className="bridge-subtitle">
          Connecting Australian and Indian businesses through technology, talent, and strategic partnership — to build, scale, and grow together.
        </p>
        
        <div className="bridge-grid">
          <div className="bridge-col glass-card">
            <h3><span className="node-indicator aus"></span>Australia</h3>
            <p>Market insight, strategic direction, and local product management.</p>
          </div>
          <div className="bridge-connection-icon">⇄</div>
          <div className="bridge-col glass-card">
            <h3><span className="node-indicator ind"></span>India</h3>
            <p>Engineering depth, rapid scaling, and technical excellence.</p>
          </div>
        </div>

        <div className="bridge-pillars">
          <div className="pillar">Partnerships</div>
          <div className="pillar">Resourcing & Staffing</div>
          <div className="pillar">Product Development</div>
          <div className="pillar">Cross-Skilling</div>
          <div className="pillar">R&D Collaboration</div>
          <div className="pillar">Talent Exchange</div>
        </div>
      </div>
    </section>
  );
};

export default BridgeTeaser;
