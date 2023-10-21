import React from 'react';
import {TiTickOutline} from 'react-icons/ti';


const EnquireForm = ({pathNum, productN}) => {
  const sendEmail = (e) => {
    e.preventDefault();
    
    document.getElementById('successMsg').style.top="0px";
  
  }
 
  const hidePop = ()=>{
    document.getElementById("successMsg").style.top="-100%";
      }

  return (
    <>



<div className="modal fade" id="myModal2">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Enquire Now {pathNum}</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      <form onSubmit={sendEmail}>

        <div className='row'>
        <div className='col-6'>
        <label>Your Product Part Number</label>
<input type='text' className='form-control mt-2 mb-2' value={pathNum} required/>
</div>

<div className='col-6'>
<label>Your Product Part Name</label>
<input type='text' className='form-control mt-2 mb-2' value={productN} required/>
</div>

<div className='col-12'>
<input type='text' className='form-control mt-2 mb-2' placeholder='Enter Your Name' />
</div>

<div className='col-6'>
<input type='number' className='form-control mt-2 mb-2' placeholder='Enter Your Mobile Number' />
</div>
<div className='col-6'>
<input type='email' className='form-control mt-2 mb-2' placeholder='Enter Your Email' />

      </div>
    </div>
      
       <textarea rows="2" cols='2' className='form-control' placeholder='Enter Your Message' ></textarea>
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
