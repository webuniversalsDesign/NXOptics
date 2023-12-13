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

import productImg1 from '../../../img/products/Fiber Optical Cable/AOC/Q5Q5.jpg'
import productImg2 from '../../../img/products/Fiber Optical Cable/AOC/Q6Q6.jpg';
import productImg3 from '../../../img/products/Fiber Optical Cable/AOC/Q6Q62.jpg';


const Products_200G_QSFP56 = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>200G QSFP56 AOC</h2>

      <div className='row pt-5  pb-5'>

      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_200G_QSFP56/QSFP56_Q5Q5_200G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3'  alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  200G QSFP56 Active Optical Cable ( AOC )
Hot Pluggable, 850nm VCSEL, MMF OM4 1~100M, DDM



</h5>
<p>Part Number : NXOAOC-B0G-Q5Q5-xxx-xx
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
        <Link to="/Products_200G_QSFP56/QSFP56_Q6Q5_200G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  200G QSFP56 to 2x100G QSFP56 Active Optical Cable ( AOC ) Hot Pluggable, 850nm VCSEL, MMF 1~100M, DDM</h5>
<p>Part Number : NXOAOC-B0G-Q6Q5-xxx-xx
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
        <Link to="/Products_200G_QSFP56/QSFP56_Q6Q6_200G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg3} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  200G QSFP56 Active Optical Cable ( AOC )
Hot Pluggable, 850nm VCSEL, MMF 1~100M, DDM




</h5>
<p>Part Number : NXOAOC-B0G-Q6Q6-xxx-xx
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

export default Products_200G_QSFP56;