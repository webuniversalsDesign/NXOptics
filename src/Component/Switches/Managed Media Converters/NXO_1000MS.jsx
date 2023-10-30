import React from 'react';

import productImg1 from '../../../img/products/Switches/NOX-1000MS.png'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/Switches/Layer3_NOX-G24044X_Application.png';
import dime1 from '../../../img/products/Switches/NOX-1000MS-dimenssion.png';


import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';
import EnquireForm from '../../EnquireForm';

const NXO_1000MS = () => { 

  let PartNumber = "NXO-1000MS";
  let productName ="1x GbE RJ45 to 1x 100/1000Base SFP";

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

<p className='listFeture'>eCoanvteursiroen bsetween 10/100/1000Base-T and 100/1000Base-X Fiber cable interface</p>
<p className='listFeture'>Supports Dual Rate (100/1000) SFP for selectable Fast or Gigabit speed on fiber</p>
<p className='listFeture'>Redundant dual DC input power 12/24/48VDC (9.6 ~ 60VDC)</p>
<p className='listFeture'>IP30 rugged metal housing and fanless</p>
<p className='listFeture'>Wide operating temperature -20~75°C (NXO-1000MS-E)</p>
<p className='listFeture'>Supports Digital Diagnostic Monitor Interface (DDMI) for SFP</p>
<p className='listFeture'>Supports SmartView™ for centralized management (Please see Catalog chapter 1- Software Management for more details)</p>
<p className='listFeture'>Web management</p>
<p className='listFeture'>Dying gasp (remote power failure detection)</p>

<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>Supports LFPT (Link Fault Pass Through) and FEF (Far End Fault)</p>
<p className='listFeture'>SNMP, Web based and In-band management</p> 
<p className='listFeture'>Remote Loop-Back test</p> 
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
  
 <p>{PartNumber} is a 10/100/1000Base-T to 100/1000Base-X managed GbE media converter which offers dual speed fiber  (100M/1G) transmission. Housed in rugged DIN rail or wall mountable enclosures, the converter is designed for harsh  environments, such as industrial networking and intelligent transportation systems (ITS) and is also suitable for many military and  utility market applications where environmental conditions exceed commercial product specifications. Standard operating  temperature range models (-10 to 60°C) and wide operating temperature range models (-40 to 75°C) fulfill the special needs of  industrial automation applications.

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

export default NXO_1000MS;