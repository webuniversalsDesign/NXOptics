import React,{useState} from 'react';
import {TiTickOutline} from 'react-icons/ti';



const EnquireForm = ({pathNum, productN}) => {

  const [formData, setFormData] = useState({
    companyName: '',
    location: '',
    phone: '',
    email: '',
    msg: '',
    pathNum: pathNum,
    productN: productN,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://nxoptics.com/nx-email/enquire.php", {
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



<div className="modal fade" id="myModal2" >
  <div className="modal-dialog modal-dialog-centered" >
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Enquire Now</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      <form onSubmit={handleSubmit}>

        <div className='row'>
        <div className='col-6'>
        <label>Your Product Part Number</label>
<input type='text' className='form-control mt-2 mb-2' name='pathNum' value={pathNum} onChange={handleChange} required/>
</div>

<div className='col-6'>
<label>Your Product Part Name</label>
<input type='text' className='form-control mt-2 mb-2' name='productN' value={productN} onChange={handleChange} required/>
</div>

<div className=' col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='companyName' id='comName' placeholder='Enter Company Name' 
 value={formData.companyName}  
 onChange={handleChange}  autoComplete='autocomplete '/>
<p className='alert-message'></p>
</div>

<div className='col-md-12 col-12 px-2 pt-4 position-relative'>
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
<textarea rows='3' cols='3' className='form-control form-innertext' name='msg' value={formData.msg} onChange={handleChange} id='message' placeholder='Enter Description ...' autoComplete='autocomplete'></textarea>
</div>

    </div>
      

<input type='submit' className='btn btn-danger mt-2' value="Send" style={{width:"200px"}}/>
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
    <button type="button" className="btn btn-danger">Go Back</button>
  </div>

</div>


</div>

</div>


    </>
  )
}

export default EnquireForm;
