import React from 'react';
import productImg1 from '../../../img/products/Switches/NOX-1000WS-PB.png'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Switches/NOX-1000MS-PH12-application.png';
import dime1 from '../../../img/products/Switches/NOX-1000WS-PB-Dimenssion.png';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';
import EnquireForm from '../../EnquireForm';

const NXO_1000WS_PB = () => { 

  let PartNumber = "NXO-1000WS-PB";
  let productName ="Web Managed 1x GbE RJ45 to 100/1000Base SFP with IEEE802.3bt PoE PSE (90W)";


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

<p className='listFeture'>Conversion between 10/100/1000Base-T and 100/1000Base-X Fiber cable interface</p>
<p className='listFeture'>Redundant  48VDC power input</p>
<p className='listFeture'>IP30 rugged metal housing and fanless</p>
<p className='listFeture'>Supports Jumbo frame 16K bytes packet</p>
<p className='listFeture'>DHCP, Auto Provision, SNTP, VLAN, QoS, Dual firmware image</p>
<p className='listFeture'>PoE PD auto check and auto Reset, Weekly schedule</p>

<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>SNMP, Web based, OAM, Remote Loop-Back test</p>
<p className='listFeture'>Supports LFPT (Link Fault Pass Through)</p> 
<p className='listFeture'>Support IEEE802.3af/at/bt type 4 PoE upto 90W</p> 
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
  
 <p>{PartNumber} NXO web smart gigabit Ethernet media converter, the NXO-1000WS-PB, is a 10/100/1000Base-T to 100/1000Base-X converter  which not only offers dual-speed fixed fiber transceiver or SFP cage module options for the optical interface, but also injects  IEEE802.3af/at/bt PoE++ power through the electrical RJ-45 port. Housed in rugged DIN rail or wall mountable enclosures,  NXO-1000WS-PB media converter is designed for harsh environments, such as IP surveillance, industrial networking, intelligent  transportation systems (ITS) and is also suitable for many military and utility market applications where environmental conditions  exceed commercial product specifications.

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

</div> */}
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

export default NXO_1000WS_PB;