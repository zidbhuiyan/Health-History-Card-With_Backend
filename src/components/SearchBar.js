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
                      placeholder="Search Health Id of patient"
                      
                      required
                    />

                    <Button buttonStyle='btn--outline' buttonSize='btn--medium'><i class="fa fa-search" aria-hidden="true"/> </Button>
                    
                  </div>
                  
            
   

    </>
  );
}

export default SearchBar;