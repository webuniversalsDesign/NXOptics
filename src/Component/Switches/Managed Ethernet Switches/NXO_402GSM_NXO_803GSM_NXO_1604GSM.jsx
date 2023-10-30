import React from 'react';

import productImg1 from '../../../img/products/Switches/managed ethernet switches/NXO-402GSM _ NXO-803GSM _ NXO-1604GSM.jpg'

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import Application from '../../../img/products/Switches/NOX_1604GSM_Appli.png';
import dime1 from '../../../img/products/Switches/NOX_1604GSM_Dimenssion2.png';
import dime2 from '../../../img/products/Switches/NOX_1604GSM_Dimenssion.png';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';
import EnquireForm from '../../EnquireForm';

const NXO_402GSM_NXO_803GSM_NXO_1604GSM = () => { 

  let PartNumber = "NXO-402GSM & NXO-803GSM & NXO-1604GSM";
  let productName1 ="4x 10/100Base RJ45 + 2x 100/1000Base SFP  ";
  let productName2 ="8x 10/100Base RJ45 + 3x 100/1000Base SFP  ";
  let productName3 ="16x 10/100Base RJ45 + 4x 100/1000Base SFP  ";
  let productName ="4x 10/100Base RJ45 + 2x 100/1000Base SFP , 8x 10/100Base RJ45 + 3x 100/1000Base SFP , 16x 10/100Base RJ45 + 4x 100/1000Base SFP";

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
{productName1}
</h4>

<h4>
{productName2}
</h4>

<h4>
{productName3}
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

<p className='listFeture'>Provides 5 instances that each can support μ-Ring, μ-Chain or Sub-Ring type for flexible uses.Supports up to 5 rings in one device (Please  see NXO μ-Ring white paper for more details and more topology application)</p>
<p className='listFeture'>μ-Ring for Redundant Cabling, recovery time{'<10ms'} in 250 devices</p>
<p className='listFeture'>Supports IEEE 1588 PTP V2 for precise time synchronization to operate in Ordinary-Boundary, Peer to Peer Transparent Clock, End to End  Transparent Clock, Master, Slave mode by each port</p>
<p className='listFeture'>Supports SmartView™ for Centralized Management</p>



<h5 className='pt-5'>Applications</h5>
<p className='listFeture'>EN62368-1, CE, FCC certified</p>
<p className='listFeture'>Supports redundant negative voltage input power (NXO-1604GSM)</p> 
<p className='listFeture'>Supports IEEE 1588 PTP V2</p> 
<p className='listFeture'>Supports u-Ring, ERPS, EPS, MSTP, RSTP, STP for redundant  cabling</p> 
<p className='listFeture'>Cable diagnostics, identifies opens/shorts distance</p> 
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
  
 <p>{PartNumber} These models are managed industrial grade L2+ switches with 16/8/4 10/100Base-TX ports and 4/3/2 GbE/100M SFP ports that  provide stable and reliable Ethernet transmission. Housed in rugged DIN rail or wall mountable enclosures, these switches are  designed for harsh environments, such as industrial networking, security automation applications, intelligent transportation systems  (ITS) and are also suitable for many military and utility market applications where environmental conditions exceed commercial  product specifications (See Figure 1). Standard operating temperature range models (-10 to 60°C) and wide operating temperature  range models (-40 to 75°C) fulfill the special needs of industrial automation applications.

</p>
</div>
</div>

  </div>
</div>

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='sectionImg2_6' alt="Application"/>
</div>
<br/>

</div>
{/* Mechanical Dimensions section end */}

{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
</div>
<br/>
<br/>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='sectionImg2_1' alt="Transceiver Block Diagram"/>
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

export default NXO_402GSM_NXO_803GSM_NXO_1604GSM;