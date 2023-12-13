import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/400G-QSPF/400G-SR8.jpeg'

import TransceiverImg from '../../img/products/400G-QSPF/3MCD01-Transceiver.jpg';
import RecommendedPowerImg from '../../img/products/400G-QSPF/3MCD01-RecommendedPower.jpg';
import MechinicalDimenImg from '../../img/products/400G-QSPF/3MCD01-MechinicalDimen.jpg';
import AssignementImg from '../../img/products/400G-QSPF/3MCD01-Pin-Assignement.jpg';
import CompatibilityImg from '../../img/products/400G-QSPF/3MCD01-Compatibility.jpg';
import OpticalConnectorImg from '../../img/products/400G-QSPF/3MCD01-OpticalConnector.jpg';
import ProductionProccessImg from '../../img/products/400G-QSPF/3MCD01-ProductionProccess.jpg';
import PackagingImg from '../../img/products/400G-QSPF/3MCD01-Packaging.jpg';


import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const QSFP_SR8 = () => {

  let productName = "400Gb/s NXOOSFP SR8 100m OM3 Optical Transceiver  ";
  let PartNumber = "NXO88540X-3MCD01";

  return (

    <>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={loopbackImg1} className='img-main' alt="product-40GLoobBack"/>
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
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found' />
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
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2"><BsCartCheck style={{marginBottom:"5px"}}/> Enquire Now</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>{productName}



</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<div className='sell-text'>{PartNumber}

</div>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>


<div className='container-fluid'>
  <div className='row'>
    <div className='col-12 pb-3'>
      <h5>Features</h5>

<p className='listFeture'>NXOOSFP MSA compliant</p>
<p className='listFeture'>8 parallel lanes on 850nm center wavelength</p>
<p className='listFeture'>Compliant to IEEE 802.3bs Specification</p>
<p className='listFeture'>Up to 100m transmission on multi-mode fiber (MMF) OM3 with FEC</p>
<p className='listFeture'>Operating case temperature: 0 to 70℃</p>
<p className='listFeture'>8x53.125Gb/s electrical interface (400GAUI-8)</p>
<p className='listFeture'>Data Rate 53.125Gbps (PAM4) per channel.</p>
<p className='listFeture'>Maximum power consumption 12W</p>
<p className='listFeture'>MPO-16 connector</p>
<p className='listFeture'>RoHS compliant</p>

    </div>

    <div className='col-12 pb-3'>
      <h5>Application</h5>

      <p className='listFeture'>Data Center Interconnect</p>

<p className='listFeture'>400G Ethernet</p>
<p className='listFeture'>Infiniband interconnects</p>
<p className='listFeture'>Enterprise networking</p>

    </div>

  </div>
</div>


</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul className="nav nav-pills" role="tablist"> 

    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

    <li className="nav-item">
      <a className="nav-link " data-bs-toggle="pill" href="#menu2">Absolute Maximum Ratings</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu3">Recommended Operating Conditions </a>
    </li>
 
  </ul> 
</div>


  <div className="tab-content">



<div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h5>General Description</h5>

  <p style={{fontSize:"12px", fontWeight:"450"}}>This product is a parallel 400Gb/s Octal Small Form-factor Pluggable (NXOOSFP) optical  module.
   It provides increased port density and total system cost savings. The NXOOSFP full-duplex  optical module
    offers 8 independent transmit and receive channels, each capable of 53.125Gb/s  operation for an aggregate 
    data rate of 400Gb/s on 100 meters of OM3 multi-mode fiber. <br/><br/>
    An optical fiber cable with an MTP/MPO-16 connector can be plugged into the NXOOSFP SR8  module
    receptacle. Proper alignment is ensured by the guide pins inside the receptacle. The cable usually  
    cannot be twisted for proper channel to channel alignment. Electrical connection is achieved through  
    an NXOOSFP MSA-compliant edge type connector.<br/><br/>
    The central wavelengths of all the 8 parallel lanes are 850nm. It contains
     an optical MPO-16 connector  for the optical interface and a 60-pin connector for 
     the electrical interface. Host FEC is required to  support up to 100m OM3 multi-mode
      fiber transmission.<br/><br/>
      The product is designed with form factor, optical/electrical 
      connection and digital diagnostic interfaceaccording to the  
      NXOOSFP Multi-Source Agreement (MSA). It has been designed to
       meet the harshest external operating  conditions including 
       temperature, humidity and EMI interference.
</p>
<br/>

<h5>Functional Description</h5>
<br/>

<p style={{fontSize:"12px", fontWeight:"450"}}>The module incorporates 8 parallel channels, on 850nm Center Wavelength, operating at 50G per channel. The  transmitter path incorporates an 8-channel CDR retimer, 2 sets of quad channel VCSEL drivers together with 2 sets of  VCSEL arrays. On the receiver path, 2 sets of photodiode arrays optics are coupled with an 8-channel CDR retimer.
The electrical interface is compliant with IEEE 802.3bs and NXOOSFP MSA in the transmitting and receiving directions,  and the optical interface is compliant to NXOOSFP MSA with MPO-16 Optical Connector. Figure 2 shows the  functional block diagram of this product.
<br/><br/>

A single +3.3V power supply is required to power up this product. As per MSA specifications the module offers 4 low  speed hardware control pins: SCL, SDA, INT/RSTn and LPWn/PRSn
SCL and SDA are a 2-wire serial interface between the host and module using the I2C protocol. SCL is defined as the  serial interface clock signal and SDA as the serial interface data signal. Both signals are open-drain and require pull-up  resistors to +3.3V on the host. The pull-up resistor value can be 2.2k ohms to 4.7k ohms.
<br/><br/>

INT/RSTn is a dual function signal that allows the module to raise an interrupt to the host and also allows the host to  reset the module. Reset is an active-low signal on the host which is translated to an active-low signal on the module.  Interrupt is an active-high signal on the module which gets translated to an active-low signal on the host. The INT/RSTn  signal operates in 3 voltage zones to indicate the state of Reset for the module and Interrupt for the host. Figure 1  shows these 3 zones.
<br/><br/>

LPWn/PRSn is a dual function signal that allows the host to signal Low Power mode and the module to indicate Module  Present. Low Power mode is an active-low signal on the host which gets converted to an active-low signal on the  module. Module Present is controlled by a pull-down resistor on the module which gets converted to an active-low logic  signal on the host. The LPWn/PRSn signal operates in 3 voltage zones to indicate the state of Low Power mode for the  module and Module Present for the host. Figure 1 shows these 3 zones.

</p>
  
</div>
</div>

    <div id="menu2" className="container tab-pane fade"><br/>
    <div className="container mt-3">
    <h2>Absolute Maximum Ratings</h2>
<br/>
<br/>
  
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min</th>
          <th>Max</th>
          <th>Units</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Storage Temperature</td>
          <td>Ts</td>
          <td>-40</td>
          <td>85</td>
          <td>degC</td>
          <td></td>
        </tr>

        <tr>
          <td>Operating Case Temperature</td>
          <td>Top</td>
          <td>0</td>
          <td>70</td>
          <td>degC</td>
          <td></td>

        </tr>
  
        <tr>
          <td>Power Supply Voltage</td>
          <td>Vcc</td>
          <td>-0.5</td>
          <td>3.6</td>
          <td>V</td>
          <td></td>

        </tr>

        <tr>
          <td>Relative Humidity (non-condensation)</td>
          <td>RH</td>
          <td>0</td>
          <td>85</td>
          <td>%</td>
          <td></td>

        </tr>
    
      </tbody>
    </table>
  </div>
</div>
 </div>

 <div id="menu3" className="container tab-pane fade"><br/>
    <div className="container mt-3">
  <h2>Recommended Operating Conditions and  Power Supply Requirements</h2>
  <br/>
  <br/>
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>Symbol</th>
          <th>Min</th>
          <th>Typicaly</th>
          <th>Max</th>
          <th>Units</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Operating Case Temperature</td>
          <td>Top</td>
          <td>0</td>
          <td></td>
          <td>70</td>
          <td>degC</td>
          <td></td>
        </tr>

        <tr>
          <td>Power Supply Voltage</td>
          <td>Vcc</td>
          <td>3.135</td>
          <td>3.3</td>
          <td>3.465</td>
          <td>V</td>
          <td></td>
        </tr>
  
        <tr>
          <td>Data Rate, each Lane</td>
          <td></td>
          <td></td>
          <td>26.5625</td>
          <td></td>
          <td>GBd</td>
          <td>PAM4</td>
        </tr>

        <tr>
          <td>Data Rate Accuracy</td>
          <td></td>
          <td>-100</td>
          <td></td>
          <td>100</td>
          <td>ppm</td>
          <td></td>
        </tr>

        <tr>
          <td>Pre-FEC Bit Error Ratio</td>
          <td></td>
          <td></td>
          <td></td>
          <td>2.4x10-4</td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>Post-FEC Bit Error Ratio</td>
          <td></td>
          <td></td>
          <td></td>
          <td>1x10-12</td>
          <td></td>
          <td>1</td>
        </tr>

        <tr>
          <td>Link Distance with OM3</td>
          <td>D</td>
          <td>0.5</td>
          <td></td>
          <td>100</td>
          <td>m</td>
          <td>2</td>
        </tr>
      
      </tbody>
    </table>
  </div>
</div>
 </div>
 

  </div>
  
</div>


{/* Optical Interface section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={TransceiverImg} className='img-fluid' alt="memorymapImg"/>
</div>
</div>
<br/><br/>
{/* Optical Interface section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={AssignementImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Optical Connector Interface </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={OpticalConnectorImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Recommended Power Supply Filter</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={RecommendedPowerImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={MechinicalDimenImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Compatibility Test</h1>
<p style={{fontSize:"13px",fontWeight:"450"}}>In order to ensure the product compatibility, 
our products will be tested on the switch before shipment.  Ourmodules can compatible with many mainstream 
brand switches, such as Cisco, Juniper, Extreme, Brocade,  IBM, H3C, HP, Huawei, D-Link, Mikrotik, ZTE, TP-Link<br/>
Our test equipment: VOLKTEK MEN-4110, HP 2530-8G, CRS226-24G-25+RM, Catalyst 2960G Series, Catalyst  3850 XS 10G SFP+,
 Catalyst 3750-E Series, HUAWEI S5700Series, H3C S3100V2 Series, Juniper-EX4200, etc.
</p>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={CompatibilityImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Product Production Process</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ProductionProccessImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
<br/><br/>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Packaging</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={PackagingImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}

<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default QSFP_SR8;