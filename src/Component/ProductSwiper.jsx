import React,{useState} from 'react'

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
import productImg1 from '../img/products/1.25G SFP/SFP_DWDM_Img.jpg'
import productImg2 from '../img/products/Switches/10G ethernet switches/NXO-G24S4X _ NXO-G24S2X.jpg'


const ProductSwiper = () => {
    const [name, setName] = useState("");
    const [selectcat, setSelectcat] = useState("");
    const [qtynum, setQtynum] = useState("");
    const [mobilenum, setMobilenum] = useState("");
    const [address, setAddress] = useState("");
    const [emailad, setEmailad] = useState("");

    // alertmessage
    const [alertname, setalertName] = useState("");
    const [alertselectcat, setalertSelectcat] = useState("");
    const [alertqtynum, setalertqtynum] = useState("");
    const [alertMobilenum, setalertMobilenum] = useState("");
    const [alertaddress, setalertAddress] = useState("");
    const [alertemailad, setalertEmailad] = useState("");



const save=(e)=>{
    const regqty = /^[A-Za-z0-9.,\s]+$/;
    if (regqty.test(qtynum)) {
        setalertqtynum("");

    } else if (!regqty.test(qtynum) && qtynum === "") {
        setalertqtynum("Enter Qty");
      e.preventDefault();
  
    } else {
        setalertqtynum("Invalid value");
      e.preventDefault();
  
    }

    const regname = /^[A-Za-z0-9.,\s]+$/;
    if (regname.test(name)) {
        setalertName("");

    } else if (!regname.test(name) && name === "") {
        setalertName("Please enter name");
      e.preventDefault();
  
    } else {
        setalertName("Invalid value");
      e.preventDefault();
  
    }

    const selectoption = /^[A-Za-z0-9\s-.,'"]+$/;
    if (selectoption.test(selectcat)) {
        setalertSelectcat("");

    } else if (!selectoption.test(selectcat) && selectcat === "") {
        setalertSelectcat("Please select categories");
      e.preventDefault();
  
    } else {
        setalertSelectcat("Invalid value");
      e.preventDefault();
  
    }

    const regphonenumber = /^\d{10}$/;
    if (regphonenumber.test(mobilenum)) {
        setalertMobilenum("");

    } else if (!regphonenumber.test(mobilenum) && mobilenum === "") {
        setalertMobilenum("Please enter mobile number");
      e.preventDefault();
  
    } else {
        setalertMobilenum("Please enter 10 digit mobile number");
      e.preventDefault();
  
    }

    const reglocation = /^[A-Za-z0-9\s#/,.-]+$/;
    if (reglocation.test(address)) {
        setalertAddress("");

    } else if (!reglocation.test(address) && address === "") {
        setalertAddress("Please enter your address");
      e.preventDefault();
  
    } else {
        setalertAddress("Invalid Address");
      e.preventDefault();
  
    }

    
    const regemailad = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (regemailad.test(emailad)) {
        setalertEmailad("");

    } else if (!regemailad.test(emailad) && emailad === "") {
        setalertEmailad("Please enter your Email-id");
      e.preventDefault();
  
    } else {
        setalertEmailad("Invalid Email-id");
      e.preventDefault();
  
    }
}


const resetAll=()=>{
    setalertqtynum('');
    setalertSelectcat('');
    setalertName('');
setalertMobilenum('')
setalertAddress('')
setalertEmailad('')


    setSelectcat('');
    setQtynum('');
   setName('');
   setMobilenum('');
   setAddress('');
   setEmailad('')
}

  return (
    <>

<div className='container-fluid pt-5 pb-2'>

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
          <p className='pro-text'>AOC (Active Optical Cable)</p>
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
          <img src={productImg2} alt="img-not-found"/>
          <p className='pro-text'>Industrial Switches</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
          <p className='pro-text'>Network & Security</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
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
          <p className='pro-text'>AOC (Active Optical Cable)</p>
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
      <Link className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
          <p className='pro-text'>Industrial Switches</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
          <p className='pro-text'>Network & Security</p>
          <div className='overlay-layout'/>
        </div>
      </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link  className='link-black' data-bs-toggle="modal" data-bs-target="#EnqueryProduct">
      <div className='product-card-2'>
          <img src={productImg2} alt="img-not-found"/>
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
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body p-1">
    <form onSubmit={save}>
          <div className='row px-4 py-2'>
<div className='col-md-8 col-7 px-2 pt-4 position-relative'>
<select  class="form-select form-innertext" id="sel2 " name="sellist2" value={selectcat}  
onChange={(e)=>  setSelectcat(e.target.value)}>
      <option value='' className='form-innertext'>Select Product Catgory</option>
      <option value='transceiver' className='form-innertext'>Transceiver</option>
      <option value='ppticalcables-Patchcords' className='form-innertext'>Optical Cables / Patch Cords</option>
      <option value='telecom-switches ' className='form-innertext'>Telecom Switches </option>
      <option value='industrial-switches' className='form-innertext'>Industrial Switches</option>
      <option value='server-storage' className='form-innertext'>Server & Storage</option>
      <option value='network-security' className='form-innertext'>Network & Security</option>
    </select>
    <p className='alert-message'>{alertselectcat}</p>
</div>
<div className='col-md-4 col-5 px-2 pt-4 position-relative'>
<input type='number' className='form-control form-innertext' name='qty' id='quality'
 value={qtynum}  
onChange={(e)=>  setQtynum(e.target.value)} placeholder='Qty Required' min='1' autoComplete='autocomplete '/> 
<p className='alert-message'>{alertqtynum}</p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='companyname' id='comName' placeholder='Enter Company Name' 
 value={name}  
onChange={(e)=>  setName(e.target.value)} autoComplete='autocomplete '/>
<p className='alert-message'>{alertname}</p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='location' id='location' placeholder='Enter Delivery Location'  
value={address}  
onChange={(e)=>  setAddress(e.target.value)} autoComplete='autocomplete '/>
<p className='alert-message'>{alertaddress}</p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='mobilenumber' id='mobilenumber' placeholder='Enter Mobile Number'
 value={mobilenum}  
onChange={(e)=>  setMobilenum(e.target.value)} autoComplete='autocomplete '/>
<p className='alert-message'>{alertMobilenum}</p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='emailid' id='email' placeholder='Enter Your Email'  
value={emailad}  
onChange={(e)=>  setEmailad(e.target.value)} autoComplete='autocomplete '/>
<p className='alert-message'>{alertemailad}</p>

</div>

<div className='col-md-12 col-12 px-2 pt-4 position-relative'>
<textarea rows='3' cols='3' className='form-control form-innertext' name='msg' id='message' placeholder='Enter Description ...' autoComplete='autocomplete'></textarea>
</div>

     </div>

     <div class="modal-footer">
        <input type="submit" class="btn btn-primary"  style={{width:"100px"}} value="Send"/>
        <input type="reset" class="btn btn-danger" onClick={resetAll} data-bs-dismiss="modal" style={{width:"100px"}} value="Close"/>
      </div>

    </form>
      </div>

     

    </div>
  </div>
</div>
    </>
  )
}

export default ProductSwiper
