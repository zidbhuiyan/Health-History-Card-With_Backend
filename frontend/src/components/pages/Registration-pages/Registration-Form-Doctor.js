import React, { useState } from 'react';
import axios from 'axios';
import '../../../App';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Registration-Form.css'


function Registration_Form_Doctor() {
  
  const [user, setUser] = useState({
    Dfirstname: '',
    Dlastname: '',
    Docregid: '',
    Dnid: '',
    Ddateofbirth: '',
    Dphonenumber: '',
    hospitalname: '',
    Dgender: '',
    Dpassword: '',
    Dconfirmpassword: '',
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
    
        const newDoctor = {
          Dfirstname: user.Dfirstname,
          Dlastname: user.Dlastname,
          Docregid: user.Docregid,
          Dnid: user.Dnid,
          Ddateofbirth: user.Ddateofbirth,
          Dphonenumber: user.Dphonenumber,
          hospitalname: user.hospitalname,
          Dgender: user.Dgender,
          Dpassword: user.Dpassword,
          Dconfirmpassword: user.Dconfirmpassword,
          }
      
          if(user.Dfirstname && user.Dlastname && user.Docregid && user.Dnid && user.Ddateofbirth && user.Dphonenumber && user.hospitalname && user.Dgender && user.Dpassword && user.Dconfirmpassword ){
            alert("Successfully Registered!")
            axios.post('http://localhost:3001/createDoc', newDoctor)
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
    <div class="title">Registar As Doctor</div>
    <div class="content">
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">First Name</span>
            <input type="text" name="Dfirstname" value={user.Dfirstname} placeholder="Enter your First name" id="Dfirstname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Last name</span>
            <input type="text" name="Dlastname" value={user.Dlastname}  placeholder="Enter your Last name" id="Dlastname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Doctor Register ID</span>
            <input type="text" name="Docregid" value={user.Docregid} placeholder="Enter your Register ID" id="Docregid" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">NID</span>
            <input type="text" name="Dnid" value={user.Dnid}  placeholder="Enter your NID" id="Dnid" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Date of Birth(MM/DD/YYYY)</span>
            <input type="date" name="Ddateofbirth" value={user.Ddateofbirth}  placeholder="Enter your Date of Birth" id="Ddateofbirth" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" name="Dphonenumber" value={user.Dphonenumber}  placeholder="Enter your number" id="Dphonenumber" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Hospital Name</span>
            <input type="text" name="hospitalname" value={user.hospitalname} placeholder="Enter hospital name" id="hospitalname" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <select name="Dgender" value={user.Dgender} id="Dgender" onChange={ handleChange }>
            <option value="" disabled selected>Select Gender</option>
	          <option value="male">Male</option>
	          <option value="female">Female</option>
          	<option value="other">Prefer not to say</option>
            </select>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" name="Dpassword" value={user.Dpassword} placeholder="Enter your password" id="Dpassword" onChange={ handleChange } required/>
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" name="Dconfirmpassword" value={user.Dconfirmpassword} placeholder="Confirm your password" id="Dconfirmpassword" onChange={ handleChange } required/>
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

export default Registration_Form_Doctor;
