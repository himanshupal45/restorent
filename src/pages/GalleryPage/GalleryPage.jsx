import React from 'react';
import Gallery from '../../components/Gallery';
import CtaBanner from '../../components/CtaBanner';
import Footer from '../../components/Footer';
import './GalleryPage.css';

export default function GalleryPage({ onOpen, onToast }) {
  return (
    <main>
      <section className="gallery-page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our beautiful collection of chiya moments</p>
        </div>
      </section>

      <Gallery onOpen={onOpen} onNav={onToast} />
      
      <CtaBanner onBook={() => onToast('Opening booking modal...')} />
      <Footer />
    </main>
  );
}
