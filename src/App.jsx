import React, { useState } from 'react';
import { popularMeals } from './data/data';

import Toast from './components/Toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Popular from './components/Popular';
import Chef from './components/Chef';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import GalleryModal from './components/GalleryModal';
import ReservationModal from './components/ReservationModal';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [activeGalleryModal, setActiveGalleryModal] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([{ ...popularMeals[0], qty: 1 }]);

  const [resData, setResData] = useState({
    date: '2026-10-25',
    time: '19:30',
    guests: '2 Guests',
    name: 'Alexander Vance',
    email: 'alexander@example.com',
    phone: '+1 (555) 349-2041',
    requests: 'Window table if available',
  });

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3800);
  };

  const addToCart = (meal) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === meal.id);
      if (exists) return prev.map((i) => (i.id === meal.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...meal, qty: 1 }];
    });
    triggerToast(`Added ${meal.name} to your order bag.`);
  };

  const changeQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0)
    );
  };

  const checkout = () => {
    triggerToast('Thank you! Your gourmet order has been placed.');
    setCartItems([]);
    setCartOpen(false);
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setReservationModalOpen(false);
    triggerToast(`Table successfully reserved for ${resData.guests} on ${resData.date} at ${resData.time}!`);
  };

  const openBooking = () => setReservationModalOpen(true);
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="app">
      <Toast show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />

      <Navbar
        cartCount={cartCount}
        onCart={() => setCartOpen(true)}
        onBook={openBooking}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Hero onBook={openBooking} onVideo={() => setVideoModalOpen(true)} />
      <Features />
      <Menu onCategory={(t) => triggerToast(`Browsing ${t} selection`)} />
      <About onBook={openBooking} onVideo={() => setVideoModalOpen(true)} />
      <Gallery onOpen={setActiveGalleryModal} onNav={triggerToast} />
      <Popular
        meals={popularMeals}
        searchQuery={searchQuery}
        onAdd={addToCart}
        onNav={triggerToast}
      />
      <Chef onBook={openBooking} />
      <WhyChoose />
      <Testimonials />
      <Reservation resData={resData} setResData={setResData} onSubmit={handleReservationSubmit} />
      <CtaBanner onBook={openBooking} />
      <Footer />

      {videoModalOpen && <VideoModal onClose={() => setVideoModalOpen(false)} />}
      {activeGalleryModal && (
        <GalleryModal
          photo={activeGalleryModal}
          onClose={() => setActiveGalleryModal(null)}
          onBook={() => {
            setActiveGalleryModal(null);
            openBooking();
          }}
        />
      )}
      {reservationModalOpen && (
        <ReservationModal
          resData={resData}
          setResData={setResData}
          onSubmit={handleReservationSubmit}
          onClose={() => setReservationModalOpen(false)}
        />
      )}
      {cartOpen && (
        <CartDrawer
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onQty={changeQty}
          onCheckout={checkout}
        />
      )}
    </div>
  );
}
