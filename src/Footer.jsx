import React from 'react'
import { Link } from 'react-router-dom';

// react icons
import { BiLogoFacebook } from 'react-icons/bi';
import { MdAddIcCall } from 'react-icons/md';
import { RiMailAddLine } from 'react-icons/ri';
import { GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { AiFillYoutube, AiOutlineGlobal } from 'react-icons/ai';

import logoIcon from './img/logo/NXO LOGO.png'; 
import HomeEnquireForm from './Component/HomeEnquireForm';
import excelsheet from './img/NXO.xlsx';
import RMAForm from './Component/RMAForm';
import RequestForm from './Component/RequestForm';


const Footer = () => {
  return (
    <>
<div className='footer pt-5' id='contact'>
    <div className='container'>

    <div className='row'>

      <div className='col-lg-3 col-md-4 col-sm-12'>
    <Link to="/" className='linkdecor-disable'> 
     <div className='navlogo d-flex align-items-center'>
           <h4 style={{margin:"0px"}} >Nx<span style={{color:"rgb(55 93 147)"}}>Optics</span></h4>
      <img src={logoIcon} className='logo_footer' alt='logo'/>
     

  
      </div>   </Link> 
   


<p className='pt-3 pb-1'>No. 52, 1st Floor, 
Above Indian Overseas Bank,
St Johns Road, Bangalore – 42
India.
</p>
{/* 
<div className='d-flex flex-wrap pb-2'>
  <a href='tel:+91 80-41622171' style={{textDecoration:"none"}}><p className='childone'><MdAddIcCall className='footerIcons'/> 80-41622171 |&nbsp;</p></a>

<a href='tel:+91 9945052666' style={{textDecoration:"none"}}><p className='childone'> 9945052666.</p></a>

</div>

<div className='d-flex flex-wrap pb-2'>
  <a href='tel:+91 80-41622171' style={{textDecoration:"none"}}><p className='childone'><RiMailAddLine className="footerIcons"/> sales@netwaresystems.biz |&nbsp;</p></a>
<a href='tel:+91-80-41622171' style={{textDecoration:"none"}}><p className='childone'> Info@netwaresystems.biz |&nbsp;</p></a>
<a href='tel:+91 9945052666' style={{textDecoration:"none"}}><p className='childone'> nsm@netwaresystems.biz</p></a>

</div> */}


</div>

    <div className='col-lg-2 col-md-4 col-6'>
    <p className='footer-headline'>Company</p>

    <Link to="/AboutUs" style={{textDecoration:"none"}}><p className='footer-items'>About Us</p></Link>
   
    </div>


      <div className='col-lg-2 col-md-4 col-6'>
    <p className='footer-headline'>Services</p>

    <Link to="" style={{textDecoration:"none"}} data-bs-toggle="modal" data-bs-target="#rmaform"><p className='footer-items'>RMA Form</p></Link>

    <Link to="" style={{textDecoration:"none"}} data-bs-toggle="modal" data-bs-target="#requestform"><p className='footer-items'>Contact Support</p></Link>

      </div>

      <div className='col-lg-2 col-md-4 col-12'>
    <p className='footer-headline'>Support</p>
      
    <Link to="" style={{textDecoration:"none"}} data-bs-toggle="modal" data-bs-target="#requestform"><p className='footer-items' >Request for Technical Document</p></Link>
    <Link to="" style={{textDecoration:"none"}} data-bs-toggle="modal" data-bs-target="#requestform"><p className='footer-items' >Request Solution Design</p></Link>


      </div>

      <div className='col-lg-3 col-md-4 col-12'>
    <p className='footer-headline'>Contact Us</p>
      
    <div className='d-flex flex-wrap pb-2 px-2'>
  <a href='tel:+91 80-41622171' style={{textDecoration:"none"}}><p className='childone'><MdAddIcCall className='footerIcons' style={{marginRight:"10px"}}/> 80-41622171 |&nbsp;</p></a>

<a href='tel:+91 9945052666' style={{textDecoration:"none"}}><p className='childone' > 9945052666.</p></a>

</div>

<div className='d-flex flex-wrap pb-2 px-2'>
  <a href='mailto:Sales@NxOptics.com' style={{textDecoration:"none"}}><p className='childone'><RiMailAddLine className="footerIcons" style={{marginRight:"10px"}}/> Sales@NxOptics.com</p></a>
</div>

<div className='d-flex pb-4 pt-3'>

<a href="/"><BiLogoFacebook className="social-icons"/></a>
<a href="/"><GrTwitter className="social-icons"/></a>
<a href="/"><AiFillYoutube className="social-icons"/></a>
<a href="/"><GrLinkedinOption className="social-icons"/></a>

</div>

      </div>
    </div>
<hr/>

<div className='d-flex justify-content-start' style={{flexWrap:"wrap"}}>
<p className='copy-rightText'>Copyright © Netware All Rights Reserved | Design & Hosted by <a href='https://webuniversals.co.in/' style={{textDecoration:"none", color:"black", fontWeight:"500"}} target='_blank' rel='noreferrer' className=''>Web Universals</a>  </p>

{/* <div className='d-flex' style={{flexWrap:"wrap"}}>
<p className='footer-end-text'><AiOutlineGlobal /> India (English/ $ USD)</p>&nbsp; &nbsp;
<Link to="" className='footer-end-text'>|  &nbsp; Privacy & Cookies  &nbsp; |</Link>&nbsp; &nbsp;
<Link to="" className='footer-end-text'>Terms & Condition</Link>&nbsp; &nbsp;
</div> */}
</div>

    </div>
</div>
    
    <HomeEnquireForm/>
    <RMAForm/>
    <RequestForm/>
    </>
  )
}

export default Footer;