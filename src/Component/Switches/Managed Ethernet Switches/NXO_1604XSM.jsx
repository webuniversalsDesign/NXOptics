import React from 'react';

import productImg1 from '../../../img/products/Switches/NOX-1604XSM.png'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Switches/NOX-1604XSM-application.png';
import dime1 from '../../../img/products/Switches/NOX-1604XSM-dimenssion.png';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';
import EnquireForm from '../../EnquireForm';

const NXO_1604XSM = () => { 

  let PartNumber = "NXO-1604XSM";
  let productName ="16x 10/100/1000Base-T + 4x GbE/2.5G/5G/10GBase-X SFP+";


  return (
<>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={productImg1} className='img-main2' alt="product-40GLoobBack"/>

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

<p className='listFeture'>12/24/48VDC (9.6~60VDC) redundant dual input power</p>
<p className='listFeture'>Cable diagnostics, identifies opens/shorts distance</p>
<p className='listFeture'>Provides 5 ring instances that each can support µ-Ring, µ-Chain or Sub-Ring type for flexible uses. Supports up to 5 rings in one device
(Please see NXO µ-Ring white paper for more details and more topology application)</p>
<p className='listFeture'>μ-Ring for Redundant Cabling, recovery time{'<10ms'} in 250 devices</p>
<p className='listFeture'>Supports SmartView™ for Centralized Management</p>



<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>Supports u-Ring, ERPS, EPS, MSTP, RSTP, STP for redundant cabling</p>
<p className='listFeture'>EN62368-1, CE, FCC certified</p> 
</div>


</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='resp-overflow'>
    <div className='d-flex justify-content-center'>
       <ul className="navs nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

  </ul> 
</div>
</div>



  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>{PartNumber} An Industrial 20-port Ethernet switch comes with 16 ports Gigabit copper interface and 4 ports 10 Gigabit SFP+ 
 slots, supporting  various types of 10 and 2.5Gigabit optical small form-factor pluggable transceivers for long-distance 
 and wide-bandwidth transmission,  supports STP, RSTP, MSTP, ITU-T G.8032 Ethernet Ring Protection Switching (ERPS) for 
 link redundancy. Moreover, NXO proprietary  μ-Ring supports recovery time {'<10ms'} in 250 devices to enhance a reliable 
 non-stop network that used to connect various types of  Ethernet devices. It adopts an enhanced and hardened design for high surge protection, wide operating temperature and safety  certified to meet critical and centralize strict requirements.

</p>
</div>
</div>

  </div>
</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='sectionImg2_6' alt="Application"/>
</div>
<br/>

</div>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default NXO_1604XSM;