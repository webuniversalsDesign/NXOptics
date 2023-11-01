

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/ICR-GW404-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Telecom Switches/ICR-4103-application.jpg'
import module from '../../../img/products/Telecom Switches/ICR-GW404-dimension.jpg'
// import Application2 from '../../../img/products/Telecom Switches/ICR-4103-application2.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';

const ICR_GW404 =() =>{

    let PartNumber = "ICR-GW404";
    let productName = "4G LTE, GPS, IEEE802.11 b/g/n/ac 2T2R, 2x SIM, 4x GbE, DI/DO, RS232/485";

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
                    
                    
                    <p className='listFeture'>Highly reliable and secure for mission-critical cellular communications 
                    </p>
                    <p className='listFeture'>Compact and lightweight design with 3 LAN and 1 LAN/WAN Ethernet interfaces 
                    </p>
                    <p className='listFeture'>Supports multi-band connectivity with FDD LTE/ TDD LTE/ WCDMA/ GSM/ LTE Cat 4 
                    </p>
                    <p className='listFeture'>Provides IEEE 802.11b/g/n/ac 2T2R Wireless LAN 
                    </p>
                    <p className='listFeture'>Provides Dual SIM connector and DI/DO interfaces 
                    </p>
                    <p className='listFeture'>Industrial temperature rated from -30 ~ +70°C for use in harsh environments 
                    </p>
                    <p className='listFeture'>Enhance security and encryption for authentication and transmission
                    </p>
                    
                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Standard </h5>
                                
                                <p className='listFeture'>IEEE 802.3  10Base-T 10Mbit/s Ethernet   
                            </p>
                            <p className='listFeture'>IEEE 802.3u  100Base-TX Fast Ethernet 
                            </p>
                            <p className='listFeture'>IEEE 802.3ab 1000Base-T Gbit Ethernet over twisted pair  
                            </p>
                            <p className='listFeture'>IEEE 802.1Q  Virtual LANs (VLAN)    
                            </p>
                            <p className='listFeture'>IEEE 802.3x  Flow control for Full Duplex         
                            </p>
                            <p className='listFeture'>IEEE 802.1p  LAN Layer 2 QoS for Traffic Prioritization   
                            </p>
                            <p className='listFeture'>IEEE 802.1X  Port based and MAC based Network 
                            </p>
                            <p className='listFeture'>Access Control, Authentication
                            </p>
                          
                         
                            </div>
 
                            
                            
                          



                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Hardware Interface 
                                </h5>
                                  
                              <p className='listFeture'> 2x SIM slots  </p>
                              <p className='listFeture'> 3x LAN GbE Ethernet port  </p>
                              <p className='listFeture'> 1x LAN/WAN configurable GbE Ethernet port Reset Button for device reset  </p>
                              <p className='listFeture'> 1x RS232 (TXD/RXD/GND)  </p>
                              <p className='listFeture'> 2x DI (Non-Isolated),  </p>
                              <p className='listFeture'> 1x DO (Non-Isolated)  </p>
                              <p className='listFeture'> 2x SMA connectors for detachable LTE Antenna </p> 
                              <p className='listFeture'> 2x RP-SMA for WiFi Antenna  </p>
                              <p className='listFeture'> 1x SMA for GPS detachable Antenna </p>

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
                            This high-performance industrial grade 4G LTE router, ICR-GW404, combines IEEE 802.11b/g/n/ac WLAN and 4G LTE cellular technologies to provide flexible wireless network connectivity. With 4 Ethernet ports and dual SIM cards for failover redundancy to ensure uninterrupted connectivity, ICR-GW404 supports secure VPN communications, GPS, static and dynamic IP routing of RIP1/2 and OSPF, NAT, port forwarding, Firewall, built-in DI/DO and Serial port services. It is an ideal solution for Industrial Internet of Things (IIoT) and M2M (Machine-to-Machine) applications, such as remote control and monitoring, fleet management, bus ticketing collection systems, CCTV, SCADA, digital signage, KIOSK and intelligent traffic systems
                             </p>
                            
                        </div>
                    </div>

                </div>
            </div>

            {/* Memory Map Section Start */}
            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'> Application for Environmental Monitoring</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div> */}

            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Application for Transportation/Bus Communication</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application2} className='sectionImg2_1' alt="memorymapImg" />

                </div>
                <br />
             

            </div> */}

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

export default ICR_GW404;