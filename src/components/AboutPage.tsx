import React from 'react';
import { Link } from './Link';
import { Users, Award, LineChart, ArrowRight, Building, Globe, Zap, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '30+', label: 'Enterprise Clients', icon: <Building className="h-8 w-8 text-blue-600" /> },
    { number: '6', label: 'Certified Engineers', icon: <Award className="h-8 w-8 text-blue-600" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Users className="h-8 w-8 text-blue-600" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="h-8 w-8 text-blue-600" /> },
  ];

  const achievements = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Reach',
      description: 'Serving Fortune 500 companies and enterprises worldwide with specialized Elasticsearch solutions.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Certified Expertise',
      description: 'Team of 6 Elastic certified engineers with deep expertise in search technologies.'
    },
    {
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      title: 'Proven Results',
      description: 'Consistently delivering measurable improvements in search relevance and performance.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Rapid Implementation',
      description: 'Swift deployment of optimizations with minimal disruption to your operations.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Integrated Stats */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Elasticsearch Experts Dedicated to Your Success
            </h1>
            <p className="text-xl text-gray-600">
              We're a team of certified search specialists helping organizations unlock the full potential of their Elasticsearch and OpenSearch implementations.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-50 rounded-full p-4 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://cal.com/query-quotient-intro/30min?user=query-quotient-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-md transition-colors duration-300 text-lg"
            >
              Work with Us
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Partner in Search Excellence
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At Query Quotient, we specialize in transforming complex search challenges into elegant, efficient solutions. Our team of 6 Elastic certified engineers brings deep expertise and a proven track record of success across various industries.
                </p>
                <p>
                  We've proudly served over 30 enterprise clients, including Fortune 500 companies, helping them achieve remarkable improvements in search relevance, performance optimization, and cost efficiency.
                </p>
                <p>
                  Our commitment to excellence has earned us a reputation as a trusted partner in the Elasticsearch and OpenSearch community, delivering measurable value through:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Advanced search relevance tuning</li>
                  <li>Performance optimization and scaling</li>
                  <li>Comprehensive cost audits and optimization</li>
                  <li>Custom solution development</li>
                  <li>24/7 expert support</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                >
                  <div className="mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Search Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help optimize your Elasticsearch implementation and drive better results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://cal.com/query-quotient-intro/30min?user=query-quotient-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-blue-600 font-medium px-6 py-3 rounded-md transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/case-studies"
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-md transition-colors duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;