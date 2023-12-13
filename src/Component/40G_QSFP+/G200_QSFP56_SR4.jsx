import React from 'react';

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

import loopbackImg1 from '../../img/products/40GQSFP+/200G-SR4.jpeg'

import connectorImg from '../../img/products/40GQSFP+/SFP56-connector-pinpoint.png'
import OpticalImg from '../../img/products/40GQSFP+/SFP56-OpticalInterface.png'
import mechImg from '../../img/products/40GQSFP+/SFP56-mechinical.png';


import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';
import { BsCartCheck } from 'react-icons/bs';

// photo swaping 
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import EnquireForm from '../EnquireForm';

const G200_QSFP56_SR4 = () => {

  let productName = "200G NXOQSFP56 SR4 Optical Transceiver";
  let PartNumber = "NXOQSFP56";

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



<h5>Product Features</h5>
<p style={{fontSize:"14px"}}>The 200G NXOQSFP56 SR4 is a 4x 53.125Gbps multi mode fiber, hot pluggable optical transceiver.
<br/>The module integrates four parallel lanes with baud rate at 26.5625GBd each lane. It can transmit up to 70m on fiber OM3 fiber or 100m on OM4 fiber with FEC.
</p>

<div className='container-fluid'>
  <div className='row'>
    <div className='col-12 pb-3'>
      <h5>Features</h5>

<p className='listFeture'>	Compliant with 200G-SR4 optical specifications</p>
<p className='listFeture'>	4x53.125Gb/s electrical interface (200GAUI-4)</p>
<p className='listFeture'>	Reach up to 70m on MMF(OM3)</p>
<p className='listFeture'>	Reach up to 100m on MMF(OM4)</p>
<p className='listFeture'>	Single +3.3V power supply</p>
<p className='listFeture'>	Case temperature range: 0 ~+70℃</p>
<p className='listFeture'>	Maximum power consumption 4W</p>
<p className='listFeture'>	Single MPO12 connector</p>
<p className='listFeture'>	RoHS complaint</p>
    </div>

    <div className='col-6'>
    <h5>Applications</h5>

    <p className='listFeture'>200G BASE-SR4 Ethernet links</p>
    <p className='listFeture'>Data centers</p>
   </div>
   <div className='col-6'>
    <h5>Standards</h5>
    <p className='listFeture'>	IEEE 802.3cd</p>
<p className='listFeture'>	SFF 8679</p>
<p className='listFeture'>	CMIS4.0 or SFF8636</p>
  </div>

  </div>
</div>


</div>

</div>

<div className='container pt-lg-5  pb-lg-5'>
<div className='d-flex felx-wrap justify-content-center'>
       <ul className="nav nav-pills" role="tablist"> 

    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#menu1">Absolute Maximum Ratings</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu2">Recommended Operating Conditions</a>
    </li>
 
  </ul> 
</div>


  <div className="tab-content">


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
          <td>Power Supply Voltage</td>
          <td>Vcc</td>
          <td>-0.3</td>
          <td>3.6</td>
          <td>V</td>
        </tr>

        <tr>
          <td>Input Voltage</td>
          <td>Vin</td>
          <td>-0.3</td>
          <td>Vcc+0.3</td>
          <td>V</td>
        </tr>

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
          <td>°C</td>

        </tr>

        <tr>
          <td>Humidity(non-condensing)</td>
          <td>RH</td>
          <td>10</td>
          <td>85</td>
          <td>%</td>
        </tr>

        <tr>
          <td>Receiver Damage Threshold, each lane</td>
          <td>Pin</td>
          <td>5</td>
          <td></td>
          <td>dBm</td>
        </tr>

        <tr>
          <td>Maximum Power Consumption</td>
          <td>Pmax</td>
          <td></td>
          <td>4</td>
          <td>W</td>
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
          <th>Note</th>


        </tr>
      </thead>
      <tbody>
      <tr>
          <td>Case Operating Temperature</td>
          <td>T<small>case</small></td>
          <td>0</td>
          <td>-</td>
          <td>+70</td>
          <td>°C</td>
          <td>Without air flow</td>

        </tr>
  
     
        <tr>
          <td>Power Supply Voltage</td>

          <td>VCC</td>
          <td>3.135</td>
          <td>3.3</td>
          <td>3.465</td>
          <td>V</td>
          <td></td>
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
  <h1 className='pb-4'>NXOQSFP56 Connector and Pinout Description
</h1>

<p style={{fontSize:"15px"}}>The electrical interface to the transceiver is a 38 pins edge connector. 
The 38 pins provide high speed data, low speed monitoring and control signals, I2C communication, power 
and ground connectivity. The top and bottom views of the
 connector are provided below, as well as a table outlining the contact numbering, symbol and full description.</p>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={connectorImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>
{/* Memory Map Section End */}

{/* Optical Interface section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Optical interface </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={OpticalImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Optical Interface section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Mechanical Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={mechImg} className='img-fluid' alt="memorymapImg"/>
</div>

</div>

{/* Mechanical Dimensions section end */}


<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default G200_QSFP56_SR4;