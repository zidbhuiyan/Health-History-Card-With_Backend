import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import SearchBar from '../../SearchBar';
import Doctor_Navbar from './Doctor_Navbar';
import'./Doctor_Home.css'
import {useLocation} from 'react-router-dom';

function Doctor_Home( props ) {

  const location = useLocation();
  
  return (
    <>
    <div className='bgdoctor'>
      <Doctor_Navbar
      user = {location.state.user}/>
      <SearchBar/>
      <Footer/>
    </div>
    </>
  );
}

export default Doctor_Home;