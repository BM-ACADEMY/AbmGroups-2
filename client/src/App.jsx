import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import CursorCanvas from './components/CursorCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Stats from './components/Stats';
import VisionMission from './components/VisionMission';
import Milestones from './components/Milestones';
import Achievements from './components/Achievements';
import Brands from './components/Brands';
import Flywheel from './components/Flywheel';
import SocialMedia from './components/SocialMedia';
import Investors from './components/Investors';
import Foundation from './components/Foundation';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Ceo from './components/Ceo';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Scroll-based reveal animation + nav scroll styling
  useEffect(() => {
    const nav = document.getElementById('mainNav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for .reveal elements
    const revealEls = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => obs.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <CursorCanvas />
              <Navbar />
              <Hero />
              <Ticker />
              <Stats />
              <VisionMission />
              <Milestones />
              <Achievements />
              <Brands />
              <Flywheel />
              <SocialMedia />
              <Investors />
              <Foundation />
              <About />
              <Careers />
              <Contact />
              <Footer />
              <WhatsAppFloat />
            </>
          }
        />

        {/* CEO Page */}
        <Route path="/ceo.html" element={<Ceo />} />
      </Routes>
    </>
  );
};

export default App;