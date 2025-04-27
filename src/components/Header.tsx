import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/QueryQuotientLogo.png" 
              alt="QueryQuotient Logo" 
              className="h-12"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium py-2">
              Services <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[240px] border border-gray-100">
                <div className="p-2">
                  <Link href="/services/optimization" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Performance Optimization</Link>
                  <Link href="/services/architecture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Architecture Design</Link>
                  <Link href="/services/migration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Migration Services</Link>
                  <Link href="/services/training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Training & Workshops</Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium">Case Studies</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Us</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            <Link href="/services" className="text-gray-700 font-medium py-2">Services</Link>
            <Link href="/case-studies" className="text-gray-700 font-medium py-2">Case Studies</Link>
            <Link href="/pricing" className="text-gray-700 font-medium py-2">Pricing</Link>
            <Link href="/about" className="text-gray-700 font-medium py-2">About Us</Link>
            <Link href="/blog" className="text-gray-700 font-medium py-2">Blog</Link>
            <Link href="/contact" className="text-gray-700 font-medium py-2">Contact</Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-center transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;