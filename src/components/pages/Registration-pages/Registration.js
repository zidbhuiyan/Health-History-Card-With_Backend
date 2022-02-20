import React from 'react';
import '../../../App';
import Footer from '../../Footer';
import Nav_registration from './Nav-registration';


function Registration() {
  return (
    <>
      <Nav_registration/>
      <h1 className='registration'>Registration</h1>
      <Footer/>
    </>
  );
}

export default Registration;