import React, { useState } from 'react';
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    name: "Jay F.",
    image: "/images/testimonial-1.webp",
    text: "Samara brings a wealth of knowledge from her vast experience, both from her own personal journey, and her involvement helping numerous others. She exudes a supportive, positive attitude that is essential in guiding people gently, yet assertively, and above all, successfully, through the TSM based Thrive program.",
    location: "Colorado, US"
  }, {
    name: "Coaching Client",
    image: "/images/testimonial-2.webp",
    text: "Thank you, Samara. You rock! You are such a positive force. I love the energy you bring. Because of your coaching I reached 5 out of the 6 goals I set for my Thanksgiving holiday! I got a good night's sleep on Thanksgiving and was up early the next AM for a morning run.",
    location: "Thrive Member"
  }, {
    name: "Coaching Client",
    image: "/images/testimonial-3.webp",
    text: "Samara's positivity is positively infectious! I had my coaching call with Samara today. It was great! She just radiates positivity. Very helpful and motivating.",
    location: "British Columbia"
  }, {
    name: "David",
    image: "/images/testimonial-4.webp",
    text: "I was deep in twelve steps, having done 90-meetings in 90 days three times over the years. But the program had so little science. I'm VERY excited about TSM and hope to be a TSM success story one day. I had some setbacks which is why I began the Samara calls and am so proud of my progress since I started working with her!",
    location: "Missouri, US"
  }, {
    name: "Coaching Client",
    image: "/images/testimonial-5.webp",
    text: "Went to a company Christmas party last night and only had 2 glasses of wine. Looking at my graph for the past 14 weeks I honestly already feel cured. Only drinking 1-2 on the days I drink and having 1-3 alcohol free days per week is soo awesome. I have drank a bottle of wine a day for the last 20 years so I am feeling soo grateful. Samara is the best coach!",
    location: "Washington, US"
  }, {
    name: "Erin",
    image: "/images/testimonial-6.webp",
    text: "TSM has been a challenging journey for me with lots of highs and lows. Having Samara as my guide and coach throughout this process has been vital to my success. She is extremely educated about TSM and helps normalize and brainstorm setbacks and difficult times. I highly recommend Samara to have in your corner to help navigate the TSM experience.",
    location: "Thrive Member"
  }, {
    name: "Thrive Member",
    image: "/images/testimonial-1.webp",
    text: "I just started watching Katie and Samara's monthly LIVE Q&A Podcasts. Two huge influences on my life. These two are like rock stars to me and I always look forward to watch the Q&A. Thank you both for being who you are and for the ways in which you both have improved my life.",
    location: "South Carolina, US"
  }, {
    name: "Mary F.",
    image: "/images/testimonial-2.webp",
    text: "Well, a stomach bug sure curtailed my drinking! 2 days alcohol free! NO headache and great sleep last night! My body gave me the reset I needed. PLUS I had the best session with Samara yesterday. Samara picks me up and gives me such hope.",
    location: "Canada"
  }, {
    name: "Coaching Client",
    image: "/images/testimonial-3.webp",
    text: "Samara is the BEST coach ever!!!!",
    location: "California, US"
  }, {
    name: "Tim A.",
    image: "/images/testimonial-4.webp",
    text: "Samara has been such a great coach allowing a private secure outlet for me while going through my addiction TSM journey. I so appreciate her nonjudgmental, compassionate communications and understanding of my situation and struggles. I love her upbeat attitude and how she inspires and creates a friendship style experience. She and you have actually saved my life.",
    location: "Missouri, US"
  }, {
    name: "Coaching Client",
    image: "/images/testimonial-5.webp",
    text: "I'm grateful I found Thrive and I'm very grateful Samara was my coach. Thank you for meeting me where I was and having such a big heart to help people.",
    location: "Thrive Member"
  }, {
    name: "Manny",
    image: "/images/testimonial-6.webp",
    text: "Samara doesn't take this mission lightly. I know that. She is a rarity. Samara is endowed with genuineness and authenticity.",
    location: "North Carolina, US"
  }, {
    name: "Dan",
    image: "/images/testimonial-1.webp",
    text: "Samara is top notch. She is an absolute natural at this. She has a combo of making me feel comfortable and being extraordinarily motivational.",
    location: "Virginia, US"
  }, {
    name: "Dan",
    image: "/images/testimonial-2.webp",
    text: "If you haven't found out already, when it comes to helping u get out of the alcohol trap, Samara is an absolute all-star.",
    location: "Virginia, US"
  }, {
    name: "Pamela",
    image: "/images/testimonial-3.webp",
    text: "Samara has the 'it' factor going for her as far as, 'can this person help me out of the alcohol trap'? Samara is the most motivational coach I've ever worked with.",
    location: "New York, US"
  }, {
    name: "Coaching Client",
    image: "/images/testimonial-4.webp",
    text: "I just watched your interview with Katie on the success stories. It was inspiring to say the least. Your journey and dedication to helping others is truly remarkable.",
    location: "Thrive Member"
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">Kind words from Samara's clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real results. Hear from those who have found freedom and clarity through coaching.
          </p>
        </div>

        {/* Featured Text Testimonial */}

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="/images/testimonials-badge.png" alt={testimonials[currentIndex].name} className="w-32 h-32 rounded-full object-cover shadow-lg" />
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed" data-mixed-content="true">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-800 text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button onClick={prevTestimonial} className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />)}
            </div>

            <button onClick={nextTestimonial} className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>


        {/* Grid of Additional Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <img src="/images/testimonials-badge.png" alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 italic" data-mixed-content="true">"{testimonial.text}"</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;