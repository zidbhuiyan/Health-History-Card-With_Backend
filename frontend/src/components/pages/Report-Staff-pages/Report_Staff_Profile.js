import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Report_Staff_Navbar from './Report_Staff_Navbar';
import {useLocation} from 'react-router-dom';

function Report_Staff_Profile(props) {

  const location = useLocation();
  
    return (
      <>

<div class="bgrsp">
        <Report_Staff_Navbar
        user = {location.state.user}/>

        

        <div class="container">
  
  <div class="title">Report Staff Profile</div>
  <div class="content">
  <form>
      <div class="user-details">
        <div class="input-box">
          <span class="details">First Name</span>
          <input type="text" value = {location.state.user.firstname} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Last name</span>
          <input type="text" value = {location.state.user.lastname} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Report Staff Register ID</span>
          <input type="text" value = {location.state.user.Rregid} disabled/>
        </div>
        <div class="input-box">
          <span class="details">NID</span>
          <input type="text" value = {location.state.user.nid} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Date of Birth(MM/DD/YYYY)</span>
          <input type="text" value = {location.state.user.dateofbirth} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Phone Number</span>
          <input type="text" value = {location.state.user.phonenumber} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Hospital Name</span>
          <input type="text" value = {location.state.user.hospitalname} disabled/>
        </div>
        <div class="input-box">
          <span class="details">Gender</span>
          <input type="text" value = {location.state.user.gender} disabled/>
        </div>
      </div>
    </form>
  </div>
</div>
        </div>
        
        <Footer/>
      </>
    );
  }
  
  export default Report_Staff_Profile;