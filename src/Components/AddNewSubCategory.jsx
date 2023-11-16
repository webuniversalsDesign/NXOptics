import React from 'react'
import Topbar from '../Components/Dashboard/Topbar';
import Sidebar from '../Components/Dashboard/Sidebar';

const AddNewSubCategory = () => {
  return (
    <>

<div id="root">
<div className='dashboard'>
<Topbar/>
<Sidebar/>

<div className='main-content container-fluid' id='mainbody'>

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
