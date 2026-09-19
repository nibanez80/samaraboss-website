import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');

    try {
      const { data, error: fnError } = await supabase.functions.invoke('add-newsletter-subscriber', {
        body: { email }
      });

      if (fnError) {
        throw new Error(fnError.message || 'Failed to subscribe');
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Newsletter signup error:', err);
      setError('Unable to subscribe at this time. Please try again later.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div 
          className="bg-cover bg-center rounded-2xl p-12 md:p-16 relative overflow-hidden"
          style={{ backgroundImage: `url('/images/newsletter.webp')` }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Stay Connected on Your Journey
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join my newsletter for ongoing support, resources, and insights on living alcohol-free. 
              Get weekly inspiration and practical tools delivered to your inbox.
            </p>

            {isSubmitted ? (
              <div className="bg-green-500 text-white py-4 px-8 rounded-lg inline-block">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Thank you! You're now subscribed to our newsletter.
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-500 text-white py-4 px-8 rounded-lg inline-block mb-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {error}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isLoading}
                    className="flex-1 px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:transform-none flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
              </form>
            )}

            <p className="text-blue-200 text-sm mt-6">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;