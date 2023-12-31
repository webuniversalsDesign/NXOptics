

import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/POESwitches/IGS-803SM-8PH24.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application1 from '../../../img/products/industrialSwitches/POESwitches/IGS-803SM-8PH24-Applicaiton-1.jpeg'
import Application2 from '../../../img/products/industrialSwitches/POESwitches/IGS-803SM-8PH24-Application-2.jpeg'
import dime1 from '../../../img/products/industrialSwitches/POESwitches/IGS-803SM-8PH24-Dimenssion-1.jpeg';
import dime2 from '../../../img/products/industrialSwitches/POESwitches/IGS-803SM-8PH24-Dimenssion-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IGS_803SM_8PH24__IGS_402SM_4PH24 = () => {

    let PartNumber = "IGS-803SM-8PH24 & IGS-402SM-4PH24";
    let productName ="8x GbE RJ45 + 1x 100/1000 SFP + 2x 100M/1G/2.5G SFP with 8x PoE 180W, 24/48VDC || 4x GbE RJ45 + 1x 100/1000 SFP + 1x 100M/1G/2.5G SFP with 4x PoE 120W, 24/48VDC";
    let productName1 ="8x GbE RJ45 + 1x 100/1000 SFP + 2x 100M/1G/2.5G SFP with 8x PoE 180W, 24/48VDC";
    let productName2 ="4x GbE RJ45 + 1x 100/1000 SFP + 1x 100M/1G/2.5G SFP with 4x PoE 120W, 24/48VDC";
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
<p className='listFeture '> Regulated PoE output voltage (52VDC) to stabilize PoE device, and guarantee delivery PoE power distance to 100meter (Figure 2)</p>
<p className='listFeture '> Provides 4/8 port IEEE 802.3af / 802.3at PoE output (30W per Port)</p>
<p className='listFeture '> Cable diagnostics, identifies opens/shorts distance</p>
<p className='listFeture '> Provides 5 ring instances that each can support µ-Ring, µ-Chain or Sub-Ring type for flexible uses. Supports up to 5 rings in one device</p>
<p className='listFeture '> µ-Ring for redundant cabling, recovery time{'<10ms'} in 250 devices</p>
<p className='listFeture '> Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, Peer to Peer Transparent Clock, End to End 
Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture '> Provides SmartConfig for quick and easy mass Configuration*</p>
<p className='listFeture '> Supports SmartView for Centralized Management*</p>


<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

 <p className='listFeture'>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
<p className='listFeture'>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
<p className='listFeture'>IEEE 802.3ab 1000Base-T Gbit/s Ethernet over twisted pair</p>
<p className='listFeture'>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
<p className='listFeture'>IEEE 802.3cb 2.5G Base-X</p>
<p className='listFeture'>IEEE 802.3af PoE (Power over Ethernet)</p>
<p className='listFeture'>IEEE 802.3at PoE+ (Power over Ethernet enhancements)</p>
<p className='listFeture'>IEEE 802.1d STP (Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol )</p>
<p className='listFeture'>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)
ITU-T G.8032 / Y.1344 ERPS (Ethernet Ring Protection Switching) </p>
<p className='listFeture'>IEEE 802.1Q Virtual LANs (VLAN)</p>
<p className='listFeture'>IEEE 802.1X Port based and MAC based Network Access Control, Authentication</p>
<p className='listFeture'>IEEE802.3ac Max frame size extended to 1522Bytes</p>
<p className='listFeture'>IEEE 802.3adLink aggregation for parallel links with LACP(Link Aggregation Control Protocol)</p>

<p className='listFeture'>IEEE 802.3x Flow control for Full Duplex</p>
<p className='listFeture'>IEEE 802.1ad Stacked VLANs, Q-in-Q</p>
<p className='listFeture'>IEEE 802.1p LAN Layer 2 QoS/CoS Protocol for Traffic Prioritization</p>


<p className='listFeture'>IEEE 802.1ab Link Layer Discovery Protocol (LLDP)</p>
<p className='listFeture'>IEEE 802.3az EEE (Energy Efficient Ethernet)</p>
 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>
<p className='listFeture'>Per unit: Power 1 (Green), Power 2 (Green), Fault 
(Amber), CPU Act (Green), Ring Master (Yellow)
</p>

<p className='listFeture'>Per RJ-45 port: <br/>
10/100 Link/Active (Green)<br/>
 1000 Link/Active (Amber)
</p>

<p className='listFeture'>SFP Fiber Per port: Link/Active (Green)</p>

<p className='listFeture'>
PoE Port LED 1 LED /per Port :
<br/> PoE Output Power On : ON (Green)
<br/> PoE Fault (Over Load, Short Circuit,Port failed at
 Startup) : Flash 1times /sec (Green)
<br/> PoE Output Power Off : Off

</p>



</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>


      <p className='listFeture'>  UTP/STP above Cat. 5e cable</p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>

   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'>4x 10/100/1000Base-T RJ-45 + 1x FE/GbE SFP slot+ 1x 
