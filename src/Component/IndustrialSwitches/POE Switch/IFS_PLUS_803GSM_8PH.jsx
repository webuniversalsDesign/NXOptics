import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/POESwitches/IFS+803GSM-8PH.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/industrialSwitches/POESwitches/IFS+803GSM-8PH-Application.jpeg'
import dime1 from '../../../img/products/industrialSwitches/POESwitches/IFS+803GSM-8PH-Dimenssion.jpeg';
// import dime2 from '../../../img/products/industrialSwitches/IVS-802GT/IVS-802GT-Dimensions-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IFS_PLUS_803GSM_8PH = () => {

    let PartNumber = "IFS+803GSM-8PH";
    let productName ="8x 10/100Base RJ45 + 3x 100/1000Base SFP with 8x PoE 240W, 48VDC";

    
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

<p className='listFeture '> 48VDC (46~57VDC) redundant dual input power</p>
<p className='listFeture '>  Provides 8-port IEEE 802.3af / 802.3at PoE+ output ,30W per port , total 240W</p>
<p className='listFeture '>  Cable diagnostics, identifies opens/shorts distance </p>
<p className='listFeture '> Provides 5 ring instances that each can support µ-Ring, µ-Chain or Sub-Ring type for flexible uses. Supports up to 5 rings in one device
<br/>
(Please see CTC µ-Ring white paper for more details and more topology application)
</p>

<p className='listFeture'> µ-Ring for redundant cabling, recovery time{'<10ms'} in 250 devices</p>
<p className='listFeture'> Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, Peer to 
Peer Transparent Clock, End to End Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture'> Supports SmartView™ for Centralized Management Tool*</p>

<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

<p className='listFeture '>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
<p className='listFeture '>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
<p className='listFeture'>IEEE 802.3ab  1000Base-T Gbit/s Ethernet over twisted pair</p>
<p className='listFeture'>IEEE 802.3z  1000Base-X Gbit/s Ethernet over twisted pair</p>
<p className='listFeture'>IEEE 802.3at   PoE+ (Power over Ethernet enhancements)</p>
<p className='listFeture'>IEEE 802.3af PoE (Power over Ethernet)</p>
<p className='listFeture'>EEE802.3bt PoE+ (Power over Ethernet)</p>
<p className='listFeture'>IEEE 802.3X  Flow control for full duplex</p>
<p className='listFeture'>IEEE 802.1d STP (Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol )</p>
<p className='listFeture'>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)</p>
<p className='listFeture'>ITU-T G.8032 / Y.1344  (Ethernet Ring Protection Switching) </p>
<p className='listFeture'>ITU-T G.8031 / Y.1342 EPS (Ethernet Protection Switching)</p>
<p className='listFeture'>IEEE 802.1Q Virtual LANs (VLAN)</p>
<p className='listFeture'>IEEE 802.1X Port based and MAC based Network  Access Control, Authentication</p>
<p className='listFeture'>IEEE802.3ac Max frame size extended to 1522Bytes</p>
<p className='listFeture'>IEEE 802.3ad Link aggregation for parallel links with LACP(Link Aggregation Control Protocol)</p>
<p className='listFeture'>IEEE 802.1ad Stacked VLANs, Q-in-Q</p>
<p className='listFeture'>IEEE 802.1p LAN Layer 2 QoS/CoS Protocol for Traffic Prioritization</p>
<p className='listFeture'>IEEE 802.1ab Link Layer Discovery Protocol (LLDP)</p>
<p className='listFeture'>IEEE 802.3az EEE (Energy Efficient Ethernet)</p>
 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>
<p className='listFeture'>Per unit: Power 1 (Green), Power 2 (Green), Fault 
(Amber), CPU Act (Green), Ring Master (Yellow)</p>
<p className='listFeture'>Per RJ-45 port <br/>
10/100 Link/Active (Green)<br/>
</p>
<p className='listFeture'>SFP Fiber Per port: Link/Active (Green) </p>
<p className='listFeture'><b>PoE Port LED 1 LED /per Port</b>: <br/>
PoE Output Power On : ON (Green) <br/>
PoE Output Power Off : Off  </p>
</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'> UTP/STP Cat. 5e cable or above </p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>
   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'>8x 10/100Base-TX RJ-45 + 3x 100/1000Base-X SFP 
connector<br/>
RJ-45 UTP port supports Auto negotiation speed,
Auto MDI/MDI-X function,
SFP port supports 100/1000M dual speed with DDMI </p>

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
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IPv6 Features</h5>
 <p className='listFeture'><b>IPv6 Management</b> Telnet Server/ICMP v6</p>
 <p className='listFeture'><b>SNMP over IPv6</b> Supported</p>
 <p className='listFeture'><b>HTTP over IPv6</b> Supported</p>
 <p className='listFeture'><b>SSH over IPv6</b> Supported</p>
 <p className='listFeture'><b>IPv6 Telnet</b> Supported</p>
 <p className='listFeture'><b>IPv6 NTP</b> Client</p>
 <p className='listFeture'><b>IPv6 TFTP</b> Supported</p>
 <p className='listFeture'><b>IPv6 QoS</b> Supported</p>
 <p className='listFeture'><b>IPv6 ACL</b>Number of rules: up to 256 entries <br/>
 for L2 / L3 / L4 <br/>
 L2 : Mac address SA/DA/VLAN<br/>
 L3: IP address SIP ,Subnet (32bit)<br/>
 L4: TCP/UDP
 </p>

        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>ACL</h5>
<p className='listFeture'>Number of rules : up to 256 entries </p>
<p className='listFeture'>for L2 / L3 / L4 </p>
<p className='listFeture'>L2 : Mac address SA/DA/VLAN</p>
<p className='listFeture'>L3: IP address SA/DA, Subnet</p>
<p className='listFeture'>L4: TCP/UDP</p>

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
<p className='listFeture'>Total PoE Power budge limitation (maximum 120W)</p>
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
  
 <p>These models are managed, industrial grade, L2 PoE (Power over Ethernet) switches that provide 8x 10/100Base-TX ports plus 3x 
100/1000Base-X SFP ports with 8x PoE Ports. The PoE features enable power and data to be transferred via a single cable, hereby 
considerably reducing cabling and electrical wiring expenses. Housed in rugged DIN rail or wall mountable IP-30 enclosures, these 
switches are perfect choices for harsh environments, such as industrial networks, intelligent transportation systems (ITS) and are also 
suitable for many military and utility market applications where environmental conditions exceed commercial product specifications. 
These switches can also operate either at standard operating temperature range (-10 to 60°C) or at wide operating temperature range 
(-40 to 75°C) to fulfill the special needs of industrial automation applications.  
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

export default IFS_PLUS_803GSM_8PH;
