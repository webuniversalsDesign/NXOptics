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


import {BsFillCaretRightFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

import CardDetails from '../Components/CardDetails';

const Products = () => {

  return (
    <>
    <Navbar/>


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

        <div className='breadcrub pt-1 pb-1'>
           <div className='d-flex  align-items-center'>
           <Link to="/" className='nolink-dec'><h5>Home <BsFillCaretRightFill className='icon'/></h5>  </Link>&nbsp;
           <p>Products</p>
           </div>
        </div> 
      
      </Swiper>
    

<div className='container pt-5 '>

  <div className='row'>
{CardDetails.map((fetchdetails)=>(
   <div className='col-md-6 col-12'>
      {/* <ProductCardDetails ProductImges={fetchdetails.proimg} prodetils={fetchdetails.name}></ProductCardDetails> */}

      <div className='shadow d-flex product-card-1 '>
<div className='product-img-1'>
    <img src={fetchdetails.proimg} alt="img-not-found"/>
</div>
<div className="px-4 py-2">
<h5>{fetchdetails.name}</h5>
<p style={{margin:"0px"}}>Part Number </p>
<p className='partnumber'>{fetchdetails.partNumber}</p>
{/* <ul>
                    {fetchdetails.feature.map((features) => (
                      <li >{features}</li>
                    ))}
                  </ul> */}

<Link to="/" className=' btn btn-danger mt-2 stick-bottom' style={{borderRadius:"2px", fontWeight:"200"}}>View Product</Link>

</div>
      </div>
    </div>
))}
   
  </div>
</div>
    </>
  )
}

export default Products
