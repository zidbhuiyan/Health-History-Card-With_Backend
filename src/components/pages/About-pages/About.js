import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './About.css'


function About() {
  return (
    <>
    <Navbar
      NavPage = 'other'/>
      <div class="bga">
      <section class="about" id="about">
        <h1 class="heading">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span>&nbsp;</span>
          <span>U</span>
          <span>s</span>
        </h1>

        <div class="box-container">
          <div class="box">
              <div className='aboutimg'>
                  <img src="./images/img-1.jpg"/>
              </div>
              <h3>Samiha Fairooz</h3>
              <p>garbage value</p>
          </div>
          <div class="box">
          <div className='aboutimg'>
              </div>
              <h3>Shakila Yesmin Miti</h3>
              <p>garbage value</p>
          </div>
          <div class="box">
             <div className='aboutimg'>
                 
              </div>
              <h3>Zihadul Islam</h3>
              <p>garbage value</p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default About;