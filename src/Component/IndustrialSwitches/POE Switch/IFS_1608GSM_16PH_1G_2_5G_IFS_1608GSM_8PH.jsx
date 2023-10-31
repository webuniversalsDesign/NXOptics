import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/POESwitches/IFS-1608GSM-16PH 1G2.5G & IFS-1608GSM-8PH.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/industrialSwitches/POESwitches/IFS-1608GSM-16PH 1G2.5G & IFS-1608GSM-8PH-Application.jpeg'
import dime1 from '../../../img/products/industrialSwitches/POESwitches/IFS-1608GSM-16PH 1G2.5G & IFS-1608GSM-8PH-Dimenssion-1.jpeg';
import dime2 from '../../../img/products/industrialSwitches/POESwitches/IFS-1608GSM-16PH 1G2.5G & IFS-1608GSM-8PH-Dimenssion-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IFS_1608GSM_16PH_1G_2_5G_IFS_1608GSM_8PH = () => {

    let PartNumber = "IFS-1608GSM-16PH & IFS-1608GSM-8PH";
    let productName ="16x 10/100Base RJ45 + 8x 100/1000Base SFP with 16x PoE 360W, 48VDC , 16x 10/100Base RJ45 + 8x 100/1000Base SFP with 8x PoE 240W, 48VDC";
    let productName1 ="16x 10/100Base RJ45 + 8x 100/1000Base SFP with 16x PoE 360W, 48VDC";
    let productName2 ="16x 10/100Base RJ45 + 8x 100/1000Base SFP with 8x PoE 240W, 48VDC";
   
    
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

<p className='listFeture '> 48VDC (46~57VDC) redundant dual input power</p>
<p className='listFeture '> Provides 16-port IEEE 802.3af / 802.3at PoE+ output ,30W per port, total 360W ( IFS-1608GSM-16PH)</p>
<p className='listFeture '>Provides 8-port IEEE 802.3af / 802.3at PoE+ output ,30W per port , total 240W ( IFS-1608GSM-8PH) </p>
<p className='listFeture '> Cable diagnostics, identifies opens/shorts distance</p>
<p className='listFeture '>Provides 5 ring instances that each can support µ-Ring, µ-Chain or Sub-Ring type for flexible uses. Supports up to 5 rings in one device<br/> (Please see CTC µ-Ring white paper for more details and more topology application)
</p>
<p className='listFeture '>µ-Ring for redundant cabling, recovery time{'<10ms'} in 250 devices</p>
<p className='listFeture '> Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, Peer to Peer Transparent Clock, End to End 
Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture '>Provides SmartConfig for quick and easy mass Configuration Tool*</p>
<p className='listFeture '>  Supports SmartView for Centralized Management Tool*</p>

<h5 className='pt-4'>Specifications</h5>

<div className='container-fluid'>
  <div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

<p className='listFeture '>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
<p className='listFeture '>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
<p className='listFeture '>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
<p className='listFeture'>IEEE 802.3af PoE (Power over Ethernet)</p>
<p className='listFeture'>IEEE 802.3at PoE+ (Power over Ethernet enhancements)</p>
<p className='listFeture'>IEEE 802.1d STP (Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)</p>
<p className='listFeture'>ITU-T G.8032 / Y.1344  ERPS (Ethernet Ring Protection Switching) </p>
<p className='listFeture'>IEEE 802.1Q Virtual LANs (VLAN)</p>
<p className='listFeture'>IEEE 802.1X Port based and MAC based Network Access Control, Authentication</p>
<p className='listFeture'>IEEE 802.3ac Max frame size extended to 1522Bytes</p>
<p className='listFeture'>IEEE 802.3ad Link aggregation for parallel links with LACP(Link Aggregation Control Protocol)</p>
<p className='listFeture'>IEEE 802.3x Flow control for Full Duplex</p>
<p className='listFeture'>IEEE 802.1ad Stacked VLANs, Q-in-Q</p>
<p className='listFeture'>IEEE 802.1p LAN Layer 2 QoS/CoS Protocol for Traffic Prioritization</p>
<p className='listFeture'>IEEE 802.1ab Link Layer Discovery Protocol (LLDP)</p>
<p className='listFeture'>IEEE 802.3az EEE (Energy Efficient Ethernet)</p>
 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>

