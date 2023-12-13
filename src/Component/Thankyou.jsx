import React from 'react';
import {TiTickOutline} from 'react-icons/ti';
import { Link } from 'react-router-dom';


const Thankyou = () => {
  return (
    <>
       <div className="message-sent">

<div className="card-message">

  <div className="d-flex justify-content-center">
<TiTickOutline className="messagetick-mark"/>
</div>

  <p className="successMsgTest">Thank you so much for taking the time to fill out the form! We truly appreciate your interest in our services. 
  Your inquiry is valuable to us, and our team shall get back to you soon.</p>

  <div className="d-flex justify-content-center pt-5 pb-1">
    <Link to='/' className="btn btn-danger">Go Back</Link>
  </div>

</div>


</div>
    </>
  )
}

export default Thankyou
