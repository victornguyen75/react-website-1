import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function SignUp() {

  useEffect(() => window.scrollTo({ top: 0, left: 0, behavior:'smooth'}));

  return (
    <>
      <h1 className='sign-up'>SIGN UP</h1>
      <Footer />
    </>
  );
}
