

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/ICR-W405 & ICR-405-img.jpg'
import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/ICR-W405 & ICR-405-application.jpg'
// import module from '../../../img/products/Telecom Switches/ICR-W403-dimension.jpg'
import Application2 from '../../../img/products/Telecom Switches/ICR-W405 & ICR-405-application2.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';

const ICR_W405_ICR_405 =() =>{

    let PartNumber = "ICR-W405 & ICR-405";
    let productName1 = "4G LTE, 2x SIM, WiFi IEEE 802.11 a/b/g/n/ac 2.4G/5G, GPS,1x GbE  WAN,   4x GbE LAN, RS232 COM, RS485, and DI/DO Router";
    let productName2 = "4G LTE, 2x SIM, GPS,1x GbE WAN, 4x GbE LAN, RS232 COM, RS485, and DI/DO Router";
    let productName = "4G LTE, 2x SIM, WiFi IEEE 802.11 a/b/g/n/ac 2.4G/5G, GPS,1x GbE  WAN,   4x GbE LAN, RS232 COM, RS485, and DI/DO Route|| 4G LTE, 2x SIM, GPS,1x GbE WAN, 4x GbE LAN, RS232 COM, RS485, and DI/DO Router"
    
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
                     <p className='listFeture'>2x SIM slots, RS232, RS485 serial ports and DI/DO interfaces
                    </p>
                     <p className='listFeture'>LED indicators for connection and data transmission status
                    </p>
                     <p className='listFeture'>Industrial temperature rated from -20 ~ +70°C for use in harsh environments 
                    </p>
                     <p className='listFeture'>Support serial communication protocols for rich connectivity
</p>

                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Standard </h5>
                                
                                
                               
                               <p className='listFeture'> Cellular MobilComm standard: 
                               </p>
                               <p className='listFeture'> 4G LTE: FDD-LTE, TDD-LTE 
                               </p>
                               <p className='listFeture'> 3G: WCDMA 
                               </p>
                               <p className='listFeture'>IEEE802.11 a/b/g/n/ac WiFi Standard 
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


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Hardware interface
                                </h5>
                                 
                               
                               
                               <p className='listFeture'>  LAN: 4x 10/100/1000Base-T(X) RJ45 
                                </p>
                                <p className='listFeture'> WAN:  1x 10/100/1000Base-T(X) RJ45
                                </p>
                                <p className='listFeture'>  Reset Button for device reset 
                                </p>
                                <p className='listFeture'> 1x RS232 for serial COM port or console configuration 
                                </p>
                                <p className='listFeture'> (TXD/RXD/GND) 
                                </p>
                                <p className='listFeture'> 1x RS485
                                </p>
                                <p className='listFeture'>  1x DI (Isolated),
                                </p>
                                <p className='listFeture'>  1x DO (Isolated) 
                                </p>
                                <p className='listFeture'> 2x SMA connectors for detachable LTE Antenna
                                </p>
                                <p className='listFeture'>  2x RP-SMA for WiFi Antenna (ICR-W405) 
                                </p>
                                <p className='listFeture'>  1x GPS detachable Antenna
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
                            A new industrial grade 4G LTE cellular router that come with 4 Gigabit LAN ports and 1 Gigabit WAN port. It supports dual SIM slots for providing failover features,  build-in the latest cellular modem supports multi-band of FDD LTE/TDD LTE/ WCDMA and LTE Cat 6 mobile connectivity. 
                            </p>
                            <p>
                             <b>IIoT & Location</b>: High performance IEEE 802.11 a/b/g/n/ac Wireless LAN supports dual band of 2.4GHz or 5GHz antennas. Its GPS function supports TCP Push for tracking and report.  Provide serial ports and DI/DO interface can be deployed to collect real-time data transmissions for Industrial IoT and M2M applications. 
                            </p>
                            <p>
                              <b>Security & Management</b>: The Router features VPN Tunneling with Firewall and management capability via TR069 and SNMP while providing highly secure authentication, encryption and management to protect data between public and private networks and simplify your complicated solutions for smart city and industrial networking.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'> Application</h1>
                <h5>4G Industrial Router in Remote Monitoring of Medical Equipment</h5>
                <p>High speed 4G Cat6 wireless communication technology provides reliable, fast data transmission network for mobile medical system, data.</p>
                <h6 className='text-center'> Video Surveillance over 4G/LTE</h6>
                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'> </h1>
                <h6 className='text-center'> IOT Environmental Monitoring Application</h6>
                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application2} className='sectionImg2_1' alt="memorymapImg" />

                </div>
                <br />
             

            </div>

            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Dimensions</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={module} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div> */}

            {/* Mechanical Dimensions section start */}

           
            {/* Mechanical Dimensions section end */}



            <Footer />
            {/* --------------------------------------------------------------------------------------------------------- */}
            <EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

        </>
    )
}

export default ICR_W405_ICR_405;

