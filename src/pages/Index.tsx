
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TiersSection from '../components/TiersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <TiersSection />
      <Footer />
    </div>
  );
};

export default Index;
