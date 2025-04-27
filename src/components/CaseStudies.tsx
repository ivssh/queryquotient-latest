import React from 'react';
import { Link } from './Link';
import { ArrowRight, LineChart, PieChart, BarChart } from 'lucide-react';

const caseStudies = [
  {
    title: "50% Faster Search for E-Commerce Platform",
    description: "How we optimized Elasticsearch to handle 10M+ products with sub-100ms response times during peak traffic periods.",
    industry: "E-Commerce",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <LineChart className="h-5 w-5" />,
    metrics: ["50% faster queries", "99.9% uptime", "60% reduced infrastructure costs"],
    link: "/case-studies/ecommerce"
  },
  {
    title: "Real-time Analytics for Financial Services",
    description: "Building a resilient Elasticsearch cluster for processing millions of financial transactions with real-time insights.",
    industry: "Finance",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <BarChart className="h-5 w-5" />,
    metrics: ["5ms average query time", "15TB data processed daily", "Zero downtime migration"],
    link: "/case-studies/finance"
  },
  {
    title: "Scaling Search for Media Content Platform",
    description: "How we redesigned the architecture to support 100M+ documents with complex search requirements for a global media company.",
    industry: "Media",
    image: "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    icon: <PieChart className="h-5 w-5" />,
    metrics: ["100M+ documents indexed", "300% improvement in relevancy", "4x faster indexing"],
    link: "/case-studies/media"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="case-studies">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-600">
            See how we've helped organizations overcome their Elasticsearch challenges and achieve remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-sm font-medium text-gray-700 flex items-center">
                  {study.icon}
                  <span className="ml-1">{study.industry}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.metrics.map((metric, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={study.link}
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                >
                  Read full case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;