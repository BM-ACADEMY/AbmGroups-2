import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="sec-inner" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Get In Touch</div>
        <h2 className="sec-title">Ready to <span className="gold">Grow Together?</span></h2>
        <p className="sec-sub" style={{ margin: '0 auto' }}>
          Partner with us, enroll in a course, list a property, or simply say hello.
        </p>
        <div className="contact-btns">
          <a href="https://wa.me/919944940051?text=Hello%20%21%20I%20reached%20out%20from%20the%20ABM%20Groups%20website." target="_blank" rel="noopener noreferrer" className="btn-wa"><MessageCircle /> WhatsApp Us</a>
          <a href="mailto:admin@abmgroups.org" target="_blank" rel="noopener noreferrer" className="btn-mail"><Mail /> admin@abmgroups.org</a>
        </div>
      </div>
    </section>
  );
}
