import React, { useState } from 'react';
import '../../../App';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Registration-Form.css'




function Registration_Form() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    birthid: "",
    nid: "",
    dateofbirth: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    gender: ""

    })

  const handleChange = e =>{
    console.log(e);
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value 
    })
    
  }
 
 

  return (
    <>
    <div className='bgg'>
      <Navbar
      NavPage='other'/>


<div class="container">
    {console.log("User", user)}
    <div class="title">Registration</div>
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="firstname" value={user.firstname} placeholder="Enter your First name"  onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="lastname" value={user.lastname}  placeholder="Enter your Last name" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Birth ID</span>
            <input type="text" name="birthid" value={user.birthid} placeholder="Enter your Birth Certificate ID" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="nid" value={user.nid}  placeholder="Enter your NID" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Father's Name</span>
            <input type="text" name="father_name" value={user.father_name} placeholder="Enter your Father's Name" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Father's NID</span>
            <input type="text" name="father_nid" value={user.father_nid}  placeholder="Enter your Father's NID" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Mother's Name</span>
            <input type="text" name="mother_name" value={user.mother_name} placeholder="Enter your Mother's Name" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Mother's NID</span>
            <input type="text" name="mother_nid" value={user.mother_nid}  placeholder="Enter your Mother's NID" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(DD/MM/YYYY)</span>
            <input type="date" name="dateofbirth" value={user.dateofbirth}  placeholder="Enter your Date of Birth" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="phonenumber" value={user.phonenumber}  placeholder="Enter your number" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" name="password" value={user.password} placeholder="Enter your password" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" name="confirmpassword" value={user.confirmpassword} placeholder="Confirm your password" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <select name="gender" value={user.gender} onChange={ handleChange }>
            <option value="" disabled selected>Select Gender </option>
	          <option value="male">Male</option>
	          <option value="female">Female</option>
          	<option value="other">Prefer not to say</option>
            </select>
          </div>
        </div>
     
        <div class="button" >
          <input type="submit" value="Register"/>
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
