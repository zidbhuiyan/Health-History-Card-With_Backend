import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SearchBar from '../../SearchBar';
import Vaccine_Staff_Navbar from './Vaccine_Staff_Navbar';
import'./Vaccine_Staff_Home.css'

function Vaccine_Staff_Home() {
  return (
    <>
    <div className='bgVacStf'>
      <Vaccine_Staff_Navbar/>
      <SearchBar/>
      <Footer/>
    </div>
    </>
  );
}

export default Vaccine_Staff_Home;