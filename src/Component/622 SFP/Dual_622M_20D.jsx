import React from 'react';

import productImg1 from '../../img/products/622M_SFP/622M_20D.jpg'
import memorymapimg from '../../img/products/622M_SFP/memory.jpg'
import mchdimensionImg from '../../img/products/622M_SFP/dimension2.jpg'


import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Transceiverimg from "../../img/products/622M_SFP/transvicer.jpg"
// import powersupply from "../../img/products/40G-ER4/40G_ER4(4).jpg"


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const Dual_622M_20D = () => {
  let productName = "622M SFP OC-12 IR-1 / STM-4 S4.1 Transceiver Hot Pluggable, Duplex LC, 1310nm FP, SMF 20KM, DDM";
  let PartNumber = "NXOSFP-B7-S13-20D";

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
                    <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt='img-not-found'/>
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
          <h4>{productName}</h4>

          <div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
            <p>Part Number</p>

            <p className='sell-text'>{PartNumber}</p>
          </div>

          <div className='sub-content d-flex justify-content-start'>
            <p style={{ fontWeight: "500" }}><LiaWarehouseSolid /> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
            <p style={{ fontWeight: "500" }}><MdSecurity /> Test Support</p>
          </div>

          <h5>Features</h5>


          <p className='listFeture'>  Compliant with SONET OC-12 IR-1 and SDH STM-4 S4.1</p>
         <p className='listFeture'>   Compliant with INF-8074i SFP MSA </p>
          <p className='listFeture'>  Hot Pluggable </p>
         <p className='listFeture'>   1310nm VCSEL laser transmitter </p>
         <p className='listFeture'>   Duplex LC connector </p>
         <p className='listFeture'>   2-wire interface for management and diagnostic monitor compliant with SFF-8472 </p>
          <p className='listFeture'>  Single +3.3V power supply </p>
          <p className='listFeture'>  Link distance 20km over SM fiber</p>
          <p className='listFeture'>  RoHS Compliant </p>

          <h5 className='pt-5'>Applications</h5>

          <p className='listFeture'>SONET OC-12 / SDH STM-4 @622M</p>

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
                <a className="nav-link" data-bs-toggle="pill" href="#menu4">Digital Diagnostic</a>
              </li>

            </ul>
          </div>
        </div>



        <div className="tab-content">
          <div id="home" className="container tab-pane active"><br />
            <div className="container mt-3">
              <h2>Overview</h2>

              <p>NXOSFP-B7-S13-20D Small Form Factor Pluggable SFP transceivers are compliant with the current SFP
                Multi-Source Agreement (MSA) Specification. The high
                performance uncooled 1310nm FP transmitter and high sensitivity PIN receiver provide superior
                performance for SONET OC-12 / SDH STM-4 applications up to SMF 20km optical links.



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
                      <td>-40</td>
                      <td>+85</td>
                      <td>°C</td>
                    </tr>

                    <tr>
                      <td>Storage Relative Humidity</td>
                      <td>RH</td>
                      <td>5</td>
                      <td>95</td>
                      <td>%</td>
                    </tr>

                    <tr>
                      <td>Supply Voltage</td>
                      <td>VCC</td>
                      <td>-0.5</td>
                      <td>+4.0</td>
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
                      <td>Case Operating Temp. (NXOSFP-B7-S13-20D)</td>
                      <td>TOP</td>
                      <td>0</td>
                      <td>-</td>
                      <td>+70</td>
                      <td>°C</td>
                    </tr>

                    <tr>
                      <td>Case Operating Temp. (NXOSFP-B7-S13-20Di)</td>
                      <td>TOP</td>
                      <td>-40</td>
                      <td>-</td>
                      <td>+85</td>
                      <td>°C</td>
                    </tr>
                    <tr>
                      <td>Supply Voltage</td>
                      <td>VCC</td>
                      <td>+3.13</td>
                      <td>+3.3</td>
                      <td>+3.47</td>
                      <td>V</td>
                    </tr>


                    <tr>
                      <td>Supply Current(NXOSFP-B7-S13-20D)</td>
                      <td>ICC</td>
                      <td></td>
                      <td></td>
                      <td>230</td>
                      <td>mA</td>
                    </tr>

                    <tr>
                      <td>Supply Current(NXOSFP-B7-S13-20Di)</td>
                      <td>ICC</td>
                      <td></td>
                      <td></td>
                      <td>260</td>
                      <td>mA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="menu4" className="container tab-pane fade"><br />
            <div className="container mt-3">
              <h2>Digital Diagnostic Functions</h2>
              <p>As defined by the SFP MSA (SFF-8472) NXO SFP transceivers provide digital diagnostic functions via a 2-wire serial interface, which allows real-time access to the following operating parameters:
              </p>
              <ul>
                <li className='pt-1 pb-1'>Transceiver temperature</li>
                <li className='pt-1 pb-1'>Laser bias current (4-Channel)</li>
                <li className='pt-1 pb-1'>Transmitted optical power (4-Channel)</li>
                <li className='pt-1 pb-1'>Received optical power (4-Channel)</li>
                <li className='pt-1 pb-1'>Transceiver supply voltage</li>
              </ul>

              <p>It also provides a sophisticated system of alarm and warning flags,
                which may be used to alert end-users when particular operating parameters
                are outside of a factory-set normal range.
              </p>

              <p>The operating and diagnostics information is monitored and reported by a Digital Diagnostics Controller (DDC) inside the transceiver, which is accessed through the 2-wire serial interface. When the serial protocol is
                activated, the serial clock signal (SCL pin) is generated by the host. The positive edge clocks data into the SFP
                transceiver into those segments of its memory map that are not write-protected. The negative edge clocks data from the SFP transceiver. The serial data signal (SDA pin) is bi-directional for serial data transfer. The host uses SDA in conjunction with SCL to mark the start and end of serial protocol activation. The memories are organized as a series of 8-bit data words that can be addressed individually or sequentially
              </p>

              <p><b>For more detailed information including memory map definitions, please see the SFP MSA (SFF-8472)  Specification</b></p>

            </div>
          </div>

        </div>
      </div>

      {/* Memory Map Section Start */}
      <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
        <h1 className='pb-4'>Digital Diagnostic Memory Map</h1>

        <div className='d-flex justify-content-center' style={{ width: "100%" }}>
          <img src={memorymapimg} className='sectionImg2_1' alt="memorymapImg" />
        </div>

      </div>
      {/* Memory Map Section End */}

      {/* Transivers Block Diagram Section Start */}
      <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
        <h1 className='pb-4'>Pin Assignment</h1>

        <div className='d-flex justify-content-center' style={{ width: "100%" }}>
          <img src={Transceiverimg} className='sectionImg2_1' alt="Transceiver Block Diagram" />
        </div>

      </div>


      {/* Transivers Block Diagram Section End */}

      {/* Mechanical Dimensions section start */}

      <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
        <h1 className='pb-4'>Mechanical Dimensions </h1>

        <div className='d-flex justify-content-center' style={{ width: "100%" }}>
          <img src={mchdimensionImg} className='sectionImg2' alt="memorymapImg" />
        </div>

      </div>

      {/* Mechanical Dimensions section end */}



      {/* Recommended Power Supply Filter */}
      {/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended Power Supply Filter </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={powersupply} className='sectionImg2_1' alt="Transceiver Block Diagram"/>

</div>

</div> */}


      <Footer />
      {/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>
    
    </>
  )
}

export default Dual_622M_20D;