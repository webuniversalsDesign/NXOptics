import React from 'react';

import productImg1 from '../../../img/products/Switches/10G ethernet switches/NXO-G24044X-24PH.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Switches/NXO-G24044X-24PH_AA_Appli.png'
import dime1 from '../../../img/products/Switches/NXO-G24044X-24PH_Dimenssions.jpeg'

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../../EnquireForm';

const NXO_G24044X_24PH_AA = () => { 

  let PartNumber = "NXO-G24044X-24PH-AA";
  let productName ="24x GbE RJ45 + 4x 100/1000Base SFP + 4x 1G/2.5G/10G SFP+ with 24x PoE 400W, 48VDC";


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
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt="lightBox-img"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt="lightBox-img"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="lightBox-img" />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="lightBox-img" />
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

<p className='listFeture'>Maximum up to 24x IEEE 802.3af / 802.3at PoE+ output, 30W per port, 400W PoE power budget in total</p>
<p className='listFeture'>Redundant dual input power 48VDC (44~57VDC)</p>
<p className='listFeture'>Provides 14 instances each can support μ-Ring, μ-Chain or Sub-Ring for flexible networking applications</p>
<p className='listFeture'>μ-Ring redundancy, recovery time {'<20ms'} in 250 devices</p>
<p className='listFeture'>Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, 
Peer to Peer Transparent Clock, End to End  Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture'>Supports SmartView™ for Centralized Management</p>

<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>Supports IEEE 1588 PTP V2</p>
<p className='listFeture'>Supports u-Ring, ERPS, EPS, MSTP, RSTP, STP for redundant cabling</p> 
<p className='listFeture'>Supports maximum up to 14 u-rings in one device</p> 
<p className='listFeture'>EN62368-1, CE, FCC certified</p> 
<p className='listFeture'>4KV surge protection for PoE, RJ45 and SFP ports</p> 

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
  
 <p>{PartNumber} is a hardened L2 managed core switch which also supports PoE+/PSE for rigorous demands of centralize
and critical applications. NXO-G24044X-24PH supports 4 uplink ports with 10GbE SFP+ and 24 GbE (10/100/1000BaseTX) PoE+  RJ-45 ports plus 4 dual speed (100/1000Base-X) SFP fiber optical slots. NXO-G24044X-24PH is an ideal solution for Smart City,  surveillance, Intelligent traffic control systems and production automation applications and supports up to 24 PoE/PoE+ (IEEE
802.3af/IEEE 802.3at) ports which can provide 15.4/30watts power output per port for connecting with heavy-duty industrial  PoE devices, such as PTZ IP surveillance cameras, high-performance wireless access points, digital signage and IP phones. The  NXO-G24044X-24PH is designed especially for harsh outdoor cabinet applications with 4kV surge protection to ensure the  uninterrupted reliability of PoE systems.

</p>
</div>
</div>

  </div>
</div>

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='sectionImg2' alt="memorymapImg"/>
</div>

</div>


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>
{/* <br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div> */}

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default NXO_G24044X_24PH_AA;