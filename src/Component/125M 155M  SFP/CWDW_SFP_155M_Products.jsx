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

import productImg1 from '../../img/products/2.5_SFP/CWDM_2.5G.jpg';


const CWDW_SFP_155M_Products = () => {
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
          <img src={bannerImg} className='banner_img2' alt='img-not-found'/>
          <p className='banner-heading'>Find the Right Product Quicker</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={bannerImg2} className='banner_img2' alt='img-not-found'/>
          <p className='banner-heading'>Revolute Your Wireless Experience with Wi-Fi Solution</p>
        </SwiperSlide>
      
      </Swiper>


<h2 className='pt-5'>125M/155M SFP CWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDW_SFP_155M_Products/CWDW_SFP_b30D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 30dB(80~100KM), DDM


</h5>
<p>Part Number : NXOSFP-A7-Cxx-b30D</p>
<h4>Feature's</h4> 
<p>Hot Pluggable</p>

<p>Link budget 30dB over SM fiber
</p>
<p>RoHS Compliant
</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDW_SFP_155M_Products/CWDW_SFP_b30Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 30dB(80~100KM), DDM


</h5>
<p>Part Number : NXOSFP-A7-Cxx-b30Di</p>
<h4>Feature's</h4> 
<p>Hot Pluggable</p>

<p>Link budget 30dB over SM fiber
</p>
<p>RoHS Compliant
</p>


</div>

</div>
</Link>

        </div>

        
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDW_SFP_155M_Products/CWDW_SFP_b34D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 34dB(100~120KM), DDM
</h5>
<p>Part Number : NXOSFP-A7-Cxx-b34D</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply
</p>
<p>Link budget 34dB over SM fiber
</p>
<p>RoHS Compliant
</p>
</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDW_SFP_155M_Products/CWDW_SFP_b34Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 34dB(100~120KM), DDM
</h5>
<p>Part Number : NXOSFP-A7-Cxx-b34Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply
</p>
<p>Link budget 34dB over SM fiber
</p>
<p>RoHS Compliant
</p>
</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDW_SFP_155M_Products/CWDW_SFP_b36D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 36dB(120~140KM), DDM

</h5>
<p>Part Number : NXOSFP-A7-Cxx-b36D</p>
<h4>Feature's</h4> 
<p>Hot Pluggable</p>
<p>Single +3.3V power supply
</p>
<p>Link budget 36dB over SM fiber
</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDW_SFP_155M_Products/CWDW_SFP_b36Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  125M / 155M SFP CWDM Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 36dB(120~140KM), DDM

</h5>
<p>Part Number : NXOSFP-A7-Cxx-b36Di</p>
<h4>Feature's</h4> 
<p>Hot Pluggable</p>
<p>Single +3.3V power supply
</p>
<p>Link budget 36dB over SM fiber
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

export default CWDW_SFP_155M_Products;