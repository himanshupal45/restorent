import React from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import Menu from '../../components/Menu';
import About from '../../components/About';
import Gallery from '../../components/Gallery';
import Popular from '../../components/Popular';
import Chef from '../../components/Chef';
import WhyChoose from '../../components/WhyChoose';
import Testimonials from '../../components/Testimonials';
import Reservation from '../../components/Reservation';
import CtaBanner from '../../components/CtaBanner';
import Footer from '../../components/Footer';
import { popularMeals } from '../../data/data';

export default function HomePage({
  searchQuery,
  setSearchQuery,
  onBook,
  onVideo,
  onAddCart,
  onGalleryOpen,
  onToast,
  resData,
  setResData,
  onReservationSubmit,
}) {
  return (
    <main>
      <Hero onBook={onBook} onVideo={onVideo} />
      <Features />
      <Menu onCategory={(t) => onToast(`Browsing ${t} selection`)} />
      <About onBook={onBook} onVideo={onVideo} />
      <Gallery onOpen={onGalleryOpen} onNav={onToast} />
      <Popular
        meals={popularMeals}
        searchQuery={searchQuery}
        onAdd={onAddCart}
        onNav={onToast}
      />
      <Chef onBook={onBook} />
      <WhyChoose />
      <Testimonials />

      <Reservation
        resData={resData}
        setResData={setResData}
        onSubmit={onReservationSubmit}
        onOpenModal={onBook}
      />

      <CtaBanner onBook={onBook} />
      <Footer />
    </main>
  );
}