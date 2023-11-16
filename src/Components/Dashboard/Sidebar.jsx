import React from 'react';
import {BiHomeAlt2, } from 'react-icons/bi';

import {FiEdit} from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { LuView } from "react-icons/lu";
const Sidebar = () => {

    
    const toggleDropdown = (dropdownId) => {
      const dropbutton = document.getElementById(dropdownId);
      dropbutton.classList.toggle('opensubmenu');
    
      // Check the classList to determine the state
      if (dropbutton.classList.contains('opensubmenu')) {
        dropbutton.style.backgroundColor = 'white';
        dropbutton.style.color = 'black';
       

        document.addEventListener('click', (event) => closeDropdown(event, dropdownId));
      } else {
        dropbutton.style.backgroundColor = ''; // Reset to default
        dropbutton.style.color = ''; // Reset to default
        document.removeEventListener('click', (e) => closeDropdown(e, dropdownId));
      }
    
      document.addEventListener('click', closeDropdown);


    };
    
    const closeDropdown = (event, dropdownId) => {
      const dropdown = document.getElementById(dropdownId);
    
      if (dropdown && dropdown.contains(event.target)) {
        // Click occurred inside the dropdown, do nothing
        return;
      }
    
      if (dropdown) {
        // Click occurred outside the dropdown, close it
        dropdown.classList.remove('opensubmenu');
        dropdown.style.backgroundColor = ''; // Reset to default
        dropdown.style.color = ''; // Reset to default
    
        // Remove the event listener after closing the dropdown
        document.removeEventListener('click', (event) => closeDropdown(event, dropdownId));
      }

    };
    
  return (
    <>
      <div className='side-bar' id='sidemenu'>

<div className='side-navbar'>
    <ul className='menu'>
        <NavLink className="disble-decoration" to="/Dashboard"><li className='items'>
        <BiHomeAlt2 className="icons"/> <span className='resp'>Home</span>
   
        </li>
        
        </NavLink>
        
        <NavLink className="disble-decoration" to="" >
        <li className='items dropmenu' onClick={()=> toggleDropdown('dropitems1')} id='dropitems1'>
        <TbCategory className="icons"/> <span className='resp'>Main Category <IoIosArrowDown/></span>
        <ul className='submenu' >
        <Link to='/Dashboard/AddNewCategory' className='disble-decoration'><li>Add New Category</li></Link>
        <Link to='/Dashboard/CategoryProductpage' className='disble-decoration'><li>Create Product Page</li></Link>
        </ul>
        </li>
        </NavLink>

        <NavLink className="disble-decoration" to="" >
        <li className='items dropmenu' onClick={()=> toggleDropdown('dropitems2')} id='dropitems2'>
        <TbCategory className="icons"/> <span className='resp'>Sub  Category <IoIosArrowDown/></span>
        <ul className='submenu' >
        <Link to="/Dashboard/AddNewSubCategory" className='disble-decoration'><li>Add New Sub-category</li></Link>
        <Link to="/Dashboard/SubCategoryProductpage" className='disble-decoration'><li>Create Product Page</li></Link>
        </ul>
        </li>
        </NavLink>

        <NavLink className="disble-decoration" to="" >
        <li className='items dropmenu' onClick={()=> toggleDropdown('dropitems3')} id='dropitems3'>
        <TbCategory className="icons"/> <span className='resp'>Sub  Category Items <IoIosArrowDown/></span>
        <ul className='submenu' >
        <Link to="/Dashboard/AddCategoryItems" className='disble-decoration'><li>Add New Category Items</li></Link>
        <Link to="/Dashboard/CategoryItemProductpage" className='disble-decoration'><li>Create Product Page</li></Link>
        </ul>
        </li>
        </NavLink>


        <NavLink className="disble-decoration " to="/Dashboard/AddProducts"><li className='items'><FiEdit className="icons"/> <span className='resp'>Add New Product</span></li></NavLink>
        <NavLink className="disble-decoration " to="/Dashboard/ViewProduct"><li className='items'><LuView className="icons"/> <span className='resp'>View Products</span></li></NavLink>
    </ul>
</div>
        </div> 
    </>
  )
}

export default Sidebar
