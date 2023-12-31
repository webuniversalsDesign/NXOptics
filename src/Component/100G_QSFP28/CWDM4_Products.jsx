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

import productImg1 from '../../img/products/100G QSFP28/CWDM4_02D.png';


const CWDM4_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>


<h2 className='pt-5'>QSFP28-100G-BIDI-4WDM-20</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM4_Products/CWDM4_02D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>100G QSFP28 CWDM4 Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 2KM, DDM
</h5>
<p>Part Number : NXOQ28-K7-C13-02D</p>
<h4>Feature's</h4>
<p>CWDM DFB transmitter</p>
<p>Single 3.3V power supply</p>
<p>Maximum Power consumption 3.5W</p>
</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/CWDM4_Products/CWDM4_13D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>100G QSFP28 CWDM4 Transceiver
Hot Pluggable, Duplex LC, CWDM DFB, SMF 10KM, DDM
</h5>
<p>Part Number : NXOQ28-K7-C13-10D</p>
<h4>Feature's</h4>
<p>Compliant with 100GBASE-CWDM4</p>
<p>4CH CWDM MUX / DEMUX design</p>
<p>CWDM DFB transmitter</p>
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

export default CWDM4_Products;