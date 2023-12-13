import React, { useState } from 'react';
import {TiTickOutline} from 'react-icons/ti';


const RequestForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email:'',
    name:'',
    phone:'',
    msg:'',
    selectcat:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const hidePop = ()=>{
        document.getElementById("successMsg").style.top="-100%";
          }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://nxoptics.com/nx-email/request.php", {
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
      <div class="modal fade" id="requestform">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Request Your Query</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
      </div>

      <div class="modal-body p-1">
    <form onSubmit={handleSubmit}>
          <div className='row px-4 py-2'>

          <div className='col-md-4 col-7 px-2 pt-4 position-relative'>
<select  class="form-select form-innertext" id="sel2 " name="selectcat" value={formData.selectcat} onChange={handleChange}>
   <option value='' className='form-innertext'>Select Product Catgory</option>
      <option value='transceiver' className='form-innertext'>Transceiver</option>
      <option value='Optical Cables / Patch Cords' className='form-innertext'>Optical Cables / Patch Cords</option>
      <option value='telecom-switches ' className='form-innertext'>Telecom Switches </option>
      <option value='industrial-switches' className='form-innertext'>Industrial Switches</option>
      <option value='server-storage' className='form-innertext'>Server & Storage</option>
      <option value='network-security' className='form-innertext'>Network & Security</option>

    </select>
   
</div>

          <div className='col-md-4 col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='companyName' value={formData.companyName} onChange={handleChange} id='comName' placeholder='Company name' 
 autoComplete='autocomplete '/>
</div>

    <div className='col-md-4 col-12 px-2 pt-4 position-relative'>
    <input type='text' className='form-control form-innertext' name='name' value={formData.name} onChange={handleChange} id='comName' placeholder='Enter your name' 
    autoComplete='autocomplete '/>
    </div>


    <div className='col-md-6 col-12 px-2 pt-4 position-relative'>
    <input type='text' className='form-control form-innertext' name='email' value={formData.email} onChange={handleChange} id='comName' placeholder='Enter your email@address' 
    autoComplete='autocomplete '/>
    </div>

    <div className='col-md-6 col-12 px-2 pt-4 position-relative'>
    <input type='text' className='form-control form-innertext' name='phone' value={formData.phone} onChange={handleChange} id='comName' placeholder='Enter your contact number' 
    autoComplete='autocomplete '/>
    </div>


<div className='col-md-12 col-12 px-2 pt-4 position-relative pb-4'>
<textarea rows='4' cols='4' className='form-control form-innertext'  name='msg' value={formData.msg} onChange={handleChange} id='message' placeholder='Mention Your Query' autoComplete='autocomplete'></textarea>
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
    <button type="button" className="btn btn-danger" onClick={hidePop}>Go Back</button>
  </div>

</div>


</div>
</div>
    </>
  )
}

export default RequestForm
