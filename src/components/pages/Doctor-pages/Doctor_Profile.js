import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Doctor_Navbar from './Doctor_Navbar';

function Doctor_Profile(props) {
    return (
      <>
        <Doctor_Navbar/>

<div class="container">
  
    <div class="title">Doctor Profile</div>
    <div class="content">
    <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" placeholder="Enter your First name" required/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" placeholder="Enter your Last name" required/>
          </div>
          <div class="input-box">
            <span class="details">Doctor Register ID</span>
            <input type="text" placeholder="Enter your Register ID" required/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" placeholder="Enter your NID" required/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(MM/DD/YYYY)</span>
            <input type="date" placeholder="Enter your Date of Birth" required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password" required/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <select name="gender">
            <option value="" disabled selected>Select Gender</option>
	          <option value="male">Male</option>
	          <option value="female">Female</option>
          	<option value="other">Prefer not to say</option>
            </select>
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