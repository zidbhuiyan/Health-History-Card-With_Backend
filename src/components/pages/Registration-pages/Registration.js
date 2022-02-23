import React from 'react';
import '../../../App';
import CardItem from '../../CardItem';
import Footer from '../../Footer';
import Navbar from '../../Navbar';


function Registration() {
  return (
    <>
      <Navbar
      NavButtonName='Login'
      NavButtonlink='/login'/>
      <div className='cards'>
      <h1>Register Here!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrjug5wizRLZJT1t4LMfmsYYGOliFcf60IPhwAIWZV6GAbUxxxeA61nJGDaZwl9YWIc0&usqp=CAU'
              text='Register as Client'
              path='/Register_form'
            />
            <CardItem
              src='https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg'
              text='Register as Doctor'
              path='/Register_form'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='https://ichef.bbci.co.uk/news/976/cpsprodpb/CAF2/production/_122945915_gettyimages-1291715271.jpg'
              text='Register as Report staff'
              path='/Register_form'
            />
            <CardItem
              src='https://scx2.b-cdn.net/gfx/news/2020/studyfindsme.jpg'
              text='Register as Vaccine staff'
              path='/Register_form'
            />
          </ul>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default Registration;