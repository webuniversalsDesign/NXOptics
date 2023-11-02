

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/GSW-4424MP-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/GSW-4424CM-application.jpg'
// import module from '../../../img/products/Telecom Switches/GSW-2020C7-module.jpg'
// import Application2 from '../../../img/products/Telecom Switches/GSW-2020C7-product picture.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';

const GSW_4424MP  = () => {

    let PartNumber = "GSW-4424MP";
    let productName = "24 x GbE/RJ45 + 4 x 1G/10G SFP+ with 24 x PoE+ (450W)  L2+ Managed Ethernet Switch";

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

                    <p className='listFeture '>24 x RJ45/PoE+ ports with 450W power budget totally 
                    </p>
                    <p className='listFeture '>Cable diagnostics to test UTP cable or determine broken point distance 
                    </p>
                    <p className='listFeture '>Text based CLI configuration download and upload 
                    </p>
                    <p className='listFeture '>Advanced PoE management
                    
                    <p className='listFeture '>&nbsp;&nbsp;&nbsp; PoE PD failure auto check and reset if PD failed  </p>
                    <p className='listFeture '>&nbsp;&nbsp;&nbsp; PoE port on/off scheduling  </p>
                    <p className='listFeture '>&nbsp;&nbsp;&nbsp; PoE configuration for power planning </p>


                    </p>

                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> VLAN feature</h5>

                         
                            
                            <p className='listFeture'>IEEE 802.1Q tagged VLAN (4K VLAN groups) 
                            </p>
                            <p className='listFeture'>IEEE 802.1ad QinQ VLAN 
                            </p>
                            <p className='listFeture'>Voice VLAN; MAC based VLAN; Protocol based VLAN; 
                            </p>
                            <p className='listFeture'>IP subnet based VLAN 
                            </p>
                            <p className='listFeture'>Private VLAN for port isolation; VLAN translation 
                            </p>
                            <p className='listFeture'>GVRP (GARP VLAN registration protocol)
                           </p>
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> IP Multicasting
                                </h5>
                                 
                                 <p className='listFeture'> IGMP snooping v1/v2/v3, IGMP proxy reporting 
                                 </p>
                                 <p className='listFeture'> MLD snooping v1/v2 
                                 </p>
                                 <p className='listFeture'> IGMP fast leave 
                                 </p>
                                 <p className='listFeture'> IGMP query 
                                 </p>
                                 <p className='listFeture'> IGMP filtering/throttling 
                                 </p>
                                 <p className='listFeture'> MVR (Multicast VLAN Registration) 
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
                            The high-density version of managed power over Ethernet switch in best cost performance ratio, GSW-4424MP, is designed for SMB and enterprise network application. Each Ethernet copper port complies with IEEE 802.3at standard to supply 30W power injection maximum. The 10G uplink ports relieve the insufficiency of Gigabit links to offer instantly demanding bandwidth consumption for PoE powered FHD/UHD IPcam surveillance, WiFi network access and VoIP telephony deployed in the enterprise network.
                           </p>
                            <p>
                            The GSW-4424MP is equipped with 24× Gigabit RJ45 ports and 4× 1G/10G SFP+ based fiber optics ports. It is featured completely L2+ switch functionality which guarantees high network availability, secured robust network access and comprehensive QoS in the network edge. Also, the GSW-4424MP can be managed by CTC in-house developed Smartview EMS, which offers a user-friendly and centralized device management platform. It makes the administrators be able to monitor and configure the switches remotely.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Application</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>
{/* 
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>CATV RF Receiver Module</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={module} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div> */}

            {/* Mechanical Dimensions section start */}

            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Product Picture </h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application2} className='sectionImg2' alt="memorymapImg" />

                </div>
                <br />
             

            </div> */}
            {/* Mechanical Dimensions section end */}



            <Footer />
            {/* --------------------------------------------------------------------------------------------------------- */}
            <EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

        </>
    )
}

export default GSW_4424MP;