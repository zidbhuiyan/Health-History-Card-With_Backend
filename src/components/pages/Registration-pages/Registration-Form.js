import React from 'react';
import '../../../App';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Registration-Form.css'


function Registration_Form() {
  return (
    <>
      <Navbar
      NavButtonName='Login'
      NavButtonlink='/login'/>

<div class="bg">
<div class="form-container">
<form id="registrationForm">
<h4>Register Here</h4>
 <p>Please fill in this form to create an account.</p>
 <div>
 <div>
 <label for="fname">First Name: </label>
 <br></br>
 <input class="box" type="text" class="fname" placeholder="Enter First Name" name="fname" id="fname" required/>
 </div>
 <div id="line">
 <label for="lname">Last Name: <br></br> </label>
 <input class="box" type="text" class="lname" placeholder="Enter Last Name" name="lname" id="lname" required/>
 </div>
 </div>
 <div>          
 <label for="nid">NID card Number <br></br> </label>
 <input class="box" type="text" class="nid" placeholder="Enter NID" name="nid" id="nid" required/>
 </div>
 <div>
             
 <label for="password">Enter Password: <br></br> </label>
 <input class="box" type="password" class="password" placeholder="Enter Password" name="password" id="password" required/>
 </div>

 <div>
             
 <label for="password">Confirm Password: <br></br> </label>
 <input class="box" type="password" class="confirmpassword" placeholder="Enter Password" name="confirmpassword" id="confirmpassword" required/>
 </div>

 <div>
             
 <label for="phonenumber">Phone Number: <br></br> </label>
 <input class="box" type="number" class="phonenumber" placeholder="Enter Phone Number" name="phonenumber" id="phonenumber" required/>
 </div>
 <button type="submit" class="btn" id="register2" name="register2">Register</button>

 <div>
                    <span class="psw"><Link to='/login'><p>Already have an account? Log In</p></Link> </span>
              </div>
</form>
    </div>           
    </div>      
      <Footer/>
    </>
  );
}

export default Registration_Form;