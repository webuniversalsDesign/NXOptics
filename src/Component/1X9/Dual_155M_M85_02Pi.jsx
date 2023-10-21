import React from 'react';

import productImg1 from '../../img/products/1X9/ultra.jpg'

// import transcrve from '../../img/products/100G CFP CFP2 CFP4/Transceiver.jpg';
import pinassisment from '../../img/products/1X9/1X9_Pinassignment.jpg';
import machdimenssion from '../../img/products/1X9/1X9_MachanicalDimension.jpg';
// import Memorymap from '../../img/products/1X9/CWDW_dimension.jpg';
// import Memorymap2 from '../../img/products/1X9/CWDW_dimension_2.jpg';

import Navbar from '../../Navbar';
import Footer from '../../Footer';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const Dual_155M_M85_02Pi = () => { 

  let PartNumber = "NXO1X9-A1-M85-02Pi";
  let productName ="125M / 155M 1X9-100FX Transceiver Duplex SC, 1310nm FP, MMF 2KM, LVPECL / PECL Signal Detection";


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
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2"><BsCartCheck style={{marginBottom:"5px"}}/> Request a Quote</Link>
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


    <p className='listFeture'>Compatible with TIA/EIA-785 100BASE-SX
</p>
     <p className='listFeture'>   Industry Standard 1x9 Footprint</p>
    <p className='listFeture'>   850nm VCSEL laser transmitter
</p>
     <p className='listFeture'>   Duplex Plastic ST connector
</p>
    <p className='listFeture'>    Single 3.3V or 5V Power Supply</p>
     <p className='listFeture'>   DC-coupled Differential LVPECL inputs and outputs</p>
     <p className='listFeture'>   LVPECL / PECL Signal Detection Output</p>
      <p className='listFeture'>  Wave Solderable and Aqueous Washable</p>
    <p className='listFeture'>    Link distance 2km over MM fiber</p>
     <p className='listFeture'>   RoHS Compliant</p>

<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>
Fast Ethernet 100BASE-SX @125M
</p>
  <p className='listFeture'>
  SONET OC-3 / SDH STM-1 @155M


  </p>


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

{PartNumber} 1X9 SIP package style transceivers are compliant with the industrial standard specification.
The high performance uncooled 850nm VCSEL transmitter and high sensitivity PIN receiver provide superior
performance for SDH STM-1 / SONET OC-3 and Fast Ethernet applications up to MMF 2km optical links.

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
          <td>Storage Relative Humidity</td>
          <td>RH</td>
          <td>5</td>
          <td>95</td>
          <td>%</td>
        </tr>

        <tr>
          <td>Supply Voltage(NXO1X9-A1-M85-02P) </td>
          <td>Vcc</td>
          <td>0</td>
          <td>+4.5</td>
          <td>V</td>
        </tr>
        <tr>
          <td>Supply Voltage(NXO1X9-A1-M85-02P5) </td>
          <td>Vcc</td>
          <td>0</td>
          <td>+6.0</td>
          <td>V</td>
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
          <td>Case Operating Temp. (NXO1X9-A1-M85-02P)</td>
          <td>Top</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Case Operating Temp. (NXO1X9-A1-M85-02Pi)</td>
          <td>Top</td>
          <td>-40</td>
          <td>-</td>
          <td>+85</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Supply Voltage (NXO1X9-A1-M85-02P)</td>
          <td>Vcc</td>
          <td>+3.13</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
        </tr>
        <tr>
          <td>Supply Voltage (NXO1X9-A1-M85-02P5)</td>
          <td>Vcc</td>
          <td>+4.75</td>
          <td>+5.0</td>
          <td>+5.25</td>
          <td>V</td>
        </tr>
       
        <tr>
          <td>Supply Current(NXO1X9-A1-M85-02P)</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>270</td>
          <td>mA</td>
        </tr>
        <tr>
          <td>Supply Current(NXO1X9-A1-M85-02Pi)</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>300</td>
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
      </tbody>
    </table>
  </div>
</div>
 </div>
{/* 
 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Digital Diagnostic Functions</h2>

  <p>As defined by the SFP MSA (SFF-8472)  NXO SFP transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters</p>
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
<img src={ pinassisment} className='sectionImg2_1' alt="memorymapImg"/>
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

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={machdimenssion} className='sectionImg3' alt="Transceiver Block Diagram"/>
</div>

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>
    </>
  )
}

export default Dual_155M_M85_02Pi;