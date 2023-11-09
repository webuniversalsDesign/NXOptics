import React from 'react'
import DashboardNavbar from './DashboardNavbar'

const AddNewCategory = () => {
  return (
    <>
      <DashboardNavbar/>
      <div className='container leave-navbar-2'>
  <div className='row'>
    <div className='col-2'></div>
    <div className='col-10'>
    <div className='body-center'>
<div className='shadow p-3' style={{borderRadius:"10px"}}>
<h5>Add New Category</h5>
<hr/>
<form>
<input type='text' className='form-control' placeholder='Enter New Category Name' autoComplete='autocomplete'/>
<div className='d-flex justify-content-end'>
<input type='submit' value="Submit" className='btn btn-primary mt-3'/>
</div>
</form>    
</div>
    </div>

    
    </div>
  </div>
</div>
    </>
  )
}

export default AddNewCategory
