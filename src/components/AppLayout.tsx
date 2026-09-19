import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import WhyBeFree from './WhyBeFree';
import Biography from './Biography';
import BookSession from './BookSession';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';
import ThriveAffiliate from './ThriveAffiliate';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <div id="why-be-free">
          <WhyBeFree />
        </div>
        <div id="about">
          <Biography />
        </div>
        <BookSession />
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="resources">
          <ThriveAffiliate />
        </div>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
