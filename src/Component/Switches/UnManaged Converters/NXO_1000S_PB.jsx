import React from 'react';

import productImg1 from '../../../img/products/Switches/NXO-1000S.jpg.png'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import dime1 from '../../../img/products/Switches/Dimension_1000S.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';
import EnquireForm from '../../EnquireForm';

const NXO_1000S_PB = () => { 

  let PartNumber = "NXO-1000S-PB";
  let productName ="1x GbE RJ45 to 100/1000Base-X SFP with IEEE802.3bt PoE PSE (90W)";

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

     <p className='listFeture'> Provides IEEE 802.3af/at/bt Type 4 PoE output (Up to 90W)
 </p>
     <p className='listFeture'>   Supports DIP SW for setting LFPT, Store & Forward or Pass through mode, and SFP speed
 </p>
   
<h5 className='pt-5'>Applications</h5>

<p className='listFeture'>    Supports LFPT (Link Fault Pass Through)
</p>
 <p className='listFeture'>    Support Store & Forward, or Pass through mode
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
  
 <p>{PartNumber} is a 10/100/1000Base-T to 100/1000Base-X GbE media converter which not only offers dual-speed fixed fiber transceiver  or SFP cage module options for the optical interface, but also injects IEEE802.3af/at/bt PoE++ power through the electrical RJ-45 port.  Housed in rugged DIN rail or wall mountable enclosures, NXO-1000S-PB Converter is designed for harsh environments, such as IP  surveillance, industrial networking, intelligent transportation systems (ITS) and is also suitable for many military and utility market  applications where environmental conditions exceed commercial product specifications.



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

export default NXO_1000S_PB;