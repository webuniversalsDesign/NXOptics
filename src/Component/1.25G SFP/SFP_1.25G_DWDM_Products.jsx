import { React } from 'react';
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

import productImg1 from '../../img/products/1.25G SFP/SFP_DWDM_Img.jpg'
// import productImg1_2 from '../../img/products/2.5_SFP/S53_40D.jpg'

// import productImg2 from '../../img/products/100G CFP CFP2 CFP4/100G_ER4DuleRate.jpg'
// import productImg3 from '../../img/products/100G CFP CFP2 CFP4/100G_L4_Eathernet.png'
// import productImg4 from '../../img/products/100G CFP CFP2 CFP4/100G_SR10DuleRate.jpg'



const SFP_1_25G_DWDM_Products = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>


<h2 className='pt-5'>1.25G SFP DWDM</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_80D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>

  1.25G SFP DWDM Transceiver
Hot Pluggable, Duplex LC, DWDM DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-Dxx-80D</p>

<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Maximum Power consumption 2.5W</p>
<p>Cooled DWDM DFB laser transmitter</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_80Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>

  1.25G SFP DWDM Transceiver
Hot Pluggable, Duplex LC, DWDM DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-Dxx-80Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Maximum Power consumption 2.5W</p>
<p>Cooled DWDM DFB laser transmitter</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_A2D" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>

  1.25G SFP DWDM Transceiver
Hot Pluggable, Duplex LC, DWDM DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-Dxx-A2D</p>

<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Link distance 120km over SM fiber </p>
<p>Cooled DWDM DFB laser transmitter</p>


</div>


</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/SFP_1_25G_DWDM_Products/SFP_1_25G_DWDM_A2Di" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>

  1.25G SFP DWDM Transceiver
Hot Pluggable, Duplex LC, DWDM DFB, SMF 80KM, DDM
</h5>
<p>Part Number : NXOSFP-C7-Dxx-A2Di</p>
<h4>Feature's</h4> 
<p>Single +3.3V power supply</p>
<p>Maximum Power consumption 2.5W</p>
<p>Link distance 120km over SM fiber </p>
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

export default SFP_1_25G_DWDM_Products;