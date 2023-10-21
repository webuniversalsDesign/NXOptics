import React from 'react';

import productImg1 from '../../img/products/10G XFP/DTU_80D.jpg'

// import transcrve from '../../img/products/100G CFP CFP2 CFP4/Transceiver.jpg';
import pinassisment from '../../img/products/10G XFP/DTU-80D_PinAssignment.jpg.png';
import machdimenssion from '../../img/products/10G XFP/H7_S15_A0D_mechDimenssion.jpg';
import Memorymap from '../../img/products/10G XFP/DTU-80D_memoryMap.png';

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

const Dual_H7_S15_A2D_SFP = () => { 

  let PartNumber = "NXOXFP-H7-S15-XA2D";
  let productName ="10G XFP-EZR Transceiver Hot Pluggable, Duplex LC, 1550nm CML, SMF 120KM, DDM";

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
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
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

<p className='listFeture'>Compliant with IEEE802.3ae 10GBASE-ZR/ZW</p>
<p className='listFeture'>Compliant with CPRI Option 8</p>
<p className='listFeture'>Compliant with INF-8077i XFP MSA</p>
<p className='listFeture'>Support 9.953Gb/s to 11.32Gb/s Multi-Rate</p>
<p className='listFeture'>Hot Pluggable XFP footprint</p>
<p className='listFeture'>1550nm CML laser transmitter</p>
<p className='listFeture'>APD receiver</p>
<p className='listFeture'>Duplex LC connector</p>
<p className='listFeture'>No Reference Clock required</p>
<p className='listFeture'>2-wire interface for management and diagnostic monitor</p>
<p className='listFeture'>Dual +3.3V and 5.0V power supply</p>
<p className='listFeture'>Dispersion Tolerance {'>2400ps/nm'}</p>
<p className='listFeture'>Power consumption{'(<3.5W)'}</p>
<p className='listFeture'>Link distance 120km over SM fiber(with OA)</p>
<p className='listFeture'>RoHS Compliant</p>


<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>10GBASE-ZR/ZW Ethernet @10.3125G</p>
<p className='listFeture'>10G Fiber Channel 1200-SM-LL-L 10GFC @10.51875G</p> 
<p className='listFeture'>SONET OC-192 & SDH STM-64 @9.953Gbps</p>
<p className='listFeture'>CPRI Option #8 @10.1376G</p>
<p className='listFeture'>OTN OTU2 @10.7G, OTU2e @11.09G, OTU2f @11.32G</p>
</div>

</div>

<div className='container pt-lg-5 pb-lg-5'>
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
  
 <p>{PartNumber} Small Form Factor Pluggable XFP transceivers are compliant with the current XFP
Multi-Source Agreement (MSA) Specification. The high
performance cooled 1550nm CML transmitter and high sensitivity APD receiver provide superior performance for 10GBASE-ZR/ZW applications up to SMF 120km optical links with Optical Amplifier(OA).

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
          <td>Supply Voltage 3.3V</td>
          <td>Vcc3</td>
          <td>-0.5</td>
          <td>+4.0</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Voltage 5.0V</td>
          <td>Vcc5</td>
          <td>-0.5</td>
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
          <td>Case Operating Temperature</td>
          <td>Top</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Supply Voltage 3.3V</td>
          <td>Vcc</td>
          <td>+3.13</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Voltage 5.0V</td>
          <td>Vcc</td>
          <td>+4.75</td>
          <td>+5.0</td>
          <td>+5.25</td>
          <td>V</td>
        </tr>


        <tr>
          <td>Supply Current(Vcc3)</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>500</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Supply Current(Vcc5)</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>250</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Power Comsumption</td>
          <td>P</td>
          <td></td>
          <td></td>
          <td>3.5</td>
          <td>W</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
 </div>

 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Digital Diagnostic Functions</h2>

  <p>As defined by the XFP MSA, NXO XFP transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters</p>
  <ul>
    <li>Transceiver temperature</li>
    <li>Laser bias current</li>
    <li>Transmitted optical power</li>
    <li>Received optical power</li>
    <li>Transceiver supply voltage</li>
  </ul>

  <p>It also provides a sophisticated system of alarm and warning flags, which may be used to alert end-users when particular operating parameters are outside of a factory-set normal range
</p>

<p>
The operating and diagnostics information is monitored and reported by a Digital Diagnostics Controller (DDC) inside the transceiver, which is accessed through the 2-wire serial interface. When the serial protocol is
activated, the serial clock signal (SCL pin) is generated by the host. The positive edge clocks data into the XFP
transceiver into those segments of its memory map that are not write-protected. The negative edge clocks data from the XFP transceiver. The serial data signal (SDA pin) is bi-directional for serial data transfer. The host uses SDA in conjunction with SCL to mark the start and end of serial protocol activation. The memories are organized as a series of 8-bit data words that can be addressed individually or sequentially.

</p>

<p><b>For more detailed information including memory map definitions, please see the XFP MSA Specification.

</b></p>

</div>
 </div>

  </div>
</div>

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ pinassisment} className='sectionImg2_1' alt="memorymapImg"/>
</div>

</div>

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Digital Diagnostic Memory Map</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ Memorymap} className='sectionImg2_1' alt="memorymapImg"/>
</div>

</div>


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={machdimenssion} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default Dual_H7_S15_A2D_SFP;