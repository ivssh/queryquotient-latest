import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPage: React.FC = () => (
  <div className="pt-20 pb-20 bg-white min-h-screen">
    <Helmet>
      <title>Privacy Policy | QueryQuotient</title>
      <meta name="description" content="Read the Privacy Policy for QueryQuotient. Learn how we collect, use, and protect your data." />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://queryquotient.com/privacy" />
    </Helmet>
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">
        <strong>Last updated: April 2025</strong>
      </p>
      <p className="mb-4 text-gray-700">
        QueryQuotient (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide via forms or communications.</li>
        <li><strong>Usage Data:</strong> Information about how you use our website, such as IP address, browser type, pages visited, and time spent.</li>
        <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze site usage.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
        <li>To provide, operate, and maintain our website and services.</li>
        <li>To communicate with you, including responding to inquiries and sending updates.</li>
        <li>To improve our website, services, and user experience.</li>
        <li>To comply with legal obligations and protect our rights.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">3. Sharing Your Information</h2>
      <p className="mb-4 text-gray-700">
        We do not sell your personal information. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose information if required by law or to protect our rights.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">4. Data Security</h2>
      <p className="mb-4 text-gray-700">
        We implement reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">5. Your Rights</h2>
      <p className="mb-4 text-gray-700">
        You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:hello@queryquotient.com" className="text-blue-600 underline">hello@queryquotient.com</a>.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">6. Third-Party Links</h2>
      <p className="mb-4 text-gray-700">
        Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">7. Changes to This Policy</h2>
      <p className="mb-4 text-gray-700">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">8. Contact Us</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@queryquotient.com" className="text-blue-600 underline">hello@queryquotient.com</a>.
      </p>
    </div>
  </div>
);

export default PrivacyPage;