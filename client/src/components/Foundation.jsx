import React from 'react';
import { GraduationCap, Laptop, Handshake, Heart } from "lucide-react";

const pillars = [
  { icon: <GraduationCap size={24} />, title: 'Scholarships for Students', desc: 'Merit-based and need-based scholarships for underprivileged students to access digital skills training' },
  { icon: <Laptop size={24} />, title: 'Free Digital Skills Training', desc: 'Weekly free workshops on AI, digital marketing and freelancing for youth in rural Tamil Nadu' },
  { icon: <Handshake size={24} />, title: 'Community Development', desc: 'Partnering with schools, NGOs and local bodies to run awareness and skill programs' },
];

export default function Foundation() {
  return (
    <section className="foundation-section" id="foundation">
      <div className="foundation-inner">
        <div className="found-grid">
          <div>
            <div className="found-badge"><Heart size={16} /> Social Impact</div>
            <h2 className="found-title">BM Foundation - <span><br />Giving Back to Tamil Nadu</span></h2>
            <p className="found-desc">
              Behind every brand in ABM Groups is a deeper purpose — to lift communities, not just businesses. BM Foundation is our commitment to Tamil Nadu's most underserved students and families.
            </p>
            <div className="found-pillars">
              {pillars.map((p, i) => (
                <div className="found-pillar" key={i}>
                  <span className="found-pillar-icon">{p.icon}</span>
                  <div>
                    <div className="found-pillar-title">{p.title}</div>
                    <div className="found-pillar-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://thebmfoundation.org/" target="_blank" className="found-cta">Visit BM Foundation →</a>
          </div>
          {/* Right Column */}
          <div>
            <div className="found-quote">
              "என் வெற்றி என் சமூகத்திற்கு திரும்ப செல்ல வேண்டும். அதுதான் ABM Groups கட்டியதன் அர்த்தம்." — Kamarudeen BM
            </div>
            {/* Right Side: Stats */}
            <div className="found-right" style={{ marginTop: '24px' }}>
              <div className="found-stat-card">
                <div className="found-stat-num"><Heart size={35} /></div>
                <div className="found-stat-label">Non-Profit. Community First.</div>
              </div>
              <div className="found-stat-card">
                <div className="found-stat-num">3</div>
                <div className="found-stat-label">Active Programs Running</div>
              </div>
              <div className="found-stat-card">
                <div className="found-stat-value" style={{ fontWeight: '900', fontSize: '32px', color: '#a03713ff' }}>thebmfoundation.org</div>
                <div className="found-stat-label">Official Foundation Website</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
