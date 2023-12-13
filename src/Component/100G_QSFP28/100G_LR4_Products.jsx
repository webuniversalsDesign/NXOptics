import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import bannerImg from '../../img/products/productbanner.jpg'
import bannerImg2 from '../../img/products/productbanner2.jpg'
import Navbar from '../../Navbar'
import Footer from '../../Footer';
import EnquireForm from '../EnquireForm';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import productImg1 from '../../img/products/100G QSFP28/PDSM4_100G.jpg';


const LR4_100G_Products   = () => {
  return (
    <>
<Navbar/>

<div className='container leave-navbar'>


<h2 className='pt-5'>QSFP28-100G-LR4</h2>

      <div className='row pt-5  pb-5'>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/LR4_100G_Products/LR4_Ethernet_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>100G QSFP28 LR4 Transceiver
Hot Pluggable, Duplex LC, LAN-WDM DFB, SMF 10KM, DDM
</h5>
<p>Part Number : NXOQ28-K7-L13-10D   </p>
<h4>Feature's</h4>
<p>Hot Pluggable QSFP28 footprint</p>
<p>Duplex LC connector</p>
<p>4CH LWDM MUX / DEMUX design</p>
<p>O-Band LWDM DFB transmitter</p>
</div>

</div>
</Link>

        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
        <Link to="/LR4_100G_Products/LR4_Ethernet_OTU4_100G" style={{textDecoration:"none", color:"black"}}>

<div className='product-card position-relative'>
<img src={productImg1} className='productImg3' alt='img-not-found'/>

<div className='product-dec'>
  <h5>100G QSFP28 LR4 Dual Rate Transceiver
Hot Pluggable, Duplex LC, LAN-WDM DFB, SMF 10KM, DDM

</h5>
<p>Part Number : NXOQ28-K7-L13-10DR</p>
<h4>Feature's</h4>
<p>Single 3.3V power supply</p>
<p>Built in quad TX CDR and RX CDR</p>
<p>Link distance 10km over SM fiber</p>
</div>

</div>
</Link>

        </div>

      </div>
</div>

<EnquireForm/>

<Footer/>
    </>
  )
}

export default LR4_100G_Products;