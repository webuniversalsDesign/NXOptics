import React from 'react';
import logoIcon from '../img/logo/navlogo.png';

import {IoLogOutOutline} from 'react-icons/io5';
import {IoMdArrowDropdown} from 'react-icons/io';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {

     const openmenu =()=> {
      document.getElementById('dropmenu').classList.toggle('open');
      document.getElementById('rotate-up').classList.toggle('rotate');    
       }

       const openmenu1 =()=> {
        document.getElementById('dropmenu1').classList.toggle('open');
        document.getElementById('rotate-up1').classList.toggle('rotate');
         }

         const openmenu2 =()=> {
          document.getElementById('dropmenu2').classList.toggle('open');
          document.getElementById('rotate-up2').classList.toggle('rotate');
          
           }
  
  return (
    <>
<div className='dash-nav'>
<div className='logo'>
    <Link to='/'>
    <img src={logoIcon} alt='img-not-found' />
    </Link>
</div>
<div className='log-navs'>
    <Link to="/">
        <IoLogOutOutline style={{fontSize:"40px",cursor:"pointer"}}/>
    </Link>
</div>
</div>

<div className='side-menu'>
  <ul className='side-menu-items'>
    <Link to="/Dashboard" className='nolink-dec'><li>Home</li></Link>
   
    <li className='side-dropmenu' onClick={openmenu}> 
    Main Category  <IoMdArrowDropdown className='drop-icon' id='rotate-up'/>
    <ul className='inner-cat-items' id='dropmenu'>
      <Link to='/Dashboard/AddNewCategory' className='nolink-dec'><li className='list-drop'>Add New Category</li></Link>
      <Link to='/Dashboard/CategoryProductpage' className='nolink-dec'><li className='list-drop'>Create Product Page</li></Link>
    </ul>
    </li>

<li className='side-dropmenu' onClick={openmenu1}> 
    Sub Category  <IoMdArrowDropdown className='drop-icon' id='rotate-up1'/>
    <ul className='inner-cat-items' id='dropmenu1'>
      <Link to='/Dashboard/AddNewSubCategory' className='nolink-dec'><li className='list-drop'>Add New Sub Category</li></Link>
      <Link to='/Dashboard/SubCategoryProductpage' className='nolink-dec'><li className='list-drop'>Create Product Page</li></Link>
    </ul>
    </li>

<li className='side-dropmenu' onClick={openmenu2}> 
    Sub Category Items  <IoMdArrowDropdown className='drop-icon' id='rotate-up2'/>
    <ul className='inner-cat-items' id='dropmenu2'>
      <Link to='/Dashboard/AddCategoryItems' className='nolink-dec'><li className='list-drop'>Add New Category Items</li></Link>
      <Link to='/Dashboard/CategoryItemProductpage' className='nolink-dec'><li className='list-drop'>Create Product Page</li></Link>
    </ul>
    </li>

    <Link to="/Dashboard/AddProducts" className='nolink-dec'><li>Add Product</li></Link>
    <Link to="/Dashboard/ViewProduct" className='nolink-dec'><li>View Products</li></Link>
  </ul>
</div>

      
    </>
  )
}

export default DashboardNavbar;
