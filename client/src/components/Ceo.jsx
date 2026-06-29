import React from 'react';
import { Camera, MessageCircle, Calendar, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorCanvas from './CursorCanvas';
import WhatsAppFloat from './WhatsAppFloat';

const roadmapMilestones = [
    {
        year: '2012',
        title: 'Travel Partner',
        text: 'TravellersNeed is a travel-based initiative focused on seamless journey planning',
        color: '#0ea5e9',
        rgb: '14, 165, 233'
    },
    {
        year: '2013',
        title: 'EduTech & Abroad',
        text: 'EduConsultants Study Abroad & College Admission Experts',
        color: '#ea580c',
        rgb: '234, 88, 12'
    },
    {
        year: '2023',
        title: 'Group Inception',
        text: 'Foundation of ABM Groups',
        color: '#1e3a8a',
        rgb: '30, 58, 138'
    },
    {
        year: '2023',
        title: 'Sector Growth',
        text: 'Growth across four core sectors: Web, Academy, Food, and EdTech',
        color: '#2563eb',
        rgb: '37, 99, 235'
    },
    {
        year: '2024',
        title: 'Expansion',
        text: 'Brand consolidation and market expansion',
        color: '#9333ea',
        rgb: '147, 51, 234'
    },
    {
        year: '2025',
        title: 'Automations',
        text: 'Automations, global training programs, and franchising opportunities',
        color: '#16a34a',
        rgb: '22, 163, 74'
    },
    {
        year: '2026',
        title: 'PropTech Launch',
        text: 'Namma Pondy Properties - Launch of Pondicherry\'s hyperlocal property portal',
        color: '#2ecc9a',
        rgb: '46, 204, 154'
    }
];

const Ceo = () => {
    // High-quality placeholder image for the CEO
    const ceoImagePlaceholder = "/images/CEO.jpeg";

    React.useEffect(() => {
        const line = document.querySelector('.roadmap-line');
        const items = document.querySelectorAll('.roadmap-item');

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
        );

        if (line) obs.observe(line);
        items.forEach((item) => obs.observe(item));

        return () => obs.disconnect();
    }, []);

    return (
        <>
            <CursorCanvas />
            <Navbar />

            {/* Main content wrapper with padding-top to clear the fixed navbar */}
            <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                <section className="section" id="ceo" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="about-inner">

                        {/* Left Side: CEO Image with premium frame styling */}
                        <div className="about-frame ceo-image-container" style={{ overflow: 'hidden' }}>
                            <img
                                src={ceoImagePlaceholder}
                                alt="Kamarudeen BM"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0.85,
                                    zIndex: 1
                                }}
                            />

                            {/* Decorative corner brackets overlay */}
                            <div className="corner tl" style={{ zIndex: 2 }}></div>
                            <div className="corner tr" style={{ zIndex: 2 }}></div>
                            <div className="corner bl" style={{ zIndex: 2 }}></div>
                            <div className="corner br" style={{ zIndex: 2 }}></div>

                            {/* Title overlay */}
                            <span
                                className="about-name"
                                style={{
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
                                }}
                            >
                                கமாருதீன் BM
                            </span>
                        </div>

                        {/* Right Side: Bio Text and CTA handles */}
                        <div>
                            <div className="eyebrow ceo-animate" style={{ animationDelay: '0.15s' }}>Founder &amp; CEO</div>
                            <h2 className="sec-title ceo-animate" style={{ animationDelay: '0.25s' }}>
                                Hello, I'm <br />
                                <span style={{ color: '#d4a017' }}>Kamarudeen</span>
                            </h2>

                            <p className="about-text ceo-animate" style={{ color: '#d4a017', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '16px', animationDelay: '0.35s' }}>
                                Entrepreneur <span style={{ color: 'rgba(240, 237, 230, 0.3)', margin: '0 6px' }}>|</span> Brand Builder <span style={{ color: 'rgba(240, 237, 230, 0.3)', margin: '0 6px' }}>|</span> Visionary
                            </p>

                            <p className="about-text ceo-animate" style={{ animationDelay: '0.45s' }}>
                                Transforming ideas into successful brands with innovative strategies and creative solutions.
                                Over 14+ years of leading growth initiatives and engineering the ABM Flywheel to deliver
                                high-value services across education, tech, real estate, and philanthropy.
                            </p>

                            <div className="about-handles ceo-animate" style={{ marginTop: '32px', animationDelay: '0.55s' }}>
                                <a href="mailto:ceo@abmgroups.org" className="handle-link"><Mail size={16} /> Email</a>
                                <a href="https://wa.me/918056889971?text=Hello%20!%20I%20reached%20out%20from%20the%20ABM%20Groups%20website." target="_blank" rel="noopener noreferrer" className="handle-link">
                                    <MessageCircle size={16} /> WhatsApp
                                </a>
                                <a href="https://www.instagram.com/kamarudeen_bm/" target="_blank" rel="noopener noreferrer" className="handle-link">
                                    <Camera size={18} /> Instagram
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Associated Brand Logos Section at the bottom */}
                    <div className="ceo-animate" style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', animationDelay: '0.65s' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: '32px',
                            alignItems: 'center',
                            justifyItems: 'center',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            fontSize: '18px',
                            color: '#555'
                        }}>
                            <a href="https://bmtechx.in" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#555'}>BM Techx</a>
                            <a href="https://www.instagram.com/_dadaskitchen_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#555'}>DADA'S KITCHEN</a>
                            <a href="https://travellersneed-client.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#555'}>TRAVEL PARTNER</a>
                            <a href="https://coretalents.in/" target="_blank" rel="noopener noreferrer" style={{ transition: 'color 0.2s', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#555'}>CORE TALENT</a>
                        </div>
                    </div>
                </section>

                {/* Our Roadmap Section */}
                <section className="section" id="roadmap" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '80px 5vw' }}>
                    <div className="sec-inner" style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <div className="eyebrow" style={{ justifyContent: 'center' }}>Roadmap</div>
                        <h2 className="sec-title">Our <span className="gold">Roadmap</span></h2>
                        <p className="sec-sub" style={{ margin: '0 auto' }}>Milestones that shaped our journey</p>
                    </div>

                    <div className="roadmap-container">
                        <div className="roadmap-line"></div>
                        {roadmapMilestones.map((m, i) => {
                            const isLeft = i % 2 === 0;
                            return (
                                <div
                                    key={i}
                                    className={`roadmap-item ${isLeft ? 'left-card' : 'right-card'}`}
                                    style={{
                                        '--m-color': m.color,
                                        '--m-color-rgb': m.rgb,
                                        '--m-shadow': m.color + '30'
                                    }}
                                >
                                    <div className="roadmap-circle"></div>
                                    <div className="roadmap-year">{m.year}</div>
                                    <div className="roadmap-card-wrapper">
                                        <div className="roadmap-card">
                                            <div className="roadmap-card-header">
                                                <span className="roadmap-card-badge">{m.title}</span>
                                                <span className="roadmap-card-icon">
                                                    <Calendar size={16} />
                                                </span>
                                            </div>
                                            {m.text}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <Footer />
            </div>

            <WhatsAppFloat />
        </>
    );
};

export default Ceo;