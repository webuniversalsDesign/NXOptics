import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/MSW-4204S-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/MSW-4204S-Application.jpg'
// import Application2 from '../../../../img/products/Telecom Switches/MSW-404-application2.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const FSW_2104 = () => {

    let PartNumber = "FSW-2104";
    let productName = "4× GbE/RJ45 + 2× 1G/10G SFP+ L2+ Carrier Ethernet Switch with SyncE";

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


                    <p className='listFeture '> The next generation Ethernet demarcation device, at customer premise, fulfills the large-scale carrier Ethernet deployment for intelligent business connection and mobile backhaul services compliant to CE 2.0 standard. </p>
                    <p className='listFeture '> CE2.0 standards compliant product guarantees the full interoperability with other MEF certified equipment and reduces the risks and cost of Carrier Ethernet network deployment for operators and service providers.  </p>
                    <p className='listFeture '> Advanced clock synchronization features for carrier Ethernet network allows operators to deliver time sensitive services with optimal stability and continuity in the end-to-end connectivity. </p>

                    <h5>Precise Time synchronization</h5>
                    <p className='listFeture '>
                        Every Ethernet copper or fiber port on MSW-4204S except management port can be configured to deliver the timestamp messages of SyncE or IEEE 1588v2 inside Ethernet packets for the precision time purpose of mobile backhaul network. MSW-4204S is built-in 1PPS/ToD input and output SMA connectors. The output SMA interface supports the waveform measurement of IEEE 1588v2 via external instrument as well as the input SMA interface can be connected to external time source as the reference clock for the network.

                    </p>


                    {/* <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Packet Forwarding Rate</h5>


                                <p className='listFeture '> 14880pps@10Mbps, </p>
                                <p className='listFeture '> 148800pps@100Mbps, </p>
                                <p className='listFeture '> 1488000pps@1000Mbps, </p>
                                <p className='listFeture '> 14880000pps@10Gbps, </p>
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>IP Multicasting
                                </h5>

                                <p className='listFeture'>   IGMP snooping v1/v2/v3, IGMP proxy reporting </p>
                                <p className='listFeture'>    MLD snooping v1/v2  </p>
                                <p className='listFeture'>   IGMP fast leave </p>
                                <p className='listFeture'>    IGMP query </p>
                                <p className='listFeture'>    IGMP filtering/throttling </p>
                                <p className='listFeture'>   MVR (Multicast VLAN Registration) </p>
                            </div>
                        </div>
                    </div> */}
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
                            The next generation Carrier Ethernet Network Interface Device (NID) is designed for mobile backhaul transportation of 4G LTE-A/5G network. The MSW-4204S is equipped with 2 SFP+ slots, dual rate 1G/10Gbps and 2 ports Gigabit RJ45 network interfaces. It can be configurable as either UNI or NNI device which are CE(Carrier Ethernet) 2.0 compliant for Metro Ethernet network deployments.

                            <br/>
                            <br/>
                                The MSW-4204S is positioned as an universal network interface device (NID) for most carrier Ethernet access applications. It has builtin hardware based Ethernet OAM engine and is compliant to the latest OAM standards to deliver the committed SLA performance KPIs measurement on a per service basis
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


            {/* Mechanical Dimensions section start */}

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                {/* <h1 className='pb-4'>Dimensions </h1> */}

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    {/* <img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/> */}
                    {/* <img src={Application2} className='sectionImg2' alt="memorymapImg" /> */}

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

export default FSW_2104;