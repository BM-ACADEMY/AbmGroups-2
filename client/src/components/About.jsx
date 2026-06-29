import { Camera, Zap, MessageCircle, Mail } from 'lucide-react';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about-inner">
        <div className="about-frame" style={{ overflow: 'hidden' }}>
          <img
            src="/images/CEO.jpeg"
            alt="கமாருதீன் BM"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.85,
              zIndex: 1
            }}
          />
          <div className="corner tl" style={{ zIndex: 2 }}></div>
          <div className="corner tr" style={{ zIndex: 2 }}></div>
          <div className="corner bl" style={{ zIndex: 2 }}></div>
          <div className="corner br" style={{ zIndex: 2 }}></div>
          <span className="about-name" style={{
            position: 'absolute',
            bottom: '16px',
            zIndex: 2,
            background: 'rgba(13, 13, 26, 0.85)',
            padding: '6px 16px',
            border: '1px solid rgba(212, 160, 23, 0.3)',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '1px'
          }}>Kamarudeen BM</span>
        </div>
        <div>
          <div className="eyebrow">Founder &amp; CEO</div>
          <h2 className="sec-title">Built from Pondicherry.<br /><span style={{ color: '#d4a017' }}>Grown for Tamil Nadu.</span></h2>
          <p className="about-text">
            Kamarudeen BM started ABM Groups with one goal — make world-class education, marketing, and growth accessible to people in Tier 2 and Tier 3 Tamil Nadu.
          </p>
          <p className="about-text">
            Over 14+ years, what began as a solo digital agency has grown into a 7-brand group serving students, businesses, families, and investors across the region.
          </p>
          <p className="about-text">
            His vision: an AI-first, automation-heavy group where every brand feeds the next — the ABM Flywheel. From BM Academy to BM Foundation, every brand has a purpose beyond profit.
          </p>
          <div className="about-handles">
            <a href="mailto:ceo@abmgroups.org" className="handle-link"><Mail size={16} /> Email</a>
            <a href="https://wa.me/918056889971?text=Hello%20!%20I%20reached%20out%20from%20the%20ABM%20Groups%20website." target="_blank" rel="noopener noreferrer" className="handle-link"><MessageCircle size={16} /> WhatsApp</a>
            <a href="https://www.instagram.com/kamarudeen_bm/" target="_blank" rel="noopener noreferrer" className="handle-link"><Camera size={18} /> Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
