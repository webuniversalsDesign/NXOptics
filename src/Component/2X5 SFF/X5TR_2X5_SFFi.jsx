import React from 'react';

import productImg1 from '../../img/products/2X5 SFF/2X5_SFF_img.jpg'

// import transcrve from '../../img/products/100G CFP CFP2 CFP4/Transceiver.jpg';
import pinassisment from '../../img/products/2X5 SFF/pinAssignment.png';
import machdimenssion from '../../img/products/2X5 SFF/mechDimenssion.jpg';
// import Memorymap from '../../img/products/1.25G CSFP/memoryMap1.png';
// import Memorymap2 from '../../img/products/1.25G CSFP/memoryMap2.png';

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

const X5TR_2X5_SFFi = () => { 

  let PartNumber = "NXOSF1-C7-M85-X5TRi";
  let productName ="125M / 1.25G 2x5 SFF 100BASE-SX /1000BASE-SX Dual-Rate Transceiver Duplex LC, 850nm VCSEL, MMF OM2 2KM(100SX) / 550M(1000SX)  ";


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
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Compatible with TIA/EIA-785 100BASE-SX</p>
<p className='listFeture'>Compliant with IEEE802.3z Gigabit Ethernet</p>
<p className='listFeture'>Compliant with Fiber Channel 100-M5-SN-I</p>
<p className='listFeture'>Industry Standard 2x5 SFF Footprint</p>
<p className='listFeture'>850nm VCSEL laser transmitter and PIN-TIA receiver</p>
<p className='listFeture'>Duplex LC connector</p>
<p className='listFeture'>Single 3.3V power supply</p>
<p className='listFeture'>AC-coupled Differential LVPECL inputs and outputs</p>
<p className='listFeture'>LVTTL Signal Detection Output</p>
<p className='listFeture'>Wave Solderable and Aqueous Washable</p>
<p className='listFeture'>Link distance 2km(100SX) and 550m(1000SX) over MM OM2 fiber</p>
<p className='listFeture'>RoHS Compliant</p>


<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>Fast Ethernet 100BASE-SX @125M</p>
<p className='listFeture'>Gigabit Ethernet 1000BASE-SX @1.25G</p>
<p className='listFeture'>Fiber Channel 1GFC @1.0625G</p>

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

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu3">Digital Diagnostic Functions</a>
    </li>

  </ul> 
</div>
</div>



  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>{PartNumber} 2x5 SFF package style
transceivers are compliant with the industrial standard specification. The high performance 850nm VCSEL
transmitter and high sensitivity PIN-TIA receiver
provide superior performance for Ethernet 100BASE- SX, Gigabit Ethernet 1000BASE-SX and Fiber Channel 1GFC applications up to MMF OM2 550m optical links.


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
          <td>Supply Voltage</td>
          <td>Vcc</td>
          <td>0</td>
          <td>+4.5</td>
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
          <td>Case Operating Temp. (NXOSF1-C7-M85-X5TR)</td>
          <td>Top</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Case Operating Temp. (NXOSF1-C7-M85-X5TRi)</td>
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
          <td>Supply Current (NXOSF1-C7-M85-X5TR)</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>270</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Supply Current (NXOSF1-C7-M85-X5TRi)</td>
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

 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Digital Diagnostic Functions</h2>

  <p>As defined by the SFP MSA (SFF-8472)  NXO CSFP transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters</p>
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
 </div>

  </div>
</div>

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ pinassisment} className='sectionImg2_2' alt="memorymapImg"/>
</div>

</div>



{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={machdimenssion} className='sectionImg2_2' alt="Transceiver Block Diagram"/>
</div>

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default X5TR_2X5_SFFi;