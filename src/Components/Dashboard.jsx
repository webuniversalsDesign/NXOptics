import React from 'react';

import { Link } from 'react-router-dom';
import Topbar from '../Components/Dashboard/Topbar';
import Sidebar from '../Components/Dashboard/Sidebar';

const Dashboard = () => {
  return (
    <>
       <div id="root">
<div className='dashboard'>
<Topbar/>
<Sidebar/>

<div className='main-content container-fluid' id='mainbody'>
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
