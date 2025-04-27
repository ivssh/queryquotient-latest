import React from 'react';
import { Link } from './Link';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Startup',
    price: '4,999',
    description: 'Perfect for startups and small businesses looking to optimize their search infrastructure.',
    features: [
      'Initial cluster health assessment',
      'Basic performance optimization',
      'Query optimization recommendations',
      'Email support',
      '5 hours of consultation',
      'Basic security review'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Growth',
    price: '9,999',
    description: 'Ideal for growing companies with increasing search complexity and data volume.',
    features: [
      'Everything in Startup, plus:',
      'Advanced performance tuning',
      'Custom mapping optimization',
      'Capacity planning',
      '20 hours of consultation',
      'Priority email & chat support',
      'Monthly health checks'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations requiring comprehensive search infrastructure management.',
    features: [
      'Everything in Growth, plus:',
      'High availability setup',
      'Custom plugin development',
      'Disaster recovery planning',
      '24/7 dedicated support',
      'Quarterly security audits',
      'Training workshops'
    ],
    cta: 'Contact Us',
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing for Every Stage
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your search infrastructure needs. All plans include both Elasticsearch and OpenSearch support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border ${
                tier.popular ? 'border-blue-600' : 'border-gray-100'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-gray-500 ml-2">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={tier.price === 'Custom' ? '/contact' : '/signup'}
                  className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-center font-medium transition-colors duration-300 ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <Link
            href="/contact"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Contact us for custom pricing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;