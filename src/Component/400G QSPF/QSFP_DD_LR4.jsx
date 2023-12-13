import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/400G-QSPF/400G-LR4.jpeg'

import PinDef1Img from '../../img/products/40GQSFP+/QSFP-DDPin.png'
import PinDef2Img from '../../img/products/40GQSFP+/QSFP-DDPin2.png'
import moduleBlockImg from '../../img/products/400G-QSPF/QSFP_DD_LR4-moduleBlock.jpg'
import mechImg from '../../img/products/400G-QSPF/QSFP_DD_LR4-mechnical.jpg';


import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const QSFP_DD_LR4 = () => {

  let productName = "400G NXOQSFP-DD LR4 Optical Transceiver  ";
  let PartNumber = "NXQDxx40X-3LCD10  ";

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

      <p className='listFeture'> Compliant with NXOQSFP-DD MSA </p>
<p className='listFeture'> Compliant with 100G Lambda MSA 400G-LR4 Specification compliant </p>
<p className='listFeture'> Compliant with CMIS5.0 </p>
<p className='listFeture'> Compliant with IEEE Std 802.3bs </p>
<p className='listFeture'> 8x53.125Gb/s electrical interface (400GAUI-8) </p>
<p className='listFeture'> Cooled EML laser with CWDM wavelength </p>
<p className='listFeture'> Up to 10km transmission on single mode fiber (SMF) with FEC </p>
<p className='listFeture'> Single +3.3V power supply </p>
<p className='listFeture'> Case temperature range: 0 ~ +70℃ </p>
<p className='listFeture'> Maximum power consumption 12W </p>
<p className='listFeture'> Duplex LC connector </p>
<p className='listFeture'> RoHS complaint </p>
    </div>

    <div className='col-12 pb-3'>
      <h5>Application</h5>

      <p className='listFeture'>400G BASE-LR4 Ethernet</p>
<p className='listFeture'>Data center Interconnect</p>
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
      <a className="nav-link active" data-bs-toggle="pill" href="#menu1">Description</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu2">Recommended Operating Conditions</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu3">Digital Diagnostics</a>
    </li>
 
  </ul> 
</div>


  <div className="tab-content">



<div id="menu1" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Description</h2>

  <p style={{fontWeight:"450", fontSize:"13px"}}>This product is a 400Gb/s NXOQSFP-DD optical module designed for 
  10km optical communication applications. The module converts 8 channels of 50Gb/s (PAM4) electrical input data to
   4 channels of CWDM optical signals and multiplexes them into a single channel for 400Gb/s optical transmission.<br/><br/>
   on the receiver side, the module optically de-multiplexes a 400Gb/s optical input into 4
    channels of CWDM optical signals and converts them to 8 channels of 50Gb/s (PAM4) electrical output data.<br/><br/>
    The central wavelengths of the 4 CWDM channels are 1271, 1291, 1311 and 1331 nm as members of the CWDM wavelength
     grid defined in ITU-T G.694.2.
Host FEC is required to support up to 10km fiber transmission.


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
          <td>Storage Temperature Range</td>
          <td>T<small>STG</small></td>
          <td>-40</td>
          <td>+85</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Relative Humidity</td>
          <td>RH</td>
          <td></td>
          <td>10% to 90%<br/>
          non-condensing
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




{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mechImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
<h1 className='pb-4'>Module Block Diagram </h1>


<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={moduleBlockImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

{/* Optical Interface section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>NXOQSFP-DD Edge Connector and Pinout Description</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PinDef1Img} className='img-fluid' alt="memorymapImg"/>
</div>
<br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PinDef2Img} className='img-fluid' alt="memorymapImg"/>
</div>
</div>

{/* Optical Interface section end */}


<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default QSFP_DD_LR4;