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

import productImg1 from '../../img/products/4G_SFP/Dual_4G.jpg';

import productImg4 from '../../img/products/10SFP+/Dual_3.jpg'


const Products_6G_SFP = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>6G SFP+ DUAL</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_6G_SFP/Dual_67_X3D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>
  6.144G SFP+ SR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM3 300M, DDM




</h5>
<p>Part Number : NXOSPP-67-M85-X3D
</p>

<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Hot Pluggable
</p>
<p>Single +3.3V power supply</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_6G_SFP/Dual_67_X3Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>
  6.144G SFP+ SR Transceiver
Hot Pluggable, Duplex LC, 850nm VCSEL, MMF OM3 300M, DDM




</h5>
<p>Part Number : NXOSPP-67-M85-X3Di
</p>

<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Hot Pluggable
</p>
<p>Single +3.3V power supply</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_6G_SFP/Dual_67_02D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>
  6.144G SFP+ LR-Lite Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 2KM, DDM






</h5>
<p>Part Number : NXOSPP-67-S13-02D
</p>

<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Hot Pluggable
</p>
<p>Single +3.3V power supply</p>


</div>

</div>
</Link>

        </div>
    
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_6G_SFP/Dual_67_02Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg4} className='productImg3' alt="img-not-found"/>

<div className='product-dec'>
  <h5>
  6.144G SFP+ LR-Lite Transceiver
Hot Pluggable, Duplex LC, 1310nm FP, SMF 2KM, DDM






</h5>
<p>Part Number : NXOSPP-67-S13-02Di
</p>

<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Hot Pluggable
</p>
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

export default Products_6G_SFP;