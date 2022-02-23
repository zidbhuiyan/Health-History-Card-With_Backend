import React from 'react';
import '../../../App';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import './Login-Form.css'


function Login_Form() {
  return (
    <>
    <div className='bgg'>
      <Navbar
      NavButtonName='Register'
      NavButtonlink='/registration'/>

<div className="center">
      <h1>Login</h1>
      <form>
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Enter ID</label>
        </div>
        <div className="txt_field">
          <input type="password" required/>
          <span></span>
          <label>Enter Password</label>
        </div>
        
        <input type="submit" value="Login"/>
        <div className="signup_link">
        Not Registered? <Link to='/registration'>Register Here</Link>
        </div>
      </form>
    </div>

      <Footer/>
      </div>
    </>
  );
}

export default Login_Form;