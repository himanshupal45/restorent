import React, { useState } from 'react';
import Menu from '../../components/Menu';
import Popular from '../../components/Popular';
import Footer from '../../components/Footer';
import { popularMeals } from '../../data/data';
import'./MenuPage.css';

export default function MenuPage({ onAddCart, onToast, searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <main>
      <section className="menu-page-hero">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Discover our exquisite selection of chiya and dishes</p>
        </div>
      </section>

      <Menu onCategory={(t) => {
        setSelectedCategory(t);
        onToast(`Browsing ${t} selection`);
      }} />

      <section className="menu-page-items">
        <div className="container">
          <h2>Menu Items</h2>
          <Popular
            meals={popularMeals}
            searchQuery={searchQuery}
            onAdd={onAddCart}
            onNav={onToast}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
