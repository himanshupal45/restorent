import React, { useState } from 'react';
import { Search, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import '../styles/Navbar.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ cartCount, onCart, onBook, searchQuery, setSearchQuery }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <div className="navbar__emblem">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2L14.4 7.2L20 8L16 12L17 18L12 15.2L7 18L8 12L4 8L9.6 7.2L12 2Z" opacity="0.3" />
              <path d="M12 4L13.8 8.4L18.5 9.1L15.1 12.5L16 17.5L12 15.1L8 17.5L8.9 12.5L5.5 9.1L10.2 8.4L12 4Z" />
            </svg>
          </div>
          <div className="navbar__brand">
            <span className="navbar__name">Antixor</span>
            <span className="navbar__sub">Restaurant</span>
          </div>
        </a>

        <nav className="navbar__links">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className={i === 0 ? 'active' : ''}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="navbar__icon-btn" onClick={() => setSearchOpen(!searchOpen)} title="Search menu">
            <Search size={16} />
          </button>
          <button className="navbar__icon-btn navbar__cart" onClick={onCart} title="View Cart">
            <ShoppingBag size={16} />
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </button>
          <button className="btn btn-gold navbar__book" onClick={onBook}>
            Book a Table
          </button>
        </div>

        <div className="navbar__mobile-actions">
          <button className="navbar__icon-btn navbar__cart" onClick={onCart}>
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </button>
          <button className="navbar__icon-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="navbar__search">
          <div className="navbar__search-box">
            <Search size={16} className="navbar__search-icon" />
            <input
              type="text"
              placeholder="Search truffle pasta, steak, salmon, dessert..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="navbar__search-clear" onClick={() => setSearchQuery('')}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className={i === 0 ? 'active' : ''}>
              {l.label}
            </a>
          ))}
          <button
            className="btn btn-gold navbar__mobile-book"
            onClick={() => {
              setMobileOpen(false);
              onBook();
            }}
          >
            Book a Table
          </button>
        </div>
      )}
    </header>
  );
}
