import React, { useState } from 'react';
import axios from 'axios';
import '../../../App';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Registration-Form.css'


function Registration_Form() {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    birthid: '',
    nid: '',
    dateofbirth: '',
    phonenumber: '',
    fathersname: '',
    fathersnid: '',
    mothersname: '',
    mothersnid: '',
    presentaddress: '',
    permanentaddress: '',
    password: '',
    confirmpassword: '',
    gender: '',
    emergphonenumber: '',
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

    const newClient = {
    firstname: user.firstname,
    lastname: user.lastname,
    birthid: user.birthid,
    nid: user.nid,
    dateofbirth: user.dateofbirth,
    phonenumber: user.phonenumber,
    fathersname: user.fathersname,
    fathersnid: user.fathersnid,
    mothersname: user.mothersname,
    mothersnid: user.mothersnid,
    presentaddress: user.presentaddress,
    permanentaddress: user.permanentaddress,
    password: user.password,
    confirmpassword: user.confirmpassword,
    gender: user.gender,
    emergphonenumber: user.emergphonenumber
    }
    
    axios.post('http://localhost:3001/create1', newClient)
    
    alert("Registration Done");
  }
 
 

  return (
    <>
    <div className='bgg'>
      <Navbar
      NavPage='other'/>


<div class="container">
    
    <div class="title">Registration</div>
    <div class="content">
      <form>
        <div class="user-details" >
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="firstname" value={user.firstname} placeholder="Enter your First name" id="firstname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="lastname" value={user.lastname}  placeholder="Enter your Last name" id="lastname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Birth ID</span>
            <input type="text" name="birthid" value={user.birthid} placeholder="Enter your Birth Certificate ID" id="birthid" onChange={ handleChange } required/>
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
            <span class="details">Father's Name</span>
            <input type="text" name="fathersname" value={user.fathersname} placeholder="Enter your father's name" id="fathersname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Father's NID</span>
            <input type="text" name="fathersnid" value={user.fathersnid} placeholder="Enter your father's NID" id="fathersnid" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Mother's Name</span>
            <input type="text" name="mothersname" value={user.mothersname} placeholder="Enter your mother's name" id="mothersname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Mother's NID</span>
            <input type="text" name="mothersnid" value={user.mothersnid} placeholder="Enter your mother's NID" id="mothersnid" onChange={ handleChange }  required/>
          </div>
          <div class="input-box">
            <span class="details">Present Address</span>
            <input type="text" name="presentaddress" value={user.presentaddress} placeholder="Enter your present address" id="presentaddress" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Permanent Address</span>
            <input type="text" name="permanentaddress" value={user.permanentaddress} placeholder="Enter your permanent address" id="permanentaddress" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" id="password" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" name="confirmpassword" value={user.confirmpassword} placeholder="Confirm your password" id="confirmpassword" onChange={ handleChange } required/>
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
            <span class="details">Emergency Phone Number</span>
            <input type="text" name="emergphonenumber" value={user.emergphonenumber} placeholder="Enter your emergency phone number" id="emergphonenumber" onChange={ handleChange } required/>
          </div>
        </div>
     
        <div class="button" >
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

export default Registration_Form;