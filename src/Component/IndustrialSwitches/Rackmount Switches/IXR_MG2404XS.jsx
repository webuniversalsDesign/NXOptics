import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/Rackmount Switches/IXR-MG2404XS.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application1 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-G24044X-24PH-AA-Application-1.jpeg'
// import Application2 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-G24044X-24PH-AA-Application-2.jpeg'
import dime1 from '../../../img/products/industrialSwitches/Rackmount Switches/IXR-MG2404XS-Dimenssion.jpeg';
// import dime2 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-G24044X-24PH-AA-Dimenssion-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IXR_MG2404XS = () => {

    let PartNumber = "IXR-MG2404XS";
    let productName ="Layer 3 3x Modular Slots + 4x 10G/GbE SFP+";


    
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
<p className='listFeture '> Redundant 48VDC, or 110/220VAC power inputs</p>
<p className='listFeture '>  Rugged metal, IP30 protection & Fanless design</p>
<p className='listFeture '> Supports IEEE 1588 PTP V2 for precise time synchronization to operate in BC, End-End mode for each port</p>

<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

 <p className='listFeture'>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
<p className='listFeture'>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
<p className='listFeture'>IEEE 802.3ab 1000Base-T Gbit/s Ethernet over twisted pair</p>
<p className='listFeture'>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
<p className='listFeture'>IEEE802.3ae 10Gbit/s Ethernet over fiber </p>
<p className='listFeture'>IEEE802.3af PoE (Power over Ethernet)</p>
<p className='listFeture'>IEEE802.3at PoE+ (Power over Ethernet enhancement)</p>
<p className='listFeture'>IEEE 802.1d STP (Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol )</p>
<p className='listFeture'>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)</p>
<p className='listFeture'>IEC62439-2 Media Redundancy Protocol (MRP)</p>
<p className='listFeture'>ITU-T G.8032 / Y.1344 ERPS (Ethernet Ring Protection Switching) </p>
<p className='listFeture'>IEEE 802.1Q Virtual LANs (VLAN)</p>
<p className='listFeture'>IEEE 802.1X Port based and MAC based Network Access Control, Authentication</p>
<p className='listFeture'>IEEE802.1AE MACsec, Local and metropolitan area networks-Media Access Control (MAC) Security</p>
<p className='listFeture'>IEEE 802.3ac Max frame size extended to 1522Bytes</p>
<p className='listFeture'>IEEE 802.3ad Link aggregation for parallel links with LACP(Link Aggregation Control Protocol)</p>
<p className='listFeture'>IEEE 802.3X Flow control for full duplex</p>
<p className='listFeture'>IEEE 802.1ad Stacked VLANs, Q-in-Q </p>
<p className='listFeture'>IEEE 802.1p LAN Layer 2 QoS/CoS Protocol for Traffic Prioritization</p>
<p className='listFeture'>IEEE 802.1ab Link Layer Discovery Protocol (LLDP)</p>

 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>
<p className='listFeture'><b>System</b></p>
<p className='listFeture'>Power 1 (Green), Power 2 (Green) for Device<br/>
Power 1 (Green), Power 2(Green) for PoE</p>

<p className='listFeture'>Sys (Green) Blinking:<br/> Normally operate<br/>
OFF: Not ready</p>

<p className='listFeture'>Ring (Green)<br/> ON: Rings in normal
Blinking: port link down in Ring<br/>
OFF: Ring is disabled</p>

<p className='listFeture'>Master (Green) ON: The device is a Master of the Ring
OFF: Slave of the ERPS Ring</p>

<p className='listFeture'>Alarm (Red) ON: Alarm is triggered by user defined
OFF: Alarm is not triggered</p>

<p className='listFeture'><b>Module</b></p>

<p className='listFeture'>Per RJ-45 port <br/>
Amber:<br/>
ON 1000M Link <br/>
Blink 100M Link <br/>
OFF 10M<br/>
</p>

<p className='listFeture'>
Green: <br/>
ON Link <br/>
Blink Link & Active <br/>
OFF No Link
</p>
<p className='listFeture'>Per SFP Fiber port<br/>
Amber:<br/>
ON 1000M Link <br/>
Blink 100M Link <br/>
</p>
<p className='listFeture'>
Green: <br/>
ON Link <br/>
Blink Link & Active <br/>
OFF No Link
</p>
<p className='listFeture'>PoE (Amber)<br/> 
ON: PoE Active <br/>
OFF: PoE Inactive<br/>
</p>

</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'>UTP/STP Cat. 5e cable or above</p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>

   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'>

   3x modular slot + 4x 1000/10GBase-X SFP <br/><br/>
Provide various type of module for modular slot: <br/>
8x 10/100/1000Base-T RJ45 module <br/>
8x 10/100/1000Base-T RJ45 with IEEE802.3af/at PoE module<br/>
8x 100/1000Base-X SFP module <br/>
4x 10/100/1000Base-T RJ45 MACsec module <br/>
4x 100/1000Base-X SFP MACsec module <br/>
<br/>
PoE:
Supports 3x PoE module/24x PoE ports maximum<br/>
Maximum 30W/port, maximum total 720W/per device<br/>
All SFP support DDMI <br/>
All RJ45 support auto negotiation speed, auto MDI/MDI-X function
</p>

 </div>
</div>
</div>


<h5 className='pt-4'>Software Specifications</h5>
<div className='container-fluid'>
    <div className='row'>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>VLAN</h5>

 <p className='listFeture'>IEEE 802.1q VLAN,up to 4094 802.1Q VLAN VID</p> 
 <p className='listFeture'>MAC-based VLAN </p>
 <p className='listFeture'>GARP</p>
 <p className='listFeture'>GVRP (GARP VLAN Registration Protocol)</p>
 <p className='listFeture'>GMRP</p>


        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Security Features</h5>
 <p className='listFeture'><b>IEEE802.1AE</b> Support IEEE802.1AE MACsec network security 
Provide by IRM-4GS-SEC, IRM-4GT-SEC optional 
module</p>
 <p className='listFeture'><b>IEEE 802.1X</b> Port-Based</p>
 <p className='listFeture'><b>ACL</b> Supported</p>
 <p className='listFeture'><b>RADIUS authentication & accounting</b></p>

        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>QoS</h5>
<p className='listFeture'><b>QoS</b>Supported</p>

        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IP Multicasting Features</h5>
<p className='listFeture'><b>IGMP</b>IGMP v1, v2, v3 / IGMP Snooping </p>

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
  
 <p>The industrial layer 3 switches adopt an enhanced and hardened design to meet critical and centralized strict requirements. It provides 
up to 24 Gigabit Ethernet ports, which can be implemented by 3 types of Ethernet module of Gigabit copper, PoE port and SFP slot, 
and come with 4 ports of 10 Gigabit SFP+ slot for uplink. Its redundant power input can improve system reliability and uninterrupted 
availability of the network backbone. The switch is ideal for smart city, surveillance, intelligent traffic control systems and production 
automation applications.
</p>
</div>
</div>

  </div>
</div>

{/* Memory Map Section Start */}
{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application1} className='img-fluid' alt="memorymapImg"/>
</div>
<br/>
<br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application2} className='img-fluid' alt="memorymapImg"/>
</div>
    
</div> */}


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='img-fluid' alt="Transceiver Block Diagram"/>
</div>
{/* <br/>
<br/>
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

export default IXR_MG2404XS;
