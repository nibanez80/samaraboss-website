import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Sparkles, Hand, Star, Leaf, Info, CheckCircle2, ArrowRight, Mail, PlayCircle } from 'lucide-react';

const OwnYourDrink = () => {
  const whoFor = [
    'You want to cut back or take control of your drinking',
    'You\'re tired of shame, guilt, and failed "day ones"',
    'You want freedom without having to quit cold turkey',
    'You believe in science and compassion, not punishment',
  ];

  const benefits = [
    'A discreet and personalized Sinclair Method program',
    'Complete privacy control — you decide what you share',
    'Doctor referral for naltrexone consult (appointment & medication separate costs)',
    'Weekly live group coaching sessions with protocol alumni experts (optional)',
    'Unlimited coach messaging for daily motivation and support',
    'A private awesome community of Thrivers who get you!',
    'A path to moderation or alcohol-free living — on your terms',
  ];

  const emailPerks = [
    'A free copy of our "TSM Quick Start Guide"',
    'Weekly encouragement',
    'Tips for mindful drinking, habit change, and emotional healing',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Own Your Drink
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Cut back on drinking — or quit if you want.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Easy.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            A revolutionary, science-based path to freedom from alcohol — without shame, willpower wars, or all-or-nothing rules.
          </p>

          {/* Embedded video placeholder */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 border border-white/10">
              {/* Replace the contents below with an <iframe> when video link is provided */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <PlayCircle className="w-20 h-20 mb-4 opacity-90" />
                <p className="text-lg font-semibold mb-1">Video Coming Soon</p>
                <p className="text-sm text-white/70 max-w-md">
                  Embedded video will appear here. Provide your video link and we'll drop it right in.
                </p>
              </div>
              {/* Example once ready:
              <iframe
                className="absolute inset-0 w-full h-full"
                src="YOUR_VIDEO_URL"
                title="Own Your Drink"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#explore"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore the Program <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#join-list"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-3.5 rounded-full font-semibold shadow border border-gray-200 transition-all duration-300"
            >
              Join the List <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Discover a New Path */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Discover a New Path to Freedom from Alcohol
            </h2>
          </div>
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>Are you tired of the "all or nothing" approach to recovery?</p>
            <p>You're not broken. You're not weak. You just haven't been given the right tools — until now.</p>
            <p>
              <strong className="text-gray-900">Own Your Drink</strong> is here to introduce you to a revolutionary science-based solution that is changing lives quietly but powerfully:{' '}
              <strong className="text-gray-900">The Sinclair Method (TSM)</strong>.
            </p>
            <p>
              Through our partnership with <strong className="text-gray-900">Thrive Alcohol Recovery</strong>, you can access a proven approach that uses targeted medication and gradual habit change to help you <em>drink less, without the battle</em>.
            </p>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Who Is This For?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whoFor.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-gray-100"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is The Sinclair Method */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Hand className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Is The Sinclair Method?
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            TSM uses a medication called <strong className="text-gray-900">naltrexone</strong> to retrain your brain's reward system over time. With consistent use and mindful drinking, your cravings fade — and your relationship with alcohol can finally shift.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 rounded-xl text-center">
            <p className="text-xl font-bold">
              Backed by science. Grounded in choice. Powered by YOU.
            </p>
          </div>
        </div>
      </section>

      {/* Why Own Your Drink */}
      <section id="explore" className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Star className="w-7 h-7 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Why Own Your Drink?
            </h2>
          </div>
          <p className="text-lg text-gray-700 text-center mb-4">
            We're not a treatment center. We're a bridge to something better.
          </p>
          <p className="text-lg text-gray-700 text-center mb-10">
            When you click below, you'll be connected with our trusted partners at{' '}
            <strong className="text-gray-900">Thrive Alcohol Recovery</strong>, where you'll get:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Next Step */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl shadow-xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Your Next Step</h2>
          </div>
          <p className="text-lg mb-4 text-white/95">
            It starts with a decision to try something different.
          </p>
          <p className="text-lg font-semibold mb-8 text-white">
            Click below to explore Thrive Alcohol Recovery and start your TSM journey today:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="https://www.jointhrivecommunity.com/?via=samara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-gray-100 px-8 py-3.5 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore the Program <ArrowRight className="w-5 h-5" />
            </a>

          </div>
          <p className="text-white/95 text-lg italic">
            You deserve a recovery path that fits <em>you</em>. Not one built on fear, shame, or all-or-nothing rules. Let's rethink this together.
          </p>
        </div>
      </section>

      {/* Want tips + support */}
      <section id="join-list" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-7 h-7 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Want Tips + Support?
            </h2>
          </div>
          <p className="text-lg text-gray-700 mb-6">Join our email list and get:</p>
          <ul className="space-y-3 mb-8">
            {emailPerks.map((perk, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">{perk}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <a
              href="https://breakfreefromaud.myflodesk.com/lrpep8csbf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
            >
              Click here to sign up and get your free guide
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* Footer note */}
      <section className="py-10 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong className="text-gray-900">Own Your Drink</strong> is a proud affiliate partner of{' '}
            <strong className="text-gray-900">Thrive Alcohol Recovery</strong>. We only promote what we believe in and have personally seen transform lives.
          </p>
          <div className="mt-6">
            <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OwnYourDrink;