<p className='listFeture'><b>Per unit:</b> Power 1 (Green), Power 2 (Green), Fault 
(Amber), CPU Act (Green), Ring Master (Yellow)</p>
<p className='listFeture'><b>Per RJ-45 port:</b> 10/100 Link/Active (Green)</p>
<p className='listFeture'><b>SFP Fiber Per port:</b> Link/Active (Green)</p>
<p className='listFeture'><b>PoE Port LED, 1 LED /per Port :</b> <br/>
PoE Output Power On : ON (Green) <br/>
PoE Output Power OFF : OFF<br/>
</p>
</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'>  UTP/STP above Cat. 5e cable</p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100m)</p>


   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'> 16x 10/100Base-TX RJ-45 + 8x 100/1000Base-X SFP 
connector
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
<p className='listFeture'>IEEE 802.1ad Q-in-Q</p>
<p className='listFeture'>MAC-based VLAN,up to 256 entries </p>
<p className='listFeture'>IP Subnet-based VLAN, up to 128 entries </p>
<p className='listFeture'>Protocol-based VLAN(Ethernt, SNAP, LLC), up to 128 entries</p>
<p className='listFeture'>VLAN Translation, up to 256 entries </p>
<p className='listFeture'>Private VLAN for port isolation</p>
<p className='listFeture'>GVRP (GARP VLAN Registration Protocol)</p>
<p className='listFeture'>MVR ( Multicast VLAN Registration )</p>
  </div>

  <div className='col-md-6'>
  <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IP Multicasting Features</h5>
<p className='listFeture'>IGMP Snooping v1, v2, v3 / MLD Snooping v1, v2</p>
<p className='listFeture'>Port Filtering Profile </p>
<p className='listFeture'>Throttling</p>
<p className='listFeture'>Fast Leave</p>
<p className='listFeture'>Maximum Multicast Group : up to 1022 entries</p>
<p className='listFeture'>Query / Static Router Port</p>
  </div>

  <div className='col-md-6'>
  <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Multiple µ-Ring</h5>
<p className='listFeture'> up to 5 instances that each supports µ-Ring, µ-Chain 
or Sub-Ring type for flexible uses, and maximum up 
to 5 Rings
Recovery time {'<10ms'}
The maximum number of devices allowed in a Ring 
supported ring is 250
<br/>(Please see CTC Union µ-Ring white paper for more details 
and more topology application)</p>
  </div>

  <div className='col-md-6'>
  <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>QoS Features</h5>
  <p className='listFeture'><b>Class of Service</b> IEEE 802.1p 8 active priorities queues for per port </p>
  <p className='listFeture'><b>Traffic Classification QoS</b> <br/>IEEE 802.1p based CoS, IP Precedence based CoS, IP DSCP based CoS <br/>
  QCL(QoS Control List): Frame Type, Source/
Destination MAC, VLAN ID, PCP, DEI<br/>
QCE(QoS Control Entry): Protocol, Source IP, IP 
Fragment, DSCP, TCP/UDP port number
  </p>
  <p className='listFeture'><b>Bandwidth Control for Ingress</b> 100~1,000,000 when the "Unit" is "kbps" and 1~1,000 when the "Unit" is "Mbps</p>

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
  
 <p>These models are managed, industrial grade, L2 PoE (Power over Ethernet) switches that provide16x 10/100Base-TX ports plus 8x 
100/1000Base-X SFP ports with 16/8x PoE Ports. The PoE features enable power and data to be transferred via a single cable, hereby 
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

export default IFS_1608GSM_16PH_1G_2_5G_IFS_1608GSM_8PH;
