import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SearchBar from '../../SearchBar';
import Report_Staff_Navbar from './Report_Staff_Navbar';
import'./Report_Staff_Home.css'
import {useLocation} from 'react-router-dom';

function Report_Staff_Home() {

  const location = useLocation();
  
  return (
    <>
    <div className='bgRepStf'>
      <Report_Staff_Navbar
       user = {location.state.user}/>
      <SearchBar
      userCat = "reportStaff"
      userCatInfo = {location.state.user}/>
      <Footer/>
    </div>
    </>
  );
}

export default Report_Staff_Home;