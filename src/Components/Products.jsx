import React from 'react';
import Navbar from '../Navbar';

// Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImg from '../img/products/productbanner.jpg'
import bannerImg2 from '../img/products/productbanner2.jpg'
// -----------------------------------------------------------------------

import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
    <Navbar/>

    <div className='product-Breadcrumb'>
        <div className='d-flex align-items-center'>
           <Link className="nolink-dec"> <h4>Home /</h4></Link>
            <p>Products</p>
        </div>
    </div>

    <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}

        pagination={{
          clickable: true,
        }}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper pt-lg-5" style={{borderRadius:"10px"}}
      >
        <SwiperSlide>
          <img src={bannerImg} className='banner_img2' alt='img-not-found'/>
          <p className='banner-heading'>Find the Right Product Quicker</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={bannerImg2} className='banner_img2' alt='img-not-found'/>
          <p className='banner-heading'>Revolute Your Wireless Experience with Wi-Fi Solution</p>
        </SwiperSlide>
      
      </Swiper>
    

    </>
  )
}

export default Products
