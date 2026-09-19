import React from 'react';
const WhyBeFree = () => {
  const benefits = [{
    title: "A New Way to Drink Less",
    description: "A gentle science-based approach to drinking less - where cutting back becomes easier and no longer something you have to fight for.",
    image: "/images/why-be-free-1.jpg"
  }, {
    title: "Physical Health",
    description: "Improve sleep quality, boost energy levels, and give your body the chance to heal and thrive.",
    image: "/images/why-be-free-2.jpg"
  }, {
    title: "Authentic Relationships",
    description: "Build deeper, more meaningful connections with loved ones based on genuine presence and trust.",
    image: "/images/why-be-free-3.jpg"
  }];
  return <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">Drink Less Live More</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the freedom, clarity and self-trust of taking your power back from alcohol.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-cover bg-center" style={{
            backgroundImage: `url(${benefit.image})`
          }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>)}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">Your Journey to Freedom</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Rediscover your authentic self without alcohol's influence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Build confidence in social situations naturally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Create new habits that support your wellbeing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Find purpose and meaning in everyday moments</span>
                </li>
              </ul>
            </div>
            <div className="h-80 bg-cover bg-center rounded-xl" style={{
            backgroundImage: `url('/images/why-be-free-4.webp')`
          }}></div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyBeFree;