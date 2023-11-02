

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/INJ-G30-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/INJ-G30-application.jpg'
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

const INJ_G30  = () => {

    let PartNumber = "INJ-G30";
    let productName = "Gigabit Ethernet IEEE 802.3af/at PoE Injector (15/30/36W)";

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


                    
                    
                    <p className='listFeture'>1 Port PoE Injector, 55VDC /30W output   
                    </p>
                    <p className='listFeture'>Compliant with IEEE 802.3af/at 
                    </p>
                    <p className='listFeture'>Providing 1 10/100/1000Mbps pass through data rate 
                    </p>
                    <p className='listFeture'>Wall Mountable 
                    </p>
                    
                    <p className='listFeture'>Compliant with IEEE 802.3 10Base-T, IEEE 802.3u 100Base-TX and IEEE 802.3ab 1000Base-T 
                    </p>
                    <p className='listFeture'>Safety & EMI Certificates: CE & FCC Class B Smart plug & play  
                    </p>
                    <p className='listFeture'>Compact Size
                    </p>

                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Ethernet Standard</h5>
                                 
                                  
                                  <p className='listFeture'>  IEEE 802.3       10Base-T 10Mbit/s Ethernet 
                                  </p>
                                  <p className='listFeture'>  IEEE 802.3u    100Base-TX, 100Base-FX, Fast Ethernet 
                                  </p>
                                  <p className='listFeture'>  IEEE 802.3ab  1000Base-T Gbit/s Ethernet over twisted pair
                           </p>
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Network Cable
                                </h5>
                                 
                                 
                                 <p className='listFeture'>IEEE 802.3af  Power over Ethernet (PoE) 
                                 </p>
                                 <p className='listFeture'>IEEE 802.3at  Power over Ethernet (PoE+)
</p>
                                
                                  
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Indications
                                </h5>
                                 
                                 
                                 <p className='listFeture'>  1x RJ-45 for 10/100/1000Base-T data 
                                 </p>
                                 <p className='listFeture'>  1x RJ-45 for 10/100/1000Base-T data and PoE Power output 
                                 </p>
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
                            This device consists of 1 PoE Injector port. It can solve the limitation of the power outlet location and offer the system designer a flexible solution to locate the PD network device everywhere. The compact size and wall mounting  was specifically designed for easy installation. It can be installed where space is limited; moreover, it provides smooth network migration and easy upgrade to network capacity
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

export default INJ_G30;