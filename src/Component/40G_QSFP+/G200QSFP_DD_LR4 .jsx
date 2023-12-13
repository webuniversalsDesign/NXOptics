import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/40G_eSR4/eSR4_1.jpg'

import PinDef1Img from '../../img/products/40GQSFP+/QSFP-DDPin.png'
import PinDef2Img from '../../img/products/40GQSFP+/QSFP-DDPin2.png'
import mechImg from '../../img/products/40GQSFP+/QSFP-DDMechinial.png';


import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const G200QSFP_DD_LR4  = () => {

  let productName = "200GBase-NXOQSFP-DD LR4 Transceiver (SMF, 1310nm,10km, LC) Transceiver";
  let PartNumber = "NXOQSFP-DD LR4";

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

      <p className='listFeture'>	Supports 200GBASE-LR4</p>
<p className='listFeture'>	Lane bit rate 53.125 Gb/s with PAM4</p>
<p className='listFeture'>	Up to 10km transmission on SMF</p>
<p className='listFeture'>	LAN WDM laser and PIN receiver</p>
<p className='listFeture'>	200GAUI-8 Electrical interface with 8 Lanes 26.5625Gb/s NRZ high-speed signal</p>
<p className='listFeture'>	NXOQSFP-DD MSA package with duplex LC connector</p>
<p className='listFeture'>	Compliant with IEEE 802.3cn 200GBASE-LR4</p>
<p className='listFeture'>	Single +3.3V power supply</p>
<p className='listFeture'>	Maximum power consumption 10W</p>
<p className='listFeture'>	Operating case temperature: 0 to +70 °C</p>
<p className='listFeture'>	Compliant to NXOQSFP-DD CMIS & NXOQSFP-DD MSA HW standard</p>
<p className='listFeture'>	Complies with EU Directive 2015/863/EU</p>

    </div>

    <div className='col-12 pb-3'>
      <h5>Application</h5>

      <p className='listFeture'>200GBASE-ER4 Ethernet (PAM4)</p>
<p className='listFeture'>5G Back-haul</p>
<p className='listFeture'>Data center</p>
<p className='listFeture'>Cloud application.</p>

    </div>

  </div>
</div>


</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul className="nav nav-pills" role="tablist"> 

    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
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
          <th>Typical</th>
          <th>Max.</th>
          <th>Unit</th>


        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Storage Temperature</td>
          <td>T<small>s</small></td>
          <td>-40</td>
          <td>-</td>
          <td>85</td>
          <td>°C</td>
        </tr>

        <tr>
          <td>Supply Voltage</td>
          <td>V<small>cc</small></td>
          <td>-0.5</td>
          <td>-</td>
          <td>3.6</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Operating Relative Humidity</td>
          <td>RH</td>
          <td>-</td>
          <td>-</td>
          <td>85</td>
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
          <th>Note</th>


        </tr>
      </thead>
      <tbody>
      <tr>
          <td> Operating Case Temperature</td>
          <td>T<small>c</small></td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
          <td></td>

        </tr>
  
     
        <tr>
          <td>Power Supply Voltage</td>

          <td>VCC</td>
          <td>3.13</td>
          <td>3.3</td>
          <td>3.47</td>
          <td>V</td>
          <td></td>
        </tr>

        <tr>
          <td>Power Dissipation</td>

          <td>P</td>
          <td>-</td>
          <td>-</td>
          <td>10</td>
          <td>W</td>
          <td></td>
        </tr>
        
        <tr>
          <td>Aggregate Bit Rate</td>

          <td>BRAVE</td>
          <td>-</td>
          <td>212.5</td>
          <td>-</td>
          <td>Gb/s</td>
          <td>With PAM4</td>
        </tr>

        <tr>
          <td>Lane Bit Rate</td>

          <td>BRLANE</td>
          <td>-</td>
          <td>53.125</td>
          <td>-</td>
          <td>Gb/s</td>
          <td>With PAM4</td>
        </tr>

        <tr>
          <td>Transmission Distance</td>

          <td>TD</td>
          <td>-</td>
          <td>-</td>
          <td>10</td>
          <td>Km</td>
          <td>2</td>
        </tr>
      
      </tbody>
    </table>
  </div>
</div>
 </div>

 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Digital Diagnostics</h2>
  
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Range</th>
          <th>Accuracy</th>
          <th>Unit</th>
          <th>Calibration</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>  Temperature</td>
          <td>0 to 70</td>
          <td>±3</td>
          <td>°C</td>
          <td>Internal</td>

        </tr>
  
     
        <tr>
          <td> Voltage</td>
          <td>0 to V<small>cc</small></td>
          <td>±3%</td>
          <td>V</td>
          <td>Internal</td>

        </tr>

        <tr>
          <td> Tx Bias Current Per Lane</td>
          <td>0 to 100</td>
          <td>±10%</td>
          <td>mA</td>
          <td>Internal</td>

        </tr>

        <tr>
          <td> Tx Output Power Per Lane</td>
          <td>-3.4 to 5.3</td>
          <td>±3    </td>
          <td>dB</td>
          <td>Internal</td>

        </tr>

        <tr>
          <td>Rx Power (Each Lane)</td>
          <td>-9.7 to 5.3</td>
          <td>±3</td>
          <td>dB</td>
          <td>Internal</td>

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
  <h1 className='pb-4'>Optical interface </h1>

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

export default G200QSFP_DD_LR4 ;