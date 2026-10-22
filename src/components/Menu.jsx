import React from 'react';
import { ArrowRight } from 'lucide-react';
import { signatureCategories } from '../data/data';
import '../styles/Menu.css';

export default function Menu({ onCategory }) {
  return (
    <section id="menu" className="menu">
      <div className="container menu__inner">
        <div className="menu__head">
          <span className="eyebrow">Our Menu</span>
          <h2 className="section-title menu__title">
            Discover Our <br />
            Signature Dishes
          </h2>
          <p className="menu__desc">
            From classic favorites to modern creations, our menu is crafted to satisfy every craving with
            artisanal recipes.
          </p>
          <a href="#popular" className="btn btn-dark menu__btn">
            View Full Menu
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="menu__grid">
          {signatureCategories.map((cat) => (
            <div key={cat.title} className="menu__card" onClick={() => onCategory(cat.title)}>
              <img src={cat.img} alt={cat.title} />
              <div className="menu__overlay">
                <p>{cat.subtitle}</p>
                <div className="menu__row">
                  <h4>{cat.title}</h4>
                  <span>{cat.itemCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
