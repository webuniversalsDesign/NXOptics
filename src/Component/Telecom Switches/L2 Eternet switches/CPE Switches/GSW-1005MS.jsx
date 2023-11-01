import React from 'react';

import productImg1 from '../../../../img/products/Telecom Switches/GSW-1005MS-img.jpg'

import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

import Application from '../../../../img/products/Telecom Switches/GSW-1005MS-application.jpg'
import Application2 from '../../../../img/products/Telecom Switches/CableTray.jpg'


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../../EnquireForm';

const GSW_1005MS = () => {

    let PartNumber = "GSW-1005MS";
    let productName = "5x GbE/RJ45 + 1x 1G/SFP L2+ Managed Ethernet Switch";

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

                    <p className='listFeture '>5-Port 10/100/1000Base-T + 100/1000Base-X SFP uplink </p>
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
                                <p className='listFeture '> IEEE 802.1ad, IEEE 802.1x, IEEE 802.1ab, </p>
                                <p className='listFeture '> IEEE 802.3az </p>
                           
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Security
                                </h5>

              
                               
                               <p className='listFeture'> Port based/single/multiple IEEE 802.1x access control </p>
                                <p className='listFeture'> MAC based access control authentication </p>
                                <p className='listFeture'> RADIUS authentication, limited MAC address learning </p>
                                <p className='listFeture'> IP/MAC binding, ACL rule based filtering  </p>
                                <p className='listFeture'>TACACS+, DHCP snooping/relay option 82  </p>
                                <p className='listFeture'>ARP inspection, IP source guard  </p>
                          
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
                            GSW-1005MS is a managed Gigabit Ethernet CPE switch designed 5-Ports 10/100/1000Base-T RJ45 and 1 port 100/1000Base-X SFP based fiber optics. The traditional transmission distance of Gigabit Ethernet over RJ45 copper can be extended up to 100km over a fiber optics interface. GSW-1005MS has a optional cable tray that allows the installer to enclose the excess fiber within the unit, thus providing protection for the sensitive fiber at subscriber side. LEDs provide visual monitoring of Ethernet connected devices such as Ethernet home gateways, wireless access points or PC/laptop via 10/100/1000Base-T twisted pair RJ45 ports on GSW-1005MS. When GSW-1005MS is deployed as a stand-alone solution, it incorporates an easy to use Web user interface for operation, administration and maintenance both locally and remotely. All of the enabled Layer 2 features and functions of GSW-1005MS can be configured and monitored via web, CLI or SNMP management. GSW- 1005MS is particularly suitable for deploying and provisioning active Ethernet FTTX service of multi-service operators (MSO).
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
               <p>CT001/CT002 is an optional fiber tray and mounting hardware for deploying GSW-1005/2008 for residential fiber to the home applications. CT001/CT002 tray options is wall mounted, allowing secure termination of fiber leads</p>
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

export default GSW_1005MS;