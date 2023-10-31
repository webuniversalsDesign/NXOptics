import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/POESwitches/IFS-402CGS-4PH.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/industrialSwitches/IPS-803GSM/IPS-803GSM-applicatio.jpeg'
import dime1 from '../../../img/products/industrialSwitches/POESwitches/IFS-402CGS-4PH-Dimenssion.jpeg';
import dime2 from '../../../img/products/industrialSwitches/IVS-802GT/IVS-802GT-Dimensions-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IFS_402CGS_4PH = () => {

    let PartNumber = "IFS-402CGS-4PH ";
    let productName ="4x 10/100Base-TX RJ45 + 2x 100/1000Base-X SFP with 4x PoE 120W, Compact size";

    
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

<h5 className='pt-4'>Features</h5>

<p className='listFeture '> Provides 4-port IEEE 802.3at/af PoE output (30W/Per Port )</p>
<p className='listFeture '> Maximum PoE output power budget 120W</p>
<p className='listFeture '> 48VDC (44~57VDC) redundant dual input power </p>
<p className='listFeture '>Supports DIP switch to set broadcast storm protection, SFP Auto/Force Mode, SFP 100M/1000M ; RJ45 Auto/force mode, 10M/100M, Full/half.</p>
<p className='listFeture '> Supports flow control</p>
<p className='listFeture '> Provides broadcast storm protection</p>
<p className='listFeture '>DIN Rail mounting or wall mounting</p>


<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

<p className='listFeture '>IEEE 802.3 10Base-T Ethernet</p>
<p className='listFeture '>IEEE 802.3u  100Base-TX and 100Base-FX Fast Ethernet</p>
<p className='listFeture'>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
<p className='listFeture'>IEEE 802.3X  Flow control for full duplex</p>
<p className='listFeture'>IEEE 802.3at   PoE+ (Power over Ethernet enhancements)</p>
<p className='listFeture'>IEEE 802.3af PoE (Power over Ethernet)</p>


 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>

<p className='listFeture'>Per unit: Power 1 (Green), Power 2 (Green)</p>
<p className='listFeture'><b>Per RJ-45 port </b>: <br/>
100M Link/Act (Green)<br/>
10M Link/Act (Amber) </p>

<p className='listFeture'>Fiber Per port: Link/Active (Green) </p>
<p className='listFeture'><b>Per PoE Port LED (Green) </b><br/>
Active : ON <br/>
Inactive : OFF</p>
</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'> UTP/STP above Cat. 5e cable </p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>
      <p className='listFeture'> Fiber Cable (Multi-mode): 50/125um, 62.5/125um
Fiber Cable (Single-mode): 9/125um </p>

   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'>4x RJ-45 for 10/100Base-TX Auto Negotiation Speed or
Force Mode, Auto MDI/MDI-X function, Full/Half duplex </p>
   <p className='listFeture'>2x 100/1000Base-X SFP, Auto or Force Mode</p>
 </div>
</div>
</div>


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
  
 <p>The IFS-402CGS-4PH is a 6 Ports unmanaged industrial grade Ethernet PoE switches with 4x 10/100Base-TX PoE+/PoE that provide 
stable and reliable Ethernet transmission. Housed in rugged DIN rail or wall mountable enclosures, these switches are designed for 
harsh environments, such as industrial networking, security automation applications, IP Surveillance, intelligent transportation 
systems (ITS) and are also suitable for many military and utility market applications where environmental conditions exceed commercial 
product specifications. Standard operating temperature range models (-10 to 60°C) and wide operating temperature range models 
(-40 to 75°C) fulfill the special needs of industrial automation applications
</p>
</div>
</div>

  </div>
</div>

{/* Memory Map Section Start */}
{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='img-fluid' alt="memorymapImg"/>
</div>
    
</div> */}


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='img-fluid' alt="Transceiver Block Diagram"/>
</div>
<br/>
{/* <br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='img-fluid' alt="Diagram"/>
</div> */}

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default IFS_402CGS_4PH;
