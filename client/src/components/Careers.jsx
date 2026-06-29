import React from 'react';

const roles = [
  'Business Development Executive',
  'Social Media Manager',
  'Content Creator',
  'Digital Marketing Executive',
  'Video Editor',
  'Field Sales Executive',
];

export default function Careers() {
  return (
    <section className="careers-section" id="careers">
      <div className="sec-inner">
        <div className="eyebrow">Careers</div>
        <h2 className="sec-title">Join the <span className="gold">Kamar Family</span></h2>
        <p className="sec-sub">Hiring across BM Academy, BM TechX, CoreTalents and more. Grow with us.</p>
        <div className="careers-grid">
          {roles.map((role, i) => (
            <div className="career-card" key={i}>
              <span className="career-role">{role}</span>
              <a href="https://wa.me/919944940051?text=Hello!%20I%20reached%20out%20from%20the%20ABM%20Groups%20website." target="_blank" className="career-apply">Apply →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
