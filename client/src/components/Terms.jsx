import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorCanvas from './CursorCanvas';
import WhatsAppFloat from './WhatsAppFloat';
import { 
  ShieldCheck, 
  Layers, 
  Award, 
  FileText, 
  CreditCard, 
  Link2, 
  ShieldAlert, 
  Lock, 
  RefreshCw, 
  Scale, 
  Mail 
} from 'lucide-react';

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
    { id: 'introduction', title: 'Introduction', icon: ShieldCheck },
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: ShieldCheck },
    { id: 'services', title: '2. Services', icon: Layers },
    { id: 'responsibilities', title: '3. User Responsibilities', icon: Award },
    { id: 'registrations', title: '4. Registrations & Enquiries', icon: FileText },
    { id: 'payments', title: '5. Payments', icon: CreditCard },
    { id: 'intellectual', title: '6. Intellectual Property', icon: Award },
    { id: 'thirdparty', title: '7. Third-Party Links', icon: Link2 },
    { id: 'liability', title: '8. Limitation of Liability', icon: ShieldAlert },
    { id: 'privacy', title: '9. Privacy', icon: Lock },
    { id: 'changes', title: '10. Changes to Services', icon: RefreshCw },
    { id: 'governing', title: '11. Governing Law', icon: Scale },
    { id: 'contact', title: '12. Contact Info', icon: Mail },
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
            {/* <p style={{ color: 'rgba(240, 237, 230, 0.45)', fontSize: '14px', fontWeight: '500' }}>
              Last Updated: October 2025
            </p> */}
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
                        {sec.title}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Policy Content */}
            <div className="lg:col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Introduction */}
              <section id="introduction" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <ShieldCheck size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>Introduction</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    Welcome to <strong>ABM Groups</strong>. By accessing or using our website, services, training programs, consultations, or any of our affiliated business services, you agree to comply with these Terms &amp; Conditions. If you do not agree with these terms, please refrain from using our website.
                  </p>
                </div>
              </section>

              {/* 1. Acceptance of Terms */}
              <section id="acceptance" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <ShieldCheck size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>1. Acceptance of Terms</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    By accessing this website, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions and our Privacy Policy.
                  </p>
                </div>
              </section>

              {/* 2. Services */}
              <section id="services" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Layers size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>2. Services</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p>
                    ABM Groups offers services through its business divisions, including but not limited to:
                  </p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li><strong>BM Academy</strong> – Education &amp; Skill Development</li>
                    <li><strong>BM TechX</strong> – Digital Marketing &amp; Technology Solutions</li>
                    <li><strong>BM Promoters</strong> – Real Estate Services</li>
                    <li>Business Consulting</li>
                    <li>Career Guidance</li>
                    <li>Social Media &amp; Branding Services</li>
                    <li>Other business services operated under ABM Groups</li>
                  </ul>
                  <p style={{ marginTop: '8px' }}>
                    All services are subject to availability and may be modified without prior notice.
                  </p>
                </div>
              </section>

              {/* 3. User Responsibilities */}
              <section id="responsibilities" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Award size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>3. User Responsibilities</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>By using our website, you agree to:</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>Provide accurate and complete information.</li>
                    <li>Use the website only for lawful purposes.</li>
                    <li>Not misuse or attempt to disrupt the website or its services.</li>
                    <li>Not copy, reproduce, or distribute website content without written permission.</li>
                  </ul>
                </div>
              </section>

              {/* 4. Registrations & Enquiries */}
              <section id="registrations" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <FileText size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>4. Registrations &amp; Enquiries</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>When submitting any enquiry, webinar registration, consultation request, or contact form:</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>All information provided must be accurate.</li>
                    <li>Submission of a form does not guarantee admission, consultation, employment, or service approval.</li>
                    <li>Our team may contact you via phone, email, SMS, or WhatsApp regarding your enquiry.</li>
                  </ul>
                </div>
              </section>

              {/* 5. Payments */}
              <section id="payments" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <CreditCard size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>5. Payments</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>Where applicable:</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>All payments must be made through approved payment methods.</li>
                    <li>Fees paid for courses or services are subject to the applicable refund and cancellation policies.</li>
                    <li>ABM Groups reserves the right to revise pricing without prior notice.</li>
                  </ul>
                </div>
              </section>

              {/* 6. Intellectual Property */}
              <section id="intellectual" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Award size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>6. Intellectual Property</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <p>All content available on this website, including:</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', paddingLeft: '20px', marginBottom: '8px' }}>
                    <div>• Logos</div>
                    <div>• Course Materials</div>
                    <div>• Images</div>
                    <div>• Website Design</div>
                    <div>• Graphics</div>
                    <div>• Branding</div>
                    <div>• Videos</div>
                    <div>• Text</div>
                  </div>
                  <p>
                    is the intellectual property of <strong>ABM Groups</strong> unless otherwise stated.
                  </p>
                  <p style={{ fontWeight: '600', color: '#D4A017' }}>
                    Unauthorized use, reproduction, or distribution is strictly prohibited.
                  </p>
                </div>
              </section>

              {/* 7. Third-Party Links */}
              <section id="thirdparty" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Link2 size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>7. Third-Party Links</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    Our website may contain links to third-party websites for your convenience. ABM Groups is not responsible for the content, privacy practices, or services provided by external websites.
                  </p>
                </div>
              </section>

              {/* 8. Limitation of Liability */}
              <section id="liability" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <ShieldAlert size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>8. Limitation of Liability</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>ABM Groups shall not be liable for:</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>Website downtime</li>
                    <li>Technical interruptions</li>
                    <li>Data loss</li>
                    <li>Indirect or consequential damages</li>
                    <li>Decisions made based on information available on this website</li>
                  </ul>
                  <p style={{ marginTop: '8px', fontStyle: 'italic' }}>
                    Users access the website at their own risk.
                  </p>
                </div>
              </section>

              {/* 9. Privacy */}
              <section id="privacy" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Lock size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>9. Privacy</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    Your personal information is handled in accordance with our Privacy Policy. By using this website, you consent to the collection and processing of your information as described in our Privacy Policy.
                  </p>
                </div>
              </section>

              {/* 10. Changes to Services */}
              <section id="changes" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <RefreshCw size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>10. Changes to Services</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>ABM Groups reserves the right to:</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>Modify website content</li>
                    <li>Update services</li>
                    <li>Change pricing</li>
                    <li>Suspend or discontinue any service</li>
                  </ul>
                  <p style={{ marginTop: '8px' }}>
                    without prior notice.
                  </p>
                </div>
              </section>

              {/* 11. Governing Law */}
              <section id="governing" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Scale size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>11. Governing Law</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    These Terms &amp; Conditions shall be governed by the laws of India. Any disputes arising from the use of this website shall be subject to the jurisdiction of the competent courts in Puducherry, India.
                  </p>
                </div>
              </section>

              {/* 12. Contact Information */}
              <section id="contact" style={{ background: 'rgba(192,57,43,0.04)', border: '1px solid rgba(192,57,43,0.15)', borderLeft: '4px solid #C0392B', borderRadius: '0 16px 16px 0', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(192,57,43,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(192,57,43,0.2)' }}>
                    <Mail size={20} style={{ color: '#C0392B', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>12. Contact Information</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p>For any questions regarding these Terms &amp; Conditions, please contact:</p>
                  <p style={{ fontWeight: '700', fontSize: '16px', color: '#F0EDE6', margin: 0 }}>
                    ABM Groups
                  </p>
                  <p style={{ color: '#D4A017', fontWeight: '500', margin: 0 }}>
                    📍 Puducherry, India
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
