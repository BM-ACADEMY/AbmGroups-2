import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorCanvas from './CursorCanvas';
import WhatsAppFloat from './WhatsAppFloat';
import { ShieldCheck, BookOpen, Layers, Award, ShieldAlert, CreditCard, RefreshCw } from 'lucide-react';

const TermsPage = () => {
  useEffect(() => {
    // 1. Meta Title
    document.title = "Terms & Conditions | ABM Groups";

    // 2. Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://abmgroups.org/terms");

    // 3. Open Graph Meta Tags
    const metaTags = [
      { property: "og:title", content: "Terms & Conditions | ABM Groups" },
      { property: "og:description", content: "Review the Terms & Conditions governing the use of ABM Groups websites, services, and multi-vertical business solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://abmgroups.org/terms" },
      { property: "og:site_name", content: "ABM Groups" },
      { property: "og:image", content: "https://abmgroups.org/images/abm-groups-logo.png" },
      { property: "og:locale", content: "en_IN" },
    ];

    metaTags.forEach((tag) => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", tag.content);
    });

    // 4. Schema.org Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms & Conditions",
      "url": "https://abmgroups.org/terms",
      "description": "Terms and Conditions of ABM Groups explaining user terms, payments, and service rules.",
      "publisher": {
        "@type": "Organization",
        "name": "ABM Groups",
        "url": "https://abmgroups.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://abmgroups.org/images/abm-groups-logo.png"
        }
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData);

    return () => {
      // Cleanup tags if needed
    };
  }, []);

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: ShieldCheck },
    { id: 'verticals', title: '2. Business Verticals', icon: Layers },
    { id: 'services', title: '3. Scope of Services', icon: BookOpen },
    { id: 'responsibilities', title: '4. User Responsibilities', icon: Award },
    { id: 'payments', title: '5. Fees & Payments', icon: CreditCard },
    { id: 'liability', title: '6. Limitation of Liability', icon: ShieldAlert },
    { id: 'modifications', title: '7. Modifications', icon: RefreshCw },
  ];

  return (
    <>
      <CursorCanvas />
      <Navbar />

      {/* Main Container */}
      <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#0D0D1A' }}>
        
        {/* Content Wrapper */}
        <div className="sec-inner" style={{ padding: '60px 5vw 80px', flex: 1 }}>
          
          {/* Header Title Block */}
          <div style={{ marginBottom: '50px', borderBottom: '1px solid rgba(212,160,23,0.15)', paddingBottom: '30px' }}>
            <div className="eyebrow">Legal Agreement</div>
            <h1 className="sec-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '12px' }}>
              Terms &amp; <span className="gold">Conditions</span>
            </h1>
            <p style={{ color: 'rgba(240, 237, 230, 0.45)', fontSize: '14px', fontWeight: '500' }}>
              Last Updated: October 2025
            </p>
          </div>

          {/* Grid Layout (Sidebar + Main Content) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '40px' }} className="lg:grid-cols-4 md:grid-cols-1">
            
            {/* Table of Contents Sidebar */}
            <div className="hidden lg:block lg:col-span-1" style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '24px' }}>
                <h4 style={{ color: '#D4A017', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>
                  On This Page
                </h4>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'static', padding: 0, height: 'auto', background: 'none', borderBottom: 'none' }}>
                  {sections.map((sec) => {
                    const IconComponent = sec.icon;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          color: 'rgba(240, 237, 230, 0.55)',
                          fontSize: '13px',
                          textDecoration: 'none',
                          fontWeight: '500',
                          transition: 'color 0.2s, padding-left 0.2s',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = '#D4A017';
                          e.currentTarget.style.paddingLeft = '4px';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = 'rgba(240, 237, 230, 0.55)';
                          e.currentTarget.style.paddingLeft = '0px';
                        }}
                      >
                        <IconComponent size={14} style={{ color: '#D4A017' }} />
                        {sec.title.substring(3)}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Policy Content */}
            <div className="lg:col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Acceptance of Terms */}
              <section id="acceptance" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <ShieldCheck size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>1. Acceptance of Terms</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    Welcome to <strong>ABM Groups</strong>. By accessing or using our
                    website or any of our services, you agree to comply with these Terms
                    and Conditions. Please read them carefully before continuing.
                  </p>
                </div>
              </section>

              {/* Business Verticals */}
              <section id="verticals" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Layers size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>2. Business Verticals &amp; Services</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    ABM Groups is a multi-vertical business organization offering
                    services in nine different sectors — Techx, BM Academy, Core Talent,
                    Dada’s Kitchen, BM Foundation, Al Amanath, Al Haramani, Travel
                    Needs, and Edu Consultant. Each vertical operates independently but
                    shares a common goal of delivering quality, trust, and innovation.
                  </p>
                </div>
              </section>

              {/* Scope of Services */}
              <section id="services" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <BookOpen size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>3. Scope of Services</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>
                    <strong>Techx</strong> focuses on IT technology services including digital marketing,
                    website creation, and video editing. <strong>BM Academy</strong> provides IT and
                    Non-IT courses with placement support. <strong>Core Talent</strong> handles
                    recruitment services for various companies.
                  </p>
                  <p>
                    <strong>Dada’s Kitchen</strong> manages complete event services from planning to execution.
                    <strong>BM Foundation</strong> is involved in social and community welfare activities.
                    <strong>Al Amanath</strong> deals with real estate and property consultation, while
                    <strong>Al Haramani</strong> offers Umrah and Hajj services.
                  </p>
                  <p>
                    <strong>Travel Needs</strong> serves as a travel agency offering domestic and international
                    packages, and <strong>Edu Consultant</strong> guides students in pursuing MBBS and other
                    educational opportunities in India and abroad.
                  </p>
                </div>
              </section>

              {/* User Responsibilities */}
              <section id="responsibilities" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Award size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>4. User Responsibilities &amp; Intellectual Property</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>
                    When using any of our services, users must provide accurate and
                    truthful information. You agree not to use our platforms for
                    illegal, fraudulent, or unauthorized purposes.
                  </p>
                  <p>
                    All content available on our websites, including text, images, graphics,
                    videos, and materials, is the exclusive property of ABM Groups and is
                    protected by copyright laws. Any unauthorized copying, distribution, or
                    reuse of our materials is strictly prohibited.
                  </p>
                </div>
              </section>

              {/* Fees and Payments */}
              <section id="payments" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <CreditCard size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>5. Fees &amp; Payments</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    All payments made to ABM Groups are subject to the terms and
                    conditions of the respective service or vertical. Once paid, fees
                    are generally non-refundable unless otherwise specified in writing.
                    Users are responsible for ensuring the correctness of payment
                    information, and any disputes should be reported within seven
                    working days of the transaction.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <ShieldAlert size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>6. Limitation of Liability</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    ABM Groups shall not be held responsible for any loss, damage, or
                    inconvenience caused by service interruptions, website downtime, or
                    third-party interference. While we strive to maintain smooth
                    operations, users understand that some technical issues may be
                    beyond our control.
                  </p>
                </div>
              </section>

              {/* Modifications */}
              <section id="modifications" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <RefreshCw size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>7. Modifications to Terms</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    We reserve the right to modify, update, or change these Terms and
                    Conditions at any time without prior notice. Any changes will be
                    reflected on this page, and continued use of our services indicates
                    acceptance of those modifications.
                  </p>
                </div>
              </section>

            </div>

          </div>

        </div>

        <Footer />
      </div>

      <WhatsAppFloat />
    </>
  );
};

export default TermsPage;
