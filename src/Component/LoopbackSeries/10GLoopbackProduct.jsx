import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
// import EnquireForm from '../EnquireForm';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/10GLoopback/10GloopbackImg.jpg'
import memorymapimg from '../../img/products/10GLoopback/memoryMapImg.jpg'
import mchdimensionImg from '../../img/products/10GLoopback/macdimension.jpg'


import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';



const TenGLoopbackProduct = () => {
let PartNumber = "NXOSPP-HX-XLB-XX-XX"
let productName = "10G SFP+ Electrical Passive Loopback Hot Pluggable, 0~5dB Internal Attenuation, 0~2.5W Power Consumption "

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
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found'/>
      )}
    </Item>

    <Item
      original={loopbackImg1}
      thumbnail={loopbackImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={loopbackImg1} className='lightbox-img' alt='img-not-found'/>
      )}
    </Item>
   
  </Gallery>
</div>


<div className="d-flex justify-content-center flex-wrap cart-btn">
<Link className='btn-buy_now' data-bs-toggle="modal" data-bs-target="#myModal2"><BsCartCheck style={{marginBottom:"5px"}} /> Request a Quote</Link>
</div>

</div>

</div>

<div className='product-content'>
<h4>{productName}</h4>

{/* <span> : </span> */}

<div className='pricing-section d-flex flex-wrap align-items-center justify-content-between mt-4 mb-2'>
<p>Part Number</p>

<p className='sell-text' id="PartNumber">{PartNumber}</p>

</div>

<div className='sub-content d-flex justify-content-start'>
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p> &nbsp;&nbsp;&nbsp;&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

<p className='listFeture'>Compliant with SFF-8431 SFP+ MSA</p>
<p className='listFeture'>Electrical Data Rate up to 10.5Gbps per Lane</p>
<p className='listFeture'>Hot Pluggable </p>
<p className='listFeture'>2-wire interface for management</p>
<p className='listFeture'>Single 3.3V power supply</p>
<p className='listFeture'>Different Option for Internal Attenuation and Power Consumption</p>
<p className='listFeture'>RoHS compliant</p>


<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>Board and System Level Testing</p>
<p className='listFeture'>System Test and Measurement</p>
<p className='listFeture'>Switch / Router Chamber Test</p>
<p className='listFeture'>Power Consumption Validation</p>

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
  
 <p>{PartNumber} SFP+ Loopback modules are compliant with the current SFP+ Multi-Source Agreement ( MSA ) specification. The Loopback modules provide an effective way of testing the SFP+ port in the host system by looping back the electrical signal (optics are excluded).
It provides an economical way to mimic Fast Ethernet, Gigabit Ethernet, 10G Ethernet, SONET OC3~OC192, SDH STM-1~STM-64, 1x/2x/4x/8x/10x Fiber Channel, and CPRI Option #7, #8 on SFP/SFP+ ports in simulation testing environments.
</p>
</div>
</div>



<div id="menu1" className="container tab-pane active"><br/>
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
          <td>-20</td>
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
          <td>Data Rate, per Lane</td>
          <td>DR</td>
          <td>0.1</td>
          <td>-</td>
          <td>10.5</td>
          <td>Gb/s</td>
        </tr>

        <tr>
          <td>Differential Impedance</td>
          <td>Z</td>
          <td>90</td>
          <td>100</td>
          <td>110</td>
          <td>Ohm</td>
        </tr>

        <tr>
          <td>Durability Cycles</td>
          <td></td>
          <td></td>
          <td>100</td>
          <td>200</td>
          <td>Times</td>
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
  <h1 className='pb-4'>Memory Map</h1>

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


<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>



    </>
  )
}

export default TenGLoopbackProduct;