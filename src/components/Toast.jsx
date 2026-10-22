import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import '../styles/Toast.css';

export default function Toast({ show, message, onClose }) {
  if (!show) return null;
  return (
    <div className="toast">
      <CheckCircle2 size={20} className="toast__icon" />
      <span className="toast__msg">{message}</span>
      <button onClick={onClose} className="toast__close" aria-label="Close notification">
        <X size={16} />
      </button>
    </div>
  );
}
