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

import productImg1 from '../../img/products/40G-ER4/40G_ER4.jpg'



const Product_40G_ER4 = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>QSFP+ 40G-ER4</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Product_40G_ER4/ER4_40D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>40G QSFP+ LR4 Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 10KM, DDM
</h5>
<p>Part Number : NXOQFP-I7-C13-40D</p>
<h4>Feature's</h4>
<p>Supports QDR / DDR InfiniBand</p>
<p>CWDM DFB array transmitter </p>
<p>Maximum Power consumption 4.5W</p>

</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Product_40G_ER4/ER4_40Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>40G QSFP+ LR4 Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 10KM, DDM
</h5>
<p>Part Number : NXOQFP-I7-C13-40Di</p>
<h4>Feature's</h4>
<p>Supports QDR / DDR InfiniBand</p>
<p>CWDM DFB array transmitter </p>
<p>Maximum Power consumption 4.5W</p>

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

export default Product_40G_ER4