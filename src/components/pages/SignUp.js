import React, { useEffect } from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function SignUp() {

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <h1 className='sign-up'>SIGN UP</h1>
      <Footer />
    </>
  );
}
