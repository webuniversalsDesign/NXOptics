import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import productImg1 from '../../img/products/1X9/155M_dual_4.jpg'

// import transcrve from '../../img/products/100G CFP CFP2 CFP4/Transceiver.jpg';
import pinassisment from '../../img/products/1X9/CWDW_pinAssignment.jpg';
// import machdimenssion from '../../img/products/1X9/Dual_125M.jpg';
// import Memorymap from '../../img/products/1X9/CWDW_dimension.jpg';
// import Memorymap2 from '../../img/products/1X9/CWDW_dimension_2.jpg';
// import scConnector from '../../img/products/1X9/SC_connector_S13_30P.png'
import scConnector_30p from '../../img/products/1X9/SC_connector_S13_30P.png'
import stConnector_30p from '../../img/products/1X9/ST_connector_S13_30P.png'
import fcConnector_30p from '../../img/products/1X9/FC_connector_S13_30P.png'

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import {TiTickOutline} from 'react-icons/ti';



import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Dual_A1_S13_60P = () => { 

  let PartNumber = "NXO1X9-A1-S13-60P";
  let productName ="125/155Mbps 1x9-100LX Transceiver Duplex SC/ST/FC, 1310nm FP, Single Mode, 60KM";



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
<img src={productImg1} className='img-main' alt="product-40GLoobBack"/>

</div>

<p className='text-center' style={{color:"gray", fontWeight:"200", fontSize:"15px" , marginBottom:"0px"}}>Click to open expanded view</p>

  <div className="d-flex justify-content-center">
        <Gallery>


    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>
   
  </Gallery>
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
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/>  In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>


    <p className='listFeture'> Compliant with IEEE802.3u and IEEE802.3ah 100Base-LX Standard</p>
     <p className='listFeture'>Compliant with SDH STM-1 L1.1 and SONET OC-3 LR1 Standard</p>
    <p className='listFeture'> Industry Standard 1x9 Footprint</p>
     <p className='listFeture'>1310nm FP laser transmitter and PIN-TIA receiver</p>
    <p className='listFeture'>Duplex SC/ST/FC optical interface</p>
     <p className='listFeture'> Single 3.3V or 5V Power Supply</p>
     <p className='listFeture'>DC-coupled Differential LVPECL inputs and outputs</p>
      <p className='listFeture'> LVPECL / PECL Signal Detection Output</p>
    <p className='listFeture'> Wave Solderable and Aqueous Washable</p>
    <p className='listFeture'>Link distance 30km over SM fiber</p>
     <p className='listFeture'>   RoHS Compliant</p>

<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>100Base-LX, EX Fast Ethernet</p>
  <p className='listFeture'>FTTx application</p>
  <p className='listFeture'>SONET OC3/ SDH STM1</p>
  <p className='listFeture'>High speed I/O for file server</p>
  <p className='listFeture'>Mass storage system I/O</p>
  <p className='listFeture'>Bus extension application</p>


</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='resp-overflow'>
    <div className='d-flex justify-content-center'>
       <ul className="navs nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

 

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu2">Recommended Operating Conditions</a>
    </li>

    {/* <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu3">Digital Diagnostic Functions</a>
    </li> */}

  </ul> 
</div>
</div>



  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>


{PartNumber} 1x9 SIP package style transceivers are compliant with the industrial standard specification. The high performance uncooled 1310nm FP transmitter and high sensitivity PIN-TIA receiver provide superior performance for SONET OC3/ SDH STM1 and Ethernet applications up to 60km optical links with single mode fiber.
</p>
</div>
</div>

<div id="menu1" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Absolute Maximum Ratings</h2>
  
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min.</th>
          <th>Max.</th>
          <th>Unit</th>


        </tr>
      </thead>
      <tbody>

        <tr>
          <td>Storage Temperature</td>
          <td>TST</td>
          <td>-40</td>
          <td>+85</td>
          <td>°C</td>
        </tr>

    

        <tr>
          <td>Supply Voltage </td>
          <td>Vcc</td>
          <td>0</td>
          <td>+4.5</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Storage Relative Humidity</td>
          <td>RH</td>
          <td>5</td>
          <td>95</td>
          <td>%</td>
        </tr>
    
      </tbody>
    </table>
  </div>
</div>
</div>

 <div id="menu2" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Recommended Operating Conditions</h2>
  
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min.</th>
          <th>Typ.</th>
          <th>Max.</th>
          <th>Unit</th>


        </tr>
      </thead>
      <tbody>

      <tr>
          <td>Operating Temp. (NXO1X9-Ax-S13-60P)</td>
          <td>Top</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Operating Temp. (NXO1X9-Ax-S13-60Pi)</td>
          <td>Top</td>
          <td>-40</td>
          <td>-</td>
          <td>+85</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>Vcc</td>
          <td>+3.13</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
        </tr>

       
        <tr>
          <td>Supply Current</td>
          <td>Icc</td>
          <td></td>
          <td>150</td>
          <td>250</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Lead Soldering Limits</td>
          <td>Tsold</td>
          <td></td>
          <td></td>
          <td>260/10</td>
          <td>°C/Sec</td>
        </tr>

        <tr>
          <td>Data Rate</td>
          <td>DR</td>
          <td></td>
          <td>125/155</td>
          <td></td>
          <td>Mbps</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
 </div>
{/* 
 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Digital Diagnostic Functions</h2>

  <p>As defined by the SFP MSA (SFF-8472)  NXO1X9 SFP transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters</p>
  <ul>
    <li>Transceiver temperature</li>
    <li>Laser bias current</li>
    <li>Transmitted optical power</li>
    <li>Received optical power</li>
    <li>Transceiver supply voltage</li>
  </ul>

  <p>It also provides a sophisticated system of alarm and warning flags, which may be used to alert end-users when particular operating parameters are outside of a factory-set normal range.
</p>

<p>
The operating and diagnostics information is monitored and reported by a Digital Diagnostics Controller (DDC) inside the transceiver, which is accessed through the 2-wire serial interface. When the serial protocol is
activated, the serial clock signal (SCL pin) is generated by the host. The positive edge clocks data into the SFP transceiver into those segments of its memory map that are not write-protected. The negative edge clocks data from the SFP transceiver. The serial data signal (SDA pin) is bi-directional for serial data transfer. The host uses SDA in conjunction with SCL to mark the start and end of serial protocol activation. The memories are organized as a series of 8-bit data words that can be addressed individually or sequentially.
</p>

<p><b>For more detailed information including memory map definitions, please see the SFP MSA (SFF-8472)
Specification.
</b></p>

</div>
 </div> */}

  </div>
</div>

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ pinassisment} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>
  <h3 className='pb-4'>SC Connector Type </h3>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ Memorymap} className='sectionImg3' alt="memorymapImg"/>
</div>
<br/>
<br/>
<h3 className='pb-4'>FC Connector Type  </h3>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ Memorymap2 } className='sectionImg3' alt="memorymapImg"/>
</div>

</div> */}


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<h5>SC connector Type </h5>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={scConnector_30p} className='sectionImg1' alt="Transceiver Block Diagram"/>
</div>
<br/>
<br/>
<h5>ST connector Type </h5>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={stConnector_30p} className='sectionImg1' alt="Transceiver Block Diagram"/>
</div>
<br/>
<br/>
<h5>FC connector Type </h5>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={fcConnector_30p} className='sectionImg1' alt="Transceiver Block Diagram"/>
</div>
<br/>
<br/>



</div>
{/* Mechanical Dimensions section end */}



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
<input type='text' className='form-control mt-2 mb-2' value={productName} name="productname" readOnly/>

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

export default Dual_A1_S13_60P;