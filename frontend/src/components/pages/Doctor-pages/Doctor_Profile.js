import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Doctor_Navbar from './Doctor_Navbar';
import {useLocation} from 'react-router-dom';

function Doctor_Profile(props) {

  const location = useLocation();

    return (
      <>
        <Doctor_Navbar
        user = {location.state.user}/>

<div class="container">
  
    <div class="title">Doctor Profile</div>
    <div class="content">
    <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" value = {location.state.user.Dfirstname} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" value = {location.state.user.Dlastname} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Doctor Register ID</span>
            <input type="text" value = {location.state.user.Docregid} disabled/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" value = {location.state.user.Dnid} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(MM/DD/YYYY)</span>
            <input type="text" value = {location.state.user.Ddateofbirth} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" value = {location.state.user.Dphonenumber} disabled/>
          </div>

          <div class="input-box">
            <span class="details">Hospital Name</span>
            <input type="text" value = {location.state.user.hospitalname} disabled/>
          </div>
         
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" value = {location.state.user.Dgender} disabled/>
          </div>
        </div>
      </form>
    </div>
  </div>
        
        <Footer/>
      </>
    );
  }
  
  export default Doctor_Profile;