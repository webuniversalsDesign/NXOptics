import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/Rackmount Switches/IGS-S2804TM.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application1 from '../../../img/products/industrialSwitches/Rackmount Switches/IGS-S2804TM-Application.jpeg'
// import Application2 from '../../../img/products/industrialSwitches/Rackmount Switches/IGS-2408SM-24PH-Application-2.jpeg'
import dime1 from '../../../img/products/industrialSwitches/Rackmount Switches/IGS-S2804TM-Dimenssion.jpeg';
// import dime2 from '../../../img/products/industrialSwitches/Rackmount Switches/IGS-S2804GTM-Dimenssion-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IGS_S2804TM = () => {

  let PartNumber = "IGS-S2804TM";
  let productName = "28x 100/1000Base SFP with 4x GbE Combo (RJ45/SFP)";

  return (
    <>
      <Navbar />

      <div className='product-struct'>
        <div className='productImgLightBox'>

          <div className='LightBox'>

            <div className='d-flex justify-content-center' style={{ width: "100%" }}>
              <img src={productImg1} className='img-main' alt="product-40GLoobBack" />

            </div>

            <p className='text-center' style={{ color: "gray", fontWeight: "200", fontSize: "15px", marginBottom: "0px" }}>Click to open expanded view</p>

            <div className="d-flex justify-content-center">
              <Gallery>


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
              <Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2"><BsCartCheck style={{ marginBottom: "5px" }} /> Request a Quote</Link>
            </div>

          </div>

        </div>

        <div className='product-content'>
          <h4>{productName}</h4>



          <div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
            <p>Part Number</p>

            <p className='sell-text'>{PartNumber}</p>
          </div>

          <div className='sub-content d-flex justify-content-start'>
            <p style={{ fontWeight: "500" }}><LiaWarehouseSolid /> In Stock</p>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <p style={{ fontWeight: "500" }}><MdSecurity /> Test Support</p>
          </div>

          <h5 className='pt-4'>Features</h5>

          <p className='listFeture'> Redundancy isolated low voltage 24/48/-48VDC, or/and isolated High voltage (110/220 VAC) power inputs</p>
          <p className='listFeture'> STP, RSTP, MSTP, ITU-T G.8032 Ethernet Ring Protection Switching (ERPS) for redundant cabling</p>
          <p className='listFeture'> Provides 5 instances that each can support µ-Ring, µ-Chain or Sub-Ring type for flexible uses. Supports up to 5 rings in one device
            <br />(Please see CTC Union μ-Ring white paper for more details and more topology application)</p>
          <p className='listFeture'> µ-Ring for Redundant Cabling, recovery time{'<50ms'} in 250 devices</p>
          <p className='listFeture'> Supports SmartView™ for Centralized Management*</p>

          <h5 className='pt-4'>Specifications</h5>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6'>
                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>IEEE Standard</h5>

                <p className='listFeture'>IEEE 802.3 10Base-T 10Mbit/s Ethernet</p>
                <p className='listFeture'>IEEE 802.3u 100Base-TX, 100Base-FX, Fast Ethernet</p>
                <p className='listFeture'>IEEE 802.3ab 1000Base-T Gbit/s Ethernet over twisted pair</p>
                <p className='listFeture'>IEEE 802.3z 1000Base-X Gbit/s Ethernet over Fiber-Optic</p>
                <p className='listFeture'>IEEE 802.1d STP (Spanning Tree Protocol)</p>
                <p className='listFeture'>IEEE 802.1w RSTP (Rapid Spanning Tree Protocol)</p>
                <p className='listFeture'>IEEE 802.1s MSTP (Multiple Spanning Tree Protocol)</p>
                <p className='listFeture'>ITU-T G.8032 / Y.1344 ERPS (Ethernet Ring Protection Switching) </p>
                <p className='listFeture'>ITU-T G.8031 / Y.1342 EPS (Ethernet Protection Switching)</p>
                <p className='listFeture'>IEEE 802.1Q Virtual LANs (VLAN)</p>
                <p className='listFeture'>IEEE 802.1X Port based and MAC based Network Access Control, Authentication</p>
                <p className='listFeture'>IEEE 802.3ad Link aggregation for parallel links with LACP(Link Aggregation Control Protocol)</p>
                <p className='listFeture'>IEEE 802.1ad Stacked VLANs, Q-in-Q </p>
                <p className='listFeture'>IEEE 802.1p LAN Layer 2 QoS/CoS Protocol for Traffic Prioritization</p>
                <p className='listFeture'>IEEE 802.1ab Link Layer Discovery Protocol (LLDP)</p>

              </div>


              <div className='col-lg-6'>

                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>LED</h5>

                <p className='listFeture'>Per unit:<br /> Power 1 (Green), Power 2 (Green),
                  Act /Alarm (Green/Amber), Ring Master (Green) <br /><br />

                  Per RJ-45 port:<br />
                  10/100 Link/Active (Green)
                  1000 Link/Active (Yellow)</p>

                <p className='listFeture'>

                  SFP (P1~24) Fiber Per port: <br />
                  100Base-X Link/Active (Green)
                  1000Base-X Link/Active (Yellow)<br /><br />
                  SFP (P25~P28) Fiber Per port: <br />1000Base-X Link/Active (Amber)
                </p>

              </div>

              <div className='col-lg-6'>
                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Network Cable </h5>

                <p className='listFeture'>UTP/STP Cat. 5e cable or above</p>
                <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>

              </div>


              <div className='col-lg-6'>
                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Network Connector</h5>

                <p className='listFeture'>
                  28x 100/1000Base-X SFP with 4x GbE Combo (UTP/ SFP)
                </p>
                <p className='listFeture'> Port 25~28 GbE SFP  support 1000M
                </p>
                <p className='listFeture'> Port 21~24 GbE SFP/RJ45 UTP combo
                </p>
                <p className='listFeture'> Port 1~20 GbE
                </p>
                <p className='listFeture'> SFP support dual speed (100/1000M)
                </p>
                <p className='listFeture'> SFP support 100/1000M dual speed with DDMI
                </p>
                <p className='listFeture'>  RJ-45 UTP port support 10/100/1000Base-T(X), Auto
                </p>
                <p className='listFeture'>  negotiation speed, Auto MDI/MDI-X function
                </p>
              </div>
            </div>
          </div>


          <h5 className='pt-4'>Software Specifications</h5>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6'>
                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>VLAN</h5>
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
                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>IPv6 Features</h5>
                <p className='listFeture'><b>IPv6 Management</b> Telnet Server/ICMP v6</p>
                <p className='listFeture'><b>SNMP over IPv6</b> Supported</p>
                <p className='listFeture'><b>HTTP over IPv6</b> Supported</p>
                <p className='listFeture'><b>SSH over IPv6</b> Supported</p>
                <p className='listFeture'><b>IPv6 Telnet</b> Supported</p>
                <p className='listFeture'><b>IPv6 NTP, SNTP</b> Client</p>
                <p className='listFeture'><b>IPv6 TFTP</b> Supported</p>
                <p className='listFeture'><b>IPv6 QoS</b> Supported</p>
                <p className='listFeture'><b>IPv6 ACL</b> <br />
                  Number of rules: up to 256 entries<br />
                  for L2 / L3 / L4<br />
                  L2 : Mac address SA/DA/VLAN <br />
                  L3 : IP address SIP, Subnet (32bit) <br />
                  L4 : TCP/UDP</p>


              </div>
              <div className='col-md-6'>
                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>ACL</h5>
                <p className='listFeture'>Number of rules : up to 256 entries </p>
                <p className='listFeture'>for L2 / L3 / L4 </p>
                <p className='listFeture'>L2 : Mac address SA/DA/VLAN</p>
                <p className='listFeture'>L3: IP address SA/DA, Subnet</p>
                <p className='listFeture'>L4: TCP/UDP</p>

              </div>
              <div className='col-md-6'>
                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>IP Multicasting Features</h5>
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
          <div id="home" className="container tab-pane active"><br />
            <div className="container mt-3">
              <h2>Overview</h2>

              <p>IGS-S2804TM is an industrial grade, hardened design, L2 switch, equipped with 28x GbE SFP ports with 4x combo GbE ports. This
                model is a fanless design with redundant, isolated power supplies (2 AC, 2 DC, AC + DC) and can be mounted in 19-inch EIA standard
                rack. IGS Series are certified with many industrial-grade standards and are ideal for deployments in harsh environments to deliver
                mission-critical network services. The managed Ethernet switch is an ideal solution of Industrial automation, smart city & surveillance,
                Intelligent traffic control systems and production automation applications.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Memory Map Section Start */}
      <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
        <h1 className='pb-4'>Application</h1>

        <div className='d-flex justify-content-center' style={{ width: "100%" }}>
          <img src={Application1} className='img-fluid' alt="memorymapImg" />
        </div>
        <br />
        {/* <br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application2} className='img-fluid' alt="memorymapImg"/>
</div>  */}

      </div>


      {/* Mechanical Dimensions section start */}

      <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
        <h1 className='pb-4'>Dimensions </h1>

        <div className='d-flex justify-content-center' style={{ width: "100%" }}>
          <img src={dime1} className='img-fluid' alt="Transceiver Block Diagram" />
        </div>
        {/* <br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='img-fluid' alt="Transceiver Block Diagram"/>
</div> */}

      </div>
      {/* Mechanical Dimensions section end */}



      <Footer />
      {/* --------------------------------------------------------------------------------------------------------- */}
      <EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default IGS_S2804TM;
