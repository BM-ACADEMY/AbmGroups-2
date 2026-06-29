import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-tamil">கல்வி · தொழில் · வளர்ச்சி · சொத்து · வெற்றி</p>
        <h1 className="hero-title">
          <span className="line1" id="typingLine">One Group.</span>
          <span className="line2">Seven Growth Engines.</span>
        </h1>
        <p className="hero-sub">From digital education to real estate, study abroad to group tours — ABM Groups powers careers, businesses and futures across Tamil Nadu.</p>
        <div className="hero-ctas">
          <a href="#brands" className="btn-primary">Explore Our Brands</a>
          <a href="https://wa.me/919944940051?text=Hello!%20I%20reached%20out%20from%20the%20ABM%20Groups%20website." className="btn-ghost" target="_blank"><MessageCircle size={14} /> WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
