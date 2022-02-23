import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login-pages/Login';
import Registration from './components/pages/Registration-pages/Registration';
import About from './components/pages/About';
import Contact from './components/pages/Contact-pages/Contact';
import Service from './components/pages/Service-pages/Service';
import Login_Form from './components/pages/Login-pages/LoginForm';
import Registration_Form from './components/pages/Registration-pages/Registration-Form';

function App() {
  return (
    <>
      <Router>
        
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login_form' element={<Login_Form/>}/>
        <Route path='/Register_form' element={<Registration_Form/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
