import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee } from 'lucide-react';
import './ComingSoon.css';

export default function ComingSoon() {
  return (
    <main className="coming-soon">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">
            <Coffee size={80} />
          </div>

          <h1>Coming Soon</h1>
          <p className="coming-soon-subtitle">
            We're brewing something amazing for you!
          </p>

          <div className="coming-soon-message">
            <p>
              This page is currently under development. We're working hard to bring you an amazing experience.
            </p>
            <p>
              Stay tuned for exciting updates and features coming your way soon!
            </p>
          </div>

          <div className="coming-soon-stats">
            <div className="stat">
              <h3>Chiya</h3>
              <p>Premium Quality</p>
            </div>
            <div className="stat">
              <h3>Fresh</h3>
              <p>Always Fresh</p>
            </div>
            <div className="stat">
              <h3>Organic</h3>
              <p>100% Organic</p>
            </div>
          </div>

          <div className="coming-soon-actions">
            <Link to="/" className="btn btn-gold">
              <span>Back to Home</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/menu" className="btn btn-outline">
              Browse Menu
            </Link>
          </div>

          <p className="coming-soon-footer">
            📧 Subscribe for updates: <a href="mailto:hello@StarPlus.com">hello@StarPlus.com</a>
          </p>
        </div>

        <div className="coming-soon-animation">
          <div className="floating-cup"></div>
          <div className="floating-leaf"></div>
          <div className="floating-leaf2"></div>
        </div>
      </div>
    </main>
  );
}