import React from 'react';
import '../../../App.css';
import './Profile.css'
import Footer from '../../Footer';
import Info_Navbar from '../../Info_Navbar';
import Navbar from '../../Navbar';

const Profile = () => {

    return (
      <>
       <div class ="bgpc">
        <Navbar
        NavPage='profile'/>

<div class="container">
  
    <div class="title">Profile</div>
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="firstname"disabled/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="lastname" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Birth ID</span>
            <input type="text" name="birthid" disabled/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="nid" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(DD/MM/YYYY)</span>
            <input type="text" name="dateofbirth" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="phonenumber" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" name="password" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" name="confirmpassword" disabled/>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" name="confirmpassword" disabled/>
          </div>
        </div>
      </form>
      <div class="title">Medical Information</div>
      <Info_Navbar/>  
    </div>
  </div>
 
        
        <Footer/>
        </div>
      </>
    );
  }
  
  export default Profile;