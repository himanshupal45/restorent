import React from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { galleryPhotos } from '../data/data';
import '../styles/Gallery.css';

export default function Gallery({ onOpen, onNav }) {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__head">
          <div>
            <span className="eyebrow">Our Gallery</span>
            <h2 className="section-title gallery__title">Moments of Good Food</h2>
            <p>A glimpse of the delicious moments at Antixor.</p>
          </div>
          <div className="gallery__nav">
            <button onClick={() => onNav('Browsing earlier gallery memories')} aria-label="Previous gallery slides">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => onNav('Browsing next gallery memories')} aria-label="Next gallery slides">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="gallery__grid">
          {galleryPhotos.map((photo) => (
            <div key={photo.title} className="gallery__item" onClick={() => onOpen(photo)}>
              <img src={photo.src} alt={photo.title} />
              <div className="gallery__hover">
                <span>{photo.tag}</span>
                <p>{photo.title}</p>
                <div className="gallery__zoom">
                  <Search size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
