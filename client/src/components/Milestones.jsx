import React from 'react';

const milestones = [
  { year: '2013', event: 'BM TechX Founded', detail: 'Started as a solo digital agency in Kottakuppam, Pondicherry' },
  { year: '2016', event: 'First 100 Clients', detail: 'BM TechX crosses 100 business clients across Tamil Nadu' },
  { year: '2018', event: 'BM Academy Launched', detail: 'Digital skills training begins — first batch of 12 students' },
  { year: '2022', event: '1,000 Students Milestone', detail: "BM Academy crosses 1,000 trained students — Tamil Nadu's #1" },
  { year: '2023', event: 'ABM Groups Born', detail: 'Multi-brand group structure formed — 3 brands under one roof' },
  { year: '2023', event: 'NPP & CoreTalents Launch', detail: 'Real estate and hyperlocal jobs portal added to the group' },
  { year: '2024', event: 'LeadOS & AI Stack Built', detail: 'In-house AI WhatsApp CRM — LeadOS goes live for BM TechX clients' },
  { year: '2025', event: '7 Brands. ₹50Cr+ Impact.', detail: 'EduConsultants added. Full AI-first group with pan-TN presence', isCurrent: true },
];

export default function Milestones() {
  return (
    <section className="timeline-section" id="milestones">
      <div className="sec-inner">
        <div className="eyebrow">Our Journey</div>
        <h2 className="sec-title">14 Years. <span className="gold">One Unstoppable Vision.</span></h2>
        <p className="sec-sub">From a one-person digital agency in Pondicherry to a 7-brand group serving all of Tamil Nadu.</p>
      </div>
      <div className="timeline-scroll">
        <div className="timeline-track">
          {milestones.map((m, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-content">
                <div className="tl-year">{m.year}</div>
                <div className="tl-event">{m.event}</div>
                <div className="tl-detail">{m.detail}</div>
              </div>
              <div
                className="tl-dot"
                style={m.isCurrent ? { background: '#C0392B', outlineColor: '#C0392B' } : undefined}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
