import React from 'react';
import { Link } from './Link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    title: "10 Elasticsearch Performance Tuning Tips for 2025",
    excerpt: "Discover the latest best practices for optimizing your Elasticsearch cluster performance and improving query response times.",
    date: "May 15, 2025",
    author: "David Wilson",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/blog/elasticsearch-performance-tuning"
  },
  {
    title: "Implementing Zero-Downtime Deployments for Elasticsearch",
    excerpt: "Learn how to update your Elasticsearch clusters without service interruptions using rolling deployments and the hot-warm architecture.",
    date: "April 28, 2025",
    author: "Jennifer Lee",
    image: "https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/blog/zero-downtime-deployments"
  },
  {
    title: "Advanced Search Relevancy Techniques with Elasticsearch",
    excerpt: "Explore how to fine-tune search results with custom scoring, synonyms, and contextual query expansion.",
    date: "April 10, 2025",
    author: "Alex Rodriguez",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/blog/advanced-search-relevancy"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600">
            Stay up-to-date with the latest Elasticsearch strategies, tutorials, and industry trends.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href={post.link} className="block">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <Link href={post.link} className="block">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <Link 
                  href={post.link}
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;