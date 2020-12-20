import React, { useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

export default function Home() {

  useEffect(() => window.scrollTo({ top: 0, left: 0, behavior:'smooth'}));

  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
