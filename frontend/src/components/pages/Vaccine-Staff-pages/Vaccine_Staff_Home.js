import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SearchBar from '../../SearchBar';
import Vaccine_Staff_Navbar from './Vaccine_Staff_Navbar';
import'./Vaccine_Staff_Home.css'
import {useLocation} from 'react-router-dom';

function Vaccine_Staff_Home() {
  
  const location = useLocation();
  
  return (
    <>
    <div className='bgVacStf'>
      <Vaccine_Staff_Navbar
      user = {location.state.user}/>
      <SearchBar/>
      <Footer/>
    </div>
    </>
  );
}

export default Vaccine_Staff_Home;