import React, { useEffect } from 'react';
import Footer from '../Footer';
import '../../App.css';

export default function Services() {
  
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <Footer />
    </>  
  );
}
