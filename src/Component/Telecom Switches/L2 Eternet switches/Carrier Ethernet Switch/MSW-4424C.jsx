import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/MSW-4424C-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/MSW-4424C-application.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const MSW_4424A = () => {

    let PartNumber = "MSW-4424C";
    let productName = "20x GbE/SFP + 4x GbE Combo + 4x 10G/SFP+ L2+ Managed Carrier Ethernet Switch";

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
                    <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Fully dual rate architecture of fiber link port</h5>
                    <p className='listFeture '> Completely dual speed ports of fiber link to offer the scalable physical connection of Metro Ethernet network for operators
                    </p>
                    <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Fully Ethernet OAM enabled</h5>
                    <p className='listFeture '>
                        Enabling Ethernet OAM features (IEEE 802.3ah/802.1ag/ITU-T Y.1731) to rapidly detect and recover network fault and save the OPEX for operators as well as increase customer satisfaction </p>
                    <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>MEF standards compliant solution</h5>
                    <p className='listFeture '> Ethernet OAM features (IEEE 802.3ah/802.1ag/ITU-T Y.1731) help to rapidly detect and recover network faults and save OPEX for
                        operators as well as increase customer satisfaction</p>


                    <h5 className='mt-3'>Specifications</h5>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Standards</h5>
                            <p className='listFeture '>   IEEE 802.3u, IEEE 802.3z, IEEE 802.3ae, IEEE 802.1p </p>
                            <p className='listFeture '>   IEEE 802.1Q, IEEE 802.1ad, IEEE 802.1d, IEEE 802.1w </p>
                            <p className='listFeture '>   IEEE 802.1s, IEEE 802.1x, IEEE 802.3ad, IEEE 802.3ah </p>
                            <p className='listFeture '>   IEEE 802.1ag, IEEE 802.3az, ITU-T Y.1731 </p>
                        </div>
                        <div className='col-lg-6'>


                            <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Security
                            </h5>
                            <p className='listFeture'>  IEEE 802.1x port based access control </p>
                            <p className='listFeture'>  MAC based access control authentication </p>
                            <p className='listFeture'>  RADIUS authentication, limited MAC address learning  </p>
                            <p className='listFeture'>  IP/MAC binding, ACL rule based filtering, TACACS+ </p>
                            <p className='listFeture'>  IP source guard, DHCP snooping/relay option 82 </p>
                            <p className='listFeture'>   ARP inspection </p>
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

                            <p>The {PartNumber} is positioned as a layer 2+ Gigabit access switch solution. It is equipped with 20 100Base-FX/1000Base-X dual speed SFP slots, 4 ports GbE combo (10/100/1000Base-T or 100/1000Base-X SFP) ports and 4 1000Base-X/10G Base-X dual speed SFP+ uplink slots. The MSW-4424C offers the best flexibility and scalability for operators or service providers to deploy their Metro Ethernet network. With the deployment of MSW-4424C, operators or service providers can flexibly provision the bandwidth for either 100Mbps or 1000Mbps as well as uplink connection of Gigabit or 10G speed in their service applications. The MSW-4424C has built-in dual power supplies to enable power redundancy and enhance the high network availability. </p>
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