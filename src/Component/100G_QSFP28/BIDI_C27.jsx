import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/100G QSFP28/BIDI_C27.png';

import memorymapimg from '../../img/products/100G QSFP28/memoryMapER4_Single.jpg'
import mchdimensionImg from '../../img/products/100G QSFP28/BIDI_27_mechDimenssion.png'
import powerSupply from '../../img/products/100G QSFP28/PowerSupply.jpg'
import pinAssisment from '../../img/products/100G QSFP28/pinAssisment_ER4_single.jpg'
import transcerve from '../../img/products/100G QSFP28/BIDI_27_Transicivers.png'

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';


const BIDI_C27 = () => {
  let PartNumber = "NXOQ2S-K8-C27-10D"
  let productName = "100G QSFP28 Single Lambda LR1-BiDi Transceiver Hot Pluggable, Bidi LC, Tx1271nm EML / Rx1331nm, SMF 10KM, DDM"


  return (

    <>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={loopbackImg1} className='img-main' alt="product-40GLoobBack"/>
{/* <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'NXO product image',
                            isFluidWidth: true,
                            src: loopbackImg1,
                        },
                        largeImage: {
                            src: loopbackImg1,
                            width: 1200,
                            height: 1800,
                            // opacity:1
                          
                        },
                        enlargedImageContainerDimensions: {
                          width: '150%',
                          height: '100%'
                      }
                    }} className='img-main'/> */}
</div>

<p className='text-center' style={{color:"gray", fontWeight:"200", fontSize:"15px" , marginBottom:"0px"}}>Click to open expanded view</p>

  <div className="d-flex justify-content-center">
        <Gallery>


    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img'  alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img'  alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img'  alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
      )}
    </Item>
   
  </Gallery>
</div>


<div className="d-flex justify-content-center flex-wrap cart-btn">
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2"><BsCartCheck style={{marginBottom:"5px"}}/> Request a Quote</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>{productName}</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<div className='sell-text'>{PartNumber}</div>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Compliant with SFF-8665 QSFP28 MSA</p>
<p className='listFeture'>Compliant with IEEE 802.3bm CAUI-4 Interface</p>
<p className='listFeture'>Compatible with IEEE 802.3cu 100GBASE-LR1</p>
<p className='listFeture'>Signal Conversion between 53.125GBd PAM4</p>
<p className='listFeture'>optical signal and 25.78125Gbps NRZ electrical signal with DSP Gear Box.</p>
<p className='listFeture'>Built in TX CDR and RX CDR</p>
<p className='listFeture'>Hot Pluggable QSFP28 footprint</p>
<p className='listFeture'>CWDM 1271nm EML transmitter</p>
<p className='listFeture'>Simplex LC connector</p>
<p className='listFeture'>2-wire interface for management and diagnostic monitor compliant with SFF-8636</p>
<p className='listFeture'>Single 3.3V power supply</p>
<p className='listFeture'>Operating Temperature 0~70°C</p>
<p className='listFeture'>Link distance 10km over SM fiber with FEC</p>
<p className='listFeture'>Maximum Power consumption 4.5W</p>
<p className='listFeture'> RoHS compliant</p>


<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>100GBASE Ethernet</p>
<p className='listFeture'>Data Centers Switch Interconnect</p>
<p className='listFeture'>Server and Storage Area Network Interconnect</p>

</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul className="nav nav-pills" role="tablist">
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
      <a className="nav-link" data-bs-toggle="pill" href="#menu4">Digital Diagnostic Functions</a>
    </li>

  </ul> 
</div>


  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>{PartNumber} is a QSFP28 Single Lambda BIDI
transceiver for 100GbE applications especially in
Datacom, Data Center & Storage networks applications.
It works based on the 100G Lambda MSA 100G-LR1
Standard with the typical center wavelength 1271nm.
The transceiver incorporates one channel optical signal
of 100Gbps(PAM4) from four channels electrical
signal of 25Gbps(NRZ) and vice versa up to SMF 10km
optical links.
</p>
</div>
</div>



<div id="menu1" className="container tab-pane fade"><br/>
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
          <td>0</td>
          <td>+70</td>
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
          <td>VCC3</td>
          <td>-0.5</td>
          <td>+3.6</td>
          <td>V</td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
