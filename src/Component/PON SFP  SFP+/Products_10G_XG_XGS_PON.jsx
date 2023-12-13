import React  from 'react';
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

import productImg1 from '../../img/products/PON SFP  SFP+/XGPON_20X_Img.jpg';
import productImg2 from '../../img/products/PON SFP  SFP+/XGSPON_20X_Img.jpg';


const Products_10G_XG_XGS_PON = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>



<h2 className='pt-5'>10G XG XGS PON</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_10G_XG_XGS_PON/PX5_20X" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found' />

<div className='product-dec'>
  <h5>
  XGPON Asymmetric OLT SFP+ Transceiver
Hot Pluggable, Bidi SC, Tx1577nm EML / Rx1270nm APD, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSPP-H2-PX5-20x</p>
<h4>Feature's</h4> 
<p>Compliant with SFF-8431 SFP+ MSA</p>
<p>Simplex SC/UPC connector</p>
<p>Link distance 20km over SM fiber</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_10G_XG_XGS_PON/PX5_20Xi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found' />

<div className='product-dec'>
  <h5>
  XGPON Asymmetric OLT SFP+ Transceiver
Hot Pluggable, Bidi SC, Tx1577nm EML / Rx1270nm APD, SMF 20KM, DDM

</h5>
<p>Part Number : NXOSPP-H2-PX5-20xi</p>
<h4>Feature's</h4> 
<p>Compliant with SFF-8431 SFP+ MSA</p>
<p>Simplex SC/UPC connector</p>
<p>Link distance 20km over SM fiber</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_10G_XG_XGS_PON/PX6_20X" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  XGSPON Symmetric OLT SFP+ Transceiver
Hot Pluggable, Bidi SC, Tx1577nm EML / Rx1270nm APD, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSPP-H2-PX6-20x</p>
<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Simplex SC/UPC connector</p>
<p>Link distance 20km over SM fiber</p>


</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/Products_10G_XG_XGS_PON/PX6_20Xi" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg2} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>
  XGSPON Symmetric OLT SFP+ Transceiver
Hot Pluggable, Bidi SC, Tx1577nm EML / Rx1270nm APD, SMF 20KM, DDM


</h5>
<p>Part Number : NXOSPP-H2-PX6-20xi</p>
<h4>Feature's</h4> 
<p>RoHS Compliant</p>
<p>Simplex SC/UPC connector</p>
<p>Link distance 20km over SM fiber</p>


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

export default Products_10G_XG_XGS_PON;