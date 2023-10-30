import React,{useState} from 'react';
import {TiTickOutline} from 'react-icons/ti';



const EnquireForm = ({pathNum, productN}) => {

  const [formData, setFormData] = useState({
    companyname: '',
    location: '',
    mobilenumber: '',
    emailid: '',
    msg: '',
    pathNum: pathNum,
    productN: productN,
  });

  // const [name, setName] = useState("");
  // const [mobilenum, setMobilenum] = useState("");
  // const [address, setAddress] = useState("");
  // const [emailad, setEmailad] = useState("");

  // const [storeformcon, setStoreformcon] = useState("");

  // alertmessage
  const [alertname, setalertName] = useState("");
  const [alertMobilenum, setalertMobilenum] = useState("");
  const [alertaddress, setalertAddress] = useState("");
  const [alertemailad, setalertEmailad] = useState("");
  const [alertmsg, setalertMsg] = useState("");
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    // document.getElementById('successMsg').style.top="0px";


    // const regname = /^[A-Za-z0-9.,\s]+$/;
    // if (regname.test(name)) {
    //     setalertName("");
        

    // } else if (!regname.test(name) && name === "") {
    //     setalertName("Please enter name");
    //   e.preventDefault();
  
    // } else {
    //     setalertName("Invalid value");
    //   e.preventDefault();
  
    // }

    // const regphonenumber = /^\d{10}$/;
    // if (regphonenumber.test(mobilenum)) {
    //     setalertMobilenum("");

    // } else if (!regphonenumber.test(mobilenum) && mobilenum === "") {
    //     setalertMobilenum("Please enter mobile number");
    //   e.preventDefault();
  
    // } else {
    //     setalertMobilenum("Please enter 10 digit mobile number");
    //   e.preventDefault();
  
    // }

    // const reglocation = /^[A-Za-z0-9\s#/,.-]+$/;
    // if (reglocation.test(address)) {
    //     setalertAddress("");

    // } else if (!reglocation.test(address) && address === "") {
    //     setalertAddress("Please enter your address");
    //   e.preventDefault();
  
    // } else {
    //     setalertAddress("Invalid Address");
    //   e.preventDefault();
  
    // }

    
    // const regemailad = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2-8}])?/g;
    // if (regemailad.test(emailad)) {
    //     setalertEmailad("");

    // } else if (!regemailad.test(emailad) && emailad === "") {
    //     setalertEmailad("Please enter your Email-id");
    //   e.preventDefault();
  
    // } else {
    //     setalertEmailad("Invalid Email-id");
    //   e.preventDefault();
  
    // }
    if (!formData.location || !formData.msg || !formData.companyname || !formData.emailid || !formData.mobilenumber) {
      // Display appropriate alerts for missing fields
      setalertAddress(!formData.location ? 'Please Enter a Location' : '');
      setalertMsg(!formData.msg ? 'Please Enter a Message' : '');
      setalertName(!formData.companyname ? 'Company name is required' : '');
      setalertEmailad(!formData.emailid ? 'Email is required' : '');
      setalertMobilenum(!formData.mobilenumber ? 'Mobile Number is required' : '');
      return; // Do not proceed with the submission
    }
    try {
      const response = await fetch("https://yourchoicewebsites.com/nxopt/nx/mail.php", {
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
       
    setalertName('');
    setalertMobilenum('')
    setalertAddress('')
    setalertEmailad('')
    setalertMsg('')
    
    setFormData({
      companyname: '',
      location: '',
      mobilenumber: '',
      emailid: '',
      msg: '',
    });
      }

    //   const resetAll=()=>{
   
    //     setalertName('');
    //     setalertMobilenum('')
    //     setalertAddress('')
    //     setalertEmailad('')
    //     setalertMsg('')
    
    //     setFormData({
    //       companyname: '',
    //       location: '',
    //       mobilenumber: '',
    //       emailid: '',
    //       msg: '',
    //     });
    // }

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
<input type='text' className='form-control mt-2 mb-2' name='pathNum' value={pathNum} onChange={handleInputChange} required/>
</div>

<div className='col-6'>
<label>Your Product Part Name</label>
<input type='text' className='form-control mt-2 mb-2' name='productN' value={productN} onChange={handleInputChange} required/>
</div>

<div className=' col-12 px-2 pt-4 position-relative'>
<input type='text' className='form-control form-innertext' name='companyname' id='comName' placeholder='Enter Company Name' 
 value={formData.companyname}  
 onChange={handleInputChange}  autoComplete='autocomplete '/>
<p className='alert-message'>{alertname}</p>
</div>

<div className='col-md-12 col-12 px-2 pt-4 position-relative'>
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
<textarea rows='3' cols='3' className='form-control form-innertext' name='msg' value={formData.msg} onChange={handleInputChange} id='message' placeholder='Enter Description ...' autoComplete='autocomplete'></textarea>
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
    <button type="button" className="btn btn-danger" onClick={hidePop}>Go Back</button>
  </div>

</div>


</div>

</div>


    </>
  )
}

export default EnquireForm;
