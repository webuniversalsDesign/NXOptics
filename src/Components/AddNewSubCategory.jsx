import React from 'react'
import DashboardNavbar from './DashboardNavbar'

const AddNewSubCategory = () => {
  return (
    <>
      <DashboardNavbar/>
      <div className='container leave-navbar-2'>
  <div className='row'>
    <div className='col-2'></div>
    <div className='col-10'>
    <div className='body-center'>
<div className='shadow p-3 mb-4' style={{borderRadius:"10px"}}>
<select className="form-select">
     <option value="">Select Main Category</option>
     <option value="product1">Protuct1</option>
     <option value="product2">Protuct2</option>
     <option value="product3">Protuct3</option>
   </select>
</div>

<div className='shadow p-3' style={{borderRadius:"10px"}}>
<h5>Add New Sub Category</h5>
<hr/>
<form>
<input type='text' className='form-control' placeholder='Enter New Sub Category Name' autoComplete='autocomplete'/>
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

export default AddNewSubCategory;
