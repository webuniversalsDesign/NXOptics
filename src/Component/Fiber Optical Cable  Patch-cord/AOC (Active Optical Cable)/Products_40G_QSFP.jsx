import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerImg from '../../../img/products/productbanner.jpg'
import bannerImg2 from '../../../img/products/productbanner2.jpg'
import Navbar from '../../../Navbar';
import Footer from '../../../Footer';

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import productImg1 from '../../../img/products/Fiber Optical Cable/AOC/QPDP.jpg';
import productImg2 from '../../../img/products/Fiber Optical Cable/AOC/10G_SPSP.jpg';
import productImg3 from '../../../img/products/Fiber Optical Cable/AOC/QPSP.jpg';

const Products_40G_QSFP = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>40G QSFP+ AOC</h2>

      <div className='row pt-5  pb-5'>

      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_40G_QSFP/QSFP_40G_QPDP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  40G QSFP+ to 4xDLC Breakout Active Optical Cable ( AOC ) Hot Pluggable, 850nm VCSEL, MMF 1~100M, DDM

</h5>
<p>Part Number : NXOAOC-40G-QPDP-xxx-xx
</p>

<h4>Feature's</h4> 

<p>Hot Pluggable

</p>

<p>Single 3.3V power supply

</p>
<p>RoHS Compliant
</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_40G_QSFP/QSFP_QPQP_40G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  D40G QSFP+ Active Optical Cable ( AOC )
Hot Pluggable, 850nm VCSEL, MMF 1~150M, DDM


</h5>
<p>Part Number : NXOAOC-40G-QPQP-xxx-xx
</p>

<h4>Feature's</h4> 

<p>Hot Pluggable

</p>

<p>Single 3.3V power supply

</p>
<p>RoHS Compliant
</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_40G_QSFP/QSFP_QPSP_40G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  40G QSFP+ to 4xSFP+ Breakout Active Optical Cable ( AOC ) Hot Pluggable, 850nm VCSEL, MMF 1~150M, DDM



</h5>
<p>Part Number : NXOAOC-40G-QPSP-xxx-xx
</p>

<h4>Feature's</h4> 

<p>Hot Pluggable

</p>

<p>Single 3.3V power supply

</p>
<p>RoHS Compliant
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

export default Products_40G_QSFP;