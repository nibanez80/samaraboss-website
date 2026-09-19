import React, { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/samaraibanez';

const BookSession = () => {
  useEffect(() => {
    // Avoid injecting the widget script more than once if this component
    // re-renders (e.g. during development hot-reloading).
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="book-session" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Take the First Step Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a time that works best for you, and let's begin your journey together.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '1250px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookSession;
