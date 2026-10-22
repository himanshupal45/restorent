import React from 'react';
import { X } from 'lucide-react';
import { timeSlots, guestOptions } from './Reservation';
import '../styles/Modal.css';

export default function ReservationModal({ resData, setResData, onSubmit, onClose }) {
  const update = (field) => (e) => setResData({ ...resData, [field]: e.target.value });

  return (
    <div className="modal modal--dim" onClick={onClose}>
      <div className="modal__box modal__box--light" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close modal__close--dark" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="modal__header">
          <span>Antixor Experience</span>
          <h3>Book Your Table</h3>
          <p>Instant reservation with immediate table allocation</p>
        </div>

        <form onSubmit={onSubmit} className="modal__form">
          <div className="modal__row">
            <div>
              <label>Date</label>
              <input type="date" required value={resData.date} onChange={update('date')} />
            </div>
            <div>
              <label>Time</label>
              <select value={resData.time} onChange={update('time')}>
                {timeSlots.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label>Number of Guests</label>
            <select value={resData.guests} onChange={update('guests')}>
              {guestOptions.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Full Name</label>
            <input type="text" placeholder="e.g. Eleanor Vance" required value={resData.name} onChange={update('name')} />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="eleanor@example.com"
              required
              value={resData.email}
              onChange={update('email')}
            />
          </div>

          <button type="submit" className="modal__submit">
            Confirm Table Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
