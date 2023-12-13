import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { IoChevronBackCircleOutline } from "react-icons/io5";


const MegaMenu = () => {

  const openmenu=()=>{
const storemenu = document.getElementById('openMobileMenu');
storemenu.classList.toggle('openmobilemenu');

  }


  return (
    <>
    <nav>
    <div className='section-1'>
      <h5>Megamenu .<small style={{fontSize:"10px", color:"red",fontWeight:"500"}}>beta</small></h5>
    </div>

    <div className='section-2' >
      <ul className='list' id="openMobileMenu">
    
        <Link to="/" className='linkdecor-disable'><li className='items-list'>Home</li></Link>
    
        <Link to="/" className='linkdecor-disable'><li className='items-list dropdown'>Product
 
                
                <ul className='drop-item' id='maindrop'>
                  {/* <IoChevronBackCircleOutline className='close-icons' onClick={close}/> */}

{/* Main Dropdown */}
<li className='item-drop'>Main Dropdown 1 


{/* First Dropdown */}
<ul className='sub-dropdown'>
    <li className='sub-drops'>Sub Service 1

        {/* Second Dropdown */}
    <ul className='inner-item'>
      <li className='inner-menus'>Sub Service inner page 1

        {/* Third Dropdown */}
      <ul className='inner-menu-sub-items'>
        <li className='sub-item-list'>Sub Items inner menu 1</li>
        <li className='sub-item-list'>Sub Items inner menu 2</li>
        <li className='sub-item-list'>Sub Items inner menu 3</li>
        <li className='sub-item-list'>Sub Items inner menu 4</li>
        <li className='sub-item-list'>Sub Items inner menu 5</li>
      </ul>
      </li>
      <li className='inner-menus'>Sub Service inner page 2</li>
      <li className='inner-menus'>Sub Service inner page 3</li>
      <li className='inner-menus'>Sub Service inner page 4</li>
    </ul>
    </li>
    
    <li className='sub-drops'>Sub Service 2</li>

    <li className='sub-drops'>Sub Service 3 hello</li>
</ul>
</li>

<li className='item-drop'>Main Dropdown 2

{/* First Dropdown */}
<ul className='sub-dropdown'>
  <li className='sub-drops'>Sub Service 1</li>

  <li className='sub-drops'>Sub Service 2
  
  {/* Second Dropdown */}
  <ul className='inner-item'>
    <li className='inner-menus'>Sub inner menu 1</li>
    <li className='inner-menus'>Sub inner menu 2</li>
    <li className='inner-menus'>Sub inner menu 3</li>
    <li className='inner-menus'>Sub inner menu 4</li>
    <li className='inner-menus'>Sub inner menu 5</li>
  </ul>

  </li>

  <li className='sub-drops'>Sub Service 3</li>

</ul>
</li>

<li className='item-drop'>Main Dropdown 3</li>

<li className='item-drop'>Main Dropdown 4</li>

        </ul>
        </li>
        </Link>
    
        <Link to="/" className='linkdecor-disable'><li className='items-list'>About us</li></Link>
        <Link to="/" className='linkdecor-disable'><li className='items-list'>Contact</li></Link>
    
      </ul>
    </div>

    <div className='menubar-mobile'>
    <IoMdMenu className="icon" onClick={openmenu}/>
    </div>

    </nav>
    </>
  )
}

export default MegaMenu;
