import React from 'react';

import productImg1 from '../../../img/products/industrialSwitches/POESwitches/IGS-800C-8PH.jpeg';

import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

// import Application from '../../../img/products/industrialSwitches/POESwitches/IGS-600-4PH24-Application.jpeg'
import dime1 from '../../../img/products/industrialSwitches/POESwitches/IGS-800C-8PH-Dimenssion.jpeg';
// import dime2 from '../../../img/products/industrialSwitches/POESwitches/IGS-600-4PH24-Dimenssion-2.jpeg';

import { BsCartCheck } from 'react-icons/bs';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { MdSecurity } from 'react-icons/md';

import { Link } from 'react-router-dom';


// photo swaping 
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import EnquireForm from '../../EnquireForm';


const IGS_800C_8PH = () => {

    let PartNumber = "IGS-800C-8PH";
    let productName ="8x GbE RJ45 with 8x PoE, Low profile size 240W, 48VDC";

    
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
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt="lightBox-img"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img'  alt="lightBox-img"/>
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="lightBox-img" />
      )}
    </Item>

    <Item
      original={productImg1}
      thumbnail={productImg1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={productImg1} className='lightbox-img' alt="lightBox-img" />
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
<p style={{fontWeight:"500"}}><LiaWarehouseSolid/> In Stock</p>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<p style={{fontWeight:"500"}}><MdSecurity/> Test Support</p>
</div>

<h5 className='pt-4'>Features</h5>

<p className='listFeture '>48VDC (44~57VDC) redundant dual input power</p>
<p className='listFeture'> Provides 8-port IEEE 802.3at/af PoE+ output, 30W/per port, total 240W</p>
<p className='listFeture'>48VDC (44~57VDC) redundant dual input power</p> 
<p className='listFeture'> Supports flow control</p>
<p className='listFeture'> Jumbo frame support</p>
<p className='listFeture'> Supports DIN Rail or wall mounting installation</p>
<p className='listFeture'>Wide operating temperature -40 ~ 70°C ("E" model)</p> 


<h5 className='pt-4'>Specifications</h5>
<div className='container-fluid'>
<div className='row'>
 <div className='col-lg-6'>
 <h5 style={{fontWeight:"500", fontSize:"16px"}} className='pt-3'>IEEE Standard</h5>

 <p className='listFeture '>IEEE 802.3 10Base-T Ethernet</p>
<p className='listFeture '>IEEE 802.3u 100Base-TX Fast Ethernet</p>
<p className='listFeture '>IEEE 802.3ab 1000Base-T Gigabit Ethernet</p>
<p className='listFeture '>IEEE 802.3x Flow Control and Back Pressure</p>
<p className='listFeture '>IEEE 802.3af PoE (Power over Ethernet)</p>
<p className='listFeture '>IEEE 802.3at PoE+ (Power over Ethernet enhancements)</p>
 </div>


 <div className='col-lg-6'>

<h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>LED</h5>
<p className='listFeture'>Per unit: Power 1 (Green), Power 2 (Green)
</p>

<p className='listFeture'>Per port:10/100 Link/Active (Green)<br/>
1000 Link/Active (Amber)
</p>

<p className='listFeture'>
Per Port PoE LED<br/>
 Active : ON<br/>
Inactive : OFF<br/>

</p>



</div>

   <div className='col-lg-6'>
      <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Cable </h5>


      <p className='listFeture'>  UTP/STP above Cat. 5e cable</p>
      <p className='listFeture'>EIA/TIA-568 100-ohm (100meter)</p>

   </div>


   <div className='col-lg-6'>
 <h5 style={{fontWeight:"500" , fontSize:"16px"}} className='pt-3'>Network Connector</h5>

   <p className='listFeture'>8x RJ-45 10/100/1000Base-T auto negotiation 
speed, Auto MDI/MDI-X function, Full/Half duplex </p>

 </div>
</div>
</div>


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
  
 <p>These models are 6 port unmanaged industrial grade Gigabit PoE switches with 4x 10/100/1000Base-T PoE ports that provide stable 
and reliable Ethernet transmission. Housed in rugged DIN rail or wall mountable enclosures, these switches are designed for harsh 
environments, such as industrial networking, security automation applications, IP Surveillance, intelligent transportation systems (ITS) 
and are also suitable for many military and utility market applications where environmental conditions exceed commercial product 
specifications (See figure 1). Standard operating temperature range models (-10 to 60°C) and wide operating temperature range 
models (-40 to 75°C) fulfill the special needs of industrial automation applications. 
</p>
</div>
</div>

  </div>
</div>

{/* Memory Map Section Start */}
{/* <div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Application</h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={Application} className='img-fluid' alt="memorymapImg"/>
</div>
    
</div> */}


{/* Mechanical Dimensions section start */}

<div className='container pt-lg-2 pb-lg-5 pt-2 pb-2'>
  <h1 className='pb-4'>Dimensions </h1>

<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime1} className='img-fluid' alt="Transceiver Block Diagram"/>
</div>
<br/>
{/* <br/>
<div className='d-flex justify-content-center' style={{width:"100%"}}>
<img src={dime2} className='img-fluid' alt="Diagram"/>
</div> */}

</div>
{/* Mechanical Dimensions section end */}



<Footer/>
{/* --------------------------------------------------------------------------------------------------------- */}
<EnquireForm pathNum={PartNumber} productN={productName}></EnquireForm>

    </>
  )
}

export default IGS_800C_8PH;
