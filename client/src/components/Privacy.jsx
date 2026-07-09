import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorCanvas from './CursorCanvas';
import WhatsAppFloat from './WhatsAppFloat';
import {
  Database,
  Eye,
  Cookie,
  Users,
  Lock,
  Clock,
  Fingerprint,
  Link2,
  Baby,
  RefreshCw,
  Mail,
  ShieldCheck
} from 'lucide-react';

const PrivacyPage = () => {
  useEffect(() => {
    // 1. Meta Title
    document.title = "Privacy Policy | ABM Groups Data Protection & User Privacy";

    // 2. Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://abmgroups.org/privacy-policy");

    // 3. Open Graph Meta Tags
    const metaTags = [
      { property: "og:title", content: "Privacy Policy | ABM Groups Data Protection & User Privacy" },
      { property: "og:description", content: "Read the ABM Groups Privacy Policy to understand how we collect, use, and protect your personal information when you use our website and services." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://abmgroups.org/privacy-policy" },
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
      "name": "Privacy Policy",
      "url": "https://abmgroups.org/privacy-policy",
      "description": "Privacy Policy of ABM Groups explaining how personal information is collected, used, and protected.",
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
      // Optional cleanup
    };
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: ShieldCheck },
    { id: 'collection', title: '1. Information We Collect', icon: Database },
    { id: 'usage', title: '2. How We Use Information', icon: Eye },
    { id: 'cookies', title: '3. Cookies & Tracking', icon: Cookie },
    { id: 'thirdparty', title: '4. Third-Party Services', icon: Users },
    { id: 'security', title: '5. Data Security', icon: Lock },
    { id: 'retention', title: '6. Data Retention', icon: Clock },
    { id: 'rights', title: '7. Your Privacy Rights', icon: Fingerprint },
    { id: 'externallinks', title: '8. External Links', icon: Link2 },
    { id: 'children', title: '9. Children\'s Info', icon: Baby },
    { id: 'updates', title: '10. Updates to Policy', icon: RefreshCw },
    { id: 'contact', title: '11. Contact Info', icon: Mail },
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
            <div className="eyebrow">Data Protection</div>
            <h1 className="sec-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '12px' }}>
              Privacy <span className="gold">Policy</span>
            </h1>
            <p style={{ color: 'rgba(240, 237, 230, 0.45)', fontSize: '14px', fontWeight: '500' }}>
              Last Updated: March 2026
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
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>
                    Welcome to the website of <strong>ABM Groups</strong>. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or use our services.
                  </p>
                  <p>
                    By accessing or using our website, you agree to the practices described in this Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="collection" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Database size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>1. Information We Collect</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p>When you visit our website, we may collect different types of information to provide and improve our services.</p>

                  <div style={{ paddingLeft: '16px', borderLeft: '2px solid #D4A017' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#F0EDE6', marginBottom: '8px' }}>Personal Information</h3>
                    <p style={{ marginBottom: '8px' }}>We may collect personal information that you voluntarily provide, including:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Location Details</li>
                      <li>Payment Information (if applicable)</li>
                    </ul>
                    <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(240,237,230,0.45)' }}>This information is usually collected when you fill out contact forms, register for services, subscribe to updates, or communicate with us.</p>
                  </div>

                  <div style={{ paddingLeft: '16px', borderLeft: '2px solid #C0392B' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#F0EDE6', marginBottom: '8px' }}>Non-Personal Information</h3>
                    <p style={{ marginBottom: '8px' }}>We may automatically collect certain non-personal information, such as:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>IP Address</li>
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>Pages visited on our website</li>
                      <li>Date and time of visits</li>
                      <li>Website usage behavior</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="usage" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Eye size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>2. How We Use Your Information</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>The information collected by ABM Groups may be used for the following purposes:</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>To provide and manage our services</li>
                    <li>To respond to inquiries or customer support requests</li>
                    <li>To process transactions or enrollments</li>
                    <li>To improve our website performance and functionality</li>
                    <li>To personalize the user experience</li>
                    <li>To send important updates, service information, or promotional content</li>
                    <li>To analyze website traffic and usage patterns</li>
                  </ul>
                  <p style={{ fontStyle: 'italic', fontSize: '14px', color: 'rgba(240,237,230,0.45)', marginTop: '8px' }}>We only use personal information for legitimate business purposes.</p>
                </div>
              </section>

              {/* Cookies and Tracking */}
              <section id="cookies" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Cookie size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>3. Cookies and Tracking Technologies</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>Our website may use cookies and similar technologies to improve your browsing experience. Cookies help us:</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>Understand visitor behavior on the website</li>
                    <li>Improve website performance</li>
                    <li>Remember user preferences</li>
                    <li>Analyze traffic and engagement</li>
                  </ul>
                  <p>You can choose to disable cookies through your browser settings. However, some features of the website may not function properly if cookies are disabled.</p>
                </div>
              </section>

              {/* Third-Party Services */}
              <section id="thirdparty" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Users size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>4. Third-Party Services</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>We may work with trusted third-party services that help us operate and improve our website. These may include:</p>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>Website analytics services</li>
                    <li>Payment processing providers</li>
                    <li>Marketing and advertising platforms</li>
                    <li>Learning management systems</li>
                    <li>Communication tools</li>
                  </ul>
                  <p style={{ fontWeight: '600', color: '#D4A017', marginTop: '8px' }}>We do not sell, trade, or rent personal information to third parties.</p>
                </div>
              </section>

              {/* Data Security */}
              <section id="security" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Lock size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>5. Data Security</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>
                    ABM Groups takes appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, or disclosure. While we strive to use commercially acceptable methods to protect your data, no internet transmission or electronic storage method is completely secure.
                  </p>
                </div>
              </section>

              {/* Data Retention */}
              <section id="retention" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Clock size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>6. Data Retention</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>We retain personal information only for as long as necessary to provide our services, maintain business records, comply with legal obligations, and resolve disputes. Once the information is no longer required, it will be securely deleted or anonymized.</p>
                </div>
              </section>

              {/* Your Privacy Rights */}
              <section id="rights" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Fingerprint size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>7. Your Privacy Rights</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>As a user of our website, you have the right to request access, correction, or deletion of your personal data, and withdraw consent for data processing where applicable.</p>
                </div>
              </section>

              {/* External Links */}
              <section id="externallinks" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Link2 size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>8. External Website Links</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>Our website may contain links to third-party websites or services. ABM Groups is not responsible for the privacy practices or content of those websites.</p>
                </div>
              </section>

              {/* Children's Information */}
              <section id="children" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <Baby size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>9. Children's Information</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
                </div>
              </section>

              {/* Updates to Policy */}
              <section id="updates" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '16px', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212,160,23,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(212,160,23,0.2)' }}>
                    <RefreshCw size={20} style={{ color: '#D4A017', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>10. Updates to This Privacy Policy</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
                  <p>ABM Groups may update this Privacy Policy from time to time. When updates are made, the revised version will be posted on this page along with the updated date.</p>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact" style={{ background: 'rgba(192,57,43,0.04)', border: '1px solid rgba(192,57,43,0.15)', borderLeft: '4px solid #C0392B', borderRadius: '0 16px 16px 0', padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(192,57,43,0.08)', display: 'flex', alignItems: 'center', justifyCenter: 'center', border: '1px solid rgba(192,57,43,0.2)' }}>
                    <Mail size={20} style={{ color: '#C0392B', margin: 'auto' }} />
                  </div>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#F0EDE6' }}>11. Contact Information</h2>
                </div>
                <div style={{ color: 'rgba(240,237,230,0.7)', fontSize: '15px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p>If you have any questions about this Privacy Policy or how your information is handled, please contact us:</p>
                  <p style={{ fontWeight: '700', fontSize: '16px', color: '#F0EDE6' }}>
                    Email: <a href="mailto:admin@bmtechx.in" style={{ color: '#D4A017', textDecoration: 'underline' }}>admin@bmtechx.in</a>
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

export default PrivacyPage;
