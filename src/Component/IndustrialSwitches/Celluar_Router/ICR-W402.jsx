

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/ICR-W402-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Telecom Switches/ICR-W401-application.jpg'
import module from '../../../img/products/Telecom Switches/ICR-W402-dimension.jpg'
// import Application2 from '../../../img/products/Telecom Switches/ICR-4103-application2.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';

const ICR_W402 =() =>{

    let PartNumber = "ICR-W402";
    let productName = "4G LTE, GPS, IEEE 802.11 b/g/n 2T2R Router";

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

                    
                    
                    <p className='listFeture'>  Highly reliable and secure for mission-critical cellular communications 
                    </p>
                    <p className='listFeture'>  Compact and lightweight design with 1 LAN and 1 WAN Ethernet interfaces 
                    </p>
                    <p className='listFeture'>  Supports multi-band connectivity with FDD LTE/ TDD LTE/ WCDMA/ GSM/ LTE Cat 4 
                    </p>
                    <p className='listFeture'>  Provides IEEE 802.11b/g/n WiFi 2T2R  
                    </p>
                   
                    <p className='listFeture'>  LED indicators for connection and data transmission status 
                    </p>
                    <p className='listFeture'>  Industrial temperature rated from -30 ~ +70°C for use in harsh environments 
                    </p>
                    <p className='listFeture'>  IPv6/IPv4 dual stack and all applications are IPv6 ready 
                    </p>
                    <p className='listFeture'>  Enhance security and encryption for authentication and transmission
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
                            
                            <p className='listFeture'>IEEE 802.1Q  Virtual LANs (VLAN)    
                            </p>
                            <p className='listFeture'>IEEE 802.3x  Flow control for Full Duplex         
                            </p>
                      
                            <p className='listFeture'>IEEE 802.1X  Port based and MAC based Network 
                            </p>
                            <p className='listFeture'>Access Control, Authentication
                            </p>
                          
                         
                            </div>
 
                            
                            
                          



                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Hardware Interface 
                                </h5>
                                
                                <p className='listFeture'>  2x SIM slots 
                                </p>
                                <p className='listFeture'>  2x LAN Fast Ethernet port 
                                </p>
                                <p className='listFeture'>  1x WAN Fast Ethernet port
                                </p>
                                <p className='listFeture'>   Reset Button for device reset
                                </p>
                                <p className='listFeture'>   1xRS232 (TXD/RXD/GND) and 1xRS485 
                                </p>
                                <p className='listFeture'>  2x SMA connectors for detachable LTE Antenna 
                                </p>
                                <p className='listFeture'>  2x RP-SMA for WiFi Antenna 
                                </p>
                                <p className='listFeture'>  1x SMA for GPS detachable Antenna
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
                            This compact, cost-effective, industrial grade 4G LTE router, ICR-W402, provides 2 LAN plus 1 WAN Fast Ethernet connections and supports uplink to 2G/3G/4G cellular mobile data networks. Built for harsh environments, the router is equipped with a DI/DO interface, has WiFi compliant with IEEE 802.11b/g/n and features VPN Tunneling with Firewall and management capability. The ICR-W402 is easy to configure through its embedded Web user interface. It provides highly secure authentication, encryption and management, to protect your data between public and private networks and simplifies your complicated solutions for smart city and industrial networking.
                             </p>
                            
                        </div>
                    </div>

                </div>
            </div>

            {/* Memory Map Section Start */}
            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'> Application </h1>

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

export default ICR_W402;