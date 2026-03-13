import React, { useEffect } from "react";

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
      // Optional: Clean up meta tags if navigating away
      // For a single page app, you might want to reset the title or remove specific tags
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-32 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6 font-semibold">Last Updated: March 2026</p>

        <div className="text-gray-700 text-base leading-relaxed space-y-6">
          <section>
            <p>
              Welcome to the website of <strong>ABM Groups</strong>. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you visit our website or use our services.
            </p>
            <p className="mt-2">
              By accessing or using our website, you agree to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
            <p>When you visit our website, we may collect different types of information to provide and improve our services.</p>

            <div className="mt-3 ml-4">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Location Details</li>
                <li>Payment Information (if applicable)</li>
              </ul>
              <p className="mt-2 text-sm italic">This information is usually collected when you fill out contact forms, register for services, subscribe to updates, or communicate with us.</p>
            </div>

            <div className="mt-4 ml-4">
              <h3 className="font-semibold text-lg">Non-Personal Information</h3>
              <p>We may automatically collect certain non-personal information, such as:</p>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>IP Address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited on our website</li>
                <li>Date and time of visits</li>
                <li>Website usage behavior</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. How We Use Your Information</h2>
            <p>The information collected by ABM Groups may be used for the following purposes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>To provide and manage our services</li>
              <li>To respond to inquiries or customer support requests</li>
              <li>To process transactions or enrollments</li>
              <li>To improve our website performance and functionality</li>
              <li>To personalize the user experience</li>
              <li>To send important updates, service information, or promotional content</li>
              <li>To analyze website traffic and usage patterns</li>
            </ul>
            <p className="mt-2 italic">We only use personal information for legitimate business purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies and similar technologies to improve your browsing experience. Cookies help us:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Understand visitor behavior on the website</li>
              <li>Improve website performance</li>
              <li>Remember user preferences</li>
              <li>Analyze traffic and engagement</li>
            </ul>
            <p className="mt-2">You can choose to disable cookies through your browser settings. However, some features of the website may not function properly if cookies are disabled.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4. Third-Party Services</h2>
            <p>We may work with trusted third-party services that help us operate and improve our website. These may include:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Website analytics services</li>
              <li>Payment processing providers</li>
              <li>Marketing and advertising platforms</li>
              <li>Learning management systems</li>
              <li>Communication tools</li>
            </ul>
            <p className="mt-2 font-semibold">We do not sell, trade, or rent personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">5. Data Security</h2>
            <p>
              ABM Groups takes appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, or disclosure. While we strive to use commercially acceptable methods to protect your data, no internet transmission or electronic storage method is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">6. Data Retention</h2>
            <p>We retain personal information only for as long as necessary to provide our services, maintain business records, comply with legal obligations, and resolve disputes. Once the information is no longer required, it will be securely deleted or anonymized.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">7. Your Privacy Rights</h2>
            <p>As a user of our website, you have the right to request access, correction, or deletion of your personal data, and withdraw consent for data processing where applicable.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">8. External Website Links</h2>
            <p>Our website may contain links to third-party websites or services. ABM Groups is not responsible for the privacy practices or content of those websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">9. Children's Information</h2>
            <p>Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">10. Updates to This Privacy Policy</h2>
            <p>ABM Groups may update this Privacy Policy from time to time. When updates are made, the revised version will be posted on this page along with the updated date.</p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h2 className="text-xl font-bold mb-2">11. Contact Information</h2>
            <p>If you have any questions about this Privacy Policy or how your information is handled, please contact us:</p>
            <p className="mt-2 font-bold">
              Email: <a href="mailto:admin@bmtechx.in" className="text-blue-600 underline">admin@bmtechx.in</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
