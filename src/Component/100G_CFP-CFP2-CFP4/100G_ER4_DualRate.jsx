import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from "../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg";
// import memorymapimg from '../../img/products/40G_eSR4/eSR4_2.jpg'
import mchdimensionImg from '../../img/products/100G CFP CFP2 CFP4/ER4_dulerateMecdimension.png'
import Transceiverimg from "../../img/products/100G CFP CFP2 CFP4/Transceiver.jpg"
import pinassisment from "../../img/products/100G CFP CFP2 CFP4/pinAssisment.jpg";

import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const ER4_DuleRate_100G = () => {
   
  let PartNumber = "NXOCFP2-K7-L13-40DR";
  let productName = "100G CFP2 ER4 Dual Rate TransceiverHot Pluggable, Duplex LC, EML LAN-WDM, Single Mode, 40KM, DDM";


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
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2" ><BsCartCheck style={{marginBottom:"5px"}}/>Request a Quote</Link>
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

<h5>Features</h5>



<p className='listFeture'>Compliant to CFP2 MSA</p>
<p className='listFeture'>Compliant to IEEE802.3ba 100GBase-ER4 and ITU-T G.709/Y.133 standards</p>
<p className='listFeture'>Electrical interface compliant with CFP2 MSA
</p>
<p className='listFeture'>4-CH optical Mux/DeMux design
</p>
<p className='listFeture'>Support up to 112Gb/s aggregate bit rate


</p>
<p className='listFeture'>Electrical serial data rate up to 27.9525Gbps



</p>
<p className='listFeture'> 
EML LAN-WDM array transmitter


</p>
<p className='listFeture'>
APD receiver



</p>
<p className='listFeture'>
Duplex LC connector



</p>

<p className='listFeture'>MDIO interface for management and diagnostic monitor


</p>

<p className='listFeture'>Built in quad TX CDR and RX CDR
</p>

<p className='listFeture'>Single 3.3V power supply
</p>

<p className='listFeture'>Low power consumption, {'<'}12W</p>
<p className='listFeture'>Link length up to 40km over single mode fiber
</p>

<p className='listFeture'>All metal housing for superior EMI performance
</p>

<p className='listFeture'>RoHS compliant
</p>

<h5 className='pt-5'>Applications</h5>


<p className='listFeture'>100GBASE-ER4 Ethernet



</p>
<p className='listFeture'>OTN OTU4 Application



</p>
<p className='listFeture'>Data Center



</p>

<p className='listFeture'>Datacom/ Telecom Switch & Router
</p>


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

  
  </ul> 
</div>


  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>
 NXOCFP2-K7-L13-40DR is a parallel fiber optical transceiver module for 100Gbit/s data transmission applications at 1300nm LAN-WDM. It is ideally suited for 100GbE Datacom, Storage Area Network (SAN) and OTN Telecom applications based on IEEE 802.3ba 100GBase Ethernet and OTN OTU4 standards.
The transceiver incorporates a 4-channel laser driver circuit together with a 4-channel EML LAN-WDM array coupled with an optical multiplexer. On the receiver side, an optical de-multiplexer is coupled with a 4-channel photodiode array and a 4-channel APD array resulting in a compact module for an aggregate bandwidth of 11.8Gb/s.

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
          <td>-40</td>
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
          <td>Vcc</td>
          <td>+3.135</td>
          <td>+3.3</td>
          <td>+3.465</td>
          <td>V</td>

        </tr>
        <tr>
          <td>Supply Current</td>
          <td>Icc</td>
          <td></td>
          <td></td>
          <td>2700</td>
          <td>mA</td>

        </tr>

        <tr>
          <td>Module Total Power</td>
          <td>P</td>
          <td></td>
          <td></td>
          <td>9.5</td>
          <td>W</td>

        </tr>

        <tr>
          <td>Aggregate Bit Rate</td>
          <td>BRave</td>
          <td></td>
          <td>103.125</td>
          <td>111.810</td>
          <td>Gb/s</td>

        </tr>
        
       
      </tbody>
    </table>
  </div>
</div>
 </div>

  </div>
  
</div>



<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={pinassisment} className='sectionImg2' alt="Transceiver Block Diagram"/>
</div>

</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mchdimensionImg} className='sectionImg3' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}





{/* {Transceiver Block Diagram} */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Transceiver Block Diagram </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Transceiverimg} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>


<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>
    </>
  )
}

export default ER4_DuleRate_100G;