import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyLogos from './components/CompanyLogos';
import Services from './components/Services';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import PrivacyPage from './components/PrivacyPage'; // NEW
import TermsPage from './components/TermsPage';     // NEW

function App() {
  const path = window.location.pathname;
  const isAboutPage = path === '/about';
  const isPrivacyPage = path === '/privacy'; // NEW
  const isTermsPage = path === '/terms';     // NEW

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {isAboutPage ? (
          <AboutPage />
        ) : isPrivacyPage ? (
          <PrivacyPage />
        ) : isTermsPage ? (
          <TermsPage />
        ) : (
          <>
            <Hero />
            <CompanyLogos />
            <Services />
            <Features />
            <CaseStudies />
            <Testimonials />
            <Pricing />
            <BlogSection />
            <CTASection />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;