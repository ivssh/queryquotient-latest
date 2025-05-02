import React from 'react';
import { Shield, Clock, Cpu, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: "Lower Latency",
    description: "Optimize query performance for lightning-fast responses, even with complex search requirements and large datasets."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: "Improved Relevancy",
    description: "Fine-tune scoring and relevancy algorithms to ensure users find exactly what they're looking for the first time."
  },
  {
    icon: <Cpu className="h-6 w-6 text-blue-600" />,
    title: "Reduced Resource Usage",
    description: "Minimize hardware requirements and lower infrastructure costs through efficient Elasticsearch configuration."
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Enhanced Security",
    description: "Implement robust security measures to protect your data while maintaining performance and accessibility."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience the QueryQuotient Advantage</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified Elasticsearch experts brings years of experience optimizing search solutions across industries. We focus on delivering measurable improvements to your Elasticsearch implementation.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-left">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;