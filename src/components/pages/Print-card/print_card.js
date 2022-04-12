import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import '../../../App.css';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import './print_card.css'

const Print_card = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

    return (
      <>
        <Navbar
        NavPage='profile'/>

<div class="container">
  
  <div class="title">Health Card</div>
  <div class="content">
      <div ref={componentRef} class="card_container">

      <div class="padding">
                <div class="font">
                    <div class="top">
                        <div class="card_tittle">
                            Health Card
                        </div>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/566/937/large_2x/vector-person-icon.jpg" alt='Photo'/>
                    </div>
                    <div class="bottom">
                        <p class="left">Health ID:</p>
                        <p class="left_desi">1911201642</p>
                        <p class="left">Name:</p>
                        <p class="left_desi">Zihadul Islam</p>
                        <p class="right">Gender:</p>
                        <p class="right_desi">Male</p>
                        <p class="right">Date of Birth:</p>
                        <p class="right_desi">11/11/11</p>
                    </div>
                </div> 

            </div>
            <div class="back">
                <h1 class="Details">Information</h1>
                <div class="details-info">
                        <p class="left">Email:</p>
                        <p class="left_desi">email@email.com</p>
                        <p class="left">Blood Group:</p>
                        <p class="left_desi">AB +ve</p>
                        <p class="left">Diseases:</p>
                        <p class="left_desi">Diabetes</p>
                        <p class="center_desi"><b>Emergency Number</b></p>
                        <p class="center_desi">01621964493</p>
                    </div>
                </div>
      </div>

      <div class='print_btn'>
          <button onClick={handlePrint} className="print__button">  Print </button> 
          </div>
      
  </div>
</div>
  
        <Footer/>
      </>
    );
  }
  
  export default Print_card;