import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar'
import productImg1 from '../img/products/transceiverCable1.jpg';
import productImg2 from '../img/products/transceiverCable2.jpg';
import productImg3 from '../img/products/transceiverCable3.jpg';
import {AiOutlineDelete} from 'react-icons/ai'
const ViewProduct = () => {
  return (
    <>
         <DashboardNavbar/>

         <div className='container leave-navbar-2'>
  <div className='row'>
    <div className='col-2'></div>
    <div className='col-10'>
  

<div className='d-flex py-5 px-5'>
<Link to="/Dashboard" className='nolink-dec'>Dashboard / </Link>
&nbsp;
&nbsp;
  <Link to="" className='nolink-dec'>View Product</Link>
</div>
    <div className='shadow p-5' style={{borderRadius:"10px"}}>
        <div className='product-table'>
            <h2>View Products</h2>
            {/* <Link to="/Dashboard/AddProducts" className="btn btn-primary">Add Product</Link> */}
        </div>
<hr/>
<div className='table-responsive card'>
<table className="table table-hover">
    <thead>
      <tr>
        <th><p className='t-head'></p>Sl.no</th>
        <th><p className='t-head'></p>Product Name</th>
        <th><p className='t-head'></p>Part Number</th>
        <th><p className='t-head'>Product Image</p></th>
        <th><p className='t-head'></p>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className='table-text'>
        <td>01</td>
        <td>10G SFP+ Direct Attach Cable (DAC) Hot Pluggable, Twinax Copper Cables, Passive 0.5~10M</td>
        <td>NXODAC-10G-SPSP-Pxx-xx</td>
        <td>
        <div className='d-flex justify-content-center'>
       <img src={productImg1} alt='img-not-found' className='table-img'/>
        </div>
     
        </td>
        <td><div className='d-flex justify-content-center'><AiOutlineDelete className='table-del-icon'/></div></td>

      </tr>
      <tr className='table-text'>
        <td>02</td>
        <td>10G SFP+ Direct Attach Cable (DAC) Hot Pluggable, Twinax Copper Cables, Passive 0.5~10M</td>
        <td>NXODAC-10G-SPSP-Pxx-xx</td>
        <td>
        <div className='d-flex justify-content-center'>
<img src={productImg2} alt='img-not-found' className='table-img'/>
        </div>
            
        </td>
        <td><div className='d-flex justify-content-center'><AiOutlineDelete className='table-del-icon'/></div></td>

      </tr>
      <tr className='table-text'>
        <td>03</td>
        <td>10G SFP+ Direct Attach Cable (DAC) Hot Pluggable, Twinax Copper Cables, Passive 0.5~10M</td>
        <td>NXODAC-10G-SPSP-Pxx-xx</td>
        <td>
        <div className='d-flex justify-content-center'>
<img src={productImg3} alt='img-not-found' className='table-img'/>
        </div>
            
        </td>
        <td><div className='d-flex justify-content-center'><AiOutlineDelete className='table-del-icon'/></div></td>

      </tr>
    </tbody>
  </table>
</div>

    </div>


    
    </div>
  </div>
</div>


    </>
  )
}

export default ViewProduct
