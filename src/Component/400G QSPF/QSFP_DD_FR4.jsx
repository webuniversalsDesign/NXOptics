import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/40G_eSR4/eSR4_1.jpg'

import TransceiverImg from '../../img/products/400G-QSPF/QSFP_DD_FR4-TransceiverBlock.jpg';
import MechinicalDimenImg from '../../img/products/400G-QSPF/QSFP_DD_FR4-mechinicalDimenssion.jpg';
import AssignementImg from '../../img/products/400G-QSPF/QSFP_DD_FR4-Pin-Description.jpg';
import CompatibilityImg from '../../img/products/400G-QSPF/QSFP_DD_FR4-ProposedAppication.jpg';
import ProductionProccessImg from '../../img/products/400G-QSPF/3MCD01-ProductionProccess.jpg';
import PackagingImg from '../../img/products/400G-QSPF/3MCD01-Packaging.jpg';
import stressreceiverImg from '../../img/products/400G-QSPF/QSFP_DD_FR4-Stressed-receiver.jpg';

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const QSFP_DD_FR4 = () => {

  let productName = "400GBASE-FR4 2KM Optical Transceiver  ";
  let PartNumber = "NXQDxx40X-3LCD2";

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

      <p className='listFeture'> NXOQSFP-DD MSA compliant </p>
<p className='listFeture'> Compliant to 100G Lambda MSA </p>
<p className='listFeture'> 400G FR4 Specification compliant </p>
<p className='listFeture'> 4 CWDM lanes MUX/DEMUX design </p>
<p className='listFeture'> 8x53.125Gb/s PAM4 electrical inter- face (400GAUI-8) </p>
<p className='listFeture'> Maximum power consumption 12W </p>
<p className='listFeture'> LC duplex connector </p>
<p className='listFeture'> Supports 425Gb/s aggregate bit rate </p>
<p className='listFeture'> Up to 2km transmission on single mode fiber with FEC </p>
<p className='listFeture'> Single 3.3V power supply </p>
<p className='listFeture'> RoHS compliant </p>

    </div>

    <div className='col-12 pb-3'>
      <h5>Application</h5>

      <p className='listFeture'>Data Center Interconnect</p>
<p className='listFeture'>400G Ethernet</p>
<p className='listFeture'>Enterprise networking</p>

    </div>

  </div>
</div>


</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul className="nav nav-pills" role="tablist"> 

    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

    <li className="nav-item">
      <a className="nav-link " data-bs-toggle="pill" href="#menu2">Absolute Maximum Ratings</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu3">Operating Environments </a>
    </li>
 
  </ul> 
</div>


  <div className="tab-content">



<div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h5>General Description</h5>

  <p style={{fontSize:"12px", fontWeight:"450"}}>{PartNumber} is a transceiver module designed for 2km optical
   communication applications, and it  is compliant to 100G Lambda MSA standard. This module can convert
    8-channel 53.125Gb/s electrical data  to 4-channel 106.25Gb/s optical signals, and multiplex them into
     a single channel for 425Gb/s optical  transmission. Similarly, it optically de-multiplexes a 425Gb/s
      input into 4-channel signals, and converts them  to 8-channel output electrical data on the receiver
       side. It has been designed to meet the harshest  external operating conditions in- cluding temperature
       , humidity and EMI interference. The module offers very  high functional- ity and feature integration,
        accessible via a two-wire serial interface.

</p>
  
</div>
</div>

    <div id="menu2" className="container tab-pane fade"><br/>
    <div className="container mt-3">
    <h2>Absolute Maximum Ratings</h2>
<br/>
<br/>
  
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min</th>
          <th>Typ</th>
          <th>Max</th>
          <th>Units</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Maximum Supply Voltage</td>
          <td>Vcc</td>
          <td>-0.5</td>
          <td>3.3</td>
          <td>3.6</td>
          <td>V</td>
          <td></td>
        </tr>

        <tr>
          <td>Storage Temperature</td>
          <td>Ts</td>
          <td>-40</td>
          <td></td>
          <td>85</td>
          <td>C</td>
          <td></td>
        </tr>

        <tr>
          <td>Relative Humidity (non-condensation)</td>
          <td>RH</td>
          <td>0</td>
          <td></td>
          <td>85</td>
          <td>%</td>
          <td></td>

        </tr>
    
      </tbody>
    </table>
  </div>
</div>
 </div>

 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Operating Environments</h2>
  <br/>
  <br/>
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min</th>
          <th>Typ</th>
          <th>Max</th>
          <th>Units</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Supply Voltage</td>
          <td>Vcc</td>
          <td>3.13</td>
          <td>3.3</td>
          <td>3.465</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Case Temperature</td>
          <td>T</td>
          <td>0</td>
          <td></td>
          <td>70</td>
          <td>C</td>
        </tr>
  
    

        <tr>
          <td>Data Rate Accuracy</td>
          <td></td>
          <td>-100</td>
          <td></td>
          <td>100</td>
          <td>ppm</td>
        </tr>



        <tr>
          <td>Link Distance with G.652</td>
          <td></td>
          <td></td>
          <td></td>
          <td>2000</td>
          <td>m</td>
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
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={TransceiverImg} className='img-fluid' alt="memorymapImg"/>
</div>
</div>
<br/><br/>
{/* Optical Interface section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={AssignementImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}



{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={MechinicalDimenImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Stressed receiver sensitivity mask for 400G-FR4</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={stressreceiverImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Proposed Application Schematics</h1>


<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={CompatibilityImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Product Production Process</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ProductionProccessImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Packaging</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PackagingImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default QSFP_DD_FR4;