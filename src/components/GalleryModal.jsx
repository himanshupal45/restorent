import React from 'react';
import { X } from 'lucide-react';
import '../styles/Modal.css';

export default function GalleryModal({ photo, onClose, onBook }) {
  return (
    <div className="modal modal--darker" onClick={onClose}>
      <div className="modal__box modal__box--gallery" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close modal__close--circle" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>
        <div className="modal__gallery-img">
          <img src={photo.src} alt={photo.title} />
        </div>
        <div className="modal__gallery-info">
          <div>
            <span>{photo.tag}</span>
            <h4>{photo.title}</h4>
          </div>
          <button className="modal__gallery-btn" onClick={onBook}>
            Experience This
          </button>
        </div>
      </div>
    </div>
  );
}
