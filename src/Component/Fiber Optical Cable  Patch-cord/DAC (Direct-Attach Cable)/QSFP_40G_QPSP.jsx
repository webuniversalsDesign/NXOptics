import React from 'react';

import productImg1 from '../../../img/products/Fiber Optical Cable/DAC/40G_QPQP.jpg'

// import TransceiverBlock from '../../img/products/10SFP+/Transciever.jpg';
import pinassisment from '../../../img/products/Fiber Optical Cable/DAC/40G_QPQP_PinAssisment.jpg';
import pinassisment2 from '../../../img/products/Fiber Optical Cable/DAC/10G_PinAssignment.png';
import machdimenssion from '../../../img/products/Fiber Optical Cable/DAC/40G_QPSP_mechDimenssion.jpg';


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

const QSFP_40G_QPSP = () => {

    let PartNumber = "NXODAC-40G-QPSP-Pxx-yy    ";
    let productName = "40G QSFP+ to 4 x SFP+ Passive Direct Attach Cable (DAC) Hot Pluggable, Copper Cable, 1M~5M ";

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

<p className='listFeture'>QSFP+ 40GBASE Rated Connector (SFF-8436 Compliant)</p>
<p className='listFeture'>4 x SFP+ 10GBASE Rated Connector (SFF-8431 Compliant)</p>
<p className='listFeture'>Fully compatible with IEEE802.3ba and Infiniband QDR specification</p>
<p className='listFeture'>Up to 10.3125GBASE transfer rate per SFP+ channel (40GBASE aggregate)</p>
<p className='listFeture'>Hot Pluggable</p>
<p className='listFeture'>I/O Connector designed for high speed differential signal applications</p>
<p className='listFeture'>Low Near-End crosstalk</p>
<p className='listFeture'>Precision process control for minimization of pair-to-pair skew</p>
<p className='listFeture'>2-wire I2C interface for management</p>
<p className='listFeture'>Single +3.3V power supply</p>
<p className='listFeture'>All-metal housing for superior EMI performance</p>
<p className='listFeture'>RoHS Compliant</p>


                    <h5 className='pt-5'>Applications</h5>

                       <p className='listFeture'> 40/10GBASE Ethernet</p>
                       <p className='listFeture'> InfiniBand QDR Applications</p>
                       <p className='listFeture'>Data Center cabling infrastructure</p>
                       <p className='listFeture'>High capacity I/O in Storage Area Networks, Network Attached Storage, and Storage Servers</p>
                       <p className='listFeture'>Switched fabric I/O such as ultra high bandwidth switches and routers</p>
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
                                <a className="nav-link" data-bs-toggle="pill" href="#menu2">Product Specifications</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu3">Recommended Operating Conditions </a>
                            </li>

                        </ul>
                    </div>
                </div>



                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />
                        <div className="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} QSFP+ to 4xSFP+ Passive copper direct attach cables (DAC) are high performance, cost effective I/O solutions for 40Gb Ethernet applications. The QSFP+ DAC are suitable for very short distances and offer a cost effective way to connect QSFP+ and SFP+ port. The direct-attach assemblies support 4 lanes
of 10Gbps (40Gbps composite). It offers Passive copper cables in lengths of 1meter ~ 5 meters.
                            </p>
                        </div>
                    </div>

                    <div id="menu2" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Product Specifications</h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Parameters</th>
                                            <th>Symbol</th>
                                            <th>Min.</th>
                                            <th>Typ.</th>
                                            <th>Max.</th>
                                            <th>Unit</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Supply Voltage</td>
                                            <td>Vcc</td>
                                            <td>+3.13</td>
                                            <td>+3.3</td>
                                            <td>+3.47</td>
                                            <td>V</td>
                                        </tr>

                                        <tr>
                                            <td>Supply Current</td>
                                            <td>Icc</td>
                                            <td></td>
                                            <td></td>
                                            <td>20</td>
                                            <td>mA</td>
                                        </tr>

                                        <tr>
                                            <td>Total Power Consumption</td>
                                            <td>Pd</td>
                                            <td></td>
                                            <td></td>
                                            <td>0.1</td>
                                            <td>W</td>
                                        </tr>

                                        <tr>
                                            <td>Data Rate (per lane)</td>
                                            <td>DR1</td>
                                            <td></td>
                                            <td>10.3125</td>
                                            <td>10.5</td>
                                            <td>GBps</td>
                                        </tr>

                                        <tr>
                                            <td>Data Rate (Aggregated)</td>
                                            <td>DR2</td>
                                            <td></td>
                                            <td>41.25</td>
                                            <td>42.0</td>
                                            <td>GBps</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="menu3" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Recommended Operating Conditions </h2>

                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Parameters</th>
                                            <th>Symbol</th>
                                            <th>Min.</th>
                                            <th>Max.</th>
                                            <th>Unit</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>Storage Temperature</td>
                                            <td>TST</td>
                                            <td>-40</td>
                                            <td>+85</td>
                                            <td>°C</td>
                                        </tr>

                                        <tr>
                                            <td>Case Operating Temperature</td>
                                            <td>Top</td>
                                            <td>0</td>
                                            <td>+70</td>
                                            <td>°C</td>
                                        </tr>

                                        <tr>
                                            <td>Supply Voltage</td>
                                            <td>Vcc</td>
                                            <td>3.13</td>
                                            <td>+3.47</td>
                                            <td>V</td>
                                        </tr>

                                        <tr>
                                            <td>Storage Relative Humidity</td>
                                            <td>RH</td>
                                            <td>5</td>
                                            <td>95</td>
                                            <td>%</td>
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
                <h1 className='pb-4'>Pin Assignment</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={pinassisment} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>

                {/* Memory Map Section Start */}
                <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>10G SFP+ Pin Assignment </h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={pinassisment2} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>



            {/* Mechanical Dimensions section start */}

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Mechanical Dimensions</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={machdimenssion} className='sectionImg2_2' alt="Transceiver Block Diagram" />
                </div>

            </div>
            {/* Mechanical Dimensions section end */}



            <Footer />
            {/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>
           
        </>
    )
}

export default QSFP_40G_QPSP;