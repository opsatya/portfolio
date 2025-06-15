
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-bg bg-terminal-glow font-mono flex flex-col">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;
