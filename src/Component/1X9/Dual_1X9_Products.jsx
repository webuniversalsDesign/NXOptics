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

import productImg1 from '../../img/products/1X9/1X9_Dual.jpg'


const Dual_1X9_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>
<Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}

        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper pt-lg-5" style={{borderRadius:"10px"}}
      >
        <SwiperSlide>
          <img src={bannerImg} className='banner_img2' alt="img-not-found"/>
          <p className='banner-heading'>Find the Right Product Quicker</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={bannerImg2} className='banner_img2' alt="img-not-found"/>
          <p className='banner-heading'>Revolute Your Wireless Experience with Wi-Fi Solution</p>
        </SwiperSlide>
      
      </Swiper>


<h2 className='pt-5'>1.25G 1X9 DUAL</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_1X9_Products/Dual_1X9_M85_X5P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-C1-M85-X5P</p>
<h4>Feature's</h4>
<p>Industry Standard 1x9 Footprint</p>
<p>1310nm FP laser transmitter</p>
<p>Duplex SC optical connector</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Dual_1X9_Products/Dual_1X9_M85_X5Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-C1-M85-X5Pi</p>
<h4>Feature's</h4>
<p>Industry Standard 1x9 Footprint</p>
<p>1310nm FP laser transmitter</p>
<p>Duplex SC optical connector</p>


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

export default Dual_1X9_Products;