import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Report_Staff_Navbar from './Report_Staff_Navbar';

function Report_Staff_Profile(props) {
    return (
      <>
        <Report_Staff_Navbar/>

<div class="container">
  
    <div class="title">Report Staff Profile</div>
    <div class="content">
    <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" placeholder="Enter your First name" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" placeholder="Enter your Last name" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Report Staff Register ID</span>
            <input type="text" placeholder="Enter your Register ID" disabled/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" placeholder="Enter your NID" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(MM/DD/YYYY)</span>
            <input type="text" placeholder="Enter your Date of Birth" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Hospital Name</span>
            <input type="text" placeholder="Enter hospital name" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" placeholder="Gender" disabled/>
          </div>
        </div>
      </form>
    </div>
  </div>
        
        <Footer/>
      </>
    );
  }
  
  export default Report_Staff_Profile;