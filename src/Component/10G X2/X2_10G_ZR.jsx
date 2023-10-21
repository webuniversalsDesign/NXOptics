import React from 'react';

import productImg1 from '../../img/products/10G X2/10G_X2Img.jpg'

// import transcrve from '../../img/products/100G CFP CFP2 CFP4/Transceiver.jpg';
import pinassisment from '../../img/products/10G X2/pinAssisment_10G_SR.png';
import machdimenssion from '../../img/products/10G X2/mecDimenssion_10G_SR.png';
// import Memorymap from '../../img/products/16GFC_SFP/16GFC_3.jpg.png';

import Navbar from '../../Navbar';
import Footer from '../../Footer';



import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const X2_10G_ZR = () => { 

  let PartNumber = "NXOXF2-H1-S15-80D";
  let productName ="110G X2-ZR Transceiver Hot Pluggable, Duplex SC, 1550nm EA-DFB, Single Mode, 80KM, DDM";

  
  
  return (
<>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={productImg1} className='img-main' alt="product-40GLoobBack"/>

</div>

<p className='text-center' style={{color:"gray", fontWeight:"200", fontSize:"15px" , marginBottom:"0px"}}>Click to open expanded view</p>

  <div className="d-flex justify-content-center">
        <Gallery>


    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="img-not-found"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="img-not-found"/>
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
<h4>
{productName}
</h4>

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<p className='sell-text'>{PartNumber}</p>
</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>XAUI Electrical Interface: 4 Lanes @3.125Gb/s</p>
<p className='listFeture'>Hot Pluggable</p>
<p className='listFeture'>Cooled 1550nm EA-DFB transmitter</p>
<p className='listFeture'>APD receiver</p>
<p className='listFeture'>Duplex SC connector</p>
<p className='listFeture'>MDIO Management Interface</p>
<p className='listFeture'>Support DDM function</p>
<p className='listFeture'>Link length up to 80km over single mode fiber</p>
<p className='listFeture'>Compliant to IEEE802.3ae 10GBASE-ZR</p>
<p className='listFeture'>Compliant to X2 MSA</p>
<p className='listFeture'>RoHS compliant</p>


<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>10G Gigabit Ethernet</p>

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

  </ul> 
</div>
</div>



  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>NXOXF2-H1-S15-80D is a highly integrated serial optical transponder module for 10Gbit/s data transmission that is usable in typical router line card applications, Storage, IP network and LAN and compliant to X2 MSA. The MUX/DEMUX with clock and data
recovery (CDR), XAUI interface and MDIO
management functions are all integrated into the module. This transceiver uses a 1550nm EA-DFB Laser Diode to achieve 80km over single mode fiber as 10GBASE-ZR of the IEEE 802.3ae.

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
          <td>95</td>
          <td>%</td>
        </tr>

        <tr>
          <td>Supply Voltage 5V</td>
          <td>Vcc5</td>
          <td>0</td>
          <td>+5.5</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Voltage 3.3V</td>
          <td>Vcc3</td>
          <td>0</td>
          <td>+3.6</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Voltage 1.2V(APS)</td>
          <td>Vcc1</td>
          <td>0</td>
          <td>+1.5</td>
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
          <td>Supply Voltage 5V</td>
          <td>Vcc3</td>
          <td>+4.75</td>
          <td>+5.0</td>
          <td>+5.25</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Voltage 3.3V</td>
          <td>Vcc3</td>
          <td>+3.14</td>
          <td>+3.3</td>
          <td>+3.47</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Voltage 1.2V(APS)</td>
          <td>Vcc1</td>
          <td>+1.15</td>
          <td>+1.2</td>
          <td>+1.25</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Supply Current 5V</td>
          <td>Icc5</td>
          <td></td>
          <td></td>
          <td>300</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Supply Current 3.3V</td>
          <td>Icc3</td>
          <td></td>
          <td></td>
          <td>600</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Supply Current 1.2V(APS)</td>
          <td>Icc1</td>
          <td></td>
          <td></td>
          <td>1100</td>
          <td>mA</td>
        </tr>

        <tr>
          <td>Module Total Power Consumption</td>
          <td>Pc</td>
          <td></td>
          <td>3.8</td>
          <td>4.2</td>
          <td>W</td>
        </tr>

        <tr>
          <td>Operating Case Temperature</td>
          <td>Tc</td>
          <td>0</td>
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

{/* Memory Map Section Start */}
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Pin Assignment</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={ pinassisment} className='sectionImg2' alt="memorymapImg"/>
</div>

</div>


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={machdimenssion} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default X2_10G_ZR;