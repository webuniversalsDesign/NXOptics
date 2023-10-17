import React from 'react';



const EnquireForm = () => {
  return (
    <>

<div className="modal fade" id="myModal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Enquire Now </h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
      <form>
 <input type='text' className='form-control mt-2 mb-2' placeholder='Enter Your Name' required/>
        <div className='row'>
<div className='col-6'>
<input type='number' className='form-control mt-2 mb-2' placeholder='Enter Your Mobile Number' required/>
</div>
<div className='col-6'>
<input type='email' className='form-control mt-2 mb-2' placeholder='Enter Your Email' required/>

      </div>
    </div>
      
       <textarea rows="2" cols='2' className='form-control' placeholder='Enter Your Message' required></textarea>
<input type='submit' className='btn btn-danger mt-2' value="Send" style={{width:"200px"}}/>
      </form>
       </div>



    </div>
  </div>
</div>


    </>
  )
}

export default EnquireForm;
