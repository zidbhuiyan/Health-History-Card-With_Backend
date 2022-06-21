import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar,Box } from "@material-ui/core";
import { Link,useNavigate } from 'react-router-dom';
import './Info_Navbar.css';
import { Button } from './Button';
import swal from '@sweetalert/with-react'


function Info_Navbar(props) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) =>{
    setValue(newValue) 
  }

  const vaccineStaffButton = () =>{

    navigate('/vaccine_staff_add_vaccine')

  }


   
  if(props.userCat === "vaccineStaff"){
    function TabPanel(){
      if(value == 0){
        return(
          <>
           <div>
             <h1><Button onClick={vaccineStaffButton}> Add New Vaccine </Button> <br/> Vaccine History  </h1>
             
           </div>
          </>
        );
      }
  
      else if(value == 1){
        return(
          <>
           <div>
             <h1>Personal History</h1>
           </div>
          </>
        );
      }
      
    }
  
    return (
      <> 
      <Box className='info_navbar'>
      <Tabs
          className='info_navbar-container'
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
         
        >
          <Tab className='tab_size' label="Vaccination History" />
          <Tab className='tab_size' label="Personal History" />
        </Tabs>
      </Box>
      <TabPanel/>
      </>
    );
  }

  else if(props.userCat === "reportStaff"){
    function TabPanel(){


      if(value == 0){
        return(
          <>
           <div>
             <h1>Investigation Profile</h1>
           </div>
          </>
        );
      }
  
      else if(value == 1){
        return(
          <>
           <div>
             <h1>Personal History</h1>
           </div>
          </>
        );
      }
      
    }
  
    return (
      <> 
      <Box className='info_navbar'>
      <Tabs
          className='info_navbar-container'
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
         
        >
          <Tab  className='tab_size' label="Investigation Profile" />
          <Tab className='tab_size' label="Personal History" />
        </Tabs>
      </Box>
      <TabPanel/>
      </>
    );
  }

  else if(props.userCat === "doctor"){
    function TabPanel(){
      if(value == 0){
        return(
          <>
           <div>
             <h1>Vaccine History</h1>
           </div>
          </>
        );
      }
  
      else if(value == 1){
        return(
          <>
           <div>
             <h1>Personal History</h1>
           </div>
          </>
        );
      }
  
      else if(value == 2){
        return(
          <>
           <div>
             <h1>Investigation Profile</h1>
           </div>
          </>
        );
      }
      else if(value == 3){
        return(
          <>
           <div>
             <h1>Prescriptions</h1>
           </div>
          </>
        );
      }
      else if(value == 4){
        return(
          <>
           <div>
             <h1>Drug History</h1>
           </div>
          </>
        );
      }
      else if(value == 5){
        return(
          <>
           <div>
             <h1>Family History</h1>
           </div>
          </>
        );
      }
      else if(value == 6){
        return(
          <>
           <div>
             <h1>Doctors’ Suggestions</h1>
           </div>
          </>
        );
      }
      
    }
  
    return (
      <> 
      <Box className='info_navbar'>
      <Tabs
          className='info_navbar-container'
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
         
        >
          <Tab className='tab_size' label="Vaccination History" />
          <Tab className='tab_size' label="Personal History" />
          <Tab  className='tab_size' label="Investigation Profile" />
          <Tab className='tab_size' label="Prescriptions" />
          <Tab className='tab_size' label="Drug History" />
          <Tab  className='tab_size' label="Family History" />
          <Tab className='tab_size' label="Doctors’ Suggestions" />
        </Tabs>
      </Box>
      <TabPanel/>
      </>
    );
  }
  
  else{
    function TabPanel(){
      if(value == 0){
        return(
          <>
           <div>
             <h1>Vaccine History</h1>
           </div>
          </>
        );
      }
  
      else if(value == 1){
        return(
          <>
           <div>
             <h1>Personal History</h1>
           </div>
          </>
        );
      }
  
      else if(value == 2){
        return(
          <>
           <div>
             <h1>Investigation Profile</h1>
           </div>
          </>
        );
      }
      else if(value == 3){
        return(
          <>
           <div>
             <h1>Prescriptions</h1>
           </div>
          </>
        );
      }
      else if(value == 4){
        return(
          <>
           <div>
             <h1>Drug History</h1>
           </div>
          </>
        );
      }
      else if(value == 5){
        return(
          <>
           <div>
             <h1>Family History</h1>
           </div>
          </>
        );
      }
      else if(value == 6){
        return(
          <>
           <div>
             <h1>Doctors’ Suggestions</h1>
           </div>
          </>
        );
      }
      
    }
  
    return (
      <> 
      <Box className='info_navbar'>
      <Tabs
          className='info_navbar-container'
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
         
        >
          <Tab className='tab_size' label="Vaccination History" />
          <Tab className='tab_size' label="Personal History" />
          <Tab  className='tab_size' label="Investigation Profile" />
          <Tab className='tab_size' label="Prescriptions" />
          <Tab className='tab_size' label="Drug History" />
          <Tab  className='tab_size' label="Family History" />
          <Tab className='tab_size' label="Doctors’ Suggestions" />
        </Tabs>
      </Box>
      <TabPanel/>
      </>
    );
  }
}

export default Info_Navbar;