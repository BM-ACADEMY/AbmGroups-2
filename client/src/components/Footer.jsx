import React from 'react';
import { Zap, Camera, MessageCircle, Phone, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (e, id) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="f-logo"><span className="abm">ABM</span> Groups</div>
          <p className="f-tagline">
            Kottakuppam, Pondicherry<br />
            Tamil Nadu, India
          </p>
          <div className="spacer"></div>
          <p className="f-tagline">+91 99449 40051 <br />+91 99442 88271<br />+91 94038 92971 <br /></p>
        </div>
        <div>
          <div className="f-col-title">Our Brands</div>
          <a href="https://thebmacademy.com/" target="_blank" className="f-link">BM Academy</a>
          <a href="https://bmtechx.in" target="_blank" className="f-link">BM TechX</a>
          <a href="https://coretalents.in/" target="blank" className="f-link">CoreTalents</a>
          <a href="https://nammapondyproperties.com/" target="_blank" className="f-link">Namma Pondy Properties</a>
          <a href="https://edu.abmgroups.org/cgi-sys/defaultwebpage.cgi" target="blank" className="f-link">EduConsultants</a>
          <a href="https://www.instagram.com/_dadaskitchen_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="blank" className="f-link">Dada's Kitchen</a>
          <a href="https://travellersneed-client.onrender.com/" target="blank" className="f-link">TravellersNeed</a>
          <a href="https://www.instagram.com/bmfoundation__" target="_blank" className="f-link">BM Foundation</a>
        </div>
        <div>
          <div className="f-col-title">Connect</div>
          <a href="https://wa.me/919944940051" target="_blank" className="f-link"><MessageCircle size={12} /> WhatsApp</a>
          <a href="mailto:admin@abmgroups.org" className="f-link"><Mail size={12} /> admin@abmgroups.org</a>
          <a href="tel:+919944940051" className="f-link"><Phone size={12} /> +91 99449 40051</a>
          <a href="https://www.instagram.com/abmgroups_/" target="_blank" className="f-link"><Camera size={12} /> Instagram</a>
        </div>
        <div>
          <div className="f-col-title">Company</div>
          <a href="/#about" onClick={(e) => scrollToSection(e, 'about')} className="f-link">About Kamar</a>
          <a href="/#milestones" onClick={(e) => scrollToSection(e, 'milestones')} className="f-link">Our Journey</a>
          <a href="/#investors" onClick={(e) => scrollToSection(e, 'investors')} className="f-link">Investors</a>
          <a href="/#foundation" onClick={(e) => scrollToSection(e, 'foundation')} className="f-link">BM Foundation</a>
          <a href="/#careers" onClick={(e) => scrollToSection(e, 'careers')} className="f-link">Careers</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026   ABM Groups. All rights reserved.</span>
        <span>Built by BM TechX <Zap size={12} /></span>
      </div>
    </footer>
  );
}