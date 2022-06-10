import React, {useState} from 'react';
import '../../../App';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Login-Form.css'

function Login_Form_Doctor() {
  const [user, setUser] = useState({
    birthid: "",
    nid: "",
    password: "",
    })
  
  const handleChange = e =>{
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
      NavPage="other"/>

    <div className="center">
      
      <h1>Login As Doctor</h1>
      <form>
        <div className="txt_field">
          <input type="text" name="birthid" value={user.birthid} onChange={handleChange} required/>
          <span></span>
          <label>Enter Registration ID</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" value={user.password} onChange={handleChange} required/>
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

export default Login_Form_Doctor;