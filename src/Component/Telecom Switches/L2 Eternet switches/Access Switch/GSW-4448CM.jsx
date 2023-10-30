import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/GSW-4448CM-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/GSW-4448CM-application.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const GSW_4448CM = () => {

    let PartNumber = "GSW-4448CM";
    let productName = "24x CSFP (48x GbE) with 4x GbE Combo + 4x 10G SFP+ Managed Switch";

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
                
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Filter & Forward rate</h5>
                   
                          <p className='listFeture '> 14880pps at 10Mbps </p>
                          <p className='listFeture '>  148800pps at 100Mbps </p>
                          <p className='listFeture '>  1488000pps at 1Gbps </p>
                           <p className='listFeture '> 14880000pps at 10Gbps </p>
                        </div>
                       
                        <div className='col-lg-6'>


                            <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Security
                            </h5>
                        
                           <p className='listFeture'>Port-based 802.1X,Single 802.1X,  </p> 
                            <p className='listFeture'>Multiple 802.1X MAC-based authentication, VLAN assignment, QoS assignment,  </p> 
                           <p className='listFeture'>Guest VLAN </p> 
                           <p className='listFeture'>RADIUS accounting </p> 
                           <p className='listFeture'>MAC address limit  </p> 
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

                            <p>The {PartNumber} is an SNMP manageable Gigabit Ethernet switch for FTTx deployment or Gigabit Ethernet fiber aggregation that is equipped with 48 1000Base-X CSFP ports included 4 Gigabit combo ports (RJ45 or CSFP slot) and 4 1G/10Gbps dual rate SFP+ slots. The GSW-4448CM supports a special BX optics (Compact SFP) which can double the fiber port density to 48 links, make it be attractive for the FTTx deployment and scenarios where increased user links are required in limited construction space. With advanced layer 2 and QoS features, this switch is targeted at multi-service operators (MSO) with a desire to deploy provisioned triple play services via active Ethernet FTTx network infrastructures. Fiber based network infrastructures offer the data rates required by triple play services such as high speed internet access, VoIP and HD IPTV. The GSW-4448CM Ethernet access switch provides VLAN, QoS and IGMP L2 feature sets as well as robust security management to facilitate service provider's build out of a manageable and secure FTTx access 
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

export default GSW_4448CM;