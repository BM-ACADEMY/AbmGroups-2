import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
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
    <nav id="mainNav" className="nav">
      <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        <span className="abm">ABM</span>
        <span className="groups"> Groups</span>
        <span className="dot"></span>
      </Link>
      <div className="nav-links">
        <a href="/#brands" onClick={(e) => scrollToSection(e, 'brands')}>Brands</a>
        <a href="/#milestones" onClick={(e) => scrollToSection(e, 'milestones')}>Journey</a>
        <a href="/#investors" onClick={(e) => scrollToSection(e, 'investors')}>Investors</a>

        <Link to="/ceo.html" style={location.pathname === '/ceo' ? { color: '#D4A017', fontWeight: '600' } : {}}>CEO</Link>
        
        <a href="/#foundation" onClick={(e) => scrollToSection(e, 'foundation')}>Foundation</a>
        <a href="/#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
        <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
      </div>
      <a href="/#investors" onClick={(e) => scrollToSection(e, 'investors')} className="nav-cta">Invest in ABM</a>
    </nav>
  );
}