

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/INJ-G90-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/INJ-G90-application.jpg'
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

const INJ_G90  = () => {

    let PartNumber = "INJ-G90";
    let productName = "Multigigabit Ethernet IEEE802.3bt PoE++  Injector";

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

                    
                    
                    <p className='listFeture'>	Compliant to IEEE 802.3bt standards 
                    </p>
                    <p className='listFeture'>	Compact size and wall mountable 
                    </p>
                    <p className='listFeture'>	PoE short circuit protection to guard the remote PoE/PD device. </p>


                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> IEEE standard </h5>
                               
                        <p className='listFeture'> IEEE802.3 10Base-T Ethernet 
                        </p>
                        <p className='listFeture'> IEEE802.3u 100Base-TX Fast Ethernet 
                        </p>
                        <p className='listFeture'> IEEE802.3ab 1000Base-T Gigabit Ethernet 
                        </p>
                        <p className='listFeture'> IEEE802.3bz  2.5G/5GBase-T Ethernet 
                        </p>
                        <p className='listFeture'> IEEE802.3an  10GBase-T Ethernet 
                        </p>
                        <p className='listFeture'> IEEE802.3af PoE standard 
                        </p>
                        <p className='listFeture'> IEEE802.3at PoE+ standard 
                        </p>
                        <p className='listFeture'> IEEE802.3bt PoE++ standard
                           </p>
                           
                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> PoE/PSE output
                                </h5>

                                 
                                 <p className='listFeture'>RJ45 pin assignment:  
                                 </p>
                                 <p className='listFeture'>Both 1/2 (+), 3/6 (-) and 4/5 (+), 7/8 (-)
                                 </p>

                                 <p className='listFeture'>108 x 74 x 23mm (D x W x H) </p>
                                  
                                  
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>  LED indicator
                                </h5>
                                
                                <p className='listFeture'>  "PWR" LED: System power
                                </p>
                                <p className='listFeture'>  “PoE” LED: 10/100/1000Base-T RJ45 link & PoE output
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
                            CTC Union Technologies unveils the next generation PoE++ injector, which is compliant to the latest IEEE 802.3bt PoE standards, model name as INJ-G90. The Ethernet connection from any one port of Ethernet switch/hub via Cat 5e/6 cable can be enabled IEEE 802.3bt/PSE feature by connecting with this PoE injector then feed power to the PoE/PD device remotely.
                          </p>
                            <p>
                            The PoE injector can be bundled with the EXT-G104P PoE extender developed by CTCU to offer the distance extension more than 100 meters for PoE feeding application. This bundled solution can not only offer the one-to-many PoE/PD network device flexibly but also solve the location limitation lack of power outlet perfectly. The compact size and wall mounting design of this PoE injector can simplify the installation in which the space is limited as well.   
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

export default INJ_G90;