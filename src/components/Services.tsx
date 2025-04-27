import React from 'react';
import { Link } from './Link';
import { LineChart, Database, Zap, Users, ArrowRight, Server, LayoutGrid, AlertCircle } from 'lucide-react';

const services = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Performance Optimization",
    description: "Boost your Elasticsearch performance with expert tuning of indices, queries, and cluster configurations to reduce latency and increase throughput.",
    link: "/services/performance"
  },
  {
    icon: <Server className="h-8 w-8 text-blue-600" />,
    title: "Architecture Design",
    description: "Design scalable, resilient Elasticsearch architectures that grow with your data needs and maintain performance under heavy loads.",
    link: "/services/architecture"
  },
  {
    icon: <Database className="h-8 w-8 text-blue-600" />,
    title: "Data Modeling",
    description: "Optimize your index design and mapping strategies for efficient storage, fast retrieval, and accurate search results.",
    link: "/services/modeling"
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "Monitoring & Analytics",
    description: "Implement comprehensive monitoring solutions to maintain visibility and quickly troubleshoot issues before they impact users.",
    link: "/services/monitoring"
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-blue-600" />,
    title: "Security Hardening",
    description: "Protect your valuable data with industry best practices for securing Elasticsearch, including authentication, encryption, and access controls.",
    link: "/services/security"
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-blue-600" />,
    title: "Custom Solutions",
    description: "Tailored Elasticsearch solutions for your unique business requirements, from specialized plugins to custom integrations.",
    link: "/services/custom"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Training & Workshops",
    description: "Empower your team with specialized Elasticsearch knowledge through customized training sessions and hands-on workshops.",
    link: "/services/training"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Elasticsearch Services</h2>
          <p className="text-lg text-gray-600">
            From performance tuning to architecture design, we provide end-to-end solutions for all your Elasticsearch needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group"
            >
              <div className="mb-5 p-3 bg-blue-50 rounded-lg w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>
              <Link 
                href={service.link} 
                className="mt-auto text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;