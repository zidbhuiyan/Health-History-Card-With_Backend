import React from 'react';
import '../../../App';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Login-Form.css'


function Login_Form() {
  return (
    <>
      <Navbar
      NavButtonName='Register'
      NavButtonlink='/registration'/>

      <div class="bg">
      <div class="form-container">
      <form id="loginForm">
      <label for="username"><b>Username</b></label>
      <input id="username" class="box" type="text"  placeholder="Enter Username" name="username" required/>

      <label for="password"><b>Password</b></label>
      <input id="password" class="box" type="password" placeholder="Enter Password" name="password" required/>

      <div class="form-group">  
          <input type="checkbox" name="remember" />  
          <label for="remember-me">Remember me</label>  
          </div> 

          <button type="submit" class="btn" id="login" name="login">login</button>
          
            

          <span class="psw"><Link
                to='/registration' >
               Register Now
              </Link></span>
      </form>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login_Form;