import React, { useState } from 'react';
import {TiTickOutline} from 'react-icons/ti';


const RMAForm = () => {

  const [formData, setFormData] = useState({
    companyName: '',
    country: '',
    email:'',
    name:'',
    phone:'',
    code:'',
    msg:'',
    selectcat:'',
    productType1:'',
    productDes1:'',
    productSerial1:'',
    productCode1:'',
    productType2:'',
    productDes2:'',
    productSerial2:'',
    productCode2:'',
    productType3:'',
    productDes3:'',
    productSerial3:'',
    productCode3:'',
    productType4:'',
    productDes4:'',
    productSerial4:'',
    productCode4:'',
    productType5:'',
    productDes5:'',
    productSerial5:'',
    productCode5:'',
    description1:'',
    description2:'',
    description3:'',
    description4:'',
    description5:'',

    // ... add other form fields
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const hidePop = () => {
  //   setSuccessMsgVisible(false);
  //   setFormData({
  //     companyName: '',
  //     country: '',
  //     email:'',
  //     name:'',
  //     phone:'',
  //     code:'',
  //     msg:'',
  //     selectcat:'',
  //     productType1:'',
  //     productDes1:'',
  //     productSerial1:'',
  //     productCode1:'',
  //     productType2:'',
  //     productDes2:'',
  //     productSerial2:'',
  //     productCode2:'',
  //     productType3:'',
  //     productDes3:'',
  //     productSerial3:'',
  //     productCode3:'',
  //     productType4:'',
  //     productDes4:'',
  //     productSerial4:'',
  //     productCode4:'',
  //     productType5:'',
  //     productDes5:'',
  //     productSerial5:'',
  //     productCode5:'',
  //     description1:'',
  //     description2:'',
  //     description3:'',
  //     description4:'',
  //     description5:'',
  //     // ... reset other form fields
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://nxoptics.com/nx-email/rma.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful email sending, e.g., show a success message.
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
      <div class="modal fade" id="rmaform">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">RMA Enquire Form</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
      </div>

      <div class="modal-body p-1">
    <form onSubmit={handleSubmit}>
          <div className='row px-4 py-2'>

          <div className='col-md-4 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='companyName' value={formData.companyName} onChange={handleChange} id='comName' placeholder='Company Name' 
 autoComplete='autocomplete '/>
</div>

<div className='col-md-4 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='country' value={formData.country} onChange={handleChange} id='comName' placeholder='Country' 
 autoComplete='autocomplete '/>
</div>

<div className='col-md-4 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='email' value={formData.email} onChange={handleChange} id='comName' placeholder='Email Address' 
 autoComplete='autocomplete '/>
</div>

<div className='col-md-4 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='name' value={formData.name} onChange={handleChange} id='comName' placeholder='Name of Person Requesting RMA' 
 autoComplete='autocomplete '/>
</div>

<div className='col-md-4 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='phone' value={formData.phone} onChange={handleChange} id='comName' placeholder='Contact No ' 
 autoComplete='autocomplete '/>
</div>

<div className='col-md-4 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='code' value={formData.code} onChange={handleChange} id='comName' placeholder='Customer Code' 
 autoComplete='autocomplete '/>
</div>

<div className='col-md-12 col-12 px-2 pt-4 position-relative pb-4'>
<textarea rows='2' cols='2' className='form-control form-innertext'  name='msg' value={formData.msg} onChange={handleChange} id='message' placeholder='Location Address for Dispatching R&R Unit' autoComplete='autocomplete'></textarea>
</div>

<hr/>

<div className='col-md-4 col-7 px-2 pt-2 position-relative'>
<select  class="form-select form-innertext" id="sel2 " name="selectcat" value={formData.selectcat} onChange={handleChange}>
      <option value='' className='form-innertext'>Select Failure Stage</option>
      <option value='During Installation' className='form-innertext'>During Installation </option>
      <option value='During Reguar Operations' className='form-innertext'>During Reguar Operations</option>

    </select>
   
</div>

<div className='d-flex gap-2 pt-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="1" readOnly/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productType1' value={formData.productType1} onChange={handleChange} id='comName' placeholder='Product Type'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productDes1' value={formData.productDes1} onChange={handleChange} id='comName' placeholder='Product Description'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productSerial1' value={formData.productSerial1} onChange={handleChange} id='comName' placeholder='Serial No'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productCode1' value={formData.productCode1} onChange={handleChange} id='comName' placeholder='NxOptics Code'  autoComplete='autocomplete '/>
</div>


</div>

<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
    <input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="2" readOnly/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productType2' value={formData.productType2} onChange={handleChange} id='comName' placeholder='Product Type'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productDes2' value={formData.productDes2} onChange={handleChange} id='comName' placeholder='Product Description'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productSerial2' value={formData.productSerial2} onChange={handleChange} id='comName' placeholder='Serial No'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productCode2' value={formData.productCode2} onChange={handleChange} id='comName' placeholder='NxOptics Code'  autoComplete='autocomplete '/>
</div>


</div>

<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
    <input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="3" readOnly/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productType3' value={formData.productType3} onChange={handleChange} id='comName' placeholder='Product Type'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productDes3' value={formData.productDes3} onChange={handleChange} id='comName' placeholder='Product Description'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productSerial3' value={formData.productSerial3} onChange={handleChange} id='comName' placeholder='Serial No'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productCode3' value={formData.productCode3} onChange={handleChange} id='comName' placeholder='NxOptics Code'  autoComplete='autocomplete '/>
</div>


</div>

<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
    <input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="4" readOnly/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productType4' value={formData.productType4} onChange={handleChange} id='comName' placeholder='Product Type'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productDes4' value={formData.productDes4} onChange={handleChange} id='comName' placeholder='Product Description'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productSerial4' value={formData.productSerial4} onChange={handleChange} id='comName' placeholder='Serial No'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productCode4' value={formData.productCode4} onChange={handleChange} id='comName' placeholder='NxOptics Code'  autoComplete='autocomplete '/>
</div>


</div>


<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
    <input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="5" readOnly/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productType5' value={formData.productType5} onChange={handleChange} id='comName' placeholder='Product Type'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productDes5' value={formData.productDes5} onChange={handleChange} id='comName' placeholder='Product Description'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productSerial5' value={formData.productSerial5} onChange={handleChange} id='comName' placeholder='Serial No'  autoComplete='autocomplete '/>
</div>

<div className='px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext ' name='productCode5' value={formData.productCode5} onChange={handleChange} id='comName' placeholder='NxOptics Code'  autoComplete='autocomplete '/>
</div>


</div>

<p className='pt-4 font-bold-4 font-size-sm'>Please state the problem for each unit</p>

<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="1" readOnly/>
</div>

<div className='px-1 pt-1 position-relative col-10'>
<input type='text' className='form-control form-innertext ' name='description1' value={formData.description1} onChange={handleChange} id='comName' placeholder='Failure desciption'  autoComplete='autocomplete '/>
</div>

</div>

<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="2" readOnly/>
</div>

<div className='px-1 pt-1 position-relative col-10'>
<input type='text' className='form-control form-innertext ' name='description2' value={formData.description2} onChange={handleChange} id='comName' placeholder='Failure desciption'  autoComplete='autocomplete '/>
</div>

</div>

<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="3" readOnly/>
</div>

<div className='px-1 pt-1 position-relative col-10'>
<input type='text' className='form-control form-innertext ' name='description3' value={formData.description3} onChange={handleChange} id='comName' placeholder='Failure desciption'  autoComplete='autocomplete '/>
</div>

</div>

<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="4" readOnly/>
</div>

<div className='px-1 pt-1 position-relative col-10'>
<input type='text' className='form-control form-innertext ' name='description4' value={formData.description4} onChange={handleChange} id='comName' placeholder='Failure desciption'  autoComplete='autocomplete '/>
</div>

</div>

<div className='d-flex gap-2'>

    <div className='col-1 px-1 pt-1 position-relative'>
<input type='text' className='form-control form-innertext text-center' name='companyname' id='comName' value="5" readOnly/>
</div>

<div className='px-1 pt-1 position-relative col-10'>
<input type='text' className='form-control form-innertext ' name='description5' value={formData.description5} onChange={handleChange} id='comName' placeholder='Failure desciption'  autoComplete='autocomplete '/>
</div>

</div>

     </div>

     <div class="modal-footer">
        <input type="submit" class="btn btn-primary"  style={{width:"100px"}} value="Send"/>
        <input type="reset" class="btn btn-danger" data-bs-dismiss="modal" style={{width:"100px"}} value="Close"/>
      </div>

    </form>
      </div>

     

    </div>
  </div>

  {/* Success message */}
  <div className="message-sent" id="successMsg">

<div className="card-message">

  <div className="d-flex justify-content-center">
<TiTickOutline className="messagetick-mark"/>
</div>

  <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services. 
  Your inquiry is valuable to us, and our team shall get back to you soon.</p>

  <div className="d-flex justify-content-center pt-5 pb-1">
    <button type="button" className="btn btn-danger" onClick={() => setEmailSent(false)}>Go Back</button>
  </div>

</div>


</div>
</div>
    </>
  )
}

export default RMAForm
