import React from 'react';
import '../../../App.css';
import './Profile.css'
import Footer from '../../Footer';
import Info_Navbar from '../../Info_Navbar';
import Navbar from '../../Navbar';
import {useLocation} from 'react-router-dom';


const Profile = (props) => {

  const location = useLocation();

  if(!sessionStorage.getItem("Myuser")){
    window.location.reload(false);
  }


    return (
      <>
       <div class ="bgpc">
        <Navbar
        NavPage='profile'
        user = {location.state.user}
        page = 'profile'/>

<div class="container">
  
    <div class="title">Profile</div>
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="firstname" value = {location.state.user.firstname} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="lastname" value = {location.state.user.lastname}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Health ID</span>
            <input type="text" name="hid" value = {location.state.user.hid}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Birth ID</span>
            <input type="text" name="birthid" value = {location.state.user.birthid}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="nid" value = {location.state.user.nid} disabled/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(YYYY/MM/DD)</span>
            <input type="text" name="dateofbirth" value = {location.state.user.dateofbirth}  disabled/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="phonenumber" value = {location.state.user.phonenumber} disabled/>
          </div>
          
          <div class="input-box">
            <span class="details">Gender</span>
            <input type="text" name="gender" value = {location.state.user.gender} disabled/>
          </div>
        </div>
      </form>
      <div class="title">Medical Information</div>
      <Info_Navbar
      userCat = "client"/>  
    </div>
  </div>
 
        
        <Footer/>
        </div>
      </>
    );

  }
  
  export default Profile;