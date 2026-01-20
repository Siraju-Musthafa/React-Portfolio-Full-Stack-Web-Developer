import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'
import unterline from '../assets/nav_underline.svg'
import { Link } from "react-scroll";
import menuicon from '../assets/menu_open.svg'
import menuclose from '../assets/menu_close.svg'



function Navbar() {
  const [menu,setMenu]=useState('home')
  const menuRef=useRef();
  const openmenu=()=>{
    menuRef.current.style.right='0';
  }
  const closemenu=()=>{
    menuRef.current.style.right='-350px';
  }

  return (
    <div id='navbar' className='navbar'>
         {/* <img src={logo} alt='image'/> */}
         <div className='logoname'>SRJ</div>
       
        <img src={menuicon} alt='' className='nav-mob-open' onClick={openmenu}></img>
         <ul className='nav-menu' ref={menuRef}>
            <img src={menuclose} alt="" className="nav-mob-close" onClick={closemenu}/>
            <li> <Link className='anchor-link' to="home"smooth={true} duration={500} ><p onClick={()=>setMenu('home')}>Home</p>{menu==='home'?<img src={unterline} alt='' />:<></>}</Link></li>
            <li><Link  className='anchor-link'  to="about" smooth duration={500} offset={-80}><p onClick={()=>setMenu('about')}>About Me{menu==='about'?<img src={unterline} alt=''/>:<></>}</p></Link></li>
            <li><Link  className='anchor-link'  to="services" smooth duration={500} offset={-80}><p onClick={()=>setMenu('service')}>Service</p>{menu==='service'?<img src={unterline} alt='' />:<></>}</Link></li>
            <li><Link  className='anchor-link'  to='work' smooth={true} duration={500} offset={-80}><p onClick={()=>setMenu('portfolio')}>Portfolio</p></Link>{menu==='portfolio'?<img src={unterline} alt='' />:<></>}</li>
            <li><Link  className='anchor-link'  to='contact' smooth duration={500}><p onClick={()=>setMenu('contact')}>Contact</p></Link>{menu==='contact'?<img src={unterline} alt='' />:<></>}</li>
         </ul>
         <div className='nav-connect'><Link className='anchor-link' to='contact' smooth duration={500} offset={-80}>Connect With Me</Link></div>
    </div>
  )
}

export default Navbar
