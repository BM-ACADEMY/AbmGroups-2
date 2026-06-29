import React from 'react';
import { Zap, GraduationCap, Sprout } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="vm-grid">
        <div className="vm-card vision reveal">
          <div className="vm-label">Our Vision</div>
          <p className="vm-statement">
            "To make Tamil Nadu the digital growth capital of South India — one brand at a time."
          </p>
          <p className="vm-desc">
            Every brand in ABM Groups is built to solve a real problem Tamil Nadu's people face — from getting a job to growing a business, from buying land to studying abroad.
          </p>
        </div>
        <div className="vm-card mission reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="vm-label">Our Mission</div>
          <p className="vm-statement">Educate. Empower. Elevate.</p>
          <div className="mission-pillars">
            <div className="pillar">
              <span className="pillar-icon"><GraduationCap size={24} /></span>
              <div>
                <div className="pillar-text">Educate</div>
                <div className="pillar-sub">World-class digital skills for Tamil Nadu's youth</div>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-icon"><Zap size={24} /></span>
              <div>
                <div className="pillar-text">Empower</div>
                <div className="pillar-sub">AI-powered tools for local businesses to compete globally</div>
              </div>
            </div>
            <div className="pillar">
              <span className="pillar-icon"><Sprout size={24} /></span>
              <div>
                <div className="pillar-text">Elevate</div>
                <div className="pillar-sub">Build wealth through real estate, jobs &amp; community</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
