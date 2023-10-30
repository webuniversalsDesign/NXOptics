import React from 'react';

import productImg1 from '../../../img/products/Fiber Optical Cable/DAC/A0G_QPSP.jpg'

// import TransceiverBlock from '../../img/products/10SFP+/Transciever.jpg';
import pinassisment from '../../../img/products/Fiber Optical Cable/DAC/40G_QPQP_PinAssisment.jpg';
import pinassisment2 from '../../../img/products/Fiber Optical Cable/DAC/SFP28_Pin_Assignment_QPSP.png';
import machdimenssion from '../../../img/products/Fiber Optical Cable/DAC/A0G_QPSP_mechDimenssion.jpg';
// import Memorymap from '../../../img/products/Fiber Optical Cable/AOC/Memory.jpg';
// import handling from '../../../img/products/Fiber Optical Cable/AOC/handling.jpg';
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

const QSFP28_100G_QPSP = () => {

    let PartNumber = "NXODAC-A0G-QPSP-Pxx-yy";
    let productName = "100G QSFP28 to 4x25G SFP28 Direct Attach Cable (DAC) Hot Pluggable, Twinax Copper Cable, 1~5M    ";


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

<p className='listFeture'>Compliant to SFF-8665 QSFP28</p>
<p className='listFeture'>Compliant to SFF8402 SFP28</p>
<p className='listFeture'>100GBASE-CR4 Ethernet (IEEE 802.3bj)</p>
<p className='listFeture'>25G Ethernet (IEEE 802.3by)</p>
<p className='listFeture'>InfiniBand EDR</p>
<p className='listFeture'>Maximum aggregate data rate 100G (4x25 Gb/s), and 25G</p>
<p className='listFeture'>Hot Pluggable</p>
<p className='listFeture'>Single 3.3V power supply</p>
<p className='listFeture'>RoHS Compliant</p>

                    <h5 className='pt-5'>Applications</h5>

                       <p className='listFeture'>Switches servers and routers</p>
                       <p className='listFeture'> Network Storage Systems</p>
                       <p className='listFeture'>Data Center Networking</p>
                       <p className='listFeture'>High performance computing</p>
                       <p className='listFeture'>Telecommunication and wireless infrastructure</p>


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
                                <a className="nav-link" data-bs-toggle="pill" href="#menu3">Absolute Maximum Ratings</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu1">Recommended Operating Conditions</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu2">Product Specifications</a>
                            </li>

                        </ul>
                    </div>
                </div>



                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />
                        <div className="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} QSFP28 to 4 x SFP28 Twinax Copper Direct Attach Cables (DAC) are high performance,
                                 cost Effective I/O solutions for 100Gb Ethernet applications. 
The QSFP28 DAC are suitable for very short distances and offer a cost-effective way to connect within racks and across 
adjacent racks. It offers passive copper cables in lengths of 1 meter ~ 5 meters.
                            </p>
                        </div>
                    </div>

                    <div id="menu1" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Recommended Operating Conditions</h2>

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
                                            <td>Case Operating Temperature</td>
                                            <td>Top</td>
                                            <td>-20</td>
                                            <td>-</td>
                                            <td>+75</td>
                                            <td>°C</td>
                                        </tr>

                                        <tr>
                                            <td>Supply Voltage</td>
                                            <td>Vcc</td>
                                            <td>+3.13</td>
                                            <td>+3.3</td>
                                            <td>+3.47</td>
                                            <td>V</td>
                                        </tr>

                                        <tr>
                                            <td>Supply Current, per QSFP28</td>
                                            <td>Icc</td>
                                            <td></td>
                                            <td></td>
                                            <td>60</td>
                                            <td>mA</td>
                                        </tr>

                                        <tr>
                                            <td>Power Consumption, per QSFP28</td>
                                            <td>P</td>
                                            <td></td>
                                            <td></td>
                                            <td>0.2</td>
                                            <td>W</td>
                                        </tr>

                                        <tr>
                                            <td>Operating Date Rate, per Lane</td>
                                            <td>DR</td>
                                            <td>10.3125</td>
                                            <td>25.78125</td>
                                            <td>27.9525</td>
                                            <td>Gb/s</td>
                                        </tr>

                                        <tr>
                                            <td>Minimum Cable Bending Radius</td>
                                            <td></td>
                                            <td>30</td>
                                            <td></td>
                                            <td></td>
                                            <td>mm</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                          <div id="menu3" className="container tab-pane fade"><br />
                        <div className="container mt-3">
                            <h2>Absolute Maximum Ratings</h2>

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
                                            <td>70</td>
                                            <td>°C  </td>
                                        </tr>

                                        <tr>
                                            <td>Supply Voltage</td>
                                            <td>Vcc3</td>
                                            <td>3.13</td>
                                            <td>3.47</td>
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
                                            <td>Supply Current (QSFP28)</td>
                                            <td>Icc</td>
                                            <td></td>
                                            <td></td>
                                            <td>20</td>
                                            <td>mA</td>
                                        </tr>

                                        <tr>
                                            <td>Supply Current (SFP28)</td>
                                            <td>Icc</td>
                                            <td></td>
                                            <td></td>
                                            <td>10</td>
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
                                            <td>Operating Date Rate (per channel)</td>
                                            <td>DR1</td>
                                            <td></td>
                                            <td>25</td>
                                            <td></td>
                                            <td>Gb/s</td>
                                        </tr>


                                        <tr>
                                            <td>Data Rate (Aggregated)</td>
                                            <td>DR2</td>
                                            <td></td>
                                            <td>100</td>
                                            <td></td>
                                            <td>Gb/s</td>
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

            {/* Pin Assignment Section Start */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>100G QSFP28 Pin Assignment </h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={pinassisment} className='sectionImg2_1' alt="memorymapImg" />
                </div>

            </div>

               {/* Pin Assignment  Section Start */}
               <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>25G SFP28 Pin Assignment  </h1>

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

export default QSFP28_100G_QPSP;