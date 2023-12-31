

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/ICR-4103-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/ICR-4103-application.jpg'
import module from '../../../img/products/Telecom Switches/ICR-4103-dimension.jpg'
import Application2 from '../../../img/products/Telecom Switches/ICR-4103-application2.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';

const ICR_4103  = () => {

    let PartNumber = "ICR-4103";
    let productName = "4G LTE, 2x SIM, 4x FE + 2x DI/1x DO, 1x RS485, 2x RS232";

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
                    
                    
                    <p className='listFeture'>Supports multi-band connectivity with FDD 4G LTE/ TDD 4G LTE/ 3G WCDMA/2G GSM/ LTE Cat4 
                    </p>
                    <p className='listFeture'>2 SIM card slots 4G LTE antenna, 1x WAN (10/100Base-TX) + 3x LAN (10/100Base-TX UTP), 2x DI + 1x DO, 3x Serial COM port (2x RS232, 1x RS485) 
                    </p>
                    <p className='listFeture'>Highly reliable and secure for mission-critical cellular communications 
                    </p>
                    <p className='listFeture'>Provide flexible options to configure LAN/ WAN ports  
                    </p>
                    <p className='listFeture'>Built-in dual SIM for network redundancy / failover/ roaming over/ back up 
                    </p>
                    <p className='listFeture'>Integrated dual detachable antenna against radio interference 
                    </p>
                    <p className='listFeture'>4G LTE  and WAN port for seamless connection and redundancy 
                    </p>
                    <p className='listFeture'>Supports 3x Serial port (1x RS485, 2x RS232) for IoT and automation application, Modbus RTU and Modbus/TCP gateway, MQTT 
                    </p>
                    <p className='listFeture'>Supports Routing/Firewall, NAT, Virtual Server, DMZ, Port filtering, MAC Filter, URL Filter, IP Filter, VLAN, Static Routing and RIP 1 & 2, VRRP, OSPF V2 & V3, BGP  
                    </p>
                    <p className='listFeture'>Supports VPN, OpenVPN, IPSec (3DES, AES128, AES196, AES256, MD5, SHA-1, SHA256), GRE, PPPTP, L2TP 
                    </p>
                    <p className='listFeture'>IPv6/IPv4 dual stack and all applications are IPv6 ready 
                    </p>
                    <p className='listFeture'>Supports DHCP server and client, PPPoE, Static IP, SNTP, DNS Proxy, DDNS, QoS, Virtual Com, UPnP 
                    </p>
                    <p className='listFeture'>Supports Alarm message : DO, SNMP Trap, E-mail 
                    </p>
                    <p className='listFeture'>Supports SNMP, TR069,Web, Telnet, CLI for management 
                    </p>
                    <p className='listFeture'>Supports dual Image firmware upgrade by Web 
                    </p>
                    <p className='listFeture'>CE, FCC, Rail Traffic EN50121-4 certified 
                    </p>
                    <p className='listFeture'>Safety EN60950-1 certified 
                    </p>
                    <p className='listFeture'>Radio RED ETSI EN301 489-1/-19/-52, EN301 908-1, EN303 413, NCC certified 
                    </p>
                    <p className='listFeture'>Heavy industrial grade EMS, EMI, EN61000-6-2, EN61000-6-4 certified 
                    </p>
                    <p className='listFeture'>Rugged metal, IP30 protection & Fanless design 
                    </p>
                    <p className='listFeture'>Wide operating temperature -20 ~ 75°C
                     </p>

                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>DIP SW for RS485 port</h5>
                                
                          
                          
                          <p className='listFeture'>DIP 1 Pull Low : 
                          </p>
                          <p className='listFeture'>OFF: Disable, ON: Enable
                          </p>
                          <p className='listFeture'> DIP 2  Pull High : 
                          </p>
                          <p className='listFeture'>OFF: Disable, ON: Enable 
                          </p>
                          <p className='listFeture'>DIP 3  120 ohm terminal resistor : 
                          </p>
                          <p className='listFeture'>OFF: Disable, ON: Enable
                           </p>
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Alarm message 
                                </h5>

                                <p className='listFeture'> DO for alarm message, with current capacity of 
                                 </p>
                                 <p className='listFeture'>500mA/50VDC maximum 
                                 </p>
                                 <p className='listFeture'>SNMP trap, E-mail, SMS, Alarm trigger by DI, VPN or 
                                 </p>
                                 <p className='listFeture'>WAN disconnection 
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
                            The ICR-4103 is a high-performance, industrial grade, 4G-LTE cellular router which is designed to offer fast connectivity over cellular networks for industrial applications. ICR-4103’s Ethernet ports can allow up to 3 Ethernet devices to link to the cellular network. It provides dual SIM card slots and one Ethernet WAN port which can automatically re-connect and auto-switch to offer cellular network redundancy and ensure uninterrupted connectivity. The ICR-4103 cellular router is integrated with WAN, LAN, SIM, VPN, Firewall, built-in DI/DO and Serial port services. In addition, ICR-4103 uses the highest level of industrial grade design for connection in the most demanding environments and is an ideal solution for Industrial Internet of Things (IIoT) and M2M (Machine-to-Machine) applications, such as remote control and monitoring, bus ticketing collection system, CCTV, SCADA, digital signage, kiosk and intelligent traffic systems. 
                            </p>
                            
                        </div>
                    </div>

                </div>
            </div>

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'> Application for Environmental Monitoring</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Application for Transportation/Bus Communication</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application2} className='sectionImg2_1' alt="memorymapImg" />

                </div>
                <br />
             

            </div>

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Dimensions</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={module} className='sectionImg2' alt="memorymapImg" />
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

export default ICR_4103 
 ;