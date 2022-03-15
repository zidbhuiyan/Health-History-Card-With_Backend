import React, {useState} from 'react';
import '../../../App.css';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './Contact.css'

function Contact() {

  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput => {
    return{
        ...prevInput,
        [name] : value
    }
    
  })
}
  function handleClick(event){
     event.preventDefault();
     console.log(input);
  }

  return (
    <>
      <Navbar
      NavPage='other'/>
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
                    <input onChange ={handleChange}
                      name= "name"
                      type="text"
                      value={input.name}
                      placeholder="Enter You Name"
                      id="name"
                      required
                    />
                  </div>
                  <div class="inputBox">
                    <label for="email">Email: </label>
                  </div>
                  <div class="inputBox">
                    <input onChange ={handleChange}
                      name= "email"
                      type="email"
                      value={input.email}
                      placeholder="Enter Your E-mail"
                      id="email"
                      required
                    />
                  </div>
                  <textarea onChange ={handleChange}
                    name= "message"
                    placeholder="Please, type Your message here"
                    value={input.message}
                    cols="30"
                    rows="10"
                    id="message"
                    required
                  ></textarea>
                  <input onClick={handleClick}
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
