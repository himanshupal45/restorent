import React from 'react';
import { Utensils, ChefHat, Sparkles, Award } from 'lucide-react';
import '../styles/Features.css';

const features = [
  { icon: Utensils, title: 'Fresh Ingredients', text: 'Farm to table, always fresh' },
  { icon: ChefHat, title: 'Expert Chefs', text: 'World-class culinary team' },
  { icon: Sparkles, title: 'Cozy Ambiance', text: 'Perfect for every occasion' },
  { icon: Award, title: 'Great Service', text: 'Your comfort, our priority' },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container features__grid">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="features__item">
            <div className="features__icon">
              <Icon size={24} strokeWidth={1.5} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
