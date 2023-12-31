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

import productImg1 from '../../img/products/RJ45 Copper Series/SFP_100Tx_1.jpg';




const SFP_100T_Products = () => {
  return (
    <>
<Navbar/>
<div className='container leave-navbar'>



<h2 className='pt-5'>SFP 100TX</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_100Tx_Products/SFP_100Tx_T01_X1" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>1.25G SFP-10/100/1000T Transceiver Hot Pluggable, RJ-45, Active Copper SFP
</h5>
<p>Part Number : NXOSFP-AJ-T01-X1</p>
<h4>Feature's</h4>
<p>Support RX_LOS function</p>

<p>Auto-detect MDI/MDI-X</p>

<p>RJ-45 connector</p>

</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_100Tx_Products/SFP_100Tx_T01_X1i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>1.25G SFP-10/100/1000T Transceiver Hot Pluggable, RJ-45, Active Copper SFP
</h5>
<p>Part Number : NXOSFP-AJ-T01-X1i</p>
<h4>Feature's</h4>

<p>I2C 2-wire interface for serial ID


</p>
<p>Auto-detect MDI/MDI-X

</p>
<p>RJ-45 connector


</p>

</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_100Tx_Products/SFP_100Tx_T11_X1" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>1.25G SFP-10/100/1000T Transceiver Hot Pluggable, RJ-45, Active Copper SFP
</h5>
<p>Part Number : NXOSFP-AJ-T11-X1</p>
<h4>Feature's</h4>
<p>Support RX_LOS function


</p>

<p>Auto-detect MDI/MDI-X

</p>
<p>RJ-45 connector


</p>

</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_100Tx_Products/SFP_100Tx_T11_X1i" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>1.25G SFP-10/100/1000T Transceiver Hot Pluggable, RJ-45, Active Copper SFP
</h5>
<p>Part Number : NXOSFP-AJ-T11-X1i</p>
<h4>Feature's</h4>
<p>Support RX_LOS function


</p>

<p>Auto-detect MDI/MDI-X

</p>
<p>RJ-45 connector


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

export default SFP_100T_Products;