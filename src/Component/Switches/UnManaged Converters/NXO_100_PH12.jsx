import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../../img/products/Switches/NXO-100C.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Switches/Application.jpeg';
import Application2 from '../../../img/products/Switches/Application2.jpeg';
import dime1 from '../../../img/products/Switches/Dimension_PH12.jpeg';


import {TiTickOutline} from 'react-icons/ti';



import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';

const NXO_100_PH12 = () => { 

  let PartNumber = "NXO-100-PH12";
  let productName ="1x 10/100Base RJ45 to 1x 100Base Fiber (SC/ST) with PoE PSE (30W, 12/24/48VDC)";

  const [name, setName] = useState("");
  const [mobNumber, setmobNumber] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userMessage, setuserMessage] = useState("");

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s6yscqg', 'template_nnkudli', form.current, 'ctLMl35oWO-hYo21q')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent :)");
          document.getElementById('successMsg').style.top="0px";
    
          setName("");
          setmobNumber("");
          setuserEmail("");
          setuserMessage("");

      }, (error) => {
          console.log(error.text);
      });
  }; 


  const hidePop = ()=>{
    document.getElementById("successMsg").style.top="-100%";
      }

  return (
<>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={productImg1} className='img-main2' alt="product-40GLoobBack"/>

</div>



<div className="d-flex justify-content-center flex-wrap cart-btn">
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal"><BsCartCheck style={{marginBottom:"5px"}}/> Request a Quote</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>
{productName}
</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<p className='sell-text'>{PartNumber}</p>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

     <p className='listFeture'>   Conversion between 10/100Base-TX and 100Base-FX SC or ST Fiber interface </p>
     <p className='listFeture'>   Provides IEEE 802.3at PoE output (30Watts) </p>
     <p className='listFeture'>   Provides a DIP-Switch to set functions </p>
     <p className='listFeture'>   IP30 rugged metal housing and fanless </p>
     <p className='listFeture'>   Wide operating temperature -20~75°C </p>
     <p className='listFeture'>   Supports Jumbo frame 9K bytes packet </p>

<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>   12/24/48VDC (9.6~57VDC) redundant dual input power with power booster </p>
 <p className='listFeture'>    Regulate PoE output voltage (52VDC) to stabilize PoE device, and guarantee delivery  PoE power distance to 100meter </p>
 <p className='listFeture'>    Supports Remote  PD reset by fiber port link down </p>
 <p className='listFeture'>    Supports LFPT (Link Fault Pass Through) and FEF (Far End Fault) </p>
 
 <p className='listFeture'>    Regulated PoE output voltage (52VDC ) to stabilize PoE device </p>
 <p className='listFeture'>    Guarantee delivery PoE power distance to 100 meters </p>
 <p className='listFeture'>   Wide range input power 12/24/48VDC (9.6~57VDC) </p>
   <p className='listFeture'>  Built-in very high efficiency (94~97%) to boost PoE output voltage </p>

</div>


</div> 

<div className='container pt-lg-5  pb-lg-5'>
<div className='resp-overflow'>
    <div className='d-flex justify-content-center'>
       <ul className="navs nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

  </ul> 
</div>
</div>



  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>{PartNumber} is a compact sized, unmanaged industrial grade 100M Ethernet media converter that supports conversion between  electrical 10/100Base-TX and optical 100Base-FX Ethernet. Housed in rugged DIN rail or wall mountable enclosures, the converter is  designed for harsh environments, such as industrial networking and intelligent transportation systems (ITS) and is also suitable for  many military and utility market applications where environmental conditions exceed commercial product specifications. Wide  operating temperature range models (-40 to 75°C) fulfill the special needs of industrial automation applications.



</p>
</div>
</div>

  </div>
</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>

</div>
{/* Mechanical Dimensions section end */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application </h1>
  <h3 className='pb-4'>High efficiency boost technology for PoE
 </h3>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<h3 className='pb-4'>Remote PD Reset Application
 </h3>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application2} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>

</div>

<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<div className="modal fade" id="myModal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Enquire Now</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      <form ref={form} onSubmit={sendEmail}>

      <div className='row'>
<div className='col-md-6 col-sm-12'>
<label>Your Product Part Number</label>
<input type='text' className='form-control mt-2 mb-2' value={PartNumber} id='setName' name='Partno' readOnly/>
</div>
<div className='col-md-6 col-sm-12'>
<label>Your Product Name</label>
<input type='text' className='form-control mt-2 mb-2' value={productName}  name="productname" readOnly/>

      </div>

    </div>

 <input type='text' className='form-control mt-2 mb-2'  value={name}  onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' name="user_name" required/>
        <div className='row'>
<div className='col-6'>
<input type='number' className='form-control mt-2 mb-2' value={mobNumber}  onChange={(e) => setmobNumber(e.target.value)} placeholder='Enter Your Mobile Number' name="mobileno" required/>
</div>
<div className='col-6'>
<input type='email' className='form-control mt-2 mb-2' value={userEmail}  onChange={(e) => setuserEmail(e.target.value)} placeholder='Enter Your Email' name="email" required/>

      </div>
    </div>
      
       <textarea rows="2" cols='2' className='form-control' value={userMessage}  onChange={(e) => setuserMessage(e.target.value)} placeholder='Enter Your Message' name='message' required></textarea>
<input type='submit' className='btn btn-danger mt-2' value="Send" style={{width:"200px"}}/>
      </form>
       </div>



    </div>
  </div>

  <div className="message-sent" id="successMsg">

<div className="card-message">

  <div className="d-flex justify-content-center">
<TiTickOutline className="messagetick-mark"/>
</div>

  <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services. 
  Your inquiry is valuable to us, and our team shall get back to you soon.</p>

  <div className="d-flex justify-content-center pt-5 pb-1">
    <button type="button" className="btn btn-danger" onClick={hidePop}>Go Back</button>
  </div>

</div>


</div>

</div>
    </>
  )
}

export default NXO_100_PH12;