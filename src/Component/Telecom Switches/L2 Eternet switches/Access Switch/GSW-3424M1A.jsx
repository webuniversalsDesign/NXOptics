import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/GSW-3424M1A-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/GSW-3424M1A-application.jpg'
import Application2 from '../../../../img/products/Telecom Switches/GSW-3424M1A-application2.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const GSW_3424M1A = () => {

    let PartNumber = "GSW-3424M1A";
    let productName = "22 ports GbE RJ45 + 2 ports GbE combo (RJ45 or SFP) + 2 ports GbE SFP uplink L2+ Managed Ethernet Switch";

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


                    <h5>Fully Layer 2+ Management </h5>

                    <p className='listFeture '>The switch includes full Layer 2+ Management features. The software set includes up to 4K 802.1Q VLAN and advanced Protocol VLAN, Private VLAN, MVR…advanced VLAN features. There are 8 physical queues Quality of Service, IPv4/v6 Multicast filtering, Rapid Spanning Tree protocol to avoid network loop, LACP, LLDP; sFlow, port mirroring, cable diagnostic and advanced Network Security features. It also provides Console CLI for out of band management and SNMP, Web GUI for in band Management.  </p>
               
                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>VLAN feature</h5>


                                <p className='listFeture '> IEEE 802.1Q tagged VLAN (4K VLAN groups) </p>
                                <p className='listFeture '> IEEE 802.1ad QinQ VLAN</p>
                                <p className='listFeture '> Voice VLAN; MAC based VLAN; Protocol based VLAN;</p>
                                <p className='listFeture '> IP subnet based VLAN Private VLAN for port isolation</p>
                                <p className='listFeture '>RADIUS/TACACS+ authentication </p>
                               <p className='listFeture '> HTTPs & SSH v2  </p>
                                <p className='listFeture '>IP/MAC binding </p>
                               <p className='listFeture '> IP source guard & ARP inspection </p>
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Security
                                </h5>

                                <p className='listFeture'> Static port security (MAC based)  </p>
                                <p className='listFeture'> Per port limited MAC learning </p>
                                <p className='listFeture'>  Port based/MAC base/single/multiple IEEE 802.1x  </p>
                                <p className='listFeture'> access control  </p>
                                <p className='listFeture'>256 ACL rules based on L2~L4 information </p>
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
                                The new L2 switch {PartNumber} is equipped 22-port 10/100/1000Base-T RJ45 + 2-Port GbE combo + 2-slot GbE SFP for SMB to strengthen their network. The switch supports Layer 2+ software features such as network control, security and management. Including 19” rack-mount brackets to fit into the rack installation.

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
                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application2} className='sectionImg2_1' alt="memorymapImg" />
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

export default GSW_3424M1A;