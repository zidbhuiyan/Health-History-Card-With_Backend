import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

function About() {
  return (
    <>
      <Navbar
      NavButtonName='Register'
      NavButtonlink='/registration'/>
      <h1 className='about'>About</h1>
      <Footer/>
    </>
  );
}

export default About;