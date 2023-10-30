import React from 'react';

import productImg1 from '../../../img/products/Switches/GBE_img.png'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Switches/Gigabit ethernet switches/NXO-S2408GTM _ NXO-2408SM _ NXO-4804SM.jpg';
import dime1 from '../../../img/products/Switches/GBE_Dimenssion_img.png';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../../EnquireForm';

const NXO_S2408GTM_NXO_2408SM_NXO_4804SM = () => { 

  let PartNumber = "NXO-S2408GTM & NXO-2408SM & NXO-4804SM";
  let productName1 ="28x GbE SFP + 4x GbE RJ45  ";
  let productName2 ="24x GbE RJ45 + 8x GbE SFP  ";
  let productName3 ="48x GbE RJ45 + 4x GbE SFP  ";
  let productName ="28x GbE SFP + 4x GbE RJ45 , 24x GbE RJ45 + 8x GbE SFP , 48x GbE RJ45 + 4x GbE SFP ";

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
{productName1}
</h4>

<h4>
{productName2}
</h4>

<h4>
{productName3}
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

<p className='listFeture'>Redundant isolated 24/48/-48VDC (18~60VDC), or/and isolated 110/220VAC power inputs</p>
<p className='listFeture'>STP, RSTP, MSTP, ITU-T G.8032 Ethernet Ring Protection Switching (ERPS) for network redundancy</p>
<p className='listFeture'>Provides 5 instances each can support μ-Ring, μ-Chain or Sub-Ring for flexible networking applications</p>
<p className='listFeture'>µ-Ring for Redundant Cabling, recovery time {'<20ms'} in 250 devices</p>
<p className='listFeture'>Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, 
Peer to Peer Transparent Clock, End to End 	Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture'>Supports SmartView™ for Centralized Management</p>

<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>Supports u-Ring , ERPS, EPS, MSTP, RSTP,STP for redundant cabling</p>
<p className='listFeture'>EN62368-1, CE, FCC certified</p> 
<p className='listFeture'>44KV surge protection for RJ45 and SFP ports</p> 
<p className='listFeture'>2.25K VDC  Hi-pot isolation protection for Ethernet ports and power</p> 
<p className='listFeture'>Supports negative voltage power input</p> 

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
  
 <p>{PartNumber} The industrial grade rackmount L2+ managed switches, 
 NXO-S2408GTM,NXO-2408SM andNXO-4804SM are hardened design  and equipped with 24xSFP/24x 
 RJ45/48x RJ48 GbE ports plus 4x RJ45/ 8x SFP/ 4x SFP GE, thus providing up to 32 and 52 
 ports of  Ethernet connectivity NXO series models are available with redundant power supplies 
 (2 AV, 2 DC, AC + DC) and can be rack  mounted in 19-inch EIA standard rack. NXO Series are 
 certified with many industrial-grade standards and are ideal for deployments  in harsh environments 
 to deliver mission-critical network services. The managed Ethernet switch is an ideal solution of 
 Industrial  automation, smart city & surveillance, Intelligent traffic control systems and production automation applications.

</p>
</div>
</div>

  </div>
</div>


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='sectionImg2' alt="Transceiver Block Diagram"/>
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

export default NXO_S2408GTM_NXO_2408SM_NXO_4804SM;