</div>

    <div id="menu2" className="container tab-pane fade"><br/>
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
          <td>TOP</td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
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
          <td>Supply Current</td>
          <td>ICC</td>
          <td></td>
          <td></td>
          <td>1360</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Electrical Data Rate, per Lane(NRZ)</td>
          <td>DRele</td>
          <td></td>
          <td>25.78125</td>
          <td></td>
          <td>Gb/s</td>
        </tr>

        
        <tr>
          <td>Optical Data Rate (PAM4)</td>
          <td>DRopt</td>
          <td></td>
          <td>53.125</td>
          <td></td>
          <td>Gbd</td>
        </tr>

        <tr>
          <td>Data Rate Accuracy</td>
          <td>ΔDR</td>
          <td>-100</td>
          <td></td>
          <td>+100</td>
          <td>ppm</td>
        </tr>

        <tr>
          <td>Pre-FEC Bit Error Rate</td>
          <td>BERpre</td>
          <td></td>
          <td></td>
          <td>2.4x10-4</td>
          <td></td>
        </tr>

        <tr>
          <td>Post-FEC Bit Error Rate</td>
          <td>BERpost</td>
          <td></td>
          <td></td>
          <td>1x10-12</td>
          <td></td>
        </tr>

        <tr>
          <td>Power Consumption</td>
          <td>P</td>
          <td></td>
          <td></td>
          <td>4.5</td>
          <td>W</td>
        </tr>

        <tr>
          <td>Transceiver Power-on Initialization Time</td>
          <td></td>
          <td></td>
          <td></td>
          <td>2000</td>
          <td>ms</td>
        </tr>

        <tr>
          <td>Control Input Voltage High</td>
          <td>ViH</td>
          <td>2.0</td>
          <td></td>
          <td>Vcc</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Control Input Voltage Low</td>
          <td>ViL</td>
          <td>0</td>
          <td></td>
          <td>0.8</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Fiber Link Distance (G.652 SMF)</td>
          <td>D</td>
          <td></td>
          <td></td>
          <td>10</td>
          <td>km</td>
        </tr>


      </tbody>
    </table>
  </div>
</div>
 </div>



 <div id="menu4" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Digital Diagnostic Functions</h2>
  <p>As defined by the QSFP28 MSA, NXO QSFP28 transceivers provide digital diagnostic functions via a 2-wire
serial interface, which allows real-time access to the following operating parameters:
</p>

<ul>
    <li>Transceiver temperature</li>
    <li>Laser bias current (4-Channel)</li>
    <li>Transmitted optical power (4-Channel)</li>
    <li>Received optical power (4-Channel)</li>
    <li>Transceiver supply voltage</li>
</ul>
<p>It also provides a sophisticated system of alarm and warning flags, which may be used to alert end-users when particular operating parameters are outside of a factory-set normal range.</p>
<p>
The operating and diagnostics information is monitored and reported by a Digital Diagnostics Controller (DDC)
inside the transceiver, which is accessed through the 2-wire serial interface. When the serial protocol is
activated, the serial clock signal (SCL pin) is generated by the host. The positive edge clocks data into the
QSFP28 transceiver into those segments of its memory map that are not write-protected. The negative edge
clocks data from the QSFP28 transceiver. The serial data signal (SDA pin) is bi-directional for serial data
transfer. The host uses SDA in conjunction with SCL to mark the start and end of serial protocol activation. The
memories are organized as a series of 8-bit data words that can be addressed individually or sequentially. The
2-wire serial interface provides sequential or random access to the 8 bit parameters, addressed from 000h to
the maximum address of the memory. 
</p>
<p><b>For more detailed information including memory map definitions, please see the QSFP28 MSA Specification.
</b></p>
</div>
 </div>

  </div>
</div>

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Digital Diagnostic Memory Map</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={memorymapimg} className='sectionImg2' alt="memorymapImg"/>
</div>

</div>
{/* Memory Map Section End */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mchdimensionImg} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

{/* Power Supply section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended Power Supply Filter</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={powerSupply} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* Power Supply section end */}

{/* Pin Assisment section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={pinAssisment} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* Pin Assisment section end */}

{/* Transcrve Block section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2 mb-4'>
  <h1 className='pb-4'>Transceiver Block Diagram</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={transcerve} className='sectionImg2_2' alt="memorymapImg"/>
</div>

</div>

{/* Transcrve Block section end */}

<Footer/>

{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default BIDI_C27;