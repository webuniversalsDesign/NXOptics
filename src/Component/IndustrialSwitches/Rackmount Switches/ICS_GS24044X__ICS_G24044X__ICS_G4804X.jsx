import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-GS24044X.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application1 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-G24S4X-Application-1.jpeg'
// import Application2 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-G24S4X-Application-2.jpeg'
import dime1 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-GS24044X-Dimenssion-1.jpeg';
import dime2 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-GS24044X-Dimenssion-2.jpeg';
import dime3 from '../../../img/products/industrialSwitches/Rackmount Switches/ICS-GS24044X-Dimenssion-3.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const ICS_GS24044X__ICS_G24044X__ICS_G4804X = () => {

    let PartNumber = "ICS-GS24044X & ICS-G24044X & ICS-G4804X";
    let productName ="24x GbE SFP + 4x GbE RJ45 + 4x 1G/2.5G/10G SFP+ || 24x GbE RJ45 + 4x GbE SFP + 4x 1G/2.5G/10G SFP+ || 48x GbE RJ45 + 4x 1G/2.5G/10G SFP+";
    let productName1 ="24x GbE SFP + 4x GbE RJ45 + 4x 1G/2.5G/10G SFP+";
    let productName2 ="24x GbE RJ45 + 4x GbE SFP + 4x 1G/2.5G/10G SFP+";
    let productName3 ="48x GbE RJ45 + 4x 1G/2.5G/10G SFP+";

    
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
<h4>{productName1}</h4>

<h4>{productName2}</h4>

<h4>{productName3}</h4>

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


<p className='listFeture '> Redundant isolated 24/48/-48VDC (18~60VDC), or/and isolated 110/220VAC power inputs</p>
<p className='listFeture '> Supports negative voltage power input</p>
<p className='listFeture '> 2.25K VDC Hi-pot isolation protection for Ethernet ports and power </p>
<p className='listFeture '> STP, RSTP, MSTP, ITU-T G.8032 Ethernet Ring Protection Switching (ERPS) for network redundancy</p>
<p className='listFeture '> Provides 14 instances each can support μ-Ring, u-Chain or Sub-Ring for flexible networking applications</p>
<p className='listFeture '> μ-Ring redundancy, recovery time {'<20ms'} in 250 devices</p>
<p className='listFeture '> Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, Peer to Peer Transparent Clock, End to End 
Transparent Clock, Master, Slave mode by each port (ICS-GS24044X, ICS-G24044X)</p>
<p className='listFeture '> Supports SmartView™ for Centralized Management*</p>


<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

  <p className='listFeture '>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
 <p className='listFeture '>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
 <p className='listFeture '>IEEE 802.3ab 1000Base-T Gbit/s Ethernet over twisted pair</p>
 <p className='listFeture '>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
 <p className='listFeture '>IEEE 802.3ae 10 Gbit/s Ethernet over fiber</p>
 <p className='listFeture '>IEEE 802.1d STP (Spanning Tree Protocol)</p>
 <p className='listFeture '>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol )</p>
 <p className='listFeture '>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)</p>
 <p className='listFeture '>ITU-T G.8032 / Y.1344 ERPS (Ethernet Ring Protection Switching) </p>
 <p className='listFeture '>ITU-T G.8031 / Y.1342 EPS (Ethernet Protection Switching)</p>
 <p className='listFeture '>IEEE 802.1Q Virtual LANs (VLAN)</p>
 <p className='listFeture '>IEEE 802.1X Port based and MAC based Network Access Control, Authentication</p>
 <p className='listFeture '>IEEE 802.3ac Max frame size extended to 1522Bytes</p>
 <p className='listFeture '>IEEE 802.3adLink aggregation for parallel links \with LACP(Link Aggregation Control Protocol)</p>
 <p className='listFeture '>IEEE 802.3X Flow control for full duplex IEEE 802.1ad Stacked VLANs, Q-in-Q </p>
 <p className='listFeture '>IEEE 802.1p LAN Layer 2 QoS/CoS Protocol for Traffic Prioritization</p>
 <p className='listFeture '>IEEE 802.1ab Link Layer Discovery Protocol (LLDP)</p>
 <p className='listFeture '>IEEE 802.3az EEE (Energy Efficient Ethernet)</p>
 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>

