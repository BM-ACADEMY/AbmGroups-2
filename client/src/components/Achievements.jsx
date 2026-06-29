import React from 'react';
import { BadgeDollarSign, GraduationCap, Briefcase, Star, Building2, Map, Bot, CalendarDays } from 'lucide-react';

const achievements = [
  { icon: <BadgeDollarSign/>, num: '₹50Cr+', label: 'Revenue Generated', sub: 'For 750+ businesses across Tamil Nadu through BM TechX' },
  { icon: <GraduationCap/>, num: '1,400+', label: 'Lives Trained', sub: 'Students from Pondicherry, Chennai, Villupuram, Cuddalore & beyond' },
  { icon: <Briefcase/>, num: '150+', label: 'Students Placed', sub: 'Digital marketing, development & design roles across Tamil Nadu' },
  { icon: <Star/>, num: '4.8★', label: 'Google Rating', sub: 'Consistent 4.8 rating across BM Academy & BM TechX GMB profiles' },
  { icon: <Building2/>, num: '7', label: 'Brands Built', sub: 'From education to real estate — all bootstrapped, all profitable' },
  { icon: <Map/>, num: 'Pan-TN', label: 'Reach', sub: 'Students & clients from 15+ districts across Tamil Nadu' },
  { icon: <Bot/>, num: '13+', label: 'AI Automations', sub: "n8n workflows powering ABM Groups' internal operations daily" },
  { icon: <CalendarDays/>, num: '14+', label: 'Years in Business', sub: 'Started 2010. Still growing. Never stopped. Kottakuppam to Tamil Nadu.' },
];

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="sec-inner">
        <div className="eyebrow">Achievements</div>
        <h2 className="sec-title">Numbers That <span className="gold">Speak for Themselves</span></h2>
        <p className="sec-sub">Built over 14 years. Not funded. Not accidental. Earned — one student, one client, one brand at a time.</p>
        <div className="ach-grid">
          {achievements.map((a, i) => (
            <div className="ach-card reveal cursor-pointer" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="ach-icon">{a.icon}</span>
              <div className="ach-num">{a.num}</div>
              <div className="ach-label">{a.label}</div>
              <div className="ach-sub">{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
