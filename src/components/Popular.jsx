import React from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from 'lucide-react';
import '../styles/Popular.css';

export default function Popular({ meals, searchQuery, onAdd, onNav }) {
  const q = searchQuery.trim().toLowerCase();
  const visible = q
    ? meals.filter((m) => `${m.name} ${m.tag} ${m.desc}`.toLowerCase().includes(q))
    : meals;

  return (
    <section id="popular" className="popular">
      <div className="container">
        <div className="popular__head">
          <div>
            <span className="eyebrow">Popular</span>
            <h2 className="section-title popular__title">Our Most Popular Meals</h2>
            <p>Handpicked favorites loved by our guests.</p>
          </div>
          <div className="popular__nav">
            <button onClick={() => onNav('Showing previous meal highlights')} aria-label="Previous meals">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => onNav('Showing next meal highlights')} aria-label="Next meals">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="popular__empty">No dishes found for “{searchQuery}”.</p>
        ) : (
          <div className="popular__grid">
            {visible.map((meal) => (
              <div key={meal.id} className="popular__card">
                <div className="popular__img">
                  <img src={meal.img} alt={meal.name} />
                  <div className="popular__tag">{meal.tag}</div>
                  <div className="popular__rating">
                    <Star size={12} fill="currentColor" />
                    {meal.rating}
                  </div>
                </div>
                <div className="popular__body">
                  <div>
                    <h3>{meal.name}</h3>
                    <p>{meal.desc}</p>
                  </div>
                  <div className="popular__foot">
                    <div>
                      <span className="popular__price-label">Price</span>
                      <span className="popular__price">${meal.price.toFixed(2)}</span>
                    </div>
                    <button className="popular__add" onClick={() => onAdd(meal)} title="Add to order">
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
