import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/data';
import '../styles/Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="container">
        <div className="testi__head">
          <span className="eyebrow light">Testimonials</span>
          <h2 className="testi__title">What Our Guests Say</h2>
          <p>Real experiences. Real people. Real love.</p>
        </div>

        <div className="testi__grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testi__card">
              <div>
                <div className="testi__stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testi__quote">“{t.quote}”</p>
              </div>
              <div className="testi__author">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
