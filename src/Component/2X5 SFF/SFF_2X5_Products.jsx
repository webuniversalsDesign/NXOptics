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

import productImg1 from '../../img/products/2X5 SFF/2X5_SFF_img.jpg'


const SFF_2X5_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>


<h2 className='pt-5'>125M/1.25G 2X5 SFF</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFF_2X5_Products/X5TR_2X5_SFF" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5> 
  125M / 1.25G 2x5 SFF 100BASE-SX /1000BASE-SX Dual-Rate Transceiver Duplex LC, 850nm VCSEL, MMF OM2 2KM(100SX) / 550M(1000SX) 
</h5>
<p>Part Number : NXOSF1-C7-M85-X5TR</p>
<h4>Feature's</h4> 
<p>LVTTL Signal Detection Output
</p>


<p>Wave Solderable and Aqueous Washable

</p>
<p>Duplex LC connector
</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFF_2X5_Products/X5TR_2X5_SFFi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5> 
  125M / 1.25G 2x5 SFF 100BASE-SX /1000BASE-SX Dual-Rate Transceiver Duplex LC, 850nm VCSEL, MMF OM2 2KM(100SX) / 550M(1000SX) 
</h5>
<p>Part Number : NXOSF1-C7-M85-X5TRi</p>
<h4>Feature's</h4> 
<p>LVTTL Signal Detection Output
</p>


<p>Wave Solderable and Aqueous Washable

</p>
<p>Duplex LC connector
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

export default SFF_2X5_Products;