import React from 'react';

import productImg1 from '../../../img/products/Switches/Layer 3 ethernet switches/NXO-2408SM-24PH.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Switches/NOX-2408SM-24PH_Application.png';
import dime1 from '../../../img/products/Switches/NOX-2408SM-24PH_Dimession.png';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../../EnquireForm';

const Layer3_NXO_2408SM_24PH = () => { 

  let PartNumber = "NXO-2408SM-24PH";
  let productName ="Layer 3 24x GbE RJ45 + 8x 100/1000Base SFP with 24x PoE 400W 48VDC";

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
<p className='listFeture'>STP, RSTP, MSTP, ITU-T G.8032 Ethernet Ring Protection Switching (ERPS) for network redundancy</p>
<p className='listFeture'>Provides 5 instances each can support μ-Ring, μ-Chain or Sub-Ring for flexible networking applications</p>
<p className='listFeture'>µ-Ring for Redundant Cabling, recovery time {'<20ms'} in 250 devices</p>
<p className='listFeture'>Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, 
Peer to Peer Transparent Clock, End to End 	Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture'>Supports SmartView™ for Centralized Management</p>

<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>L3 IPV4/IPV6 Static Routing, RIP v2 Dynamic Routing, OSPF v2/v3 Dynamic Routing</p>
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
  
 <p>{PartNumber} As an Industrial grade Layer 3 Ethernet switch, the NXO-2408SM-24PH provides full 
 Gigabit capability with high performance and  the ability to quickly transfer large 
 amounts of video, voice, and data across a network. NXO series has 8x Gigabit SFP slots
  and 24x  Gigabit RJ45 Ethernet ports with PoE. They support Layer 3 routing function,
   ERPS ring, RSTP/STP and u-Ring redundancy  technologies, support wide operating temperature, 
   fanless design, to increase system reliability and the availability of your network.



</p>
</div>
</div>

  </div>
</div>



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
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default Layer3_NXO_2408SM_24PH;