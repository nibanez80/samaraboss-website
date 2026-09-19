import React from 'react';
const HeroSection = () => {
  const handleBookSession = () => {
    document.getElementById('book-session')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('/images/hero-background.jpg')`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-green-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
          Welcome to <span className="font-semibold text-blue-200">Samara Boss Coaching</span>
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-10 border border-white/20">
          <p className="md:text-xl mb-8 text-gray-100 text-base">Sick of hangovers, lost days, wasted money, and a mind that won’t stop thinking about drinking? You’ve tried everything—rules, breaks, programs, willpower—yet you always end up back where you started. It’s exhausting, discouraging, and can make you wonder if alcohol will always have the upper hand. Here’s the truth: you’re not broken. Alcohol dependence lives in the brain’s reward system—not in your character or commitment. Your brain learned to chase alcohol’s reward, and it can learn to stop. No shame. No white-knuckling. Just a smarter way to take your power back.</p>
        </div>

        <button onClick={handleBookSession} className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Book a Session
        </button>
      </div>
    </section>;
};
export default HeroSection;