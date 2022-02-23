import React from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Contact.css'

function Contact() {
  return (
    <>
      <Navbar
      NavButtonName='Register'
      NavButtonlink='/registration'/>
      <div class="bgc">
      <div class="contact" id="contact">
        <h1 class="heading">
          <span>c</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="content">
              <h3>For any type of query, fill up this form!</h3>
              
              <div class="row">
                <form id="contactForm">
                  <div class="inputBox">
                    <label for="cname">Name: </label>
                  </div>
                  
                  <div class="inputBox">
                    <input
                      type="text"
                      placeholder="Enter You Name"
                      id="name"
                      required
                    />
                  </div>
                  <div class="inputBox">
                    <label for="email">Email: </label>
                  </div>
                  <div class="inputBox">
                    <input
                      type="email"
                      placeholder="Enter Your E-mail"
                      id="email"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Please, type Your message here"
                    name=""
                    cols="30"
                    rows="10"
                    id="message"
                    required
                  ></textarea>
                  <input
                    type="submit"
                    class="btn"
                    value="Send message"
                    id="submitBtn"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default Contact;
