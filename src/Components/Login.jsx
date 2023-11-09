import React from 'react';
import { Link } from 'react-router-dom';
import {FaUserEdit} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';

const Login = () => {
  return (
    <>
      <div className='login-bg'>
<div className='login-form p-2'>
<h5 className='pb-4'>Welcome to NX Optics!</h5>
<p></p>
  <form>
  <div className='input-custom'>
      <input type='text' 
  placeholder='Enter Username or ID' 
  name='username' 
  autoComplete='autocomplete' 
  id='usernameId' 
  className='form-control mb-2 custom-input' />
  <FaUserEdit className="icon"/>
  </div>

  <div className='input-custom'>
    <input type='password' 
  placeholder='Enter  Password' 
  name='username' 
  autoComplete='autocomplete' 
  id='usernameId' 
  className='form-control mb-4 custom-input' />
  <RiLockPasswordFill className="icon"/> 
  </div>


<div className='d-flex justify-content-between custom-btn'>
<input type='submit' className='btn btn-danger custom-button' value="Submit"/> &nbsp; &nbsp;
<Link to='/' className='btn btn-danger custom-button'>Back to Home</Link>
</div>

  </form>



</div>
      </div>
    </>
  )
}

export default Login;
