import React,{useState} from 'react'
import DashboardNavbar from './DashboardNavbar'
import Texteditor from './Texteditor';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Topbar from '../Components/Dashboard/Topbar';
import Sidebar from '../Components/Dashboard/Sidebar';

const CategoryProductpage = () => {
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
      if (counter > 1) {
        setCounter(counter - 1);
    }
        e.preventDefault();
    
        // console.log(counter);
      };
  return (
    <>
   
   
   <div id="root">
<div className='dashboard'>
<Topbar/>
<Sidebar/>

<div className='main-content container-fluid' id='mainbody'>
 <div className='d-flex px-2'>
<Link to="/Dashboard" className='nolink-dec'>Dashboard / </Link>
&nbsp;
&nbsp;
  <Link to="" className='nolink-dec'>Main Category Product Details</Link>
</div>
    <div className='shadow px-5 pt-5 pb-3 mt-4 mb-5'>
       <form onSubmit={formBlog}>

       <h2 >Add Category Product Details</h2>
       <hr/>
<div className='col-4'>
<select className="form-select">
     <option value="">Select Main Category</option>
     <option value="product1">Protuct1</option>
     <option value="product2">Protuct2</option>
     <option value="product3">Protuct3</option>
   </select>
</div>

       <h5 className='pt-5'>Add Product Details</h5>
       <div className='row pt-2'>
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

       <h5 className='pt-5'>Add Product Block Diagrams</h5>


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

<div className='pt-2 d-flex justify-content-end'>
<input type='submit' className='btn btn-primary' value="Submit"/> 
</div>

    </form>
    </div>

          </div>

        </div>
       </div>
   
   
  
  
    </>
  )
}

export default CategoryProductpage;
