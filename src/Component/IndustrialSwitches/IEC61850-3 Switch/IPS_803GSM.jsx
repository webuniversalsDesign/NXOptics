import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/IPS-803GSM/IPS-803GSM.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/industrialSwitches/IPS-803GSM/IPS-803GSM-applicatio.jpeg'
import dime1 from '../../../img/products/industrialSwitches/IPS-803GSM/IPS-803GSM-dimen.jpeg';
import dime2 from '../../../img/products/industrialSwitches/IVS-802GT/IVS-802GT-Dimensions-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IPS_803GSM = () => {

    let PartNumber = "IPS-803GSM";
    let productName ="8x 10/100Base RJ45 + 3x 100/1000Base SFP, Managed Ethernet Switch";

    
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

<p className='listFeture '>Redundant isolated low voltage 24/48VDC, or/and isolated High voltage AC/DC (110/220 VAC/VDC ) power inputs</p>
<p className='listFeture '> Wide Operating Temperature -40~85°C</p>
<p className='listFeture '> DIN Rail mounting or wall mounting</p>
<p className='listFeture '> IP30 rugged metal housing, Fanless</p>
<p className='listFeture '> Cable diagnostic, measuring cable normal or broken point distance</p>
<p className='listFeture'> Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, Peer to 
Peer Transparent Clock, End to End Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture'> Provides 5 instances that each can support µ-Ring, µ-Chain or Sub-Ring type for flexible uses</p>
<p className='listFeture'> µ-Ring for Redundant Ethernet Ring, recovery time{'<'}10ms in 250 units</p>
<p className='listFeture'> Provides SmartConfig for quick and easy mass Configuration Tool*</p>
<p className='listFeture'>Supported by SmartView for Centralized Management*</p>

<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

<p className='listFeture '>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
<p className='listFeture '>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
<p className='listFeture'>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
<p className='listFeture'>IEEE 802.1d STP (Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)</p>
<p className='listFeture'>IEEE 802.1Q for VLAN Tagging</p>
<p className='listFeture'>IEEE 802.1X Port based and MAC based Network
Access Control, Authentication</p>
<p className='listFeture'>IEEE 802.3ac Max frame size extended to 1522Bytes</p>
<p className='listFeture'>IEEE 802.3ad Link aggregation for parallel links with 
LACP(Link Aggregation Control Protocol)</p>
 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>

<p className='listFeture'>Per unit : Power 1 (Green), Power 2 (Green), Fault 
(Amber) (-LL model)</p>
<p className='listFeture'> Per unit: <br/>
Power 1 (Green), Power 2 (Green), Power 
3(Green), Fault (Amber) (-HL model)
</p>

<p className='listFeture'>Per RJ-45 port :10/100Link/Act: Green </p>
<p className='listFeture'>SFP Fiber Per port : Link/Active (Green)</p>


</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'>  UTP/STP above Cat. 5e cable </p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100m)</p>

   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'>8x 10/100Base-TX RJ-45 auto negotiation speed </p>
   <p className='listFeture'>Auto MDI/MDI-X function, Full/Half duplex </p>
   <p className='listFeture'>3x 100/1000Base-X dual speed mode SFP slot, with DDMI</p>

 </div>
</div>
</div>


<h5 className='pt-4'>Software Specifications</h5>
<div className='container-fluid'>
<div className='row'>
    <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>VLAN</h5>
 <p className='listFeture'>IEEE 802.1q VLAN,up to 4094 ID</p>
 <p className='listFeture'>IEEE 802.1q VLAN,up to 4094 Groups</p>
 <p className='listFeture'>IEEE 802.1ad Q-in-Q </p>
 <p className='listFeture'>MAC-based VLAN,up to 256 entries </p>
 <p className='listFeture'>IP Subnet-based VLAN, up to 128 entries</p>
 <p className='listFeture'>Protocol-based VLAN (Ethernt, SNAP, LLC), up to 128 entries</p>
 <p className='listFeture'>VLAN Translation, up to 256 entries</p>
 <p className='listFeture'>MVR (Multiple VLAN Registration)</p>
 <p className='listFeture'>GVRP (GARP VLAN Registration Protocol)</p>
    </div>

    <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IPv6 Features</h5>
<p className='listFeture'><b>IPv6 Management</b>  Telnet Server/ICMP v6</p>
<p className='listFeture'><b>SNMP over IPv6</b> Supported</p>
<p className='listFeture'><b>HTTP over IPv6</b> Supported</p>
<p className='listFeture'><b>SSH over IPv6</b> Supported</p>
<p className='listFeture'><b>IPv6 Telnet</b> Supported</p>
<p className='listFeture'><b>IPv6 NTP / SNTP</b> Client</p>
<p className='listFeture'><b>IPv6 TFTP</b> Supported</p>
<p className='listFeture'><b>IPv6 QoS</b> Supported</p>
<p className='listFeture'><b>IPv6 ACL</b> Number of rules: up to 256 entries
<br/>for L2 / L3 / L4
<br/>L2 : Mac address SA/DA/VLAN
<br/>L3 : IP address SA/DA, Subnet
<br/>L4 : TCP/UDP
</p>
    </div>

    <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Multiple u-Ring</h5>
 <p className='listFeture'> up to 5 instances that each supports u-Ring, u-Chain 
 or Sub-Ring type for flexible uses, and maximum up 
to 5 RingsRecovery time {'<10ms'} Maximum 250 devices in a Ring</p>

    </div>

    <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Green Ethernet</h5>
 <p className='listFeture'> Supports IEEE 802.3az EEE (Energy Efficient Ethernet) 
Management to optimize the power consumption</p>
<p className='listFeture'>
Determine the cable length and lowering the power 
for ports with short cables
</p>

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
  
 <p>{PartNumber} is a managed industrial grade Ethernet switch that is designed to meet the demands of power substation systems and is 
fully compliant with the requirement of IEC 61850-3 and IEEE 1613. The switch provides a variety of redundant functions to increase 
the reliability of your communications system, including redundant and isolated power supplies (24/48 VDC) and 110/220 VDC/VAC). 
The managed Ethernet functions include STP/RSTP/MSTP/ITU-T G.8032 ERPS and multiple µ-Ring for redundant cabling, layer 2 
Ethernet IGMP, VLAN, QoS, ACL, Security, IPv6, bandwidth control, port mirroring, cable diagnostic and Green Ethernet. Housed in 
rugged DIN rail or wall mountable enclosures, these switches are designed for harsh environments, such as power substation networks 
(See Figure). The series product can be managed centrally and conveniently by CTC Union's SmartView™ Element Management 
System or other third party SNMP managers.
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

export default IPS_803GSM
