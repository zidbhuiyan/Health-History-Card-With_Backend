import React from 'react';
import '../../../App';
import { Link } from 'react-router-dom';
import './Login-Form.css'
import Footer from '../../Footer';
import Navbar from '../../Navbar';

function Login_Form(props) {
  return (
    <>
    <div className='bgg'>
    <Navbar
      NavButtonName='Register'
      NavButtonlink='/registration'/>

    <div className="center">
      <h1>Login As {props.cat}</h1>
      <form>
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Enter {props.catid} ID</label>
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