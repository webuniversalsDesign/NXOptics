

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/QSW-4204M-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/QSW-4204M-application.jpg'
// import module from '../../../../img/products/Telecom Switches/GSW-2020C7-module.jpg'
// import Application2 from '../../../../img/products/Telecom Switches/GSW-2020C7-product picture.jpg'


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
    let productName = "1xGbE, RJ45 + 4x1G/2.5G, RJ45 + 2x1G/10G SFP+ L2+ Managed Ethernet Switch with Cable Tray option";

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

                   <p className='listFeture '> Smart interrogator function - automatically gather vital information from the CPE at all times and store in database accessible by the operator   </p>
                   <p className='listFeture '> Smart fiber tray design makes fiber cable management more handy </p>
                    
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
                            The QSW-4204M is a next generation CPE switch developed by CTC Union Technologies. This new CPE switch is designed with 1 ports 10M/100M/1Gbps RJ45 and 4 ports 10M/100M/1G/2.5Gbps as well as 2 ports 1G/10Gbps SFP+ based fiber optics for P2P FTTH service applications. Its design concept is well considered from the basis of stylish and elegant appearance for the residential user as well as the advantage of easy installation for the FTTH service provider. Hence, the QSW-4204M makes an Internet connected device no longer like the legacy ones hidden in the corner of household. Oppositely, it can become as an eye-catching furniture to blend into the overall decoration aesthetics at home. As usual, the QSW-4204M adopts the evolutionary cable tray structural design to help the installer more easily and protectively manage the excess fiber within the unit.
                           </p>
                             <p>
                             The QSW-4204M leverages the technology strength of chipset provider which is the member of NBASE-T alliance to enable the multigigabit speed feature. The enterprise and residential users will be able to experience the reliable and secure Ethernet based high speed network access and also connect the existing Cat5e/Cat6 cabling infrastructure with IEEE 802.11ac wave 2 or even WiFi 6 device, NAS access as well as small cell or powerful workstations to break through the limitation of 1Gbps data rate for content richer applications such as Cloud storage, 4K video streaming or HD/UHD teleconferencing.
                             </p>
                            <p>
                            The QSW-4204M fully supports Layer 2 feature sets with complete network management interfaces such as Web GUI, CLI and SNMP. The QSW-4204M also supports DHCP auto provisioning and TR-069 client function which are suitable for the very large scale deployment from operator or service provider. Both device management features can avoid truck rolls and save OPEX for FTTH service providers.
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

export default ICR_4103 
 ;