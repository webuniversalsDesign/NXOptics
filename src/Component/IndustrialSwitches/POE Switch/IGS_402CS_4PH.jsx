import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/POESwitches/IGS-402CS-4PH.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/industrialSwitches/IPS-803GSM/IPS-803GSM-applicatio.jpeg'
import dime1 from '../../../img/products/industrialSwitches/POESwitches/IFS-402CGS-4PH-Dimenssion.jpeg';
// import dime2 from '../../../img/products/industrialSwitches/IVS-802GT/IVS-802GT-Dimensions-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IGS_402CS_4PH = () => {

    let PartNumber = "IGS-402CS-4PH";
    let productName ="4x 10/100/1000Base-T RJ45 + 2x 100/1000Base-X SFP with 4x PoE 120W, Compact size";

    
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

<p className='listFeture '>  Provides 4-port IEEE 802.3at/af PoE output (30W/Per Port )</p>
<p className='listFeture '> Maximum PoE output power budget 120W</p>
<p className='listFeture '>  48VDC (44~57VDC) redundant dual input power  </p>
<p className='listFeture '>Supports DIP switch to set broadcast storm protection, SFP Auto/Force Mode, SFP 100M/1000M ; RJ45 Auto/force mode, 10M/100M, Full/half.</p>
<p className='listFeture '> Supports flow control</p>
<p className='listFeture '>  Provides broadcast storm protection</p>
<p className='listFeture '> DIN Rail mounting or wall mounting</p>

<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

<p className='listFeture '>IEEE 802.3 10Base-T Ethernet</p>
<p className='listFeture '>IEEE 802.3u  100Base-TX, 100Base-FX and Fast Ethernet</p>
<p className='listFeture'>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
<p className='listFeture'>IEEE 802.3ab  1000Base-T Gbit/s Ethernet over twisted pair</p>
<p className='listFeture'>IEEE 802.3at   PoE+ (Power over Ethernet enhancements)</p>
<p className='listFeture'>IEEE 802.3af PoE (Power over Ethernet)</p>
<p className='listFeture'>IEEE 802.3X  Flow control for full duplex</p>



 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>

<p className='listFeture'>Fiber Per port: Link/Active (Green) </p>
<p className='listFeture'><b>Per PoE Port LED (Green) </b>: <br/>
Active : ON <br/>
Inactive : OFF </p>
</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>
      
      <p className='listFeture'> UTP/STP above Cat. 5e cable </p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>
<p className='listFeture'>Fiber Cable (Multi-mode): 50/125um, 62.5/125um
Fiber Cable (Single-mode): 9/125um</p>
   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'> 4x RJ-45 for 10/100/1000Base-T Auto Negotiation 
Speed or Force Mode, Auto MDI/MDI-X function, 
Full/Half duplex </p>
<p className='listFeture'>2x 100/1000Base-X SFP, Auto or Force Mode</p>
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

        </div>
        <div className='col-md-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>MVR ( Multicast VLAN Registration)</h5>
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
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>Management</h5>
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
  
 <p>These Gigabit Ethernet switch models are managed industrial grade L2 switches with 4 10/100Base-TX ports and 2 GbE/100M SFP 
ports which also supports PoE+/PSE and provide stable and reliable transmission. Housed in rugged DIN rail or wall mountable 
enclosures, these switches are designed for harsh environments, such as industrial networking. They are an ideal solution for Smart 
City, surveillance, Intelligent traffic control systems, production automation applications and support up to 8/4 PoE/PoE+ (IEEE 
802.3af/IEEE 802.3at) ports which can provide 15.4/30watts power output per port for connecting with heavy-duty industrial PoE 
devices, such as PTZ IP surveillance cameras, high-performance wireless access points, digital signage and IP phones. Standard 
operating temperature range models (-10 to 60°C) and wide operating temperature range models (-40 to 75°C) fulfill the special 
needs of industrial automation applications. 
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

export default IGS_402CS_4PH;
