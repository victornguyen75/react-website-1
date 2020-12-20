import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Products() {

  useEffect(() => window.scrollTo({ top: 0, left: 0, behavior:'smooth'}));

  return (
    <>
      <h1 className='products'>PRODUCTS</h1>
      <Footer />
    </>
  );
}