FE/GbE/2.5G SFP slot (IGS-402SM-4PH24)<br/> 
8x 10/100/1000Base-T RJ-45 + 1x FE/GbE SFP slot + 2x 
FE/GbE/2.5G SFP slot (IGS-803SM-8PH24)<br/>
RJ-45 UTP port support Auto negotiation speed,
Auto MDI/MDI-X function,
SFP ports support 100/1000 or 2.5G with DDMI  </p>

 </div>
</div>
</div>

<h5 className='pt-4'>Software Specifications</h5>
<div className='container-fluid'>
    <div className='row'>

        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>VLAN</h5>
 <p className='listFeture'>IEEE 802.1q VLAN,up to 4094 802.1Q VLAN VID</p>
<p className='listFeture'>IEEE 802.1q VLAN,up to 4094 Groups </p>
<p className='listFeture'>IEEE 802.1ad Q-in-Q </p>
<p className='listFeture'>MAC-based VLAN,up to 256 entries </p>
<p className='listFeture'>IP Subnet-based VLAN, up to 128 entries </p>
<p className='listFeture'>Protocol-based VLAN(Ethernt, SNAP, LLC), up to 128 entries</p>
<p className='listFeture'>VLAN Translation, up to 256 entries </p>
<p className='listFeture'>Private VLAN for port isolation</p>
<p className='listFeture'>GVRP (GARP VLAN Registration Protocal)</p>
<p className='listFeture'>MVR ( Multicast VLAN Registration)</p>

        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IP Multicasting Features</h5>
 <p className='listFeture'><b>IGMP / MLD Snooping</b></p>
  <p className='listFeture'>IGMP Snooping v1, v2, v3 / MLD Snooping v1, v2</p>
 <p className='listFeture'>Port Filtering Profile </p>
 <p className='listFeture'>Throttling, Fast Leave</p>
 <p className='listFeture'>Maximum Multicast Group : up to 1022 entries</p>
 <p className='listFeture'>Query / Static Router Port</p>


        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IPv6 Features</h5>
 <p className='listFeture'><b>IPv6 Management</b> Telnet Server/ICMP v6</p>
<p className='listFeture'><b>SNMP over IPv6</b> Supported</p>
<p className='listFeture'><b>HTTP over IPv6</b> Supported</p>
<p className='listFeture'><b>SSH over IPv6</b> Supported</p>
<p className='listFeture'><b>IPv6 Telnet</b> Supported</p>
<p className='listFeture'><b>IPv6 NTP, SNTP</b> Client</p>
<p className='listFeture'><b>IPv6 TFTP</b> Supported</p>
<p className='listFeture'><b>IPv6 QoS</b> Supported</p>
<p className='listFeture'><b>IPv6 ACL</b> Number of rules: up to 256 entries<br/>
for L2 / L3 / L4<br/> 
L2 : Mac address SA/DA/VLAN<br/>
L3: IP address SIP, Subnet (32bit)<br/>
L4: TCP/UDP

</p>

        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Advanced PoE</h5>
 <p className='listFeture'><b>Management</b></p>

<p className='listFeture'>PoE PD failure auto checking ,and auto reset when PD fail</p>
<p className='listFeture'>PoE port on/off weekly scheduling</p>
<p className='listFeture'>PoE Configuration</p>
<p className='listFeture'>PoE Enable/Disable</p>
<p className='listFeture'>Power limit by classification</p>
<p className='listFeture'>Power limit by management</p>
<p className='listFeture'>Power feeding priority</p>
<p className='listFeture'>Total PoE Power budge limitation (maximum 120W for IGS-402SM-4PH24, 180W for IGS-803SM-8PH24)</p>


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
  
 <p>These Gigabit Ethernet switch models are managed industrial grade L2 switches with 8/4 10/100/1000Base-T ports and 3/2 GbE/100M 
SFP ports which also supports PoE+/PSE and provide stable and reliable transmission. Housed in rugged DIN rail or wall mountable 
enclosures, these switches are designed for harsh environments, such as industrial networking. They are an ideal solution for Smart 
City, surveillance, Intelligent traffic control systems, production automation applications and support up to 8/4 PoE/PoE+ (IEEE 
802.3af/IEEE 802.3at) ports which can provide 15.4/30watts power output per port for connecting with heavy-duty industrial PoE 
devices, such as PTZ IP surveillance cameras, high-performance wireless access points, digital signage and IP phones. (See Figure). 
Standard operating temperature range models (-10 to 60°C) and wide operating temperature range models (-40 to 75°C) fulfill the 
special needs of industrial automation applications. 
</p>
</div>
</div>

  </div>
</div>

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application1} className='img-fluid' alt="memorymapImg"/>
</div>

<br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application2} className='img-fluid' alt="memorymapImg"/>
</div>
    
</div>


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='img-fluid' alt="Transceiver Block Diagram"/>
</div>
<br/>
<br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='img-fluid' alt="Diagram"/>
</div>

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default IGS_803SM_8PH24__IGS_402SM_4PH24;
