import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import '../styles/About.css';

const stats = [
  { value: '8+', label: 'Years of Experience' },
  { value: '50+', label: 'Signature Dishes' },
  { value: '100K+', label: 'Happy Customers' },
];

export default function About({ onBook, onVideo }) {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__visual">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
            alt="StarPlus Restaurant Interior and warm lighting"
          />
          <div className="about__shade" />
          <div className="about__ribbon">
            <div>
              <p>Good Food</p>
              <h3>Brings People Together</h3>
            </div>
            <button className="about__play" onClick={onVideo} aria-label="Play our story video">
              <Play size={20} fill="currentColor" />
            </button>
          </div>
        </div>

        <div className="about__content">
          <span className="eyebrow light">About StarPlus</span>
          <h2 className="about__title">Our Story</h2>
          <p className="about__text">
            StarPlus Restaurant was born from a simple idea – that great food brings people together. We
            combine fresh, seasonal ingredients with creative recipes to create memorable dining
            experiences.
          </p>
          <div>
            <button className="btn btn-gold about__btn" onClick={onBook}>
              Learn More
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label}>
                <h4>{s.value}</h4>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
