import React from 'react';
const ThriveAffiliate = () => {
  const handleThriveClick = () => {
    window.open('https://www.jointhrivecommunity.com/?via=samara', '_blank');
  };
  return <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                Explore Thrive Alcohol Recovery
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                I am a proud affiliate partner of Thrive Alcohol Recovery. Their comprehensive approach combines evidence-based methods with compassionate support, offering powerful resources for lasting alcohol recovery.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-600">Proven recovery methodologies</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-600">Expert-led support program</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-600">Community-based recovery approach</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-600">Comprehensive resource library</span>
                </div>
              </div>

              <button onClick={handleThriveClick} className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
                Learn More About Thrive
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                  <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
                </svg>
              </button>
            </div>

            {/* Image Side */}
            <div className="h-64 md:h-auto bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 flex items-center justify-center p-8">
              <a
                href="https://www.jointhrivecommunity.com/?via=samara"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:scale-105"
                aria-label="Visit Thrive Alcohol Recovery"
              >
                <img
                  src="/images/thrive-affiliate.jpg"
                  alt="Thrive Alcohol Recovery logo"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-lg"
                />
              </a>
            </div>




          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            As an affiliate partner, I believe in Thrive's mission to provide accessible, effective recovery resources. 
            Their approach complements the personalized coaching support I provide.
          </p>
        </div>
      </div>
    </section>;
};
export default ThriveAffiliate;