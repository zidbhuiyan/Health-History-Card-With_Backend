import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Info_Navbar.css';

function Info_Navbar(props) {

  const RenderMenuInfo = () =>{
    
      return(
        <>
        <li className='info_nav-item'>
                 <Link  to='/profile' className='info_nav-links' onClick={closeMobileMenu}>
                 Vaccination History
                 </Link>
               </li>
               <li className='info_nav-item'>
                 <Link  to='/profile' className='info_nav-links' onClick={closeMobileMenu}>
                 Personal History
                 </Link>
               </li>
               <li className='info_nav-item'>
                 <Link
                   to='/profile'
                   className='info_nav-links'
                   onClick={closeMobileMenu}
                 >
                   Investigation Profile
                 </Link>
               </li>
               <li className='info_nav-item'>
                 <Link
                   to='/profile'
                   className='info_nav-links'
                   onClick={closeMobileMenu}
                 >
                   Prescriptions
                 </Link>
               </li>

               <li className='info_nav-item'>
                 <Link
                   to='/profile'
                   className='info_nav-links'
                   onClick={closeMobileMenu}
                 >
                   Drug History
                 </Link>
               </li>

               <li className='info_nav-item'>
                 <Link
                   to='/profile'
                   className='info_nav-links'
                   onClick={closeMobileMenu}
                 >
                   Doctors’ Suggestions 
                 </Link>
               </li>
               
            
         
        </>
      )
  }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  

 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <info_nav className='info_navbar'>
        <div className='info_navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'info_nav-menu active' : 'info_nav-menu'}>
            
            <RenderMenuInfo/>
            
          </ul>
        </div>
      </info_nav>
    </>
  );
}

export default Info_Navbar;