<p className='listFeture'>Per unit:<br/> Power 1 (Green), Power 2 (Green), 
 Act /Alarm (Green/Amber), Ring Master (Green)</p>
<p className='listFeture'><b>Per RJ-45 port </b>: <br/>10/100 Link/Active (Green)<br/>
1000 Link/Active (Yellow) </p>

<p className='listFeture'>P25~28 (ICS-GS24044X)<br/>
P1~24 (ICS-G24044X)<br/>
P1~48 (ICS-G4804X)<br/>
 Per RJ-45 port: 10/100 Link/Active (Green) 
 1000 Link/Active (Amber) </p>

 <p className='listFeture'>P1~24 (ICS-GS24044X)<br/> P25~28 (ICS-G24044X) <br/>Per SFP Fiber port: Link/Active (Amber) </p>

 <p className='listFeture'> P29~32 (ICS-GS24044X)<br/> P29~32 (ICS-G24044X )<br/> P49~52 (ICS-G4804X)<br/>
  Per SFP+ Fiber port: Link/Active (Amber) 10GBase-X Link/Active (Blue) </p>
</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'>UTP/STP Cat. 5e cable or above</p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>

   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'>10GbE SFP+ : 4x 1G/2.5G/10G SFP socket Supports DDMI<br/>
GbE SFP:24x 100/1000Base-X SFP socket (ICS-GS24044X) 4x 100/1000Base-X SFP socket (ICS-G24044X) Support DDMI <br/>
RJ45: <br/>
4x 10/100/1000Base-T RJ-45 (ICS-GS24044X)<br/>
 24x 10/100/1000Base-T RJ-45 (ICS-G24044X)<br/>
48x 10/100/1000Base-T RJ-45 (ICS-G4804X)<br/>
Support Auto negotiation speed, Auto MDI/MDI-X 
function
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
 <p className='listFeture'><b>IPv6 NTP, SNTP</b> Client</p>
 <p className='listFeture'><b>IPv6 TFTP</b> Supported</p>
 <p className='listFeture'><b>IPv6 QoS</b> Supported</p>
 <p className='listFeture'><b>IPv6 ACL</b> Number of rules: up to 256 entries <br/>
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
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IP Multicasting Features</h5>
 <p className='listFeture'><b>Snooping IGMP / MLD</b></p>
<p className='listFeture'>IGMP Snooping v1, v2, v3 / MLD Snooping v1, v2</p>
<p className='listFeture'>Port Filtering Profile </p>
<p className='listFeture'>Throttling, Fast Leave</p>
<p className='listFeture'>Maximum Multicast Group : up to 1022 entries</p>
<p className='listFeture'>Query / Static Router Port</p>

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
  
 <p>The industrial grade rackmount 10G up link switch, ICS-GS24044X, ICS-G24044X and ICS-G4804X managed L2+, hardened design, 
built for the rigorous demands of centralized and critical applications. The switch supports 4-ports 10GbE SFP+ and 24GbE SFP 
/24GbE RJ45 /48GbE RJ45ports. ICS series models are all fan-less designs with redundant, isolated power supplies (2 AC, 2 DC, AC + 
DC) and can be mounted in 19-inch EIA standard rack. ICS Series are certified with many industrial-grade standards and are ideal for 
deployments in harsh environments to deliver mission-critical network services. This product is ideal for Smart City, surveillance, 
Intelligent traffic control systems and production automation applications.
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
<br/>
<br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='img-fluid' alt="Diagram"/>
</div>
<br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime3} className='img-fluid' alt="Diagram"/>
</div>

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default ICS_GS24044X__ICS_G24044X__ICS_G4804X;
