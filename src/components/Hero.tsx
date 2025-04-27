import React from 'react';
import { Link } from './Link';
import { ArrowRight, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-24 pt-32 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
              <Search className="h-4 w-4 mr-2" />
              Search Engine Specialists
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Unlock the Full Power of Your <span className="text-blue-600">Search Infrastructure</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We help companies optimize, scale, and maintain their Elasticsearch and OpenSearch implementations with expert consulting, architecture design, and performance optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center flex-1 sm:flex-none flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                href="/case-studies" 
                className="text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center flex-1 sm:flex-none"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 w-full h-full bg-teal-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
            
            <div className="relative backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-lg border border-white/50 transform transition-transform hover:scale-105 duration-700">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 font-mono text-sm text-gray-600">search_query.json</div>
                </div>
                
                <div className="font-mono text-sm bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
                  <pre>{`GET /my_index/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title": "search" }},
        { "range": { "date": { "gte": "now-1y" }}}
      ],
      "filter": [
        { "term": { "status": "published" }}
      ]
    }
  },
  "aggs": {
    "categories": {
      "terms": { "field": "category" }
    }
  }
}`}</pre>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">Query Execution Time: 12ms</div>
                  <div className="text-xs text-gray-500">Results: 254</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;