import React from 'react';
import '../../../App';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Login-Form.css'
import Login_Form from './LoginForm';


function Login_Form_Doctor() {
  return (
    <>

      <Login_Form 
        cat = 'Doctor'
        catid = 'Doctor Register'/>
     
    </>
  );
}

export default Login_Form_Doctor;