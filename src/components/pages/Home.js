import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import HeroSection from '../Herosection';
import Navbar from '../Navbar';
import Service from './Service';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Service/>
      <Footer/>
    </>
  );
}

export default Home;
