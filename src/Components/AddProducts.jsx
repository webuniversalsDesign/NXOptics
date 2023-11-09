import React,{useState} from 'react';

import DashboardNavbar from './DashboardNavbar';
import { Link } from 'react-router-dom';
import Texteditor from './Texteditor';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';

const AddProducts = () => {

  
  const formBlog=(e)=>{
    e.preventDefault();
}


const [counter, setCounter] = useState(1);

const handleClickADD = (e) => {
  setCounter(counter + 1);
    e.preventDefault();

//   console.log(counter);
};

const handleClickREMOVE = (e) => {
    setCounter(counter - 1);
    e.preventDefault();

    // console.log(counter);
  };

  return (
    <>
      <DashboardNavbar/>

<div className='container  leave-navbar-2'>




    <div className='row'>
    <div className='col-2'></div>
    <div className='col-10'>

<div className='d-flex py-5 px-5'>
<Link to="/Dashboard" className='nolink-dec'>Dashboard / </Link>
&nbsp;
&nbsp;
  <Link to="" className='nolink-dec'>Add Product</Link>
</div>

    <div className='shadow p-5 mb-4' style={{borderRadius:"10px"}}>
        <div className='product-table'>
            <h2>Add Product</h2>
            <Link to="/Dashboard/ViewProduct" className="btn btn-primary">View Products</Link>
        </div>
<div className=' mt-5'>
  <form onSubmit={formBlog}>

  <h5 className='pb-1'>Menu  Items Category</h5>
  <div className='row pt-5 align-items-center'>
          <div className='col-md-5 col-12'>
             <input type="text" className="form-control" id="name" placeholder="Enter New Product Category" name="name"/>
          </div>

          <div className='col-md-2 col-12'>
            <div className='d-flex justify-content-center' style={{width:'100%'}}>
            <div className='bars'/>
            </div>
            <div className='d-flex justify-content-center position-relative' style={{width:'100%'}}>
            <div className='over-gray'/>
            <p className='orsymbol'>or</p>
            </div>
            <div className='d-flex justify-content-center' style={{width:'100%'}}>
            <div className='bars'/>
            </div>
          </div>

          <div className='col-md-5 col-12'>
          <select className="form-select">
     <option value="">Select Product Category</option>
     <option value="product1">Protuct1</option>
     <option value="product2">Protuct2</option>
     <option value="product3">Protuct3</option>
   </select>
          </div>

        </div>

        <div className='row pt-3 align-items-center'>
          <div className='col-md-5 col-12'>
             <input type="text" className="form-control" id="name" placeholder="Enter New Product Item" name="name"/>
          </div>

          <div className='col-md-2 col-12'>
            <div className='d-flex justify-content-center' style={{width:'100%'}}>
            <div className='bars'/>
            </div>
            <div className='d-flex justify-content-center position-relative' style={{width:'100%'}}>
            <div className='over-gray'/>
            <p className='orsymbol'>or</p>
            </div>
            <div className='d-flex justify-content-center' style={{width:'100%'}}>
            <div className='bars'/>
            </div>
          </div>

          <div className='col-md-5 col-12'>
          <select className="form-select">
     <option value="">Select Product Items</option>
     <option value="product1">Protuct1</option>
     <option value="product2">Protuct2</option>
     <option value="product3">Protuct3</option>
   </select>
          </div>

        </div>

        <div className='row pt-3 align-items-center'>
          <div className='col-md-5 col-12'>
             <input type="text" className="form-control" id="name" placeholder="Enter New  Sub-Item" name="name"/>
          </div>

          <div className='col-md-2 col-12'>
            <div className='d-flex justify-content-center' style={{width:'100%'}}>
            <div className='bars'/>
            </div>
            <div className='d-flex justify-content-center position-relative' style={{width:'100%'}}>
            <div className='over-gray'/>
            <p className='orsymbol'>or</p>
            </div>
            <div className='d-flex justify-content-center' style={{width:'100%'}}>
            <div className='bars'/>
            </div>
          </div>

          <div className='col-md-5 col-12'>
          <select className="form-select">
     <option value="">Select Sub-items</option>
     <option value="product1">Protuct1</option>
     <option value="product2">Protuct2</option>
     <option value="product3">Protuct3</option>
   </select>
          </div>

        </div>

        <div className='row pt-4'>
    <div className="col-4">
             <input type="text" className="form-control" id="name" placeholder="Enter Product Name" name="name"/>
    </div>

    <div className="col-4">
             <input type="text" className="form-control" id="partnumber" placeholder="Enter Part Number" name="partnumber"/>
    </div>

    <div className="col-4">
             <input type="file" className="form-control" id="imagefile" placeholder="Upload Product Image" name="imagefile"/>
    </div>

        </div>



        <h5 className='pt-5 pb-1'>Add Product Block Diagrams</h5>

        <div className='row py-3'>
  <div className='col-6'>
<input type='text' className='form-control'  placeholder='Enter Block Diagram Title' id='productId' name='idproduct'/>
  </div>

  <div className='col-6'>
<input type='file' className='form-control'   id='productId' name='idproduct'/>
  </div>
</div>

{counter > 0 && Array.from(Array(counter)).map((c, index) => {
  return(<>
    <div className='row py-3'>
  <div className='col-6'>
<input type='text' className='form-control' key={c}  placeholder='Enter Block Diagram Title' id='productId' name='idproduct'/>
  </div>

  <div className='col-6'>
<input type='file' className='form-control'  key={c}  id='productId' name='idproduct'/>
  </div>
</div>

  </>) 
})}



<div className="d-flex justify-content-center pt-5 pb-1">

<button onClick={handleClickADD} className="btn btn-primary"><AiOutlinePlusCircle className='mat-icons'/></button>

&nbsp;
&nbsp;
&nbsp;
        <button onClick={handleClickREMOVE} className="btn btn-danger"><AiOutlineMinusCircle className='mat-icons'/></button>
</div>
<hr/>

<Texteditor/>

<div className='pt-2 pb-2 d-flex justify-content-end'>
<input type='submit' className='btn btn-primary' value="Submit"/> 
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

export default AddProducts;
