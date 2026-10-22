import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../styles/Chef.css';

export default function Chef({ onBook }) {
  return (
    <section className="chef">
      <div className="container chef__inner">
        <div className="chef__content">
          <span className="eyebrow light">Meet Our Chef</span>
          <h2 className="chef__title">Passion in Every Plate</h2>
          <p>
            Our chefs bring years of experience and a deep love for food, creating dishes that are both
            beautiful and delicious.
          </p>
          <div>
            <button className="btn btn-gold chef__btn" onClick={onBook}>
              Meet Our Chef
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="chef__visual">
          <div className="chef__frame">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
              alt="Executive Chef Plating Gourmet Dish"
            />
            <div className="chef__stamp">
              <p>Cooked with</p>
              <strong>Passion</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
