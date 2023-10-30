import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/MSW-4424A-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/MSW-4424A-application.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const MSW_4424A = () => {

    let PartNumber = "MSW-4424A";
    let productName = "24x GbE/SFP + 4x 10G/SFP+ L2+ Carrier Ethernet Switch";

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


                   <h5> Features</h5>
                     <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Front access and hot swappable design</h5>
                    <p className='listFeture '>All of the system modules are front accessible, the hot swappable power and FAN module are designed to keep high network availability without service interruption when components fail
                   </p>
                     <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Fully dual rate architecture of fiber link port</h5>
                  <p className='listFeture '>  Dual speed fiber ports offer scalable physical connections for Metro Ethernet network operators
                   </p>
                     <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Fully Ethernet OAM enabled</h5>
                   <p className='listFeture '> Ethernet OAM features (IEEE 802.3ah/802.1ag/ITU-T Y.1731) help to rapidly detect and recover network faults and save OPEX for 
                    operators as well as increase customer satisfaction</p>


                    <h5 className='mt-3'>Specifications</h5>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Standards</h5>       
                            <p className='listFeture '> IEEE 802.3u, IEEE 802.3z, IEEE 802.3ae, IEEE 802.1p</p>
                            <p className='listFeture '> IEEE 802.1Q, IEEE 802.1ad, IEEE 802.1D, IEEE 802.1w </p>
                            <p className='listFeture '> IEEE 802.1s, IEEE 802.1x, IEEE 802.3ad, IEEE 802.3ah </p>
                            <p className='listFeture '> IEEE 802.3az, IEEE 802.1ag, ITU-T Y.1731 </p>
                        
                        </div>
                        <div className='col-lg-6'>
                           

                            <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Security 
                            </h5>
                               <p className='listFeture'>  IEEE 802.1x port based access control   </p>
                               <p className='listFeture'>  MAC based access control authentication   </p>
                               <p className='listFeture'>  RADIUS authentication, limited MAC address learning   </p>
                               <p className='listFeture'>  IP/MAC binding, ACL rule based filtering, TACACS+   </p>
                               <p className='listFeture'>  IP source guard, DHCP snooping/relay option 82  </p>
                               <p className='listFeture'>  ARP inspection  </p>
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

                            <p>The {PartNumber} layer 2+ managed Gigabit Ethernet switches are positioned as a Carrier Ethernet access switch solution. They are equipped with 24 SFP based 100Base-FX/1000Base-X dual speed optical ports and 4 10G Base-X SFP+ or 1000Base-X SFP uplink ports. The MSW-4424A offers the best flexibility and scalability for operators and service providers to deploy their Metro Ethernet networks. Aimed specifically at Metro Ethernet deployment, the specifications of MSW-4424A fully meet the attributes of Carrier Ethernet proposed by the Metro Ethernet Forum. The switches comply with MEF 9 standard to support E-Line/E-Access services and MEF 14 standard to enable the bandwidth profile configuration for delivering SLA (Service Level Agreement) with predictable end-to-end performance characteristics. MSW-4424A also supports advanced service OAM management to rapidly detect and recover from the network incidents in real time.
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


            {/* Mechanical Dimensions section start */}

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                {/* <h1 className='pb-4'>Dimensions </h1> */}

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    {/* <img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/> */}
                </div>
                <br />
                {/* <br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div> */}

            </div>
            {/* Mechanical Dimensions section end */}



            <Footer />
            {/* --------------------------------------------------------------------------------------------------------- */}
            <EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

        </>
    )
}

export default MSW_4424A;