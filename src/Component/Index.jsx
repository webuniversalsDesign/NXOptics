  import React from 'react'

import { Link } from 'react-router-dom';

// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from '../Navbar';
import Footer from '../Footer';

import bannerImg1 from '../img/banner1.jpg'
import bannerImg2 from '../img/banner2.jpg'
import bannerImg3 from '../img/banner3.jpg'
import bannerImg4 from '../img/banner4.jpg'
import bannerImg5 from '../img/banner5.jpg'
import bannerImg6 from '../img/banner6.jpg'
import bannerImg7 from '../img/banner7.jpg'

// FiberOptical Images
import aocImg from '../img/products/Fiber Optical Cable/AOC/10G_SPSP.jpg';
// import dacImg from '../img/products/Fiber Optical Cable/DAC/10G_SFPS.jpg';
// import ipcImg from '../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/Armored_Path_cord.png';
// import mpoImg from '../img/products/Fiber Optical Cable/Indoor Patch-cord  Cable/MPO_PathCoard.jpg';
// import opcImg from '../img/products/Fiber Optical Cable/AOC/10G_SPSP.jpg';
// import loopbackcableImg from '../img/products/loopbackcable.jpg';
// import tcable1 from '../img/products/transceiverCable1.jpg';
// import tcable3 from '../img/products/transceiverCable2.jpg';
// import tcable2 from '../img/products/transceiverCable3.jpg';



// Certification
// import houseImg from '../img/wherehouse.jpg';
// import randdImg from '../img/RandD.jpg';
// import envtestingImg from '../img/environmenttest.jpg';
// import qtyassureImg from '../img/qualityasssurance.jpg';
// import compatibilityImg from '../img/compatibility.jpg';
// import solutionTestImg from '../img/solutionTest.jpg';

// Customer
// import customer1Img from '../img/customer1.jpg';
// import customer2Img from '../img/customer2.jpg';
// import customer3Img from '../img/customer3.jpg';

import {  MdOutlineAssuredWorkload, MdOutlineSwitchAccessShortcutAdd} from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';
import { GrUserExpert } from 'react-icons/gr';
import { TbTruckDelivery, TbMessageChatbot, TbMessage2 } from 'react-icons/tb';
// import NavbarTwo from '../NavbarTwo';

