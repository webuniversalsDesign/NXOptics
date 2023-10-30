import React from 'react';

import productImg1 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/heighStriengthCabel.jpg'


import orderInfo from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/heighStrengthOrderInfo.jpeg';
import cablestrut from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/heightStrengthCableStructure.jpeg';

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

const High_Strength_And_Suppleness = () => {

    let PartNumber = "NXOPCD-BS3L-xxxx-xxx-SS";
    let productName = "High Strength and Suppleness Fiber Optical Indoor Patch-cord SMF G.657A2 Fiber, 2.9mm LSZH Armored Cable    ";

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
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg1}
                                    thumbnail={productImg1}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt='img-not-found'/>
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

<p className='listFeture'>High Strength & Suppleness</p>
<p className='listFeture'>Low Insertion Loss & Return Loss</p>
<p className='listFeture'>Mice Biting prevention</p>
<p className='listFeture'>Permissible Side Pressure {'<0.1dB'} @1200 N/25mm for 1min</p>
<p className='listFeture'>Permissible Bending Radius 7.5mm</p>

                    <h5 className='pt-5'>Applications</h5>

                       <p className='listFeture'>Indoor Cabling</p>
                       <p className='listFeture'>NXOTTx and PON networks</p>
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
                                <a className="nav-link" data-bs-toggle="pill" href="#menu2">Specification</a>
                            </li>

                        </ul>
                    </div>
                </div>



                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />
                        <div className="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} NXO Patch-cord provides sundry and cost effective solution for connection between Fiber Optical equipment and components. It has the benefits including easy installation, environmentally stable and excellent loading performance. The SS cable series have advantages of High Strength and Suppleness which are specifically designed for Indoor cabling application in various NXOTTx projects and PON networks.

                            </p>
                        </div>
                    </div>

                    <div id="menu2" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Specification</h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Parameters</th>
                                            <th></th>
                                            <th>Min.</th>
                                            <th>Typ.</th>
                                            <th>Max</th>
                                            <th>Unit</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Fiber Type</td>
                                            <td>SMF G.657A2</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Fiber Attenuation @1310nm</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>4.0</td>
                                            <td>dB/KM</td>
                                        </tr>

                                        <tr>
                                            <td>Fiber Attenuation @1550nm</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>0.3</td>
                                            <td>dB/KM</td>
                                        </tr>

                                        
                                        

                                        <tr>
                                            <td>Tight Buffer</td>
                                            <td>0.6mm x 2</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Metal Tube</td>
                                            <td>200CU, OD1.6±0.1mm</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Metal Braid</td>
                                            <td>200CU, 3 ( 6 ) x16</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Cable Outer Jacket</td>
                                            <td>LSZH, OD2.9 ±0.1 mm</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Cable Weight</td>
                                            <td></td>
                                            <td></td>
                                            <td>17.0</td>
                                            <td></td>
                                            <td>kg/km</td>
                                        </tr>

                                        <tr>
                                            <td>Strength Member</td>
                                            <td>Kevlar, 2 x 1100D</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Cable Outer Diameter</td>
                                            <td></td>
                                            <td>2.8</td>
                                            <td>3.0</td>
                                            <td>3.2</td>
                                            <td>mm</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Weight</td>
                                            <td></td>
                                            <td></td>
                                            <td>8.0</td>
                                            <td></td>
                                            <td>Kg/Km</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Fiber Resistance</td>
                                            <td>IEC60332-1</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                            <tr>
                                            <td>Cable Tensile Long Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>200</td>
                                            <td>N</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Tensile Short Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>400</td>
                                            <td>N</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Crush Resistance Long Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>2000</td>
                                            <td>N/10cm</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Crush Resistance Short Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>3000</td>
                                            <td>N/10cm</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Bending Radius </td>

                                            <td>Static <hr/> Dynamic</td>

                                            <td>10D <hr/> 20D</td>
                                            <td></td>
                                            <td></td>
                                            <td>mm<hr/>mm</td>
                                        </tr>

                                        <tr>
                                            <td>Permissible Side Pressure</td>
                                            <td>{'<0.1dB'} @1200 N/25mm for 1min</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Permissible Bend Radius</td>
                                            <td>7.5</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Connector Insertion Loss</td>
                                            <td></td>
                                            <td></td>
                                            <td>0.3</td>
                                            <td>0.5</td>
                                            <td>dB</td>
                                        </tr>

                                        <tr>
                                            <td>Connector Return Loss</td>
                                            <td>UPA <hr/> APC</td>
                                            <td></td>
                                            <td></td>
                                            <td>-50 <hr/> -60</td>
                                            <td>dB</td>
                                        </tr>

                                       

                                        <tr>
                                            <td>Connector Mating Durability (500 cycles)</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>0.2</td>
                                            <td>dB</td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Temperature Stability</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>0.3</td>
                                            <td>dB</td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Operating Temperature °C</td>
                                            <td></td>
                                            <td>-20</td>
                                            <td></td>
                                            <td>70</td>
                                            <td>°C</td>
                                        </tr>

                                        
                                        <tr>
                                            <td>Storage Temperature °C</td>
                                            <td></td>
                                            <td>-20</td>
                                            <td></td>
                                            <td>70</td>
                                            <td>°C</td>
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

            {/* Memory Map Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Cable Structure</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={cablestrut} className='sectionImg2_5' alt="memorymapImg" />
                </div>

            </div>



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

export default High_Strength_And_Suppleness;