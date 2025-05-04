import React from 'react';
import { Helmet } from 'react-helmet';

const TermsPage: React.FC = () => (
  <div className="pt-20 pb-20 bg-white min-h-screen">
    <Helmet>
      <title>Terms of Service | QueryQuotient</title>
      <meta name="description" content="Read the Terms of Service for QueryQuotient. Understand your rights and responsibilities when using our services." />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://queryquotient.com/terms" />
    </Helmet>
    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Terms of Service</h1>
      <p className="mb-4 text-gray-700">
        <strong>Last updated: April 2025</strong>
      </p>
      <p className="mb-4 text-gray-700">
        Welcome to QueryQuotient. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">1. Use of Our Services</h2>
      <p className="mb-4 text-gray-700">
        You agree to use our website and services only for lawful purposes and in accordance with these Terms. You must not use our site in any way that may damage, disable, or impair our services.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">2. Intellectual Property</h2>
      <p className="mb-4 text-gray-700">
        All content, trademarks, logos, and intellectual property on this site are the property of QueryQuotient or its licensors. You may not use, reproduce, or distribute any content without our written permission.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">3. Disclaimer</h2>
      <p className="mb-4 text-gray-700">
        Our website and services are provided “as is” without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any content.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">4. Limitation of Liability</h2>
      <p className="mb-4 text-gray-700">
        To the fullest extent permitted by law, QueryQuotient shall not be liable for any damages arising from your use of our website or services.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">5. Third-Party Links</h2>
      <p className="mb-4 text-gray-700">
        Our website may contain links to third-party sites. We are not responsible for the content or practices of those sites.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">6. Changes to Terms</h2>
      <p className="mb-4 text-gray-700">
        We may update these Terms from time to time. Changes will be posted on this page with an updated effective date. Continued use of our site constitutes acceptance of the new Terms.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">7. Governing Law</h2>
      <p className="mb-4 text-gray-700">
        These Terms are governed by the laws of the jurisdiction in which QueryQuotient operates, without regard to conflict of law principles.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-900">8. Contact Us</h2>
      <p className="mb-4 text-gray-700">
        If you have any questions about these Terms, please contact us at <a href="mailto:hello@queryquotient.com" className="text-blue-600 underline">hello@queryquotient.com</a>.
      </p>
    </div>
  </div>
);

export default TermsPage;