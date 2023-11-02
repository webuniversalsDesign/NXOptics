

import React from 'react';

import productImg1 from '../../../img/products/Telecom Switches/PMC-1000S-img.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Telecom Switches/PMC-1000S-application.jpg'
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

const PMC_1000S  = () => {

    let PartNumber = "PMC-1000S";
    let productName = "10/100/1000Base-T to 100/1000Base-X SFP with PoE+ (30W) Media Converte";

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
                   
                    <p className='listFeture'> Conversion between 10/100/1000Base-T and 100/1000Base-X 
                    </p>
                    <p className='listFeture'> Supports dual rate (100/1000) SFP for selectable Fast or Gigabit speed on fiber 
                    </p>
                    <p className='listFeture'> PoE output voltage up to 55VDC 
                    </p>
                    <p className='listFeture'> Supports IEEE 802.3at/af PoE, output 30Watts Power Budget 
                    </p>
                    <p className='listFeture'> Supports LFPT (Link Fault Pass Through)
                   </p>
                    
                    
                    <p className='listFeture'> Supports DIP SW for setting LFPT, Switch or Converter mode, SFP speed 
                    </p>
                    <p className='listFeture'> Wall Mount and compact size for easy installation 
                    </p>
                    <p className='listFeture'> Supports Jumbo frame 16K bytes packet 
                    </p>
                    <p className='listFeture'> Supports remote in-band management by FMC-1800 SNMP manager
                    </p>


                    <h5 className='mt-3'>Specifications</h5>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'> Standards</h5>
                               
                                <p className='listFeture'>  IEEE 802.3 10Base-T, 
                                </p>
                                <p className='listFeture'>  IEEE 802.3u 100Base-T(X) 
                                </p>
                                <p className='listFeture'>  IEEE 802.3u 100Base-FX, 
                                </p>
                                <p className='listFeture'>  IEEE 802.3ab 1000Base-T(X) 
                                </p>
                                <p className='listFeture'>  IEEE 802.3z 1000Base-SX/LX 
                                </p>
                                <p className='listFeture'>  IEEE 802.3x Flow Control and Back pressure 
                                </p>
                                <p className='listFeture'>  IEEE 802.3at Power over Ethernet + PoE+ 
                                </p>
                                <p className='listFeture'>  IEEE 802.3af Power over Ethernet, PoE
                            </p>


                            </div>

                            <div className='col-lg-6'>


                                <h5 style={{ fontWeight: "500", fontSize: "16px" }} className='pt-3'>Fiber parameters
                                </h5>
                               
                               
                               <p className='listFeture'>Fiber Cable (Multi-mode): 50/125um,62.5/125um
                               </p>
                               <p className='listFeture'> Fiber Cable (Single-mode):9/125um
                               </p>
                               <p className='listFeture'> Wavelength: 1310nm (Multi-mode/Single-mode) 
                               </p>
                               <p className='listFeture'>Available distance: 500M (Multi-mode SX)  20/40KM (Single-mode)
                               </p>
                               <p className='listFeture'> SFP, Distance depend on plug-in Fiber Transceiver
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
                            PMC-1000S is an managed Gigabit Ethernet media converter that supports conversion between electrical 10/100/1000Base-T and optical 1000Base-X Ethernet and as PSE (Power Source Equipment) provide PoE+ power over Ethernet. PMC-1000S provides an SFP cage for 100/1000Base-X compatible SFP modules. By offering in-band management, this converter can be remotely controlled and monitored in a centrally located managed rack via FMC-1800 media converter rack.
                             </p>
                           
                        </div>
                    </div>

                </div>
            </div>

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Application</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Application} className='img-fluid' alt="memorymapImg" />
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

export default PMC_1000S;