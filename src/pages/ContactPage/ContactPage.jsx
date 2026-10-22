import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Footer from '../../components/Footer';
import './ContactPage.css';

export default function ContactPage({ onBook }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main>
      <section className="contact-page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today!</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <h3>Location</h3>
                <p>123 Tea Street<br />Sahāranpur, UP 247001<br />India</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <h3>Phone</h3>
                <p>+91 (123) 456-7890<br />+91 (123) 456-7891</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <h3>Email</h3>
                <p>hello@StarPlus.com<br />info@StarPlus.com</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <h3>Hours</h3>
                <p>Mon-Thu: 10am - 10pm<br />Fri-Sun: 10am - 11pm</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-gold">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <button className="btn btn-gold" onClick={onBook}>
              📅 Book a Table
            </button>
            <a href="tel:+911234567890" className="btn btn-gold">
              📞 Call Us Now
            </a>
            <a href="mailto:hello@StarPlus.com" className="btn btn-gold">
              ✉️ Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}