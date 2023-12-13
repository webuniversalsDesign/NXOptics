import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerImg from '../../img/products/productbanner.jpg'
import bannerImg2 from '../../img/products/productbanner2.jpg'
import Navbar from '../../Navbar'
import Footer from '../../Footer';
import EnquireForm from '../EnquireForm';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import productImg1 from '../../img/products/10G SFP+/c27_20D.jpg'




const SFP_PLUS_DUAL_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>8GFC SFP+ DUAL</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_PLUS_DUAL_Products/SFP_8GFC_ELR" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>
 
  10G SFP+ BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 20KM, DDM


</h5>

<p>Part Number : NXOSPP-87-S13-30DM</p>

<h4>Feature's</h4> 
<p>Compliant with SFF-8431 SFP+ MSA 
</p>
<p>1310nm DFB laser transmitter
</p>

<p>Duplex LC connector

</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_PLUS_DUAL_Products/SFP_8GFC_ELRi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>
 
  10G SFP+ BX(BR)-U Transceiver
Hot Pluggable, Bidi LC, Tx1270nm DFB / Rx1330nm, SMF 20KM, DDM


</h5>

<p>Part Number : NXOSPP-87-S13-30DMi</p>

<h4>Feature's</h4> 
<p>Compliant with SFF-8431 SFP+ MSA 
</p>
<p>1310nm DFB laser transmitter
</p>

<p>Duplex LC connector

</p>


</div>


</div>
</Link>

        </div>

      </div>
</div>

<EnquireForm/>

<Footer/>
    </>
  )
}

export default SFP_PLUS_DUAL_Products;