import React, { useState } from 'react';
import axios from 'axios';
import '../../../App';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Registration-Form.css'


function Registration_Form_Report_Staff() {
  
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    Rregid: '',
    nid: '',
    dateofbirth: '',
    phonenumber: '',
    hospitalname: '',
    gender: '',
    password: '',
    confirmpassword: '',
    })

  function handleChange (e) {
    const {name, value} = e.target;
    setUser(prevUser => {
      return{
      ...prevUser,
      [name]: value 
    }
    })
    
  }

  function handleClick(event) {
    event.preventDefault();

    const newReportstaff = {
      firstname: user.firstname,
      lastname: user.lastname,
      Rregid: user.Rregid,
      nid: user.nid,
      dateofbirth: user.dateofbirth,
      phonenumber: user.phonenumber,
      hospitalname: user.hospitalname,
      gender: user.gender,
      password: user.password,
      confirmpassword: user.confirmpassword,
    }

    if(user.firstname && user.lastname && user.Rregid && user.nid && user.dateofbirth && user.phonenumber && user.hospitalname && user.gender && user.password && user.confirmpassword  ){
      alert("Successfully Registered!")
      axios.post('http://localhost:3001/create3', newReportstaff)
      .then( res => console.log(res))
    }

    else{
      alert("Fill up all the fields!")
    }
    
   
  }
  
  return (
    <>
    <div className='bgg'>
    <Navbar
      NavPage="other"/>


<div class="container">
    <div class="title">Registar As Report Staff</div>
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="firstname" value={user.firstname} placeholder="Enter your First name" id="firstname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="lastname" value={user.lastname}  placeholder="Enter your Last name" id="lastname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Report Staff Register ID</span>
            <input type="text" name="Rregid" value={user.Rregid} placeholder="Enter your Register ID" id="Rregid" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="nid" value={user.nid}  placeholder="Enter your NID" id="nid" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(MM/DD/YYYY)</span>
            <input type="date" name="dateofbirth" value={user.dateofbirth}  placeholder="Enter your Date of Birth" id="dateofbirth" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="phonenumber" value={user.phonenumber}  placeholder="Enter your number" id="phonenumber" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Hospital Name</span>
            <input type="text" name="hospitalname" value={user.hospitalname} placeholder="Enter hospital name" id= "hospitalname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <select name="gender" value={user.gender} id="gender" onChange={ handleChange }>
            <option value="" disabled selected>Select Gender </option>
	          <option value="male">Male</option>
	          <option value="female">Female</option>
          	<option value="other">Prefer not to say</option>
            </select>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" id="password" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" name="confirmpassword" value={user.confirmpassword} placeholder="Confirm your password" id="confirmpassword" onChange={ handleChange } required/>
          </div>
          
        </div>
        
        <div class="button">
        <input onClick={handleClick} type="submit" value="Register" id="submitBtn"/>
        </div>
      </form>
    </div>
  </div>


      <Footer/>
      </div>
    </>
  );
}

export default Registration_Form_Report_Staff;
