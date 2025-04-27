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

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;