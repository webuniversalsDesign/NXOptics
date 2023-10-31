import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/MSW_202-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/MSW_202A-application.jpg'
import Application2 from '../../../../img/products/Telecom Switches/MSW_202A-application2.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const MSW_202A   = () => {

    let PartNumber = "MSW-202A";
    let productName = "2x GbE/RJ45 + 2x 1G/SFP L2+ Carrier Ethernet Switch (EDD)";

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

                    <p className='listFeture '>Complies with CE1.0 </p>
                     <p className='listFeture '> IPv6 management </p>
                     <p className='listFeture '> IEEE 802.3ah, IEEE 802.1ag, ITU-T Y.1731 </p>
                      <p className='listFeture '> IEEE 1588v2 </p>

                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Standard </h5>

                                
                               <p className='listFeture '>  IEEE 802.3u, IEEE 802.3z, IEEE 802.3ab, IEEE 802.3x, IEEE </p>
                              <p className='listFeture '>    802.1p, IEEE 802.1Q, IEEE 802.1ad, IEEE 802.1D, IEEE  </p>
                              <p className='listFeture '>   802.1w, IEEE 802.1s, IEEE 802.1x, IEEE 802.3ad, </p>
                               <p className='listFeture '>   IEEE802.3ah, IEEE802.1ag, IEEE 802.3az  </p>
                              <p className='listFeture '>   ITU-T Y.1731, ITU-T G.8031, ITU-T G.8032  </p>
                          
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Security
                                </h5>

                              <p className='listFeture'> IEEE 802.1x port based access control, MAC based  </p>
                              <p className='listFeture'> access control authentication, RADIUS </p>
                              <p className='listFeture'>  authentication, limited MAC address learning, IP/MAC  </p>
                              <p className='listFeture'> binding, ACL rule based filtering, TACACS+, IP source </p>
                              <p className='listFeture'>  guard, DHCP snooping/relay option 82, ARP </p>
                              <p className='listFeture'>  inspection </p>
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
                            MSW-202A is a carrier class Ethernet Demarcation Device (EDD) with 2x 10/100/1000Base-T Ethernet ports and 2 x 100/1000Base-X dual rate SFP fiber ports which enables E-Line & E-Access services with advanced carrier Ethernet features per CE2.0. By supporting link and service Ethernet OAM schemes, the MSW-202A also provides extensive fault detection and diagnostic capabilities to ensure that actual network use complies with pre-agreed service level agreements (SLAs). 
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
                    <img src={Application2} className='sectionImg2' alt="memorymapImg" />

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

export default MSW_202A;