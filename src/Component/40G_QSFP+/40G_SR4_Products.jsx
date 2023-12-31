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

import productImg1 from '../../img/products/40GQSFP+/200G-DD-SR8.jpeg'



const SR4_40G_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>


<h2 className='pt-5'>200G  QSFP-DD SR8</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SR4_40G_Products/SR4_X1D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
 
  40G QSFP+ SR4 Transceiver Hot Pluggable, MPO / MTP, 850nm VCSEL, MMF 100M, DDM


</h5>

<p>Part Number : NXOQFP-I9-M85-X1D</p>

<h4>Feature's</h4> 
<p>Support InfiniBand QDR
</p>
<p>Hot Pluggable
</p>

<p>MPO-12 receptacle connector

</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SR4_40G_Products/SR4_X1Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
 
  40G QSFP+ SR4 Transceiver Hot Pluggable, MPO / MTP, 850nm VCSEL, MMF 100M, DDM
</h5>

<p>Part Number : NXOQFP-I9-M85-X1Di</p>

<h4>Feature's</h4> 
<p>Support InfiniBand QDR
</p>
<p>Hot Pluggable
</p>

<p>MPO-12 receptacle connector

</p>


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

export default SR4_40G_Products;