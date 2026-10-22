import React from 'react';
import { X, Play } from 'lucide-react';
import '../styles/Modal.css';

export default function VideoModal({ onClose }) {
  return (
    <div className="modal modal--dark" onClick={onClose}>
      <div className="modal__box modal__box--video" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close modal__close--light" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        <h3 className="modal__video-title">Antixor Kitchen Experience</h3>
        <div className="modal__video">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
            alt="Chef preparing food"
          />
          <div className="modal__video-info">
            <div className="modal__video-play">
              <Play size={24} fill="currentColor" />
            </div>
            <p>The Heart of Antixor</p>
            <span>From organic farm selection to artisanal fine dining</span>
          </div>
        </div>
      </div>
    </div>
  );
}
