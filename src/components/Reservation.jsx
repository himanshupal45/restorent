import React from 'react';
import '../styles/Reservation.css';

export const timeSlots = [
  { value: '17:00', label: '05:00 PM' },
  { value: '18:00', label: '06:00 PM' },
  { value: '19:30', label: '07:30 PM' },
  { value: '20:30', label: '08:30 PM' },
  { value: '21:30', label: '09:30 PM' },
];

export const guestOptions = ['1 Person', '2 Guests', '4 Guests', '6 Guests', '8+ Group'];

export default function Reservation({ resData, setResData, onSubmit }) {
  const update = (field) => (e) => setResData({ ...resData, [field]: e.target.value });

  return (
    <section id="contact" className="reserve">
      <div className="container">
        <div className="reserve__box">
          <div className="reserve__visual">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80"
              alt="Romantic candlelit table at Antixor"
            />
            <div className="reserve__caption">
              <div>
                <span>Atmospheric Dining</span>
                <p>Unwind in our signature ambiance</p>
              </div>
            </div>
          </div>

          <div className="reserve__form-wrap">
            <h2 className="section-title reserve__title">Book Your Table</h2>
            <p className="reserve__sub">Reserve your spot and let us take care of the rest.</p>

            <form onSubmit={onSubmit} className="reserve__form">
              <div className="reserve__row reserve__row--3">
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
                <div>
                  <label>Guests</label>
                  <select value={resData.guests} onChange={update('guests')}>
                    {guestOptions.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="reserve__row reserve__row--2">
                <input type="text" placeholder="Your Name" required value={resData.name} onChange={update('name')} />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={resData.email}
                  onChange={update('email')}
                />
              </div>

              <button type="submit" className="btn btn-gold reserve__submit">
                Reserve Now →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
