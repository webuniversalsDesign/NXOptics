import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import {AiOutlineFolderView} from 'react-icons/ai';
import {MdOutlineAddchart} from 'react-icons/md';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar/>
<div className='container leave-navbar-2'>
  <div className='row'>
    <div className='col-2'></div>
    <div className='col-10'>
<div className='row'>

<div className='col-4'>
<Link to="/Dashboard/AddProducts" className='nolink-dec'>
    <div className='shadow p-5' >
      <h5 className='text-center'>Add Products</h5>
    </div>
</Link>
   </div>


 <div className='col-4'>
 <Link to="/Dashboard/ViewProduct" className='nolink-dec'>
    <div className='shadow p-5' >
      <h5 className='text-center'>View Products</h5>
    </div>
    </Link>
  </div>

</div>

 
    
    </div>
  </div>
</div>

    </>
  )
}

export default Dashboard;
