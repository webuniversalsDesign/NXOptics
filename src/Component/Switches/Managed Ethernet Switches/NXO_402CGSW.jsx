import React from 'react';

import productImg1 from '../../../img/products/Switches/managed ethernet switches/NXO-402CGSW.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Switches/Layer3_NOX-G24044X_Application.png';
import dime1 from '../../../img/products/Switches/NXO_402CGSW_Dimenssion.png';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';
import EnquireForm from '../../EnquireForm';

const NXO_402CGSW = () => { 

  let PartNumber = "NXO-402CGSW";
  let productName ="4x FE RJ45 + 2x 100/1000 SFP, Compact size";



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

<p className='listFeture'>Redundant power input</p>
<p className='listFeture'>Cable diagnostics</p>
<p className='listFeture'>Supports SmartView™ for Centralized Management*</p>


<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>4KV surge protection for UTP and SFP ports</p>
<p className='listFeture'>Compact size for easy installation</p> 
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
  
 <p>{PartNumber} is a managed industrial grade L2 switch with 4 10/100Base-TX ports and 2
  GbE/100M SFP ports. Housed in  rugged DIN rail or wall mountable enclosures, the switch is 
  designed for harsh environments, such as industrial networking. It is  an ideal solution for 
  Smart City, surveillance, Intelligent traffic control systems, production automation applications. 
  Standard  operating temperature range models (-10 to 60°C) and wide operating temperature range models 
  (-40 to 75°C) fulfill the  special needs of industrial automation applications.


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



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default NXO_402CGSW;