import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/IPS-G2404SM-8C/IPS-G2404SM-8C.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/industrialSwitches/IPS-803GSM/IPS-803GSM-applicatio.jpeg'
import dime1 from '../../../img/products/industrialSwitches/IPS-G2404SM-8C/IPS-G2404SM-8C-Dimenssion.jpeg';
import dime2 from '../../../img/products/industrialSwitches/IVS-802GT/IVS-802GT-Dimensions-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IPS_G2404SM_8C = () => {

    let PartNumber = "IPS-G2404SM-8C ";
    let productName ="24x GbE RJ45 with 8x Combo (RJ45/SFP) + 4x 100/1000Base-X SFP";

    
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

<p className='listFeture '> Redundant isolated High voltage 110/220VAC/DC (90~264VAC or 88~370/VDC ) power inputs</p>
<p className='listFeture '>STP, RSTP, MSTP, ITU-T G.8032 Ethernet Ring Protection Switching (ERPS) for network redundancy</p>
<p className='listFeture '> Supports SmartView™ for Centralized Management*</p>


<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

<p className='listFeture '>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
<p className='listFeture '>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
<p className='listFeture '>IEEE 802.3ab 1000Base-T Gbit/s Ethernet over twisted pair</p>
<p className='listFeture'>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
<p className='listFeture'>IEEE 802.1d STP (Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)</p>
<p className='listFeture'>ITU-T G.8032 / Y.1344 ERPS (Ethernet Ring Protection  Switching) </p>
<p className='listFeture'>IEEE 802.1Q Virtual LANs (VLAN)</p>
<p className='listFeture'>IEEE 802.1X  Port based and MAC based Network Access Control, Authentication</p>
<p className='listFeture'>IEEE 802.3ad  Link aggregation for parallel links with LACP(Link Aggregation Control Protocol)</p>
<p className='listFeture'>IEEE 802.3X  Flow control for full duplex</p>
<p className='listFeture'>IEEE 802.1ad Stacked VLANs, Q-in-Q </p>
<p className='listFeture'>IEEE 802.1p LAN Layer 2 QoS/CoS Protocol for Traffic Prioritization</p>
<p className='listFeture'>IEEE 802.1ab  Link Layer Discovery Protocol (LLDP)</p>

 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>

<p className='listFeture'>Per unit : Power 1 (Green), Power 2 (Green), 
Fault (Green/Amber), Ring Master (Green), Ring State 
(Green</p>
<p className='listFeture'>P1~P28 Link/Active (Green)</p>
<p className='listFeture'>P1~P28 Speed 
 1000M (Amber) 
 10/100M (Off)</p>
</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'> UTP/STP Cat. 5e cable or above </p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>

   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'><b>SFP:</b> <br/>
12x 100/1000Base-X SFP socket Support DDMI </p>
   <p className='listFeture'><b>RJ45: </b> <br/>
24x 10/100/1000Base-T RJ-45 
Support Auto negotiation speed, Auto MDI/MDI-X 
function</p>
 </div>
</div>
</div>


<h5 className='pt-4'>Software Specifications</h5>
<div className='container-fluid'>
<div className='row'>
    <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>VLAN</h5>
 <p className='listFeture'>IEEE 802.1q VLAN,up to 4094 802.1Q VLAN VID</p>
 <p className='listFeture'>IEEE 802.1q VLAN,up to 4094 Groups</p>
 <p className='listFeture'>IEEE 802.1ad Q-in-Q </p>

    </div>

    <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>QoS Features</h5>
<p className='listFeture'><b>Class of Service</b>  IEEE 802.1p 8 active priorities queues per port </p>
<p className='listFeture'><b>Traffic Classification QoS</b> 
IEEE 802.1p based CoS | IP DSCP based CoS </p>
<p className='listFeture'><b>Bandwidth Control for Ingress</b> Per port based</p>
<p className='listFeture'><b>Bandwidth Control for Egress</b> Per port based| Per queue / Per port shaper</p>
<p className='listFeture'><b>DiffServ (RF 2474) Remarking</b></p>
<p className='listFeture'><b>Storm Control</b> for Unicast, Broadcast, Multicast</p>

    </div>

    <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IP Multicasting Features</h5>
 <p className='listFeture'>  <b>IGMP / MLD 
Snooping </b><br/>
IGMP Snooping v1, v2, v3 / MLD Snooping v1, v2<br/>
</p>

    </div>

    <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Link Aggregation 
(Port Trunk)</h5>
 <p className='listFeture'> Support IEEE802.1AB LLDP port trunking</p>


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
  
 <p>IEC 61850-3 defines general requirements for the construction, design and environmental conditions of utility communications and 
intelligent electronic equipment in the power plant and substation environment. IPS-G2404SM-8C is an IEC61850 and IEEE1613 
certified 28-port full Gigabit Ethernet switch and comes with 8 combo-ports that provide flexible port usage of up to 24 RJ45 copper 
interfaces or up to 16 SFP slots for fiber optic module connections. It is an ideal solution for substation Ethernet communication 
deployments.
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

export default IPS_G2404SM_8C;
