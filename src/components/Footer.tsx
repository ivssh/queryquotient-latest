import React from 'react';
import { Link } from './Link';
import { Search, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="text-2xl font-bold text-white flex items-center mb-5">
              <Search className="h-6 w-6 mr-2" />
              Query Quotient
            </Link>
            <p className="mb-6">
              Expert search engine consulting for organizations looking to optimize performance, improve reliability, and maximize the value of their Elasticsearch and OpenSearch infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/performance" className="hover:text-white transition-colors">Performance Optimization</Link>
              </li>
              <li>
                <Link href="/services/architecture" className="hover:text-white transition-colors">Architecture Design</Link>
              </li>
              <li>
                <Link href="/services/modeling" className="hover:text-white transition-colors">Data Modeling</Link>
              </li>
              <li>
                <Link href="/services/security" className="hover:text-white transition-colors">Search Relevance</Link>
              </li>
              <li>
                <Link href="/services/training" className="hover:text-white transition-colors">Training & Workshops</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <Link href="mailto:hello@queryquotient.com" className="hover:text-white transition-colors">hello@queryquotient.com</Link>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <Link href="tel:+15555555555" className="hover:text-white transition-colors">+1 (802) 928-3182</Link>
              </li>
              {/* <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span></span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Query Quotient. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;