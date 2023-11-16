import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import logoIcon from '../../img/logo/navlogo.png';
import { Link } from 'react-router-dom';


const Topbar = () => {
  const opentoggler = ()=>{
   const menubar= document.getElementById('mainbody')
   menubar.classList.toggle('maintoggle');
if(menubar.classList.contains('maintoggle')){
  document.getElementById('menustyle').classList.add('openmenudashboard');

}else{
  document.getElementById('menustyle').classList.remove('openmenudashboard');

}

   const menumainbody = document.getElementById('sidemenu');
   menumainbody.classList.toggle('sidetoggle');




}
  return (
    <>
      <div className='top-bar'>

  <div className='start-container'>
  <MdOutlineMenu  className='menu-icon' id='menustyle' onClick={opentoggler}/>

  <div className='logo'>
 <Link to="/"><img src={logoIcon} alt="logo-not-found"/></Link> 
  {/* <h5 className='nav-logo'>dashboard .</h5> */}
  </div>
  </div>

  <div className='top-menu-bar'>
    <ul>
      <li>Home</li>
      <li>Logout</li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Topbar
