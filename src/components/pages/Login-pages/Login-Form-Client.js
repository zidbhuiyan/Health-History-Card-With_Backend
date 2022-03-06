import React from 'react';
import '../../../App';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Login-Form.css'
import Login_Form from './LoginForm';


function Login_Form_Client() {
  return (
    <>
      <Login_Form 
        cat = 'Client'
        catid = 'Health'/>   
    </>
  );
}

export default Login_Form_Client;