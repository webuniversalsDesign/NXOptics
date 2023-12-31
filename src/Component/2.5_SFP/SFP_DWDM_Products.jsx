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

import productImg1 from '../../img/products/2.5_SFP/SFP_DWDM.jpg'


const SFP_DWDM_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>2.5 SFP DWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_DWDM_Products/DWDM_80km" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G SFP DWDM Transceiver
Hot Pluggable, Duplex LC, DWDM DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-E7-Dxx-80D</p>
<h4>Feature's</h4>
<p>Single +3.3V power supply</p>
<p>Link distance 80km over SM fiber</p>
<p>RoHS compliant</p>
</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_DWDM_Products/DWDM_80km_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G SFP DWDM Transceiver
Hot Pluggable, Duplex LC, DWDM DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-E7-Dxx-80Di</p>

<h4>Feature's</h4>
<p>Cooled DWDM DFB laser transmitter</p>
<p>Link distance 80km over SM fiber</p>
<p>RoHS compliant</p>
</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_DWDM_Products/DWDM_120km" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G SFP DWDM Transceiver
Hot Pluggable, Duplex LC, DWDM DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-E7-Dxx-A2D</p>

<h4>Feature's</h4>
<p>Cooled DWDM DFB laser transmitter</p>
<p>Link distance 120km over SM fiber</p>
<p>RoHS compliant</p>
</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_DWDM_Products/DWDM_120km_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G SFP DWDM Transceiver
Hot Pluggable, Duplex LC, DWDM DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-E7-Dxx-A2Di</p>

<h4>Feature's</h4>
<p>Cooled DWDM DFB laser transmitter</p>
<p>APD receiver</p>
<p>RoHS compliant</p>
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

export default SFP_DWDM_Products;