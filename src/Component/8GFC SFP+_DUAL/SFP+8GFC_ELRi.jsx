
import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from "../../img/products/8GFC+SFP/productImg.jpg";
import mchdimensionImg from '../../img/products/8GFC+SFP/mecdimenssion.jpg'
import memoryMapping from "../../img/products/8GFC+SFP/memoryMaping.png"
import pinassisment from "../../img/products/8GFC+SFP/pinAssisment.jpg";

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';



// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const SFP_8GFC_ELRi = () => {
   
  let PartNumber = "NXOSPP-87-S13-30DMi";
  let productName = "8GFC / 4GFC / 2GFC SFP+ ELR Transceiver Hot Pluggable, Duplex LC, 1310nm DFB, SMF 30KM, DDM, Multi-Rate";
  
  return (

    <>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={loopbackImg1} className='img-main' alt="product-40GLoobBack"/>
</div>

<p className='text-center' style={{color:"gray", fontWeight:"200", fontSize:"15px" , marginBottom:"0px"}}>Click to open expanded view</p>

  <div className="d-flex justify-content-center">
        <Gallery>


    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>
   
  </Gallery>
</div>


<div className="d-flex justify-content-center flex-wrap cart-btn">
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2" ><BsCartCheck style={{marginBottom:"5px"}}/>Request a Quote</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>{productName}
</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<div className='sell-text'>{PartNumber}


</div>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>



<p className='listFeture'>Compliant with SFF-8431 SFP+ MSA</p>
<p className='listFeture'>Support 2.125 / 4.25 / 8.5Gb/s Multi-Rate</p>
<p className='listFeture'>1310nm DFB laser transmitter
</p>
<p className='listFeture'>Duplex LC connector
</p>
<p className='listFeture'>2-wire interface for management and diagnostic monitor compliant with SFF-8472

</p>
<p className='listFeture'>Link distance 30km over SM fiber

</p>


<p className='listFeture'>Single 3.3V power supply
</p>

<p className='listFeture'>RoHS compliant
</p>


<h5 className='pt-5'>Applications</h5>


<p className='listFeture'>Fiber Channel 800-SM-LC-L 8GFC @8.5G,

</p>
<p className='listFeture'>400-SM-LC-L 4GFC @4.25G,


</p>
<p className='listFeture'>200-SM-LC-L 2GFC @2.125G

</p>



</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul className="nav nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

 

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu2">Recommended Operating Conditions</a>
    </li>

  
  </ul> 
</div>


  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>
 NXOSPP-87-S13-30DMi Small Form Factor Pluggable
SFP+ transceivers are compliant with the current SFP+ Multi-Source Agreement (MSA) Specification. The high performance uncooled 1310nm DFB transmitter and high sensitivity PIN receiver provide superior
performance for 2x/4x/8x Multi-Rate Fiber Channel applications up to SMF 30km optical links.

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
          <td>VCC</td>
          <td>-0.5</td>
          <td>+4.0</td>
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
          <td>Case Operating Temp. (NXOSPP-87-S13-30DM)</td>
          <td>TOP</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>

        </tr>

        <tr>
          <td>Case Operating Temp. (NXOSPP-87-S13-30DMi)</td>
          <td>TOP</td>
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
          <td>Supply Current  (NXOSPP-87-S13-30DM)</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>350</td>
          <td>mA</td>

        </tr>

        <tr>
          <td>Supply Current  (NXOSPP-87-S13-30DMi)</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>380</td>
          <td>mA</td>

        </tr>
       
      </tbody>
    </table>
  </div>
</div>
 </div>

  </div>
  
</div>



<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={pinassisment} className='sectionImg2' alt="Transceiver Block Diagram"/>
</div>

</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mchdimensionImg} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}





{/* {Transceiver Block Diagram} */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Digital Diagnostic Memory Map</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={memoryMapping} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default SFP_8GFC_ELRi;