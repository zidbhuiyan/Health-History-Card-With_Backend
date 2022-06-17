import React, { useState, useEffect } from 'react';
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
import Print_card from './components/pages/Print-card/print_card';
import Doctor_Profile from './components/pages/Doctor-pages/Doctor_Profile';
import Report_Staff_Home from './components/pages/Report-Staff-pages/Report_Staff_Home';
import Report_Staff_Profile from './components/pages/Report-Staff-pages/Report_Staff_Profile';
import Vaccine_Staff_Home from './components/pages/Vaccine-Staff-pages/Vaccine_Staff_Home';
import Vaccine_Staff_Profile from './components/pages/Vaccine-Staff-pages/Vaccine_Staff_Profile';
import Search_profile from './components/pages/Search-profile/Search_profile';


function App() {

  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("Myuser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("Myuser", JSON.stringify(user))
    setLoginUser(user)
  }

  console.log(user);


  return (
    <>
      <Router>
        <Routes>
        <Route path='/' exact element={ <Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/login_form_client' element={<Login_Form_Client updateUser={updateUser}  />}/>
        <Route path='/login_form_doctor' element={<Login_Form_Doctor updateUser={updateUser}  />}/>
        <Route path='/login_form_report_staff' element={<Login_Form_Report_Staff updateUser={updateUser}  />}/>
        <Route path='/login_form_vaccine_staff' element={<Login_Form_Vaccine_Staff updateUser={updateUser}  />}/>
        <Route path='/Register_form' element={<Registration_Form/>}/>
        <Route path='/Register_form_doctor' element={<Registration_Form_Doctor/>}/>
        <Route path='/Register_form_vaccine_staff' element={<Registration_Form_Vaccine_Staff/>}/>
        <Route path='/Register_form_report_staff' element={<Registration_Form_Report_Staff/>}/>

        <Route path='/doctor_home' element={<Doctor_Home/>}/>
        <Route path='/doctor_profile' element={<Doctor_Profile/>}/>

        <Route path='/report_staff_home' element={<Report_Staff_Home/>}/>
        <Route path='/report_staff_profile' element={<Report_Staff_Profile/>}/>

        <Route path='/vaccine_staff_home' element={<Vaccine_Staff_Home/>}/>
        <Route path='/vaccine_staff_profile' element={<Vaccine_Staff_Profile/>}/>
        
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/print_card' element={<Print_card/>}/>

        <Route path='/search_profile' element={<Search_profile/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
