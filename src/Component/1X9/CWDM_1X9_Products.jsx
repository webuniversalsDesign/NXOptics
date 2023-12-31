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

import productImg1 from '../../img/products/1X9/1X9_CWDW.jpg'


const CWDM_1X9_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>125/155M 1X9 CWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_b31P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-Ax-Cxx-b31P</p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_b31Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-Ax-Cxx-b31Pi</p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_A3_b31P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-A3-Cxx-b31P </p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_A3_b31Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-A3-Cxx-b31Pi</p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>


</div>
</Link>

        </div>


        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_AM_b31P" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-AM-Cxx-b31P </p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM_1X9_Products/CWDW_1X9_AM_b31Pi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>1.25G 1X9 1000BASE-SX Transceiver Duplex SC, 850nm VCSEL, MMF 550M, LVPECL / PECL Signal Detection
</h5>
<p>Part Number : NXO1X9-AM-Cxx-b31Pi </p>
<h4>Feature's</h4>
<p>Compatible with 100BASE-ZX</p>
<p>CWDM DFB laser transmitter</p>
<p>Link budget 31dB over SM fiber</p>


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

export default CWDM_1X9_Products;