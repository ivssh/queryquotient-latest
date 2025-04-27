import React from 'react';
import { Link } from './Link';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-800/90"></div>
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          id="visual"
          viewBox="0 0 900 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0 85L21.5 82.7C43 80.3 86 75.7 128.8 79.2C171.7 82.7 214.3 94.3 257.2 99C300 103.7 343 101.3 385.8 95.2C428.7 89 471.3 79 514.2 76C557 73 600 77 642.8 80.3C685.7 83.7 728.3 86.3 771.2 85.5C814 84.7 857 80.3 878.5 78.2L900 76"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
            opacity="0.2"
          ></path>
          <path
            d="M0 107L21.5 112.3C43 117.7 86 128.3 128.8 133.2C171.7 138 214.3 137 257.2 131.3C300 125.7 343 115.3 385.8 115.5C428.7 115.7 471.3 126.3 514.2 126.7C557 127 600 117 642.8 111.8C685.7 106.7 728.3 106.3 771.2 112.2C814 118 857 130 878.5 136L900 142"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
            opacity="0.2"
          ></path>
          <path
            d="M0 192L21.5 188.7C43 185.3 86 178.7 128.8 176.8C171.7 175 214.3 178 257.2 179.3C300 180.7 343 180.3 385.8 181.7C428.7 183 471.3 186 514.2 184.3C557 182.7 600 176.3 642.8 176.5C685.7 176.7 728.3 183.3 771.2 183.7C814 184 857 178 878.5 175L900 172"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
            opacity="0.2"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock the Full Potential of Your Elasticsearch Implementation?
          </h2>
          
          <p className="text-lg text-blue-100 mb-8">
            Get in touch today for a free consultation with our Elasticsearch experts. We'll analyze your current setup and identify opportunities for improvement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-6 rounded-md transition-colors duration-300 flex-1 sm:flex-none flex items-center justify-center"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link 
              href="/services" 
              className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-colors duration-300 flex-1 sm:flex-none"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;