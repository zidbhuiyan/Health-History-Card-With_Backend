import React from 'react';
import '../../../App';
import Footer from '../../Footer';
import Nav_login from './Nav-login';
import Cards from '../../Cards';


function Login() {
  return (
    <>
      <Nav_login/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default Login;