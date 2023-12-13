import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/40G_eSR4/eSR4_1.jpg'

import PinDef1Img from '../../img/products/400G-QSPF/3MCD05-pinConnector.jpg'
import PinDef2Img from '../../img/products/400G-QSPF/3MCD05-pinconnector2.jpg'
import moduleImg from '../../img/products/400G-QSPF/3MCD05-ModuleBlockDiag.jpg';
import mechImg from '../../img/products/400G-QSPF/3MCD05-mechImg.jpg';


import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const QSFP_DD_DR4 = () => {

  let productName = "400G NXOQSFP-DD DR4 Optical Transceiver";
  let PartNumber = "NXQD3140X-3MCD05  ";

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
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>
   
  </Gallery>
</div>


<div className="d-flex justify-content-center flex-wrap cart-btn">
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2"><BsCartCheck style={{marginBottom:"5px"}}/> Enquire Now</Link>
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


<div className='container-fluid'>
  <div className='row'>
    <div className='col-12 pb-3'>
      <h5>Features</h5>

      <p className='listFeture'> Compliant with IEEE Std 802.3bs</p>
<p className='listFeture'> Compliant with 400G-DR4 optical specifications</p>
<p className='listFeture'> Compliant with NXQSFP-DD MSA</p>
<p className='listFeture'> Compliant with CMIS4.0 Management interface specifications</p>
<p className='listFeture'> 8x53.125Gb/s electrical interface (400GAUI-8)</p>
<p className='listFeture'> Up to 0.5km transmission on single mode fiber (SMF) with FEC</p>
<p className='listFeture'> Single +3.3V power supply</p>
<p className='listFeture'> Case temperature range: 0 ~ +70℃</p>
<p className='listFeture'> Maximum power consumption 9.5W</p>
<p className='listFeture'> RoHS complaint</p>

<p className='listFeture'>  Compliant to NXOQSFP-DD MSA </p>
<p className='listFeture'>  Parallel 4 Optical Lanes </p>
<p className='listFeture'>  IEEE 802.3bs 400GBASE-DR4 Specification compliant </p>
<p className='listFeture'>  Maximum power consumption 9.5W </p>

    </div>

    <div className='col-12 pb-3'>
      <h5>Application</h5>

      <p className='listFeture'>400G Ethernet</p>
<p className='listFeture'>Data Center Interconnect</p>
<p className='listFeture'>Infiniband Interconnect</p>
<p className='listFeture'>Enterprise Networking</p>
    </div>

  </div>
</div>


</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul className="nav nav-pills" role="tablist"> 

    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#menu1">Overview</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu2">Absolute Maximum Ratings</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu3">Digital Diagnostics</a>
    </li>
 
  </ul> 
</div>


  <div className="tab-content">



<div id="menu1" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Overview </h2>
  
<p style={{fontSize:"13px", fontWeight:"450"}}>
This product is a 400Gb/s NXOQSFP-DD optical module designed for 0.5Km optical communication applications. 
 The module converts 8 channels of 50Gb/s (PAM4) electrical input data to 4 channels of parallel optical signals,
   each capable of 100Gb/s operation for an aggregate data rate of 400Gb/s.
<br/>
<br/>
On the receiver side, the module converts 4 channels of parallel optical signals of 100Gb/s each channel 
for an  aggregate data rate of 400Gb/s into 8 channels of 50Gb/s (PAM4) electrical output data.
An optical fiber cable with an MTP/MPO-12 connector can be plugged into the NXOQSFP-DD DR4 module 
 receptacle. Host FEC is required to support up to 0.5Km fiber transmission.
<br/>
<br/>
The NXO transceiver is based on proprietary NXO PLC technology, using surface mounted opto-  electronic devices with no free
 space elements. The unique design of the optical engine facilitates  unparalleled compactness while maintaining Telcordia robustness.

</p>
</div>
</div>

    <div id="menu2" className="container tab-pane fade"><br/>
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
          <td> Storage Temperature Range</td>
          <td>T<small>STG</small></td>
          <td>-40</td>
          <td>+85</td>
          <td>°C</td>
        </tr>

        <tr>
          <td> Supply Voltage</td>
          <td>V<small>cc</small></td>
          <td>0</td>
          <td>4</td>
          <td>V</td>
        </tr>

        
        <tr>
          <td>Relative Humidity</td>
          <td>RH</td>
          <td> </td>
          <td>10% to 90%<br/>
          non-codensing
          </td>
          <td></td>
        </tr>

      
      </tbody>
    </table>
  </div>
</div>
 </div>

 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Digital Diagnostic Monitoring Specifications</h2>
  
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Unit</th>
          <th>Specification</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Temperature Monitor absolute error</td>
          <td>degC</td>
          <td>±3</td>
        </tr>

        <tr>
          <td>Voltage Monitor absolute error</td>
          <td>%</td>
          <td>±5</td>
        </tr>

        <tr>
          <td>I_bias Monitor absolute error</td>
          <td>%</td>
          <td>±10</td>
        </tr>

        <tr>
          <td>Receivied Power (Rx) Monitor absolute error</td>
          <td>dB</td>
          <td>±3.0</td>
        </tr>

        <tr>
          <td>Transmit Power (Tx) Monitor absolute error</td>
          <td>dB</td>
          <td>±3.0</td>
        </tr>

      
      </tbody>
    </table>
  </div>
</div>
 </div>
 

  </div>
  
</div>


{/* Optical Interface section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>NXOQSFP-DD Edge Connector and Pinout Description </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PinDef1Img} className='img-fluid' alt="memorymapImg"/>
</div>
<br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PinDef2Img} className='img-fluid' alt="memorymapImg"/>
</div>
</div>

{/* Optical Interface section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Module Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={moduleImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mechImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}


<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default QSFP_DD_DR4;