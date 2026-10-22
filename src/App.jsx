import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { popularMeals } from './data/data';

// Components
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import VideoModal from './components/VideoModal';
import GalleryModal from './components/GalleryModal';
import ReservationModal from './components/ReservationModal';
import CartDrawer from './components/CartDrawer';

// Pages
import HomePage from './pages/HomePage/HomePage';
import MenuPage from './pages/MenuPage/MenuPage';
import AboutPage from './pages/AboutPage/AboutPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ComingSoon from './pages/ComingSoon/ComingSoon';

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
    triggerToast(
      `Table successfully reserved for ${resData.guests} on ${resData.date} at ${resData.time}!`
    );
  };

  const openBooking = () => setReservationModalOpen(true);
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <Router>
      <div className="app">
        <Toast show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />

        <Navbar
          cartCount={cartCount}
          onCart={() => setCartOpen(true)}
          onBook={openBooking}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onBook={openBooking}
                onVideo={() => setVideoModalOpen(true)}
                onAddCart={addToCart}
                onGalleryOpen={setActiveGalleryModal}
                onToast={triggerToast}
                resData={resData}
                setResData={setResData}
                onReservationSubmit={handleReservationSubmit}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <MenuPage onAddCart={addToCart} onToast={triggerToast} searchQuery={searchQuery} />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onBook={openBooking} onVideo={() => setVideoModalOpen(true)} />}
          />
          <Route
            path="/gallery"
            element={<GalleryPage onOpen={setActiveGalleryModal} onToast={triggerToast} />}
          />
          <Route path="/contact" element={<ContactPage onBook={openBooking} />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>

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
    </Router>
  );
}