import productImg1 from '../img/products/1.25G SFP/SFP_DWDM_Img.jpg'
import productImg2 from '../img/products/Switches/10G ethernet switches/NXO-G24S4X _ NXO-G24S2X.jpg'

 const Index =()=> {
  return (
    <>
<Navbar/>


{/*Carousel Banner Start*/}

<div id="demo" className="carousel slide leave-navbar" data-bs-ride="carousel">


  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
  </div>
  

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bannerImg1} alt="Los Angeles" className="d-block bannerImgcover"/>
      <div className="carousel-caption">
        <h3>NX Optics</h3>
        {/* <p>We had such a great time in LA!</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={bannerImg2} alt="Chicago" className="d-block bannerImgcover"/>
      <div className="carousel-caption">
        {/* <h3>Chicago</h3>
        <p>Thank you, Chicago!</p> */}
      </div> 
    </div>
    <div className="carousel-item">
      <img src={bannerImg3} alt="New York" className="d-block bannerImgcover"/>
      <div className="carousel-caption">
        {/* <h3>New York</h3>
        <p>We love the Big Apple!</p> */}
      </div>  
    </div>

    <div className="carousel-item">
      <img src={bannerImg4} alt="New York" className="d-block bannerImgcover"/>
      <div className="carousel-caption">
        {/* <h3>New York</h3>
        <p>We love the Big Apple!</p> */}
      </div>  
    </div>

    <div className="carousel-item">
      <img src={bannerImg5} alt="New York" className="d-block bannerImgcover"/>
      <div className="carousel-caption">
        {/* <h3>New York</h3>
        <p>We love the Big Apple!</p> */}
      </div>  
    </div>



    <div className="carousel-item">
      <img src={bannerImg6} alt="New York" className="d-block bannerImgcover"/>
      <div className="carousel-caption">
        {/* <h3>New York</h3>
        <p>We love the Big Apple!</p> */}
      </div>  
    </div>

    <div className="carousel-item">
      <img src={bannerImg7} alt="New York" className="d-block bannerImgcover"/>
      <div className="carousel-caption">
        {/* <h3>New York</h3>
        <p>We love the Big Apple!</p> */}
      </div>  
    </div>
  </div>
  

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

{/*Carousel Banner End*/}


{/* Tool */}

<div className='container-fluid pt-5 pb-2'>

{/* <div className='resp-overflow'>
<div className='d-flex justify-content-center'> 
   <ul className="navs nav-pills" role="tablist">
   
    <li className="nav-item">
      <a className="nav-link active" data-bs-toggle="pill" href="#home">Fiber Optical Cable / Patch-cord</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="pill" href="#menu1">Loop-back Series</a>
    </li>



  </ul>
</div>
</div> */}

 <h2 className='text-center section-heading'>Products</h2>

  {/* <!-- Tab panes --> */}
  <div className="tab-content">

    {/* <div id="home" className="container tab-pane active"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  
      navigation={true}
      autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className="mySwiper"

      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
        }}
    >


<SwiperSlide>
      <Link to="/SFP_1_25G_DWDM_Products" className='link-black' >
      <div className='product-card'>
        <img src={productImg1} className='product-cart-img' alt="myproducts"/>
      <h5 className='link-black'>Transceiver</h5>

      </div>
      </Link>
      

      </SwiperSlide>
      
      <SwiperSlide>
      <Link to="/AOC_SPSP" className='link-black' >
      <div className='product-card'>
        <img src={aocImg} className='product-cart-img' alt="myproducts"/>
      <h5 className='link-black'>AOC (Active Optical Cable)</h5>

      </div>
      </Link>
      

      </SwiperSlide>

      <SwiperSlide>
      <Link to="/" className='link-black' >
      <div className='product-card'>
        <img src={productImg2} className='product-cart-img' alt="myproducts"/>
      <h5 className='link-black'>Telecom Switches</h5>

      </div>
      </Link>
      

      </SwiperSlide>

      <SwiperSlide>
      <Link to="/NXO_G24S4X_G24S2X" className='link-black' >
      <div className='product-card'>
        <img src={productImg2} className='product-cart-img' alt="myproducts"/>
      <h5 className='link-black'>Industrial Switches</h5>

      </div>
      </Link>
      

      </SwiperSlide>

    </Swiper>
    </div> */}

   


  </div>


  <div className='container pt-3'>
    <div className='row'>

      <div className='col-md-3 pt-2 pb-2'>
      <Link to="/SFP_1_25G_DWDM_Products" className='text_dec_none'>
        <div className='product-card-2'>
          <img src={productImg1} alt="img-not-found"/>
          <p className='pro-text'>Transceiver</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </div>

      <div className='col-md-3 pt-2 pb-2'>
      <Link to="/AOC_SPSP" className='text_dec_none'>
        <div className='product-card-2'>
          <img src={aocImg} alt="img-not-found"/>
          <p className='pro-text'>AOC (Active Optical Cable)</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </div>

      <div className='col-md-3 pt-2 pb-2'>
      <Link to="/" className='text_dec_none'>
        <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
          <p className='pro-text'>Telecom Switches</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </div>

      <div className='col-md-3 pt-2 pb-2'>
      <Link to="/NXO_G24S4X_G24S2X" className='text_dec_none'>
        <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
          <p className='pro-text'>Industrial Switches</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </div>
    </div>
  </div>
</div>



{/* Tool */}

{/* Why Us Section Start */}

<section className='container pt-lg-5 pb-lg-5 pt-3 pb-3'>
  <h3 className='text-center section-heading pt-4 pb-4'>Why Us?</h3>

  <div className='row'>

  {/* <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <MdOutlineEngineering className="content-card-icon"/>

      </div>

<h5>Engineering Team</h5>

<p>With more than 1000 inherent experts, we help create smart networks 
that make optical operations easier, 
faster and more reliable.</p>
      </div>
    </div> */}
  

    <div className='col-lg-6 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <MdOutlineAssuredWorkload className="content-card-icon"/>


      </div>

<h5>Reliability Assurance</h5>

<p>200+ precision testing equipments ensure each FS's products are tested to the exact 
specifications of our customer's environment 
with a significant level of reliability.</p>
      </div>
    </div>

    <div className='col-lg-6 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <MdOutlineSwitchAccessShortcutAdd className="content-card-icon"/>


      </div>

<h5>Cutting Edge</h5>

<p>FS prominently remains on the forefront of the latest fiber optic technologies, 
bringing third-party options in the latest 
advancements in 200G, 400G, 800G, PON, and more.</p>
      </div>
    </div>

    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <BiPurchaseTag className="content-card-icon"/>


      </div>

<h5>Guarantee Purchase</h5>

<p>High-quality pre-sales, including solution customization, sample request, test reports, 
and perfect warranty & return policies 
allow you to enjoy worry-free experience.</p>
      </div>
    </div>

    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <GrUserExpert className="content-card-icon"/>


      </div>

<h5>Expert Support</h5>

<p>24/5 around-the-clock customer service and technical support for tackling any complex issue anytime.</p>
      </div>
    </div>


    <div className='col-lg-4 col-md-6 col-sm-12 mt-2 pb-2'>
      <div className='content-card'>
      <div className='d-flex justify-content-center'>
      <TbTruckDelivery className="content-card-icon"/>


      </div>

<h5>Delivery Excellence</h5>

<p>Fast shipping to India. Adequate stock is maintained, and timely & efficient shipping methods are supported.</p>
      </div>
    </div>

 
  </div>
</section>



<section className='bg-dif'>
<div className='container'>
  <div className='row align-items-center' >
    
    <div className='col-lg-4 col-md-12 col-sm-12'>
<h2>Question? <br/> We'r here to help.</h2>
    </div>

    <div className='col-lg-4 col-md-6 col-sm-12'>
<div className='d-felx '>
<TbMessage2 className="content-card-icon"/>
</div>
  <p>Contact Sales</p>
  <p>Get expert sales advice within 12 hours.</p>

    </div>

    <div className='col-lg-4 col-md-6 col-sm-12'>
<div className='d-felx '>
<TbMessageChatbot className="content-card-icon"/>

</div>
  <p>Chat with Us</p>
  <p>Chat with us now for a quick response.</p>

    </div>

    

  </div>
</div>
</section>

{/* Question Section End */}

<Footer/>

    </>
 
  )
}

export default Index;