import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SearchBar from '../../SearchBar';
import Doctor_Navbar from './Doctor_Navbar';
import'./Doctor_Home.css'

function Doctor_Home() {
  return (
    <>
    <div className='bgdoctor'>
      <Doctor_Navbar/>
      <SearchBar/>
      <Footer/>
    </div>
    </>
  );
}

export default Doctor_Home;