import React, {useState} from 'react';
import '../../../App';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Login-Form.css'
import axios from 'axios';

const Login_Form_Client = ({ setClientLoginUser }) => {

 const navigate = useNavigate();

  const [user, setUser] = useState({
    hid: "",
    password: "",
    })
  
  const handleChange = e =>{
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value 
    })
    
  }


  function handleClick(event) {

    event.preventDefault();

    axios.post('http://localhost:3001/clientLogin', user)
    .then(res => {
      alert(res.data.message)
      setClientLoginUser(res.data.user)
      navigate("/",{state:{
        user_id: user.hid,
      }})
    })
  }

  return (
    <>
      <div className='bgg'>
    <Navbar
      NavPage="other"/>
     
    <div className="center">
      <h1>Login As Client</h1>
      <form>
        <div className="txt_field">
          <input type="text" name="hid" value={user.hid} onChange={handleChange} required/>
          <span></span>
          <label>Enter Health ID</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" value={user.password} onChange={handleChange} required/>
          <span></span>
          <label>Enter Password</label>
        </div>
        
        <input type="submit" onClick={handleClick} value="Login"/>
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

export default Login_Form_Client;