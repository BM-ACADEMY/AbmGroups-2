import React, { useState } from 'react';
import { FileText, GraduationCap, Zap, Briefcase, House, EarthIcon, Plane, CookingPot, ChartNoAxesCombined } from 'lucide-react';


const brandPills = [
  { icon: <GraduationCap size={20} />, name: 'BM Academy', cat: 'EdTech · Digital Skills', desc: 'Trains students and professionals in digital skills through structured, job-ready online and offline courses.' },
  { icon: <Zap size={20} />, name: 'BM TechX', cat: 'MarTech · AI Agency', desc: 'Helps businesses grow using AI-driven marketing, automation, and technology solutions tailored to their needs.' },
  { icon: <Briefcase size={20} />, name: 'CoreTalents', cat: 'HRTech · Job Portal', desc: 'Connects job seekers with employers through a smart hiring and recruitment platform across industries.' },
  { icon: <House size={20} />, name: 'Namma Pondy Properties', cat: 'PropTech · Real Estate', desc: 'Offers real estate listings, property deals, and investment opportunities in and around Puducherry.' },
  { icon: <EarthIcon size={20} />, name: 'EduConsultants', cat: 'StudyAbroad · Counseling', desc: 'Guides students through study-abroad applications, university selection, visas, and overseas education counseling.' },
];

export default function Investors() {
  const [open, setOpen] = useState({});
  return (
    <section className="investor-section" id="investors">
      <div className="inv-inner">
        <div>
          <div className="inv-tag"><ChartNoAxesCombined className="inv-icon" size={18} /> Investor Relations</div>
          <h2 className="inv-title">Invest in Tamil Nadu's <span>Next Growth Story</span></h2>
          <p className="inv-desc">
            ABM Groups is a bootstrapped, multi-brand group with 14+ years of proven traction across education, tech, real estate and more. We're opening select partnerships to accelerate expansion across Tamil Nadu and beyond.
          </p>
          <div className="inv-stats">
            <div className="inv-stat">
              <div className="inv-stat-num">₹50Cr</div>
              <div className="inv-stat-label">Revenue Impact for Clients</div>
            </div>
            <div className="inv-stat">
              <div className="inv-stat-num">7</div>
              <div className="inv-stat-label">Revenue Generating Brands</div>
            </div>
            <div className="inv-stat">
              <div className="inv-stat-num">14</div>
              <div className="inv-stat-label">Years Bootstrapped</div>
            </div>
            <div className="inv-stat">
              <div className="inv-stat-num">Pan-TN</div>
              <div className="inv-stat-label">Market Presence</div>
            </div>
          </div>
          <div className="inv-ctas">
            <a href="https://wa.me/919944940051?text=Hello!%20I%20reached%20out%20from%20the%20ABM%20Groups%20website." target="_blank" className="btn-inv"> <FileText size={18} />View Full Investor Page</a>
            <a href="mailto:ceo@abmgroups.org?subject=Meeting%20Request&body=Hello%20!%20I%20reached%20out%20from%20the%20ABM%20Groups%20website." className="btn-inv-ghost">Book a Meeting</a>
          </div>
        </div>
        <div className="inv-right">
          {brandPills.map((b, i) => (
            // ✅ CHANGED: added inv-pill-top wrapper so description drops below
            <div className="inv-brand-pill" key={i} onClick={() => setOpen(prev => ({ [b.name]: !prev[b.name] }))} style={{ cursor: 'pointer' }}>
              <div className="inv-pill-top">
                <span className="inv-pill-icon">{b.icon}</span>
                <div>
                  <div className="inv-pill-name">{b.name}</div>
                  <div className="inv-pill-cat">{b.cat}</div>
                </div>
                <span className="inv-pill-arrow">→</span>
              </div>
              {open[b.name] && <p className="inv-pill-desc">{b.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}