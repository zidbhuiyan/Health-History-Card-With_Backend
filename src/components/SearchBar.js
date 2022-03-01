import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './SearchBar.css'

function SearchBar(props) {
  return (
    <>


                  <div>
                    <input className='searchinput' 
                      type="text"
                      placeholder="Search Birth Id of patient"
                      
                      required
                    />
                    
                    <i class="fa fa-search" aria-hidden="true"/>
                  </div>
                  
            
   

    </>
  );
}

export default SearchBar;