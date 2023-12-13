import React,{useState} from 'react';
import {TiTickOutline} from 'react-icons/ti';


import { Link } from 'react-router-dom';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// FiberOptical Images
import aocImg from '../img/products/Fiber Optical Cable/AOC/10G_SPSP.jpg';
import productImg1 from '../../src/img/products/Telecom Switches/transivers.jpeg';
import productImg2 from '../img/products/Switches/10G ethernet switches/NXO-G24S4X _ NXO-G24S2X.jpg'
import productImg3 from '../../src/img/products/Telecom Switches/industrialSwitches.jpeg';
import productImg4 from '../../src/img/products/Telecom Switches/networkImg.jpeg';
import productImg5 from '../../src/img/products/Telecom Switches/storage.jpeg';


const ProductSwiper = () => {

  const [formData, setFormData] = useState({
      selectcat: '',
      qty: '',
      companyName: '',
      location: '',
      phone: '',
      email: '',
      msg: '',
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("https://nxoptics.com/nx-email/product.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Handle successful email sending, e.g., show a success message.
          // window.location.href = '/thankyou';
  
          window.location.href = '/Thankyou';
          console.log("Email Sent Successfully");
          
  
          
        } else {
          // Handle errors, e.g., show an error message.
          console.error("Email sending failed");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  return (
    <>

<div className='container-fluid pt-5 pb-5'>

 <h2 className='text-center section-heading'>Products</h2>

  {/* <!-- Tab panes --> */}
  <div className="tab-content">

    <div id="home" className="container tab-pane active"><br/>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
  loop={true}
      navigation={true}
      autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
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
            spaceBetween: 20,
          },
        }}
    >


<SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg1} alt="img-not-found"/>
          <p className='pro-text'>Transceiver</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      

      </SwiperSlide>
      
      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={aocImg} alt="img-not-found"/>
          <p className='pro-text'>Optical Cables / Path Cords</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
          <p className='pro-text'>Telecom Switches</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg3} alt="img-not-found"/>
          <p className='pro-text'>Industrial Switches</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg4} alt="img-not-found"/>
          <p className='pro-text'>Network & Security</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg5} alt="img-not-found"/>
          <p className='pro-text'>Server & Storage</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg1} alt="img-not-found"/>
          <p className='pro-text'>Transceiver</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      

      </SwiperSlide>
      
      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={aocImg} alt="img-not-found"/>
          <p className='pro-text'>Optical Cables / Path Cords</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
          <p className='pro-text'>Telecom Switches</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg3} alt="img-not-found"/>
          <p className='pro-text'>Industrial Switches</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg4} alt="img-not-found"/>
          <p className='pro-text'>Network & Security</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg5} alt="img-not-found"/>
          <p className='pro-text'>Server & Storage</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

    </Swiper>
    </div>

  </div>
</div>

{/*Produt Enquery Form */}

<div class="modal fade" id="EnqueryProduct">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Enquiry Your Product</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
      </div>

      <div class="modal-body p-1">
    <form onSubmit={handleSubmit}>
          <div className='row px-4 py-2'>
<div className='col-md-8 col-7 px-2 pt-4 position-relative'>
<select  class="form-select form-innertext" id="sel2 " name="selectcat" value={formData.selectcat}  
onChange={handleChange}>
      <option value='' className='form-innertext'>Select Product Catgory</option>
      <option value='transceiver' className='form-innertext'>Transceiver</option>
      <option value='Optical Cables / Patch Cords' className='form-innertext'>Optical Cables / Patch Cords</option>
      <option value='telecom-switches ' className='form-innertext'>Telecom Switches </option>
      <option value='industrial-switches' className='form-innertext'>Industrial Switches</option>
      <option value='server-storage' className='form-innertext'>Server & Storage</option>
      <option value='network-security' className='form-innertext'>Network & Security</option>
    </select>
    <p className='alert-message'></p>
</div>
<div className='col-md-4 col-5 px-2 pt-4 position-relative'>
<input type='number' className='form-control form-innertext' name='qty' id='quality'
 value={formData.qty}  
 onChange={handleChange} placeholder='Qty Required' min='1' autoComplete='autocomplete '/> 
<p className='alert-message'></p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='companyName' id='comName' placeholder='Enter Company Name' 
 value={formData.companyName}  
 onChange={handleChange} autoComplete='autocomplete '/>
<p className='alert-message'></p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='location' id='location' placeholder='Enter Delivery Location'  
value={formData.location}  
onChange={handleChange} autoComplete='autocomplete '/>
<p className='alert-message'></p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='phone' id='mobilenumber' placeholder='Enter Mobile Number'
 value={formData.phone}  
 onChange={handleChange} autoComplete='autocomplete '/>
<p className='alert-message'></p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='email' id='email' placeholder='Enter Your Email'  
value={formData.email}  
onChange={handleChange} autoComplete='autocomplete '/>
<p className='alert-message'></p>
</div>

<div className='col-md-12 col-12 px-2 pt-4 position-relative'>
<textarea rows='3' cols='3' className='form-control form-innertext' value={formData.msg} onChange={handleChange} name='msg' id='message' placeholder='Enter Description ...' autoComplete='autocomplete'></textarea>
</div>

     </div>

     <div class="modal-footer">
        <input type="submit" class="btn btn-primary"  style={{width:"100px"}} value="Send"/>
        <input type="reset" class="btn btn-danger"  data-bs-dismiss="modal" style={{width:"100px"}} value="Close"/>
      </div>

    </form>
      </div>

     

    </div>
  </div>
  <div className="message-sent" id="successMsg">

<div className="card-message">

  <div className="d-flex justify-content-center">
<TiTickOutline className="messagetick-mark"/>
</div>

  <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services. 
  Your inquiry is valuable to us, and our team shall get back to you soon.</p>

  <div className="d-flex justify-content-center pt-5 pb-1">
    <button type="button" className="btn btn-danger" >Go Back</button>
  </div>

</div>


</div>
</div>
    </>
  )
}

export default ProductSwiper
