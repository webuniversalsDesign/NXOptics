import React from 'react';

import productImg1 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/energy_Cable1.jpg'
import productImg2 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/energy_Cable2.jpg'
import productImg3 from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/energy_Cable3.jpg'

import orderInfo from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/energyChainOrderInfo.jpeg';
import cablestrut from '../../../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/cable.jpg';

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

const Energy_Chain_Cable = () => {

    let PartNumber = "NXOPCD-3D5L-xxxx-xxx-EC ";
    let productName = "Fiber Optical OM3 5.0mm Round Duplex Energy Chain Cable Patch-cord";


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
                                    original={productImg2}
                                    thumbnail={productImg2}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg2} className='lightbox-img' alt='img-not-found'/>
                                    )}
                                </Item>

                                <Item
                                    original={productImg3}
                                    thumbnail={productImg3}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg3} className='lightbox-img' alt='img-not-found'/>
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
                                    original={productImg2}
                                    thumbnail={productImg2}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src={productImg2} className='lightbox-img' alt='img-not-found'/>
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
<p className='listFeture'>High compressive, Light weight</p>
<p className='listFeture'>Small Diameter, Multi Fiber Cores</p>
<p className='listFeture'>High Reliability & Stability</p>

                    <h5 className='pt-5'>Applications</h5>

                       <p className='listFeture'>Energy Chain system</p>
                       <p className='listFeture'>Robotic Assembly system</p>
                       <p className='listFeture'>Industrial data communication</p>
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
                                {PartNumber} TNXO Patch-cord provides sundry and cost effective solution for connection between Fiber Optical equipment and components. It has the benefits including easy installation, environmentally stable and excellent loading performance. The EC cable series have advantages of mechanical bending performance which are specifically designed for Energy Chain and Robotic Assembly system used in automatic production factory and various industrial application.

                            </p>
                        </div>
                    </div>

                    <div id="menu2" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Optical Parameters</h2>

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
                                            <td>MMF 50μm OM3</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Fiber Attenuation @850nm</td>
                                            <td></td>
                                            <td></td>
                                            <td>3.0</td>
                                            <td></td>
                                            <td>dB/KM+</td>
                                        </tr>

                                        <tr>
                                            <td>Fiber Attenuation @1300nm</td>
                                            <td></td>
                                            <td></td>
                                            <td>1.2</td>
                                            <td></td>
                                            <td>dB/KM+</td>
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
                                            <td>60</td>
                                            <td>N</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Tensile Short Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>100</td>
                                            <td>N</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Crush Long Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>60</td>
                                            <td>N/10cm</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Crush Short Term</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>100</td>
                                            <td>N/10cm</td>
                                        </tr>

                                        <tr>
                                            <td>Cable Bending Radius </td>

                                            <td>Static <hr/> Dynamic</td>

                                            <td>50 <hr/> 100</td>
                                            <td></td>
                                            <td></td>
                                            <td>mm<hr/>mm</td>
                                        </tr>

                                        <tr>
                                            <td>Connector Type</td>
                                            <td>LC/PC</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>Insertion Loss</td>
                                            <td></td>
                                            <td></td>
                                            <td>0.3</td>
                                            <td>0.5</td>
                                            <td>dB</td>
                                        </tr>

                                       

                                        <tr>
                                            <td>Mating Durability (500 cycles)</td>
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

export default Energy_Chain_Cable;