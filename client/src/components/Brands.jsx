import React, { useEffect, useRef } from 'react';
import { GraduationCap, Zap, Briefcase, House, EarthIcon, Plane, CookingPot } from 'lucide-react';

const brands = [
  { icon: <GraduationCap size={30} />, name: 'BM Academy', tagline: 'Learn Digital. Get Placed.', desc: "1,400+ students trained. 150+ placed. Pondicherry's #1 digital skills academy. AI, Ads, SEO, Design — all under one roof.", stat: '1,400+ Students', cta: 'Explore →', url: 'https://thebmacademy.com/', color: '#D4A017' },
  { icon: <Zap size={30} />, name: 'BM TechX', tagline: 'Grow Your Business with AI Marketing.', desc: "750+ businesses served. LeadOS, Meta Ads, SEO, Reels, WhatsApp Automation. Tamil Nadu's AI-first digital agency.", stat: '750+ Businesses', cta: 'Get Audit →', url: 'https://bmtechx.in', color: '#1A9E8F' },
  { icon: <Briefcase size={30} />, name: 'CoreTalents', tagline: "Tamil Nadu's Hyperlocal Job Portal.", desc: 'Connecting fresh talent with local employers. Zero noise. Pure opportunities. Built for Pondicherry & Tamil Nadu.', stat: '500+ Jobs', cta: 'Find Jobs →', url: 'https://coretalents.in/', color: '#7C6FCD' },
  { icon: <House size={30} />, name: 'Namma Pondy Properties', tagline: "Pondicherry's Hyperlocal Property Portal.", desc: 'Buy, sell, or rent 100% verified plots, villas, and commercial spaces in Pondicherry. Enjoy complete peace of mind with our legal verification and end-to-end support.', stat: 'Verified Listings', cta: 'Find Properties →', url: 'https://nammapondyproperties.com/', color: '#2ECC9A' },
  { icon: <EarthIcon size={30} />, name: 'EduConsultants', tagline: 'Study Abroad. Without Confusion.', desc: 'MBBS abroad, Engineering, UG/PG international, Domestic admissions. Expert counseling for NEET students & families.', stat: 'Free Counseling', cta: 'Book Now →', url: 'https://edu.abmgroups.org/cgi-sys/defaultwebpage.cgi', color: '#E8694A' },
  { icon: <CookingPot size={30} />, name: "Dada's Kitchen", tagline: 'Bulk Catering for Every Celebration.', desc: 'Weddings, corporate events, school functions. Authentic flavors, firewood cooking, on-time delivery across Pondicherry.', stat: '500+ Events', cta: 'Follow on IG →', url: 'https://www.instagram.com/_dadaskitchen_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D', color: '#F0C040' },
  { icon: <Plane size={30} />, name: 'TravellersNeed', tagline: 'Group Tours & College IV Packages.', desc: 'Budget to premium packages. College industrial visits, family trips, pilgrimages. Group bookings with best margins.', stat: '200+ Tours', cta: 'Plan Trip →', url: 'https://travellersneed-client.onrender.com/', color: '#5BA4F5' },
];

export default function Brands() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.brand-card');
    if (!cards) return;
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
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="brands">
      <div className="sec-inner">
        <div className="eyebrow">Our Brands</div>
        <h2 className="sec-title">Built for Every Stage of <span className="gold">Growth</span></h2>
        <p className="sec-sub">Seven focused brands. One unified mission: grow people and businesses across Tamil Nadu.</p>
        <div className="brands-grid" id="brandsGrid" ref={gridRef}>
          {brands.map((b, i) => (
            <div className="brand-card" key={i} style={{ '--bc': b.color, transitionDelay: `${i * 0.08}s` }}>
              <div className="brand-accent"></div>
              <span className="brand-icon">{b.icon}</span>
              <div className="brand-name">{b.name}</div>
              <div className="brand-tagline">{b.tagline}</div>
              <p className="brand-desc">{b.desc}</p>
              <div className="brand-footer">
                <span className="brand-stat">{b.stat}</span>
                <a href={b.url} target="_blank" className="brand-cta">{b.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
