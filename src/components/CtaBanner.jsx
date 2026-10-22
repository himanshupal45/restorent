import React from 'react';
import '../styles/CtaBanner.css';

export default function CtaBanner({ onBook }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__box">
          <div className="cta__text">
            <h2 className="section-title">Ready for a Delicious Experience?</h2>
            <p>Book your table now and enjoy a memorable meal at Antixor Restaurant.</p>
            <button className="btn btn-gold cta__btn" onClick={onBook}>
              Book a Table →
            </button>
          </div>
          <div className="cta__photo">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
              alt="Antixor Gourmet Special"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
