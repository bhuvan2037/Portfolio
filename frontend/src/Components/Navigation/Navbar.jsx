import React, { useState,useRef } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const[setMenu] = useState("home")
  
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }



  return (
    <div className='nav-head'>
    <img className='logo' src={logo} alt=''/>
    <img className='menu nav-mob-open'  src={menu_open}  onClick={openMenu} alt="" srcset="" />
   
        <ul ref={menuRef} className="nav-content">
          <img className='menu nav-mob-close' src={menu_close}  onClick={closeMenu} alt="" srcset="" />
            <li><AnchorLink className='anchor-link'  href='home'><p onClick={()=>{setMenu("home")}}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu("about")}}>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>{setMenu("services")}}>Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu("contact")}}>Contact Me</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
    
  )
}

export default Navbar
