import React from 'react';
import { Sparkles, Utensils, Heart, Users } from 'lucide-react';
import '../styles/WhyChoose.css';

const items = [
  { icon: Sparkles, title: 'Premium Quality', text: 'Only the freshest ingredients' },
  { icon: Utensils, title: 'Creative Menu', text: 'Unique & seasonal dishes' },
  { icon: Heart, title: 'Lovely Atmosphere', text: 'Perfect for any occasion' },
  { icon: Users, title: 'Friendly Staff', text: 'Always here for you' },
];

export default function WhyChoose() {
  return (
    <section className="why">
      <div className="container why__inner">
        <div className="why__head">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title why__title">More Than Just a Meal</h2>
          <p>
            We offer a complete dining experience, from exceptional food to a warm and inviting
            atmosphere.
          </p>
        </div>

        <div className="why__grid">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="why__card">
              <div className="why__icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
