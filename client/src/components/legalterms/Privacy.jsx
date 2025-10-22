import React from "react";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-32 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: October 2025</p>

        <div className="text-gray-700 text-base leading-relaxed space-y-4">
          <p>
            At <strong>ABM Groups</strong>, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard the data you
            share with us.
          </p>

          <p>
            When you use our website or services, we may collect personal
            information such as your name, phone number, email address, and
            payment details. We may also collect data about your interactions on
            our website, including communication history and usage patterns.
            This information helps us provide better services, process your
            requests, and personalize your experience.
          </p>

          <p>
            We use your personal information to manage enrollments, process
            transactions, share service updates, and communicate important
            information related to our offerings. We may also use the data
            internally to improve service quality, user experience, and overall
            efficiency.
          </p>

          <p>
            ABM Groups ensures that your personal data is stored securely. We
            implement appropriate measures to protect your data from
            unauthorized access, misuse, or disclosure. We do not sell or rent
            your personal information to third parties. However, we may share
            your data with trusted partners such as payment gateways, learning
            management systems, or travel service providers who assist us in
            delivering our services efficiently.
          </p>

          <p>
            Our website may use cookies to enhance your browsing experience.
            Cookies help us understand how users interact with our website and
            improve its functionality. You can choose to disable cookies in your
            browser settings, though it may affect some features of our site.
          </p>

          <p>
            You have the right to access, correct, or request deletion of your
            personal information at any time. To exercise these rights, please
            contact us at{" "}
            <a
              href="mailto:admin@bmtechx.in"
              className="text-blue-600 underline"
            >
              admin@bmtechx.in
            </a>
            .
          </p>

          <p>
            We may update this Privacy Policy periodically to reflect changes in
            our operations or legal requirements. All updates will be posted on
            this page, and the “Last Updated” date will be modified accordingly.
          </p>

          <p>
            At ABM Groups, we remain dedicated to transparency, trust, and the
            responsible handling of all user information. Thank you for choosing
            to engage with our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
