import React from 'react';
import productImg1 from '../../img/products/40GQSFP+/40G_PSM4_IR.jpg'
import memorymapimg from '../../img/products/40G-ER4/40G_ER4(3).jpg'
import mchdimensionImg from '../../img/products/40GQSFP+/mechDimension.jpg'

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Transceiverimg from "../../img/products/40G-ER4/40G_ER4(1).jpg"
import optical from "../../img/products/40GQSFP+/optical.png"


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const PSM4_IR_40G = () => {  
  let productName = "40G QSFP+ PSM4 IR Transceiver Hot Pluggable, MPO / MTP, 1310nm DFB, SMF 2KM, DDM";
  let PartNumber = "NXOQFP-I9-S13-02D";

  
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
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found' />
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
<h4>{productName}
</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<p className='sell-text'>{PartNumber}</p>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Compliant with IEEE802.3ba 40GBASE-LR4</p>
<p className='listFeture'>Compliant to SFF-8436 QSFP+ MSA</p>
<p className='listFeture'>Supports QDR, DDR & SDR InfiniBand</p>
<p className='listFeture'>4 independent full-duplex channels</p>
<p className='listFeture'>Up to 11.2Gbps data rate per channel</p>
<p className='listFeture'>Hot Pluggable</p>
<p className='listFeture'>1310nm DFB array transmitter</p>
<p className='listFeture'>MPO-12 receptacle connector</p>
<p className='listFeture'>2-wire interface for management and diagnostic monitor compliant 
with SFF-8436, SFF-8636</p>
<p className='listFeture'>Single 3.3V power supply</p>
<p className='listFeture'>Link distance 2km over SM fiber</p>
<p className='listFeture'>Power consumption {'<'}2 .5W</p>
<p className='listFeture'>RoHS compliant</p>


<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>40G Ethernet</p>
<p className='listFeture'>OTN OTU3 @43.01G, OTU3e2 @44.58G</p>
<p className='listFeture'>Data Center & Storage</p>
<p className='listFeture'>Datacom / Telecom Switch & Router </p>

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
      <a className="nav-link" data-bs-toggle="pill" href="#menu4">Digital Diagnostic</a>
    </li>

  </ul> 
</div>
</div>



  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>NXOQFP-I9-S13-02D is a Four-Channel Parallel SM Fibers QSFP+ transceiver for 40GbE and
InfiniBand DDR, QDR, SDR application especially in
Data Center & Storage networks. The QSFP full- duplex optical module with MPO-12 receptacle offers 4 independent transmitter and receiver channels each capable of 10.3Gbps operation for an aggregate data rate of 41.2Gbps up to SMF 2km optical links.

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
          <td>85</td>
          <td>%</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>VCC</td>
          <td>-0.5</td>
          <td>+3.6</td>
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
          <td>TOP</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>VCC</td>
          <td>+3.00</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Data Rate, per Lane</td>
          <td>DR</td>
          <td></td>
          <td>10.3125</td>
          <td></td>
          <td>Gb/s</td>
        </tr>

        <tr>
          <td>Data Rate Accuracy</td>
          <td>ΔDR</td>
          <td>-100</td>
          <td></td>
          <td>+100</td>
          <td>ppm</td>
        </tr>

        <tr>
          <td>Bit Error Rate</td>
          <td>BER</td>
          <td></td>
          <td></td>
          <td>10-12</td>
          <td></td>
        </tr>

        <tr>
          <td>Supply Current</td>
          <td>ICC</td>
          <td></td>
          <td></td>
          <td>700</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Power Consumption</td>
          <td>P</td>
          <td></td>
          <td>1.7</td>
          <td>2.5</td>
          <td>W</td>
        </tr>

        <tr>
          <td>Transceiver Power-on Initialization Time</td>
          <td></td>
          <td></td>
          <td></td>
          <td>2000</td>
          <td>ms</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
 </div>

 <div id="menu4" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Digital Diagnostic Functions</h2>
  <p>As defined by the QSFP+ MSA, NXO QSFP+ transceivers provide digital diagnostic 
  functions via a 2-wire serial interface, which allows real-time access 
  to the following operating parameters</p>
  <ul>
    <li className='pt-1 pb-1'>Transceiver temperature</li>
    <li className='pt-1 pb-1'>Laser bias current (4-Channel)</li>
    <li className='pt-1 pb-1'>Transmitted optical power (4-Channel)</li>
    <li className='pt-1 pb-1'>Received optical power (4-Channel)</li>
    <li className='pt-1 pb-1'>Transceiver supply voltage</li>
  </ul>

  <p>It also provides a sophisticated system of alarm and warning flags, 
  which may be used to alert end-users when particular operating parameters 
  are outside of a factory-set normal range.
</p>

<p>The operating and diagnostics information is monitored and reported by a Digital 
Diagnostics Controller (DDC) inside the transceiver, which is accessed through the 2-wire serial 
interface. When the serial protocol is activated, the serial clock signal (SCL pin) is generated 
by the host. The positive edge clocks data into the QSFP+ transceiver into those segments of its 
memory map that are not write-protected. The negative edge clocks data from the QSFP+ transceiver. 
The serial data signal (SDA pin) is bi-directional for serial data transfer. The host uses SDA in 
conjunction with SCL to mark the start and end of serial protocol activation. The  memories are 
organized as a series of 8-bit data words that can be addressed individually or sequentially. 
The 2-wire serial interface provides sequential or random access to the 8 bit parameters, addressed 
from 000h to  the maximum address of the memory.
</p>

<p><b>For more detailed information including memory map definitions, please see the QSFP+ MSA Specification.
</b></p>

</div>
 </div>

  </div>
</div>

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Memory Map</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={memorymapimg} className='sectionImg2' alt="memorymapImg"/>
</div>

</div>
{/* Memory Map Section End */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mchdimensionImg} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

{/* Transivers Block Diagram Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Transceiverimg} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>


{/* Transivers Block Diagram Section End */}

{/* Recommended Power Supply Filter */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Optical Interface Lanes and Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={optical} className='sectionImg2_1' alt="Transceiver Block Diagram"/>

</div>

</div>


<Footer/>

{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default PSM4_IR_40G;