import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ElasticPro's expertise helped us reduce query times by 70% and scale our clusters to handle 2x the traffic without adding hardware. Their team provided clear explanations and actionable recommendations.",
    author: "Sarah Johnson",
    title: "CTO, DataCraft Inc.",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "We were struggling with Elasticsearch performance issues that affected our entire platform. ElasticPro not only solved the immediate problems but also provided a roadmap for future scaling.",
    author: "Michael Chen",
    title: "Engineering Director, TechSolutions",
    rating: 5,
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Their security audit identified critical vulnerabilities in our Elasticsearch setup that we had overlooked. The remediation plan was thorough and well-documented.",
    author: "Priya Patel",
    title: "Head of Security, FinanceTrack",
    rating: 4,
    image: "https://images.pexels.com/photos/3974789/pexels-photo-3974789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-blue-100">
            Don't just take our word for it — hear from the organizations we've helped.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg relative"
            >
              <div className="absolute -top-5 -right-5 bg-blue-100 rounded-full p-3 shadow-md">
                <svg width="32" height="32" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 27.5H8.25V19.25H16.5V27.5ZM38.5 27.5H30.25V19.25H38.5V27.5ZM16.5 49.5H8.25V41.25H16.5V49.5ZM38.5 49.5H30.25V41.25H38.5V49.5Z" fill="#2563EB"/>
                </svg>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 mb-6">"{testimonial.quote}"</blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;