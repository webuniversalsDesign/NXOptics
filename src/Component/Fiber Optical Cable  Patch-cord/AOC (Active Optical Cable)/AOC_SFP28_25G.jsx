import React from 'react';

import productImg1 from '../../../img/products/Fiber Optical Cable/AOC/10G_SPSP.jpg'

// import TransceiverBlock from '../../img/products/10SFP+/Transciever.jpg';
import pinassisment from '../../../img/products/Fiber Optical Cable/AOC/pinAssignment2.jpg';
import machdimenssion from '../../../img/products/Fiber Optical Cable/AOC/dimension.jpg';
import Memorymap from '../../../img/products/Fiber Optical Cable/AOC/Memory.jpg';
import handling from '../../../img/products/Fiber Optical Cable/AOC/handling.jpg';
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

const AOC_SFP28_25G = () => {

    let PartNumber = "NXOAOC-25G-SPSP-xxx-xx";
    let productName = "25G SFP28 Active Optical Cable (AOC)Hot Pluggable, 850nm VCSEL, MMF 1~100M, DDM";

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
                  <p className='listFeture'>  Compatible with IEEE802.3by 25GBASE-SR </p>
                  <p className='listFeture'>  Compliant with SFF-8402 SFP28 MSA </p>
                   <p className='listFeture'> Support InfiniBand EDR, FDR-10 </p>
                   <p className='listFeture'> Up to 25.78125Gbps data rate</p>
                  <p className='listFeture'>  Hot Pluggable </p>
                  <p className='listFeture'>  850nm VCSEL transmitter and PIN receiver </p>
                  <p className='listFeture'>  2-wire interface for management and diagnostic monitor compliant with SFF-8472 </p>
                  <p className='listFeture'>  Single 3.3V power supply </p>
                   <p className='listFeture'> Link distance 100m over MM OM4 fiber and 70m over MM OM3 fiber </p>
                  <p className='listFeture'>  Low power consumption {'<1.0W'} </p>
                  <p className='listFeture'>  RoHS Compliant </p>

                    <h5 className='pt-5'>Applications</h5>

                    <p className='listFeture'> 25GBASE-SR Ethernet Link </p>
                    <p className='listFeture'>  InfiniBand EDR, FDR-10</p>
                    <p className='listFeture'> Data Center & Storage</p>
                    <p className='listFeture'> Datacom / Telecom Switch & Router</p>


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
                                <a className="nav-link" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu2">Recommended Operating Conditions</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="pill" href="#menu3">Digital Diagnostic Functions</a>
                            </li>

                        </ul>
                    </div>
                </div>



                <div className="tab-content">
                    <div id="home" className="container tab-pane active"><br />
                        <div className="container mt-3">
                            <h2>Overview</h2>

                            <p>
                                {PartNumber} 25G SFP+ Active Optical Cables (AOC) are direct-attach fiber assemblies with SFP28 form factor. The AOC utilize multi-mode fiber with 850nm VCSEL and PIN PD. It could be used as an alternative solution to SFP28 passive and active copper cables, while providing improved signal integrity, longer distances, superior electro-magnetic immunity & better bit error rate performance. They are suitable for 1~100 meters distances and offer a cost-effective way for very high port density connections.




                            </p>
                        </div>
                    </div>

                    <div id="menu1" className="container tab-pane fade"><br />
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
                                            <td>-20</td>
                                            <td>+85</td>
                                            <td>°C</td>
                                        </tr>

                                        <tr>
                                            <td>Storage Relative Humidity</td>
                                            <td>RH</td>
                                            <td>5</td>
                                            <td>85</td>
                                            <td>%</td>
                                        </tr>

                                        <tr>
                                            <td>Supply Voltage</td>
                                            <td>Vcc</td>
                                            <td>-0.5</td>
                                            <td>+3.6</td>
                                            <td>V</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div id="menu2" className="container tab-pane fade"><br />
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
                                            <td>0</td>
                                            <td>-</td>
                                            <td>+70</td>
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
                                            <td>Supply Current,per SFP28 </td>
                                            <td>Icc</td>
                                            <td></td>
                                            <td></td>
                                            <td>300</td>
                                            <td>mA</td>
                                        </tr>
                                        <tr>
                                            <td>Power Consumption, per SFP28 </td>
                                            <td>P</td>
                                            <td></td>
                                            <td></td>
                                            <td>1.0</td>
                                            <td>W</td>
                                        </tr>
                                        <tr>
                                            <td>Operating Data Rate </td>
                                            <td>DR</td>
                                            <td>10.3125 </td>
                                            <td>25.78125</td>
                                            <td></td>
                                            <td>Gb/s</td>
                                        </tr>
                                        <tr>
                                            <td>Bit Error Rate( Pre-FEC ) </td>
                                            <td>BER</td>
                                            <td> </td>
                                            <td></td>
                                            <td>5X10^-5</td>
                                            <td></td>   
                                        </tr>
                                        <tr>
                                            <td>Bit Error Rate( Post-FEC ) </td>
                                            <td>BER</td>
                                            <td> </td>
                                            <td></td>
                                            <td>10^-12</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Minimum Cable Bending Radius </td>
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
                            <h2>Digital Diagnostic Functions</h2>

                            <p>As defined by the SFP MSA (SFF-8472)  NXO SFP+ transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters</p>
                            <ul>
                                <li>Transceiver temperature</li>
                                <li>Laser bias current</li>
                                <li>Transmitted optical power</li>
                                <li>Received optical power</li>
                                <li>Transceiver supply voltage</li>
                            </ul>

                            <p>It also provides a sophisticated system of alarm and warning flags, which may be used to alert end-users when particular operating parameters are outside of a factory-set normal range.
                            </p>

                            <p>
                                The operating and diagnostics information is monitored and reported by a Digital Diagnostics Controller (DDC) inside the transceiver, which is accessed through the 2-wire serial interface. When the serial protocol is
                                activated, the serial clock signal (SCL pin) is generated by the host. The positive edge clocks data into the SFP transceiver into those segments of its memory map that are not write-protected. The negative edge clocks data from the SFP transceiver. The serial data signal (SDA pin) is bi-directional for serial data transfer. The host uses SDA in conjunction with SCL to mark the start and end of serial protocol activation. The memories are organized as a series of 8-bit data words that can be addressed individually or sequentially.
                            </p>

                            <p><b>For more detailed information including memory map definitions, please see the SFP MSA (SFF-8472)
                                Specification.
                            </b></p>

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
            {/* handling */}
            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Handling </h1>
                <p>Care should be taken to restrict exposure to the conditions defined in the Absolute Maximum Ratings and Recommended Operating Conditions. Put the product in an even and stable location. If the product falls down or drops, it may cause an injury or malfunction. The cable must not be subject to extreme bends during installation or while in operation. If you bend the cable at a radius less than the cable minimum bend radius, then the cable may get damaged. Don’t twist or pull by force ends of the cable, which might cause malfunction. In addition, the bending direction should be perpendicular to the flat surface of the ribbon cable. Please do not bend or kink the cable in lateral directions of flat surface of the ribbon.
                </p>
                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={handling} className='sectionImg2_1' alt="Transceiver Block Diagram" />
                </div>

            </div>

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Digital Diagnostic Memory Map</h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={Memorymap} className='sectionImg2_1' alt="memorymapImg" />
                </div>
                <br />
                <br />
                {/* <div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ Memorymap2 } className='sectionImg2_1' alt="memorymapImg"/>
</div> */}

            </div>


            {/* Mechanical Dimensions section start */}

            <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
                <h1 className='pb-4'>Mechanical Dimensions </h1>

                <div className='d-flex justify-content-center' style={{ width: "100%" }}>
                    <img src={machdimenssion} className='sectionImg2_1' alt="Transceiver Block Diagram" />
                </div>

            </div>
            {/* Mechanical Dimensions section end */}



            <Footer />
            {/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>
         
        </>
    )
}

export default AOC_SFP28_25G;