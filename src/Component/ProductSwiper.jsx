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
      companyname: '',
      location: '',
      mobilenumber: '',
      emailid: '',
      msg: '',
    });

    

    const [name, setName] = useState("");
    const [selectcat, setSelectcat] = useState("");
    const [qtynum, setQtynum] = useState("");
    const [mobilenum, setMobilenum] = useState("");
    const [address, setAddress] = useState("");
    const [emailad, setEmailad] = useState("");

    // alertmessage
    // const [alertname, setalertName] = useState("");
    // const [alertselectcat, setalertSelectcat] = useState("");
    // const [alertqtynum, setalertqtynum] = useState("");
    // const [alertMobilenum, setalertMobilenum] = useState("");
    // const [alertaddress, setalertAddress] = useState("");
    // const [alertemailad, setalertEmailad] = useState("");

    const [alertselectcat, setAlertSelectcat] = useState('');
    const [alertqtynum, setAlertQtynum] = useState('');
    const [alertname, setAlertName] = useState('');
    const [alertaddress, setAlertAddress] = useState('');
    const [alertMobilenum, setAlertMobilenum] = useState('');
    const [alertemailad, setAlertEmailad] = useState('');


const handleSubmit = async (e)=>{
    e.preventDefault();

    // const regqty = /^[A-Za-z0-9.,\s]+$/;
    // if (regqty.test(qtynum)) {
    //   setAlertQtynum("");

    // } else if (!regqty.test(qtynum) && qtynum === "") {
    //   setAlertQtynum("Enter Qty");
    //   e.preventDefault();
  
    // } else {
    //   setAlertQtynum("Invalid value");
    //   e.preventDefault();
  
    // }

    // const regname = /^[A-Za-z0-9.,\s]+$/;
    // if (regname.test(name)) {
    //     setAlertName("");

    // } else if (!regname.test(name) && name === "") {
    //     setAlertName("Please enter name");
    //   e.preventDefault();
  
    // } else {
    //     setAlertName("Invalid value");
    //   e.preventDefault();
  
    // }

    // const selectoption = /^[A-Za-z0-9\s-.,'"]+$/;
    // if (selectoption.test(selectcat)) {
    //   setAlertSelectcat("");

    // } else if (!selectoption.test(selectcat) && selectcat === "") {
    //   setAlertSelectcat("Please select categories");
    //   e.preventDefault();
  
    // } else {
    //   setAlertSelectcat("Invalid value");
    //   e.preventDefault();
  
    // }

    // const regphonenumber = /^\d{10}$/;
    // if (regphonenumber.test(mobilenum)) {
    //   setAlertMobilenum("");

    // } else if (!regphonenumber.test(mobilenum) && mobilenum === "") {
    //   setAlertMobilenum("Please enter mobile number");
    //   e.preventDefault();
  
    // } else {
    //   setAlertMobilenum("Please enter 10 digit mobile number");
    //   e.preventDefault();
  
    // }

    // const reglocation = /^[A-Za-z0-9\s#/,.-]+$/;
    // if (reglocation.test(address)) {
    //   setAlertAddress("");

    // } else if (!reglocation.test(address) && address === "") {
    //   setAlertAddress("Please enter your address");
    //   e.preventDefault();
  
    // } else {
    //   setAlertAddress("Invalid Address");
    //   e.preventDefault();
  
    // }

    
    // const regemailad = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2-8}])?/g;
    // if (regemailad.test(emailad)) {
    //   setAlertEmailad("");

    // } else if (!regemailad.test(emailad) && emailad === "") {
    //   setAlertEmailad("Please enter your Email-id");
    //   e.preventDefault();
  
    // } else {
    //   setAlertEmailad("Invalid Email-id");
    //   e.preventDefault();
  
    // }

    if (!formData.selectcat || !formData.qty || !formData.companyname || !formData.emailid) {
      // Display appropriate alerts for missing fields
      setAlertSelectcat(!formData.selectcat ? 'Please select a category' : '');
      setAlertQtynum(!formData.qty ? 'Quantity is required' : '');
      setAlertName(!formData.companyname ? 'Company name is required' : '');
      setAlertEmailad(!formData.emailid ? 'Email is required' : '');
      return; // Do not proceed with the submission
    }
    try {
      const response = await fetch("https://yourchoicewebsites.com/nxopt/nx/email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful email sending, e.g., show a success message.
        console.error('success');
        const successMsgElement = document.getElementById("successMsg");
        if (successMsgElement) {
          successMsgElement.style.top = "0px";
        }
        
      } else {
        // Handle errors, e.g., show an error message.
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
}

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const hidePop = ()=>{
  document.getElementById("successMsg").style.top="-100%";
     
  setAlertQtynum('');
    setAlertSelectcat('');
    setAlertName('');
    setAlertMobilenum('')
    setAlertAddress('')
    setAlertEmailad('')


    setFormData({
      selectcat: '',
      qty: '',
      companyname: '',
      location: '',
      mobilenumber: '',
      emailid: '',
      msg: '',
    });
    }

const resetAll=()=>{
    setAlertQtynum('');
    setAlertSelectcat('');
    setAlertName('');
    setAlertMobilenum('')
    setAlertAddress('')
    setAlertEmailad('')


    setFormData({
      selectcat: '',
      qty: '',
      companyname: '',
      location: '',
      mobilenumber: '',
      emailid: '',
      msg: '',
    });
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
        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={resetAll}></button>
      </div>

      <div class="modal-body p-1">
    <form onSubmit={handleSubmit}>
          <div className='row px-4 py-2'>
<div className='col-md-8 col-7 px-2 pt-4 position-relative'>
<select  class="form-select form-innertext" id="sel2 " name="selectcat" value={formData.selectcat}  
onChange={handleInputChange}>
      <option value='' className='form-innertext'>Select Product Catgory</option>
      <option value='transceiver' className='form-innertext'>Transceiver</option>
      <option value='Optical Cables / Patch Cords' className='form-innertext'>Optical Cables / Patch Cords</option>
      <option value='telecom-switches ' className='form-innertext'>Telecom Switches </option>
      <option value='industrial-switches' className='form-innertext'>Industrial Switches</option>
      <option value='server-storage' className='form-innertext'>Server & Storage</option>
      <option value='network-security' className='form-innertext'>Network & Security</option>
    </select>
    <p className='alert-message'>{alertselectcat}</p>
</div>
<div className='col-md-4 col-5 px-2 pt-4 position-relative'>
<input type='number' className='form-control form-innertext' name='qty' id='quality'
 value={formData.qty}  
 onChange={handleInputChange} placeholder='Qty Required' min='1' autoComplete='autocomplete '/> 
<p className='alert-message'>{alertqtynum}</p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='companyname' id='comName' placeholder='Enter Company Name' 
 value={formData.companyname}  
 onChange={handleInputChange} autoComplete='autocomplete '/>
<p className='alert-message'>{alertname}</p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='location' id='location' placeholder='Enter Delivery Location'  
value={formData.location}  
onChange={handleInputChange} autoComplete='autocomplete '/>
<p className='alert-message'>{alertaddress}</p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='mobilenumber' id='mobilenumber' placeholder='Enter Mobile Number'
 value={formData.mobilenumber}  
 onChange={handleInputChange} autoComplete='autocomplete '/>
<p className='alert-message'>{alertMobilenum}</p>
</div>

<div className='col-md-6 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='emailid' id='email' placeholder='Enter Your Email'  
value={formData.emailid}  
onChange={handleInputChange} autoComplete='autocomplete '/>
<p className='alert-message'>{alertemailad}</p>
</div>

<div className='col-md-12 col-12 px-2 pt-4 position-relative'>
<textarea rows='3' cols='3' className='form-control form-innertext' value={formData.msg} onChange={handleInputChange} name='msg' id='message' placeholder='Enter Description ...' autoComplete='autocomplete'></textarea>
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
  <div className="message-sent" id="successMsg">

<div className="card-message">

  <div className="d-flex justify-content-center">
<TiTickOutline className="messagetick-mark"/>
</div>

  <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services. 
  Your inquiry is valuable to us, and our team shall get back to you soon.</p>

  <div className="d-flex justify-content-center pt-5 pb-1">
    <button type="button" className="btn btn-danger" onClick={hidePop}>Go Back</button>
  </div>

</div>


</div>
</div>
    </>
  )
}

export default ProductSwiper
