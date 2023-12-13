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

import productImg1 from '../../img/products/125M 155M  SFP/DWDM_SFP.jpg';
// import productImg2 from '../../img/products/PON SFP  SFP+/GPON_PG4_20B.jpg';
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

// import productImg3 from '../../img/products/1.25G SFP/SFP_Dual_50D.jpg'
// import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'



const DWDM_SFP_115M_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>125M/155M SFP DWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/DWDM_SFP_115M_Products/DWDM_SFP_BOD" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  125M / 155M DWDM SFP Transceiver Hot Pluggable, Duplex LC, DWDM DFB, SMF 200KM(46dB), DDM
</h5>
<p>Part Number : NXOSFP-A7-Dxx-B0D</p>
<h4>Feature's</h4> 
<p>Link distance 200km(46dB) over SM fiber</p>
<p>Maximum Power consumption 1.5W</p>
<p>Single +3.3V power supply</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/DWDM_SFP_115M_Products/DWDM_SFP_M13_05Bi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  125M / 155M DWDM SFP Transceiver Hot Pluggable, Duplex LC, DWDM DFB, SMF 200KM(46dB), DDM
</h5>
<p>Part Number : NXOSFP-A7-Dxx-B0Di</p>
<h4>Feature's</h4> 
<p>Link distance 200km(46dB) over SM fiber</p>
<p>Maximum Power consumption 1.5W</p>
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

export default DWDM_SFP_115M_Products;