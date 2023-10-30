import React from 'react';

import productImg1 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/miniDestructionCabel.jpg'

import orderInfo from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/heighStrengthOrderInfo.jpeg';

// import Memorymap2 from '../../img/products/1.25G CSFP/memoryMap2.png';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../../EnquireForm';

const Mini_Distribution_Cable = () => {

    let PartNumber = "NXOPMD-xxxx-xxxx-xxxxxx";
    let productName = "Fiber Optical Mini Distribution Cable";

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
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found' />
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found' />
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
                        <p style={{ fontWeight: "500" }}><LiaWarehouseSolid />  In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
                        <p style={{ fontWeight: "500" }}><MdSecurity /> Test Support </p>
                    </div>

                    <h5>Features</h5>

<p className='listFeture'>Low Insertion Loss & Return Loss</p>
<p className='listFeture'>Single Mode & Multi-Mode</p>
<p className='listFeture'>Standard & Customized configurations</p>
<p className='listFeture'>Physical contact polishing mode</p>
<p className='listFeture'>High Reliability & Stability</p>
<p className='listFeture'>Very Compact Size of Cable Diameter</p>

                    <h5 className='pt-5'>Applications</h5>

                       <p className='listFeture'>NXOTTH /  NXOTTB</p>
                       <p className='listFeture'>Telecommunication</p>
                       <p className='listFeture'>Testing instruments</p>
                       <p className='listFeture'>LAN / WAN</p>
                       <p className='listFeture'>CATV</p>


                </div>

            </div>

            <div className='container pt-lg-5  pb-lg-5'>
                <div className='resp-overflow'>
                    <div className='d-flex justify-content-center'>
                        <ul className="navs nav-pills" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu1">Specification</a>
                            </li>

                        </ul>
                    </div>
                </div>



                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />
                        <div className="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} NXO Mini Distribution Cable provides sundry and cost effective solution for connection between Fiber Optical equipment and components. It has the benefits including easy installation, very compact size and excellent loading performance. It reduce the cable diameter significantly. It is the most convenient and flexible answer for system cable deploying.

                            </p>
                        </div>
                    </div>

                    <div id="menu1" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Optical Parameters</h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Fiber Type</th>
                                            <th></th>
                                            <th>Single-mode</th>
                                            <th>Multi-mode</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Nominal Fiber OD</td>
                                            <td></td>
                                            <td>125.3 ~126.5μm</td>
                                            <td>126 ~ 127.5μm</td>
                                        </tr>


                                        <tr>
                                            <td>Connector Type</td>
                                            <td></td>
                                            <td>SC, FC, ST, E2000, LC, MU</td>
                                            <td>SC, FC, ST, E2000, LC, MU</td>
                                        </tr>

                                        <tr>
                                            <td>Insertion Loss ( Typical )( dB )</td>
                                            <td></td>
                                            <td>0.2</td>
                                            <td>0.3</td>
                                        </tr>

                                        <tr>
                                            <td>Insertion Loss ( Max. )( dB )</td>
                                            <td></td>
                                            <td>0.3</td>
                                            <td>0.5</td>
                                        </tr>

                                        <tr>
                                            <td>Return Loss ( dB ) </td>

                                            <td>PC <hr/> UPC <hr/> APC </td>

                                            <td>≦-40 <hr/> ≦-50 <hr/> ≦-60</td>
                                            <td>-<hr/>- <hr/>-</td>
                                        </tr>

                                        <tr>
                                            <td>Mating Durability (500 cycles)</td>
                                            <td>≦ 0.2dB</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Temperature Stability</td>
                                            <td>≦ 0.3dB</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Operating Temperature °C</td>
                                            <td>-40°C ~ 70°C</td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Storage Temperature °C</td>
                                            <td>-40°C ~ 85°C</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="menu3" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Cable Parameters </h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{textAlign:"center"}}>Cable Type</th>
                                            <th></th>
                                            <th style={{textAlign:"center"}}>Simplex</th>
                                            <th style={{textAlign:"center"}}>Round Duplex</th>
                                            <th style={{textAlign:"center"}}>Duplex</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td style={{textAlign:"center"}}>Cable Diameter</td>
                                            <td></td>
                                            <td style={{textAlign:"center"}}>2.0mm | 3.0mm</td>
                                            <td style={{textAlign:"center"}}>3.0mm | 4.8mm</td>
                                            <td style={{textAlign:"center"}}>2.0mm*2 | 3.0mm*2</td>
                                        </tr>

                                        <tr>
                                            <td style={{textAlign:"center"}}>Cable Weight ( Kg / Km )</td>
                                            <td></td>
                                            <td style={{textAlign:"center"}}>6.5 | 10.5</td>
                                            <td style={{textAlign:"center"}}>15.5 | 27.0</td>
                                            <td style={{textAlign:"center"}}>12.0 | 22.0</td>
                                        </tr>

                                        <tr>
                                            <td style={{textAlign:"center"}}>Cable Weight ( Kg / Km )</td>
                                            <td>Short Time <hr/> Long Time</td>
                                            <td style={{textAlign:"center"}}>200 | 200 <hr/> 100 | 100</td>
                                            <td style={{textAlign:"center"}}>600 | 800 <hr/> 300 | 400</td>
                                            <td style={{textAlign:"center"}}>400 | 600 <hr/> 200 | 300 </td>
                                        </tr>

                                        <tr>
                                            <td style={{textAlign:"center"}}>Crush resistant ( N / 100mm )</td>
                                            <td></td>
                                            <td style={{textAlign:"center"}}>4500 | 4500</td>
                                            <td style={{textAlign:"center"}}>3000 | 3000</td>
                                            <td style={{textAlign:"center"}}>5000 | 5000</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={TransceiverBlock} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div> */}
            {/* Mechanical Dimensions section start */}

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Ordering Information</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={orderInfo} className='sectionImg2' alt="Transceiver Block Diagram" />
                </div>

            </div>
            {/* Mechanical Dimensions section end */}



            <Footer />
            {/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>
            
        </>
    )
}

export default Mini_Distribution_Cable;