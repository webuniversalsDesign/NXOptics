import React from 'react';

import productImg1 from '../../../img/products/Switches/NXO-1000S_PH.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Switches/Application.jpeg';
// import Application2 from '../../../img/products/Switches/Application2.jpeg';
import dime1 from '../../../img/products/Switches/1001S_PH_dimension.jpg';


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';
import EnquireForm from '../../EnquireForm';

const NXO_1001S_PH = () => { 

  let PartNumber = "NXO-1001S-PH";
  let productName ="1x GbE RJ45 to 1x 100/1000Base SFP with PoE PSE (30W)";

  
  return (
<>
    <Navbar/>

<div className='product-struct'>
<div className='productImgLightBox'>

<div className='LightBox'>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={productImg1} className='img-main2' alt="product-40GLoobBack"/>

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
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5>Features</h5>

   <p className='listFeture'> Conversion between 10/100/1000Base-T and 100/1000Base-X Fiber cable interface </p>
  <p className='listFeture'>  Supports dual rate (100/1000) SFP for selectable Fast or Gigabit speed on fiber </p>
  <p className='listFeture'>  Provides IEEE 802.3at PoE output (30Watts) </p>
  <p className='listFeture'>  Provides a DIP-Switch to set functions </p>
 <p className='listFeture'>   IP30 rugged metal housing and fanless </p>
   <p className='listFeture'> Wide operating temperature -20~70°C (NXO-1001S-PHE) </p>
  <p className='listFeture'>  Supports Jumbo frame 9K bytes packet </p>

   
<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>  CE, FCC certified

</p>
    <p className='listFeture'>   Supports LFPT (Link Fault Pass Through) and FEF (Far End Fault)
</p>

</div>


</div> 

<div className='container pt-lg-5  pb-lg-5'>
<div className='resp-overflow'>
    <div className='d-flex justify-content-center'>
       <ul className="navs nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Overview</a>
    </li>

  </ul> 
</div>
</div>



  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br/>
    <div className="container mt-3">
  <h2>Overview</h2>
  
 <p>The industrial grade unmanaged Gigabit PoE media converter, NXO-1001S-PH supports conversion between  electrical 10/100/1000Base-T and optical 1000Base-X Ethernet and as PSE (Power Source Equipment) provides PoE+/PoE power  over Ethernet. The NXO-1001S-PH utilizes an SFP cage for 100/1000Base-X compatible SFP modules. Housed in rugged DIN rail or  wall mountable enclosures, the converter is designed for harsh environments, such as industrial networking, intelligent  transportation systems (ITS) and is also suitable for many military and utility market applications where environmental conditions  exceed commercial product specifications.


</p>
</div>
</div>

  </div>
</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>

</div>
{/* Mechanical Dimensions section end */}
{/* 
<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application </h1>
  <h3 className='pb-4'>High efficiency boost technology for PoE
 </h3>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<h3 className='pb-4'>Remote PD Reset Application
 </h3>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application2} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>

</div> */}

<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default NXO_1001S_PH;