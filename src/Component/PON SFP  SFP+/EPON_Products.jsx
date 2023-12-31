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

import productImg1 from '../../img/products/PON SFP  SFP+/EPON_Img.jpg';


const EPON_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>10G EPON</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_Products/EPON_10G_SFP" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  XGPON Asymmetric OLT SFP+ Transceiver
Hot Pluggable, Bidi SC, Tx1577nm EML / Rx1270nm APD, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSPP-H2-PE2-20P</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Simplex SC/UPC connector</p>
<p>Single +3.3V power supply</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/EPON_Products/EPON_10G_SFPi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  XGPON Asymmetric OLT SFP+ Transceiver
Hot Pluggable, Bidi SC, Tx1577nm EML / Rx1270nm APD, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSPP-H2-PE2-20Pi</p>
<h4>Feature's</h4> 
<p>Compliant with SFP MSA</p>
<p>Simplex SC/UPC connector</p>
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

export default EPON_Products;