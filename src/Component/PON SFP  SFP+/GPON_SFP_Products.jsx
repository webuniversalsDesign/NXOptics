import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerImg from '../../img/products/productbanner.jpg'
import bannerImg2 from '../../img/products/productbanner2.jpg'
import Navbar from '../../Navbar'
import Footer from '../../Footer';

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import productImg1 from '../../img/products/PON SFP  SFP+/GPON_PG3_20BImg.jpg';
import productImg2 from '../../img/products/PON SFP  SFP+/GPON_PG4_20B.jpg';


const GPON_SFP_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>


<h2 className='pt-5'>2.5G GPON SFP</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/GPON_SFP_Products/GPON_PG3_20B" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  GPON ONU B+ 1.244G-Tx / 2.488G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1310nm DFB / Rx1490nm APD, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSPP-Cx-PG3-20B</p>
<h4>Feature's</h4> 
<p>Transmitter state indication (TX_SD)</p>
<p>Link distance 20km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/GPON_SFP_Products/GPON_PG3_20Bi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  GPON ONU B+ 1.244G-Tx / 2.488G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1310nm DFB / Rx1490nm APD, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSPP-Cx-PG3-20Bi</p>
<h4>Feature's</h4> 
<p>Transmitter state indication (TX_SD)</p>
<p>Link distance 20km over SM fiber</p>
<p>RoHS Compliant</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/GPON_SFP_Products/GPON_PG4_20B" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  GPON OLT B+ 2.5G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSPP-E2-PG4-20B</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>1244 Mbps Burst mode receiver</p>
<p>1490nm DFB laser transmitter</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/GPON_SFP_Products/GPON_PG4_20Bi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  GPON OLT B+ 2.5G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSPP-E2-PG4-20Bi</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>1244 Mbps Burst mode receiver</p>
<p>1490nm DFB laser transmitter</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/GPON_SFP_Products/GPON_PG4_201" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  GPON OLT C+ 2.5G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSPP-E2-PG4-201</p>
<h4>Feature's</h4> 
<p>1310nm APD-TIA receiver</p>
<p>1244 Mbps Burst mode receiver</p>
<p>Link distance 20km over SM fiber</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/GPON_SFP_Products/GPON_PG4_201i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  GPON OLT C+ 2.5G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSPP-E2-PG4-201i</p>
<h4>Feature's</h4> 
<p>1310nm APD-TIA receiver</p>
<p>1244 Mbps Burst mode receiver</p>
<p>Link distance 20km over SM fiber</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/GPON_SFP_Products/GPON_PG4_202" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  GPON OLT C++ 2.5G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSPP-E2-PG4-202</p>
<h4>Feature's</h4> 
<p>1310nm APD-TIA receiver</p>
<p>1244 Mbps Burst mode receiver</p>
<p>Link distance 20km over SM fiber</p>


</div>
</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/GPON_SFP_Products/GPON_PG4_203" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  GPON OLT C+++ 7dBm 2.5G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSPP-E2-PG4-203</p>
<h4>Feature's</h4> 
<p>1310nm APD-TIA receiver</p>
<p>Link distance 20km over SM fiber</p>
<p>Min Output Power +7dBm</p>


</div>
</div>
</Link>

        </div>

      </div>
</div>



<Footer/>
    </>
  )
}

export default GPON_SFP_Products;