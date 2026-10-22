import React from 'react';
import { Sparkles, Play, Star } from 'lucide-react';
import '../styles/Hero.css';

export default function Hero({ onBook, onVideo }) {
  return (
    <section id="home" className="hero">
      <div className="hero__glow hero__glow--left" />
      <div className="hero__glow hero__glow--right" />

      <div className="container hero__inner">
        <div className="hero__text">
          <div className="hero__badge">
            <Sparkles size={12} />
            GOOD FOOD • GREAT VIBES
          </div>

          <h1 className="hero__title">
            Taste the <br />
            <span>Extraordinary</span>
          </h1>

          <p className="hero__desc">
            At StarPlus Restaurant, we bring together fresh ingredients, creative recipes and a cozy
            atmosphere to give you an unforgettable dining experience.
          </p>

          <div className="hero__buttons">
            <button className="btn btn-gold" onClick={onBook}>
              Book a Table
            </button>
            <button className="hero__video-btn" onClick={onVideo}>
              <span className="hero__play">
                <Play size={12} fill="currentColor" />
              </span>
              Watch Video
            </button>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__circle">
            <div className="hero__ring hero__ring--dashed" />
            <div className="hero__ring hero__ring--thin" />

            <div className="hero__photo">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="StarPlus Signature Grilled Meat Platter with Rosemary"
              />
            </div>

            <div className="hero__stamp">
              <span className="hero__ping" />
              <div>
                <p>Fresh Ingredients</p>
                <strong>Better Taste</strong>
              </div>
            </div>

            <div className="hero__rating">
              <div className="hero__rating-icon">
                <Star size={16} fill="currentColor" />
              </div>
              <div>
                <strong>4.9 / 5.0</strong>
                <p>Over 1,200+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
