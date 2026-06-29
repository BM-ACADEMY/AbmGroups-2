import React, { useEffect, useRef } from 'react';
import { Camera, GraduationCap, Zap, Heart, Sprout, House, Phone, MessageCircle } from 'lucide-react';

export default function SocialMedia() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.reveal');
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
      { threshold: 0.05 }
    );
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="social-section" id="social">
      <div className="sec-inner">
        <div className="eyebrow">Follow Our Brands</div>
        <h2 className="sec-title">We're Live on <span className="gold">Every Platform</span></h2>
        <p className="sec-sub">Follow each brand for daily tips, offers, reels and updates from Pondicherry to Tamil Nadu.</p>
        <div className="sg-grid" ref={gridRef}>

          {/* FEATURED: Kamar Personal */}
          <div className="sc ig featured reveal" onClick={() => window.open('https://www.instagram.com/kamarudeen_bm/', '_blank')}>
            <div className="sc-inner">
              <div className="sc-live" style={{ '--dc': '#E1306C' }}></div>
              <div className="sc-featured-body">
                <div className="sc-picon"><Camera size={18} /></div>
                <div>
                  <div className="sc-platform">Instagram</div>
                  <div className="sc-name">Kamarudeen BM</div>
                  <div className="sc-handle">@kamarudeen_bm</div>
                  <div className="sc-bio">Founder · ABM Groups · Digital growth for Tamil Nadu</div>
                  <div className="sc-tags">
                    <span className="sctag">Founder</span>
                    <span className="sctag">ABM Groups</span>
                    <span className="sctag">Pondicherry</span>
                  </div>
                </div>
              </div>
              <div className="sc-divider"></div>
              <div className="sc-foot">
                <a href="https://www.instagram.com/kamarudeen_bm/" target="_blank" className="sc-btn">Follow →</a>
                <span className="sc-arr">→</span>
              </div>
            </div>
          </div>

          {/* BM Academy */}
          <div className="sc ig reveal" style={{ transitionDelay: '0.07s' }} onClick={() => window.open('https://www.instagram.com/learnwithkamar.ai', '_blank')}>
            <div className="sc-inner">
              <div className="sc-live" style={{ '--dc': '#E1306C' }}></div>
              <div className="sc-picon"><GraduationCap size={18} /></div>
              <div className="sc-platform">Instagram</div>
              <div className="sc-name">BM Academy</div>
              <div className="sc-handle">@learnwithkamar.ai</div>
              <div className="sc-divider"></div>
              <div className="sc-foot">
                <a href="https://www.instagram.com/learnwithkamar.ai" target="_blank" className="sc-btn">Follow →</a>
                <span className="sc-arr">→</span>
              </div>
            </div>
          </div>

          {/* BM TechX */}
          <div className="sc ig reveal" style={{ transitionDelay: '0.14s' }} onClick={() => window.open('https://www.instagram.com/growwithkamar', '_blank')}>
            <div className="sc-inner">
              <div className="sc-live" style={{ '--dc': '#E1306C' }}></div>
              <div className="sc-picon"><Zap size={18} /></div>
              <div className="sc-platform">Instagram</div>
              <div className="sc-name">BM TechX</div>
              <div className="sc-handle">@growwithkamar</div>
              <div className="sc-divider"></div>
              <div className="sc-foot">
                <a href="https://www.instagram.com/growwithkamar" target="_blank" className="sc-btn">Follow →</a>
                <span className="sc-arr">→</span>
              </div>
            </div>
          </div>

          {/* BM Foundation IG */}
          <div className="sc ig reveal" style={{ transitionDelay: '0.21s' }} onClick={() => window.open('https://www.instagram.com/bmfoundation__', '_blank')}>
            <div className="sc-inner">
              <div className="sc-live" style={{ '--dc': '#E1306C' }}></div>
              <div className="sc-picon"><Heart size={18} /></div>
              <div className="sc-platform">Instagram</div>
              <div className="sc-name">BM Foundation</div>
              <div className="sc-handle">@bmfoundation__</div>
              <div className="sc-divider"></div>
              <div className="sc-foot">
                <a href="https://www.instagram.com/bmfoundation__" target="_blank" className="sc-btn">Follow →</a>
                <span className="sc-arr">→</span>
              </div>
            </div>
          </div>

          {/* NPP Instagram */}
          <div className="sc ig reveal" style={{ transitionDelay: '0.28s' }} onClick={() => window.open('https://www.instagram.com/realestate_withkamar/', '_blank')}>
            <div className="sc-inner">
              <div className="sc-live" style={{ '--dc': '#E1306C' }}></div>
              <div className="sc-picon"><House size={18} /></div>
              <div className="sc-platform">Instagram</div>
              <div className="sc-name">Namma Pondy Properties</div>
              <div className="sc-handle">@realestate_withkamar</div>
              <div className="sc-divider"></div>
              <div className="sc-foot">
                <a href="https://www.instagram.com/realestate_withkamar/" target="_blank" className="sc-btn">Follow →</a>
                <span className="sc-arr">→</span>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="sc phone-c reveal" style={{ transitionDelay: '0.35s' }}>
            <div className="sc-inner">
              <div className="sc-live" style={{ '--dc': '#5725a2ff' }}></div>
              <div className="sc-picon"><Phone size={18} /></div>
              <div className="sc-platform">Direct Call</div>
              <div className="sc-name">BM Academy Admissions</div>
              <div className="sc-handle">+91 99449 40051</div>
              <div className="sc-divider"></div>
              <div className="sc-foot">
                <a href="tel:+91994494051" className="sc-btn">Call Now →</a>
                <span className="sc-arr">→</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Banner */}
          <div className="sc wa-banner reveal visible" style={{ transitionDelay: '0.42s' }}>
            <div className="sc-inner sc-wa-inner">
              <div className="sc-live" style={{ '--dc': '#25D366' }}></div>
              <div className="sc-wa-left">
                <div className="sc-picon"><MessageCircle size={20} /></div>
                <div>
                  <div className="sc-platform">WhatsApp . ABM Groups</div>
                  <div className="sc-wa-num">+91 99449 40051</div>
                  <div className="sc-wa-sub">Chat directly with Kamar - Strategy, Admissions, Partnerships</div>
                </div>
                <div className="sc-wa-left"></div>
              </div>
              <a href="https://wa.me/919944940051?text=Hello%20!%20I%20reached%20out%20from%20the%20ABM%20Groups%20website." target="_blank" className="sc-btn"> Chat on WhatsApp</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
