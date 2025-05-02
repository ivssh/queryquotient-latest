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
      className={`relative fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/images/QueryQuotientLogo.png" 
              alt="QueryQuotient Logo" 
              className="h-10 w-auto"
            />
          </Link>

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
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-3">
            <div className="space-y-2">
              <div className="font-medium text-gray-900 px-2">Services</div>
              <Link href="/services/optimization" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Performance Optimization</Link>
              <Link href="/services/architecture" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Architecture Design</Link>
              <Link href="/services/migration" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Migration Services</Link>
              <Link href="/services/training" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Training & Workshops</Link>
            </div>
            <div className="border-t border-gray-100 pt-2">
              <Link href="/case-studies" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Case Studies</Link>
              <Link href="/pricing" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Pricing</Link>
              <Link href="/about" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">About Us</Link>
              <Link href="/blog" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Blog</Link>
              <Link href="/contact" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Contact</Link>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;