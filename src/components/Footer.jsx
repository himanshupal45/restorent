import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';
import '../styles/Footer.css';

const socials = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Youtube, href: 'https://youtube.com' },
];

const quickLinks = [
  ['#home', 'Home'],
  ['#menu', 'Menu'],
  ['#about', 'About'],
  ['#gallery', 'Gallery'],
  ['#contact', 'Contact'],
];

const menuLinks = ['Appetizers', 'Main Course', 'Burgers', 'Desserts', 'Drinks'];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-mark">A</div>
              <span>StarPlus</span>
            </div>
            <p>
              Great food, good vibes. Always. Experience artisanal dining created with love and fresh
              seasonal ingredients.
            </p>
            <div className="footer__socials">
              {socials.map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul>
              {quickLinks.map(([href, label]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Our Menu</h5>
            <ul>
              {menuLinks.map((l) => (
                <li key={l}>
                  <a href="#menu">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Contact Us</h5>
            <ul className="footer__contact">
              <li>
                <Phone size={14} />
                <span>+1 (800) 123-4567</span>
              </li>
              <li>
                <Mail size={14} />
                <span>hello@StarPlusrestaurant.com</span>
              </li>
              <li>
                <MapPin size={14} />
                <span>123 Foodie Lane, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 StarPlus Restaurant. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#home">Privacy Policy</a>
            <span>•</span>
            <a href="#home">Terms of Service</a>
            <button onClick={scrollToTop} title="Back to Top">
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
