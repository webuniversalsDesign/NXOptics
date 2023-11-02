

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/PMC-100PD-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/PMC-100PD-application.jpg'
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

const PMC_100PD  = () => {

    let PartNumber = "PMC-100PD";
    let productName = "10/100Base–TX to 100Base–FX PoE PD Media Converter";

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
                    
                    
                    <p className='listFeture'> 10/100Base-TX to 100Base-FX Converter 
                    </p>
                    <p className='listFeture'> Auto-Negotiation or forced mode 
                    </p>
                    <p className='listFeture'> Auto MDI/MDIX 
                    </p>
                    <p className='listFeture'> Forward 1600 bytes (Max.) packets 
                    </p>
                    <p className='listFeture'> Supports Q in Q double tagged frame transparent
                    </p>
                    
                    <p className='listFeture'> Supports IEEE 802.1Q Tag VLAN pass thru 
                    </p>
                    <p className='listFeture'> Supports flow control (Pause) 
                    </p>
                    <p className='listFeture'> Supports Link Fault Pass-Through (LFPT) 
                    </p>
                    <p className='listFeture'> Forward 9K jumbo packets in converter mode 
                    </p>
                    <p className='listFeture'> Supports IEEE802.3af/at Power over Ethernet
                    </p>

                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-8'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Standards</h5>
                                <p className='listFeture'> IEEE 802.3, IEEE 802.3u, IEEE 802.3af/at</p>

                            </div>

                            <div className='col-lg-4'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Dimensions
                                </h5>

                                 
                                 <p className='listFeture'>108 x 74 x 23mm (D x W x H) </p>
                                  
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
                            The PMC-100PD is Power over Ethernet 10/100Base-TX to 100Base-FX non-managed PD(Power Device) Fiber converter, which give you the options to choose from the most popular fiber cabling connectors, ST, SC, FC. Both multi-mode and single mode converter models are available as well as BiDi which allows bi-directional transmissions using only a single fiber cable. With Power over Ethernet (PoE) feature, PMC-100PD takes power supply over Ethernet cable from PoE Ethernet Switch and may work without external power adapter. When auto-negotiation is selected, these units will automatically tailor themselves to convert both halfduplex and full-duplex signals, according to IEEE802.3u standards. LED indicators signal the power status of the converter, UTP port speed, Link, and duplex status, FX port Link and duplex status.
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

export default PMC_100PD;