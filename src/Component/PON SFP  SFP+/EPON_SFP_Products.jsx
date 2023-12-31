import React  from 'react';
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


const EPON_SFP_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>1.25G EPON SFP</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_SFP_Products/EPON_PE3_201" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  EPON ONU PX20+ 1.25G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1310nm FP / Rx1490nm PIN-TIA, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-C2-PE3-201</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Link distance 20km over SM fiber</p>
<p>RoHS Compliant</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_SFP_Products/EPON_PE3_201i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  EPON ONU PX20+ 1.25G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1310nm FP / Rx1490nm PIN-TIA, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-C2-PE3-201i</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Link distance 20km over SM fiber</p>
<p>RoHS Compliant</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_SFP_Products/EPON_PE4_201" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  EPON OLT PX20+ 1.25G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-C2-PE4-201</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Simplex SC/UPC connector</p>
<p>1.25 Gbps Burst mode receiver</p>


</div>


</div>
</Link>

        </div>

        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_SFP_Products/EPON_PE4_201i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  EPON OLT PX20+ 1.25G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM
</h5>
<p>Part Number : NXOSFP-C2-PE4-201i</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Simplex SC/UPC connector</p>
<p>1.25 Gbps Burst mode receiver</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_SFP_Products/EPON_PE4_202" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  EPON OLT PX20++ 1.25G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSFP-C2-PE4-202</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>1490 nm DFB laser transmitter</p>
<p>Simplex SC/UPC connector</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_SFP_Products/EPON_PE4_203" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  EPON OLT PX20+++ 7dBm 1.25G-Tx / 1.25G-Rx SFP Transceiver
Hot Pluggable, Bidi SC, Tx1490nm DFB / Rx1310nm APD, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSFP-C2-PE4-203</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>1.25 Gbps Burst mode receiver</p>
<p>Single +3.3V power supply</p>


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

export default EPON_SFP_Products;