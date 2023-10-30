import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/GSW-4424CM-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/GSW-4424CM-application.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const GSW_4424CM = () => {

    let PartNumber = "GSW-4424CM";
    let productName = "24x GbE/RJ45 + 4x 1G/10G SFP+ L2+ Managed Ethernet Switch";

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
                    <p className='listFeture '>IPv6 management </p>
                   <p className='listFeture '>8 priority queues are supported on each port for QoS application </p>
                   <p className='listFeture '>Port-based VLAN, 802.1Q VLAN, Voice VLAN and Q-in-Q(double tagging) function </p>
                   <p className='listFeture '>Protected Port and Loop Detection function </p>
                  <p className='listFeture '> IEEE 802.1x security function, and VLAN assignment, Guest VLAN functions </p>
                  <p className='listFeture '> Static MAC address access limit and Dynamic MAC address number on port </p>
                  <p className='listFeture '> IEEE 802.1D & 802.1w & 802.1s </p>
                  <p className='listFeture '> DHCP Client / DHCP Option 82 Relay / DHCP Snooping function </p>

                    <h5 className='mt-3'>Specifications</h5>
                   <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>VLAN feature</h5>
                        
                           <p className='listFeture '>  IEEE 802.1Q tagged VLAN (4K VLAN groups) </p>
                           <p className='listFeture '>  IEEE 802.1ad QinQ VLAN </p>
                           <p className='listFeture '>  Voice VLAN; MAC based VLAN; Protocol based VLAN; </p>
                           <p className='listFeture '>  IP subnet based VLAN </p>
                           <p className='listFeture '>  Private VLAN for port isolation; VLAN translation </p>
                        </div>

                        <div className='col-lg-6'>


                            <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Security
                            </h5>
                            
                         <p className='listFeture'>   Static port security (MAC based) </p>
                         <p className='listFeture'>   Per port limited MAC learning </p>
                         <p className='listFeture'>   Port based/MAC base/single/multiple IEEE 802.1x </p>
                          <p className='listFeture'>  access control </p>
                          <p className='listFeture'>  512 ACL rules based on L2~L4 information </p>
                          <p className='listFeture'>  RADIUS/TACACS+ authentication </p>
                          <p className='listFeture'>  HTTPs & SSH v2 </p>
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

                            <p>The {PartNumber} is equipped with 24 Gigabit RJ45 ports and 4 1G/10G SFP+ based fiber optics ports. It is featured completely L2+
switch functionality which guarantees high network availability, robust network access and security as well as comprehensive QoS in
the network edge. It will deliver the benefits of optimal traffic transportation performance and lower ownership cost while maintaining
the network deployment simply. </p>
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

export default GSW_4424CM;