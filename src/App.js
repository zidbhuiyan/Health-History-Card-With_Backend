import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login-pages/Login';
import Registration from './components/pages/Registration-pages/Registration';
import Contact from './components/pages/Contact-pages/Contact';
import Service from './components/pages/Service-pages/Service';
import Registration_Form from './components/pages/Registration-pages/Registration-Form';
import Registration_Form_Doctor from './components/pages/Registration-pages/Registration-Form-Doctor';
import Registration_Form_Vaccine_Staff from './components/pages/Registration-pages/Registration-Form-Vaccine-Staff';
import Registration_Form_Report_Staff from './components/pages/Registration-pages/Registration-Form-Report-Staff';
import Login_Form_Client from './components/pages/Login-pages/Login-Form-Client';
import Login_Form_Doctor from './components/pages/Login-pages/Login-Form-Doctor';
import Login_Form_Report_Staff from './components/pages/Login-pages/Login-Form-Report-Staff';
import Login_Form_Vaccine_Staff from './components/pages/Login-pages/Login-Form-Vaccine-Staff';
import Doctor_Home from './components/pages/Doctor-pages/Doctor_Home';
import About from './components/pages/About-pages/About';
import Profile from './components/pages/Profile-pages/Profile';


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
        <Route path='/login_form_client' element={<Login_Form_Client/>}/>
        <Route path='/login_form_doctor' element={<Login_Form_Doctor/>}/>
        <Route path='/login_form_report_staff' element={<Login_Form_Report_Staff/>}/>
        <Route path='/login_form_vaccine_staff' element={<Login_Form_Vaccine_Staff/>}/>
        <Route path='/Register_form' element={<Registration_Form/>}/>
        <Route path='/Register_form_doctor' element={<Registration_Form_Doctor/>}/>
        <Route path='/Register_form_vaccine_staff' element={<Registration_Form_Vaccine_Staff/>}/>
        <Route path='/Register_form_report_staff' element={<Registration_Form_Report_Staff/>}/>

        <Route path='/doctor_home' element={<Doctor_Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
