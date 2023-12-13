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

import productImg1 from '../../img/products/1X9/ultra.jpg'
// import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
// import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
// import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'


const Ultra_row_1X9_DC = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>Ultra-Low Data-Rate 1X9</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Ultra_row_1X9_DC/Ultra_02B" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>Ultra-Low Data-Rate 1X9 DC~10Mbps Transceiver
Duplex Plastic ST, 850nm VCSEL, MMF 2KM, LVTTL / TTL Signal Detection

</h5>
<p>Part Number : NXO1X9-05-M85-02B</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex Plastic ST connector</p>
<p>Single 3.3V or 5V Power Supply</p>

</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Ultra_row_1X9_DC/Ultra_02Bi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>Ultra-Low Data-Rate 1X9 DC~10Mbps Transceiver
Duplex Plastic ST, 850nm VCSEL, MMF 2KM, LVTTL / TTL Signal Detection

</h5>
<p>Part Number : NXO1X9-05-M85-02Bi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex Plastic ST connector</p>
<p>Single 3.3V or 5V Power Supply</p>

</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Ultra_row_1X9_DC/Ultra_05B" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>Ultra-Low Data-Rate 1X9 DC~10Mbps Transceiver
Duplex Plastic ST, 1310nm FP, MMF 5KM, LVTTL / TTL Signal Detection


</h5>
<p>Part Number : NXO1X9-05-M13-05B</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex Plastic ST connector</p>
<p>Single 3.3V or 5V Power Supply
</p>
</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Ultra_row_1X9_DC/Ultra_05Bi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>Ultra-Low Data-Rate 1X9 DC~10Mbps Transceiver
Duplex Plastic ST, 1310nm FP, MMF 5KM, LVTTL / TTL Signal Detection


</h5>
<p>Part Number : NXO1X9-05-M13-05Bi</p>
<h4>Feature's</h4>

<p>Industry Standard 1x9 Footprint</p>
<p>Duplex Plastic ST connector</p>
<p>Single 3.3V or 5V Power Supply
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

export default Ultra_row_1X9_DC;