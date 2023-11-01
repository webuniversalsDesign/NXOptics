import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/POESwitches/IQS-402XSM-4PH.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/industrialSwitches/POESwitches/IQS-402XSM-4PH-Application.jpeg'
import dime1 from '../../../img/products/industrialSwitches/POESwitches/IQS-402XSM-4PH-Dimenssion.jpeg';
// import dime2 from '../../../img/products/industrialSwitches/IVS-802GT/IVS-802GT-Dimensions-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IQS_402XSM_4PH = () => {

    let PartNumber = "IQS-402XSM-4PH";
    let productName ="4x 2.5G N-Base-TX + 2x 10G Base-X SFP+ with 4x PoE 120W, Compact Size";

    
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

<p className='listFeture '>  4x 10/100/1G/2.5G Base-T RJ-45+ 2x 1G/2.5G/10G Base-X SFP+ with 4x PoE, total 120W power budget</p>
<p className='listFeture '> Provides 3 ring instances that each can support μ-Ring, μ-Chain or Sub-Ring type for flexible uses</p>
<p className='listFeture '>  Supports up to 3 rings in one device<br/> (Please see CTC μ-Ring white paper for more details and more topology application)  </p>
<p className='listFeture '> DHCP Server/Client/Relay/Snooping/Snooping option 82/Relay option 82</p>
<p className='listFeture '> QoS, Traffic classification QoS, CoS, bandwidth control for Ingress and Egress, Storm Control, DiffServ</p>
<p className='listFeture'> IEEE802.1q VLAN, MAC based VLAN, IP subnet based VLAN, Protocol based VLAN, VLAN translation, GVRP, MVR</p>
<p className='listFeture'> Dynamic IEEE 802.3ad LACP Link Aggregation, Static Link Aggregation</p>
<p className='listFeture'> IGMP snooping V1/V2/V3, IGMP Filtering/ Throttling, IGMP query, IGMP proxy reporting, MLD snooping V1/V2</p>
<p className='listFeture'>Flexibility security: Port based and MAC based IEEE802.1X, RADIUS, ACL, TACACS+, HTTP/HTTPS, SSL/SSH v2</p>
<p className='listFeture'>Software upgrade via TFTP and HTTP, redundant firmware to avoid upgrade failure</p>
<p className='listFeture'> RMON, MIB II, Port mirroring, Event syslog, DNS, NTP, SNTP, IEEE802.1ab LLDP</p>
<p className='listFeture'>Supports IPv6 Telnet server /ICMP v6</p>
<p className='listFeture'> CLI, Web based management, SNMP v1/v2c/v3, Telnet server for management</p>

<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

<p className='listFeture '>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
<p className='listFeture '>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
<p className='listFeture'>IEEE 802.3ab  1000Base-T Gbit/s Ethernet over twisted pair</p>
<p className='listFeture'>IEEE 802.3bz 2.5GBase-T</p>
<p className='listFeture'>IEEE 802.3z  1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
<p className='listFeture'>IEEE802.3ae 10G bit/s Ethernet over Fiber</p>
<p className='listFeture'>ITU-T G.8032 / Y.1344 ERPS (Ethernet Ring Protection Switching)</p>
<p className='listFeture'>ITU-T G.8031 / Y.1342 EPS (Ethernet Protection Switching)</p>
<p className='listFeture'>IEEE 802.1d STP (Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol )</p>
<p className='listFeture'>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1Q Virtual LANs (VLAN)</p>
<p className='listFeture'>IEEE 802.1X Port based and MAC based Network  Access Control, Authentication</p>
<p className='listFeture'>IEEE802.3ac Max frame size extended to 1522Bytes</p>
<p className='listFeture'>IEEE 802.3ad Link aggregation for parallel links with LACP(Link Aggregation Control Protocol)</p>

 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>
<p className='listFeture'>Per unit: PWR 1, PWR 2 (Green)</p>
<p className='listFeture'>Per RJ-45 port <br/>
10/100 Link/Active (Green)<br/>
1000 Link/Active (Amber)
</p>
<p className='listFeture'>SFP Fiber Per port: Link/Active (Green) </p>
<p className='listFeture'><b>PoE Port LED 1 LED /per Port</b>: <br/>
PoE Output Power On : ON (Green) <br/>
PoE Output Power Off : Off </p>
</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'> UTP/STP Cat. 5e cable or above </p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>
   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'> 4x 10M/100M/1G/2.5GBase-T RJ-45 +
