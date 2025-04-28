// ... existing imports ...
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  // For Netlify, we don't need to manage form state unless you want a custom handler.
  // We'll use a ref for the form if you want to handle submission with JS.

  // Optional: Custom handler for showing a success message without redirect
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ... left side content unchanged ... */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-50">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p style={{ display: 'none' }}>
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Consultation</h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service You're Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="performance">Performance Optimization</option>
                      <option value="architecture">Architecture Design</option>
                      <option value="data-modeling">Data Modeling</option>
                      <option value="monitoring">Monitoring & Analytics</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="training">Training & Workshops</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    By submitting this form, you agree to our <a href="/privacy-policy" className="text-blue-600">privacy policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;