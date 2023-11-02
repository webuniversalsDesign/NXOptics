

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/GSW3208MP-1-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/GSW3208MP-1-application.jpg'
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

const GSW3208MP_1  = () => {

    let PartNumber = "GSW3208MP-1";
    let productName = "8x GbE/RJ45 + 2x  1G/SFP with 8x PoE+ (180W) L2+ Managed Switch";

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
                    
                    <p className='listFeture '>8 x RJ45/PoE+ ports with 180W power budget totally 
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
                            <div className='col-lg-8'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> QoS feature</h5>

                                 
                                 <p className='listFeture '>Hard wired IEEE 802.1p 8 priority queues per port  </p>
                                 <p className='listFeture '>Traffic scheduling based on strict/WRR priority  </p>
                                 <p className='listFeture '>CoS based traffic classification on switch port, VLAN  </p>
                                 <p className='listFeture '>ID, DSCP, TCP/UDP port  </p>
                                 <p className='listFeture '>IEEE 802.1p priority tag remarking; DSCP remarking  </p>
                                 <p className='listFeture '>Per Port/Queue based ingress/egress rate limit in  </p>
                                 <p className='listFeture '>steps of 100kbps </p>
                                 <p className='listFeture '> IEEE 802.3x flow control  </p>
                                 <p className='listFeture '>Multicast/Broadcast/Unicast storm control with </p>
                                 <p className='listFeture '> flooding control </p>
                           
                            </div>

                            <div className='col-lg-4'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> IP Multicasting 
                                </h5>

                                 
                                 <p className='listFeture'> IGMP snooping v1/v2/v3, IGMP proxy reporting </p>
                                  <p className='listFeture'> MLD snooping v1/v2  </p>
                                  <p className='listFeture'>IGMP fast leave </p>
                                  <p className='listFeture'> IGMP query  </p>
                                  <p className='listFeture'>IGMP filtering/throttling  </p>
                                  <p className='listFeture'>MVR (Multicast VLAN Registration)  </p>
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
                            The GSW3208MP-1 is the enhanced version of cost-effective high performance managed power over Ethernet switch, which is equipped 8 GbE/RJ45 with IEEE 802.3at standard 30W power injection per port and 2 dual rate FE/GbE SFP slots. It’s designed for enterprise network deployment for office applications such as PoE powered IP telephony, WiFi access and IP surveillance. The GSW3208MP-1 support a wide variety of L2+ feature sets and included the advanced PoE management functions. Additionally, the GSW3208MP-1 can be managed by CTC in-house developed Smartview Element Management System, which offers a user-friendly and centralized device management platform that make the administrators be able to monitor and configure the deployed switches remotely.
                             </p>
                             
                        </div>
                    </div>

                </div>
            </div>

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Application</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application} className='sectionImg2' alt="memorymapImg" />
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

export default GSW3208MP_1 
 ;