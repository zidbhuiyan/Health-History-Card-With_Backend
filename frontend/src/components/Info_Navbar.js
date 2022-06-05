import React, { useState, useEffect } from 'react';
import { Tabs, Tab, AppBar,Box } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import './Info_Navbar.css';


function Info_Navbar() {

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) =>{
    setValue(newValue) 
  }

  console.log(value);

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

export default Info_Navbar;