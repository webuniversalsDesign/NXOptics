import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/Telecom-XGS-1208M.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/Application XGS-1208M.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const NXO_G24044X_24PH_AA = () => { 

  let PartNumber = "XGS-1208M";
  let productName ="8 x GbE RJ45 + 12 x 10G SFP+  L2+ Managed Ethernet Switch";

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

<h5>Specifications</h5>

<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Interface</h5>

<p className='listFeture '>Fiber port: 10G SFP+ *12</p>
<p className='listFeture '>Copper port: 10/100/1000Mbps <br/> RJ45*8</p>
<p className='listFeture'>Console port: RS-232 in USB<br/> type C</p>
 </div>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Packet
forwarding rate</h5>

   <p className='listFeture'> 14880pps @10Mbps </p>
   <p className='listFeture'> 148800pps @100Mbps </p>
   <p className='listFeture'> 1488000pps @1000Mbps </p>
   <p className='listFeture'> 14880000pps @10Gbps </p>
 </div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>IP Multicasting </h5>
      
      <p className='listFeture'>  IGMP snooping v1/v2/v3, IGMP proxy reporting </p>
      <p className='listFeture'>  MLD snooping v1/v2 </p>
      <p className='listFeture'>  IGMP fast leave </p>
      <p className='listFeture'>  IGMP query </p>
      <p className='listFeture'>  IGMP filtering/throttling </p>
      <p className='listFeture'>  MVR (Multicast VLAN Registration) </p>
   </div>
   <div className='col-lg-6'>

      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>VLAN feature</h5>

      <p className='listFeture'> IEEE 802.1Q tagged VLAN (4K VLAN groups)</p>
      <p className='listFeture'>  IEEE 802.1ad QinQ VLAN</p>
      <p className='listFeture'>  Voice VLAN; MAC based VLAN; Protocol based VLAN;</p>
      <p className='listFeture'> IP subnet based VLAN</p>
      <p className='listFeture'> Private VLAN for port isolation; VLAN translation</p>
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
  <p>CTC Union Technologies unveils a brand-new product that enables 10Gbps speed for fiber Ethernet interfaces. The XGS-1208M is designed to enable applications for aggregate networks or core switching and connections in an enterprise network. It is equipped with 8 ports GbE RJ45 and 12 ports 10G SFP+ slot with high performance switching and wire speed connectivity to boost the connection efficiency among servers, workstations and other facilities inside of offices or campus</p>
 <p>The {PartNumber} features robust L2 switching functionality such as VLAN, port trunking, QoS, span tree protocol and IGMP multicast
service. The hard-wired based ACL enables secure network access and traffic transportation that network administrators desire,
reducing the risks of unauthorized or illegal intruders. The diverse management via Web GUI, SSH and SNMP, offer friendly and easeto-use interfaces, as well as secure remote management with traffic encryption.
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
  {/* <h1 className='pb-4'>Dimensions </h1> */}

<div className='d-flex justify-content-center' style={{width:"100%"}}>
{/* <img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/> */}
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