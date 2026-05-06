import HeroSection from '@/components/demo/Hero';
import ScrollRevealSection from '@/components/demo/ScrollRevealSection';
import ServicesSection from '@/components/demo/ServicesSection';
import VideoCarousel from '@/components/demo/VideoCarousel';
import React from 'react';


function Demo() {
  return (
    <div className="App">
      <HeroSection />
      <VideoCarousel />
      <ScrollRevealSection />
      <ServicesSection />
    </div>
  );
}

export default Demo;