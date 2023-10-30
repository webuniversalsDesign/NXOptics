import React from 'react';

import productImg1 from '../../../img/products/Switches/NOX-500.png'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Switches/NOX-402S-Application.png';
import dime1 from '../../../img/products/Switches/NOX-500-Dimenssion.png';


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';
import EnquireForm from '../../EnquireForm';

const NXO_500_NXO_800 = () => { 

  let PartNumber = "NXO-500 & NXO-800";
  let productName1 ="5x GbE RJ45  ";
  let productName2 ="8x GbE RJ45 ";
  let productName ="5x GbE RJ45  , 8x GbE RJ45 ";


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
{productName1}
</h4>

<h4>
{productName2}
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

<p className='listFeture'>Supports flow control</p>
<p className='listFeture'>Jumbo frame support</p>
<p className='listFeture'>Wide operating temperature -40~75°C (-E model)</p>
<p className='listFeture'>Supports DIN Rail or wall mounting installation</p>                                               
<p className='listFeture'>Supports IEEE 802.3az Green Ethernet</p>
<p className='listFeture'>Supports auto-negotiation and auto-MDI/MDI-X</p>

<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>Provides a DIP-Switch to set functions</p>
<p className='listFeture'>Supports power failure alarm message by relay</p> 
<p className='listFeture'>IP30 rugged metal housing and fanless</p> 
<p className='listFeture'>12/24/48VDC (9.6~60VDC) redundant dual input power</p> 
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
  
 <p>{PartNumber} These models are 8/5-port 10/100/1000Base-T unmanaged GbE switches. That provide stable and reliable Ethernet transmission.  Housed in rugged DIN rail or wall mountable enclosures, these switches are designed for harsh environments, such as industrial  networking, intelligent transportation systems (ITS) and are also suitable for many military and utility market applications where  environmental conditions exceed commercial product specifications (See Figure). Standard operating temperature range models (-10  to 60°C) and wide operating temperature range models (-40 to 75°C) fulfill the special needs of industrial automation applications.

</p>
</div>
</div>

  </div>
</div>

{/* Mechanical Dimensions section start */}

{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application </h1>

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
<img src={dime1} className='sectionImg2_1' alt="Dimension"/>
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

export default NXO_500_NXO_800;