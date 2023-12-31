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

import productImg1 from '../../img/products/25G SFP28/LWDM_25G.jpg';
// import productImg2 from '../../img/products/25G SFP28/SFP_BX10_33Img.jpg';




const SFP28_25G__LWDM_products = () => {
  return (
    <>
<Navbar/>
<div className='container leave-navbar'>



<h2 className='pt-5'>25G SFP28 LWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_25G__LWDM_products/LWDM_25G_40KM" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>25G SFP28 LWDM Transceiver
Hot Pluggable, Duplex LC, 800GHz LWDM EML, SMF 40KM, DDM
</h5>
<p>Part Number : NXOSPP-N7-Lxx-40DQ</p>
<h4>Feature's</h4>
<p>Maximum Power consumption 2.3W</p>
<p>APD Receiver</p>
<p>Link distance 40km over SM fiber</p>
</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_25G__LWDM_products/LWDM_25G_40KM_DuelRate" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>10G / 25G SFP28 LWDM Transceiver
Hot Pluggable, Duplex LC, 800GHz LWDM EML, SMF 40KM, DDM
</h5>
<p>Part Number : NXOSPP-N7-Lxx-40DR</p>
<h4>Feature's</h4>
<p>Maximum Power consumption 2.3W</p>
<p>Duplex LC connector</p>
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

export default SFP28_25G__LWDM_products;