2x 1G/2.5G/10GBase-X SFP </p>
<p className='listFeture'>RJ-45 UTP port supports auto-negotiation</p>
<p className='listFeture'>Auto MDI/MDI-X function</p>
<p className='listFeture'>SFP port supports 1G/2.5G/10G speed with DDMI</p>

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
<p className='listFeture'>IP Subnet-based VLAN, up to 128 entries</p>
<p className='listFeture'>Protocol-based VLAN(Ethernt, SNAP, LLC), up to 128 entries</p>
<p className='listFeture'>VLAN Translation, up to 256 entries </p>
<p className='listFeture'>Private VLAN for port isolation</p>
<p className='listFeture'>GVRP (GARP VLAN Registration Protocal)</p>
<p className='listFeture'>MVR ( Multicast VLAN Registration)</p>
<p className='listFeture'>Voice VLAN</p>

        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Management Features</h5>
 <p className='listFeture'><b>CLI</b> Cisco® like CLI</p>
 <p className='listFeture'><b>Web Based Management</b></p>
 <p className='listFeture'><b>Telnet</b>  Server</p>
 <p className='listFeture'><b>SNMP</b>  V1, V2c, V3</p>
 <p className='listFeture'><b>sFlow </b> Supported</p>
 <p className='listFeture'><b>Modbus/TCP</b> Support for management and monitoring</p>
 <p className='listFeture'><b>SW & Configuration  Upgrade</b><br/> TFTP, HTTP<br/>Redundant firmware in case of upgrade failure</p>
 <p className='listFeture'><b>RMON</b> RMON I (1, 2, 3, 9 group), RMON II</p>


        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IP Multicasting Features</h5>
 <p className='listFeture'><b>IGMP / MLD Snooping</b></p>
<p className='listFeture'>IGMP Snooping v1, v2, v3 / MLD Snooping v1, v2 </p>
<p className='listFeture'>Port Filtering Profile</p>
<p className='listFeture'>Throttling, Fast Leave</p>
<p className='listFeture'>Maximum Multicast Group : up to 1022 entries</p>
<p className='listFeture'>Query / Static Router Port</p>

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
<p className='listFeture'>Total PoE Power budge limitation (maximum 120W)</p>
<p className='listFeture'>Power feeding priority</p>
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
  
 <p>IQS-402XSM-4PH is an 1G/2.5G/10G managed Layer 2 Ethernet switch that supports power over Ethernet functions. It provides 4 
ports of electrical 10M/100M/1G/2.5GBase-T via RJ-45s and with IEEE802.3at 30 watts per port, plus 2 ports SFP slots of 
100M/1G/2.5G/10G Base-X which provide stable and reliable long-distance Ethernet transmission over optical fiber. Built to Industrial 
grade standards, the FANLESS design provides high MTBF in indoor environments of operating temperature from -10 to 60°C (14 to 
160°F), and incorporates redundant 48VDC power input. With Din-Rail or wall mounting metal housings, these switches are perfect 
choices for heavy duty use in harsh environments, such as Industrial Factory Automation, Data Center Networking, Intelligent 
Transportation Systems (ITS) and are also suitable for many military and utility market applications where environmental conditions 
exceed commercial product specifications. <br/> <br/>
These managed switches also support a wide variety of Ethernet Layer 2 functions, including CTC Union prop rietary μ-Ring, ERPS, 
MSTP, RSTP and STP. They also support Layer 2 IGMP, VLAN, QoS, ACL, Security, IPv6, bandwidth control, and port mirroring. Additionally, 
these switches can also be managed by CTC Union's SmartView™ Element Management System, which offers a user-friendly and 
centralized device management platform and provides administrators the ability to monitor and configure these connected switches 
remotely.  
</p>
</div>
</div>

  </div>
</div>

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='img-fluid' alt="memorymapImg"/>
</div>
    
</div>


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

export default IQS_402XSM_4PH;
