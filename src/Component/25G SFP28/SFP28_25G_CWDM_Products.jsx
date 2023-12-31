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

import productImg1 from '../../img/products/25G SFP28/SFP28_CWDM.jpg';
// import productImg2 from '../../img/products/25G SFP28/SFP_BX10_33Img.jpg';


const SFP28_25G_CWDM_Products = () => {
  return (
    <>
<Navbar/>
<div className='container leave-navbar'>


<h2 className='pt-5'>25G SFP28 CWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_25G_CWDM_Products/CWDM_10DQ" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>25G SFP28 CWDM Transceiver Hot Pluggable, Duplex LC, CWDM DFB, SMF 10KM, DDM


</h5>
<p>Part Number : NXOSPP-N7-Cxx-10DQ</p>

<h4>Feature's</h4>
<p>Maximum Power consumption 1.4W</p>
<p>Data Rate up to 25.78Gbps</p>
<p>Duplex LC connector</p>
</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP28_25G_CWDM_Products/CWDM_10DQ_i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>25G SFP28 CWDM Transceiver Hot Pluggable, Duplex LC, CWDM DFB, SMF 10KM, DDM


</h5>
<p>Part Number : NXOSPP-N7-Cxx-10DQi</p>

<h4>Feature's</h4>
<p>Maximum Power consumption 1.4W</p>
<p>Data Rate up to 25.78Gbps</p>
<p>Duplex LC connector</p>
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

export default SFP28_25G_CWDM_Products;