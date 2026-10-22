import React from 'react';
import About from '../../components/About';
import Chef from '../../components/Chef';
import WhyChoose from '../../components/WhyChoose';
import Testimonials from '../../components/Testimonials';
import CtaBanner from '../../components/CtaBanner';
import Footer from '../../components/Footer';
import'./AboutPage.css';

export default function AboutPage({ onBook, onVideo }) {
  return (
    <main>
      <section className="about-page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our story and passion for chiya</p>
        </div>
      </section>

      <About onBook={onBook} onVideo={onVideo} />
      <Chef onBook={onBook} />
      <WhyChoose />
      <Testimonials />
      <CtaBanner onBook={onBook} />
      <Footer />
    </main>
  );
}
