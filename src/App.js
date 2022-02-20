import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login-pages/Login';
import Registration from './components/pages/Registration-pages/Registration';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
