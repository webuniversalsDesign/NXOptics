import React from 'react'

// import { Link } from 'react-router-dom';





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Navbar from '../Navbar';
import Footer from '../Footer';

import bannerImg1 from '../img/banner1.jpg'
import bannerImg2 from '../img/banner2.jpg'
import bannerImg3 from '../img/banner3.jpg'
import bannerImg4 from '../img/banner4.jpg'
import bannerImg5 from '../img/banner5.jpg'
import bannerImg6 from '../img/banner6.jpg'
import bannerImg7 from '../img/banner7.jpg'



import {  MdOutlineAssuredWorkload, MdOutlineSwitchAccessShortcutAdd} from 'react-icons/md';
import { BiPurchaseTag } from 'react-icons/bi';
import { GrUserExpert } from 'react-icons/gr';
import { TbTruckDelivery, TbMessageChatbot, TbMessage2 } from 'react-icons/tb';
// import NavbarTwo from '../NavbarTwo';


import ProductSwiper from './ProductSwiper';

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

<ProductSwiper/>



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

<p>200+ precision testing equipments ensure each Netware's products are tested to the exact 
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

<p>Netware prominently remains on the forefront of the latest fiber optic technologies, 
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