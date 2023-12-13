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

import productImg1 from '../../../img/products/Fiber Optical Cable/AOC/QSFP28.jpg'
import productImg2 from '../../../img/products/Fiber Optical Cable/AOC/QPSP2.jpg';
// import productImg3 from '../../../img/products/Fiber Optical Cable/AOC/QPSP.jpg';


const Products_100G_QSFP28 = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>100G QSFP28 AOC</h2>

      <div className='row pt-5  pb-5'>

      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_100G_QSFP28/QSFP28_QPQP_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  100G QSFP28 Active Optical Cable ( AOC )
Hot Pluggable, 850nm VCSEL, MMF 1~100M, DDM


</h5>
<p>Part Number : NXOAOC-A0G-QPQP-xxx-xx
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
        <Link to="/Products_100G_QSFP28/QSFP28_QPSP_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  100G QSFP28 to 4x25G SFP28 Breakout Active Optical Cable ( AOC ) Hot Pluggable, 850nm VCSEL, MMF 1~100M, DDM
s


</h5>
<p>Part Number : NXOAOC-A0G-QPSP-xxx-xx
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

export default Products_100G_QSFP28;