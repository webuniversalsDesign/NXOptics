

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/ICR-W403-img.jpg'
import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/ICR-W403-application.jpg'
import module from '../../../img/products/Telecom Switches/ICR-W403-dimension.jpg'
import Application2 from '../../../img/products/Telecom Switches/ICR-W403-application2.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';

const ICR_W403 =() =>{

    let PartNumber = "ICR-W403";
    let productName = "4G LTE, GPS, IEEE 802.11ac/b/g/n 2T2R, 2x SIM, 3x GbE + DI/DO, RS232";

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
                    <h4>
                        {productName}
                    </h4>

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
                    <h5>Features</h5>


                    
                     
                     <p className='listFeture'>IEEE 802.11 ac/b/g/n, multiple SSID, captive portal for WiFi hotspot 
                     </p>
                     <p className='listFeture'>Web, CLI ,SNMP, TR069, SMS for management and configuration 
                     </p>
                     <p className='listFeture'>Events triggered by pre-defined, and notification sent by SMS, SNMP trap, or e-mail  
                     </p>
                     <p className='listFeture'>Supports USB for log storage 
                     </p>
                     <p className='listFeture'>EN62368-1, CE, Radio RED, Rail Traffic EN50121-4 certified 
                     </p>
                     <p className='listFeture'>Rugged metal, IP30 protection & Fanless design
                     </p>

                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Standard </h5>
                                
                                
                               
                               <p className='listFeture'> Cellular MobilComm standard: (Please see order 
                               </p>
                               <p className='listFeture'> information for optional band) 
                               </p>
                               <p className='listFeture'> 4G LTE: FDD-LTE, TDD-LTE 
                               </p>
                               <p className='listFeture'> 3G: WCDMA 
                               </p>
                               <p className='listFeture'> 2G: GSM/EDGE 
                               </p>
                               <p className='listFeture'> GNSS: GPS 
                               </p>
                               <p className='listFeture'> IEEE 802.3 10Base-T 10Mbit/s Ethernet 
                               </p>
                               <p className='listFeture'> IEEE 802.3u 100Base-TX Fast Ethernet 
                               </p>
                               <p className='listFeture'> IEEE 802.3ab 1000Base-T Gbit Ethernet over twisted pair 
                               </p>
                               <p className='listFeture'> IEEE 802.1Q Virtual LANs (VLAN) 
                               </p>
                               <p className='listFeture'> IEEE 802.3x Flow control for Full Duplex 
                               </p>
                               <p className='listFeture'> IEEE 802.1p LAN Layer 2 QoS for Traffic Prioritization 
                               </p>
                               <p className='listFeture'> IEEE 802.1X Port based and MAC based Network Access Control, Authentication
                            </p>
                            </div>
 
                            
                            
                          



                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Connector
                                </h5>
                                 
                                 
                                 <p className='listFeture'>2x 2.3dBi LTE Antenna and connector 
                                 </p>
                                 <p className='listFeture'>2x 5dBi WiFi Antenna and connector 1x SMA Female connector for GPS antenna (Antenna optional)
                                 </p>
                                 <p className='listFeture'> 2 SIM card sockets 
                                 </p>
                                 <p className='listFeture'>1x USB 2.0 socket 
                                 </p>
                                 <p className='listFeture'>3 RJ45 for GbE LAN/WAN 
                                 </p>
                                 <p className='listFeture'>1x Removable Terminal block (Input power, 1x IGN, 
                                 </p>
                                 <p className='listFeture'>2x DI, 1x DO, RS232)
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
                    <div id="home" className="container tab-pane active"><br />
                        <div className="container mt-3">
                            <h2>Overview</h2>

                            <p>
                            The ICR-W403 is a high-performance industrial grade wireless router. It combines IEEE 802.11b/g/n/ac WLAN and 4G LTE cellular technologies to provide flexible wireless network connectivity for industrial applications. ICR-W403 provides 3 Ethernet ports and dual SIM cards for failover redundancy, to ensure uninterrupted connectivity. ICR-W403 has support for secure VPN communications, GPS, static and dynamic IP routing of RIP1/2 and OSPF, NAT, port forwarding, Firewall, built-in DI/DO and Serial port services. In addition, ICR-W403 uses the highest level of industrial grade design for connection in the most demanding environments, and is an ideal solution for Industrial Internet of Things (IIoT) and M2M (Machine-to-Machine) applications, such as remote control and monitoring, fleet management, bus ticketing collection systems, CCTV, SCADA, digital signage, KIOSK and intelligent traffic systems.
                             </p>
                            
                        </div>
                    </div>

                </div>
            </div>

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'> Application of Wireless Transmission in Logistics Center </h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application} className='sectionImg2' alt="memorymapImg" />
                </div>

            </div>

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'> Application of Vehicle Location Tracking System</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application2} className='sectionImg2' alt="memorymapImg" />

                </div>
                <br />
             

            </div>

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Dimensions</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={module} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>

            {/* Mechanical Dimensions section start */}

           
            {/* Mechanical Dimensions section end */}



            <Footer />
            {/* --------------------------------------------------------------------------------------------------------- */}
            <EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

        </>
    )
}

export default ICR_W403;

