

import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/GSW-2008MS-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/GSW-2008MS-application.jpg'
import Application2 from '../../../../img/products/Telecom Switches/CableTray.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const GSW_2008MS  = () => {

    let PartNumber = "GSW-2008MS";
    let productName = "8x GbE/RJ45 + 2x 1G/SFP L2+ Managed Ethernet Switch";

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

                    <p className='listFeture '> 8-port 10/100/1000Base-T RJ45 + 2 uplink 100/1000Base-X SFP slot </p>
                    <p className='listFeture '>Supports 9.6K Bytes jumbo frame </p>
                    <p className='listFeture '>Supports IEEE 802.1Q tagged VLAN & Q-in-Q VLAN stacking </p>
                    <p className='listFeture '>Supports IEEE 802.1p priority queue</p>
 
                    <p className='listFeture '>Supports IGMP snooping v1/v2/v3 </p>
                    <p className='listFeture '>Supports DHCP auto provisioning </p>
                    <p className='listFeture '>Supports dying gasp </p>
                    <p className='listFeture '>Fiber cable tray(optional)</p>



                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Standards</h5>

                                
                                <p className='listFeture '>IEEE 802.3u, IEEE 802.3z, IEEE 802.3ae, </p>
                                <p className='listFeture '>  IEEE 802.3x, IEEE 802.1p, IEEE 802.1Q, </p>
                                <p className='listFeture '> IEEE 802.1ad, IEEE 802.1x, IEEE 802.1D,  </p>
                                <p className='listFeture '> IEEE 802.1w, IEEE 802.1s, IEEE 802.3ad, </p>
                                <p className='listFeture '>IEEE 802.1ab, IEEE 802.3az </p>
                           
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Security
                                </h5>

              
                               
                               <p className='listFeture'> Port based/single/multiple IEEE 802.1x access control </p>
                                <p className='listFeture'> MAC based access control authentication </p>
                                <p className='listFeture'> RADIUS authentication, limited MAC address learning </p>
                                <p className='listFeture'> IP/MAC binding, ACL rule based filtering  </p>
                        
                          
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
                            GSW-2008MS is a managed Gigabit Ethernet CPE switch positioned as a layer 2 managed switch solution for high speed connectivity with popular traffic priority and management capabilities for small and medium businesses. It features 8-port 10/100/1000Base-T RJ45 and 2-100/1000Base-X SFP based fiber optics. The GSW-2008MS is designed with a high-performance switching architecture and offers wire-speed transportation capability for bandwidth-intensive applications of enterprises. More and more corporations are adapting new IT technologies over the network such as voice over IP, video conference to improve productivity and save operation expenditure. The GSW-2008MS also supports features such as VLAN, QoS, IGMP for multicast applications and network management to fulfill SMB requirements. The GSW2008 delivers a cost effective Gigabit Ethernet solution to meet the converged applications for enterprise customer's networks. 
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
                <h1 className='pb-4'>Cable Tray Assembly </h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    {/* <img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/> */}
                    <img src={Application2} className='sectionImg2_1' alt="memorymapImg" />

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

export default GSW_2008MS ;